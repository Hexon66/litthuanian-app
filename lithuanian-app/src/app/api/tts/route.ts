import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const apiKey = process.env.GOOGLE_TTS_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: "TTS API key not configured" }, { status: 500 });
    }

    try {
        const { text } = await req.json();
        if (!text || typeof text !== "string") {
            return NextResponse.json({ error: "Missing text parameter" }, { status: 400 });
        }

        const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                input: { text },
                voice: { languageCode: "lt-LT", name: "lt-LT-Standard-A" },
                audioConfig: { audioEncoding: "MP3" },
            }),
        });

        if (!response.ok) {
            throw new Error(`Google TTS API error: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json({ audioContent: data.audioContent });
    } catch (error) {
        console.error("TTS API error:", error);
        return NextResponse.json({ error: "Failed to synthesize speech" }, { status: 500 });
    }
}
