import type { Metadata, Viewport } from "next";
import { Archivo, Spectral } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ethics · Unit I Reviewer — The Ethical Dimension of Human Existence",
  description:
    "A lesson-by-lesson reviewer for Unit I of Ethics: the Mendez hazing case, valuation, the precise terms of moral thinking, and sources of authority — with quizzes, key terms, and reflection prompts.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4efe2" },
    { media: "(prefers-color-scheme: dark)", color: "#16130c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${archivo.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full font-serif antialiased">
        <div
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: `<!-- THE COMMIT
THESIS: Unit I reads as a Filipino komiks issue — panels instead of cards, halftone dots instead of gradients; it refuses the generic editorial reader that every long-form study app ships.
OWN-WORLD: cream newsprint and ink-black neutrals, one deep komiks-red primary, one teal accent, 2px ink panel rules with hard offset shadows, halftone dot fields, Spectral serif narration, Archivo sans chrome.
STORY: a student reviews the module lesson by lesson — reads the Mendez case as a cover story, taps terms that pop open, answers quizzes that stamp Sagot!, and watches Unit I progress as page-turner ribbons.
FIRST VIEWPORT: the issue cover — masthead ETHICS, the unit banner, a red starburst on Lesson 1: Brotherhood or Violence?, and the table of contents panel with four lesson slots and a progress strip.
FORM: my grounded candidate #5, the Filipino komiks reader; seed key 1847bdf9.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.
-->`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
