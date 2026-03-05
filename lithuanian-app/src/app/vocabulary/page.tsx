"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Volume2 } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import AnimatedPage from "@/components/AnimatedPage";
import Mascot from "@/components/Mascot";
import { getProgress } from "@/lib/progress";
import { getLearnedVocabulary, searchVocabulary, VocabEntry } from "@/lib/vocabulary";

export default function VocabularyPage() {
  const [allVocab, setAllVocab] = useState<VocabEntry[]>([]);
  const [filtered, setFiltered] = useState<VocabEntry[]>([]);
  const [query, setQuery] = useState("");
  const [activeUnit, setActiveUnit] = useState<string | null>(null);

  useEffect(() => {
    const progress = getProgress();
    const vocab = getLearnedVocabulary(progress.completedLessons);
    setAllVocab(vocab);
    setFiltered(vocab);
  }, []);

  useEffect(() => {
    let result = allVocab;
    if (activeUnit) {
      result = result.filter((v) => v.unitId === activeUnit);
    }
    result = searchVocabulary(result, query);
    setFiltered(result);
  }, [query, activeUnit, allVocab]);

  const unitNames = Array.from(new Set(allVocab.map((v) => v.unitId))).map((uid) => ({
    id: uid,
    title: allVocab.find((v) => v.unitId === uid)?.unitTitle || uid,
  }));

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

  return (
    <div className="flex flex-col h-screen min-h-screen relative pb-24">
      <header className="sticky top-0 z-10 glass border-b border-white/30 px-4 py-3">
        <h1 className="font-bold text-xl text-zinc-900">Vocabulary</h1>
        <p className="text-xs text-zinc-500">{allVocab.length} words learned</p>
      </header>

      <AnimatedPage>
        <div className="p-4 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search words..."
              className="w-full pl-10 pr-4 py-3 bg-white/80 border border-zinc-200 rounded-xl outline-none focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-200 transition-all text-sm"
            />
          </div>

          {/* Unit filter tabs */}
          {unitNames.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <button
                onClick={() => setActiveUnit(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition-colors ${
                  !activeUnit ? "bg-brand-green-500 text-white" : "bg-white/80 text-zinc-600 border border-zinc-200"
                }`}
              >
                All
              </button>
              {unitNames.map((u) => (
                <button
                  key={u.id}
                  onClick={() => setActiveUnit(activeUnit === u.id ? null : u.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition-colors ${
                    activeUnit === u.id ? "bg-brand-green-500 text-white" : "bg-white/80 text-zinc-600 border border-zinc-200"
                  }`}
                >
                  {u.title}
                </button>
              ))}
            </div>
          )}

          {/* Empty state */}
          {allVocab.length === 0 && (
            <div className="flex flex-col items-center py-12">
              <Mascot mood="thinking" size="lg" />
              <p className="text-zinc-500 font-medium mt-4">Complete some lessons first!</p>
              <p className="text-zinc-400 text-sm">Words you learn will appear here.</p>
            </div>
          )}

          {/* Word list */}
          <div className="space-y-2">
            {filtered.map((word, i) => (
              <motion.div
                key={`${word.lithuanian}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.5) }}
                className="glass card-elevated p-3 flex items-center gap-3"
              >
                <button
                  onClick={() => playWord(word.lithuanian)}
                  className="w-9 h-9 rounded-full bg-brand-green-100 flex items-center justify-center shrink-0 hover:bg-brand-green-200 transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-brand-green-600" />
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-zinc-800 text-sm">{word.lithuanian}</span>
                    {word.gender && (
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                        word.gender === "m" ? "bg-blue-100 text-blue-600" : "bg-pink-100 text-pink-600"
                      }`}>
                        {word.gender === "m" ? "m" : "f"}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-zinc-500">{word.english}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && allVocab.length > 0 && (
            <p className="text-center text-zinc-400 text-sm py-8">No words match your search.</p>
          )}
        </div>
      </AnimatedPage>

      <BottomNav activeTab="words" />
    </div>
  );
}
