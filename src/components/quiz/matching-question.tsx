"use client";

import type { QuizMatching } from "@/lib/types";

export type MatchingAnswer = Record<number, number>;

export function MatchingQuestion({
  item,
  rightOptions,
  value,
  revealed,
  hideCheck = false,
  onAnswer,
  onReveal,
}: {
  item: QuizMatching;
  rightOptions: string[];
  value: MatchingAnswer | undefined;
  revealed: boolean;
  hideCheck?: boolean;
  onAnswer: (value: MatchingAnswer) => void;
  onReveal: (correct: boolean) => void;
}) {
  const allPicked = item.pairs.every((_, index) => value?.[index] !== undefined);

  const isCorrect = item.pairs.every(
    (pair, index) =>
      value?.[index] !== undefined && rightOptions[value[index]] === pair.right,
  );

  return (
    <div>
      <div className="space-y-3">
        {item.pairs.map((pair, index) => {
          const picked = value?.[index];
          return (
            <div key={index} className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <span className="w-full shrink-0 font-serif text-sm font-medium text-foreground sm:w-[220px]">
                {index + 1}. {pair.left}
              </span>
              <span className="sr-only">is matched to</span>
              <span className="hidden text-muted sm:inline" aria-hidden="true">
                —
              </span>
              <select
                value={picked ?? ""}
                onChange={(e) => {
                  const next = { ...(value ?? {}) };
                  if (e.target.value === "") delete next[index];
                  else next[index] = Number(e.target.value);
                  onAnswer(next);
                }}
                disabled={revealed}
                aria-label={`Match ${pair.left}`}
                className="h-9 w-full rounded-[var(--radius)] border border-border bg-background px-2 font-sans text-sm text-foreground focus:border-primary/60 sm:w-[300px]"
              >
                <option value="">Choose…</option>
                {rightOptions.map((right, rightIndex) => (
                  <option key={rightIndex} value={rightIndex}>
                    {right}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
      {!revealed && !hideCheck && (
        <button
          type="button"
          onClick={() => onReveal(isCorrect)}
          disabled={!allPicked}
          className="mt-4 inline-flex h-9 items-center gap-2 rounded-[var(--radius)] bg-primary px-4 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary-contrast transition-colors hover:bg-amber-bright disabled:cursor-not-allowed disabled:opacity-40"
        >
          Check matching
        </button>
      )}
    </div>
  );
}