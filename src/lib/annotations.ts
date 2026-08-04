import type { HighlightColor } from "@/lib/types";

export const HIGHLIGHT_COLORS: Record<
  HighlightColor,
  { label: string; hex: string }
> = {
  red: { label: "Komiks red", hex: "#a62a1e" },
  teal: { label: "Teal", hex: "#0f6b5c" },
  amber: { label: "Amber", hex: "#a35f00" },
};
