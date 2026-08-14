"use client";

import type {
  QuizClassification,
  QuizMultipleChoice,
  QuizTrueFalse,
} from "@/lib/types";
import { kindLabel, type AnswerValue, type RenderedQuizItem } from "@/lib/quiz";
import { MatchingQuestion, type MatchingAnswer } from "@/components/quiz/matching-question";
import { cn } from "@/lib/utils";

export interface QuizCardProps {
  rendered: RenderedQuizItem;
  index: number;
  value: AnswerValue;
  revealed: boolean;
  correct: boolean | undefined;
  exam?: boolean;
  onAnswer: (item: RenderedQuizItem["item"], value: AnswerValue) => void;
  onMatchingReveal: (correct: boolean) => void;
}

function RadioOptions({
  options,
  selected,
  correctIndex,
  disabled,
  revealed,
  verdict,
  name,
  onSelect,
}: {
  options: string[];
  selected: number | undefined;
  correctIndex: number | undefined;
  disabled: boolean;
  revealed: boolean;
  verdict: boolean | undefined;
  name: string;
  onSelect: (index: number) => void;
}) {
  return (
    <div role="radiogroup" aria-labelledby={`${name}-prompt`} className="space-y-2">
      {options.map((option, index) => {
        const checked = selected === index;
        const isCorrectOption = revealed && correctIndex === index;
        const isWrongPick = revealed && checked && correctIndex !== index;
        return (
          <label
            key={index}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-[var(--radius)] border bg-background px-3 py-2.5 transition-colors",
              !revealed && checked && "border-primary bg-primary/10",
              !revealed && !checked && "border-border hover:bg-panel-muted",
              revealed && isCorrectOption && "border-primary bg-primary/10",
              revealed && isWrongPick && "border-border/50 bg-background",
              revealed && !isCorrectOption && !isWrongPick && "border-border/60",
              disabled ? "cursor-default" : "",
            )}
          >
            <input
              type="radio"
              name={name}
              value={index}
              checked={checked}
              disabled={disabled}
              onChange={() => onSelect(index)}
              className="sr-only"
            />
            <span
              aria-hidden="true"
              className={cn(
                "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors",
                isCorrectOption || (!revealed && checked)
                  ? "border-primary bg-primary"
                  : "border-border bg-background",
              )}
            >
              {(isCorrectOption || (!revealed && checked)) && (
                <span className="h-1.5 w-1.5 rounded-full bg-primary-contrast" />
              )}
            </span>
            <span
              className={cn(
                "font-serif text-[15px] leading-relaxed",
                isWrongPick ? "text-muted" : "text-foreground",
              )}
            >
              {option}
            </span>
          </label>
        );
      })}
    </div>
  );
}

function MultipleChoiceCard({ item, options, value, revealed, onAnswer }: {
  item: QuizMultipleChoice;
  options: string[];
  value: number | undefined;
  revealed: boolean;
  onAnswer: (index: number) => void;
}) {
  return (
    <RadioOptions
      options={options}
      selected={value}
      correctIndex={item.correctIndex}
      disabled={revealed}
      revealed={revealed}
      verdict={undefined}
      name={`quiz-${item.id}`}
      onSelect={onAnswer}
    />
  );
}

function TrueFalseCard({ item, value, revealed, onAnswer }: {
  item: QuizTrueFalse;
  value: boolean | undefined;
  revealed: boolean;
  onAnswer: (value: boolean) => void;
}) {
  return (
    <RadioOptions
      options={["True", "False"]}
      selected={value === undefined ? undefined : value ? 0 : 1}
      correctIndex={item.correct ? 0 : 1}
      disabled={revealed}
      revealed={revealed}
      verdict={undefined}
      name={`quiz-${item.id}`}
      onSelect={(index) => onAnswer(index === 0)}
    />
  );
}

