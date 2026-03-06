"use client";

import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { Exercise } from "@/data/curriculum";

interface Props {
  exercise: Exercise;
  selectedOption: string | null;
  isCorrect: boolean | null;
  onSelect: (opt: string) => void;
  onPlayAudio: () => void;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ListeningExercise({ exercise, selectedOption, isCorrect, onSelect, onPlayAudio }: Props) {
  return (
    <div className="space-y-6 mt-auto">
      <div className="flex justify-center">
        <motion.button
          onClick={onPlayAudio}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="bg-accent/20 border border-accent p-5 rounded text-accent flex items-center gap-3"
        >
          <Volume2 className="w-8 h-8" />
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-1 bg-accent/80 rounded-full"
                style={{
                  animation: `wave-bar 0.8s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                  height: 8,
                }}
              />
            ))}
          </div>
        </motion.button>
      </div>

      <motion.div
        className="grid gap-3"
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
    </div>
  );
}
