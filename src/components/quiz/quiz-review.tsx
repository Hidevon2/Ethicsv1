"use client";

import {
  describeCorrectAnswer,
  describeUserAnswer,
  kindLabel,
  type AnswerValue,
  type RenderedQuizItem,
} from "@/lib/quiz";

export function QuizReview({
  attempt,
  answers,
  results,
}: {
  attempt: RenderedQuizItem[];
  answers: Record<string, AnswerValue>;
  results: Record<string, boolean>;
}) {
  const missed = attempt.filter((rendered) => results[rendered.item.id] !== true);

  if (missed.length === 0) {
    return (
      <div
        className="rise-in mt-6 overflow-hidden rounded-[var(--radius)] border border-border bg-panel"
        aria-live="polite"
      >
        <div className="border-b border-border bg-panel-muted px-4 py-2">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            Review
          </p>
        </div>
        <p className="px-4 py-4 font-serif text-[15px] leading-relaxed text-ink-body">
          Nothing to review — every question was answered correctly. Tight work.
        </p>
      </div>
    );
  }

  return (
    <section aria-labelledby="review-heading" className="mt-6">
      <h2
        id="review-heading"
        className="text-balance font-serif text-2xl font-bold leading-snug text-foreground"
      >
        Review the misses
      </h2>
      <p className="mt-1 max-w-[68ch] font-serif text-sm italic leading-relaxed text-muted">
        {missed.length} question{missed.length === 1 ? "" : "s"} worth another
        look. Your answer in muted ink, the correct one in amber.
      </p>

      <div className="mt-4 space-y-4">
        {missed.map((rendered) => {
          const { item } = rendered;
          const value = answers[item.id];
          return (
            <article
              key={item.id}
              className="overflow-hidden rounded-[var(--radius)] border border-border bg-panel"
              aria-labelledby={`review-${item.id}-heading`}
            >
              <header className="flex items-center gap-2.5 border-b border-border bg-panel-muted px-4 py-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-border bg-primary/10 font-mono text-xs font-semibold text-primary">
                  ✕
                </span>
                <h3
                  id={`review-${item.id}-heading`}
                  className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground"
                >
                  {kindLabel(item.kind)}
                </h3>
              </header>
              <div className="px-4 py-4 sm:px-5">
                <p className="text-pretty font-serif text-[17px] leading-relaxed text-foreground">
                  {item.kind === "classification"
                    ? `Classify: “${item.prompt}”`
                    : item.prompt}
                </p>
                <dl className="mt-3 space-y-1.5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                    <dt className="w-24 shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Your answer
                    </dt>
                    <dd className="text-pretty font-serif text-sm leading-relaxed text-muted">
                      {describeUserAnswer(rendered, value)}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                    <dt className="w-24 shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                      Correct answer
                    </dt>
                    <dd className="text-pretty font-serif text-sm leading-relaxed text-primary">
                      {describeCorrectAnswer(rendered)}
                    </dd>
                  </div>
                </dl>
                <p className="mt-3 border-t border-dashed border-border pt-3 text-pretty font-serif text-sm leading-relaxed text-muted">
                  {item.explanation}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}