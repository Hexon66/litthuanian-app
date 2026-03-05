"use client";

import { motion, AnimatePresence } from "framer-motion";

interface XPNotificationProps {
  xp: number;
  show: boolean;
  onComplete?: () => void;
}

export default function XPNotification({ xp, show, onComplete }: XPNotificationProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1, y: 0, scale: 0.5 }}
          animate={{ opacity: 1, y: -20, scale: 1 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={onComplete}
          className="fixed top-1/3 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="gradient-gold rounded-full px-6 py-3 shadow-lg border-2 border-brand-gold-400">
            <span className="text-2xl font-extrabold text-brand-gold-700">+{xp} XP</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
