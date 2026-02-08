"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Analysis",
    subtitle: "SYSTEM SCOPING",
    description: "Deep-dive into requirements, user personas, and technical feasibility to define a robust project roadmap.",
    tags: ["Requirements Eng.", "User Stories", "Tech Stack Selection"]
  },
  {
    icon: PenTool,
    number: "02",
    title: "System Architecture",
    subtitle: "BLUEPRINT DESIGN",
    description: "Designing scalable database schemas, API contracts, and component hierarchies for high-availability systems.",
    tags: ["DB Schema", "API Design", "System Diagrams"]
  },
  {
    icon: Code,
    number: "03",
    title: "Development & Iteration",
    subtitle: "CODE CONSTRUCTION",
    description: "Writing clean, typed, and tested code with continuous integration. Agile sprints with regular feedback loops.",
    tags: ["React/Next.js", "TypeScript", "Clean Code"]
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deployment & Scaling",
    subtitle: "LAUNCH SEQUENCE",
    description: "Automated deployment pipelines, performance optimization, and monitoring for production-grade reliability.",
    tags: ["CI/CD", "Docker", "Monitoring"]
  }
];

export function EngineeringBlueprint() {
  return (
    <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            
            {/* Header */}
            <div className="text-center mb-20">
                <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono mb-6">
                    &gt;_ EXECUTION_PROTOCOL_V2
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    The Engineering <span className="text-primary">Blueprint</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    A systematic approach to building digital products. From abstract concepts to deployed, scalable solutions.
                </p>
            </div>

            {/* Timeline Graphic (Desktop) */}
            <div className="hidden md:flex items-center justify-between relative mb-12 px-12">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent -z-10 border-t border-dashed border-slate-700" />
                
                {steps.map((step, index) => (
                    <div key={index} className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-[#0a0b10] border border-primary/50 flex items-center justify-center relative group hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                            <step.icon className="w-6 h-6 text-primary" />
                            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-white font-mono">
                                {step.number}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#0f0f11] rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-colors group h-full flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-4 md:hidden">
                            <div className="p-2 rounded bg-slate-900 border border-slate-800">
                                <step.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-mono text-primary text-sm">{step.number}</span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                            {step.title}
                        </h3>
                        <div className="text-xs font-mono text-primary/80 uppercase tracking-wider mb-4">
                            {step.subtitle}
                        </div>
                        
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                            {step.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {step.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] text-slate-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
