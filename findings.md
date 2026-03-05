# 🔍 findings.md — Research & Discoveries

---

## Project Audit (2026-03-05)

### What Exists
- Full Next.js 15 app at `lithuanian-app/`
- Design system: Plus Jakarta Sans font, brand-green/gold/red palette, pushable button CSS
- 5 exercise types implemented: multiple_choice, listening, matching, fill_in_blank, sentence_arrange
- Lesson engine complete with progress bar, confetti on completion, TTS audio, answer feedback
- Practice page: AI chat with Rasa (Gemini 1.5 Flash), TTS playback, typing dots animation
- Progress page: stats grid (streak, XP, league, lessons), achievements placeholder
- TTS API route proxying Google Cloud TTS with `lt-LT-Standard-A` voice
- BottomNav with 3 tabs: Learn, Practice, Profile

### What's Missing
- **API keys**: All placeholder strings in .env.local
- **Curriculum data**: Only Unit 1 partial (2 lessons, Lesson 1 complete, Lesson 2 has 2 exercises)
  - Units 2–8 are empty arrays `lessons: []`
- **Supabase persistence**: XP, streak, completed lessons are hardcoded mock values
  - No DB tables created yet
- **Auth**: No login/signup flow
- **PWA**: manifest.json referenced in layout.tsx but may not exist in /public

### Technical Notes
- Matching exercise: options array is `[leftA, rightA, leftB, rightB]` (interleaved pairs)
- Matching correctAnswer: `"A:B,C:D"` comma-separated colon-pairs
- TTS returns base64 MP3 via `data.audioContent`
- Gemini history shape: `{ role: string; parts: { text: string }[] }[]`
- App uses Tailwind CSS v4 (`@import "tailwindcss"` + `@theme {}` syntax)
- `react-confetti` and `react-use` are dependencies for the lesson completion screen

### Discovered Constraints
- Gemini API requires server-side usage (GEMINI_API_KEY has no NEXT_PUBLIC_ prefix)
- TTS API key also server-side (GOOGLE_TTS_API_KEY)
- Supabase URL/KEY are public (NEXT_PUBLIC_) — correct for client-side usage

### Resources Found (Previous Conversation)
- Stack confirmed: Next.js 15, Supabase, Gemini Flash, Google TTS
- Design palette: green (#22c55e), gold (#eab308), red (#ef4444)
- 8 curriculum units designed (see task_plan.md)
- Monthly cost estimate: $0–3/month for personal use
