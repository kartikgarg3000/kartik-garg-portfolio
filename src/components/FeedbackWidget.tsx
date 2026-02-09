"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquarePlus, X, Bug, Lightbulb, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FeedbackType = "bug" | "feature";

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<FeedbackType>("bug");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsOpen(false);
      // Reset form if needed
    }, 2000);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
      >
        <MessageSquarePlus className="w-6 h-6" />
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-card-bg border border-card-border rounded-2xl shadow-2xl overflow-hidden"
            >
               {/* Close Button */}
               <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/10"
               >
                  <X className="w-5 h-5" />
               </button>

               {/* Content */}
               <div className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">Report a Bug / Suggest a Feature</h2>
                  
                  {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Feedback Received!</h3>
                        <p className="text-muted-foreground">Thanks for helping me improve.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Type Selection */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => setType("bug")}
                                className={cn(
                                    "flex items-center justify-center gap-2 p-3 rounded-lg border transition-all",
                                    type === "bug" 
                                        ? "bg-red-500/10 border-red-500/50 text-red-400" 
                                        : "bg-background/5 border-border text-muted-foreground hover:bg-background/10"
                                )}
                            >
                                <Bug className="w-4 h-4" /> Bug Report
                            </button>
                            <button
                                type="button"
                                onClick={() => setType("feature")}
                                className={cn(
                                    "flex items-center justify-center gap-2 p-3 rounded-lg border transition-all",
                                    type === "feature" 
                                        ? "bg-yellow-500/10 border-yellow-500/50 text-yellow-400" 
                                        : "bg-background/5 border-border text-muted-foreground hover:bg-background/10"
                                )}
                            >
                                <Lightbulb className="w-4 h-4" /> Feature Request
                            </button>
                        </div>

                        {/* Title Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Title</label>
                            <input 
                                required
                                type="text" 
                                placeholder="Brief summary"
                                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                            />
                        </div>

                        {/* Description Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Description</label>
                            <textarea 
                                required
                                rows={4}
                                placeholder="Describe the issue or feature in detail..."
                                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 resize-none"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Email <span className="text-muted-foreground/60">(optional)</span></label>
                            <input 
                                type="email" 
                                placeholder="your@email.com"
                                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary text-slate-900 font-bold py-3 rounded-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                                </>
                            ) : (
                                "Submit Feedback"
                            )}
                        </button>
                    </form>
                  )}
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
