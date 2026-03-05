"use client";

import { submitChatMessage } from "@/app/actions/chat";
import { synthesizeSpeech } from "@/lib/tts";
import BottomNav from "@/components/BottomNav";
import { ArrowLeft, Send, Volume2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Message = {
    id: string;
    role: 'user' | 'model';
    text: string;
};

export default function PracticePage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "init",
            role: 'model',
            text: "Labas! I'm Rasa, your Lithuanian practice partner. Kaip sekasi? (How are you?)"
        }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");

        // Add user message to UI
        const newMsg: Message = { id: Date.now().toString(), role: 'user', text: userMessage };
        const updatedMessages = [...messages, newMsg];
        setMessages(updatedMessages);
        setIsLoading(true);

        try {
            // Format history for Gemini
            const history = messages.map(m => ({
                role: m.role,
                parts: [{ text: m.text }]
            }));

            const res = await submitChatMessage(userMessage, history);

            setMessages([...updatedMessages, {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: res.text ?? "Atsiprašau, something went wrong. Try again!"
            }]);
        } catch (e) {
            console.error(e);
            setMessages([...updatedMessages, {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: "Atsiprašau, I'm having trouble connecting. Please try again!"
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const playReading = async (text: string) => {
        // Only play the Lithuanian parts if possible, but TTS will try to read it all.
        // For simplicity, just send the whole text.
        const audio64 = await synthesizeSpeech(text);
        if (audio64) {
            const audio = new Audio(`data:audio/mp3;base64,${audio64}`);
            audio.play();
        }
    };

    return (
        <div className="flex flex-col h-screen max-h-screen bg-white relative pb-24">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-zinc-200 px-4 py-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center space-x-3">
                    <Link href="/">
                        <button className="text-zinc-400 hover:text-zinc-600 active:scale-95 transition-transform">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-lg text-zinc-900 leading-tight">Chat with Rasa</h1>
                        <span className="text-xs text-brand-green-600 font-medium">● Online</span>
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-green-100 flex items-center justify-center border-2 border-brand-green-500 overflow-hidden">
                    <span className="text-xl">👩🏼</span>
                </div>
            </header>

            {/* Chat Area */}
            <main className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm relative group ${msg.role === 'user'
                                ? 'bg-brand-green-500 text-white rounded-tr-sm'
                                : 'bg-zinc-100 text-zinc-800 rounded-tl-sm border border-zinc-200'
                            }`}>
                            <p className="text-base leading-relaxed">{msg.text}</p>

                            {msg.role === 'model' && (
                                <button
                                    onClick={() => playReading(msg.text)}
                                    className="absolute -right-10 bottom-1 p-2 text-zinc-400 hover:text-brand-green-500 active:text-brand-green-500 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                                    title="Listen"
                                >
                                    <Volume2 className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-zinc-100 text-zinc-500 rounded-2xl rounded-tl-sm px-4 py-4 border border-zinc-200 flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </main>

            {/* Input Area */}
            <div className="absolute bottom-[72px] left-0 right-0 bg-white border-t border-zinc-200 p-3">
                <form onSubmit={handleSend} className="flex flex-row gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type in Lithuanian or English..."
                        className="flex-1 bg-zinc-100 border border-zinc-300 rounded-full px-5 py-3 outline-none focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-200 transition-all"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="w-12 h-12 flex-shrink-0 bg-brand-green-500 text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:bg-zinc-300 hover:bg-brand-green-600 active:scale-95 transition-all shadow-md"
                    >
                        <Send className="w-5 h-5 ml-1" />
                    </button>
                </form>
            </div>

            <BottomNav activeTab="practice" />
        </div>
    );
}
