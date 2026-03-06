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
      <header className="sticky top-0 z-10 bg-surface border-b border-border px-4 py-3">
        <h1 className="font-bold text-xl text-text font-display">Vocabulary</h1>
        <p className="text-xs text-muted">{allVocab.length} words learned</p>
      </header>

      <AnimatedPage>
        <div className="p-4 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search words..."
              className="w-full pl-10 pr-4 py-3 bg-bg border border-border rounded outline-none focus:border-accent transition-all text-sm text-text placeholder:text-muted"
            />
          </div>

          {/* Unit filter tabs */}
          {unitNames.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <button
                onClick={() => setActiveUnit(null)}
                className={`px-3 py-1.5 rounded text-xs font-bold shrink-0 transition-colors uppercase tracking-wider ${
                  !activeUnit ? "bg-accent text-bg" : "bg-surface text-muted border border-border"
                }`}
              >
                All
              </button>
              {unitNames.map((u) => (
                <button
                  key={u.id}
                  onClick={() => setActiveUnit(activeUnit === u.id ? null : u.id)}
                  className={`px-3 py-1.5 rounded text-xs font-bold shrink-0 transition-colors uppercase tracking-wider ${
                    activeUnit === u.id ? "bg-accent text-bg" : "bg-surface text-muted border border-border"
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
              <p className="text-muted font-medium mt-4">Complete some lessons first!</p>
              <p className="text-muted/60 text-sm">Words you learn will appear here.</p>
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
                className="card p-3 flex items-center gap-3"
              >
                <button
                  onClick={() => playWord(word.lithuanian)}
                  className="w-9 h-9 rounded bg-accent/10 flex items-center justify-center shrink-0 hover:bg-accent/20 transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-accent" />
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-text text-sm">{word.lithuanian}</span>
                    {word.gender && (
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                        word.gender === "m" ? "bg-blue-900/30 text-blue-400" : "bg-pink-900/30 text-pink-400"
                      }`}>
                        {word.gender === "m" ? "m" : "f"}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted">{word.english}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && allVocab.length > 0 && (
            <p className="text-center text-muted text-sm py-8">No words match your search.</p>
          )}
        </div>
      </AnimatedPage>

      <BottomNav activeTab="words" />
    </div>
  );
}
