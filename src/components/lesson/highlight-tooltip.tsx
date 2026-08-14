"use client";

import { HIGHLIGHT_COLORS } from "@/lib/annotations";
import type { HighlightColor } from "@/lib/types";
import { XIcon } from "@/components/ui/icons";

export function HighlightTooltip({
  x,
  y,
  onPick,
  onClose,
}: {
  x: number;
  y: number;
  onPick: (color: HighlightColor) => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed z-40 -translate-x-1/2 -translate-y-full"
      style={{ left: x, top: y }}
      role="dialog"
      aria-label="Mark this passage in ink"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="bubble-in relative mb-2 flex items-center gap-1.5 rounded-[var(--radius)] border border-border bg-panel px-2 py-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
        {(Object.entries(HIGHLIGHT_COLORS) as [HighlightColor, { label: string; hex: string }][]).map(
          ([key, value]) => (
            <button
              key={key}
              type="button"
              onClick={() => onPick(key)}
              className="flex h-7 items-center gap-1.5 rounded-sm border border-primary/40 bg-primary/10 px-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-contrast"
              title={value.label}
              aria-label={`Mark with ${value.label}`}
            >
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: value.hex }}
              />
              {value.label}
            </button>
          ),
        )}
        <button
          type="button"
          onClick={onClose}
          className="ml-1 rounded-sm p-1 text-muted hover:text-foreground"
          aria-label="Cancel highlight"
        >
          <XIcon className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}