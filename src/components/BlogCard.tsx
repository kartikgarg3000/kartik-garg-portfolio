"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import type { BlogPost } from "@/lib/blogs";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col bg-card-bg border border-card-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 h-full"
    >
      {/* Image Placeholder (replace with actual Image component when ready) */}
      {/* Image */}
      <div className="relative h-48 bg-muted overflow-hidden group-hover:opacity-90 transition-opacity">
         <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent z-10 opacity-60" />
      </div>

      <div className="flex flex-col flex-grow p-6 relative z-10">
        <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-medium text-primary px-2 py-1 bg-primary/10 rounded border border-primary/20">
               {post.category}
            </span>
            <Link 
               href={`/blog/${post.slug}`} 
               className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
            >
               <ArrowUpRight className="w-4 h-4" />
            </Link>
        </div>

        <Link href={`/blog/${post.slug}`} className="block mb-3 group-hover:text-primary transition-colors">
           <h3 className="text-xl font-bold text-foreground leading-tight line-clamp-2">
             {post.title}
           </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
           {post.description}
        </p>

        <div className="pt-4 border-t border-border mt-auto flex items-center justify-between text-xs text-muted-foreground">
           <div className="flex items-center gap-2">
              <Calendar className="w-3 h-3" />
              {post.date}
           </div>
           <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              {post.readTime}
           </div>
        </div>
      </div>
    </motion.article>
  );
}
