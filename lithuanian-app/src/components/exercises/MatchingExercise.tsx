"use client";

import { motion } from "framer-motion";

interface MatchPair {
  left: string;
  right: string;
}

interface Props {
  matchPairs: MatchPair[];
  matchedPairs: MatchPair[];
  selectedLeft: string | null;
  isCorrect: boolean | null;
  onSelectLeft: (val: string) => void;
  onSelectRight: (val: string) => void;
}

export default function MatchingExercise({ matchPairs, matchedPairs, selectedLeft, isCorrect, onSelectLeft, onSelectRight }: Props) {
  const isMatched = (value: string, side: "left" | "right") => {
    return matchedPairs.some((p) => (side === "left" ? p.left === value : p.right === value));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-auto space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="space-y-3">
          {matchPairs.map((pair) => {
            const matched = isMatched(pair.left, "left");
            return (
              <motion.button
                key={pair.left}
                onClick={() => !matched && onSelectLeft(pair.left)}
                disabled={matched}
                whileTap={!matched ? { scale: 0.95 } : {}}
                animate={matched ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.3 }}
                className={`w-full py-3 px-4 text-base font-bold rounded-xl border-2 border-b-4 transition-all ${
                  matched
                    ? "bg-brand-green-100 border-brand-green-500 text-brand-green-700"
                    : selectedLeft === pair.left
                    ? "bg-brand-blue-50 border-brand-blue-500 text-blue-700 shadow-md"
                    : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300"
                }`}
              >
                {pair.left}
              </motion.button>
            );
          })}
        </div>

        {/* Right column */}
        <div className="space-y-3">
          {matchPairs.map((pair) => {
            const matched = isMatched(pair.right, "right");
            return (
              <motion.button
                key={pair.right}
                onClick={() => selectedLeft && !matched && onSelectRight(pair.right)}
                disabled={matched || !selectedLeft}
                whileTap={selectedLeft && !matched ? { scale: 0.95 } : {}}
                animate={matched ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.3 }}
                className={`w-full py-3 px-4 text-base font-bold rounded-xl border-2 border-b-4 transition-all ${
                  matched
                    ? "bg-brand-green-100 border-brand-green-500 text-brand-green-700"
                    : selectedLeft
                    ? "bg-white border-zinc-200 text-zinc-700 hover:border-brand-blue-500 hover:bg-brand-blue-50"
                    : "bg-white border-zinc-200 text-zinc-400"
                }`}
              >
                {pair.right}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
