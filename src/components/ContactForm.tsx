"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Send, MessageSquare, Code2 } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submitting...
    console.log(formData);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      
      {/* Header */}
      <div className="text-center mb-20">
         <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-cyan-500 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)]"
         >
            <MessageSquare className="w-10 h-10 text-white fill-current" />
         </motion.div>
         
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
         >
            <h2 className="text-cyan-500 font-mono text-sm tracking-widest mb-4 uppercase">Get In Touch</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
               Let&apos;s <span className="text-cyan-500">Connect</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
               Have a project in mind? Want to collaborate? Or just want to say hello? I&apos;d love to hear from you. Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
         </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
         {/* Contact Info */}
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
                        <a href="mailto:kartikgarg.cse.2025@gmail.com" className="text-foreground hover:text-cyan-500 transition-colors font-medium">kartikgarg.cse.2025@gmail.com</a>
                     </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-lg bg-card-bg border border-card-border flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-cyan-500" />
                     </div>
                     <div>
                        <p className="text-sm font-mono text-muted-foreground mb-1">Phone</p>
                        <a href="" className="text-foreground hover:text-cyan-500 transition-colors font-medium"></a>
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
                     { Icon: Github, href: "https://github.com/kartikgarg3000" },
                     { Icon: Linkedin, href: "https://www.linkedin.com/in/kartik-garg-a01027231/" },
                     { Icon: Twitter, href: "https://x.com/Kartik_sui" },
                     { Icon: Code2, href: "https://leetcode.com/u/Kartikgarg___/" }
                  ].map(({ Icon, href }, i) => (
                     <a key={i} href={href} target="_blank" className="w-12 h-12 rounded-lg bg-card-bg border border-card-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all">
                        <Icon className="w-5 h-5" />
                     </a>
                  ))}
               </div>
            </div>

            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
               <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Available for work</span>
               </div>
               <p className="text-slate-400 text-sm leading-relaxed">
                  I&apos;m currently open to new opportunities and exciting projects. Let&apos;s create something amazing together!
               </p>
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
                     <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Your Name</label>
                     <input 
                        type="text" 
                        placeholder="Kartik Garg"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50 transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Your Email</label>
                     <input 
                        type="email" 
                        placeholder="kartikgarg.cse.2025@gmail.com"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50 transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                     />
                  </div>
                  
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Subject</label>
                  <div className="relative">
                     <select 
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none cursor-pointer"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                     >
                        <option value="" disabled>Select a subject</option>
                        <option value="project">Project Inquiry</option>
                        <option value="freelance">Freelance Opportunity</option>
                        <option value="other">Other</option>
                     </select>
                     <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        ▼
                     </div>
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Message</label>
                  <textarea 
                     rows={5}
                     placeholder="Tell me about your project..."
                     className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
               </div>

               <button 
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-4 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 group"
               >
                  <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Send Message
               </button>
            </form>
         </motion.div>
      </div>
    </section>
  );
}
