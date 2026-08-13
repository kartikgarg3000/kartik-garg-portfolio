"use client";

import { motion } from "framer-motion";

const techs = [
  "Java", "C++", "JavaScript", "TypeScript", "SQL", "HTML/CSS",
  "React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "React Flow", "Recharts",
  "Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT",
  "PostgreSQL", "MongoDB", "Prisma ORM", "Supabase",
  "Git", "Docker", "Vercel", "Postman"
];

export function TechArsenal() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="bg-card-bg border border-card-border rounded-3xl overflow-hidden py-12 relative">
          
          {/* Decorative Grid Background inside the box */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

          <div className="px-8 mb-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                <span className="text-primary">&gt;_</span> TECH ARSENAL
              </h3>
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                {techs.length}+ tools
              </span>
            </div>
          </div>

          {/* Infinite Marquee */}
          <div className="flex overflow-hidden relative z-10 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <motion.div 
              className="flex flex-nowrap gap-4 pr-4"
              animate={{ x: "-50%" }}
              transition={{ 
                duration: 30, // Slower speed
                ease: "linear", 
                repeat: Infinity,
                repeatType: "loop"
              }}
              style={{ width: "fit-content" }}
            >
                {[...techs, ...techs].map((tech, index) => (
                  <div 
                    key={`${tech}-${index}`}
                    className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-colors duration-300 group"
                  >
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/50 group-hover:bg-primary transition-colors" />
                      <span className="text-sm text-foreground font-medium group-hover:text-foreground transition-colors">{tech}</span>
                  </div>
                ))}
            </motion.div>
          </div>
      </div>
    </section>
  );
}
