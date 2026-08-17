"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AppHeader } from "@/components/layout/app-header";
import { SearchDialog } from "@/components/search/search-dialog";
import { getLessonsByUnit } from "@/lib/content";
import { useLessonProgress } from "@/lib/hooks";
import { ArrowRightIcon, SearchIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface Chapter {
  index: number;
  title: string;
  coverLine: string;
  meta: string;
  href: string;
}

const chapterImages: Record<number, string> = {
  2: "/images/chapter-02-valuation.jpg",
  3: "/images/chapter-03-thinking-of-ethics.jpg",
  4: "/images/chapter-04-sources-of-authority.jpg",
  5: "/images/chapter-05-senses-of-the-self.jpg",
};

function buildChapters(): Chapter[] {
  return getLessonsByUnit(1).map((lesson) => ({
    index: lesson.number,
    title: lesson.title,
    coverLine: lesson.coverLine,
    meta: `${lesson.learningOutcomes.length} outcomes · ${lesson.keyTerms.length} key terms · ${lesson.quiz.length} quiz items`,
    href: `/lesson?slug=${lesson.slug}`,
  }));
}

function ScalesMark() {
  return (
    <span className="archive-scales" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="20" r="2.2" />
        <path d="M8 20h48" />
        <path d="M32 22.2v30" />
        <path d="M22 52.2h20" />
        <path d="M8 20v7" />
        <path d="M56 20v7" />
        <path d="M2 27h12" />
        <path d="M2 27a6 7.2 0 0 0 12 0" />
        <path d="M50 27h12" />
        <path d="M50 27a6 7.2 0 0 0 12 0" />
      </svg>
    </span>
  );
}

function ScrollCue({ target }: { target: React.RefObject<HTMLElement | null> }) {
  return (
    <button
      type="button"
      className="archive-scroll-cue mt-11"
      onClick={() => target.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
      aria-label="Explore the chapter archive"
    >
      <span className="archive-scroll-ring" aria-hidden="true">
        <svg className="archive-scroll-glyph" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.1"><path d="m2 4 4 4 4-4" /></svg>
      </span>
      <span className="archive-scroll-label">Explore</span>
    </button>
  );
}

function MosaicTile({
  className,
  kicker,
  title,
  description,
  href,
  featured = false,
  imageSrc,
  imagePosition = "center",
  children,
}: {
  className?: string;
  kicker: string;
  title: string;
  description?: string;
  href?: string;
  featured?: boolean;
  imageSrc?: string;
  imagePosition?: string;
  children?: React.ReactNode;
}) {
  const content = (
    <>
      {imageSrc && <Image src={imageSrc} alt="" fill sizes="(min-width: 768px) 58vw, 100vw" className="mosaic-image" style={{ objectPosition: imagePosition }} />}
      <span className="archive-ticks" aria-hidden="true" />
      {featured && <span className="archive-photo-stack" aria-hidden="true" />}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">{kicker}</p>
        <h2 className={cn("mt-3 text-balance font-serif font-semibold leading-[0.94] tracking-[-0.03em] text-foreground", featured ? "max-w-[12ch] text-5xl sm:text-6xl" : "text-3xl sm:text-4xl")}>{title}</h2>
        {description && <p className="mt-4 max-w-[46ch] font-sans text-sm leading-[1.65] text-ink-body">{description}</p>}
        {children}
      </div>
    </>
  );

  const tileClass = cn("mosaic-tile group relative isolate block overflow-hidden", className);
  return href ? <Link href={href} className={tileClass}>{content}</Link> : <div className={tileClass}>{content}</div>;
}

export default function Home() {
  const chapters = buildChapters();
  const { progress, loading, completedCount } = useLessonProgress();
  const journeyRef = useRef<HTMLDivElement>(null);
  const archiveRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: journeyRef, offset: ["start start", "end end"] });
  const wickScale = useTransform(scrollYProgress, [0, 1], [0.04, 1]);
  const complete = progress.filter((item) => item.completed);
  const chapterOne = chapters[0];

  return (
    <div className="flex min-h-dvh flex-col bg-background font-sans text-foreground">
      <AppHeader />
      <SearchDialog />
      <main ref={journeyRef} className="flex-1">
        <header className="archive-hero archive-title-card relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
          <Image src="/images/hero-statues-golden-light-1080.png" alt="" fill priority sizes="100vw" className="hero-bg" />
          <div className="hero-gradient" aria-hidden="true" />
          <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-5 py-20 text-center sm:py-[14vh]">
            <ScalesMark />
            <p className="archive-kicker mt-8 font-serif text-[11px] font-semibold uppercase tracking-[0.46em] text-accent">A Collegiate Study Presents</p>
            <div className="archive-title-rule mt-7" />
            <h1 className="mt-6 font-serif text-[clamp(4.4rem,10vw,7.4rem)] font-semibold leading-[0.86] tracking-[-0.04em] text-foreground">
              <span className="text-primary">E</span>thics
            </h1>
            <div className="archive-title-rule mt-7" />
            <p className="mt-7 max-w-[52ch] font-sans text-[15px] leading-[1.7] text-ink-body sm:text-[17px]">A collegiate study read, story-first — five chapters from the Mendez case to the sources of moral authority.</p>
            <ScrollCue target={archiveRef} />
          </div>
          <p className="absolute bottom-5 left-5 z-10 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">Ethics · Units I & II</p>
          <button type="button" onClick={() => window.dispatchEvent(new Event("opencode:search"))} className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center border border-border text-muted transition-colors hover:border-primary hover:text-primary" aria-label="Search the archive"><SearchIcon className="h-4 w-4" /></button>
        </header>

        <section ref={archiveRef} className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28" aria-labelledby="archive-heading">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-5">
            <div>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">Unit I Archive</p>
              <h2 id="archive-heading" className="mt-3 font-serif text-4xl font-semibold leading-none tracking-[-0.03em] text-foreground sm:text-5xl">Begin with a question.</h2>
            </div>
            <p className="hidden max-w-[28ch] text-right font-sans text-sm leading-relaxed text-muted sm:block">Each study opens like an annotated plate in the archive.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }} className="mosaic-grid">
            {chapterOne && <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mosaic-featured"><MosaicTile featured imageSrc="/images/lady-justice.png" imagePosition="center 24%" kicker="Featured · Chapter 01" title={chapterOne.title} description={chapterOne.coverLine} href={chapterOne.href}><span className="mt-6 inline-flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Open study <ArrowRightIcon className="h-3.5 w-3.5" /></span></MosaicTile></motion.div>}
            {chapters.slice(1, 3).map((chapter) => <motion.div key={chapter.href} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mosaic-medium"><MosaicTile imageSrc={chapterImages[chapter.index]} imagePosition="center 40%" kicker={`Chapter ${String(chapter.index).padStart(2, "0")}`} title={chapter.title} description={chapter.coverLine} href={chapter.href} /></motion.div>)}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mosaic-quote"><MosaicTile imageSrc="/images/sw1.jpg" imagePosition="center 40%" kicker="A question to carry" title="What makes an act truly human?" description="Ethics begins where choice, value, and responsibility meet." /></motion.div>
            {chapters.slice(3, 5).map((chapter) => <motion.div key={chapter.href} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mosaic-small"><MosaicTile imageSrc={chapterImages[chapter.index]} imagePosition="center 40%" kicker={`Chapter ${String(chapter.index).padStart(2, "0")}`} title={chapter.title} href={chapter.href} /></motion.div>)}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mosaic-wide"><MosaicTile imageSrc="/images/sw2.jpg" imagePosition="center 40%" kicker="Compare · Consider · Judge" title="Sources of moral authority" description="Trace the claims of law, religion, and culture — then test where each can guide a moral judgment." href="/sources" /></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mosaic-small"><MosaicTile imageSrc="/images/sw3.jpg" imagePosition="center 40%" kicker="Unit I" title="Harness · Summary · Key Words" href="/unit/1/wrap-up" /></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mosaic-progress"><MosaicTile kicker="Your place in the archive" title={`${completedCount} of ${chapters.length} studies lit`} href="/reflections"><div className="mt-6"><div className="wick-track"><motion.div className="wick-fill" style={{ scaleX: wickScale }} /></div><p className="mt-3 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">{loading ? "Reading progress…" : `${complete.length} completed · reflections on file`}</p></div></MosaicTile></motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
