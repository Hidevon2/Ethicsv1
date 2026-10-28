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
  title: "Ethics Reviewer — Units I, II & III",
  description:
    "A lesson-by-lesson reviewer for Ethics: Unit I on the ethical dimension of human existence (the Mendez hazing case, valuation, moral thinking, sources of authority, and senses of the self), Unit II on utilitarianism (the common good, the principle of utility, the greatest number, and justice and rights), and Unit III on deontology (moral conviction and duty) — with quizzes, key terms, and reflection prompts.",
};

export const viewport: Viewport = {
  themeColor: "#100f0c",
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
OWN-WORLD: warm charcoal, umber surfaces, parchment text, and brass-gold accents; Fraunces carries titles, Work Sans carries reading and UI, and the existing classical imagery anchors the course library.
STORY: a student chooses a unit, opens the next unfinished lesson, reads and reflects, and sees actual completion progress across the course.
FIRST VIEWPORT: an editorial heading and learning action sit beside illuminated sculptures; the three-unit course navigation begins directly below the compact cover.
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
