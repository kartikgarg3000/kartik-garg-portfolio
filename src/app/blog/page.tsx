"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/blogs";
import { Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["All", "Career", "Development", "Design", "Future Tech"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
         
         <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium font-mono"
            >
               <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
               THE BLOG
            </motion.div>
            
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-5xl md:text-7xl font-bold text-foreground tracking-tight"
            >
               Thoughts & <span className="text-primary">Insights</span>
            </motion.h1>
            
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
               Exploring the frontiers of web development, design, and digital experiences. Deep dives into code, career advice, and technical tutorials.
            </motion.p>

            {/* Search & Filter */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="mt-12 space-y-6"
            >
               <div className="relative max-w-md mx-auto group">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center bg-card-bg border border-border rounded-full px-4 py-3 shadow-lg group-hover:border-primary/50 transition-colors">
                     <Search className="w-5 h-5 text-muted-foreground mr-3" />
                     <input 
                        type="text" 
                        placeholder="Search articles..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none outline-none text-foreground placeholder-muted-foreground w-full"
                     />
                  </div>
               </div>

               <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                     <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                           selectedCategory === category 
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                              : "bg-card-bg border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                        }`}
                     >
                        {category}
                     </button>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-32 px-6 md:px-12 lg:px-24">
         <div className="max-w-7xl mx-auto">
            {filteredPosts.length > 0 ? (
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                     <BlogCard key={post.slug} post={post} index={index} />
                  ))}
               </div>
            ) : (
               <div className="text-center py-20">
                  <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-muted mb-4">
                     <Sparkles className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">No articles found</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your search or filter.</p>
                  <button 
                     onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                     className="mt-6 text-primary hover:underline"
                  >
                     Clear filters
                  </button>
               </div>
            )}
         </div>
      </section>

      <Footer />
    </main>
  );
}
