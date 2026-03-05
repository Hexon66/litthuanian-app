"use client";

import { curriculum, Exercise } from "@/data/curriculum";

const STORAGE_KEY = "ltgo_daily_challenge";

function getTodaySeed(): number {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function getToday(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function getDailyChallengeExercise(completedLessonIds: string[]): Exercise | null {
  if (completedLessonIds.length === 0) return null;

  // Collect all exercises from completed lessons
  const allExercises: Exercise[] = [];
  for (const unit of curriculum) {
    for (const lesson of unit.lessons) {
      if (completedLessonIds.includes(lesson.id)) {
        allExercises.push(...lesson.exercises);
      }
    }
  }

  if (allExercises.length === 0) return null;

  // Use today's date as seed for deterministic "random"
  const seed = getTodaySeed();
  const index = seed % allExercises.length;
  return allExercises[index];
}

export function isDailyChallengeCompleted(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      return data.date === getToday();
    }
  } catch {}
  return false;
}

export function completeDailyChallenge(): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: getToday() }));
  }
}
