"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Command, MessageSquare } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0b10]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
          <span className="text-primary">&lt;/&gt;</span> Kartik.dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.path ? "text-white" : "text-slate-400"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="w-px h-6 bg-slate-800" />

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-md text-xs text-slate-400 hover:border-slate-700 transition-colors cursor-not-allowed">
              <Command className="w-3 h-3" />
              <span>Search</span>
              <span className="bg-slate-800 px-1 rounded text-[10px] text-slate-500">⌘K</span>
            </button>
            <Link
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-slate-900 text-sm font-bold rounded-md hover:brightness-110 transition-all"
            >
              Let's Talk <MessageSquare className="w-4 h-4 fill-slate-900" />
            </Link>
          </div>
        </div>

        {/* Mobile Nav Toggle (Simplified) */}
        <div className="md:hidden text-white">
            {/* TODO: Add Mobile Menu */}
            Menu
        </div>
      </div>
    </nav>
  );
}
