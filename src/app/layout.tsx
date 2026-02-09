import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartik Garg | Portfolio",
  description: "Software Engineer & Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased bg-background text-foreground relative min-h-screen font-sans"
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
        <SmoothScroll>
          <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-[0.05] pointer-events-none" />
          {children}
          <FeedbackWidget />
        </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
