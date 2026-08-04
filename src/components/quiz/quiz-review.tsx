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
        className="overflow-hidden rounded-[var(--radius)] border-2 border-foreground bg-panel shadow-[4px_4px_0_var(--border)]"
        aria-live="polite"
      >
        <div className="border-b-2 border-foreground bg-panel-muted px-4 py-2">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
            Review
          </p>
        </div>
        <p className="px-4 py-4 font-serif text-[15px] leading-relaxed text-foreground">
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
        look. Your answer is marked in red, the correct one in teal.
      </p>

      <div className="mt-4 space-y-4">
        {missed.map((rendered) => {
          const { item } = rendered;
          const value = answers[item.id];
          return (
            <article
              key={item.id}
              className="overflow-hidden rounded-[var(--radius)] border-2 border-foreground bg-panel shadow-[4px_4px_0_var(--border)]"
              aria-labelledby={`review-${item.id}-heading`}
            >
              <header className="flex items-center gap-2 border-b-2 border-foreground bg-panel-muted px-4 py-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-sm border-2 border-foreground bg-primary font-sans text-xs font-bold text-primary-contrast">
                  ✕
                </span>
                <h3
                  id={`review-${item.id}-heading`}
                  className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-foreground"
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
                    <dt className="w-24 shrink-0 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                      Your answer
                    </dt>
                    <dd className="text-pretty font-serif text-sm leading-relaxed text-primary">
                      {describeUserAnswer(rendered, value)}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                    <dt className="w-24 shrink-0 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                      Correct answer
                    </dt>
                    <dd className="text-pretty font-serif text-sm leading-relaxed text-accent">
                      {describeCorrectAnswer(rendered)}
                    </dd>
                  </div>
                </dl>
                <p className="mt-3 border-t-2 border-dashed border-foreground/20 pt-3 text-pretty font-serif text-sm leading-relaxed text-muted">
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
