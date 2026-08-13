"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/lib/blogs";

export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card-bg border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        {post.image ? (
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold opacity-50">{post.category}</span>
          </div>
        )}
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
          {post.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
           <Link href={`/blog/${post.slug}`} className="text-primary text-sm font-medium hover:underline">
             Read Article →
           </Link>
           <div className="flex gap-2">
              {post.tags.slice(0, 2).map(tag => (
                 <span key={tag} className="text-[10px] px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {tag}
                 </span>
              ))}
           </div>
        </div>
      </div>
    </motion.article>
  );
}
