"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { AppHeader } from "@/components/layout/app-header";
import { SearchDialog } from "@/components/search/search-dialog";
import { getLessonsByUnit } from "@/lib/content";
import { unitOneWrapUp } from "@/lib/content/unit1-wrapup";
import { useLessonProgress } from "@/lib/hooks";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface Chapter {
  index: number;
  label: string;
  title: string;
  coverLine: string;
  meta: string;
  href: string;
  mendez?: boolean;
}

function buildChapters(): Chapter[] {
  const lessons = getLessonsByUnit(1);
  const entries: Chapter[] = lessons.map((lesson) => ({
    index: lesson.number,
    label: `Chapter ${String(lesson.number).padStart(2, "0")}`,
    title: lesson.title,
    coverLine: lesson.coverLine,
    meta: `${lesson.learningOutcomes.length} outcomes · ${lesson.keyTerms.length} key terms · ${lesson.quiz.length} quiz items`,
    href: `/lesson?slug=${lesson.slug}`,
    mendez: lesson.number === 1,
  }));
  entries.push({
    index: 5,
    label: "Chapter 05",
    title: "Harness · Summary · Key Words",
    coverLine: "Where the unit leaves you — one capstone discussion and the words that carried it.",
    meta: `${unitOneWrapUp.keyWords.length} key words · the unit in four bullets`,
    href: "/unit/1/wrap-up",
  });
  return entries;
}

