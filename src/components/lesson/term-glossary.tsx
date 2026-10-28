import { BookOpen } from "lucide-react";
import type { Lesson } from "@/lib/types";

export function TermGlossary({ lesson }: { lesson: Lesson }) {
  if (!lesson.keyTerms.length) return null;
  return <section id="glossary" aria-labelledby="glossary-heading" className="reader-section lesson-glossary">
    <header className="reader-section-heading"><h2 id="glossary-heading">A vocabulary for the ideas.</h2><span><BookOpen size={14} />{lesson.keyTerms.length} key terms</span></header>
    <p className="reader-section-description">The concepts to carry with you from this lesson.</p>
    <dl>{lesson.keyTerms.map((term) => <div key={term.slug} id={`term-${term.slug}`} className="glossary-entry"><dt>{term.term}</dt><dd>{term.definition}</dd></div>)}</dl>
  </section>;
}
