"use client";

import { curriculum } from "@/data/curriculum";

export interface ReviewItem {
  wordId: string;
  lithuanian: string;
  english: string;
  lastReviewed: string; // ISO date
  nextReview: string;   // ISO date
  interval: number;     // days: 1, 3, 7, 14, 30
  correctStreak: number;
}

export interface ReviewState {
  items: ReviewItem[];
}

const STORAGE_KEY = "ltgo_reviews";
const INTERVALS = [1, 3, 7, 14, 30];

function getToday(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function getReviewState(): ReviewState {
  if (typeof window === "undefined") return { items: [] };
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return { items: [] };
}

export function saveReviewState(state: ReviewState): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
}

export function getDueReviews(): ReviewItem[] {
  const state = getReviewState();
  const today = getToday();
  return state.items.filter((item) => item.nextReview <= today);
}

export function recordReview(wordId: string, correct: boolean): void {
  const state = getReviewState();
  const item = state.items.find((i) => i.wordId === wordId);
  if (!item) return;

  const today = getToday();
  item.lastReviewed = today;

  if (correct) {
    item.correctStreak += 1;
    const intervalIndex = Math.min(item.correctStreak, INTERVALS.length - 1);
    item.interval = INTERVALS[intervalIndex];
  } else {
    item.correctStreak = 0;
    item.interval = INTERVALS[0];
  }

  item.nextReview = addDays(today, item.interval);
  saveReviewState(state);
}

export function addItemsFromLesson(lessonId: string): void {
  const state = getReviewState();
  const today = getToday();
  const tomorrow = addDays(today, 1);

  for (const unit of curriculum) {
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (!lesson) continue;

    // Add from keyVocabulary if available
    if (unit.keyVocabulary) {
      for (const word of unit.keyVocabulary) {
        const wordId = `${unit.id}-${word.lithuanian}`;
        if (!state.items.some((i) => i.wordId === wordId)) {
          state.items.push({
            wordId,
            lithuanian: word.lithuanian,
            english: word.english,
            lastReviewed: today,
            nextReview: tomorrow,
            interval: 1,
            correctStreak: 0,
          });
        }
      }
    }

    // Add from exercise translations
    for (const exercise of lesson.exercises) {
      if (exercise.translation && typeof exercise.correctAnswer === "string") {
        const wordId = `${lessonId}-${exercise.correctAnswer}`;
        if (!state.items.some((i) => i.wordId === wordId) && exercise.correctAnswer.length < 30) {
          state.items.push({
            wordId,
            lithuanian: exercise.correctAnswer,
            english: exercise.translation,
            lastReviewed: today,
            nextReview: tomorrow,
            interval: 1,
            correctStreak: 0,
          });
        }
      }
    }

    break;
  }

  saveReviewState(state);
}
