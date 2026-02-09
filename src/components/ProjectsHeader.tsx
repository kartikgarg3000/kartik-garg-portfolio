"use client";

import { motion } from "framer-motion";

interface ProjectsHeaderProps {
  title: string;
  description: string;
}

export function ProjectsHeader({ title, description }: ProjectsHeaderProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16 px-6">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
       >
         <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono mb-4">
            MY WORK
         </div>
         <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {title}
         </h1>
         <p className="text-muted-foreground text-lg leading-relaxed">
            {description}
         </p>
       </motion.div>
    </div>
  );
}
