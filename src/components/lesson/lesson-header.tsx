import type { Lesson } from "@/lib/types";
import { getLessonsByUnit } from "@/lib/content";

export function LessonHeader({ lesson }: { lesson: Lesson }) {
  const unit = lesson.unit ?? 1;
  const roman = unit === 2 ? "II" : "I";
  const count = getLessonsByUnit(unit).length;

  return (
    <header className="relative mb-14 overflow-hidden border-b border-border pb-10 pt-4">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-6 select-none font-serif text-[9rem] font-semibold leading-none tracking-[-0.06em] text-primary/10"
      >
        {lesson.number}
      </span>
      <div className="relative flex items-center gap-3">
        <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-primary/50 bg-primary/10 px-1.5 font-sans text-xs font-semibold text-primary">
          {lesson.number}
        </span>
        <span className="h-px flex-1 bg-border" />
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/80">
          Unit {roman} · Lesson {lesson.number} of {count}
        </span>
      </div>
      <h1 className="relative mt-6 max-w-[16ch] text-balance font-serif text-5xl font-semibold leading-[0.94] tracking-[-0.035em] text-foreground sm:text-6xl">
        {lesson.title}
      </h1>
      <p className="relative mt-5 max-w-[62ch] text-balance font-sans text-[17px] leading-[1.7] text-ink-body">
        {lesson.coverLine}
      </p>
    </header>
  );
}
