import "server-only";
import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import type {
  Annotation,
  HighlightColor,
  LessonProgress,
  LessonSlug,
  ReflectionAnswer,
  ReflectionGroup,
} from "@/lib/types";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "ethics.db");

function openDatabase(): Database.Database {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS progress (
      lesson_slug TEXT PRIMARY KEY,
      completed INTEGER NOT NULL DEFAULT 0,
      completed_at INTEGER,
      quiz_best INTEGER,
      updated_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS reflections (
      id TEXT PRIMARY KEY,
      lesson_slug TEXT NOT NULL,
      prompt_id TEXT NOT NULL,
      prompt TEXT NOT NULL,
      prompt_group TEXT NOT NULL,
      answer TEXT NOT NULL,
      updated_at INTEGER NOT NULL,
      UNIQUE (lesson_slug, prompt_id)
    );

    CREATE TABLE IF NOT EXISTS annotations (
      id TEXT PRIMARY KEY,
      lesson_slug TEXT NOT NULL,
      paragraph_id TEXT NOT NULL,
      text TEXT NOT NULL,
      color TEXT NOT NULL,
      start_offset INTEGER NOT NULL,
      end_offset INTEGER NOT NULL,
      created_at INTEGER NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_reflections_lesson ON reflections (lesson_slug);
    CREATE INDEX IF NOT EXISTS idx_annotations_lesson ON annotations (lesson_slug);
  `);
  return db;
}

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!db) db = openDatabase();
  return db;
}

export function getAllProgress(): LessonProgress[] {
  const rows = getDb()
    .prepare("SELECT * FROM progress")
    .all() as Array<{
    lesson_slug: string;
    completed: number;
    completed_at: number | null;
    quiz_best: number | null;
    updated_at: number;
  }>;
  return rows.map((row) => ({
    lessonSlug: row.lesson_slug as LessonSlug,
    completed: row.completed === 1,
    completedAt: row.completed_at,
    quizBest: row.quiz_best,
    updatedAt: row.updated_at,
  }));
}

export function upsertProgress(lessonSlug: LessonSlug, completed: boolean): LessonProgress {
  const now = Date.now();
  const existing = getDb()
    .prepare("SELECT * FROM progress WHERE lesson_slug = ?")
    .get(lessonSlug) as
    | { quiz_best: number | null; completed: number; completed_at: number | null }
    | undefined;

  const completedAt = completed ? (existing?.completed_at ?? now) : null;
  getDb()
    .prepare(
      `INSERT INTO progress (lesson_slug, completed, completed_at, quiz_best, updated_at)
       VALUES (@slug, @completed, @completedAt, @quizBest, @updatedAt)
       ON CONFLICT (lesson_slug) DO UPDATE SET
         completed = excluded.completed,
         completed_at = excluded.completed_at,
         updated_at = excluded.updated_at`,
    )
    .run({
      slug: lessonSlug,
      completed: completed ? 1 : 0,
      completedAt,
      quizBest: existing?.quiz_best ?? null,
      updatedAt: now,
    });

  return {
    lessonSlug,
    completed,
    completedAt,
    quizBest: existing?.quiz_best ?? null,
    updatedAt: now,
  };
}

export function recordQuizBest(lessonSlug: LessonSlug, score: number): LessonProgress {
  const now = Date.now();
  const existing = getDb()
    .prepare("SELECT * FROM progress WHERE lesson_slug = ?")
    .get(lessonSlug) as
    | { quiz_best: number | null; completed: number; completed_at: number | null }
    | undefined;
  const best = Math.max(existing?.quiz_best ?? 0, score);
  getDb()
    .prepare(
      `INSERT INTO progress (lesson_slug, completed, completed_at, quiz_best, updated_at)
       VALUES (@slug, @completed, @completedAt, @quizBest, @updatedAt)
       ON CONFLICT (lesson_slug) DO UPDATE SET
         quiz_best = excluded.quiz_best,
         updated_at = excluded.updated_at`,
    )
    .run({
      slug: lessonSlug,
      completed: existing?.completed ?? 0,
      completedAt: existing?.completed_at ?? null,
      quizBest: best,
      updatedAt: now,
    });
  return {
    lessonSlug,
    completed: (existing?.completed ?? 0) === 1,
    completedAt: existing?.completed_at ?? null,
    quizBest: best,
    updatedAt: now,
  };
}

export function getReflections(lessonSlug?: LessonSlug): ReflectionAnswer[] {
  const rows = (
    lessonSlug
      ? getDb()
          .prepare("SELECT * FROM reflections WHERE lesson_slug = ? ORDER BY updated_at DESC")
          .all(lessonSlug)
      : getDb().prepare("SELECT * FROM reflections ORDER BY updated_at DESC").all()
  ) as Array<{
    id: string;
    lesson_slug: string;
    prompt_id: string;
    prompt: string;
    prompt_group: string;
    answer: string;
    updated_at: number;
  }>;
  return rows.map((row) => ({
    id: row.id,
    lessonSlug: row.lesson_slug as LessonSlug,
    promptId: row.prompt_id,
    prompt: row.prompt,
    group: row.prompt_group as ReflectionGroup,
    answer: row.answer,
    updatedAt: row.updated_at,
  }));
}

export function upsertReflection(input: {
  lessonSlug: LessonSlug;
  promptId: string;
  prompt: string;
  group: ReflectionGroup;
  answer: string;
}): ReflectionAnswer {
  const id = `${input.lessonSlug}:${input.promptId}`;
  const now = Date.now();
  getDb()
    .prepare(
      `INSERT INTO reflections (id, lesson_slug, prompt_id, prompt, prompt_group, answer, updated_at)
       VALUES (@id, @slug, @promptId, @prompt, @group, @answer, @updatedAt)
       ON CONFLICT (lesson_slug, prompt_id) DO UPDATE SET
         answer = excluded.answer,
         updated_at = excluded.updated_at`,
    )
    .run({
      id,
      slug: input.lessonSlug,
      promptId: input.promptId,
      prompt: input.prompt,
      group: input.group,
      answer: input.answer,
      updatedAt: now,
    });
  return {
    id,
    lessonSlug: input.lessonSlug,
    promptId: input.promptId,
    prompt: input.prompt,
    group: input.group,
    answer: input.answer,
    updatedAt: now,
  };
}

export function deleteReflection(id: string): void {
  getDb().prepare("DELETE FROM reflections WHERE id = ?").run(id);
}

export function getAnnotations(lessonSlug: LessonSlug): Annotation[] {
  const rows = getDb()
    .prepare("SELECT * FROM annotations WHERE lesson_slug = ? ORDER BY created_at ASC")
    .all(lessonSlug) as Array<{
    id: string;
    lesson_slug: string;
    paragraph_id: string;
    text: string;
    color: string;
    start_offset: number;
    end_offset: number;
    created_at: number;
  }>;
  return rows.map((row) => ({
    id: row.id,
    lessonSlug: row.lesson_slug as LessonSlug,
    paragraphId: row.paragraph_id,
    text: row.text,
    color: row.color as HighlightColor,
    startOffset: row.start_offset,
    endOffset: row.end_offset,
    createdAt: row.created_at,
  }));
}

export function addAnnotation(input: Omit<Annotation, "id" | "createdAt">): Annotation {
  const id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
  getDb()
    .prepare(
      `INSERT INTO annotations (id, lesson_slug, paragraph_id, text, color, start_offset, end_offset, created_at)
       VALUES (@id, @slug, @paragraphId, @text, @color, @start, @end, @createdAt)`,
    )
    .run({
      id,
      slug: input.lessonSlug,
      paragraphId: input.paragraphId,
      text: input.text,
      color: input.color,
      start: input.startOffset,
      end: input.endOffset,
      createdAt: Date.now(),
    });
  return { ...input, id, createdAt: Date.now() };
}

export function deleteAnnotation(id: string): void {
  getDb().prepare("DELETE FROM annotations WHERE id = ?").run(id);
}
