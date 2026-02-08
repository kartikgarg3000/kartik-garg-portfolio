"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function AboutCTA() {
  return (
    <section className="py-32 max-w-5xl mx-auto px-6">
      <div className="relative bg-gradient-to-b from-[#111] to-[#0a0b10] border border-slate-800 rounded-3xl p-12 md:p-20 overflow-hidden text-center">
         
         {/* Background Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-3xl -z-10" />
         
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
         >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-mono mb-6">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               Available for New Projects
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
               Ready to <span className="text-primary">Architect</span> <br />
               Your Next Big Idea?
            </h2>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
               From concept to scalable deployment, I help founders and businesses engineer digital solutions that stand the test of time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link 
                  href="mailto:contact@example.com"
                  className="px-8 py-4 bg-primary text-slate-900 font-bold rounded-full hover:shadow-lg hover:shadow-sky-400/20 transition-all flex items-center gap-2 group"
               >
                  <Sparkles className="w-4 h-4" /> Start Collaboration <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
               
               <div className="flex items-center gap-2 px-6 py-4 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-slate-600 transition-colors cursor-pointer">
                  <span className="text-sm font-mono">kartikgarg.cse.2025@gmail.com</span>
                  {/* Could add valid copy-to-clipboard functionality here */}
               </div>
            </div>
         </motion.div>

         {/* Decorative Grid */}
         <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      </div>
    </section>
  );
}
