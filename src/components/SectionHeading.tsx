"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10"
    >
      <span className="text-primary font-mono text-xl md:text-2xl">
        {number}.
      </span>
      {title}
      <span className="h-px bg-border flex-grow max-w-xs ml-4" />
    </motion.h2>
  );
}
