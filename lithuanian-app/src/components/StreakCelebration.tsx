"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

interface StreakCelebrationProps {
  streak: number;
}

export default function StreakCelebration({ streak }: StreakCelebrationProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (streak <= 0) return;
    const shown = sessionStorage.getItem("ltgo_streak_shown");
    if (!shown) {
      setShow(true);
      sessionStorage.setItem("ltgo_streak_shown", "1");
      const timer = setTimeout(() => setShow(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [streak]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="gradient-fire rounded-3xl p-8 text-center shadow-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.6, repeat: 2 }}
            >
              <Flame className="w-16 h-16 text-white mx-auto mb-3 drop-shadow-lg" />
            </motion.div>
            <p className="text-4xl font-extrabold text-white mb-1">{streak} Day Streak!</p>
            <p className="text-white/80 text-lg font-medium">Keep it up!</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
