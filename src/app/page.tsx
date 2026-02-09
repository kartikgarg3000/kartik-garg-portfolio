"use client";

import { motion } from "framer-motion";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechArsenal } from "@/components/TechArsenal";
import { SocialConnect } from "@/components/SocialConnect";
import { EngineeringBlueprint } from "@/components/EngineeringBlueprint";
import { Footer } from "@/components/Footer";

const StaggerContainer = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);


export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
      </div>

      <StaggerContainer delay={0.2}>
        <TechArsenal />
      </StaggerContainer>

      <StaggerContainer delay={0.4}>
        <SocialConnect />
      </StaggerContainer>

      {/* Engineering Blueprint - Full Width */}
      <StaggerContainer delay={0.6}>
        <EngineeringBlueprint />
      </StaggerContainer>

      <Footer />
    </main>
  );
}
