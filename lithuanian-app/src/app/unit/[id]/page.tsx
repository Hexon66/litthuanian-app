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
    return <div className="flex items-center justify-center h-screen text-zinc-500">Unit not found</div>;
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
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-500 to-brand-green-700" />
        <div className="relative z-10 px-4 pt-4 pb-8">
          <Link href="/">
            <button className="text-white/80 hover:text-white mb-4">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{unit.icon || "📚"}</span>
            <div>
              <h1 className="text-2xl font-extrabold text-white">{unit.title}</h1>
              <p className="text-white/80 text-sm">{unit.description}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${unit.lessons.length > 0 ? (completedCount / unit.lessons.length) * 100 : 0}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-white/80 text-xs font-bold">{completedCount}/{unit.lessons.length}</span>
          </div>
        </div>
      </div>

      <AnimatedPage className="px-4 -mt-4">
        {/* Mascot greeting */}
        <div className="glass card-elevated p-4 mb-5">
          <Mascot mood="happy" size="sm" message={`Let's learn ${unit.title.toLowerCase()}!`} />
        </div>

        {/* Grammar Tips */}
        {unit.grammarTips && unit.grammarTips.length > 0 && (
          <section className="mb-5">
            <h3 className="font-bold text-zinc-800 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-green-600" /> Grammar Preview
            </h3>
            <div className="space-y-3">
              {unit.grammarTips.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass card-elevated p-4"
                >
                  <h4 className="font-bold text-sm text-brand-green-700 mb-2">{tip.title}</h4>
                  <p className="text-zinc-600 text-sm mb-3">{tip.explanation}</p>
                  <div className="space-y-1">
                    {tip.examples.map((ex, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <span className="font-bold text-zinc-800">{ex.lithuanian}</span>
                        <span className="text-zinc-400">—</span>
                        <span className="text-zinc-500">{ex.english}</span>
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
            <h3 className="font-bold text-zinc-800 mb-2">Key Vocabulary</h3>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
              {unit.keyVocabulary.map((word, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => playWord(word.audioText || word.lithuanian)}
                  className="glass card-elevated px-4 py-3 shrink-0 flex flex-col items-start min-w-[120px] hover:bg-white/90 transition-colors"
                >
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-bold text-sm text-zinc-800">{word.lithuanian}</span>
                    <Volume2 className="w-3 h-3 text-brand-green-500" />
                  </div>
                  <span className="text-xs text-zinc-500">{word.english}</span>
                  {word.gender && (
                    <span className={`text-[10px] font-bold mt-1 px-1.5 py-0.5 rounded-full ${
                      word.gender === "m" ? "bg-blue-100 text-blue-600" : "bg-pink-100 text-pink-600"
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
          <h3 className="font-bold text-zinc-800 mb-2">Lessons</h3>
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
                    <div className={`glass card-elevated p-3 flex items-center gap-3 transition-all hover:shadow-md ${isCompleted ? "border-l-4 border-brand-gold-500" : ""}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        isCompleted ? "bg-brand-gold-400 text-white" : "bg-brand-green-100 text-brand-green-700"
                      }`}>
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-zinc-800 truncate">{lesson.title}</p>
                        <p className="text-xs text-zinc-500 truncate">{lesson.description}</p>
                      </div>
                      {isCompleted && <span className="text-brand-gold-500 text-lg">✓</span>}
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
            className="btn-green w-full py-4 text-lg flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            {completedCount > 0 ? "Continue Learning" : "Start Learning"}
          </button>
        )}
      </AnimatedPage>
    </div>
  );
}
