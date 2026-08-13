"use client";

import { motion } from "framer-motion";

interface ProjectsHeaderProps {
  title: string;
  description: string;
}

export function ProjectsHeader({ title, description }: ProjectsHeaderProps) {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
