"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  options: string[];
  arrangedWords: string[];
  isCorrect: boolean | null;
  onAddWord: (word: string) => void;
  onRemoveWord: (index: number) => void;
}

export default function SentenceArrangeExercise({ options, arrangedWords, isCorrect, onAddWord, onRemoveWord }: Props) {
  const availableWords = options.filter((w) => !arrangedWords.includes(w));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-auto space-y-6"
    >
      {/* Arranged sentence area */}
      <motion.div
        animate={
          isCorrect === false ? { x: [0, -8, 8, -5, 5, 0] } : {}
        }
        transition={{ duration: 0.4 }}
        className={`min-h-[70px] border-2 border-dashed rounded-xl p-3 flex flex-wrap gap-2 ${
          isCorrect === true ? "border-brand-green-500 bg-brand-green-50" :
          isCorrect === false ? "border-brand-red-500 bg-brand-red-50" :
          "border-zinc-300 bg-white/60"
        }`}
      >
        {arrangedWords.length === 0 && (
          <span className="text-zinc-400 text-sm py-2">Tap words below to build the sentence...</span>
        )}
        <AnimatePresence>
          {arrangedWords.map((word, i) => (
            <motion.button
              key={`${word}-${i}`}
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileTap={isCorrect === null ? { scale: 0.9 } : {}}
              onClick={() => {
                if (isCorrect !== null) return;
                onRemoveWord(i);
              }}
              className={`px-4 py-2 rounded-lg font-bold text-base border-b-4 transition-colors ${
                isCorrect === true
                  ? "bg-brand-green-100 border-brand-green-500 text-brand-green-700"
                  : isCorrect === false
                  ? "bg-brand-red-50 border-brand-red-500 text-red-700"
                  : "bg-brand-blue-50 border-brand-blue-500 text-blue-700"
              }`}
            >
              {word}
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Available words */}
      <div className="flex flex-wrap gap-2 justify-center">
        <AnimatePresence>
          {availableWords.map((word) => (
            <motion.button
              key={word}
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (isCorrect !== null) return;
                onAddWord(word);
              }}
              className="btn-outline px-4 py-2 text-base"
            >
              {word}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
