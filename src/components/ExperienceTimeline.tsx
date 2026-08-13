"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Self-Employed",
    role: "Freelance Full Stack Developer",
    date: "Nov 2025 – Jan 2026",
    location: "Remote",
    description: "Architected and deployed a production Next.js corporate website with Sanity CMS.",
    achievements: [
        "Architected and deployed a production Next.js corporate website with Sanity CMS, enabling client to independently manage 50+ product listings via GROQ queries and server-side rendering.",
        "Improved page load performance by 40% through image optimization, lazy loading, and efficient server-side data fetching strategies."
    ],
    tags: ["Next.js", "Sanity CMS", "React", "GROQ", "Server-Side Rendering"]
  },
  {
    company: "Stratawiz Technologies (Rapport)",
    role: "Software Developer Intern",
    date: "Oct 2024 – Mar 2025",
    location: "Remote",
    description: "Engineered robust backend solutions and optimized campaign workflows.",
    achievements: [
        "Engineered WhatsApp Business API integration using Node.js and AWS Lambda for automated campaign messaging, eliminating 50+ hours of manual work weekly across marketing operations.",
        "Optimized campaign management backend by refactoring data layer and defining API contracts, achieving 25% performance improvement across core workflows.",
        "Improved bot message processing pipeline by optimizing workflow execution and validation logic, enhancing production reliability and reducing manual intervention."
    ],
    tags: ["Node.js", "AWS Lambda", "API Development", "Workflow Optimization"]
  }
];

export function ExperienceTimeline() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
  
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            My career path, highlighting key roles, projects, and the technical growth achieved at each stage.
          </p>
      </div>

      <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
             >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-background border-2 border-primary rounded-full z-10 -translate-x-[5px] md:-translate-x-1/2 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

                {/* Content Card */}
                <div className="md:w-1/2 pl-8 md:pl-0">
                   <div className={`bg-card-bg border border-card-border p-6 rounded-2xl hover:border-primary/30 transition-colors group ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                      <div className="flex items-center justify-between mb-4">
                         <span className="text-xs font-mono text-primary">{exp.date}</span>
                         <Briefcase className="w-4 h-4 text-muted-foreground" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                      <div className="text-sm text-muted-foreground mb-4">{exp.company} • {exp.location}</div>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                         {exp.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                         {exp.achievements.map((item, i) => (
                            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                               <span className="text-primary mt-1">▹</span>
                               <span>{item}</span>
                            </li>
                         ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                         {exp.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-background border border-border rounded text-[10px] text-muted-foreground">
                               {tag}
                            </span>
                         ))}
                      </div>
                   </div>
                </div>
             </motion.div>
          ))}
      </div>
    </section>
  );
}
