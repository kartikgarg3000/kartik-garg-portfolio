"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectsHeader } from "@/components/ProjectsHeader";
import { Search } from "lucide-react";

// Using the same project data or expanded list
const allProjects = [
  {
    title: "FinSight AI",
    category: "WEB DEVELOPMENT",
    description: "A full-stack payment intelligence platform with Spring Boot REST APIs on the backend and a React/Next.js dashboard for merchant transaction analytics and fraud monitoring. Features JWT-based role access and PostgreSQL-backed real-time data visualization.",
    tags: ["Spring Boot", "React", "Next.js", "TypeScript", "PostgreSQL", "JWT"],
    links: {
       demo: "https://fin-sight-ai-lovat-three.vercel.app/",
       github: "https://github.com/kartikgarg3000"
    },
    image: "/projects/finsight.png"
  },
  {
    title: "NextFlow",
    category: "AI AGENTS",
    description: "A visual workflow automation platform using React Flow with drag-and-drop node connections, DAG-based execution engine, and real-time progress indicators. Features Prisma + PostgreSQL persistence and an LLM execution layer with Gemini + Groq fallback.",
    tags: ["Next.js", "TypeScript", "React Flow", "Prisma", "PostgreSQL"],
    links: {
       demo: "https://nextflow-galaxyai-two.vercel.app/",
       github: "https://github.com/kartikgarg3000/nextflow-galaxyai"
    },
    image: "/projects/nextflow.png"
  },
  {
    title: "MoltPulse",
    category: "AI AGENTS",
    description: "The first Real-Time Map of the AI Agent ecosystem. Automatically scrapes & discovers new AI agents 24/7, tracking live GitHub stats, trends, and community voting. Achieved 5,000+ organic users (primarily Singapore-driven) and 60-70 GitHub repo clones within a 14-day period — zero paid marketing.",
    tags: ["Next.js", "AI Agents", "TypeScript", "Supabase", "Tailwind CSS", "Web Scraping"],
    links: { 
       demo: "https://molt-pulse.com/",
       github: "https://github.com/kartikgarg3000/MoltPulse"
    },
    image: "/projects/moltpulse.png"
  },
  {
    title: "Summafy AI",
    category: "AI AGENTS",
    description: "A modern web application that transforms lengthy PDF documents into concise, actionable summaries using artificial intelligence. Powered by Google's Gemini AI, it offers a smart solution for extracting key insights.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Gemini AI", "PostgreSQL", "Clerk"],
    links: { 
       demo: "https://summafy-ai.vercel.app/",
       github: "https://github.com/kartikgarg3000/summafy-ai"
    },
    image: "/projects/summafy.png"
  },
  {
    title: "SR Group",
    category: "CORPORATE",
    description: "A production-ready corporate website built with Next.js App Router and Tailwind CSS. Integrated Sanity Headless CMS for independent content management of 50+ products. Features server-side data fetching, GROQ queries, and 40% faster page loads via image optimization.",
    tags: ["Next.js","TypeScript", "Sanity CMS", "Tailwind CSS", "GROQ", "Vercel"],
    links: { 
       demo: "https://sr-group-two.vercel.app/",
       github: "https://github.com/kartikgarg3000/SR-Group"
    },
    image: "/projects/sr.png"
  },
  {
    title: "This Website - Portfolio",
    category: "WEB DEVELOPMENT",
    description: "My personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a custom engineering blueprint design, dark/light mode, and a fully functional blog system.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    links: { 
       demo: "https://kartik-garg-portfolio.vercel.app/"
    },
    image: "/projects/portfolio.png"
  }
];

const categories = ["All", "Web Development", "AI Agents", "Corporate", "App Dev"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter(project => {
     const matchesCategory = activeCategory === "All" || project.category.toUpperCase() === activeCategory.toUpperCase();
     const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           project.description.toLowerCase().includes(searchQuery.toLowerCase());
     return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
         
         <ProjectsHeader 
            title="Featured Projects" 
            description="A collection of projects I've worked on, ranging from web applications to mobile apps and everything in between. Each project represents a unique challenge and learning experience."
         />

         {/* Filter & Search Bar */}
         <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-[#0a0b10] border border-white/5 p-2 rounded-2xl">
            {/* Categories */}
            <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 no-scrollbar px-2">
               {categories.map(cat => (
                  <button
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                        activeCategory === cat 
                           ? "bg-primary text-slate-900 shadow-[0_0_15px_rgba(56,189,248,0.3)]" 
                           : "bg-transparent text-slate-400 hover:text-white"
                     }`}
                  >
                     {cat}
                  </button>
               ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64 px-2">
               <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
               <input 
                  type="text" 
                  placeholder="Search projects..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#111] border border-slate-800 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
               />
            </div>
         </div>

         {/* Projects Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            {filteredProjects.length > 0 ? (
               filteredProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
               ))
            ) : (
               <div className="col-span-full flex flex-col items-center justify-center text-slate-500 py-20">
                  <p className="text-lg">No projects found matching your criteria.</p>
                  <button 
                     onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                     className="mt-4 text-primary hover:underline"
                  >
                     Clear filters
                  </button>
               </div>
            )}
         </div>

         {/* Bottom CTA */}
         <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Have a project in mind?</h3>
            <p className="text-slate-400 mb-8">Let's collaborate and build something amazing together.</p>
            <a 
               href="mailto:kartikgarg.cse.2025@gmail.com"
               className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-colors"
            >
               Start a Project
            </a>
         </div>

      </div>

      <Footer />
    </main>
  );
}
