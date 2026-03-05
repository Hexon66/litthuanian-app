"use client";

import { curriculum } from "@/data/curriculum";
import BottomNav from "@/components/BottomNav";
import AnimatedPage from "@/components/AnimatedPage";
import StreakCelebration from "@/components/StreakCelebration";
import { Flame, Heart, Star, Lock, Zap, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProgress, UserProgress } from "@/lib/progress";
import { getDueReviews } from "@/lib/spacedRepetition";
import { motion } from "framer-motion";
import DailyChallenge from "@/components/DailyChallenge";

export default function Home() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [dueReviewCount, setDueReviewCount] = useState(0);

  useEffect(() => {
    setProgress(getProgress());
    setDueReviewCount(getDueReviews().length);
  }, []);

  const streak = progress?.streak ?? 0;
  const xp = progress?.xp ?? 0;
  const hearts = progress?.hearts ?? 5;
  const completedCount = progress?.completedLessons.length ?? 0;

  return (
    <div className="flex flex-col h-full min-h-screen pb-24">
      <StreakCelebration streak={streak} />

      {/* Header */}
      <header className="sticky top-0 z-10 glass border-b border-white/30 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="font-extrabold text-xl">
            <span className="text-brand-green-600">LT</span>
            <span className="text-zinc-800">Go</span>
          </div>
          <div className="flex items-center gap-4 font-bold text-sm">
            <motion.div
              className="flex items-center gap-1 text-orange-500"
              animate={streak > 0 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Flame className="w-5 h-5 fill-orange-500" />
              <span>{streak}</span>
            </motion.div>
            <div className="flex items-center gap-1 text-brand-gold-500">
              <Star className="w-5 h-5 fill-brand-gold-500" />
              <span>{xp}</span>
            </div>
            <div className="flex items-center gap-1 text-brand-red-500">
              <Heart className="w-5 h-5 fill-brand-red-500" />
              <span>{hearts}</span>
            </div>
          </div>
        </div>
      </header>

      <AnimatedPage>
        <main className="flex-1 p-4 space-y-10 mt-4">
          {/* Welcome tip for new users */}
          {completedCount === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass card-elevated p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-brand-green-100 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-brand-green-600" />
              </div>
              <div>
                <p className="font-bold text-zinc-800 text-sm">Welcome to LithuanianGo!</p>
                <p className="text-zinc-500 text-xs">Start your first lesson below</p>
              </div>
            </motion.div>
          )}

          {/* Daily Challenge */}
          {completedCount > 0 && <DailyChallenge />}

          {/* Review reminder */}
          {dueReviewCount > 0 && (
            <Link href="/review">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass card-elevated p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-brand-purple-50 flex items-center justify-center shrink-0">
                  <RotateCcw className="w-5 h-5 text-brand-purple-500" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-zinc-800 text-sm">Words to Review</p>
                  <p className="text-zinc-500 text-xs">{dueReviewCount} word{dueReviewCount !== 1 ? "s" : ""} due today</p>
                </div>
                <span className="text-brand-purple-500 font-bold text-sm">Go →</span>
              </motion.div>
            </Link>
          )}

          {/* Units */}
          {curriculum.map((unit, unitIndex) => (
            <motion.section
              key={unit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: unitIndex * 0.05 }}
              className="space-y-5"
            >
              {/* Unit header card */}
              <Link href={`/unit/${unit.id}`}>
                <div className="bg-gradient-to-r from-brand-green-500 to-brand-green-600 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{unit.icon || "📚"}</span>
                    <h2 className="text-lg font-bold">{unit.title}</h2>
                  </div>
                  <p className="opacity-80 text-sm">{unit.description}</p>
                </div>
              </Link>

              {/* Lesson path */}
              <div className="flex flex-col items-center gap-5 py-2 relative">
                {unit.lessons.length > 1 && (
                  <div className="absolute top-8 bottom-8 w-1 bg-zinc-200/60 -z-10 rounded-full" />
                )}

                {unit.lessons.length === 0 && (
                  <div className="text-zinc-400 italic font-medium py-4">Coming soon...</div>
                )}

                {unit.lessons.map((lesson, lessonIndex) => {
                  const shiftX = lessonIndex % 2 === 0 ? 0 : lessonIndex % 4 === 1 ? -32 : 32;
                  const isCompleted = progress?.completedLessons.includes(lesson.id);

                  // Determine if this is the next available lesson
                  const prevLessonId = lessonIndex > 0 ? unit.lessons[lessonIndex - 1].id : null;
                  const prevUnitLastLesson = unitIndex > 0 ? curriculum[unitIndex - 1].lessons[curriculum[unitIndex - 1].lessons.length - 1]?.id : null;
                  const isFirstEver = unitIndex === 0 && lessonIndex === 0;
                  const isPrevCompleted = prevLessonId
                    ? progress?.completedLessons.includes(prevLessonId)
                    : prevUnitLastLesson
                    ? progress?.completedLessons.includes(prevUnitLastLesson)
                    : false;
                  const isCurrent = !isCompleted && (isFirstEver || isPrevCompleted);
                  const isLocked = !isCompleted && !isCurrent;

                  return (
                    <motion.div
                      key={lesson.id}
                      style={{ transform: `translateX(${shiftX}px)` }}
                      whileHover={!isLocked ? { scale: 1.08 } : {}}
                      whileTap={!isLocked ? { scale: 0.95 } : {}}
                    >
                      <Link href={isLocked ? "#" : `/lesson/${lesson.id}`} onClick={(e) => isLocked && e.preventDefault()}>
                        <div
                          className={`w-[72px] h-[72px] rounded-full flex items-center justify-center border-b-[6px] transition-all duration-150 relative ${
                            isCompleted
                              ? "bg-brand-gold-400 border-brand-gold-500 text-white shadow-lg animate-gold-shimmer"
                              : isCurrent
                              ? "bg-brand-green-500 border-brand-green-700 text-white shadow-lg animate-pulse-glow"
                              : "bg-zinc-200 border-zinc-300 text-zinc-400 cursor-not-allowed"
                          }`}
                        >
                          {isLocked ? (
                            <Lock className="w-7 h-7" />
                          ) : (
                            <Star className={`w-8 h-8 ${isCompleted ? "fill-white/40" : "fill-white/30"}`} />
                          )}
                          {/* Lesson number badge */}
                          <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                            isCompleted ? "bg-brand-gold-700 text-white" :
                            isCurrent ? "bg-brand-green-700 text-white" :
                            "bg-zinc-300 text-zinc-500"
                          }`}>
                            {lessonIndex + 1}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </main>
      </AnimatedPage>

      <BottomNav activeTab="learn" />
    </div>
  );
}
