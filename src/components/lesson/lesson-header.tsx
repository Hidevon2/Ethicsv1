import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, Clock3, Layers3 } from "lucide-react";
import type { Lesson } from "@/lib/types";
import { getLessonsByUnit, getUnit } from "@/lib/content";

const images = ["/images/lady-justice.png", "/images/chapter-02-valuation.jpg", "/images/chapter-03-thinking-of-ethics.jpg", "/images/chapter-04-sources-of-authority.jpg", "/images/chapter-05-senses-of-the-self.jpg"];

export function LessonHeader({ lesson }: { lesson: Lesson }) {
  const number = lesson.unit ?? 1;
  const unit = getUnit(number);
  const count = getLessonsByUnit(number).length;
  const words = lesson.think.flatMap((section) => section.blocks).map((block) => block.text).join(" ").split(/\s+/).length;
  return (
    <header className="lesson-cover">
      <div className="lesson-breadcrumb">
        <Link href={number === 1 ? "/#course-library" : `/unit/${number}#course-library`}><ArrowLeft size={14} />Unit {unit.number}<span className="breadcrumb-unit-title"> · {number === 1 ? "Foundations of ethics" : unit.title}</span></Link>
        <span>Lesson {String(lesson.number).padStart(2, "0")} of {String(count).padStart(2, "0")}</span>
      </div>
      <div className="lesson-cover-layout">
        <div className="lesson-cover-copy">
          <h1>{lesson.title}</h1>
          <p>{lesson.coverLine}</p>
          <div className="lesson-cover-meta"><span><Clock3 size={14} />~{Math.max(1, Math.ceil(words / 200))} min read</span><span><BookOpen size={14} />{lesson.keyTerms.length} key terms</span><span><Layers3 size={14} />{lesson.quiz.length} practice questions</span></div>
          <a href="#quiz" className="lesson-quiz-shortcut">Jump to the practice quiz<ArrowUpRight size={14} /></a>
        </div>
        <div className="lesson-cover-image"><Image src={images[lesson.number - 1]} alt="" fill priority sizes="(min-width: 1024px) 290px, 210px" /><span>Ethics · Unit {unit.number}</span></div>
      </div>
    </header>
  );
}
