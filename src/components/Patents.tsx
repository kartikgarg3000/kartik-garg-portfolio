"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const patentsData = [
  {
    title: "Brain Signals Transformation into Audio Speech for Epilepsy",
    description: "A real-time EEG-to-speech system designed to assist patients with epilepsy by converting brain signals into audible speech.",
    date: "2024",
    type: "Patent"
  },
  {
    title: "AI-Based Highway Road Quality Checking Device",
    description: "An AI-powered device for automated monitoring and assessment of highway road quality. Application No. 431726-001.",
    date: "2024",
    type: "Design Patent"
  }
];

export function Patents() {
  return (
    <section className="py-24 border-t border-border bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
           <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono mb-4">
             INNOVATION
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-foreground">
             Published <span className="text-primary">Patents</span>
           </h2>
        </div>

        <div className="space-y-6">
          {patentsData.map((patent, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-colors hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] flex flex-col md:flex-row md:items-center gap-6"
             >
               <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                 <Award className="w-6 h-6" />
               </div>
               <div>
                 <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                   <h3 className="text-xl font-bold">{patent.title}</h3>
                   <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-mono rounded whitespace-nowrap w-fit">
                     {patent.type} • {patent.date}
                   </span>
                 </div>
                 <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{patent.description}</p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
