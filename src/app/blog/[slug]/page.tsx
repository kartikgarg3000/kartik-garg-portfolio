"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/blogs";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import ReactMarkdown from "react-markdown";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = use(params);
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <article className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
               <span className="px-3 py-1 text-xs font-medium font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
                  {post.category}
               </span>
               <div className="text-muted-foreground text-xs flex items-center gap-4">
                  <span className="flex items-center gap-1">
                     <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                     <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
               </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6 leading-tight">
               {post.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
               {post.description}
            </p>
          </header>

          {/* Cover Image */}
          <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden border border-border">
             <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
             />
          </div>

          {/* Content */}
          <div className="prose dark:prose-invert prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-pre:bg-card-bg prose-pre:border prose-pre:border-border">
             <ReactMarkdown>
                {post.content}
             </ReactMarkdown>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
