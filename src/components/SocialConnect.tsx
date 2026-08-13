"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export function SocialConnect() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="bg-card-bg border border-card-border rounded-3xl p-12 text-center relative overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.05)] hover:shadow-[0_0_50px_rgba(56,189,248,0.1)] transition-shadow duration-500">
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-1/2" />
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
          Let's Build Something <span className="text-primary">Amazing</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 relative z-10">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          <Link href="https://github.com/kartikgarg3000" target="_blank" className="flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-primary/50 bg-background hover:bg-primary/10 transition-all group">
            <Github className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
            <span className="font-medium group-hover:text-primary transition-colors">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/kartik-garg-a01027231/" target="_blank" className="flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-primary/50 bg-background hover:bg-primary/10 transition-all group">
            <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
            <span className="font-medium group-hover:text-primary transition-colors">LinkedIn</span>
          </Link>
          <Link href="mailto:kartikgarg.cse.2025@gmail.com" className="flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-primary/50 bg-background hover:bg-primary/10 transition-all group">
            <Mail className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
            <span className="font-medium group-hover:text-primary transition-colors">Email Me</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
