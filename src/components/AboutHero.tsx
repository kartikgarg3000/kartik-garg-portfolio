"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
// import Image from "next/image";

export function AboutHero() {
  return (
    <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           className="space-y-6 order-2 md:order-1"
        >
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium font-mono">
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             ABOUT ME
           </div>
           
           <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
             I&apos;m <span className="text-primary">Kartik Garg</span>
           </h1>
           <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
             Software Engineer & AI Focused Full Stack Developer
           </h2>

           <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
             Hello! I&apos;m Kartik Garg, a passionate Full-Stack Developer transforming complex ideas into elegant, high-performance web applications. My journey into coding began out of sheer curiosity, fascinated by how lines of text could create interactive digital worlds.
           </p>

           <div className="flex flex-wrap gap-4 pt-4">
             <div className="flex flex-col gap-1 p-4 bg-card-bg border border-border rounded-xl min-w-[140px]">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Location</span>
                <span className="text-foreground font-medium">India</span>
             </div>
             <div className="flex flex-col gap-1 p-4 bg-card-bg border border-border rounded-xl min-w-[140px]">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Availability</span>
                <span className="text-emerald-400 font-medium flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   Open to Work
                </span>
             </div>
           </div>

           <a 
             href="mailto:kartikgarg.cse.2025@gmail.com"
             className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full mt-6 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all transform hover:-translate-y-1"
           >
             <Mail className="w-4 h-4" /> Get in Touch
           </a>
        </motion.div>

        {/* Image / Abstract Shape */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="order-1 md:order-2 relative flex justify-center"
        >
           <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Abstract Rings */}
              <div className="absolute inset-0 border-2 border-border rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-dashed border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-card-bg shadow-2xl bg-slate-800 flex items-center justify-center">
                 {/* Placeholder for Profile Image */}
                 <div className="text-muted-foreground font-mono text-center px-4">
                    [ Your Photo Here ]
                    {/* Use <Image /> component with actual src */}
                 </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-10 bg-card-bg border border-border px-4 py-2 rounded-lg shadow-xl flex items-center gap-3 animate-bounce">
                 <div className="p-2 bg-purple-500/10 rounded-md">
                    <span className="text-purple-400 font-bold">100k+</span>
                 </div>
                 <div className="text-xs">
                    <div className="text-muted-foreground">Lines Code</div>
                    <div className="text-foreground font-bold">Written</div>
                 </div>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
