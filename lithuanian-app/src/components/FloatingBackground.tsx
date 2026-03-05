"use client";

const blobs = [
  { size: 100, x: "10%", y: "15%", color: "rgba(34,197,94,0.08)", delay: "0s", duration: "20s" },
  { size: 80, x: "75%", y: "10%", color: "rgba(234,179,8,0.08)", delay: "3s", duration: "18s" },
  { size: 120, x: "60%", y: "45%", color: "rgba(59,130,246,0.06)", delay: "6s", duration: "22s" },
  { size: 60, x: "20%", y: "70%", color: "rgba(139,92,246,0.06)", delay: "2s", duration: "16s" },
  { size: 90, x: "85%", y: "75%", color: "rgba(34,197,94,0.06)", delay: "5s", duration: "24s" },
  { size: 70, x: "45%", y: "85%", color: "rgba(234,179,8,0.06)", delay: "8s", duration: "19s" },
];

export default function FloatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: blob.color,
            animation: `blob-float ${blob.duration} ease-in-out infinite`,
            animationDelay: blob.delay,
          }}
        />
      ))}
    </div>
  );
}
