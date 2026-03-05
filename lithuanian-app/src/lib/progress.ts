"use client";

import { addItemsFromLesson } from "@/lib/spacedRepetition";

export interface UserProgress {
    xp: number;
    streak: number;
    hearts: number;
    lastActivityDate: string;
    completedLessons: string[];
}

const STORAGE_KEY = 'ltgo_progress';

const getLocalDateString = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export const getProgress = (): UserProgress => {
    if (typeof window === 'undefined') {
        return { xp: 0, streak: 0, hearts: 5, lastActivityDate: getLocalDateString(), completedLessons: [] };
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved) as UserProgress;
            const today = getLocalDateString();

            if (parsed.lastActivityDate !== today) {
                const lastDate = new Date(parsed.lastActivityDate);
                const currDate = new Date(today);
                const diffTime = Math.abs(currDate.getTime() - lastDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays > 1) {
                    parsed.streak = 0;
                }

                parsed.hearts = 5;
                parsed.lastActivityDate = today;
                saveProgress(parsed);
            }

            return parsed;
        } catch (e) {
            console.error("Failed to parse progress", e);
        }
    }

    const defaultState: UserProgress = {
        xp: 0,
        streak: 0,
        hearts: 5,
        lastActivityDate: getLocalDateString(),
        completedLessons: []
    };
    saveProgress(defaultState);
    return defaultState;
};

export const saveProgress = (progress: UserProgress) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
};

export const completeLesson = (lessonId: string, xpGained: number = 15) => {
    const progress = getProgress();

    progress.xp += xpGained;

    if (!progress.completedLessons.includes(lessonId)) {
        progress.completedLessons.push(lessonId);
    }

    if (progress.streak === 0) {
        progress.streak = 1;
    }

    saveProgress(progress);

    // Seed spaced repetition with words from this lesson
    try {
        addItemsFromLesson(lessonId);
    } catch {}

    return progress;
};

export const loseHeart = (): number => {
    const progress = getProgress();
    progress.hearts = Math.max(0, progress.hearts - 1);
    saveProgress(progress);
    return progress.hearts;
};

export const getLevel = (xp: number): number => {
    return Math.floor(xp / 100) + 1;
};

export const getLeague = (xp: number): string => {
    if (xp >= 3000) return "Diamond";
    if (xp >= 1000) return "Gold";
    if (xp >= 300) return "Silver";
    return "Bronze";
};
