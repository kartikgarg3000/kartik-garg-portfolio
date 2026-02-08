"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "TechCorp Inc.",
    role: "Senior Full Stack Developer",
    date: "Jun 2022 — Present",
    location: "San Francisco, CA (Remote)",
    description: "Leading development of enterprise web applications serving millions of users. Architected scalable microservices using Node.js and Kubernetes.",
    achievements: [
        "Architected and built scalable microservices using Node.js and Kubernetes",
        "Led a team of 5 developers in delivering key product features",
        "Reduced page load time by 60% through performance optimization"
    ],
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"]
  },
  {
    company: "Creative Solutions", 
    role: "Frontend Developer",
    date: "Jan 2020 — May 2022",
    location: "New York, NY",
    description: "Developed responsive and interactive user interfaces for e-commerce platforms.",
    achievements: [
        "Implemented pixel-perfect UI designs from Figma prototypes",
        "Integrated Stripe payment gateway for seamless checkout",
        "Improved accessibility score to 98/100 across main pages"
    ],
    tags: ["Vue.js", "Tailwind CSS", "JavaScript", "Firebase"]
  }
];

export function ExperienceTimeline() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono mb-4">
            Briefcase EXPERIENCE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            My career path, highlighting key roles, projects, and the technical growth achieved at each stage.
          </p>
      </div>

      <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden md:block" />

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
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-slate-900 border-2 border-primary rounded-full z-10 -translate-x-[5px] md:-translate-x-1/2 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

                {/* Content Card */}
                <div className="md:w-1/2 pl-8 md:pl-0">
                   <div className={`bg-[#0f0f11] border border-slate-800 p-6 rounded-2xl hover:border-primary/30 transition-colors group ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                      <div className="flex items-center justify-between mb-4">
                         <span className="text-xs font-mono text-primary">{exp.date}</span>
                         <Briefcase className="w-4 h-4 text-slate-500" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                      <div className="text-sm text-slate-400 mb-4">{exp.company} • {exp.location}</div>
                      
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                         {exp.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                         {exp.achievements.map((item, i) => (
                            <li key={i} className="flex gap-2 text-sm text-slate-400">
                               <span className="text-primary mt-1">▹</span>
                               <span>{item}</span>
                            </li>
                         ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                         {exp.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] text-slate-500">
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
