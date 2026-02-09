"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bug, Lightbulb } from "lucide-react";
import { useState } from "react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FeedbackType = "bug" | "feature";

export function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [type, setType] = useState<FeedbackType>("bug");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Feedback Submitted:", { type, ...formData });
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after showing success message
    setTimeout(() => {
       setIsSuccess(false);
       onClose();
       setFormData({ title: "", description: "", email: "" });
       setType("bug");
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-card-bg border border-border rounded-2xl shadow-2xl p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">
                Report a Bug / Suggest a Feature
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Type Selection */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-black/20 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setType("bug")}
                    className={`flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                      type === "bug"
                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Bug className="w-4 h-4" />
                    Bug Report
                  </button>
                  <button
                    type="button"
                    onClick={() => setType("feature")}
                    className={`flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                      type === "feature"
                        ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Lightbulb className="w-4 h-4" />
                    Feature Request
                  </button>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium text-muted-foreground">
                    Title
                  </label>
                  <input
                    id="title"
                    required
                    type="text"
                    placeholder="Brief summary"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium text-muted-foreground">
                    Description
                  </label>
                  <textarea
                    id="description"
                    required
                    rows={4}
                    placeholder="Describe the issue or feature in detail..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                     Email <span className="text-slate-500 font-normal">(optional)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <p className="text-xs text-slate-500">We&apos;ll contact you for updates</p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Feedback
                    </>
                  )}
                </button>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                   <Send className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Thank You!</h3>
                <p className="text-muted-foreground">
                   Your feedback has been received. We appreciate your contribution to making this project better.
                </p>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
