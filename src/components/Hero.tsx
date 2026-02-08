"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import { CodeWindow } from "./CodeWindow";

export function Hero() {
  return (
    <section className="min-h-screen py-20 flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for work
          </div>

          <div className="space-y-2">
            <p className="text-primary font-mono text-sm tracking-wide">
              &gt;_ Hello World, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Kartik Garg
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-sky-400 tracking-tight">
              &lt;/&gt; Software Engineer & AI Focused Full Stack Developer
            </h2>
          </div>

          <p className="max-w-md text-slate-400 leading-relaxed text-lg">
            I transform complex ideas into elegant, high-performance web applications. Focused on building accessible, human-centered products.
          </p>

          <div className="flex items-center gap-2 text-slate-500 font-mono text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>India</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-sky-400 to-teal-400 text-slate-900 font-bold rounded-md hover:shadow-lg hover:shadow-sky-400/20 transition-all flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-transparent border border-slate-700 text-white rounded-md hover:border-slate-500 hover:bg-slate-800/50 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Get In Touch
            </Link>
          </div>

        </motion.div>

        {/* Right Column: Code Window */}
        <div className="relative">
          <CodeWindow />
          {/* Decorative Gradients */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 blur-[100px] -z-10 opacity-50" />
        </div>
      </div>
    </section>
  );
}
