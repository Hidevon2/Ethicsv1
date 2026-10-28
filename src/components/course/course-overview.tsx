"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BookOpen, Check, ChevronRight, Feather, Highlighter, Library, Scale } from "lucide-react";
import { AppHeader } from "@/components/layout/app-header";
import { SearchDialog } from "@/components/search/search-dialog";
import { getLessonsByUnit, getUnit, lessons } from "@/lib/content";
import { useLessonProgress } from "@/lib/hooks";
import type { Lesson, UnitNumber } from "@/lib/types";
import { cn } from "@/lib/utils";

const unitNumbers: UnitNumber[] = [1, 2, 3];
const unitImages: Record<UnitNumber, string[]> = {
  1: ["/images/lady-justice.png", "/images/chapter-02-valuation.jpg", "/images/chapter-03-thinking-of-ethics.jpg", "/images/chapter-04-sources-of-authority.jpg", "/images/chapter-05-senses-of-the-self.jpg"],
  2: ["/images/sw1.jpg", "/images/chapter-02-valuation.jpg", "/images/sw2.jpg", "/images/lady-justice.png"],
  3: ["/images/chapter-04-sources-of-authority.jpg", "/images/chapter-05-senses-of-the-self.jpg"],
};
const introductions: Record<UnitNumber, string> = {
  1: "From the choices we make to the values we live by. Explore the ethical dimension of human existence, one lesson at a time.",
  2: "What makes an action good? Explore Bentham, Mill, and the relationship between happiness, consequences, and the common good.",
  3: "What does it mean to do the right thing? Explore moral conviction, duty, and the principles that guide our actions.",
};

