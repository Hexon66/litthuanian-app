import type { Metadata, Viewport } from "next";
import { Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Lietuvi\u0173 | Learn Lithuanian Fast",
  description: "Learn Lithuanian fast in a fun, gamified way with native pronunciation and AI conversation.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0e0f0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${ibmPlexMono.variable}`}>
        <div className="max-w-md mx-auto min-h-screen relative z-[1]">
          {children}
        </div>
      </body>
    </html>
  );
}
