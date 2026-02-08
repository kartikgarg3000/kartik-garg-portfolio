"use client";

import { motion } from "framer-motion";

export function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-lg mx-auto bg-[#0a0b10] rounded-xl overflow-hidden border border-slate-800 shadow-2xl relative"
    >
      {/* Window Header */}
      <div className="bg-[#111] px-4 py-2 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-slate-500 font-mono">developer.tsx</div>
        <div className="w-8" /> {/* Spacer for centering */}
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto">
        <pre className="font-mono text-xs md:text-sm leading-relaxed">
          <code className="block">
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-400">developer</span>{" "}
            <span className="text-slate-300">=</span>{" "}
            <span className="text-yellow-300">{"{"}</span>
          </code>
          <code className="block pl-4">
            <span className="text-purple-400">name</span>:{" "}
            <span className="text-green-400">"Kartik Garg"</span>,
          </code>
          <code className="block pl-4">
            <span className="text-purple-400">role</span>:{" "}
            <span className="text-green-400">"Full Stack Developer"</span>,
          </code>
          <code className="block pl-4">
            <span className="text-purple-400">skills</span>: [
          </code>
          <code className="block pl-8">
            <span className="text-green-400">"Next.js"</span>,{" "}
            <span className="text-green-400">"React"</span>,{" "}
            <span className="text-green-400">"Node"</span>
          </code>
          <code className="block pl-4">],</code>
          <code className="block pl-4">
            <span className="text-purple-400">available</span>:{" "}
            <span className="text-orange-400">true</span>,
          </code>
          <code className="block pl-4">
            <span className="text-purple-400">location</span>:{" "}
            <span className="text-green-400">"India"</span>
          </code>
          <code className="block">
            <span className="text-yellow-300">{"}"}</span>;
          </code>
          <br />
          <code className="block">
            <span className="text-blue-400">developer</span>.
            <span className="text-yellow-300">createAwesome</span>();
            <span className="animate-pulse inline-block w-2 H-4 bg-primary align-middle ml-1">
              |
            </span>
          </code>
        </pre>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
}
