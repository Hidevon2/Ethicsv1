"use client";

import { useRef, useState } from "react";
import type {
  Lesson,
  LessonSlug,
  ReflectionAnswer,
  ReflectionGroup,
  ReflectionQuestion,
} from "@/lib/types";
import { CalloutBlock } from "@/components/lesson/callout-block";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "@/components/ui/icons";

const GROUP_TITLE: Record<ReflectionGroup, string> = {
  experience: "Experience",
  assess: "Assess",
  challenge: "Challenge",
};

const GROUP_COPY: Record<ReflectionGroup, string> = {
  experience: "Connect the lesson to what you already know and feel.",
  assess: "Test your understanding against these questions.",
  challenge: "Take a position — your answer is saved for your review.",
};

function ChallengePrompt({
  prompt,
  lessonSlug,
  saved,
  onSave,
  onRemove,
}: {
  prompt: ReflectionQuestion;
  lessonSlug: LessonSlug;
  saved?: ReflectionAnswer;
  onSave: (input: {
    lessonSlug: LessonSlug;
    promptId: string;
    prompt: string;
    group: ReflectionGroup;
    answer: string;
  }) => void;
  onRemove: (id: string) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [saving, setSaving] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);

  async function handleSave() {
    const value = textareaRef.current?.value ?? "";
    if (value.trim().length === 0) return;
    setSaving(true);
    try {
      await onSave({
        lessonSlug,
        promptId: prompt.id,
        prompt: prompt.text,
        group: "challenge",
        answer: value.trim(),
      });
      setSavedFlash(true);
      window.setTimeout(() => setSavedFlash(false), 1800);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="border-b border-border py-4 last:border-b-0">
      <p className="mb-3 text-pretty font-serif text-base leading-relaxed text-foreground">
        {prompt.text}
      </p>
      <label htmlFor={`answer-${prompt.id}`} className="sr-only">
        Your answer to the challenge question
      </label>
      <textarea
        key={saved?.id ?? "unsaved"}
        ref={textareaRef}
        id={`answer-${prompt.id}`}
        defaultValue={saved?.answer ?? ""}
        rows={4}
        placeholder="I-type ang iyong sagot dito… (Write your answer here)"
        className="w-full resize-y rounded-[var(--radius)] border border-border bg-background px-3 py-2 font-serif text-sm leading-relaxed text-foreground placeholder:text-muted focus:border-primary/60"
      />
      <div className="mt-2 flex items-center gap-3">
        <Button
          variant={saved ? "secondary" : "primary"}
          size="sm"
          onClick={() => void handleSave()}
          disabled={saving}
        >
          <CheckIcon className="h-3.5 w-3.5" />
          {saving ? "Saving…" : savedFlash ? "Saved!" : "Save answer"}
        </Button>
        {saved && (
          <>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
              On file
            </span>
            <button
              type="button"
              onClick={() => onRemove(saved.id)}
              className="flex items-center gap-1 rounded-sm px-2 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted hover:text-primary"
              aria-label="Delete saved answer"
            >
              <XIcon className="h-3 w-3" />
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export function ReflectionSection({
  lesson,
  savedByPromptId,
  onSave,
  onRemove,
}: {
  lesson: Lesson;
  savedByPromptId: Map<string, ReflectionAnswer>;
  onSave: (input: {
    lessonSlug: LessonSlug;
    promptId: string;
    prompt: string;
    group: ReflectionGroup;
    answer: string;
  }) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div className="space-y-8">
      {(["experience", "assess", "challenge"] as ReflectionGroup[]).map((group) => {
        const prompts = lesson.reflections.filter((r) => r.group === group);
        if (prompts.length === 0) return null;
        return (
          <CalloutBlock key={group} variant={group} title={GROUP_TITLE[group]}>
            <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              {GROUP_COPY[group]}
            </p>
            <div>
              {prompts.map((prompt) =>
                group === "challenge" ? (
                  <ChallengePrompt
                    key={prompt.id}
                    prompt={prompt}
                    lessonSlug={lesson.slug}
                    saved={savedByPromptId.get(prompt.id)}
                    onSave={onSave}
                    onRemove={onRemove}
                  />
                ) : (
                  <div
                    key={prompt.id}
                    className="flex gap-3 border-b border-border py-3 last:border-b-0"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border border-border bg-primary/10 font-mono text-xs font-semibold text-primary">
                      ?
                    </span>
                    <p className="text-pretty font-serif text-base leading-relaxed text-foreground">
                      {prompt.text}
                    </p>
                  </div>
                ),
              )}
            </div>
          </CalloutBlock>
        );
      })}
    </div>
  );
}
