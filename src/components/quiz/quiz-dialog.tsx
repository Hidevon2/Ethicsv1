"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import type { Lesson } from "@/lib/types";
import { QuizRunner } from "@/components/quiz/quiz-runner";
import { Button } from "@/components/ui/button";
import { ListCheckIcon, XIcon } from "@/components/ui/icons";

export function QuizDialog({
  lesson,
  best,
  onSubmitScore,
}: {
  lesson: Lesson;
  best: number | null;
  onSubmitScore: (score: number) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <section id="quiz" aria-labelledby="quiz-heading" className="mt-14">
      <header className="mb-6 text-center">
        <h2
          id="quiz-heading"
          className="text-balance font-serif text-2xl font-bold leading-snug text-foreground"
        >
          Let&rsquo;s Quiz
        </h2>
        <p className="mt-1 font-serif text-sm italic leading-relaxed text-muted">
          {lesson.quiz.length} questions, shuffled fresh each attempt. Answer to see the
          explanation immediately; matching questions are checked when you finish them. Your best
          score is saved.
        </p>
      </header>

      <div className="flex justify-center">
        <Button variant="primary" size="lg" onClick={() => setOpen(true)}>
          <ListCheckIcon className="h-4 w-4" />
          Let&rsquo;s Quiz
        </Button>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/40" />
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="flex min-h-full items-start justify-center p-4 pb-16 pt-[8vh]">
              <div className="w-full max-w-2xl rounded-[var(--radius)] border-2 border-foreground bg-panel shadow-[4px_4px_0_var(--border)]">
                <div className="flex items-center justify-between gap-2 border-b-2 border-foreground px-4 py-3">
                  <Dialog.Title className="min-w-0 font-serif text-lg font-bold text-foreground">
                    Let&rsquo;s Quiz — {lesson.title}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close quiz"
                      className="shrink-0 rounded-sm p-1.5 text-muted transition-colors hover:text-foreground"
                    >
                      <XIcon className="h-4 w-4" />
                    </button>
                  </Dialog.Close>
                </div>
                <div className="p-4 sm:p-6">
                  {open && (
                    <QuizRunner
                      lesson={lesson}
                      best={best}
                      onSubmitScore={onSubmitScore}
                      embedded
                    />
                  )}
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
