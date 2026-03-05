"use client";

import BottomNav from "@/components/BottomNav";
import AnimatedPage from "@/components/AnimatedPage";
import { Flame, Star, Award, BookOpen, Trophy, Zap, Target, Crown } from "lucide-react";
import { useEffect, useState } from "react";
import { getProgress, UserProgress } from "@/lib/progress";
import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  { id: "first_lesson", title: "First Steps", desc: "Complete your first lesson", icon: "👣", check: (p: UserProgress) => p.completedLessons.length >= 1 },
  { id: "streak_3", title: "On Fire!", desc: "3-day streak", icon: "🔥", check: (p: UserProgress) => p.streak >= 3 },
  { id: "streak_7", title: "Unstoppable", desc: "7-day streak", icon: "💪", check: (p: UserProgress) => p.streak >= 7 },
  { id: "xp_100", title: "Century", desc: "Earn 100 XP", icon: "💯", check: (p: UserProgress) => p.xp >= 100 },
  { id: "xp_500", title: "Scholar", desc: "Earn 500 XP", icon: "🎓", check: (p: UserProgress) => p.xp >= 500 },
  { id: "lessons_10", title: "Dedicated", desc: "Complete 10 lessons", icon: "📚", check: (p: UserProgress) => p.completedLessons.length >= 10 },
  { id: "lessons_25", title: "Halfway!", desc: "Complete 25 lessons", icon: "🏅", check: (p: UserProgress) => p.completedLessons.length >= 25 },
  { id: "xp_1000", title: "Master", desc: "Earn 1000 XP", icon: "👑", check: (p: UserProgress) => p.xp >= 1000 },
];

function getLeague(xp: number): { name: string; color: string; icon: typeof Trophy } {
  if (xp >= 3000) return { name: "Diamond", color: "text-blue-500", icon: Crown };
  if (xp >= 1000) return { name: "Gold", color: "text-yellow-500", icon: Trophy };
  if (xp >= 300) return { name: "Silver", color: "text-zinc-400", icon: Award };
  return { name: "Bronze", color: "text-orange-600", icon: Award };
}

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (value === 0) return;
    let start = 0;
    const step = Math.max(1, Math.floor(value / 20));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(start);
    }, 30);
    return () => clearInterval(timer);
  }, [value]);
  return <>{display}</>;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProgressPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const streak = progress?.streak ?? 0;
  const xp = progress?.xp ?? 0;
  const lessonsCompleted = progress?.completedLessons.length ?? 0;
  const league = getLeague(xp);
  const LeagueIcon = league.icon;

  return (
    <div className="flex flex-col h-screen min-h-screen relative pb-24">
      <header className="sticky top-0 z-10 glass border-b border-white/30 px-4 py-3">
        <h1 className="font-bold text-xl text-zinc-900">Profile</h1>
      </header>

      <AnimatedPage>
        <main className="flex-1 p-4 space-y-6 overflow-y-auto pt-4">
          {/* User Card */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass card-elevated p-6 flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full bg-brand-green-100 border-4 border-brand-green-500 mb-3 flex items-center justify-center text-4xl">
              🧑‍🎓
            </div>
            <h2 className="text-xl font-bold text-zinc-900">Mokinys (Student)</h2>
            <p className="text-zinc-500 text-sm font-medium">Joined March 2026</p>
          </motion.section>

          {/* Stats Grid */}
          <section>
            <h3 className="text-lg font-bold text-zinc-800 mb-3 px-1">Statistics</h3>
            <motion.div
              className="grid grid-cols-2 gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="glass card-elevated p-4 flex flex-col">
                <div className="w-10 h-10 rounded-xl gradient-fire flex items-center justify-center mb-2">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-black text-zinc-800"><AnimatedNumber value={streak} /></span>
                <span className="text-xs font-medium text-zinc-500">Day Streak</span>
              </motion.div>

              <motion.div variants={itemVariants} className="glass card-elevated p-4 flex flex-col">
                <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-brand-gold-700" />
                </div>
                <span className="text-2xl font-black text-zinc-800"><AnimatedNumber value={xp} /></span>
                <span className="text-xs font-medium text-zinc-500">Total XP</span>
              </motion.div>

              <motion.div variants={itemVariants} className="glass card-elevated p-4 flex flex-col">
                <div className={`w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center mb-2`}>
                  <LeagueIcon className={`w-5 h-5 ${league.color}`} />
                </div>
                <span className="text-2xl font-black text-zinc-800">{league.name}</span>
                <span className="text-xs font-medium text-zinc-500">League</span>
              </motion.div>

              <motion.div variants={itemVariants} className="glass card-elevated p-4 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-brand-green-100 flex items-center justify-center mb-2">
                  <BookOpen className="w-5 h-5 text-brand-green-600" />
                </div>
                <span className="text-2xl font-black text-zinc-800"><AnimatedNumber value={lessonsCompleted} /></span>
                <span className="text-xs font-medium text-zinc-500">Lessons Done</span>
              </motion.div>
            </motion.div>
          </section>

          {/* Achievements */}
          <section className="pb-6">
            <h3 className="text-lg font-bold text-zinc-800 mb-3 px-1">Achievements</h3>
            <motion.div
              className="grid grid-cols-2 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {ACHIEVEMENTS.map((ach) => {
                const unlocked = progress ? ach.check(progress) : false;
                return (
                  <motion.div
                    key={ach.id}
                    variants={itemVariants}
                    className={`glass card-elevated p-3 flex items-center gap-3 ${!unlocked ? "opacity-40 grayscale" : ""}`}
                  >
                    <span className="text-2xl">{ach.icon}</span>
                    <div className="min-w-0">
                      <p className="font-bold text-sm text-zinc-800 truncate">{ach.title}</p>
                      <p className="text-xs text-zinc-500 truncate">{ach.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>
        </main>
      </AnimatedPage>

      <BottomNav activeTab="profile" />
    </div>
  );
}
