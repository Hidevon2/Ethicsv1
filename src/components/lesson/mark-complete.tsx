"use client";

import { Button } from "@/components/ui/button";
import { CheckCircleIcon, CheckIcon } from "@/components/ui/icons";

export function MarkComplete({
  completed,
  onToggle,
}: {
  completed: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-center gap-3 rounded-[var(--radius)] border border-border bg-panel px-4 py-3">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border ${
          completed
            ? "border-primary bg-primary text-primary-contrast"
            : "border-border bg-background text-muted"
        }`}
      >
        {completed ? (
          <CheckIcon className="h-4 w-4" />
        ) : (
          <CheckCircleIcon className="h-5 w-5" />
        )}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          {completed ? "Lesson marked complete" : "Lesson not yet complete"}
        </p>
        <p className="mt-0.5 text-pretty font-serif text-sm leading-relaxed text-muted">
          {completed
            ? "Your Unit I progress is saved to the database."
            : "Read the lesson, run the check, then tick it off here."}
        </p>
      </div>
      <Button variant={completed ? "secondary" : "primary"} size="sm" onClick={onToggle}>
        {completed ? "Unmark" : "Mark complete"}
      </Button>
    </div>
  );
}