"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Patents } from "@/components/Patents";
import { AboutCTA } from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      
      <AboutHero />
      <ExperienceTimeline />
      <Patents />
      
      <AboutCTA />
      
      <Footer />
    </main>
  );
}
