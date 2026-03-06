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
      <motion.div
        animate={
          isCorrect === false ? { x: [0, -8, 8, -5, 5, 0] } : {}
        }
        transition={{ duration: 0.4 }}
        className={`min-h-[70px] border-2 border-dashed rounded p-3 flex flex-wrap gap-2 ${
          isCorrect === true ? "border-success bg-success/5" :
          isCorrect === false ? "border-error bg-error/5" :
          "border-border bg-surface-light"
        }`}
      >
        {arrangedWords.length === 0 && (
          <span className="text-muted text-sm py-2">Tap words below to build the sentence...</span>
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
              className={`px-4 py-2 rounded font-bold text-base border transition-colors ${
                isCorrect === true
                  ? "bg-success/10 border-success text-success"
                  : isCorrect === false
                  ? "bg-error/10 border-error text-error"
                  : "bg-accent/10 border-accent text-accent"
              }`}
            >
              {word}
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

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
              className="btn-outline-dark px-4 py-2 text-base"
            >
              {word}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
