import { Check } from "lucide-react";
import type { Lesson } from "@/lib/types";

export function LearningOutcomes({ lesson }: { lesson: Lesson }) {
  return <section id="outcomes" aria-labelledby="outcomes-heading" className="lesson-outcomes">
    <div className="reader-section-heading"><h2 id="outcomes-heading">What you’ll learn</h2><span>{lesson.learningOutcomes.length} learning outcomes</span></div>
    <ol>{lesson.learningOutcomes.map((outcome, index) => <li key={index}><Check size={15} /><span>{outcome}</span></li>)}</ol>
  </section>;
}
