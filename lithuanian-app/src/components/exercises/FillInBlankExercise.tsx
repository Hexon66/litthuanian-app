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
          className={`w-full bg-bg border rounded px-5 py-4 text-base outline-none transition-all text-text placeholder:text-muted ${
            isCorrect === true
              ? "border-success bg-success/5 text-success"
              : isCorrect === false
              ? "border-error bg-error/5 text-error"
              : "border-border focus:border-accent"
          }`}
          disabled={isCorrect !== null}
          autoFocus
        />
      </motion.div>
    </motion.div>
  );
}
