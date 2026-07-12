"use client";

import { useState, useCallback } from "react";
import { activityContent } from "@/lib/ethics-content";
import { Button } from "@/components/ui/button";

type AnswerState = "unanswered" | "correct" | "incorrect";

export default function ActivityContent() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResults, setShowResults] = useState(false);

  const totalQ = activityContent.questions.length;

  const handleAnswer = useCallback(
    (idx: number) => {
      if (answerState !== "unanswered") return;
      setSelected(idx);
      const correct = idx === activityContent.questions[currentQ].correctIndex;
      setAnswerState(correct ? "correct" : "incorrect");
    },
    [answerState, currentQ]
  );

  const handleNext = useCallback(() => {
    const correct = selected === activityContent.questions[currentQ].correctIndex;
    setAnswers((prev) => [...prev, correct]);
    if (currentQ < totalQ - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswerState("unanswered");
    } else {
      setShowResults(true);
    }
  }, [currentQ, totalQ, selected]);

  const reset = useCallback(() => {
    setQuizStarted(false);
    setCurrentQ(0);
    setSelected(null);
    setAnswerState("unanswered");
    setAnswers([]);
    setShowResults(false);
  }, []);

  const score = answers.filter(Boolean).length;

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px flex-1 bg-paper-border" />
          <span className="font-sans text-[10px] text-antique-gold uppercase tracking-[0.25em]">
            Activity
          </span>
          <span className="h-px flex-1 bg-paper-border" />
        </div>

        <h1 className="font-display text-2xl sm:text-3xl text-ink-brown mt-1 leading-tight mb-6">
          {activityContent.title}
        </h1>

        {!quizStarted && !showResults ? (
          <>
            {activityContent.topics.map((topic, i) => (
              <div key={i} className="mb-8">
                <h2 className="font-display text-lg text-ink-brown mb-3 leading-tight">
                  {topic.heading}
                </h2>
                <div className="space-y-4">
                  {topic.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="font-serif text-sm text-ink-brown/80 leading-[1.85]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-center gap-2 my-8">
              <span className="h-px flex-1 bg-paper-border" />
              <span className="font-sans text-[9px] text-antique-gold uppercase tracking-[0.3em]">
                Questions
              </span>
              <span className="h-px flex-1 bg-paper-border" />
            </div>

            <div className="flex justify-center">
              <Button
                variant="default"
                onClick={() => setQuizStarted(true)}
                className="gap-2"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Answer Questions
              </Button>
            </div>
          </>
        ) : showResults ? (
          <>
            <div className="text-center mb-6">
              <p className="font-display text-3xl text-ink-brown">{score}/{totalQ}</p>
              <p className="font-serif text-sm text-ink-brown/50 italic mt-1">
                {score === totalQ
                  ? "Perfect — you understand all three types of value judgment."
                  : score >= 7
                    ? "Strong — you grasped the key distinctions."
                    : "Consider reviewing the topics above."}
              </p>
            </div>

            <div className="space-y-2 mb-6">
              {activityContent.questions.map((q, idx) => {
                const correct = answers[idx];
                return (
                  <div
                    key={q.id}
                    className={`p-3 rounded-sm border text-sm ${
                      correct
                        ? "bg-sage-green/8 border-sage-green/25"
                        : "bg-dusty-rose/8 border-dusty-rose/25"
                    }`}
                  >
                    <p className="font-serif text-ink-brown mb-1 leading-relaxed">
                      <span className="font-sans text-xs text-ink-brown/40 mr-1">{idx + 1}.</span>
                      {q.question}
                    </p>
                    <p className="font-sans text-[11px] text-ink-brown/50">
                      {correct ? "Correct" : "Review the topics above"}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center gap-3">
              <Button variant="outline" onClick={reset}>Retry</Button>
            </div>
          </>
        ) : (
          <>
            <p className="font-sans text-[11px] text-ink-brown/40 uppercase tracking-wider mb-1">
              Question {currentQ + 1} of {totalQ}
            </p>
            <p className="font-display text-base text-ink-brown mb-5 leading-relaxed">
              {activityContent.questions[currentQ].question}
            </p>

            <div className="space-y-2 mb-5">
              {activityContent.questions[currentQ].options.map((opt: string, idx: number) => {
                let style = "border-paper-border hover:bg-parchment";
                const correctIdx = activityContent.questions[currentQ].correctIndex;
                if (answerState !== "unanswered") {
                  if (idx === correctIdx) {
                    style = "border-sage-green bg-sage-green/8";
                  } else if (idx === selected && answerState === "incorrect") {
                    style = "border-dusty-rose bg-dusty-rose/8";
                  } else {
                    style = "border-paper-border opacity-45";
                  }
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={answerState !== "unanswered"}
                    className={`w-full text-left p-2.5 rounded-sm border ${style} transition-colors flex items-center gap-2.5 font-serif text-sm cursor-pointer`}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-sm border border-ink-brown/15 flex items-center justify-center text-[10px] font-sans text-ink-brown/50">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-ink-brown/80">{opt}</span>
                  </button>
                );
              })}
            </div>

            {answerState !== "unanswered" && (
              <>
                <div className={`rounded-sm p-3 mb-4 border ${
                  answerState === "correct"
                    ? "bg-sage-green/8 border-sage-green/25"
                    : "bg-dusty-rose/8 border-dusty-rose/25"
                }`}>
                  <p className="font-sans text-xs uppercase tracking-wider text-ink-brown mb-1">
                    {answerState === "correct" ? "Correct" : "Incorrect"}
                  </p>
                  <p className="font-serif text-sm text-ink-brown/70 leading-relaxed">
                    {activityContent.questions[currentQ].explanation}
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button variant="default" onClick={handleNext}>
                    {currentQ < totalQ - 1 ? "Next Question" : "See Results"}
                  </Button>
                </div>
              </>
            )}
          </>
        )}

        <div className="flex items-center justify-center gap-2 mt-10 text-antique-gold">
          <span className="font-display text-sm">&mdash;</span>
          <span className="font-sans text-[9px] text-ink-brown/25 uppercase tracking-[0.3em]">
            Finis
          </span>
          <span className="font-display text-sm">&mdash;</span>
        </div>
      </div>
    </div>
  );
}
