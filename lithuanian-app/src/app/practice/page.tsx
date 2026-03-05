"use client";

import { submitChatMessage } from "@/app/actions/chat";
import { synthesizeSpeech } from "@/lib/tts";
import BottomNav from "@/components/BottomNav";
import Mascot from "@/components/Mascot";
import AnimatedPage from "@/components/AnimatedPage";
import { Send, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  role: "user" | "model";
  text: string;
};

export default function PracticePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "model",
      text: "Labas! I'm Rasa, your Lithuanian practice partner. Kaip sekasi? (How are you?)",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    const newMsg: Message = { id: Date.now().toString(), role: "user", text: userMessage };
    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));
      const res = await submitChatMessage(userMessage, history);
      setMessages([
        ...updatedMessages,
        { id: (Date.now() + 1).toString(), role: "model", text: res.text ?? "Atsiprašau, something went wrong. Try again!" },
      ]);
    } catch (e) {
      console.error(e);
      setMessages([
        ...updatedMessages,
        { id: (Date.now() + 1).toString(), role: "model", text: "Atsiprašau, I'm having trouble connecting. Please try again!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const playReading = async (text: string) => {
    const audio64 = await synthesizeSpeech(text);
    if (audio64) {
      new Audio(`data:audio/mp3;base64,${audio64}`).play();
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen relative pb-24">
      {/* Header */}
      <header className="sticky top-0 z-10 glass border-b border-white/30 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Mascot mood="happy" size="sm" />
            <div>
              <h1 className="font-bold text-lg text-zinc-900 leading-tight">Chat with Rasa</h1>
              <span className="text-xs text-brand-green-600 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-brand-green-500 inline-block" />
                Online
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <AnimatedPage>
        <main className="flex-1 overflow-y-auto p-4 space-y-3">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm relative group ${
                    msg.role === "user"
                      ? "bg-brand-green-500 text-white rounded-tr-sm"
                      : "glass rounded-tl-sm border border-white/50"
                  }`}
                >
                  <p className="text-base leading-relaxed">{msg.text}</p>
                  {msg.role === "model" && (
                    <button
                      onClick={() => playReading(msg.text)}
                      className="absolute -right-10 bottom-1 p-2 text-zinc-400 hover:text-brand-green-500 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="glass rounded-2xl rounded-tl-sm px-4 py-4 border border-white/50 flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-brand-green-500"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </main>
      </AnimatedPage>

      {/* Input Area */}
      <div className="absolute bottom-[72px] left-0 right-0 glass border-t border-white/30 p-3">
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type in Lithuanian or English..."
            className="flex-1 bg-white/80 border border-zinc-200 rounded-full px-5 py-3 outline-none focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-200 transition-all"
            disabled={isLoading}
          />
          <motion.button
            type="submit"
            disabled={!input.trim() || isLoading}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 shrink-0 bg-brand-green-500 text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:bg-zinc-300 hover:bg-brand-green-600 transition-all shadow-md"
          >
            <Send className="w-5 h-5 ml-0.5" />
          </motion.button>
        </form>
      </div>

      <BottomNav activeTab="practice" />
    </div>
  );
}
