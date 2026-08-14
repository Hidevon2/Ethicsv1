import type { Lesson } from "@/lib/types";
import { getLessonsByUnit } from "@/lib/content";

export function LessonHeader({ lesson }: { lesson: Lesson }) {
  const unit = lesson.unit ?? 1;
  const roman = unit === 2 ? "II" : "I";
  const count = getLessonsByUnit(unit).length;

  return (
    <header className="relative mb-10 overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-6 select-none font-serif text-[8rem] font-bold leading-none tracking-tight text-foreground/[0.04]"
      >
        {lesson.number}
      </span>
      <div className="relative flex items-center gap-3">
        <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-sm border border-border bg-primary/10 px-1.5 font-mono text-sm font-semibold text-primary">
          {lesson.number}
        </span>
        <span className="h-px flex-1 bg-border" />
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          Unit {roman} · Lesson {lesson.number} of {count}
        </span>
      </div>
      <h1 className="relative mt-5 text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
        {lesson.title}
      </h1>
      <p className="relative mt-4 max-w-[68ch] text-balance font-serif text-lg italic leading-relaxed text-ink-body">
        {lesson.coverLine}
      </p>
    </header>
  );
}