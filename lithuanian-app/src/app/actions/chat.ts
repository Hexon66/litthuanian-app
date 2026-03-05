"use server";

import { chatWithRasa } from "@/lib/gemini";

export async function submitChatMessage(
    message: string,
    history: { role: string, parts: { text: string }[] }[]
) {
    try {
        const responseText = await chatWithRasa(message, history);
        return { success: true, text: responseText };
    } catch (error) {
        console.error("Chat action error:", error);
        return { success: false, text: "Atsiprašau, I'm having trouble connecting right now." };
    }
}
