"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalSteps = [
  { text: "analyzing_inputs...", status: "success" },
  { text: "compiling_blueprint...", status: "success" },
  { text: "executing_build...", status: "warning" },
  { text: "system_launch [OK]", status: "success" },
];

export function RunningTerminal() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    // If all steps are done, restart after a delay
    if (currentStepIndex >= terminalSteps.length) {
      const timeout = setTimeout(() => {
        setCompletedSteps([]);
        setCurrentStepIndex(0);
        setDisplayedText("");
      }, 2000); // Wait 2s before restarting
      return () => clearTimeout(timeout);
    }

    const currentStep = terminalSteps[currentStepIndex];
    const fullText = currentStep.text;

    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 30); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Step completed
      const timeout = setTimeout(() => {
        setCompletedSteps((prev) => [...prev, currentStepIndex]);
        setCurrentStepIndex((prev) => prev + 1);
        setDisplayedText("");
      }, 800); // Pause before next step
      return () => clearTimeout(timeout);
    }
  }, [currentStepIndex, displayedText]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-16">
      {/* Terminal Window */}
      <div className="bg-card-bg rounded-xl border border-card-border overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-background/80 px-4 py-2 flex items-center gap-2 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
          <div className="ml-2 text-[10px] text-muted-foreground font-mono flex items-center gap-2">
            <span className="inline-block animate-spin duration-[3s]">↻</span>
            execution_log.sh
          </div>
        </div>

        {/* Content */}
        <div className="p-6 font-mono text-sm h-64 overflow-hidden flex flex-col justify-end">
             <div className="space-y-2">
                {/* Completed Steps */}
                {completedSteps.map((index) => (
                    <div key={index} className="flex items-center gap-3 text-emerald-500/80">
                        <span className="text-slate-600">0{index + 1} &gt;</span>
                        <span>{terminalSteps[index].text}</span>
                    </div>
                ))}

                {/* Current Typing Step */}
                {currentStepIndex < terminalSteps.length && (
                    <div className="flex items-center gap-3 text-cyan-400">
                        <span className="text-slate-600">0{currentStepIndex + 1} &gt;</span>
                        <span>
                            {displayedText}
                            <span className="animate-pulse bg-cyan-400 w-2 h-4 inline-block align-middle ml-1" />
                        </span>
                    </div>
                )}
             </div>
        </div>
      </div>
    </div>
  );
}
