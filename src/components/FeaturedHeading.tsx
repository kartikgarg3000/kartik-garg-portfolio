"use client";

import { motion } from "framer-motion";

interface FeaturedHeadingProps {
  title: string;
  subtitle: string;
  description: string;
}

export function FeaturedHeading({ title, subtitle, description }: FeaturedHeadingProps) {
  return (
    <div className="text-center mb-16 space-y-4">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary font-mono text-xs tracking-widest uppercase"
      >
        {subtitle}
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
      >
        {title.split(" & ").map((part, i, arr) => (
          <span key={i}>
            {part} {i !== arr.length - 1 && <span className="text-primary">&amp; </span>}
            {i !== arr.length - 1 && <span className="text-primary">Systems</span>}
          </span>
        ))}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-muted-foreground max-w-2xl mx-auto text-lg"
      >
        {description}
      </motion.p>
    </div>
  );
}
