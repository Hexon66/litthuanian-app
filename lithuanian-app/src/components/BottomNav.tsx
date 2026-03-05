"use client";

import { BookOpen, MessageCircle, User } from "lucide-react";
import Link from "next/link";

type Tab = "learn" | "practice" | "profile";

const tabs = [
    { id: "learn" as Tab, label: "Learn", href: "/", icon: BookOpen },
    { id: "practice" as Tab, label: "Practice", href: "/practice", icon: MessageCircle },
    { id: "profile" as Tab, label: "Profile", href: "/progress", icon: User },
];

export default function BottomNav({ activeTab }: { activeTab: Tab }) {
    return (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-zinc-200 px-6 py-3 flex items-center justify-between pb-safe z-20">
            {tabs.map((tab) => (
                <Link key={tab.id} href={tab.href}>
                    <div className={`flex flex-col items-center transition-colors ${
                        activeTab === tab.id ? "text-brand-green-500" : "text-zinc-400 hover:text-zinc-600"
                    }`}>
                        <tab.icon className="w-6 h-6 mb-1" />
                        <span className="text-xs font-bold">{tab.label}</span>
                    </div>
                </Link>
            ))}
        </nav>
    );
}
