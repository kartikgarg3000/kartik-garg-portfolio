"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay slightly to avoid synchronous render warning
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    // Render a placeholder with same dimensions to prevent layout shift
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full border border-border bg-card-bg text-foreground hover:bg-accent/10 hover:border-accent/50 transition-all group relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative z-10">
        {theme === "dark" ? (
          <Moon className="w-5 h-5 group-hover:text-primary transition-colors" />
        ) : (
          <Sun className="w-5 h-5 group-hover:text-orange-500 transition-colors" />
        )}
      </div>
    </button>
  );
}
