"use client";

import { addItemsFromLesson } from "@/lib/spacedRepetition";
import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

export interface UserProgress {
    xp: number;
    streak: number;
    hearts: number;
    lastActivityDate: string;
    completedLessons: string[];
}

const STORAGE_KEY = 'ltgo_progress';
const SESSION_KEY = 'ltgo_session_id';

const getLocalDateString = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// Retrieve or generate an anonymous session ID for tracking users before Auth is set up
const getSessionId = () => {
    if (typeof window === 'undefined') return 'server';
    let sessionId = localStorage.getItem(SESSION_KEY);
    if (!sessionId) {
        sessionId = uuidv4();
        localStorage.setItem(SESSION_KEY, sessionId);
    }
    return sessionId;
}

export const syncProgressWithSupabase = async (progress: UserProgress) => {
    if (typeof window === 'undefined') return;

    try {
        const userId = getSessionId();
        
        // Upsert user stats
        await supabase.from('user_stats').upsert({
            user_id: userId,
            total_xp: progress.xp,
            current_streak: progress.streak,
            last_activity_date: progress.lastActivityDate
        }, { onConflict: 'user_id' });

        // Upsert completed lessons
        for (const lessonId of progress.completedLessons) {
            await supabase.from('user_progress').upsert({
                user_id: userId,
                lesson_id: lessonId,
                completed_at: new Date().toISOString()
            }, { onConflict: 'user_id, lesson_id' }).select();
        }
    } catch (e) {
        console.error("Failed to sync progress to Supabase:", e);
    }
}


export const getProgress = (): UserProgress => {
    if (typeof window === 'undefined') {
        return { xp: 0, streak: 0, hearts: 5, lastActivityDate: getLocalDateString(), completedLessons: [] };
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    
    // Asynchronously fetch from Supabase to ensure local is up to date, but return local first for immediate render
    setTimeout(async () => {
        try {
            const userId = getSessionId();
            const { data: stats } = await supabase.from('user_stats').select('*').eq('user_id', userId).single();
            const { data: progressList } = await supabase.from('user_progress').select('lesson_id').eq('user_id', userId);
            
            if (stats) {
                const currentLocal = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') as Partial<UserProgress>;
                
                // If remote has more XP, it's the newer truth
                if (!currentLocal.xp || stats.total_xp > currentLocal.xp) {
                    const updatedState: UserProgress = {
                        xp: stats.total_xp,
                        streak: stats.current_streak || 0,
                        hearts: currentLocal.hearts || 5,
                        lastActivityDate: stats.last_activity_date || getLocalDateString(),
                        completedLessons: progressList ? progressList.map(p => p.lesson_id) : []
                    };
                    
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedState));
                    // Force a reload if we pulled new data so UI updates, but only if we significantly jumped
                    if (!currentLocal.xp || stats.total_xp > currentLocal.xp + 15) {
                        window.dispatchEvent(new Event('storage'));
                    }
                }
            }
        } catch (e) {
            console.error("Failed to sync from Supabase:", e);
        }
    }, 1000);

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
                saveProgress(parsed); // This also syncs to Supabase
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
    saveProgress(defaultState); // This also syncs to Supabase
    return defaultState;
};

export const saveProgress = (progress: UserProgress) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        // Fire and forget sync
        syncProgressWithSupabase(progress);
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
