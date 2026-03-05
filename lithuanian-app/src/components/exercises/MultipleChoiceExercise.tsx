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
            className={`py-4 px-6 text-left text-lg rounded-xl border-2 border-b-4 font-bold transition-colors ${
              showCorrect ? "bg-brand-green-100 border-brand-green-500 text-brand-green-700" :
              showWrong ? "bg-brand-red-50 border-brand-red-500 text-red-700" :
              isSelected ? "bg-brand-blue-50 border-brand-blue-500 text-blue-700" :
              "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300"
            }`}
          >
            {opt}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
