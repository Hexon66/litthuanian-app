"use client";

import { motion, type TargetAndTransition } from "framer-motion";

type Mood = "happy" | "sad" | "excited" | "thinking";

const moodConfig: Record<Mood, { emoji: string; bg: string; border: string }> = {
  happy: { emoji: "\u{1F9D1}\u200D\u{1F393}", bg: "bg-accent/10", border: "border-accent/30" },
  sad: { emoji: "\u{1F614}", bg: "bg-error/10", border: "border-error/30" },
  excited: { emoji: "\u{1F389}", bg: "bg-accent2/10", border: "border-accent2/30" },
  thinking: { emoji: "\u{1F914}", bg: "bg-accent/10", border: "border-accent/30" },
};

const moodAnimations: Record<Mood, TargetAndTransition> = {
  happy: { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity } },
  sad: { y: [0, 3, 0], transition: { duration: 2, repeat: Infinity } },
  excited: { rotate: [0, -5, 5, 0], scale: [1, 1.1, 1], transition: { duration: 0.6, repeat: Infinity } },
  thinking: { rotate: [0, 3, -3, 0], transition: { duration: 3, repeat: Infinity } },
};

interface MascotProps {
  mood?: Mood;
  size?: "sm" | "md" | "lg";
  message?: string;
}

const sizes = { sm: "w-10 h-10 text-xl", md: "w-14 h-14 text-2xl", lg: "w-20 h-20 text-4xl" };

export default function Mascot({ mood = "happy", size = "md", message }: MascotProps) {
  const config = moodConfig[mood];
  const sizeClass = sizes[size];

  return (
    <div className="flex items-start gap-3">
      <motion.div
        animate={moodAnimations[mood]}
        className={`${sizeClass} ${config.bg} ${config.border} border-2 rounded-full flex items-center justify-center shrink-0`}
      >
        {config.emoji}
      </motion.div>
      {message && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-surface border border-border rounded px-4 py-2 text-sm text-text-dim max-w-[200px]"
        >
          {message}
        </motion.div>
      )}
    </div>
  );
}
