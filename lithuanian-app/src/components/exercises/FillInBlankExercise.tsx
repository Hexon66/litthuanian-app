"use client";

import { motion } from "framer-motion";

interface Props {
  fillInput: string;
  isCorrect: boolean | null;
  onChange: (val: string) => void;
  onSubmit: () => void;
}

export default function FillInBlankExercise({ fillInput, isCorrect, onChange, onSubmit }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-auto space-y-4"
    >
      <motion.div
        animate={
          isCorrect === true ? { scale: [1, 1.02, 1] } :
          isCorrect === false ? { x: [0, -8, 8, -5, 5, 0] } :
          {}
        }
        transition={{ duration: 0.4 }}
      >
        <input
          type="text"
          value={fillInput}
          onChange={(e) => {
            if (isCorrect !== null) return;
            onChange(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit();
          }}
          placeholder="Type your answer..."
          className={`w-full bg-white border-2 rounded-xl px-5 py-4 text-lg outline-none transition-all ${
            isCorrect === true
              ? "border-brand-green-500 bg-brand-green-100 text-brand-green-700"
              : isCorrect === false
              ? "border-brand-red-500 bg-brand-red-50 text-red-700"
              : "border-zinc-200 focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-200"
          }`}
          disabled={isCorrect !== null}
          autoFocus
        />
      </motion.div>
    </motion.div>
  );
}
