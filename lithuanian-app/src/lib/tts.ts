export async function synthesizeSpeech(text: string): Promise<string | null> {
    try {
        const response = await fetch("/api/tts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error(`TTS API error: ${response.status}`);
        }

        const data = await response.json();
        return data.audioContent ?? null;
    } catch (error) {
        console.error("Error synthesizing speech:", error);
        return null;
    }
}
