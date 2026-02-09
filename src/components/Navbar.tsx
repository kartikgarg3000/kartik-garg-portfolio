"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Command, MessageSquare } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-2">
          <div className={cn(
             "flex items-center justify-center w-8 h-8 rounded-lg transition-colors",
             isScrolled ? "bg-primary/10 text-primary" : "bg-foreground/10 text-foreground"
          )}>
             <span className="font-mono">&lt;/&gt;</span>
          </div>
          Kartik.dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-1 bg-foreground/5 p-1 rounded-full border border-border">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all",
                    pathname === item.path 
                       ? "text-primary-foreground bg-foreground/10 shadow-sm" 
                       : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all",
                isScrolled
                   ? "bg-primary text-slate-900 hover:brightness-110"
                   : "bg-white text-slate-900 hover:bg-slate-200"
              )}
            >
              Let&apos;s Talk <MessageSquare className="w-4 h-4 fill-current" />
            </Link>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden text-foreground">
            {/* TODO: Add Mobile Menu */}
            Menu
        </div>
      </div>
    </motion.nav>
  );
}
