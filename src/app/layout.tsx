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
THESIS: Unit I and II read as a nocturnal study object — a course reader annotated at night; illumination (a single amber wick line) is the measure of progress, and the interface refuses the gamified study-app dashboard.
OWN-WORLD: near-black void and panel neutrals, one amber accent (accent-amber) reserved for links, active states, progress, and focus; oxblood reserved exclusively for the Mendez hazing content; parchment/body/muted ink roles; Fraunces display, Work Sans body, IBM Plex Mono chrome.
STORY: a student reads lesson by lesson — marks terms that pop open, drags selections to leave amber ink, answers quizzes that light a wick instead of stamping a score, and watches Unit I light up lesson by lesson.
FIRST VIEWPORT: the open issue — a lone amber wick at the top of the void; ETHICS masthead in Fraunces; five chapter bands below that light as they scroll into view.
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