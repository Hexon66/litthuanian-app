"use client";

const AudioContext = typeof window !== "undefined"
  ? window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext
  : null;

let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (!AudioContext) return null;
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}

function playTone(frequency: number, duration: number, type: OscillatorType = "sine", volume = 0.15) {
  const ctx = getCtx();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
  gainNode.gain.setValueAtTime(volume, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration);
}

export function playCorrectSound() {
  const ctx = getCtx();
  if (!ctx) return;

  // Ascending two-note chime
  playTone(523.25, 0.15, "sine", 0.12); // C5
  setTimeout(() => playTone(659.25, 0.2, "sine", 0.12), 100); // E5
}

export function playWrongSound() {
  // Low descending buzz
  playTone(220, 0.15, "square", 0.08); // A3
  setTimeout(() => playTone(185, 0.2, "square", 0.08), 100); // F#3
}

export function playXPSound() {
  const ctx = getCtx();
  if (!ctx) return;

  // Coin collect: quick ascending arpeggio
  playTone(587.33, 0.08, "sine", 0.1);  // D5
  setTimeout(() => playTone(698.46, 0.08, "sine", 0.1), 60);  // F5
  setTimeout(() => playTone(880, 0.12, "sine", 0.1), 120);     // A5
  setTimeout(() => playTone(1046.5, 0.15, "sine", 0.08), 180); // C6
}

export function playClickSound() {
  playTone(800, 0.05, "sine", 0.06);
}
