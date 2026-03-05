"use client";

import { curriculum } from "@/data/curriculum";
import BottomNav from "@/components/BottomNav";
import { Flame, Heart, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProgress, UserProgress } from "@/lib/progress";

export default function Home() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const streak = progress?.streak ?? 0;
  const xp = progress?.xp ?? 0;
  const hearts = progress?.hearts ?? 5;

  return (
    <div className="flex flex-col h-full min-h-screen bg-zinc-50 pb-24">
      {/* Header Stats */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-zinc-200 px-4 py-3 flex items-center justify-between">
        <div className="font-extrabold text-xl text-brand-green-600 tracking-tight">
          LT<span className="text-zinc-800">Go</span>
        </div>
        <div className="flex items-center space-x-4 font-bold">
          <div className="flex items-center text-orange-500">
            <Flame className="w-5 h-5 mr-1 fill-orange-500" />
            <span>{streak}</span>
          </div>
          <div className="flex items-center text-brand-gold-500">
            <Star className="w-5 h-5 mr-1 fill-brand-gold-500" />
            <span>{xp}</span>
          </div>
          <div className="flex items-center text-brand-red-500">
            <Heart className="w-5 h-5 mr-1 fill-brand-red-500" />
            <span>{hearts}</span>
          </div>
        </div>
      </header>
      {/* Curriculum Path */}
      <main className="flex-1 p-4 space-y-12 mt-6">
        {curriculum.map((unit, index) => (
          <section key={unit.id} className="space-y-6">
            <div className="bg-brand-green-500 text-white p-4 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold">{unit.title}</h2>
              <p className="opacity-90">{unit.description}</p>
            </div>

            <div className="flex flex-col items-center space-y-6 py-4 relative">
              {/* Vertical connecting line */}
              {unit.lessons.length > 1 && (
                <div className="absolute top-10 bottom-10 w-4 bg-zinc-200 -z-10 rounded-full" />
              )}

              {unit.lessons.length === 0 && (
                <div className="text-zinc-400 italic font-medium py-4">Coming soon...</div>
              )}

              {unit.lessons.map((lesson, lessonIndex) => {
                // Zig-zag pattern
                const shiftX = lessonIndex % 2 === 0 ? "translate-x-0" : (lessonIndex % 4 === 1 ? "-translate-x-8" : "translate-x-8");
                const isCompleted = progress?.completedLessons.includes(lesson.id);
                const isFirstLesson = index === 0 && lessonIndex === 0;
                // simplified check for 'current' next lesson
                const isCurrent = !isCompleted &&
                  (isFirstLesson ||
                    (index === 0 ? lessonIndex > 0 && progress?.completedLessons.includes(unit.lessons[lessonIndex - 1].id)
                      : progress?.completedLessons.includes(curriculum[index - 1].lessons[curriculum[index - 1].lessons.length - 1].id)));

                return (
                  <div key={lesson.id} className={`relative ${shiftX}`}>
                    <Link href={`/lesson/${lesson.id}`}>
                      <button className={`w-20 h-20 rounded-full flex items-center justify-center border-b-8 active:border-b-0 active:translate-y-2 transition-all duration-150 ${isCompleted
                        ? "bg-brand-gold-500 border-brand-gold-700 text-white shadow-lg shadow-brand-gold-500/30"
                        : isCurrent
                          ? "bg-brand-green-500 border-brand-green-700 text-white shadow-lg shadow-brand-green-500/30"
                          : "bg-zinc-200 border-zinc-300 text-zinc-400"
                        }`}>
                        <Star className={`w-10 h-10 ${isCompleted ? "fill-brand-gold-200 text-brand-gold-200" : isCurrent ? "fill-brand-gold-400 text-brand-gold-400" : ""}`} />
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      <BottomNav activeTab="learn" />
    </div>
  );
}
