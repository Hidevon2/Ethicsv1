export interface Chapter {
  id: number;
  title: string;
  philosopher: string;
  dates: string;
  summary: string;
  sections: Section[];
  questions: Question[];
}

export interface Section {
  heading: string;
  paragraphs: string[];
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Annotation {
  id: string;
  chapterId: number;
  paragraphId: string;
  text: string;
  color: HighlightColor;
  timestamp: number;
  startOffset: number;
  endOffset: number;
}

export type HighlightColor = "gold" | "rose" | "sage" | "lavender" | "amber";

export const HIGHLIGHT_COLORS: Record<
  HighlightColor,
  { label: string; bg: string; border: string; hex: string }
> = {
  gold: {
    label: "Gold",
    bg: "bg-highlight-gold",
    border: "border-highlight-gold",
    hex: "#c8a84b",
  },
  rose: {
    label: "Rose",
    bg: "bg-highlight-rose",
    border: "border-highlight-rose",
    hex: "#c9a0a0",
  },
  sage: {
    label: "Sage",
    bg: "bg-highlight-sage",
    border: "border-highlight-sage",
    hex: "#8a9e7e",
  },
  lavender: {
    label: "Lavender",
    bg: "bg-highlight-lavender",
    border: "border-highlight-lavender",
    hex: "#d4b8e8",
  },
  amber: {
    label: "Amber",
    bg: "bg-highlight-amber",
    border: "border-highlight-amber",
    hex: "#d4a574",
  },
};
