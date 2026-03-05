"use client";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";

interface ProgressBarAnimatedProps {
  progress: number; // 0 to 1
  showCelebration?: boolean;
}

export default function ProgressBarAnimated({ progress, showCelebration = true }: ProgressBarAnimatedProps) {
  const prevProgress = useRef(progress);

  useEffect(() => {
    if (showCelebration && progress >= 1 && prevProgress.current < 1) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.3 },
        colors: ["#22c55e", "#eab308", "#3b82f6"],
      });
    }
    prevProgress.current = progress;
  }, [progress, showCelebration]);

  return (
    <div className="w-full h-3 bg-zinc-200 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-brand-green-500"
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(progress * 100, 100)}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}
