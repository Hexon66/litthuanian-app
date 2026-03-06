"use client";

import { motion } from "framer-motion";
import { Exercise } from "@/data/curriculum";

interface Props {
  exercise: Exercise;
  selectedOption: string | null;
  isCorrect: boolean | null;
  onSelect: (opt: string) => void;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MultipleChoiceExercise({ exercise, selectedOption, isCorrect, onSelect }: Props) {
  return (
    <motion.div
      className="grid gap-3 mt-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {exercise.options?.map((opt: string) => {
        const isSelected = selectedOption === opt;
        const showCorrect = isCorrect === true && isSelected;
        const showWrong = isCorrect === false && isSelected;

        return (
          <motion.button
            key={opt}
            variants={itemVariants}
            onClick={() => {
              if (isCorrect !== null) return;
              onSelect(opt);
            }}
            whileTap={isCorrect === null ? { scale: 0.97 } : {}}
            animate={
              showCorrect ? { scale: [1, 1.03, 1] } :
              showWrong ? { x: [0, -8, 8, -5, 5, 0] } :
              {}
            }
            transition={{ duration: 0.4 }}
            className={`py-4 px-6 text-left text-base rounded border transition-colors ${
              showCorrect ? "bg-success/10 border-success text-success" :
              showWrong ? "bg-error/10 border-error text-error" :
              isSelected ? "bg-accent/10 border-accent text-accent" :
              "bg-bg border-border text-text hover:border-accent hover:text-accent"
            }`}
          >
            {opt}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
