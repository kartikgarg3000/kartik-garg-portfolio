"use client";

import { motion } from "framer-motion";
import { Lightbulb, Award, FileCheck } from "lucide-react";

const patents = [
  {
    title: "AI BASED HIGHWAY ROAD QUALITY CHECKING DEVICE (DESIGN)",
    id: "Application No: 431726-001",
    date: "Sept 2024",
    status: "Accepted",
    description: "Led the design of an AI-driven device for automated road quality assessment, significantly enhancing infrastructure maintenance capability.",
    highlights: [
       "Increased road maintenance efficiency by 30%.",
       "Filed as a design patent and successfully accepted."
    ]
  },
  {
    title: "BRAIN SIGNALS TRANSFORMATION INTO AUDIO SPEECH FOR EPILEPSY DISEASE",
    id: "Utility Patent",
    date: "Feb 2024",
    status: "Published",
    description: "Designed a real-time EEG-based system to translate brain signals into audio speech, aiding communication for epilepsy patients.",
    highlights: [
        "Improved seizure detection accuracy by 25%.",
        "Developed an optimized electrode array increasing detection precision by 20%."
    ]
  }
];

export function Patents() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-medium font-mono mb-4">
            <Lightbulb className="w-3 h-3" />
            INNOVATION
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Patents & <span className="text-amber-500">Research</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Contributing to the technological landscape through novel inventions and research-driven solutions.
          </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {patents.map((patent, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-card-bg border border-card-border p-8 rounded-3xl hover:border-amber-500/50 transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
               <Award className="w-24 h-24 text-amber-500" />
            </div>

            <div className="relative z-10">
               <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
                     <FileCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-background border border-border px-2 py-1 rounded">
                     {patent.date}
                  </span>
               </div>

               <h3 className="text-xl font-bold text-foreground mb-2 leading-tight group-hover:text-amber-500 transition-colors">
                  {patent.title}
               </h3>
               
               <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
                     {patent.status}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                     {patent.id}
                  </span>
               </div>

               <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {patent.description}
               </p>

               <ul className="space-y-2">
                  {patent.highlights.map((highlight, i) => (
                     <li key={i} className="flex gap-2 text-sm text-muted-foreground/80">
                        <span className="text-amber-500 mt-1">▹</span>
                        {highlight}
                     </li>
                  ))}
               </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
