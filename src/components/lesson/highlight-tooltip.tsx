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
      aria-label="Choose a highlight color"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="relative mb-2 rounded-[var(--radius)] border-2 border-foreground bg-panel px-2 py-1.5 shadow-[4px_4px_0_var(--border)]">
        <div className="flex items-center gap-1.5">
          {(Object.entries(HIGHLIGHT_COLORS) as [HighlightColor, { label: string; hex: string }][]).map(
            ([key, value]) => (
              <button
                key={key}
                type="button"
                onClick={() => onPick(key)}
                className="h-6 w-6 rounded-sm border-2 border-foreground transition-transform hover:-translate-y-px"
                style={{ backgroundColor: value.hex }}
                title={value.label}
                aria-label={`Highlight with ${value.label}`}
              />
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
        <span className="bubble-down" aria-hidden="true" />
      </div>
    </div>
  );
}
