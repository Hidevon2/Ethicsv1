import type { ReactNode } from "react";
import { sourcesComparison } from "@/lib/content/sources";
import type { SourceComparison } from "@/lib/types";
import { ScaleIcon, BookIcon, SparkIcon, XIcon, CheckIcon } from "@/components/ui/icons";

const ICONS: Record<string, ReactNode> = {
  law: <ScaleIcon className="h-5 w-5" />,
  religion: <BookIcon className="h-5 w-5" />,
  culture: <SparkIcon className="h-5 w-5" />,
};

function SourceCard({ source }: { source: SourceComparison }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--radius)] border-2 border-foreground bg-panel shadow-[4px_4px_0_var(--border)]">
      <header className="flex items-center gap-3 border-b-2 border-foreground bg-panel-muted px-4 py-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border-2 border-foreground bg-background text-primary">
          {ICONS[source.id]}
        </span>
        <div className="min-w-0">
          <h3 className="font-serif text-lg font-bold leading-tight text-foreground">
            {source.name}
          </h3>
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
            {source.tagline}
          </p>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 px-4 py-4">
        <p className="text-pretty font-serif text-[15px] leading-relaxed text-foreground">
          {source.intro}
        </p>

        <div>
          <p className="mb-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
            Where it helps
          </p>
          <ul className="space-y-1.5">
            {source.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                <span className="text-pretty font-serif text-sm leading-relaxed text-foreground">
                  {strength}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
            Where it falls short
          </p>
          <ul className="space-y-1.5">
            {source.limitations.map((limitation, index) => (
              <li key={index} className="flex items-start gap-2">
                <XIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                <span className="text-pretty font-serif text-sm leading-relaxed text-foreground">
                  {limitation}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function SourcesView() {
  return (
    <div>
      <header className="mb-10">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          Lesson 4 · Sources of Authority
        </p>
        <h1 className="mt-3 text-balance font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Where do the commands come from?
        </h1>
        <p className="mt-4 max-w-[68ch] text-balance font-serif text-lg italic leading-relaxed text-muted">
          Three authorities claim our obedience — the state, the divine, and
          the community. Compare their strengths and their limits, then judge.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {sourcesComparison.map((source) => (
          <SourceCard key={source.id} source={source} />
        ))}
      </div>

      <p className="mt-8 max-w-[68ch] text-pretty font-serif text-[15px] leading-relaxed text-muted">
        The lesson does not pick a winner. It maps each source&rsquo;s
        authority so that a moral judgment can stand on its own feet — knowing
        when the law is the floor, when religion grounds a duty, and when
        culture only shows what a community happens to honor.
      </p>
    </div>
  );
}
