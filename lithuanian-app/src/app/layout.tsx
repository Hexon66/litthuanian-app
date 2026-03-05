import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl overflow-hidden relative">
          {children}
        </div>
      </body>
    </html>
  );
}