export default function Home() {
  const chapters = buildChapters();
  const { progress, loading, completedCount } = useLessonProgress();
  const journeyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start start", "end end"],
  });

  const wickScale = useTransform(scrollYProgress, [0, 1], [0.02, 1]);
  const complete = progress.filter((p) => p.completed);

  return (
    <div className="flex min-h-dvh flex-col bg-background font-sans text-foreground">
      <AppHeader />
      <SearchDialog />

      <main className="flex-1">
        <div
          ref={journeyRef}
          className="relative mx-auto max-w-6xl px-4 sm:px-6"
        >
          {/* Masthead */}
          <header className="border-b border-border py-16 sm:py-24">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Unit I · The Ethical Dimension of Human Existence
            </p>
            <h1 className="mt-4 text-balance font-serif text-6xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-8xl">
              Ethics
            </h1>
            <p className="mt-4 max-w-[56ch] font-serif text-lg italic leading-relaxed text-ink-body">
              A collegiate study read story-first — five chapters from the
              Mendez case to the sources of moral authority.
            </p>

            {/* The wick — illumination as progress, anchored to the journey */}
            <div
              className="wick-track mt-10 max-w-[320px]"
              role="progressbar"
              aria-label="Scroll through the five chapters"
            >
              <motion.div className="wick-fill" style={{ scaleX: wickScale }} />
            </div>
            <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              Scroll to light the chapters
            </p>
          </header>

          {/* Five-chapter scroll journey */}
          <div className="border-b border-border">
            {chapters.map((chapter) => (
              <ChapterBand key={chapter.href} chapter={chapter} />
            ))}
          </div>
        </div>

        {/* Contents + progress + actions */}
        <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="mt-16 max-w-3xl">
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Contents
            </h2>

            <div className="mt-6 overflow-hidden rounded-md border border-border bg-panel">
              <ol role="list" className="divide-y divide-border">
                {chapters.map((chapter) => {
                  const isLesson = chapter.href.startsWith("/lesson");
                  const slug = isLesson
                    ? chapter.href.split("slug=")[1]
                    : null;
                  const done = slug
                    ? complete.some((p) => p.lessonSlug === slug)
                    : false;
                  return (
                    <li key={chapter.href}>
                      <Link
                        href={chapter.href}
                        className="group flex w-full items-center gap-5 px-5 py-5 text-left transition-colors hover:bg-panel-muted sm:px-6"
                      >
                        <span
                          aria-hidden="true"
                          className="hidden shrink-0 font-mono text-[13px] font-semibold text-muted transition-colors group-hover:text-primary sm:block sm:w-8"
                        >
                          {String(chapter.index).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border font-serif text-base font-bold transition-colors",
                            done
                              ? "border-primary bg-primary/15 text-primary"
                              : chapter.mendez
                                ? "text-oxblood-soft"
                                : "text-foreground",
                          )}
                        >
                          {done ? (
                            <CheckIcon className="h-4 w-4" />
                          ) : (
                            chapter.index
                          )}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                            {chapter.mendez ? "The Mendez case · Chapter" : "Chapter"}
                            {" "}{String(chapter.index).padStart(2, "0")}
                          </span>
                          <span className="mt-0.5 block text-balance font-serif text-xl font-bold leading-snug text-foreground sm:text-2xl">
                            {chapter.title}
                          </span>
                          <span className="mt-1 block font-sans text-sm leading-relaxed text-ink-body">
                            {chapter.coverLine}
                          </span>
                          <span className="mt-1.5 block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                            {chapter.meta}
                          </span>
                        </span>
                        <ArrowRightIcon className="h-5 w-5 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-primary motion-reduce:group-hover:translate-x-0" />
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>

            <p className="mt-8 max-w-[62ch] font-sans text-[15px] leading-relaxed text-ink-body">
              Read each lesson like an issue page by page — tap an amber term
              to pop its definition, drag a selection to mark it in ink, answer
              the check at the end, and keep your Challenge reflections on
              file. Press{" "}
              <kbd className="rounded-sm border border-border bg-panel px-1 font-mono text-xs text-foreground">/</kbd>{" "}
              anywhere to search the whole unit.
            </p>

            <div className="mt-10 rounded-md border border-border bg-panel px-5 py-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Unit progress
                </span>
                <span className="font-mono text-[13px] font-semibold text-foreground">
                  {completedCount} of {chapters.length} lessons complete
                </span>
              </div>
              <div
                className="wick-track mt-3"
                role="progressbar"
                aria-label="Overall Unit I progress"
                aria-valuenow={completedCount}
                aria-valuemin={0}
                aria-valuemax={chapters.length}
              >
                <div
                  className="wick-fill"
                  style={{
                    transform: `scaleX(${chapters.length === 0 ? 0 : completedCount / chapters.length})`,
                  }}
                />
              </div>
              {loading && (
                <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Loading progress…
                </p>
              )}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                href="/unit/1/wrap-up"
                className="group flex items-center justify-between gap-3 rounded-md border border-border bg-panel px-4 py-3 transition-colors hover:border-primary/60 hover:bg-panel-muted"
              >
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                    Unit I wrap-up
                  </span>
                  <span className="block truncate font-serif text-sm font-semibold text-foreground">
                    HARNESS · SUMMARY · KEY WORDS
                  </span>
                </span>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
              </Link>
              <Link
                href="/unit/2"
                className="group flex items-center justify-between gap-3 rounded-md border border-border bg-panel px-4 py-3 transition-colors hover:border-primary/60 hover:bg-panel-muted"
              >
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                    Next
                  </span>
                  <span className="block truncate font-serif text-sm font-semibold text-foreground">
                    Unit II · Utilitarianism
                  </span>
                </span>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ChapterBand({ chapter }: { chapter: Chapter }) {
  return (
    <Link
      href={chapter.href}
      className="group relative block border-b border-border px-1 py-14 transition-colors sm:py-20"
    >
      {/* Ghost numeral */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-4 select-none font-serif text-[7rem] font-bold leading-none tracking-tight text-foreground/[0.04] sm:text-[11rem]"
      >
        {String(chapter.index).padStart(2, "0")}
      </span>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.26, ease: "easeOut" }}
        className="relative"
      >
        <p className="flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]">
          <span
            className={cn(
              "text-primary",
              chapter.mendez && "text-oxblood-soft",
            )}
          >
            {chapter.mendez ? "The Mendez case" : "Chapter"}
            {" "}{String(chapter.index).padStart(2, "0")}
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-primary/40" />
        </p>
        <h2 className="mt-3 max-w-[18ch] text-balance font-serif text-4xl font-bold leading-[1.02] tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-6xl">
          {chapter.title}
        </h2>
        <p className="mt-4 max-w-[52ch] font-sans text-[16px] leading-relaxed text-ink-body">
          {chapter.coverLine}
        </p>
        <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          {chapter.meta}
        </p>
      </motion.div>
    </Link>
  );
}