"use client";

import { curriculum } from "@/data/curriculum";

export interface VocabEntry {
  lithuanian: string;
  english: string;
  gender?: "m" | "f" | "n";
  unitId: string;
  unitTitle: string;
  example?: string;
}

export function getLearnedVocabulary(completedLessonIds: string[]): VocabEntry[] {
  const vocab: VocabEntry[] = [];
  const seen = new Set<string>();

  for (const unit of curriculum) {
    // Add key vocabulary from unit
    if (unit.keyVocabulary) {
      for (const word of unit.keyVocabulary) {
        const key = word.lithuanian.toLowerCase();
        if (!seen.has(key)) {
          // Only include if at least one lesson from this unit is completed
          const hasCompletedLesson = unit.lessons.some((l) => completedLessonIds.includes(l.id));
          if (hasCompletedLesson) {
            seen.add(key);
            vocab.push({
              lithuanian: word.lithuanian,
              english: word.english,
              gender: word.gender,
              unitId: unit.id,
              unitTitle: unit.title,
            });
          }
        }
      }
    }

    // Extract vocabulary from exercise content
    for (const lesson of unit.lessons) {
      if (!completedLessonIds.includes(lesson.id)) continue;

      for (const exercise of lesson.exercises) {
        if (exercise.translation) {
          const lt = typeof exercise.correctAnswer === "string"
            ? exercise.correctAnswer
            : exercise.correctAnswer.join(" ");
          const key = lt.toLowerCase();
          if (!seen.has(key) && lt.length < 40) {
            seen.add(key);
            vocab.push({
              lithuanian: lt,
              english: exercise.translation,
              unitId: unit.id,
              unitTitle: unit.title,
              example: exercise.prompt,
            });
          }
        }
      }
    }
  }

  return vocab;
}

export function searchVocabulary(vocab: VocabEntry[], query: string): VocabEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return vocab;
  return vocab.filter(
    (v) => v.lithuanian.toLowerCase().includes(q) || v.english.toLowerCase().includes(q)
  );
}
