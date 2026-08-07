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
  onSubmitScore: (score: number) => void;
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

  const allAnswered = attempt.every((rendered) => answered(rendered.item.id));

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

  function finish() {
    setPhase("review");
    if (scope === "full") onSubmitScore(score);
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
      {phase === "review" && (
        <div className="mb-6">
          <QuizResult
            score={score}
            total={total}
            best={best}
            fullTotal={fullTotal}
            missed={missedCount}
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
          <Button variant="primary" size="lg" onClick={finish} disabled={!allAnswered}>
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
