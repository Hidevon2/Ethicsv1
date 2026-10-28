"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, CheckCheck, Layers3, ListChecks, X } from "lucide-react";
import type { Lesson } from "@/lib/types";
import { QuizRunner } from "@/components/quiz/quiz-runner";
import { Button } from "@/components/ui/button";

export function QuizDialog({ lesson, best, onSubmitScore }: { lesson: Lesson; best: number | null; onSubmitScore: (score: number) => Promise<void> }) {
  const [open, setOpen] = useState(false);
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <section id="quiz" aria-labelledby="quiz-heading" className="reader-section practice-invitation">
      <ListChecks size={29} strokeWidth={1.4} />
      <h2 id="quiz-heading">Put your understanding<br />to work.</h2>
      <p>Connect the ideas and see what stays with you. Each answer comes with an explanation, so every question is another way to learn.</p>
      <div className="practice-meta"><span><Layers3 size={14} />{lesson.quiz.length} questions</span><span><CheckCheck size={15} />Immediate feedback</span>{best !== null && <span>Best: {best}/{lesson.quiz.length}</span>}</div>
      <Dialog.Trigger asChild><Button size="lg">Start practice quiz<ArrowUpRight size={16} /></Button></Dialog.Trigger>
      <span className="practice-footnote">Go at your own pace. Retake it whenever you like.</span>
    </section>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80" />
      <Dialog.Content className="lesson-quiz-dialog" aria-describedby="quiz-dialog-description">
        <header className="lesson-quiz-dialog-header"><div><Dialog.Title>Practice quiz</Dialog.Title><Dialog.Description id="quiz-dialog-description">{lesson.title} · {lesson.quiz.length} questions</Dialog.Description></div><Dialog.Close className="quiz-close" aria-label="Close quiz"><X size={20} /></Dialog.Close></header>
        <div className="lesson-quiz-dialog-body">{open && <QuizRunner lesson={lesson} best={best} onSubmitScore={onSubmitScore} embedded />}</div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
