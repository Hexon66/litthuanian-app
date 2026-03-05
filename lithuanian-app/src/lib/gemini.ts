import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

export async function chatWithRasa(message: string, history: { role: string, parts: { text: string }[] }[] = []) {
    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: `You are Rasa, a friendly and encouraging native Lithuanian language tutor. 
      You are chatting with a beginner learning Lithuanian.
      Your goals:
      1. Keep the conversation simple and at a beginner level.
      2. If the user makes a mistake, gently correct them in English.
      3. Respond mostly in Lithuanian to give them practice, but you can use English in parentheses (like this) to translate harder words.
      4. Keep your responses short (1-2 sentences max).
      5. Ask simple return questions to keep the conversation going.`
        });

        const chat = model.startChat({
            history: history,
            generationConfig: {
                maxOutputTokens: 150,
            },
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Error communicating with Gemini:", error);
        return "Atsiprašau (I'm sorry), I'm having trouble thinking right now. Please try again later!";
    }
}
