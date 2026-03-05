"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Check, Trophy } from "lucide-react";
import { getProgress, completeLesson } from "@/lib/progress";
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
      // Award 2x XP
      const progress = getProgress();
      progress.xp += 30;
      const { saveProgress } = require("@/lib/progress");
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
          className="glass card-elevated p-4 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-brand-gold-100 flex items-center justify-center shrink-0">
            <Trophy className="w-5 h-5 text-brand-gold-500" />
          </div>
          <div>
            <p className="font-bold text-zinc-800 text-sm">Daily Challenge Complete!</p>
            <p className="text-zinc-500 text-xs">Come back tomorrow for a new one</p>
          </div>
          <Check className="w-5 h-5 text-brand-green-500 ml-auto" />
        </motion.div>
      );
    }
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass card-elevated overflow-hidden"
    >
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center gap-3 text-left"
      >
        <div className="w-10 h-10 rounded-full gradient-fire flex items-center justify-center shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-zinc-800 text-sm">Daily Challenge</p>
          <p className="text-brand-gold-500 text-xs font-bold">2x XP Reward!</p>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          className="text-zinc-400 text-sm"
        >
          ▼
        </motion.span>
      </button>

      {/* Expanded exercise */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-zinc-100"
          >
            <div className="p-4 space-y-4">
              <p className="text-sm font-bold text-zinc-700">{exercise.prompt}</p>

              {(exercise.type === "multiple_choice" || exercise.type === "listening") && (
                <MultipleChoiceExercise
                  exercise={exercise}
                  selectedOption={selectedOption}
                  isCorrect={isCorrect}
                  onSelect={setSelectedOption}
                />
              )}
              {exercise.type === "fill_in_blank" && (
                <FillInBlankExercise
                  fillInput={fillInput}
                  isCorrect={isCorrect}
                  onChange={setFillInput}
                  onSubmit={handleCheck}
                />
              )}

              {isCorrect === null && (
                <button
                  onClick={handleCheck}
                  disabled={!selectedOption && !fillInput.trim()}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    selectedOption || fillInput.trim() ? "btn-green" : "bg-zinc-200 text-zinc-400"
                  }`}
                >
                  Check
                </button>
              )}

              {isCorrect !== null && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center font-bold ${isCorrect ? "text-brand-green-600" : "text-brand-red-500"}`}
                >
                  {isCorrect ? "+30 XP! 🎉" : `Answer: ${exercise.correctAnswer}`}
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
