"use client";

import { useState, useCallback, useMemo } from "react";
import { Chapter, Question } from "@/types";
import { shuffleQuestions } from "@/lib/ethics-content";
import { Button } from "@/components/ui/button";

interface QuizModeProps {
  chapter: Chapter;
}

type AnswerState = "unanswered" | "correct" | "incorrect";

export default function QuizMode({ chapter }: QuizModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<{ selected: number; correct: number }[]>([]);
  const [quizKey, setQuizKey] = useState(0);

  const shuffledQuestions = useMemo<Question[]>(
    () => shuffleQuestions(chapter.questions),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [chapter.id, quizKey]
  );

  const totalQuestions = shuffledQuestions.length;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleAnswer = useCallback(
    (index: number) => {
      if (answerState !== "unanswered") return;
      setSelectedAnswer(index);
      const correct = index === shuffledQuestions[currentIndex].correctIndex;
      setAnswerState(correct ? "correct" : "incorrect");
      if (correct) setScore((s) => s + 1);
    },
    [answerState, currentIndex, shuffledQuestions]
  );

  const handleNext = useCallback(() => {
    setAnswers((prev) => [
      ...prev,
      {
        selected: selectedAnswer!,
        correct: shuffledQuestions[currentIndex].correctIndex,
      },
    ]);
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setAnswerState("unanswered");
    } else {
      setShowResults(true);
    }
  }, [currentIndex, totalQuestions, selectedAnswer, shuffledQuestions]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswerState("unanswered");
    setScore(0);
    setShowResults(false);
    setAnswers([]);
    setQuizKey((k) => k + 1);
  }, []);

  if (showResults) {
    const percentage = Math.round((score / totalQuestions) * 100);
    let grade: string;
    let gradeColor: string;
    if (percentage >= 90) {
      grade = "Excellent";
      gradeColor = "text-sage-green";
    } else if (percentage >= 75) {
      grade = "Commendable";
      gradeColor = "text-antique-gold";
    } else if (percentage >= 60) {
      grade = "Satisfactory";
      gradeColor = "text-dusty-rose";
    } else {
      grade = "Needs Review";
      gradeColor = "text-ink-brown/50";
    }

    return (
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px flex-1 bg-paper-border" />
            <span className="font-sans text-[10px] text-antique-gold uppercase tracking-[0.25em]">Results</span>
            <span className="h-px flex-1 bg-paper-border" />
          </div>

          <div className="mb-2">
            <p className="font-sans text-xs text-ink-brown/40">
              {chapter.philosopher} &middot; {chapter.dates}
            </p>
            <h1 className="font-display text-2xl sm:text-3xl text-ink-brown mt-1">
              {chapter.title}
            </h1>
          </div>
          <p className="font-serif text-ink-brown/50 text-sm italic mb-8">Quiz Complete</p>

          <div className="bg-paper-light border border-paper-border rounded-sm p-6 sm:p-8 mb-6">
            <div className="text-center mb-6">
              <div className={`font-display text-5xl mb-2 ${gradeColor}`}>{percentage}%</div>
              <p className={`font-display text-lg ${gradeColor}`}>{grade}</p>
            </div>

            <div className="flex justify-center gap-8 text-sm text-ink-brown/60">
              <div className="text-center">
                <p className="font-display text-2xl text-ink-brown">{score}</p>
                <p className="font-sans text-xs uppercase tracking-wider mt-1">Correct</p>
              </div>
              <div className="w-px bg-paper-border" />
              <div className="text-center">
                <p className="font-display text-2xl text-ink-brown">{totalQuestions - score}</p>
                <p className="font-sans text-xs uppercase tracking-wider mt-1">Incorrect</p>
              </div>
              <div className="w-px bg-paper-border" />
              <div className="text-center">
                <p className="font-display text-2xl text-ink-brown">{totalQuestions}</p>
                <p className="font-sans text-xs uppercase tracking-wider mt-1">Total</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 mb-8">
            {shuffledQuestions.map((q, idx) => {
              const ans = answers[idx];
              const isCorrect = ans?.selected === ans?.correct;
              return (
                <div
                  key={q.id}
                  className={`p-3 rounded-sm border text-sm ${
                    isCorrect
                      ? "bg-sage-green/8 border-sage-green/25"
                      : "bg-dusty-rose/8 border-dusty-rose/25"
                  }`}
                >
                  <p className="font-serif text-ink-brown mb-1 leading-relaxed">
                    <span className="font-sans text-xs text-ink-brown/40 mr-1">
                      {idx + 1}.
                    </span>
                    {q.question}
                  </p>
                  <p className="font-sans text-[11px] text-ink-brown/50">
                    {isCorrect
                      ? "Correct"
                      : `Your answer: ${q.options[ans?.selected ?? 0]}`}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-3">
            <Button variant="outline" onClick={handleRestart}>
              Retry Quiz
            </Button>
            <Button variant="default" onClick={handleRestart}>
              New Questions
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 text-antique-gold">
            <span className="font-display text-sm">&mdash;</span>
            <span className="font-sans text-[9px] text-ink-brown/25 uppercase tracking-[0.3em]">Finis</span>
            <span className="font-display text-sm">&mdash;</span>
          </div>
        </div>
      </div>
    );
  }

  const q = shuffledQuestions[currentIndex];

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-10">
      <div className="max-w-2xl mx-auto">
        {/* Chapter header */}
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px flex-1 bg-paper-border" />
          <span className="font-sans text-[10px] text-antique-gold uppercase tracking-[0.25em]">
            Chapter {chapter.id + 1} &middot; Q{currentIndex + 1}/{totalQuestions}
          </span>
          <span className="h-px flex-1 bg-paper-border" />
        </div>

        <div className="mb-2">
          <p className="font-sans text-xs text-ink-brown/40">
            {chapter.philosopher} &middot; {chapter.dates}
          </p>
          <h1 className="font-display text-2xl sm:text-3xl text-ink-brown mt-1">Knowledge Check</h1>
        </div>
        <p className="font-serif text-ink-brown/50 text-sm italic mb-6">{chapter.title}</p>

        {/* Score bar */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-sans text-xs text-ink-brown/40 uppercase tracking-wider">
            Score: {score}/{answerState !== "unanswered" ? currentIndex + 1 : currentIndex}
          </span>
          <span className="h-px flex-1 bg-paper-border/50" />
        </div>

        {/* Progress dots */}
        <div className="flex gap-1.5 mb-6 flex-wrap" role="progressbar" aria-label="Question progress" aria-valuenow={currentIndex + 1} aria-valuemin={1} aria-valuemax={totalQuestions}>
          {shuffledQuestions.map((_, idx) => {
            const ans = answers[idx];
            let dotColor = "bg-paper-border";
            if (ans) {
              dotColor = ans.selected === ans.correct ? "bg-sage-green" : "bg-dusty-rose";
            } else if (idx === currentIndex) {
              dotColor = "bg-antique-gold";
            }
            return (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${dotColor}`}
                aria-label={`Question ${idx + 1}${ans ? (ans.selected === ans.correct ? " correct" : " incorrect") : idx === currentIndex ? " current" : ""}`}
              />
            );
          })}
        </div>

        {/* Question card */}
        <div className="bg-paper-light border border-paper-border rounded-sm p-6 sm:p-8 mb-6">
          <p className="font-display text-lg text-ink-brown mb-6 leading-relaxed">
            {q.question}
          </p>

          <div className="space-y-2" role="radiogroup" aria-label="Answer options">
            {q.options.map((option, idx) => {
              let optionStyle = "border-paper-border hover:bg-parchment";
              if (answerState !== "unanswered") {
                if (idx === q.correctIndex) {
                  optionStyle = "border-sage-green bg-sage-green/8";
                } else if (idx === selectedAnswer && answerState === "incorrect") {
                  optionStyle = "border-dusty-rose bg-dusty-rose/8";
                } else {
                  optionStyle = "border-paper-border opacity-45";
                }
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={answerState !== "unanswered"}
                  role="radio"
                  aria-checked={selectedAnswer === idx}
                  className={`w-full text-left p-3 rounded-sm border ${optionStyle} transition-colors flex items-center gap-3 font-serif text-sm`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-sm border border-ink-brown/15 flex items-center justify-center text-xs font-sans text-ink-brown/50">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-ink-brown">{option}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {answerState !== "unanswered" && (
          <div
            className={`rounded-sm p-4 mb-6 border ${
              answerState === "correct"
                ? "bg-sage-green/8 border-sage-green/25"
                : "bg-dusty-rose/8 border-dusty-rose/25"
            }`}
          >
            <p className="font-sans text-xs uppercase tracking-wider text-ink-brown mb-1">
              {answerState === "correct" ? "Correct" : "Incorrect"}
            </p>
            <p className="font-serif text-sm text-ink-brown/70 leading-relaxed">
              {q.explanation}
            </p>
          </div>
        )}

        {/* Next button */}
        {answerState !== "unanswered" && (
          <div className="flex justify-center">
            <Button variant="default" size="lg" onClick={handleNext}>
              {currentIndex < totalQuestions - 1 ? "Next Question" : "See Results"}
            </Button>
          </div>
        )}

        <div className="flex items-center justify-center gap-2 mt-8 text-antique-gold">
          <span className="font-display text-sm">&mdash;</span>
          <span className="font-sans text-[9px] text-ink-brown/25 uppercase tracking-[0.3em]">
            Question {currentIndex + 1}
          </span>
          <span className="font-display text-sm">&mdash;</span>
        </div>
      </div>
    </div>
  );
}
