"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, RotateCcw, Check, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimatedPage from "@/components/AnimatedPage";
import Mascot from "@/components/Mascot";
import ProgressBarAnimated from "@/components/ProgressBarAnimated";
import { getDueReviews, recordReview, ReviewItem } from "@/lib/spacedRepetition";

export default function ReviewPage() {
  const router = useRouter();
  const [items, setItems] = useState<ReviewItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const due = getDueReviews();
    setItems(due);
    if (due.length === 0) setIsFinished(true);
  }, []);

  const currentItem = items[currentIndex];
  const progress = items.length > 0 ? currentIndex / items.length : 0;

  const handleAnswer = (correct: boolean) => {
    if (!currentItem) return;
    recordReview(currentItem.wordId, correct);
    if (correct) setCorrectCount((c) => c + 1);

    setIsFlipped(false);
    if (currentIndex < items.length - 1) {
      setTimeout(() => setCurrentIndex((i) => i + 1), 200);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished && items.length === 0) {
    return (
      <AnimatedPage className="flex flex-col h-screen items-center justify-center p-6 text-center">
        <Mascot mood="happy" size="lg" />
        <h1 className="text-2xl font-extrabold text-zinc-800 mt-6 mb-2">All Caught Up!</h1>
        <p className="text-zinc-500 mb-6">No words to review right now. Come back later!</p>
        <button onClick={() => router.push("/")} className="btn-green px-8 py-3 text-lg">
          Back to Learn
        </button>
      </AnimatedPage>
    );
  }

  if (isFinished) {
    const pct = Math.round((correctCount / items.length) * 100);
    return (
      <AnimatedPage className="flex flex-col h-screen items-center justify-center p-6 text-center">
        <Mascot mood={pct >= 80 ? "excited" : "happy"} size="lg" />
        <h1 className="text-3xl font-extrabold text-zinc-800 mt-6 mb-2">Review Done!</h1>
        <p className="text-zinc-500 mb-2">{correctCount}/{items.length} correct ({pct}%)</p>
        <div className="w-48 mb-6">
          <ProgressBarAnimated progress={pct / 100} />
        </div>
        <button onClick={() => router.push("/")} className="btn-green px-8 py-3 text-lg">
          Continue
        </button>
      </AnimatedPage>
    );
  }

  return (
    <div className="flex flex-col h-screen min-h-screen">
      {/* Top bar */}
      <div className="px-4 py-3 flex items-center gap-3 glass border-b border-white/30">
        <Link href="/">
          <button className="text-zinc-400 hover:text-zinc-600 p-1">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>
        <div className="flex-1">
          <ProgressBarAnimated progress={progress} showCelebration={false} />
        </div>
        <span className="text-xs font-bold text-zinc-500">{currentIndex + 1}/{items.length}</span>
      </div>

      {/* Flashcard area */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <p className="text-sm text-zinc-500 mb-4 font-medium">
          {isFlipped ? "Did you get it right?" : "Tap the card to reveal"}
        </p>

        <AnimatePresence mode="wait">
          <motion.button
            key={`${currentIndex}-${isFlipped}`}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => !isFlipped && setIsFlipped(true)}
            className="w-full max-w-xs glass card-elevated p-8 text-center cursor-pointer hover:shadow-lg transition-shadow min-h-[200px] flex flex-col items-center justify-center"
          >
            {!isFlipped ? (
              <>
                <span className="text-3xl font-extrabold text-zinc-800 mb-2">
                  {currentItem?.lithuanian}
                </span>
                <span className="text-sm text-zinc-400">Tap to reveal translation</span>
              </>
            ) : (
              <>
                <span className="text-lg font-bold text-zinc-500 mb-2">
                  {currentItem?.lithuanian}
                </span>
                <span className="text-3xl font-extrabold text-brand-green-600">
                  {currentItem?.english}
                </span>
              </>
            )}
          </motion.button>
        </AnimatePresence>
      </div>

      {/* Answer buttons */}
      {isFlipped && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 flex gap-3"
        >
          <button
            onClick={() => handleAnswer(false)}
            className="flex-1 btn-red py-4 text-lg flex items-center justify-center gap-2"
          >
            <X className="w-5 h-5" /> Missed it
          </button>
          <button
            onClick={() => handleAnswer(true)}
            className="flex-1 btn-green py-4 text-lg flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" /> Got it
          </button>
        </motion.div>
      )}
    </div>
  );
}
