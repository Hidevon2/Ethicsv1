import type { Metadata, Viewport } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ethics Reviewer — Units I & II",
  description:
    "A lesson-by-lesson reviewer for Ethics: Unit I on the ethical dimension of human existence (the Mendez hazing case, valuation, moral thinking, sources of authority, and senses of the self) and Unit II on utilitarianism (the common good, the principle of utility, the greatest number, and justice and rights) — with quizzes, key terms, and reflection prompts.",
};

export const viewport: Viewport = {
  themeColor: "#0d0b08",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans antialiased">
        <div
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: `<!-- THE COMMIT
THESIS: Ethics is a candlelit archive — a rare course reader consulted by lamplight; illumination is the measure of progress, never gamification.
OWN-WORLD: void-black canvas, umber panels, parchment ink, and restrained brass-gold light; Fraunces leads editorial moments, Work Sans carries reading and UI, and geometry replaces ornamental imagery.
STORY: a student reads lesson by lesson — terms open as parchment notes, selections leave amber ink, quizzes light the wick, and Unit I kindles down the manuscript index.
FIRST VIEWPORT: a full-width void field holds a low brass glow and a single geometric ornament; the Ethics masthead occupies the left field and the scroll wick begins below it.
FORM: the brief-pinned world, the nocturnal amber study reader; no seed key (user-pinned direction).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.
-->`,
          }}
        />
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
        <SiteFooter />
      </body>
    </html>
  );
}
