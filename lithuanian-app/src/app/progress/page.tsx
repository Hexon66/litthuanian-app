"use client";

import BottomNav from "@/components/BottomNav";
import { Flame, Star, Award, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { getProgress, UserProgress } from "@/lib/progress";

export default function ProgressPage() {
    const [progress, setProgress] = useState<UserProgress | null>(null);

    useEffect(() => {
        setProgress(getProgress());
    }, []);

    const streak = progress?.streak ?? 0;
    const xp = progress?.xp ?? 0;
    const lessonsCompleted = progress?.completedLessons.length ?? 0;
    const league = "Bronze";

    return (
        <div className="flex flex-col h-screen min-h-screen bg-zinc-50 relative pb-24">
            <header className="px-4 py-4 bg-white border-b border-zinc-200 shadow-sm flex items-center justify-between sticky top-0 z-10">
                <h1 className="font-bold text-xl text-zinc-900">Profile</h1>
                <button className="text-zinc-400 hover:text-zinc-600">
                    {/* Settings icon could go here */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                </button>
            </header>

            <main className="flex-1 p-4 space-y-6 overflow-y-auto pt-6">
                {/* User Card */}
                <section className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-brand-green-100 border-4 border-brand-green-500 mb-4 flex items-center justify-center text-4xl">
                        🧑🏽‍🎓
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-900">Mokinys (Student)</h2>
                    <p className="text-zinc-500 font-medium">Joined March 2026</p>
                </section>

                {/* Stats Grid */}
                <section>
                    <h3 className="text-lg font-bold text-zinc-800 mb-3 px-2">Statistics</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-2xl border border-zinc-200 p-4 flex flex-col shadow-sm">
                            <Flame className="w-8 h-8 fill-orange-500 text-orange-500 mb-2" />
                            <span className="text-2xl font-black text-zinc-800">{streak}</span>
                            <span className="text-sm font-medium text-zinc-500">Day streak</span>
                        </div>
                        <div className="bg-white rounded-2xl border border-zinc-200 p-4 flex flex-col shadow-sm">
                            <Star className="w-8 h-8 fill-brand-gold-500 text-brand-gold-500 mb-2" />
                            <span className="text-2xl font-black text-zinc-800">{xp}</span>
                            <span className="text-sm font-medium text-zinc-500">Total XP</span>
                        </div>
                        <div className="bg-white rounded-2xl border border-zinc-200 p-4 flex flex-col shadow-sm">
                            <Award className="w-8 h-8 fill-blue-500 text-blue-500 mb-2" />
                            <span className="text-2xl font-black text-zinc-800">{league}</span>
                            <span className="text-sm font-medium text-zinc-500">Current League</span>
                        </div>
                        <div className="bg-white rounded-2xl border border-zinc-200 p-4 flex flex-col shadow-sm">
                            <BookOpen className="w-8 h-8 fill-brand-green-500 text-brand-green-500 mb-2" />
                            <span className="text-2xl font-black text-zinc-800">{lessonsCompleted}</span>
                            <span className="text-sm font-medium text-zinc-500">Lessons Finished</span>
                        </div>
                    </div>
                </section>

                {/* Achievements placeholder */}
                <section className="pb-6">
                    <h3 className="text-lg font-bold text-zinc-800 mb-3 px-2">Achievements</h3>
                    <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
                        <div className="flex items-center text-zinc-400 font-medium">
                            <span className="mr-3">🔒</span> Complete 10 lessons to unlock achievements!
                        </div>
                    </div>
                </section>
            </main>

            <BottomNav activeTab="profile" />
        </div>
    );
}
