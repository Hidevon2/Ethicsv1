import { Button } from "@/components/ui/button";
import { CheckCircleIcon, StampIcon } from "@/components/ui/icons";

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
      className="stamp-in overflow-hidden rounded-[var(--radius)] border-2 border-foreground bg-panel shadow-[4px_4px_0_var(--border)]"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 border-b-2 border-foreground bg-primary px-4 py-3 text-primary-contrast">
        <span className={perfect ? "starburst flex h-9 w-9 items-center justify-center bg-primary-contrast text-primary" : "flex h-9 w-9 items-center justify-center rounded-sm border-2 border-foreground bg-background text-primary"}>
          {perfect ? (
            <StampIcon className="h-4 w-4" />
          ) : (
            <CheckCircleIcon className="h-5 w-5" />
          )}
        </span>
        <div>
          <p className="font-sans text-sm font-bold uppercase tracking-[0.12em]">
            {perfect ? "Sagot! Perfect score" : "Quiz finished"}
          </p>
          <p className="font-serif text-sm text-primary-contrast/80">
            {score} of {total} correct
          </p>
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="mb-4 flex h-6 w-full overflow-hidden rounded-sm border-2 border-foreground bg-background">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${total === 0 ? 0 : (score / total) * 100}%` }}
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
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            {bestLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
