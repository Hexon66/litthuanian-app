"use client";

import { curriculum, Exercise, Lesson } from "@/data/curriculum";
import { Check, X, Volume2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { completeLesson } from "@/lib/progress";

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

    // Fill-in-blank state
    const [fillInput, setFillInput] = useState("");

    // Sentence arrange state
    const [arrangedWords, setArrangedWords] = useState<string[]>([]);

    // Matching state
    const [matchPairs, setMatchPairs] = useState<{ left: string; right: string }[]>([]);
    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    const [matchedPairs, setMatchedPairs] = useState<{ left: string; right: string }[]>([]);

    const exercise = useMemo(() => {
        return lesson?.exercises[currentExIndex] ?? null;
    }, [lesson, currentExIndex]);

    // Find lesson by ID
    useEffect(() => {
        let foundLesson = null;
        for (const unit of curriculum) {
            const match = unit.lessons.find(l => l.id === id);
            if (match) {
                foundLesson = match;
                break;
            }
        }
        setLesson(foundLesson);
    }, [id]);

    // Pre-fetch TTS audio when exercise changes
    useEffect(() => {
        if (exercise?.audioText) {
            fetchAudio(exercise.audioText);
        } else {
            setAudioUrl(null);
        }
        // Reset state for new exercise
        setIsCorrect(null);
        setSelectedOption(null);
        setFillInput("");
        setArrangedWords([]);
        setMatchedPairs([]);
        setSelectedLeft(null);
    }, [exercise]);

    // Parse matching pairs from exercise options
    useEffect(() => {
        if (exercise?.type === "matching" && exercise.options) {
            // Options come as [leftA, rightA, leftB, rightB, ...]
            const pairs: { left: string; right: string }[] = [];
            for (let i = 0; i < exercise.options.length; i += 2) {
                pairs.push({ left: exercise.options[i], right: exercise.options[i + 1] });
            }
            setMatchPairs(pairs);
        }
    }, [exercise]);

    const fetchAudio = async (text: string) => {
        try {
            const res = await fetch("/api/tts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });
            const data = await res.json();
            if (data.audioContent) {
                setAudioUrl(`data:audio/mp3;base64,${data.audioContent}`);
            }
        } catch {
            setAudioUrl(null);
        }
    };

    const playAudio = useCallback(() => {
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play();
        }
    }, [audioUrl]);

    const handleCheck = () => {
        if (!exercise) return;

        switch (exercise.type) {
            case "multiple_choice":
            case "listening": {
                if (!selectedOption) return;
                setIsCorrect(selectedOption === exercise.correctAnswer);
                if (selectedOption === exercise.correctAnswer) playAudio();
                break;
            }
            case "fill_in_blank": {
                if (!fillInput.trim()) return;
                const correct = fillInput.trim().toLowerCase() === (exercise.correctAnswer as string).toLowerCase();
                setIsCorrect(correct);
                if (correct) playAudio();
                break;
            }
            case "sentence_arrange": {
                if (arrangedWords.length === 0) return;
                const correctArr = exercise.correctAnswer as string[];
                const correct = arrangedWords.length === correctArr.length &&
                    arrangedWords.every((w, i) => w === correctArr[i]);
                setIsCorrect(correct);
                if (correct) playAudio();
                break;
            }
            case "matching": {
                // Matching is checked as pairs are made — auto-advance when all matched
                break;
            }
        }
    };

    const handleNext = () => {
        if (!lesson) return;
        if (currentExIndex < lesson.exercises.length - 1) {
            setCurrentExIndex(prev => prev + 1);
        } else {
            // Save progress
            completeLesson(lesson.id, 15);
            setIsFinished(true);
        }
    };

    // Check if all matching pairs are complete
    useEffect(() => {
        if (exercise?.type === "matching" && matchPairs.length > 0 && matchedPairs.length === matchPairs.length) {
            // Check correctness
            const correctStr = exercise.correctAnswer as string;
            const correctPairs = correctStr.split(",").map(p => {
                const [left, right] = p.split(":");
                return { left: left.trim(), right: right.trim() };
            });
            const allCorrect = matchedPairs.every(mp =>
                correctPairs.some(cp => cp.left === mp.left && cp.right === mp.right)
            );
            setIsCorrect(allCorrect);
            if (allCorrect) playAudio();
        }
    }, [matchedPairs, matchPairs, exercise, playAudio]);

    const handleMatchSelect = (side: "left" | "right", value: string) => {
        if (isCorrect !== null) return; // Already checked

        if (side === "left") {
            setSelectedLeft(value);
        } else if (selectedLeft) {
            // Pair selected
            setMatchedPairs(prev => [...prev, { left: selectedLeft, right: value }]);
            setSelectedLeft(null);
        }
    };

    const isMatched = (value: string, side: "left" | "right") => {
        return matchedPairs.some(p => side === "left" ? p.left === value : p.right === value);
    };

    // --- LOADING STATE ---
    if (!lesson) {
        return <div className="flex items-center justify-center h-screen text-zinc-500">Loading lesson...</div>;
    }

    // --- FINISHED STATE ---
    if (isFinished) {
        return (
            <div className="flex flex-col h-screen min-h-screen items-center justify-center p-6 bg-brand-green-100 text-center relative overflow-hidden">
                <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />
                <h1 className="text-4xl font-extrabold text-brand-green-700 mb-4">Lesson Complete!</h1>
                <p className="text-brand-green-600 mb-8 font-medium">You earned +15 XP</p>
                <button
                    onClick={() => router.push('/')}
                    className="btn-green w-full py-4 text-lg"
                >
                    Continue
                </button>
            </div>
        );
    }

    if (!exercise) {
        return <div className="flex items-center justify-center h-screen text-zinc-500">No exercises found.</div>;
    }

    const progressPercent = (currentExIndex / lesson.exercises.length) * 100;

    const hasAnswer = (() => {
        switch (exercise.type) {
            case "multiple_choice":
            case "listening":
                return !!selectedOption;
            case "fill_in_blank":
                return !!fillInput.trim();
            case "sentence_arrange":
                return arrangedWords.length > 0;
            case "matching":
                return matchedPairs.length === matchPairs.length;
            default:
                return false;
        }
    })();

    const renderExercise = () => {
        switch (exercise.type) {
            case "multiple_choice":
            case "listening":
                return (
                    <div className="grid gap-3 mt-auto">
                        {exercise.options?.map((opt: string) => (
                            <button
                                key={opt}
                                onClick={() => {
                                    if (isCorrect !== null) return;
                                    setSelectedOption(opt);
                                }}
                                className={`py-4 px-6 text-left text-lg ${selectedOption === opt ? "btn-outline-selected" : "btn-outline"
                                    } ${isCorrect === true && selectedOption === opt ? '!bg-brand-green-100 !border-brand-green-500 !text-brand-green-700' : ''
                                    } ${isCorrect === false && selectedOption === opt ? '!bg-red-50 !border-red-500 !text-red-700' : ''}`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                );

            case "fill_in_blank":
                return (
                    <div className="mt-auto space-y-4">
                        <input
                            type="text"
                            value={fillInput}
                            onChange={(e) => {
                                if (isCorrect !== null) return;
                                setFillInput(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleCheck();
                            }}
                            placeholder="Type your answer..."
                            className={`w-full bg-white border-2 rounded-xl px-5 py-4 text-lg outline-none transition-all ${isCorrect === true
                                    ? "border-brand-green-500 bg-brand-green-100 text-brand-green-700"
                                    : isCorrect === false
                                        ? "border-red-500 bg-red-50 text-red-700"
                                        : "border-zinc-200 focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-200"
                                }`}
                            disabled={isCorrect !== null}
                            autoFocus
                        />
                    </div>
                );

            case "sentence_arrange":
                return (
                    <div className="mt-auto space-y-6">
                        {/* Arranged sentence area */}
                        <div className="min-h-[60px] bg-white border-2 border-dashed border-zinc-300 rounded-xl p-3 flex flex-wrap gap-2">
                            {arrangedWords.length === 0 && (
                                <span className="text-zinc-400 text-sm">Tap words below to build the sentence...</span>
                            )}
                            {arrangedWords.map((word, i) => (
                                <button
                                    key={`arranged-${i}`}
                                    onClick={() => {
                                        if (isCorrect !== null) return;
                                        setArrangedWords(prev => prev.filter((_, idx) => idx !== i));
                                    }}
                                    className={`px-4 py-2 rounded-lg font-bold text-base border-b-4 active:translate-y-1 active:border-b-0 transition-all ${isCorrect === true
                                            ? "bg-brand-green-100 border-brand-green-500 text-brand-green-700"
                                            : isCorrect === false
                                                ? "bg-red-50 border-red-500 text-red-700"
                                                : "bg-blue-50 border-blue-300 text-blue-700"
                                        }`}
                                >
                                    {word}
                                </button>
                            ))}
                        </div>

                        {/* Available words */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            {exercise.options?.filter(w => !arrangedWords.includes(w)).map((word, i) => (
                                <button
                                    key={`word-${i}`}
                                    onClick={() => {
                                        if (isCorrect !== null) return;
                                        setArrangedWords(prev => [...prev, word]);
                                    }}
                                    className="btn-outline px-4 py-2 text-base"
                                >
                                    {word}
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case "matching":
                return (
                    <div className="mt-auto space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Left column */}
                            <div className="space-y-3">
                                {matchPairs.map((pair) => (
                                    <button
                                        key={pair.left}
                                        onClick={() => handleMatchSelect("left", pair.left)}
                                        disabled={isMatched(pair.left, "left")}
                                        className={`w-full py-3 px-4 text-base font-bold rounded-xl border-2 border-b-4 transition-all ${isMatched(pair.left, "left")
                                                ? "bg-brand-green-100 border-brand-green-500 text-brand-green-700 opacity-60"
                                                : selectedLeft === pair.left
                                                    ? "bg-blue-50 border-blue-400 text-blue-700"
                                                    : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300"
                                            }`}
                                    >
                                        {pair.left}
                                    </button>
                                ))}
                            </div>
                            {/* Right column */}
                            <div className="space-y-3">
                                {matchPairs.map((pair) => (
                                    <button
                                        key={pair.right}
                                        onClick={() => handleMatchSelect("right", pair.right)}
                                        disabled={isMatched(pair.right, "right") || !selectedLeft}
                                        className={`w-full py-3 px-4 text-base font-bold rounded-xl border-2 border-b-4 transition-all ${isMatched(pair.right, "right")
                                                ? "bg-brand-green-100 border-brand-green-500 text-brand-green-700 opacity-60"
                                                : selectedLeft
                                                    ? "bg-white border-zinc-200 text-zinc-700 hover:border-blue-300 hover:bg-blue-50"
                                                    : "bg-white border-zinc-200 text-zinc-400"
                                            }`}
                                    >
                                        {pair.right}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            default:
                return <div className="text-zinc-400 text-center">Unknown exercise type</div>;
        }
    };

    const getCorrectAnswerDisplay = () => {
        if (Array.isArray(exercise.correctAnswer)) {
            return exercise.correctAnswer.join(" ");
        }
        return exercise.correctAnswer;
    };

    return (
        <div className="flex flex-col h-screen min-h-screen bg-zinc-50 relative">
            {/* Top Bar with Progress */}
            <div className="px-4 py-4 flex items-center space-x-4 bg-white border-b border-zinc-200">
                <Link href="/">
                    <button className="text-zinc-400 hover:text-zinc-600">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                </Link>
                <div className="flex-1 bg-zinc-200 h-3 flex rounded-full overflow-hidden">
                    <div
                        className="bg-brand-green-500 h-full transition-all duration-300 rounded-full"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* Main Exercise View */}
            <div className="flex-1 p-6 flex flex-col pt-8 overflow-y-auto">
                <h2 className="text-2xl font-bold text-zinc-800 mb-6">{exercise.prompt}</h2>

                {/* Audio Button for listening exercises or any with audioText */}
                {exercise.audioText && (exercise.type === "listening" || exercise.type === "multiple_choice") && (
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={playAudio}
                            className="bg-blue-500 p-4 rounded-full text-white shadow-lg active:scale-95 transition-transform"
                        >
                            <Volume2 className="w-8 h-8" />
                        </button>
                    </div>
                )}

                {renderExercise()}
            </div>

            {/* Bottom Check Bar */}
            <div className={`p-6 border-t ${isCorrect === true ? 'bg-brand-green-100 border-brand-green-500 text-brand-green-700'
                    : isCorrect === false ? 'bg-red-50 border-red-500 text-red-700'
                        : 'bg-white border-zinc-200'
                }`}>
                {isCorrect !== null && (
                    <div className="mb-4 flex items-center font-bold text-lg">
                        {isCorrect ? (
                            <><Check className="w-6 h-6 mr-2 shrink-0 bg-white rounded-full p-1" /> Excellent!</>
                        ) : (
                            <><X className="w-6 h-6 mr-2 shrink-0 bg-white text-red-700 rounded-full p-1" /> Correct answer: {getCorrectAnswerDisplay()}</>
                        )}
                    </div>
                )}

                {isCorrect === null ? (
                    exercise.type !== "matching" ? (
                        <button
                            onClick={handleCheck}
                            disabled={!hasAnswer}
                            className={`w-full py-4 text-lg ${hasAnswer ? 'btn-green' : 'bg-zinc-200 text-zinc-400 font-bold rounded-xl'}`}
                        >
                            Check
                        </button>
                    ) : (
                        <div className="text-center text-zinc-500 font-medium">
                            Match all pairs to continue
                        </div>
                    )
                ) : (
                    <button
                        onClick={handleNext}
                        className={`btn-pushable w-full py-4 text-white font-bold rounded-xl border-b-4 text-lg ${isCorrect ? 'bg-brand-green-500 border-brand-green-700 hover:bg-brand-green-600' : 'bg-red-500 border-red-700 hover:bg-red-600'
                            }`}
                    >
                        Continue
                    </button>
                )}
            </div>
        </div>
    );
}
