"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Lightbulb } from "lucide-react";
import type { GrammarTip } from "@/data/curriculum";

interface Props {
  tips: GrammarTip[];
  isOpen: boolean;
  onClose: () => void;
}

export default function GrammarTipPanel({ tips, isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />
          {/* Panel */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50 bg-white rounded-t-3xl shadow-2xl max-h-[70vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white px-5 pt-4 pb-2 border-b border-zinc-100 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-gold-100 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-brand-gold-500" />
                </div>
                <h3 className="font-bold text-zinc-800">Grammar Tips</h3>
              </div>
              <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-5">
              {tips.length === 0 && (
                <p className="text-zinc-500 text-sm text-center py-4">No grammar tips for this unit yet.</p>
              )}
              {tips.map((tip, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-bold text-brand-green-700">{tip.title}</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">{tip.explanation}</p>
                  <div className="bg-zinc-50 rounded-xl p-3 space-y-1.5">
                    {tip.examples.map((ex, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <span className="font-bold text-zinc-800">{ex.lithuanian}</span>
                        <span className="text-zinc-300">→</span>
                        <span className="text-zinc-500 italic">{ex.english}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
