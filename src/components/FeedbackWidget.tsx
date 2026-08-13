"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { FeedbackModal } from "./FeedbackModal";

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-slate-900 font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-105 hover:shadow-primary/40 transition-all group"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden md:inline-block font-medium">Feedback</span>
      </button>
      
      <FeedbackModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
