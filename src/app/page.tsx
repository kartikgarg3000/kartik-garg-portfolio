"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechArsenal } from "@/components/TechArsenal";
import { SocialConnect } from "@/components/SocialConnect";
import { EngineeringBlueprint } from "@/components/EngineeringBlueprint";
import { SectionHeading } from "@/components/SectionHeading";
import { FeaturedHeading } from "@/components/FeaturedHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";

const projects = [
  {
    title: "MoltPulse",
    category: "WEB DEVELOPMENT",
    description: "An advanced platform for real-time tracking and monitoring of Solana-based AI agents. Features on-chain analytics, token verification, and a comprehensive dashboard for ecosystem insights.",
    tags: ["Next.js", "Solana", "Tailwind CSS", "Framer Motion"],
    links: { demo: "#" },
  },
  {
    title: "Sumaafy AI",
    category: "AI AGENTS",
    description: "A comprehensive AI-driven solution for enhancing productivity and data analysis. Leverages modern LLMs to provide actionable insights and automated workflows.",
    tags: ["React", "Python", "FastAPI", "OpenAI"],
    links: { demo: "#" },
  },
  {
    title: "SR Group",
    category: "CORPORATE",
    description: "A professional corporate website for SR Group, showcasing their diverse portfolio of services. Built with a focus on performance, SEO, and premium corporate aesthetics.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    links: { demo: "#" },
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
      </div>

      <TechArsenal />
      <SocialConnect />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      </div>

      {/* Engineering Blueprint - Full Width */}
      <EngineeringBlueprint />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Projects Section */}
        <section id="projects" className="py-32">
          <FeaturedHeading 
            subtitle="FEATURED WORK"
            title="Projects &      " 
            description="Explore both the user interface and the engineering architecture behind my featured applications."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
      </div>

      <Footer />
    </main>
  );
}
