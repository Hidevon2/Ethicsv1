"use client";

import { useMemo, useState } from "react";
import type { Lesson } from "@/lib/types";
import {
  buildAttempt,
  gradeItem,
  isAnswered,
  stableSeed,
  type AnswerValue,
  type RenderedQuizItem,
} from "@/lib/quiz";
import { QuizCard } from "@/components/quiz/quiz-card";
import { QuizResult } from "@/components/quiz/quiz-result";
import { QuizReview } from "@/components/quiz/quiz-review";
import { Button } from "@/components/ui/button";

function randomSeed(): number {
  return (Math.random() * 0xffffffff) >>> 0;
}

export function QuizRunner({
  lesson,
  best,
  onSubmitScore,
  embedded = false,
}: {
  lesson: Lesson;
  best: number | null;
  onSubmitScore: (score: number) => void | Promise<void>;
  embedded?: boolean;
}) {
  const [attempt, setAttempt] = useState<RenderedQuizItem[]>(() =>
    buildAttempt(lesson.quiz, stableSeed(lesson.slug)),
  );
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [phase, setPhase] = useState<"quiz" | "review">("quiz");
  const [scope, setScope] = useState<"full" | "missed">("full");
  const [saveError, setSaveError] = useState(false);
  const [saving, setSaving] = useState(false);

  const total = attempt.length;
  const fullTotal = lesson.quiz.length;

  const score = useMemo(
    () => attempt.reduce((acc, rendered) => acc + (results[rendered.item.id] ? 1 : 0), 0),
    [attempt, results],
  );

  const missedCount = useMemo(
    () => attempt.filter((rendered) => results[rendered.item.id] !== true).length,
    [attempt, results],
  );

  const answered = (id: string): boolean => {
    const rendered = attempt.find((entry) => entry.item.id === id);
    return rendered !== undefined && isAnswered(rendered, answers[id]);
  };

  const answeredCount = attempt.filter((rendered) => answered(rendered.item.id) && revealed[rendered.item.id]).length;
  const allAnswered = answeredCount === total;

  function startAttempt(nextSeed: number, nextScope: "full" | "missed") {
    const items =
      nextScope === "missed"
        ? lesson.quiz.filter((item) => results[item.id] === false)
        : lesson.quiz;
    setScope(nextScope);
    setAttempt(buildAttempt(items, nextSeed));
    setAnswers({});
    setRevealed({});
    setResults({});
    setPhase("quiz");
    setSaveError(false);
  }

  function handleAnswer(item: RenderedQuizItem["item"], value: AnswerValue) {
    setAnswers((prev) => ({ ...prev, [item.id]: value }));
    if (item.kind === "matching") return;
    const rendered = attempt.find((entry) => entry.item.id === item.id);
    if (!rendered) return;
    const correct = gradeItem(rendered, value);
    setRevealed((prev) => ({ ...prev, [item.id]: true }));
    setResults((prev) => ({ ...prev, [item.id]: correct }));
  }

  function handleMatchingReveal(id: string, correct: boolean) {
    setRevealed((prev) => ({ ...prev, [id]: true }));
    setResults((prev) => ({ ...prev, [id]: correct }));
  }

  async function finish() {
    setPhase("review");
    if (scope === "full") {
      setSaving(true);
      setSaveError(false);
      try { await onSubmitScore(score); }
      catch { setSaveError(true); }
      finally { setSaving(false); }
    }
  }

  function retakeFull() {
    startAttempt(randomSeed(), "full");
  }

  function retryMissed() {
    if (missedCount === 0) return;
    startAttempt(randomSeed(), "missed");
  }

  const quizBody = (
    <>
      {phase === "quiz" && <div className="quiz-attempt-progress"><div><strong>{scope === "missed" ? "Revisit the missed questions" : "A little practice, a clearer perspective."}</strong><span>{answeredCount} of {total} answered</span></div><div className="wick-track" role="progressbar" aria-label="Quiz questions answered" aria-valuemin={0} aria-valuemax={total} aria-valuenow={answeredCount}><div className="wick-fill" style={{ transform: `scaleX(${total ? answeredCount / total : 0})` }} /></div><p>Select an answer to see the explanation. For matching questions, choose your pairs and check them.</p></div>}
      {phase === "review" && (
        <div className="mb-6">
          {saving && <p className="mb-4 font-sans text-sm text-muted" role="status">Saving your score…</p>}
          {saveError && <p className="mb-4 font-sans text-sm text-oxblood-soft" role="alert">Your result is shown below, but your score couldn’t be saved. <button className="underline underline-offset-4" onClick={() => void finish()}>Try saving again</button></p>}
          <QuizResult
            score={score}
            total={total}
            best={best}
            fullTotal={fullTotal}
            missed={missedCount}
            disabled={saving}
            onRetry={retakeFull}
            onRetryMissed={missedCount > 0 ? retryMissed : undefined}
          />
          <QuizReview attempt={attempt} answers={answers} results={results} />
        </div>
      )}

      {phase === "quiz" && (
        <div className="space-y-6">
          {attempt.map((rendered, index) => (
            <QuizCard
              key={rendered.item.id}
              rendered={rendered}
              index={index}
              value={answers[rendered.item.id]}
              revealed={revealed[rendered.item.id] ?? false}
              correct={results[rendered.item.id]}
              onAnswer={handleAnswer}
              onMatchingReveal={(correct) => handleMatchingReveal(rendered.item.id, correct)}
            />
          ))}
        </div>
      )}

      {phase === "quiz" && (
        <div className="mt-8 flex justify-center">
          <Button variant="primary" size="lg" onClick={() => void finish()} disabled={!allAnswered}>
            Finish and see your score
          </Button>
        </div>
      )}
    </>
  );

  if (embedded) return quizBody;

  return (
    <section id="quiz" aria-labelledby="quiz-heading" className="mt-14">
      <header className="mb-6">
        <h2
          id="quiz-heading"
          className="text-balance font-serif text-2xl font-bold leading-snug text-foreground"
        >
          Check yourself
        </h2>
        <p className="mt-1 max-w-[68ch] font-serif text-sm italic leading-relaxed text-muted">
          {scope === "missed"
            ? `${total} missed question${total === 1 ? "" : "s"} to revisit — shuffled again.`
            : `${fullTotal} questions, shuffled fresh each attempt. Answer to see the explanation immediately; matching questions are checked when you finish them.`}
        </p>
      </header>
      {quizBody}
    </section>
  );
}
