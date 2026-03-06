"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Check, Trophy } from "lucide-react";
import { getProgress, saveProgress } from "@/lib/progress";
import { getDailyChallengeExercise, isDailyChallengeCompleted, completeDailyChallenge } from "@/lib/dailyChallenge";
import { Exercise } from "@/data/curriculum";
import MultipleChoiceExercise from "@/components/exercises/MultipleChoiceExercise";
import FillInBlankExercise from "@/components/exercises/FillInBlankExercise";

export default function DailyChallenge() {
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [completed, setCompleted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [fillInput, setFillInput] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    const done = isDailyChallengeCompleted();
    setCompleted(done);
    if (!done) {
      const progress = getProgress();
      const ex = getDailyChallengeExercise(progress.completedLessons);
      setExercise(ex);
    }
  }, []);

  const handleCheck = () => {
    if (!exercise) return;
    let correct = false;

    if (exercise.type === "multiple_choice" || exercise.type === "listening") {
      if (!selectedOption) return;
      correct = selectedOption === exercise.correctAnswer;
    } else if (exercise.type === "fill_in_blank") {
      if (!fillInput.trim()) return;
      correct = fillInput.trim().toLowerCase() === (exercise.correctAnswer as string).toLowerCase();
    }

    setIsCorrect(correct);
    completeDailyChallenge();

    if (correct) {
      const progress = getProgress();
      progress.xp += 30;
      saveProgress(progress);
    }

    setTimeout(() => setCompleted(true), 1500);
  };

  if (!exercise || completed) {
    if (completed) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-4 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded bg-accent2/10 flex items-center justify-center shrink-0">
            <Trophy className="w-5 h-5 text-accent2" />
          </div>
          <div>
            <p className="font-semibold text-text text-sm">Daily Challenge Complete!</p>
            <p className="text-muted text-xs">Come back tomorrow for a new one</p>
          </div>
          <Check className="w-5 h-5 text-accent ml-auto" />
        </motion.div>
      );
    }
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="card overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center gap-3 text-left"
      >
        <div className="w-10 h-10 rounded bg-accent2/10 flex items-center justify-center shrink-0">
          <Zap className="w-5 h-5 text-accent2" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-text text-sm">Daily Challenge</p>
          <p className="text-accent2 text-xs font-bold uppercase tracking-wider">2x XP Reward!</p>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          className="text-muted text-sm"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border"
          >
            <div className="p-4 space-y-4">
              <p className="text-sm font-bold text-text">{exercise.prompt}</p>

              {(exercise.type === "multiple_choice" || exercise.type === "listening") && (
                <MultipleChoiceExercise exercise={exercise} selectedOption={selectedOption} isCorrect={isCorrect} onSelect={setSelectedOption} />
              )}
              {exercise.type === "fill_in_blank" && (
                <FillInBlankExercise fillInput={fillInput} isCorrect={isCorrect} onChange={setFillInput} onSubmit={handleCheck} />
              )}

              {isCorrect === null && (
                <button
                  onClick={handleCheck}
                  disabled={!selectedOption && !fillInput.trim()}
                  className={`w-full py-3 rounded font-bold transition-all ${
                    selectedOption || fillInput.trim() ? "btn-accent" : "bg-surface-light text-muted"
                  }`}
                >
                  Check
                </button>
              )}

              {isCorrect !== null && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-center font-bold ${isCorrect ? "text-accent" : "text-error"}`}>
                  {isCorrect ? "+30 XP!" : `Answer: ${exercise.correctAnswer}`}
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
