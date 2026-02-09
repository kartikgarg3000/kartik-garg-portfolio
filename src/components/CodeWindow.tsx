"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  [
    { text: "const", color: "text-pink-400" },
    { text: " ", color: "text-foreground" },
    { text: "developer", color: "text-blue-400" },
    { text: " ", color: "text-foreground" },
    { text: "=", color: "text-muted-foreground" },
    { text: " ", color: "text-foreground" },
    { text: "{", color: "text-yellow-300" },
  ],
  [
    { text: "  ", color: "text-foreground" },
    { text: "name", color: "text-purple-400" },
    { text: ":", color: "text-muted-foreground" },
    { text: " ", color: "text-foreground" },
    { text: '"Kartik Garg"', color: "text-green-400" },
    { text: ",", color: "text-muted-foreground" },
  ],
  [
    { text: "  ", color: "text-foreground" },
    { text: "role", color: "text-purple-400" },
    { text: ":", color: "text-muted-foreground" },
    { text: " ", color: "text-foreground" },
    { text: '"Full Stack Developer"', color: "text-green-400" },
    { text: ",", color: "text-muted-foreground" },
  ],
  [
    { text: "  ", color: "text-foreground" },
    { text: "skills", color: "text-purple-400" },
    { text: ":", color: "text-muted-foreground" },
    { text: " [", color: "text-muted-foreground" },
  ],
  [
    { text: "    ", color: "text-foreground" },
    { text: '"Next.js"', color: "text-green-400" },
    { text: ", ", color: "text-muted-foreground" },
    { text: '"React"', color: "text-green-400" },
    { text: ", ", color: "text-muted-foreground" },
    { text: '"Node"', color: "text-green-400" },
  ],
  [
    { text: "  ", color: "text-foreground" },
    { text: "],", color: "text-muted-foreground" },
  ],
  [
    { text: "  ", color: "text-foreground" },
    { text: "available", color: "text-purple-400" },
    { text: ":", color: "text-muted-foreground" },
    { text: " ", color: "text-foreground" },
    { text: "true", color: "text-orange-400" },
    { text: ",", color: "text-muted-foreground" },
  ],
  [
    { text: "  ", color: "text-foreground" },
    { text: "location", color: "text-purple-400" },
    { text: ":", color: "text-muted-foreground" },
    { text: " ", color: "text-foreground" },
    { text: '"India"', color: "text-green-400" },
  ],
  [
    { text: "}", color: "text-yellow-300" },
    { text: ";", color: "text-muted-foreground" },
  ],
];

export function CodeWindow() {
  const [displayedLines, setDisplayedLines] = useState<typeof codeLines>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  useEffect(() => {
    if (currentLineIndex >= codeLines.length) return;

    const currentLine = codeLines[currentLineIndex];
    
    // Calculate total characters in current line
    const totalCharsInLine = currentLine.reduce((acc, token) => acc + token.text.length, 0);

    if (currentCharIndex >= totalCharsInLine) {
       // Move to next line
       const timeout = setTimeout(() => {
          setDisplayedLines(prev => [...prev]); // Just trigger re-render or add logical break
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
       }, 50); // Pause between lines
       return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
       setCurrentCharIndex(prev => prev + 1);
    }, 30); // Typing speed per character

    return () => clearTimeout(timeout);
  }, [currentLineIndex, currentCharIndex]);

  // Helper to slice the current line based on char index
  const getSlicedLine = (line: typeof codeLines[0], charLimit: number) => {
     let currentCount = 0;
     return line.map(token => {
        if (currentCount >= charLimit) return null;
        
        const remaining = charLimit - currentCount;
        const textToDisplay = token.text.slice(0, remaining);
        currentCount += token.text.length;
        
        return { ...token, text: textToDisplay };
     }).filter(Boolean) as typeof codeLines[0];
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto bg-card-bg rounded-xl overflow-hidden border border-border shadow-2xl relative"
    >
      {/* Window Header */}
      <div className="bg-muted px-4 py-2 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-muted-foreground font-mono">developer.tsx</div>
        <div className="w-8" /> {/* Spacer for centering */}
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto min-h-[300px]">
        <pre className="font-mono text-xs md:text-sm leading-relaxed">
           {codeLines.slice(0, currentLineIndex).map((line, i) => (
              <div key={i} className="whitespace-pre">
                 {line.map((token, j) => (
                    <span key={j} className={token.color}>{token.text}</span>
                 ))}
              </div>
           ))}
           
           {currentLineIndex < codeLines.length && (
              <div className="whitespace-pre">
                 {getSlicedLine(codeLines[currentLineIndex], currentCharIndex).map((token, j) => (
                    <span key={j} className={token.color}>{token.text}</span>
                 ))}
                 <span className="animate-pulse inline-block w-2 h-4 bg-primary align-middle ml-1">
                   |
                 </span>
              </div>
           )}
           
           {currentLineIndex >= codeLines.length && (
             <div className="mt-4">
               <span className="text-blue-400">developer</span>.
               <span className="text-yellow-300">createAwesome</span>();
               <span className="animate-pulse inline-block w-2 h-4 bg-primary align-middle ml-1">
                 |
               </span>
             </div>
           )}
        </pre>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
}
