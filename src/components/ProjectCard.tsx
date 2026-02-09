"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
// import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    github?: string;
  };
  image?: string;
}

export function ProjectCard({ title, category, description, tags, links, image }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="group relative rounded-3xl bg-card-bg border border-card-border overflow-hidden hover:border-primary/50 transition-colors duration-500"
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(1000px)"
      }}
      whileHover={{
        rotateX: 2,
        rotateY: 2,
        scale: 1.02,
        transition: { duration: 0.4 }
      }}
    >
      {/* Image Area */}
      <div className="relative h-64 w-full overflow-hidden bg-muted group-hover:scale-[1.02] transition-transform duration-500">
        {image ? (
            <div className="absolute inset-0 z-0">
               <Image 
                  src={image} 
                  alt={title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
               />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
        ) : (
            <>
               <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black opacity-80" />
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
            </>
        )}

        <div className="absolute inset-0 flex items-center justify-center z-10">
            <h3 className="text-3xl font-bold text-foreground/80 tracking-tighter uppercase select-none group-hover:text-primary/20 transition-colors duration-500 drop-shadow-lg">
              {title}
            </h3>
        </div>

        {/* X-Ray Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
            <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2 shadow-xl">
               <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
               Featured
            </div>
            <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono text-slate-300 uppercase tracking-wider shadow-xl">
               {category}
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 relative z-10 bg-card-bg">
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, i) => (
            <span 
               key={i} 
               className="px-3 py-1 text-xs font-medium text-muted-foreground bg-background/50 rounded-md border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
             <a 
               href={links.demo} 
               className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group/link"
             >
               View Project <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
             </a>
             {links.github && (
               <a 
                 href={links.github} 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                 aria-label="View Source Code"
               >
                 <Github className="w-4 h-4" />
               </a>
             )}
        </div>
      </div>
    </motion.div>
  );
}
