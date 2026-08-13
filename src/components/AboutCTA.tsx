"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card-bg border border-card-border p-12 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-1/2" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
          Ready to Collaborate?
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 relative z-10">
          I'm always open to discussing product design work or partnership opportunities. Let's create something impactful together.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-slate-900 font-bold rounded-full hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all relative z-10"
        >
          Get in Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
