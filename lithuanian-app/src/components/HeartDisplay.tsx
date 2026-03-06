"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";

interface HeartDisplayProps {
  hearts: number;
  maxHearts?: number;
  justLost?: boolean;
}

export default function HeartDisplay({ hearts, maxHearts = 5, justLost = false }: HeartDisplayProps) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxHearts }).map((_, i) => {
        const isFilled = i < hearts;
        const isLastLost = justLost && i === hearts;

        return (
          <motion.div
            key={i}
            animate={isLastLost ? { scale: [1, 1.4, 0], opacity: [1, 1, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <Heart
              className={`w-5 h-5 ${isFilled ? "text-error fill-error" : "text-border fill-border"}`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
