"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter, 
  Send, 
  MessageSquare, 
  Code2, 
  CheckCircle2, 
  AlertCircle, 
  Loader2 
} from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Simulate API call (Replace this with your email backend e.g. Resend, EmailJS, or Next.js API Route)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Submitted Form Data:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      
      {/* Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 bg-primary rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]"
        >
          <MessageSquare className="w-10 h-10 text-primary-foreground fill-current" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-primary font-mono text-sm tracking-widest mb-4 uppercase">Get In Touch</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Let&apos;s <span className="text-primary">Connect</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hello? I&apos;d love to hear from you. Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-12"
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-card-bg border border-card-border flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground mb-1">Email</p>
                  <a href="mailto:kartikgarg.cse.2025@gmail.com" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
                    kartikgarg.cse.2025@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-card-bg border border-card-border flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+919045088646" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
                    +91 9045088646
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-card-bg border border-card-border flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground mb-1">Location</p>
                  <span className="text-foreground font-medium">India</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Follow Me</h3>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/kartikgarg3000", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/kartik-garg-a01027231/", label: "LinkedIn" },
                { Icon: Twitter, href: "https://x.com/Kartik_sui", label: "Twitter" },
                { Icon: Code2, href: "https://leetcode.com/u/Kartikgarg___/", label: "LeetCode" }
              ].map(({ Icon, href, label }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-lg bg-card-bg border border-card-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card-bg border border-card-border rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] -z-10" />

          <h3 className="text-2xl font-bold text-foreground mb-2">Send a Message</h3>
          <p className="text-muted-foreground mb-8 text-sm">I&apos;ll get back to you within 24-48 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Your Name</label>
                <input 
                  id="name"
                  type="text" 
                  required
                  placeholder="Your Name"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Your Email</label>
                <input 
                  id="email"
                  type="email" 
                  required
                  placeholder="Your Email"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Subject</label>
              <div className="relative">
                <select 
                  id="subject"
                  required
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none cursor-pointer"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="freelance">Freelance Opportunity</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">
                  ▼
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Message</label>
              <textarea 
                id="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                Message sent successfully! I will get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl flex items-center gap-3 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                Something went wrong. Please try sending again.
              </div>
            )}

            <button 
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 disabled:cursor-not-allowed text-slate-900 font-bold py-4 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 group"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}