function readingTime(lesson: Lesson) {
  const words = lesson.think.flatMap((section) => section.blocks).map((block) => block.text).join(" ").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function CourseOverview({ unitNumber }: { unitNumber: UnitNumber }) {
  const { progress, loading, error, refresh } = useLessonProgress();
  const unit = getUnit(unitNumber);
  const unitLessons = getLessonsByUnit(unitNumber);
  const completed = new Set(progress.filter((item) => item.completed).map((item) => item.lessonSlug));
  const completedCount = unitLessons.filter((lesson) => completed.has(lesson.slug)).length;
  const nextLesson = unitLessons.find((lesson) => !completed.has(lesson.slug)) ?? unitLessons[0];
  const allComplete = completedCount === unitLessons.length;
  const started = completedCount > 0;

  return (
    <div className="course-shell">
      <AppHeader />
      <SearchDialog />
      <main id="main-content">
        <section className="course-hero" aria-labelledby="course-title">
          <div className="course-hero-art"><Image src="/images/hero-statues-golden-light-1080.png" alt="Classical sculptures illuminated by warm golden light" fill priority sizes="(min-width: 900px) 65vw, 100vw" /></div>
          <div className="course-hero-inner">
            <div className="course-hero-copy">
              <h1 id="course-title">The art of<br /><em>thinking ethically.</em></h1>
              <p>A little reflection. A clearer perspective.</p>
              <p className="course-hero-description">Your companion to the Ethics module. Read the stories, question your assumptions, and make the ideas your own.</p>
              <Link href={`/lesson?slug=${nextLesson.slug}`} className="study-button study-button-primary"><BookOpen size={17} />{loading || error ? "Explore a lesson" : allComplete ? "Revisit a lesson" : started ? "Continue learning" : "Start learning"}<ArrowUpRight size={17} /></Link>
              <a className="hero-browse" href="#course-library">Explore the course <ArrowDown size={14} /></a>
            </div>
            <div className="hero-caption"><span className="caption-rule" />Ethics · A Collegiate Study</div>
          </div>
        </section>

        <div className="course-workspace" id="course-library">
          <nav className="course-unit-nav" aria-label="Course units">{unitNumbers.map((number) => {
            const item = getUnit(number);
            return <Link key={number} href={number === 1 ? "/#course-library" : `/unit/${number}#course-library`} className={cn("course-unit-link", number === unitNumber && "is-active")} aria-current={number === unitNumber ? "page" : undefined}><span>Unit {item.number}</span><span>{number === 1 ? "Foundations of ethics" : item.title}</span><span className="unit-lesson-count">{getLessonsByUnit(number).length} lessons</span></Link>;
          })}</nav>

          <div className="library-layout">
            <section className="lesson-library" aria-labelledby="library-title">
              <div className="library-heading"><h2 id="library-title">{unitNumber === 1 ? "Begin with a question." : unitNumber === 2 ? "Consider the consequences." : "Let principle guide you."}</h2><span>{unitLessons.length} lessons</span></div>
              <p className="library-intro">{introductions[unitNumber]}</p>
              <div className="lesson-card-grid">{unitLessons.map((lesson, index) => <Link className="study-card" href={`/lesson?slug=${lesson.slug}`} key={lesson.slug}>
                <div className="study-card-image"><Image src={unitImages[unitNumber][index]} alt="" fill sizes="(min-width: 1100px) 28vw, (min-width: 640px) 45vw, 100vw" /><span className="lesson-tag">Lesson {String(lesson.number).padStart(2, "0")}</span>{completed.has(lesson.slug) && <span className="lesson-complete"><Check size={12} /> Completed</span>}<span className="card-open"><ArrowUpRight size={19} /></span></div>
                <div className="study-card-copy"><h3>{lesson.title}</h3><p>{lesson.coverLine}</p><div className="study-card-meta"><span><BookOpen size={13} />~{readingTime(lesson)} min read</span><span>{lesson.keyTerms.length} key terms</span><span>{lesson.quiz.length} quiz items</span></div></div>
              </Link>)}</div>
              <Link href={`/unit/${unitNumber}/wrap-up`} className="unit-wrap-link"><span className="wrap-symbol"><Library size={22} /></span><span><strong>Bring it all together.</strong><span>Unit {unit.number} summary, key words & review</span></span><ArrowUpRight size={21} /></Link>
            </section>

            <aside className="study-sidebar" aria-label="Your study space">
              <section className="study-progress-panel">
                <div className="sidebar-heading"><h2>Your study journey</h2><span className="status-dot" /></div>
                <div className="progress-summary" aria-live="polite"><strong>{loading || error ? "—" : completedCount}<span> / {unitLessons.length}</span></strong><p>lessons completed in Unit {unit.number}</p></div>
                <div className="wick-track" role="progressbar" aria-label={`Unit ${unit.number} completion`} aria-valuemin={0} aria-valuemax={unitLessons.length} aria-valuenow={loading || error ? undefined : completedCount} aria-valuetext={loading ? "Loading progress" : error ? "Progress unavailable" : undefined}><div className="wick-fill" style={{ transform: `scaleX(${completedCount / unitLessons.length})` }} /></div>
                {error ? <p className="progress-encouragement" role="alert">{error} <button className="text-primary underline underline-offset-4" onClick={() => void refresh()}>Try again</button></p> : <p className="progress-encouragement">{loading ? "Finding your place…" : allComplete ? "Every lesson complete. Take a moment to revisit what you’ve learned." : started ? "Every lesson adds a new perspective. Keep going." : "A good question is a good place to start."}</p>}
                <Link href={`/lesson?slug=${nextLesson.slug}`} className="next-study"><span>{loading ? "Explore" : allComplete ? "Revisit" : started ? "Up next" : "Your first lesson"}</span><strong>{nextLesson.title}</strong><ChevronRight size={17} /></Link>
              </section>
              <section className="study-tools" aria-labelledby="study-tools-heading"><h2 id="study-tools-heading">Make it your own</h2><Link href="/reflections"><Feather size={19} /><span><strong>Your reflections</strong><span>Return to your thoughts & notes</span></span><ArrowUpRight size={16} /></Link><Link href="/sources"><Scale size={19} /><span><strong>Sources of authority</strong><span>Compare law, religion & culture</span></span><ArrowUpRight size={16} /></Link>{unitNumber === 1 && <Link href="/unit/1/exam"><BookOpen size={19} /><span><strong>Test your understanding</strong><span>Take the Unit I practice exam</span></span><ArrowUpRight size={16} /></Link>}</section>
              <div className="reading-tip"><Highlighter size={18} /><p><strong>A note for the curious</strong>Tap a highlighted key term for its definition. Select a passage to leave a highlight of your own.</p></div>
              <p className="course-total">{lessons.length} lessons. Three units.<br />A course worth thinking about.</p>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
