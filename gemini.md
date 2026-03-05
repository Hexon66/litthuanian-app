# 🏛️ gemini.md — Project Constitution
# LithuanianGo | B.L.A.S.T. Protocol

> This file is LAW. All schemas, behavioral rules, and architectural invariants live here.
> Only update when: a schema changes, a rule is added, or architecture is modified.

---

## 📦 Project Identity

| Property | Value |
|---|---|
| App Name | **LithuanianGo** |
| Platform | Next.js 15 (PWA) |
| Root | `c:\Users\zenit\Desktop\ai automation\lithuanian app\lithuanian-app\` |
| Hosting | Vercel |
| Auth | Supabase Auth (future) |
| Database | Supabase PostgreSQL |
| AI | Google Gemini 1.5 Flash |
| TTS | Google Cloud Text-to-Speech (lt-LT-Standard-A) |

---

## 🗃️ Data Schemas

### Unit Schema
```typescript
interface Unit {
  id: string;        // e.g. "unit-1"
  title: string;     // e.g. "Unit 1: Greetings & Introductions"
  description: string;
  lessons: Lesson[];
}
```

### Lesson Schema
```typescript
interface Lesson {
  id: string;         // e.g. "lesson-1-1"
  title: string;
  description: string;
  exercises: Exercise[];
}
```

### Exercise Schema
```typescript
type ExerciseType = 'multiple_choice' | 'fill_in_blank' | 'matching' | 'listening' | 'sentence_arrange';

interface Exercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  options?: string[];         // multiple_choice, matching, sentence_arrange
  correctAnswer: string | string[];  // array for sentence_arrange; "A:B,C:D" for matching
  translation?: string;
  audioText?: string;         // text to synthesize via TTS
}
```

### Supabase: user_progress Table (Phase 2)
```sql
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  lesson_id TEXT NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  xp_earned INT DEFAULT 15,
  UNIQUE(user_id, lesson_id)
);
```

### Supabase: user_stats Table (Phase 2)
```sql
CREATE TABLE user_stats (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id),
  total_xp INT DEFAULT 0,
  current_streak INT DEFAULT 0,
  last_activity_date DATE
);
```

### Chat Message Schema (Rasa AI)
```typescript
type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};
```

### Gemini History Format
```typescript
{ role: string; parts: { text: string }[] }[]
```

---

## 🏗️ Architecture: 3-Layer (A.N.T.)

```
Layer 1 - Architecture  →  architecture/   (SOPs in Markdown)
Layer 2 - Navigation    →  Next.js App Router (routes data between layers)
Layer 3 - Tools         →  src/lib/ (gemini.ts, tts.ts, supabase.ts)
```

### File Structure
```
src/
  app/
    page.tsx              ← Dashboard (unit map, streak, XP)
    layout.tsx            ← Root layout (font, metadata, max-w-md container)
    globals.css           ← Design tokens + pushable button classes
    lesson/[id]/page.tsx  ← Lesson engine (all 5 exercise types)
    practice/page.tsx     ← AI chat with Rasa
    progress/page.tsx     ← Profile + stats
    api/tts/route.ts      ← Google TTS proxy
    actions/chat.ts       ← Gemini server action
  components/
    BottomNav.tsx         ← Tab navigation (Learn, Practice, Profile)
  data/
    curriculum.ts         ← All lesson/exercise data
  lib/
    gemini.ts             ← chatWithRasa() function
    tts.ts                ← synthesizeSpeech() function
    supabase.ts           ← Supabase client
```

---

## 📐 Behavioral Rules

1. **Mobile-first**: Max width `max-w-md` centered. All touch targets min 44px.
2. **Duolingo-style pushable buttons**: Use `.btn-green`, `.btn-gold`, `.btn-outline`, `.btn-pushable` CSS classes.
3. **Design Palette**: brand-green (primary), brand-gold (XP/stars), brand-red (hearts), zinc (neutral).
4. **Font**: Plus Jakarta Sans (loaded via `next/font/google`).
5. **TTS**: Always use `lt-LT-Standard-A` voice for Lithuanian.
6. **Gemini**: Always use `gemini-1.5-flash`. Max 150 tokens per Rasa response.
7. **XP Award**: 15 XP per completed lesson (no partial).
8. **Matching exercise format**: correctAnswer is `"A:B,C:D"` string; options array is `[leftA, rightA, leftB, rightB]`.
9. **Curriculum IDs**: Pattern `unit-{N}`, `lesson-{N}-{M}`, `ex-{N}-{M}-{K}`.
10. **No guessing on business logic** — if logic is unclear, ask user before coding.

---

## 🔑 Environment Variables

| Variable | Used In | Status |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `src/lib/supabase.ts` | ⚠️ Placeholder |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `src/lib/supabase.ts` | ⚠️ Placeholder |
| `GEMINI_API_KEY` | `src/lib/gemini.ts` | ⚠️ Placeholder |
| `GOOGLE_TTS_API_KEY` | `src/app/api/tts/route.ts` | ⚠️ Placeholder |

---

## 🛠️ Maintenance Log

| Date | Change | Author |
|---|---|---|
| 2026-03-05 | Initial constitution created from full project audit | System Pilot |
