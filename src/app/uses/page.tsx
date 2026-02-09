"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Code2, 
  FileCode, 
  Layout, 
  Atom, 
  Zap, 
  Database, 
  Wind, 
  Move, 
  Code, 
  GitBranch, 
  Monitor, 
  Send, 
  Package, 
  PenTool, 
  Smile, 
  Type, 
  Server, 
  ServerCog, 
  Globe, 
  Triangle, 
  Cloud, 
  Sparkles, 
  Bot, 
  BookOpen, 
  Compass, 
  MessageCircle,
  Wrench
} from "lucide-react";

interface ToolItem {
  name: string;
  description: string;
  icon: React.ElementType;
}

interface ToolCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  items: ToolItem[];
}

const categories: ToolCategory[] = [
  {
    title: "Languages & Core",
    description: "The foundation of my development stack",
    icon: Code2,
    items: [
      { name: "JavaScript", description: "Primary language for frontend & backend. ES6+ features.", icon: FileCode },
      { name: "TypeScript", description: "Strongly typed JavaScript for scalable applications.", icon: FileCode },
      { name: "HTML5 & CSS3", description: "Semantic markup and modern CSS (Flexbox, Grid).", icon: Layout },
    ]
  },
  {
    title: "Frameworks & Libraries",
    description: "Building blocks for scalable applications",
    icon: Atom,
    items: [
      { name: "React.js", description: "Library for building interactive UIs.", icon: Atom },
      { name: "Next.js", description: "Full-stack React framework with SSR & API routes.", icon: Zap },
      { name: "Redux Toolkit", description: "State management for complex apps.", icon: Database },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI.", icon: Wind },
      { name: "Framer Motion", description: "Production-ready animations for React.", icon: Move },
    ]
  },
  {
    title: "Development Tools",
    description: "Tools that power my daily workflow",
    icon: Wrench,
    items: [
      { name: "VS Code", description: "Primary editor with ESLint, Prettier, GitLens.", icon: Code },
      { name: "Git & GitHub", description: "Version control and collaboration.", icon: GitBranch },
      { name: "Chrome DevTools", description: "Debugging and performance analysis.", icon: Monitor },
      { name: "Postman", description: "API testing and documentation.", icon: Send },
      { name: "npm", description: "Package manager for dependencies and scripts.", icon: Package },
    ]
  },
  {
    title: "Design & UI",
    description: "Creating beautiful user experiences",
    icon: PenTool,
    items: [
      { name: "Figma", description: "UI design, prototyping, and collaboration.", icon: PenTool },
      { name: "Lucide Icons", description: "Consistent icon library for React.", icon: Smile },
      { name: "Google Fonts", description: "Typography with Inter, Outfit, JetBrains Mono.", icon: Type },
    ]
  },
  {
    title: "Backend & APIs",
    description: "Server-side technologies I work with",
    icon: Server,
    items: [
      { name: "Node.js", description: "JavaScript runtime for server-side apps.", icon: Server },
      { name: "Express.js", description: "Minimal web framework for REST APIs.", icon: ServerCog },
      { name: "REST APIs", description: "Designing and consuming RESTful APIs.", icon: Globe },
      { name: "MongoDB", description: "NoSQL database with Mongoose ODM.", icon: Database },
    ]
  },
  {
    title: "Deployment & Hosting",
    description: "Getting projects live and running",
    icon: Cloud,
    items: [
      { name: "Vercel", description: "Primary deployment for Next.js projects.", icon: Triangle },
      { name: "GitHub Pages", description: "Static site hosting for docs/demos.", icon: GitBranch },
      { name: "Netlify", description: "Alternative platform with great build config.", icon: Cloud },
    ]
  },
  {
    title: "AI & APIs",
    description: "Leveraging AI in development",
    icon: Sparkles,
    items: [
      { name: "Google Gemini API", description: "Building AI-powered features via API.", icon: Sparkles },
      { name: "GitHub Copilot", description: "AI pair programmer for faster coding.", icon: Bot },
    ]
  },
  {
    title: "Productivity",
    description: "Staying organized and efficient",
    icon: BookOpen,
    items: [
      { name: "Notion", description: "All-in-one workspace for notes & planning.", icon: BookOpen },
      { name: "Arc Browser", description: "Modern browser with organized spaces.", icon: Compass },
      { name: "Discord", description: "Community engagement & collaboration.", icon: MessageCircle },
    ]
  }
];

export default function UsesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-6"
          >
             <Wrench className="w-8 h-8 text-primary" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
          >
            MY SETUP
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Tools & <span className="text-primary">Technologies</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A comprehensive list of the software, tools, and technologies I use daily to build products and stay productive. Updated regularly.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-24">
           {categories.map((category, catIndex) => (
              <motion.section 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                 <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-card-bg border border-border rounded-xl">
                       <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                       <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                       <p className="text-muted-foreground">{category.description}</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((tool, toolIndex) => (
                       <div 
                         key={tool.name}
                         className="group p-6 bg-card-bg border border-card-border rounded-2xl hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                       >
                          <div className="flex items-start gap-4">
                             <div className="mt-1 p-2 bg-background border border-border rounded-lg group-hover:border-primary/20 transition-colors">
                                <tool.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                             </div>
                             <div>
                                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                   {tool.name}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                   {tool.description}
                                </p>
                             </div>
                          </div>
                       </div>
                    ))}
                 </div>
              </motion.section>
           ))}
        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center text-sm text-slate-500 font-mono">
           Last updated: Feb 2026 • This list is constantly evolving as I discover new tools.
        </div>

      </div>

      <Footer />
    </main>
  );
}
