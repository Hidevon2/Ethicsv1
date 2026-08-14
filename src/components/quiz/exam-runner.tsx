"use client";

import { useMemo, useState } from "react";
import type { QuizItem } from "@/lib/types";
import {
  buildAttempt,
  gradeItem,
  isAnswered,
  stableSeed,
  type AnswerValue,
  type RenderedQuizItem,
} from "@/lib/quiz";
import { QuizCard } from "@/components/quiz/quiz-card";
import { QuizReview } from "@/components/quiz/quiz-review";
import { Button } from "@/components/ui/button";

function randomSeed(): number {
  return (Math.random() * 0xffffffff) >>> 0;
}

export function ExamRunner({
  questions,
  passScore,
  onSubmit,
}: {
  questions: QuizItem[];
  passScore: number;
  onSubmit: (score: number) => void;
}) {
  const [attempt, setAttempt] = useState<RenderedQuizItem[]>(() =>
    buildAttempt(questions, stableSeed("unit1-exam")),
  );
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () => attempt.reduce((acc, rendered) => acc + (results[rendered.item.id] ? 1 : 0), 0),
    [attempt, results],
  );

  const allAnswered = attempt.every((rendered) =>
    isAnswered(rendered, answers[rendered.item.id]),
  );

  function handleAnswer(item: RenderedQuizItem["item"], value: AnswerValue) {
    setAnswers((prev) => ({ ...prev, [item.id]: value }));
  }

  function handleSubmit() {
    const graded: Record<string, boolean> = {};
    for (const rendered of attempt) {
      graded[rendered.item.id] = gradeItem(rendered, answers[rendered.item.id]);
    }
    const total = attempt.reduce(
      (acc, rendered) => acc + (graded[rendered.item.id] ? 1 : 0),
      0,
    );
    setResults(graded);
    setSubmitted(true);
    onSubmit(total);
  }

  function retake() {
    setAttempt(buildAttempt(questions, randomSeed()));
    setAnswers({});
    setResults({});
    setSubmitted(false);
  }

  const passed = score >= passScore;

  return (
    <div>
      {!submitted && (
        <p className="mb-6 max-w-[62ch] font-serif text-sm italic leading-relaxed text-muted">
          {questions.length} questions covering all five lessons of Unit I. Nothing is revealed
          until you submit — matching questions only need every pair matched. You need a score of{" "}
          {passScore} or higher to pass.
        </p>
      )}

      {submitted ? (
        <div>
          <div
            className="rise-in overflow-hidden rounded-[var(--radius)] border border-border bg-panel"
            role="status"
            aria-live="polite"
          >
            <div className="border-b border-border bg-primary/10 px-4 py-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                Examination result
              </p>
            </div>
            <div className="px-4 py-5">
              <p className="font-serif text-4xl font-bold text-foreground">
                {score} <span className="text-2xl text-muted">of {attempt.length}</span>
              </p>
              <div className="wick-track my-4" role="presentation">
                <div
                  className="wick-fill"
                  style={{ transform: `scaleX(${attempt.length === 0 ? 0 : score / attempt.length})` }}
                />
              </div>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-foreground">
                {passed
                  ? "Passed — you are ready to continue to Unit II."
                  : `Below the passing score of ${passScore}. You will need to take the examination again.`}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm" onClick={retake}>
                  Take the examination again
                </Button>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Questions reshuffle on each attempt
                </p>
              </div>
            </div>
          </div>
          <QuizReview attempt={attempt} answers={answers} results={results} />
        </div>
      ) : (
        <div className="space-y-6">
          {attempt.map((rendered, index) => (
            <QuizCard
              key={rendered.item.id}
              rendered={rendered}
              index={index}
              value={answers[rendered.item.id]}
              revealed={false}
              correct={undefined}
              exam
              onAnswer={handleAnswer}
              onMatchingReveal={() => {}}
            />
          ))}
        </div>
      )}

      {!submitted && (
        <div className="mt-8 flex justify-center">
          <Button variant="primary" size="lg" onClick={handleSubmit} disabled={!allAnswered}>
            Submit the examination
          </Button>
        </div>
      )}
    </div>
  );
}
