# 📋 task_plan.md — LithuanianGo Build Plan
# B.L.A.S.T. Protocol

---

## 🎯 North Star
Build a Duolingo-style PWA to learn Lithuanian as a near-native speaker, with gamified lessons, real Lithuanian audio pronunciation, and an AI conversation partner.

---

## ✅ Phase 1: B — Blueprint [COMPLETE]
- [x] Discovery questions answered
- [x] Data schemas defined in gemini.md
- [x] App name, stack, and design direction confirmed
- [x] Curriculum structure (8 units × 5 lessons) designed
- [x] 6 exercise types defined
- [x] Implementation plan approved

---

## ✅ Phase 2: L — Link [PARTIALLY COMPLETE]
- [x] Next.js 15 project created
- [x] Supabase client connected (lib/supabase.ts)
- [x] Gemini API connected (lib/gemini.ts)
- [x] TTS API route created (api/tts/route.ts)
- [ ] **API keys need real values** — user must fill .env.local
- [ ] Supabase tables need to be created

---

## 🔄 Phase 3: A — Architect [IN PROGRESS]

### Layer 1: Architecture SOPs
- [ ] Create `architecture/` folder with SOPs

### Layer 2: Navigation (App Router)
- [x] Dashboard page.tsx — unit map, streak, XP header
- [x] Lesson engine lesson/[id]/page.tsx — all 5 exercise types
- [x] Practice page practice/page.tsx — AI chat with Rasa
- [x] Progress page progress/page.tsx — stats, league, achievements
- [x] BottomNav component

### Layer 3: Tools (Curriculum Data)
- [x] Unit 1: Greetings (2 lessons, partial exercises)
- [ ] Unit 1: Complete to 5 lessons with full exercises
- [ ] Unit 2: Numbers & Time (5 lessons)
- [ ] Unit 3: Food & Cafés (5 lessons)
- [ ] Unit 4: Directions & Transport (5 lessons)
- [ ] Unit 5: University & Student Life (5 lessons)
- [ ] Unit 6: Shopping & Money (5 lessons)
- [ ] Unit 7: Weather & Small Talk (5 lessons)
- [ ] Unit 8: Making & Keeping Friends (5 lessons)

### Supabase Integration
- [ ] Create user_progress table
- [ ] Create user_stats table
- [ ] Connect XP/streak saving after lesson complete
- [ ] Load real stats on dashboard + progress page

---

## ⬜ Phase 4: S — Stylize
- [ ] Review all screens on mobile viewport
- [ ] Smooth transitions between exercises
- [ ] Dark mode support
- [ ] PWA manifest + icons

---

## ⬜ Phase 5: T — Trigger
- [ ] Add real API keys to .env.local (user action)
- [ ] Deploy to Vercel
- [ ] Set up Supabase RLS policies
- [ ] Final verification on real device

---

## 🚦 Current Priority Queue
1. Fill `.env.local` with real API keys
2. Expand curriculum data (Units 2–8)
3. Wire Supabase progress persistence
4. Deploy to Vercel
