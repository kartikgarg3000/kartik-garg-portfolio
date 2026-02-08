"use client";

import { Github, Linkedin, Twitter, Instagram, Code2, Music, Coffee, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function SocialConnect() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Current Focus Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[#0f0f11] p-8 rounded-2xl border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-5 h-5 text-orange-500" />
          </div>
          <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 text-orange-500">
             <Coffee className="w-6 h-6" />
          </div>
          <h4 className="text-orange-500 text-xs font-bold tracking-wider mb-2">CURRENT FOCUS</h4>
          <p className="text-xl font-bold text-slate-200 leading-snug">
            Architecting Scalable Systems & AI Agents
          </p>
        </motion.div>

        {/* Coding Vibe Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[#0f0f11] p-8 rounded-2xl border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-1 items-end h-4">
               <span className="w-1 h-2 bg-purple-500 animate-pulse" />
               <span className="w-1 h-4 bg-purple-500 animate-pulse delay-75" />
               <span className="w-1 h-3 bg-purple-500 animate-pulse delay-150" />
            </div>
          </div>
          <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 text-purple-500">
             <Music className="w-6 h-6" />
          </div>
          <h4 className="text-purple-500 text-xs font-bold tracking-wider mb-2">CODING VIBE</h4>
          <p className="text-xl font-bold text-slate-200 leading-snug">
            Lo-Fi Beats to Code/Relax To
          </p>
          <p className="text-sm text-slate-500 mt-1">Spotify • Lofi Girl</p>
        </motion.div>

        {/* Let's Connect Grid */}
        <div className="bg-[#0f0f11] p-8 rounded-2xl border border-white/5">
           <h4 className="text-white text-lg font-bold mb-6 border-l-4 border-primary pl-3 flex items-center gap-2">
             Let's Connect
           </h4>
           
           <div className="grid grid-cols-2 gap-4">
              <SocialLink icon={<Github className="w-5 h-5" />} label="GitHub" href="https://github.com/kartikgarg3000" />
              <SocialLink icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" href="https://www.linkedin.com/in/kartik-garg-a01027231/" />
              <SocialLink icon={<Twitter className="w-5 h-5" />} label="X (Twitter)" href="https://x.com/Kartik_sui" />
           </div>
           
           <div className="mt-4">
              <SocialLink icon={<Code2 className="w-5 h-5" />} label="LeetCode" href="#" fullWidth />
           </div>
        </div>

      </div>
    </section>
  );
}

function SocialLink({ icon, label, href, fullWidth = false }: { icon: any, label: string, href: string, fullWidth?: boolean }) {
  return (
    <Link 
      href={href} 
      target="_blank"
      className={`
        flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#1a1a1c] border border-white/5 
        hover:border-white/10 hover:bg-[#222] transition-all group
        ${fullWidth ? 'w-full flex-row' : ''}
      `}
    >
      <div className="text-slate-400 group-hover:text-white transition-colors">{icon}</div>
      <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors">{label}</span>
    </Link>
  );
}
