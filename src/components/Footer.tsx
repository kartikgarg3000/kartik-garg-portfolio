"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FeedbackModal } from "./FeedbackModal";
import { Twitter, Linkedin, Github, Code2, MapPin, Zap, Bug } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata", // Set to India Standard Time
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-background border-t border-border pt-20 pb-8 relative">
      <FeedbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Code2 className="w-5 h-5" />
              </span> 
              Kartik.dev
            </Link>
            
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Full Stack Developer</p>
              <p className="text-muted-foreground/80 text-sm leading-relaxed max-w-xs">
                 Crafting digital experiences with passion and precision. Turning ideas into elegant, functional solutions that make a difference.
              </p>
            </div>

            <div className="space-y-3 pt-2">
               <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  <span>India</span>
               </div>
               <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Local time: {time}</span>
               </div>
            </div>

            <div className="flex gap-4 pt-2">
              {[
                { icon: Github, href: "https://github.com/kartikgarg3000" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kartik-garg-a01027231/" },
                { icon: Twitter, href: "https://x.com/Kartik_sui" },
                { icon: Code2, href: "https://leetcode.com/u/Kartikgarg___/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
               <span className="w-6 h-px bg-primary" /> Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
               <span className="w-6 h-px bg-accent" /> Resources
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Resume", href: "https://drive.google.com/file/d/1ZulF0ytPXUsagQCCJaMQn10GJGJOvE4e/view?usp=drive_link" },
                { name: "Uses", href: "/uses" },
                // { name: "Buy Me a Coffee", href: "#", icon: "☕" },
                // { name: "RSS Feed", href: "#" },
                // { name: "Sitemap", href: "#" },
              ].map((link: { name: string; href: string; icon?: string }) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2">
                    {link.icon && <span>{link.icon}</span>}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Improve */}
          <div>
             <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
               <span className="w-6 h-px bg-purple-500" /> Help Improve
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
               Found a bug or have a feature suggestion? Let me know!
            </p>
            <button 
               onClick={() => setIsModalOpen(true)}
               className="inline-flex items-center gap-2 px-4 py-3 bg-card-bg border border-dashed border-border rounded-lg text-sm text-primary hover:bg-accent/10 hover:border-primary/50 transition-all w-full justify-center group"
            >
               <Bug className="w-4 h-4 group-hover:animate-bounce" /> Report Bug / Suggest Feature
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Kartik.dev · All rights reserved.
           </div>
           <div className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <span className="text-red-500 animate-pulse">❤</span> and <span className="text-amber-500">☕</span> by <span className="text-foreground font-medium">Kartik Garg</span>
           </div>
           
           <div className="flex gap-4 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
