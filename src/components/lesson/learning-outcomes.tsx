import type { Lesson } from "@/lib/types";

export function LearningOutcomes({ lesson }: { lesson: Lesson }) {
  return (
    <section
      id="outcomes"
      aria-labelledby="outcomes-heading"
      className="mb-12 overflow-hidden rounded-[var(--radius)] border-2 border-foreground bg-background shadow-[4px_4px_0_var(--border)]"
    >
      <header className="border-b-2 border-foreground bg-panel-muted px-4 py-2.5">
        <h2
          id="outcomes-heading"
          className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-foreground"
        >
          At the end of this lesson, you are expected to…
        </h2>
      </header>
      <ol className="px-5 py-4">
        {lesson.learningOutcomes.map((outcome, index) => (
          <li
            key={index}
            className="flex gap-3 border-b border-border py-3 last:border-b-0"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border-2 border-foreground bg-panel font-sans text-xs font-bold text-primary">
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
