"use client";

import { motion } from "framer-motion";
import { Database, Server, Layout, Workflow } from "lucide-react";

const principles = [
  {
    title: "Scalable Architecture",
    description: "Designing systems that grow with your user base using microservices, serverless functions, and robust databases like PostgreSQL.",
    icon: Server
  },
  {
    title: "Performant UI",
    description: "Creating lightning-fast, accessible interfaces with React, Next.js, and modern CSS techniques to ensure high user engagement.",
    icon: Layout
  },
  {
    title: "Intelligent Workflows",
    description: "Integrating AI and automated orchestration (like DAG-based engines) to streamline operations and enhance product capabilities.",
    icon: Workflow
  },
  {
    title: "Robust Data Layer",
    description: "Architecting efficient database schemas with ORMs (Prisma, Hibernate) ensuring data integrity, security, and fast queries.",
    icon: Database
  }
];

export function EngineeringBlueprint() {
  return (
    <section className="py-24 border-t border-border bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
           <h2 className="text-3xl md:text-4xl font-bold font-mono uppercase tracking-widest text-primary mb-4">
             Engineering <br/> Blueprint
           </h2>
           <p className="text-slate-400 max-w-2xl">
             My approach to building software focuses on reliability, performance, and clear architectural patterns that stand the test of time.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((p, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-colors hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]"
             >
               <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                 <p.icon className="w-6 h-6" />
               </div>
               <h3 className="text-lg font-bold mb-3">{p.title}</h3>
               <p className="text-sm text-slate-400 leading-relaxed">{p.description}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