function ClassificationCard({ item, options, value, revealed, onAnswer }: {
  item: QuizClassification;
  options: string[];
  value: number | undefined;
  revealed: boolean;
  onAnswer: (index: number) => void;
}) {
  return (
    <div>
      <div className="mb-4 rounded-[var(--radius)] border border-border bg-panel-muted px-4 py-3">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
          {item.categoryLabel} — classify the statement
        </p>
        <p className="mt-1 text-pretty font-serif text-[17px] italic leading-relaxed text-foreground">
          &ldquo;{item.prompt}&rdquo;
        </p>
      </div>
      <RadioOptions
        options={options}
        selected={value}
        correctIndex={item.correctIndex}
        disabled={revealed}
        revealed={revealed}
        verdict={undefined}
        name={`quiz-${item.id}`}
        onSelect={onAnswer}
      />
    </div>
  );
}

export function QuizCard({
  rendered,
  index,
  value,
  revealed,
  correct,
  exam = false,
  onAnswer,
  onMatchingReveal,
}: QuizCardProps) {
  const item = rendered.item;
  const verdict = revealed
    ? correct === true
      ? "Correct"
      : correct === false
        ? "Not quite"
        : null
    : null;

  return (
    <article
      className="overflow-hidden rounded-[var(--radius)] border border-border bg-panel"
      aria-labelledby={`quiz-${item.id}-heading`}
    >
      <header className="flex items-center gap-2.5 border-b border-border bg-panel-muted px-4 py-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-border bg-primary/10 font-mono text-xs font-semibold text-primary">
          {index + 1}
        </span>
        <h3 id={`quiz-${item.id}-heading`} className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
          {kindLabel(item.kind)}
        </h3>
      </header>

      <div className="px-4 py-4 sm:px-5">
        {item.kind !== "classification" && (
          <p id={`quiz-${item.id}-prompt`} className="mb-4 text-pretty font-serif text-[17px] leading-relaxed text-foreground">
            {item.prompt}
          </p>
        )}

        {item.kind === "multiple-choice" && (
          <MultipleChoiceCard
            item={item}
            options={rendered.options ?? item.options}
            value={typeof value === "number" ? value : undefined}
            revealed={revealed}
            onAnswer={(answer) => onAnswer(item, answer)}
          />
        )}
        {item.kind === "true-false" && (
          <TrueFalseCard
            item={item}
            value={typeof value === "boolean" ? value : undefined}
            revealed={revealed}
            onAnswer={(answer) => onAnswer(item, answer)}
          />
        )}
        {item.kind === "classification" && (
          <ClassificationCard
            item={item}
            options={rendered.options ?? item.categories}
            value={typeof value === "number" ? value : undefined}
            revealed={revealed}
            onAnswer={(answer) => onAnswer(item, answer)}
          />
        )}
        {item.kind === "matching" && (
          <MatchingQuestion
            item={item}
            rightOptions={rendered.rightOptions ?? []}
            value={typeof value === "object" && value !== null ? (value as MatchingAnswer) : undefined}
            revealed={revealed}
            hideCheck={exam}
            onAnswer={(answer) => onAnswer(item, answer)}
            onReveal={onMatchingReveal}
          />
        )}

        <div aria-live="polite">
          {verdict && (
            <div className="rise-in mt-4 rounded-[var(--radius)] border px-3 py-2.5"
              style={{
                borderColor: verdict === "Correct" ? "rgba(217,143,63,0.5)" : "var(--border)",
              }}
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em]">
                {verdict === "Correct" ? (
                  <span className="flex items-center gap-2 text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    Correct
                  </span>
                ) : (
                  <span className="flex items-center gap-2 text-muted">
                    Not quite
                    <span className="font-normal normal-case tracking-normal text-muted/70">
                      — try again
                    </span>
                  </span>
                )}
              </p>
              <p className="mt-1 text-pretty font-serif text-sm leading-relaxed text-ink-body">
                {item.explanation}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}