"use client";

import { curriculum, Lesson } from "@/data/curriculum";
import { Check, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { completeLesson, getProgress, saveProgress } from "@/lib/progress";

import AnimatedPage from "@/components/AnimatedPage";
import ProgressBarAnimated from "@/components/ProgressBarAnimated";
import HeartDisplay from "@/components/HeartDisplay";
import Mascot from "@/components/Mascot";
import XPNotification from "@/components/XPNotification";
import MultipleChoiceExercise from "@/components/exercises/MultipleChoiceExercise";
import ListeningExercise from "@/components/exercises/ListeningExercise";
import FillInBlankExercise from "@/components/exercises/FillInBlankExercise";
import SentenceArrangeExercise from "@/components/exercises/SentenceArrangeExercise";
import MatchingExercise from "@/components/exercises/MatchingExercise";

export default function LessonPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const { width, height } = useWindowSize();

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [currentExIndex, setCurrentExIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [hearts, setHearts] = useState(5);
  const [justLostHeart, setJustLostHeart] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [showXP, setShowXP] = useState(false);
  const [direction, setDirection] = useState(1);

  const [fillInput, setFillInput] = useState("");
  const [arrangedWords, setArrangedWords] = useState<string[]>([]);
  const [matchPairs, setMatchPairs] = useState<{ left: string; right: string }[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<{ left: string; right: string }[]>([]);

  const exercise = useMemo(() => lesson?.exercises[currentExIndex] ?? null, [lesson, currentExIndex]);

  useEffect(() => {
    let foundLesson = null;
    for (const unit of curriculum) {
      const match = unit.lessons.find((l) => l.id === id);
      if (match) { foundLesson = match; break; }
    }
    setLesson(foundLesson);
    const progress = getProgress();
    setHearts(progress.hearts);
  }, [id]);

  useEffect(() => {
    if (exercise?.audioText) fetchAudio(exercise.audioText);
    else setAudioUrl(null);
    setIsCorrect(null);
    setSelectedOption(null);
    setFillInput("");
    setArrangedWords([]);
    setMatchedPairs([]);
    setSelectedLeft(null);
    setJustLostHeart(false);
  }, [exercise]);

  useEffect(() => {
    if (exercise?.type === "matching" && exercise.options) {
      const pairs: { left: string; right: string }[] = [];
      for (let i = 0; i < exercise.options.length; i += 2) {
        pairs.push({ left: exercise.options[i], right: exercise.options[i + 1] });
      }
      setMatchPairs(pairs);
    }
  }, [exercise]);

  const fetchAudio = async (text: string) => {
    try {
      const res = await fetch("/api/tts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text }) });
      const data = await res.json();
      if (data.audioContent) setAudioUrl(`data:audio/mp3;base64,${data.audioContent}`);
    } catch { setAudioUrl(null); }
  };

  const playAudio = useCallback(() => {
    if (audioUrl) new Audio(audioUrl).play();
  }, [audioUrl]);

  const handleWrongAnswer = () => {
    setMistakes((m) => m + 1);
    const progress = getProgress();
    const newHearts = Math.max(0, progress.hearts - 1);
    progress.hearts = newHearts;
    saveProgress(progress);
    setHearts(newHearts);
    setJustLostHeart(true);
  };

  const handleCheck = () => {
    if (!exercise) return;
    switch (exercise.type) {
      case "multiple_choice":
      case "listening": {
        if (!selectedOption) return;
        const correct = selectedOption === exercise.correctAnswer;
        setIsCorrect(correct);
        if (correct) playAudio(); else handleWrongAnswer();
        break;
      }
      case "fill_in_blank": {
        if (!fillInput.trim()) return;
        const correct = fillInput.trim().toLowerCase() === (exercise.correctAnswer as string).toLowerCase();
        setIsCorrect(correct);
        if (correct) playAudio(); else handleWrongAnswer();
        break;
      }
      case "sentence_arrange": {
        if (arrangedWords.length === 0) return;
        const correctArr = exercise.correctAnswer as string[];
        const correct = arrangedWords.length === correctArr.length && arrangedWords.every((w, i) => w === correctArr[i]);
        setIsCorrect(correct);
        if (correct) playAudio(); else handleWrongAnswer();
        break;
      }
    }
  };

  const handleNext = () => {
    if (!lesson) return;
    setDirection(1);
    if (currentExIndex < lesson.exercises.length - 1) {
      setCurrentExIndex((prev) => prev + 1);
    } else {
      completeLesson(lesson.id, 15);
      setShowXP(true);
      setTimeout(() => setIsFinished(true), 800);
    }
  };

  useEffect(() => {
    if (exercise?.type === "matching" && matchPairs.length > 0 && matchedPairs.length === matchPairs.length) {
      const correctStr = exercise.correctAnswer as string;
      const correctPairs = correctStr.split(",").map((p) => {
        const [left, right] = p.split(":");
        return { left: left.trim(), right: right.trim() };
      });
      const allCorrect = matchedPairs.every((mp) => correctPairs.some((cp) => cp.left === mp.left && cp.right === mp.right));
      setIsCorrect(allCorrect);
      if (allCorrect) playAudio(); else handleWrongAnswer();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchedPairs, matchPairs]);

  const handleMatchSelect = (side: "left" | "right", value: string) => {
    if (isCorrect !== null) return;
    if (side === "left") setSelectedLeft(value);
    else if (selectedLeft) {
      setMatchedPairs((prev) => [...prev, { left: selectedLeft, right: value }]);
      setSelectedLeft(null);
    }
  };

  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-8 h-8 border-3 border-brand-green-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (isFinished) {
    const isPerfect = mistakes === 0;
    return (
      <AnimatedPage className="flex flex-col h-screen min-h-screen items-center justify-center p-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold opacity-50" />
        <Confetti width={width} height={height} recycle={false} numberOfPieces={isPerfect ? 500 : 300} colors={isPerfect ? ["#facc15", "#eab308", "#fde68a"] : ["#22c55e", "#eab308", "#3b82f6"]} />
        <div className="relative z-10 flex flex-col items-center">
          <Mascot mood="excited" size="lg" />
          <motion.h1 initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", delay: 0.2 }} className="text-4xl font-extrabold text-brand-green-700 mt-6 mb-2">
            {isPerfect ? "Perfect!" : "Lesson Complete!"}
          </motion.h1>
          {isPerfect && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-brand-gold-700 font-bold text-lg mb-2">No mistakes!</motion.p>
          )}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.4 }} className="gradient-gold rounded-full px-8 py-3 shadow-lg border-2 border-brand-gold-400 mb-8">
            <span className="text-2xl font-extrabold text-brand-gold-700">+15 XP</span>
          </motion.div>
          <button onClick={() => router.push("/")} className="btn-green w-full py-4 text-lg">Continue</button>
        </div>
      </AnimatedPage>
    );
  }

  if (!exercise) return <div className="flex items-center justify-center h-screen text-zinc-500">No exercises found.</div>;

  const progressPercent = currentExIndex / lesson.exercises.length;
  const hasAnswer = (() => {
    switch (exercise.type) {
      case "multiple_choice": case "listening": return !!selectedOption;
      case "fill_in_blank": return !!fillInput.trim();
      case "sentence_arrange": return arrangedWords.length > 0;
      case "matching": return matchedPairs.length === matchPairs.length;
      default: return false;
    }
  })();

  const getCorrectAnswerDisplay = () => Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer.join(" ") : exercise.correctAnswer;

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <div className="flex flex-col h-screen min-h-screen relative">
      <XPNotification xp={15} show={showXP} onComplete={() => setShowXP(false)} />

      {/* Top Bar */}
      <div className="px-4 py-3 flex items-center gap-3 glass border-b border-white/30">
        <Link href="/"><button className="text-zinc-400 hover:text-zinc-600 p-1"><ArrowLeft className="w-5 h-5" /></button></Link>
        <div className="flex-1"><ProgressBarAnimated progress={progressPercent} showCelebration={false} /></div>
        <HeartDisplay hearts={hearts} justLost={justLostHeart} />
      </div>

      {/* Exercise area */}
      <div className="flex-1 p-6 flex flex-col pt-4 overflow-y-auto">
        <div className="mb-3">
          <Mascot mood={isCorrect === true ? "happy" : isCorrect === false ? "sad" : "thinking"} size="sm" />
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div key={currentExIndex} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }} className="flex-1 flex flex-col">
            <h2 className="text-xl font-bold text-zinc-800 mb-5">{exercise.prompt}</h2>

            {exercise.type === "multiple_choice" && (
              <MultipleChoiceExercise exercise={exercise} selectedOption={selectedOption} isCorrect={isCorrect} onSelect={setSelectedOption} />
            )}
            {exercise.type === "listening" && (
              <ListeningExercise exercise={exercise} selectedOption={selectedOption} isCorrect={isCorrect} onSelect={setSelectedOption} onPlayAudio={playAudio} />
            )}
            {exercise.type === "fill_in_blank" && (
              <FillInBlankExercise fillInput={fillInput} isCorrect={isCorrect} onChange={setFillInput} onSubmit={handleCheck} />
            )}
            {exercise.type === "sentence_arrange" && (
              <SentenceArrangeExercise options={exercise.options || []} arrangedWords={arrangedWords} isCorrect={isCorrect} onAddWord={(w) => setArrangedWords((prev) => [...prev, w])} onRemoveWord={(i) => setArrangedWords((prev) => prev.filter((_, idx) => idx !== i))} />
            )}
            {exercise.type === "matching" && (
              <MatchingExercise matchPairs={matchPairs} matchedPairs={matchedPairs} selectedLeft={selectedLeft} isCorrect={isCorrect} onSelectLeft={(v) => handleMatchSelect("left", v)} onSelectRight={(v) => handleMatchSelect("right", v)} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Check Bar */}
      <motion.div animate={{ backgroundColor: isCorrect === true ? "#dcfce7" : isCorrect === false ? "#fee2e2" : "rgba(255,255,255,0.75)" }} className="p-5 border-t border-zinc-200/50 backdrop-blur-sm">
        <AnimatePresence>
          {isCorrect !== null && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-3 flex items-center font-bold text-lg">
              {isCorrect ? (
                <span className="text-brand-green-700 flex items-center"><Check className="w-6 h-6 mr-2 bg-brand-green-500 text-white rounded-full p-1" /> Excellent!</span>
              ) : (
                <span className="text-red-700 flex items-center"><X className="w-6 h-6 mr-2 bg-brand-red-500 text-white rounded-full p-1" /><span className="truncate">Answer: {getCorrectAnswerDisplay()}</span></span>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {isCorrect === null ? (
          exercise.type !== "matching" ? (
            <button onClick={handleCheck} disabled={!hasAnswer} className={`w-full py-4 text-lg rounded-xl font-bold transition-all ${hasAnswer ? "btn-green" : "bg-zinc-200 text-zinc-400"}`}>Check</button>
          ) : (
            <div className="text-center text-zinc-500 font-medium py-4">Match all pairs to continue</div>
          )
        ) : (
          <button onClick={handleNext} className={`w-full py-4 text-lg text-white font-bold rounded-xl border-b-4 active:translate-y-1 active:border-b-0 transition-all ${isCorrect ? "bg-brand-green-500 border-brand-green-700" : "bg-brand-red-500 border-brand-red-600"}`}>Continue</button>
        )}
      </motion.div>
    </div>
  );
}
