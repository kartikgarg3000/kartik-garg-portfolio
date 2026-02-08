"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Instagram, Code2, MapPin, Zap, Bug } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [time, setTime] = useState("");

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
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Code2 className="w-5 h-5" />
              </span> 
              Kartik.dev
            </Link>
            
            <div className="space-y-1">
              <p className="text-slate-400 text-sm">Full Stack Developer</p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                 Crafting digital experiences with passion and precision. Turning ideas into elegant, functional solutions that make a difference.
              </p>
            </div>

            <div className="space-y-3 pt-2">
               <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  <span>India</span>
               </div>
               <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Local time: {time}</span>
               </div>
            </div>

            <div className="flex gap-4 pt-2">
              {[
                { icon: Github, href: "https://github.com/kartikgarg3000" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kartik-garg-a01027231/" },
                { icon: Twitter, href: "https://x.com/Kartik_sui" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-600 transition-all hover:-translate-y-1"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-6 flex items-center gap-2">
               <span className="w-6 h-px bg-primary" /> Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Blog", href: "#" }, 
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-6 flex items-center gap-2">
               <span className="w-6 h-px bg-emerald-500" /> Resources
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Resume", href: "#" },
                { name: "Uses", href: "#" },
                { name: "Buy Me a Coffee", href: "#", icon: "☕" },
                { name: "RSS Feed", href: "#" },
                { name: "Sitemap", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2">
                    {link.icon && <span>{link.icon}</span>}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Improve */}
          <div>
             <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-6 flex items-center gap-2">
               <span className="w-6 h-px bg-purple-500" /> Help Improve
            </h3>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">
               Found a bug or have a feature suggestion? Let me know!
            </p>
            <a 
               href="mailto:kartikgarg.cse.2025@gmail.com"
               className="inline-flex items-center gap-2 px-4 py-3 bg-slate-900 border border-dashed border-slate-700 rounded-lg text-sm text-primary hover:bg-slate-800 hover:border-primary/50 transition-all w-full justify-center group"
            >
               <Bug className="w-4 h-4 group-hover:animate-bounce" /> Report Bug / Suggest Feature
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Kartik.dev · All rights reserved.
           </div>
           <div className="text-slate-500 text-sm flex items-center gap-1">
              Made with <span className="text-red-500 animate-pulse">❤</span> and <span className="text-amber-500">☕</span> by <span className="text-slate-300 font-medium">Kartik Garg</span>
           </div>
           
           <div className="flex gap-4 text-xs text-slate-600">
              <Link href="#" className="hover:text-slate-400 transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-slate-400 transition-colors">Terms</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
