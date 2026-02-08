"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ScanEye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
  };
}

export function ProjectCard({ title, category, description, tags, links }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-[#0f0f11] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300"
    >
      {/* Image Area */}
      <div className="relative h-64 bg-[#1a1a1c] overflow-hidden group-hover:bg-[#222] transition-colors flex items-center justify-center border-b border-white/5">
        {/* Placeholder for actual image */}
        <div className="text-slate-600 font-mono text-sm">
            [ Project Preview ]
        </div>

        {/* X-Ray Badge */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-colors">
            <ScanEye className="w-3 h-3 text-white" />
            <span className="text-xs font-bold text-white tracking-wide">X-Ray</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h4 className="text-primary text-xs font-bold tracking-widest uppercase mb-3">
            {category}
        </h4>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 leading-relaxed mb-6">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
            {tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#1a1a1c] text-slate-400 text-xs font-medium rounded-md border border-white/5">
                    {tag}
                </span>
            ))}
        </div>

        {/* Link */}
        <Link 
            href={links.demo}
            className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link hover:text-white transition-colors"
        >
            View Details 
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
