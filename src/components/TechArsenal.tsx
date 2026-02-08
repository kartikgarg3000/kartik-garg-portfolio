"use client";

import { motion } from "framer-motion";

const techs = [
 "Taiwind CSS", "Framer Motion", "JavaScript","React", 
  "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL",
   "Git", "AI", "Auth", "Docker", "AWS"
];

export function TechArsenal() {
  return (
    <section className="py-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
           <h3 className="text-sm font-mono text-slate-400 flex items-center gap-2">
            <span className="text-primary">&gt;_</span> TECH ARSENAL
           </h3>
           <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
            {techs.length}+ tools
           </span>
        </div>

        <div className="flex flex-wrap gap-3">
          {techs.map((tech, index) => (
             <div 
               key={tech}
               className="group flex items-center gap-2 px-4 py-3 bg-[#111] border border-slate-800 rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
             >
                <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-primary transition-colors" />
                <span className="text-sm text-slate-300 font-medium group-hover:text-white">{tech}</span>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
