"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "SR Group",
    role: "Freelance Web Developer",
    date: "Nov 2025 - Jan 2026",
    location: "Remote",
    description: "Designed and developed a production-ready corporate website using Next.js App Router and Tailwind CSS for a multi-vertical business.",
    achievements: [
        "Integrated Sanity Headless CMS, enabling non-technical teams to independently manage 50+ products and content.",
        "Implemented server-side data fetching, GROQ queries, and image optimization, improving page load performance by 40%.",
        "Delivered an SEO-friendly, scalable solution deployed on Vercel."
    ],
    tags: ["Next.js", "React.js", "Tailwind CSS", "Sanity CMS", "Vercel"]
  },
  {
    company: "Stratawiz",
    role: "Software Developer (Internship)",
    date: "Oct 2024 - Mar 2025",
    location: "Remote",
    description: "Worked on backend development using Node.js, AWS Lambda, and DynamoDB to build scalable, production-ready features.",
    achievements: [
        "Implemented WhatsApp API-based campaign messaging, improving communication workflows across the platform.",
        "Optimized backend logic and APIs, reducing server response times by ~25%.",
        "Redesigned bot interaction flows, achieving ~90% message processing accuracy.",
        "Collaborated with cross-functional teams to develop, test, and deploy modular campaign features."
    ],
    tags: ["Node.js", "AWS Lambda", "DynamoDB", "API Development"]
  }
];

export function ExperienceTimeline() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono mb-4">
            Briefcase EXPERIENCE
          </div>
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
