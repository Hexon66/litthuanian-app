"use client";

import { curriculum } from "@/data/curriculum";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Volume2, BookOpen, Play } from "lucide-react";
import Link from "next/link";
import AnimatedPage from "@/components/AnimatedPage";
import Mascot from "@/components/Mascot";
import { getProgress } from "@/lib/progress";
import type { Unit } from "@/data/curriculum";

export default function UnitIntroPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const [unit, setUnit] = useState<Unit | null>(null);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const found = curriculum.find((u) => u.id === id);
    setUnit(found || null);
    const progress = getProgress();
    if (found) {
      const done = found.lessons.filter((l) => progress.completedLessons.includes(l.id)).length;
      setCompletedCount(done);
    }
  }, [id]);

  const playWord = async (text: string) => {
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (data.audioContent) {
        new Audio(`data:audio/mp3;base64,${data.audioContent}`).play();
      }
    } catch {}
  };

  if (!unit) {
    return <div className="flex items-center justify-center h-screen text-muted">Unit not found</div>;
  }

  const firstIncompleteLesson = unit.lessons.find((l) => {
    const progress = getProgress();
    return !progress.completedLessons.includes(l.id);
  });
  const startLessonId = firstIncompleteLesson?.id || unit.lessons[0]?.id;

  return (
    <div className="flex flex-col min-h-screen pb-8">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-surface" />
        <div className="relative z-10 px-4 pt-4 pb-8 border-b border-border">
          <Link href="/">
            <button className="text-muted hover:text-text mb-4">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{unit.icon || "📚"}</span>
            <div>
              <h1 className="text-2xl font-extrabold text-text font-display">{unit.title}</h1>
              <p className="text-muted text-sm">{unit.description}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1 h-2 bg-surface-light border border-border rounded overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded"
                initial={{ width: 0 }}
                animate={{ width: `${unit.lessons.length > 0 ? (completedCount / unit.lessons.length) * 100 : 0}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-muted text-xs font-bold">{completedCount}/{unit.lessons.length}</span>
          </div>
        </div>
      </div>

      <AnimatedPage className="px-4 pt-5">
        {/* Mascot greeting */}
        <div className="card p-4 mb-5">
          <Mascot mood="happy" size="sm" message={`Let's learn ${unit.title.toLowerCase()}!`} />
        </div>

        {/* Grammar Tips */}
        {unit.grammarTips && unit.grammarTips.length > 0 && (
          <section className="mb-5">
            <h3 className="text-sm font-bold text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-accent" /> Grammar Preview
            </h3>
            <div className="space-y-3">
              {unit.grammarTips.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="card p-4"
                >
                  <h4 className="font-bold text-sm text-accent mb-2">{tip.title}</h4>
                  <p className="text-muted text-sm mb-3">{tip.explanation}</p>
                  <div className="space-y-1">
                    {tip.examples.map((ex, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <span className="font-bold text-text">{ex.lithuanian}</span>
                        <span className="text-border">—</span>
                        <span className="text-muted">{ex.english}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Key Vocabulary */}
        {unit.keyVocabulary && unit.keyVocabulary.length > 0 && (
          <section className="mb-6">
            <h3 className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Key Vocabulary</h3>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
              {unit.keyVocabulary.map((word, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => playWord(word.audioText || word.lithuanian)}
                  className="card px-4 py-3 shrink-0 flex flex-col items-start min-w-[120px] hover:border-accent transition-colors"
                >
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-bold text-sm text-text">{word.lithuanian}</span>
                    <Volume2 className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-xs text-muted">{word.english}</span>
                  {word.gender && (
                    <span className={`text-[10px] font-bold mt-1 px-1.5 py-0.5 rounded ${
                      word.gender === "m" ? "bg-blue-900/30 text-blue-400" : "bg-pink-900/30 text-pink-400"
                    }`}>
                      {word.gender === "m" ? "masc" : "fem"}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </section>
        )}

        {/* Lessons list */}
        <section className="mb-6">
          <h3 className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Lessons</h3>
          <div className="space-y-2">
            {unit.lessons.map((lesson, i) => {
              const progress = getProgress();
              const isCompleted = progress.completedLessons.includes(lesson.id);
              return (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/lesson/${lesson.id}`}>
                    <div className={`card p-3 flex items-center gap-3 transition-all hover:border-accent ${isCompleted ? "border-l-2 border-l-accent2" : ""}`}>
                      <div className={`w-8 h-8 rounded flex items-center justify-center text-sm font-bold ${
                        isCompleted ? "bg-accent2/20 text-accent2" : "bg-accent/10 text-accent"
                      }`}>
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-text truncate">{lesson.title}</p>
                        <p className="text-xs text-muted truncate">{lesson.description}</p>
                      </div>
                      {isCompleted && <span className="text-accent2 text-lg">✓</span>}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Start button */}
        {startLessonId && (
          <button
            onClick={() => router.push(`/lesson/${startLessonId}`)}
            className="btn-accent w-full py-4 text-lg flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            {completedCount > 0 ? "Continue Learning" : "Start Learning"}
          </button>
        )}
      </AnimatedPage>
    </div>
  );
}
