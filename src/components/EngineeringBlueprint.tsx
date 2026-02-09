"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { RunningTerminal } from "./RunningTerminal";

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
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    The Engineering <span className="text-primary">Blueprint</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                    A systematic approach to building digital products. From abstract concepts to deployed, scalable solutions.
                </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-card-bg rounded-2xl p-6 border border-card-border hover:border-primary/30 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 flex flex-col min-h-[320px]"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 rounded-xl bg-background/50 border border-border group-hover:border-primary/50 transition-colors">
                                <step.icon className="w-6 h-6 text-primary" />
                            </div>
                            <span className="font-mono text-xs text-muted-foreground group-hover:text-primary/50 transition-colors">0{index + 1}</span>
                        </div>

                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {step.title}
                        </h3>
                        <div className="text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-4">
                            {step.subtitle}
                        </div>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                            {step.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-card-border">
                            {step.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-background border border-border rounded text-[10px] text-muted-foreground font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Terminal Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <RunningTerminal />
            </motion.div>
        </div>
    </section>
  );
}
