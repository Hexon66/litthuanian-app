"use client";

import { BookOpen, MessageCircle, User, BookMarked } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type Tab = "learn" | "practice" | "words" | "profile";

const tabs = [
  { id: "learn" as Tab, label: "Learn", href: "/", icon: BookOpen },
  { id: "practice" as Tab, label: "Practice", href: "/practice", icon: MessageCircle },
  { id: "words" as Tab, label: "Words", href: "/vocabulary", icon: BookMarked },
  { id: "profile" as Tab, label: "Profile", href: "/progress", icon: User },
];

export default function BottomNav({ activeTab }: { activeTab: Tab }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-surface border-t border-border px-4 py-2 flex items-center justify-around pb-safe z-20">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <Link key={tab.id} href={tab.href}>
            <div className="relative flex flex-col items-center py-1 px-3">
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <motion.div
                animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <tab.icon
                  className={`w-6 h-6 mb-0.5 transition-colors ${isActive ? "text-accent" : "text-muted"}`}
                />
              </motion.div>
              <span
                className={`text-[10px] font-semibold uppercase tracking-wider transition-colors ${isActive ? "text-accent" : "text-muted"}`}
              >
                {tab.label}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
