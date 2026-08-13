"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const codeLines = [
  { text: "import { Developer } from '@core/human';", color: "text-blue-400" },
  { text: "import { buildDreams } from '@core/skills';", color: "text-blue-400" },
  { text: "", color: "" },
  { text: "const kartik = new Developer({", color: "text-purple-400" },
  { text: "  name: 'Kartik Garg',", color: "text-green-300" },
  { text: "  role: 'Software Engineer',", color: "text-green-300" },
  { text: "  focus: 'Full Stack & AI Agents',", color: "text-green-300" },
  { text: "  stack: ['Java', 'Spring Boot', 'React', 'Next.js', 'PostgreSQL'],", color: "text-yellow-300" },
  { text: "});", color: "text-purple-400" },
  { text: "", color: "" },
  { text: "kartik.execute(buildDreams);", color: "text-sky-300" },
];

export function CodeWindow() {
  const [displayedLines, setDisplayedLines] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedLines(prev => (prev < codeLines.length ? prev + 1 : prev));
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="rounded-xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-2xl shadow-sky-500/10"
    >
      <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="ml-4 text-xs font-mono text-slate-400">kartik.ts</div>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto min-h-[250px]">
        {codeLines.slice(0, displayedLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`whitespace-pre ${line.color}`}
          >
            <span className="text-slate-600 select-none mr-4">{i + 1}</span>
            {line.text}
          </motion.div>
        ))}
        {displayedLines < codeLines.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
          />
        )}
      </div>
    </motion.div>
  );
}
