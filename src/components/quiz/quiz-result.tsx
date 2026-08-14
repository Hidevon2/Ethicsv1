import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/icons";

export function QuizResult({
  score,
  total,
  best,
  fullTotal,
  missed,
  onRetry,
  onRetryMissed,
}: {
  score: number;
  total: number;
  best: number | null;
  fullTotal: number;
  missed: number;
  onRetry: () => void;
  onRetryMissed?: () => void;
}) {
  const perfect = score === total;
  const bestLabel =
    best !== null
      ? `Best score kept: ${best} of ${fullTotal}`
      : `Full quiz: ${fullTotal} questions`;
  return (
    <div
      className="rise-in overflow-hidden rounded-[var(--radius)] border border-border bg-panel"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 border-b border-border bg-primary/10 px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-primary bg-primary/10 text-primary">
          <CheckIcon className="h-4 w-4" />
        </span>
        <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
            {perfect ? "Sagot — perfect score" : "Quiz finished"}
          </p>
          <p className="font-serif text-sm text-ink-body">
            {score} of {total} correct
          </p>
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="wick-track mb-4" role="presentation">
          <div
            className="wick-fill"
            style={{
              transform: `scaleX(${total === 0 ? 0 : score / total})`,
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="secondary" size="sm" onClick={onRetry}>
            Retake the quiz
          </Button>
          {onRetryMissed && missed > 0 && (
            <Button variant="primary" size="sm" onClick={onRetryMissed}>
              Retry the {missed} missed
            </Button>
          )}
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            {bestLabel}
          </p>
        </div>
      </div>
    </div>
  );
}