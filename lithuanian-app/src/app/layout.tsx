import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FloatingBackground from "@/components/FloatingBackground";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "LithuanianGo | Learn Lithuanian",
  description: "Learn Lithuanian fast in a fun, gamified way with native pronunciation and AI conversation.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#22c55e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <div className="max-w-md mx-auto min-h-screen gradient-main shadow-xl overflow-hidden relative">
          <FloatingBackground />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
