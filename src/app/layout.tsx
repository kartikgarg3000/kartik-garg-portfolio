import type { Metadata } from "next";
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
    <html lang="en">
      <body
        className="antialiased bg-[#0a0b10] text-[#94a3b8] relative min-h-screen font-sans"
      >
        {/* Grid Background */}
        <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-[0.05] pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
