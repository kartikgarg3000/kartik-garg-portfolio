"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    institution: "CDAC, Noida",
    degree: "PG Diploma in Advanced Computing (PG-DAC)",
    date: "Feb 2026 – Aug 2026",
    details: "Specialized in advanced computing technologies, deepening knowledge in enterprise application development, full-stack frameworks, and scalable systems.",
  },
  {
    institution: "Chandigarh University, Mohali",
    degree: "Bachelor of Engineering — Computer Science",
    date: "2021 – 2025",
    details: "Studied Core CS concepts: Data Structures & Algorithms, Object-Oriented Programming, DBMS, and Operating Systems. Developed a strong foundation in software engineering principles.",
  }
];

export function EducationTimeline() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono mb-4">
             EDUCATION
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Academic <span className="text-primary">Background</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            My educational journey, building the core foundation for software engineering and advanced computing.
          </p>
      </div>

      <div className="space-y-12 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          {educationData.map((edu, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
             >
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-background border-2 border-primary rounded-full z-10 -translate-x-[5px] md:-translate-x-1/2 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

                <div className="md:w-1/2 pl-8 md:pl-0">
                   <div className={`bg-card-bg border border-card-border p-6 rounded-2xl hover:border-primary/30 transition-colors group ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                      <div className="flex items-center justify-between mb-4">
                         <span className="text-xs font-mono text-primary">{edu.date}</span>
                         <GraduationCap className="w-4 h-4 text-muted-foreground" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{edu.degree}</h3>
                      <div className="text-sm text-muted-foreground mb-4">{edu.institution}</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                         {edu.details}
                      </p>
                   </div>
                </div>
             </motion.div>
          ))}
      </div>
    </section>
  );
}
