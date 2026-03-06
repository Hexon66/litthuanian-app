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
      <header className="sticky top-0 z-10 bg-surface border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
              Lietuvi&#371;
            </h1>
            <p className="text-muted text-[10px] uppercase tracking-[0.15em]">Lithuanian — Fast Track</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <motion.div
              className="flex items-center gap-1 text-accent2"
              animate={streak > 0 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Flame className="w-4 h-4" />
              <span>{streak}</span>
            </motion.div>
            <div className="flex items-center gap-1 text-accent">
              <Star className="w-4 h-4" />
              <span>{xp}</span>
            </div>
            <div className="flex items-center gap-1 text-error">
              <Heart className="w-4 h-4 fill-error" />
              <span>{hearts}</span>
            </div>
          </div>
        </div>
      </header>

      <AnimatedPage>
        <main className="flex-1 p-4 space-y-8 mt-2">
          {/* Welcome tip for new users */}
          {completedCount === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-accent p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-text text-sm">Welcome to Lietuvi&#371;!</p>
                <p className="text-muted text-xs">Start your first lesson below</p>
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
                className="card-accent2 p-4 flex items-center gap-3 hover:border-accent2 transition-colors"
              >
                <div className="w-10 h-10 rounded-sm bg-accent2/10 flex items-center justify-center shrink-0">
                  <RotateCcw className="w-5 h-5 text-accent2" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-text text-sm">Words to Review</p>
                  <p className="text-muted text-xs">{dueReviewCount} word{dueReviewCount !== 1 ? "s" : ""} due today</p>
                </div>
                <span className="text-accent2 font-semibold text-xs uppercase tracking-wider">Go &rarr;</span>
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
                <div className="card p-4 hover:border-accent transition-colors cursor-pointer group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{unit.icon || "\u{1F4DA}"}</span>
                    <div>
                      <h2 className="font-display text-lg font-bold text-accent">{unit.title}</h2>
                      <p className="text-muted text-xs">{unit.description}</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Lesson path */}
              <div className="flex flex-col items-center gap-5 py-2 relative">
                {unit.lessons.length > 1 && (
                  <div className="absolute top-8 bottom-8 w-px bg-border -z-10" />
                )}

                {unit.lessons.length === 0 && (
                  <div className="text-muted italic font-medium py-4">Coming soon...</div>
                )}

                {unit.lessons.map((lesson, lessonIndex) => {
                  const shiftX = lessonIndex % 2 === 0 ? 0 : lessonIndex % 4 === 1 ? -32 : 32;
                  const isCompleted = progress?.completedLessons.includes(lesson.id);

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
                          className={`w-[72px] h-[72px] rounded-full flex items-center justify-center border-2 transition-all duration-150 relative ${
                            isCompleted
                              ? "bg-accent2/20 border-accent2 text-accent2 animate-gold-shimmer"
                              : isCurrent
                              ? "bg-accent/20 border-accent text-accent animate-pulse-glow"
                              : "bg-surface-light border-border text-muted cursor-not-allowed"
                          }`}
                        >
                          {isLocked ? (
                            <Lock className="w-7 h-7" />
                          ) : (
                            <Star className={`w-8 h-8 ${isCompleted ? "fill-accent2/40" : "fill-accent/30"}`} />
                          )}
                          <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                            isCompleted ? "bg-accent2 text-bg" :
                            isCurrent ? "bg-accent text-bg" :
                            "bg-surface-light text-muted border border-border"
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
