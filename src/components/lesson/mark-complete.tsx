"use client";

import { Button } from "@/components/ui/button";
import { CheckCircleIcon, CheckIcon } from "@/components/ui/icons";
import { useState } from "react";

export function MarkComplete({
  completed,
  onToggle,
}: {
  completed: boolean;
  onToggle: () => Promise<void>;
}) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  async function toggle() {
    setPending(true);
    setError(false);
    try {
      await onToggle();
    } catch {
      setError(true);
    } finally {
      setPending(false);
    }
  }

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
        <p className="font-sans text-sm font-medium text-foreground">
          {completed ? "Lesson marked complete" : "Lesson not yet complete"}
        </p>
        <p className="mt-0.5 text-pretty font-sans text-xs leading-relaxed text-muted">
          {completed
            ? "Your progress is saved. You can revisit this lesson any time."
            : "Read the lesson, run the check, then tick it off here."}
        </p>
        {error && <p role="alert" className="mt-2 font-sans text-xs text-oxblood-soft">Couldn’t save your progress. Please try again.</p>}
      </div>
      <Button variant={completed ? "secondary" : "primary"} size="sm" onClick={() => void toggle()} disabled={pending} aria-pressed={completed}>
        {pending ? "Saving…" : completed ? "Unmark" : "Mark complete"}
      </Button>
    </div>
  );
}
