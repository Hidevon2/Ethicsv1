import type { Lesson } from "@/lib/types";

export function LearningOutcomes({ lesson }: { lesson: Lesson }) {
  return (
    <section
      id="outcomes"
      aria-labelledby="outcomes-heading"
      className="mb-12 overflow-hidden rounded-[var(--radius)] border border-border bg-panel"
    >
      <header className="border-b border-border bg-panel-muted px-4 py-2.5">
        <h2
          id="outcomes-heading"
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground"
        >
          At the end of this lesson, you are expected to…
        </h2>
      </header>
      <ol className="px-5 py-2">
        {lesson.learningOutcomes.map((outcome, index) => (
          <li
            key={index}
            className="flex gap-3 border-b border-border py-3 last:border-b-0"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border border-border bg-primary/10 font-mono text-xs font-semibold text-primary">
              {index + 1}
            </span>
            <span className="text-pretty font-serif text-base leading-relaxed text-foreground">
              {outcome}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}