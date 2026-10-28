"use client";

import { useRef, useState } from "react";
import { Check, Save, Trash2 } from "lucide-react";
import type { Lesson, LessonSlug, ReflectionAnswer, ReflectionGroup, ReflectionQuestion } from "@/lib/types";
import { CalloutBlock } from "@/components/lesson/callout-block";
import { Button } from "@/components/ui/button";

const groupTitles: Record<ReflectionGroup, string> = { experience: "Experience", assess: "Assess", challenge: "Challenge" };
const groupCopy: Record<ReflectionGroup, string> = {
  experience: "Connect the ideas to your own experience.",
  assess: "Look a little closer. What do you think, and why?",
  challenge: "Take a position. Save your answer to return to it later.",
};

type SaveInput = { lessonSlug: LessonSlug; promptId: string; prompt: string; group: ReflectionGroup; answer: string };

function ChallengePrompt({ prompt, lessonSlug, saved, onSave, onRemove }: { prompt: ReflectionQuestion; lessonSlug: LessonSlug; saved?: ReflectionAnswer; onSave: (input: SaveInput) => Promise<void>; onRemove: (id: string) => Promise<void> }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [pending, setPending] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);
  const [error, setError] = useState("");

  async function save() {
    const answer = textareaRef.current?.value.trim() ?? "";
    if (!answer) { setError("Write a few thoughts before saving your answer."); textareaRef.current?.focus(); return; }
    setPending(true);
    setError("");
    try {
      await onSave({ lessonSlug, promptId: prompt.id, prompt: prompt.text, group: "challenge", answer });
      setSavedFlash(true);
    } catch { setError("Your answer couldn’t be saved. Your draft is still here; please try again."); }
    finally { setPending(false); }
  }

  async function remove() {
    if (!saved) return;
    setPending(true);
    setError("");
    try { await onRemove(saved.id); setSavedFlash(false); }
    catch { setError("Your saved answer couldn’t be removed. Please try again."); }
    finally { setPending(false); }
  }

  return <div id={`reflection-${prompt.id}`} className="reflection-prompt">
    <label htmlFor={`answer-${prompt.id}`} className="reflection-question">{prompt.text}</label>
    <textarea key={saved?.id ?? "unsaved"} ref={textareaRef} id={`answer-${prompt.id}`} defaultValue={saved?.answer ?? ""} rows={5} placeholder="I-type ang iyong sagot dito… (Write your answer here)" onChange={() => { setSavedFlash(false); setError(""); }} aria-invalid={!!error} aria-describedby={error ? `answer-error-${prompt.id}` : undefined} />
    <div className="reflection-actions"><Button size="sm" onClick={() => void save()} disabled={pending}><Save size={14} />{pending ? "Saving…" : savedFlash ? "Saved" : saved ? "Update answer" : "Save reflection"}</Button>{saved && <><span className="reflection-saved"><Check size={13} />Saved to reflections</span><button type="button" onClick={() => void remove()} disabled={pending} className="reflection-delete" aria-label="Delete saved answer"><Trash2 size={14} /><span>Delete</span></button></>}</div>
    {error && <p id={`answer-error-${prompt.id}`} className="reflection-error" role="alert">{error}</p>}
  </div>;
}

export function ReflectionSection({ lesson, savedByPromptId, onSave, onRemove }: { lesson: Lesson; savedByPromptId: Map<string, ReflectionAnswer>; onSave: (input: SaveInput) => Promise<void>; onRemove: (id: string) => Promise<void> }) {
  return <div className="reflection-groups">{(["experience", "assess", "challenge"] as ReflectionGroup[]).map((group) => {
    const prompts = lesson.reflections.filter((item) => item.group === group);
    if (!prompts.length) return null;
    return <CalloutBlock key={group} variant={group} title={groupTitles[group]}><p className="reflection-group-description">{groupCopy[group]}</p>{prompts.map((prompt, index) => group === "challenge" ? <ChallengePrompt key={prompt.id} prompt={prompt} lessonSlug={lesson.slug} saved={savedByPromptId.get(prompt.id)} onSave={onSave} onRemove={onRemove} /> : <div key={prompt.id} id={`reflection-${prompt.id}`} className="reflection-discussion"><span>{String(index + 1).padStart(2, "0")}</span><p>{prompt.text}</p></div>)}</CalloutBlock>;
  })}</div>;
}
