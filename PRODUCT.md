# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript codebase. Persistence added via SQLite (better-sqlite3) behind server API routes, replacing localStorage for anything the user would care about losing.

## Users

A college/university student in the Philippines studying the Ethics course (Ethics/GE module), reviewing Unit I "The Ethical Dimension of Human Existence" lesson by lesson before an assessment or exam. The user reads the module content, checks key terms, answers quizzes for self-testing, and responds to reflection prompts.

## Product Purpose

A lesson-by-lesson reviewer for Unit I of the Ethics module (Lessons 1–4). The user reads each lesson's narrative, learns precise terminology, self-tests with quizzes, tracks their progress through Unit I, and keeps the reflection answers they write. Success means the student understands the module's concepts and performs well on the assessment.

## Positioning

Faithful to the source module (the book's own cases, examples, and terms) rather than generic ethics content — a study companion that mirrors the module's structure (learning outcomes, THINK narrative, key terms, EXPERIENCE/ASSESS/CHALLENGE reflection, and discrimination quizzes) in an interactive long-form reader.

## Operating Context

The student reviews on their own laptop or phone, usually before an exam, reading one lesson at a time, testing themselves, and writing short reflection answers to module questions. Long-form reading is the primary surface; quizzes and reflection prompts are checkpoints within each lesson. Progress (lesson completion) and reflection answers persist across sessions and should not be lost when the browser cache is cleared.

## Capabilities and Constraints

- Content covers exactly Unit I, Lessons 1–4: (1) Brotherhood or Violence? (the Cris Anthony Mendez hazing case), (2) Valuation, (3) Thinking of Ethics, (4) Sources of Authority.
- Each lesson: title, numbered learning outcomes, THINK narrative, key terms with definitions, reflection questions grouped as EXPERIENCE / ASSESS / CHALLENGE, and a per-lesson quiz.
- Quizzes include multiple choice, true/false, term-matching, classification drills (ethical/aesthetic/technical/etiquette valuation; moral issue/decision/judgment/dilemma), with immediate feedback and short explanations citing the lesson concept.
- Comparison view for Sources of Authority (Law / Religion / Culture) with strengths and limitations; dilemma reflection prompts with saved, reviewable answers; global search across lesson text and key terms.
- Persistence: lesson completion, overall Unit I progress, saved reflections, and text highlights/annotations stored in SQLite via server API routes (no localStorage as primary store).
- Constraints: content must be faithful to the source module — do not invent facts, cases, or examples not in the module; keep the book's own examples (cup of rice at twelve pesos, Manila–Naga bus ticket, two-step travel in basketball, mixing dry ingredients first, Deuteronomy 11, Euthyphro, the Crusades, Confucian filial piety, etc.).
- Existing working features to preserve: lesson navigation, text selection highlighting/annotations, quiz mode, and a view of saved notes.

## Brand Commitments

Name in use: the app is a study reviewer for the Ethics course at the university. No logo or identity assets exist. The current visual style (parchment "old book" look) is being replaced by the user's new direction.

## Evidence on Hand

The user's detailed brief (the authoritative source for this unit's content, examples, and structure). No existing database, designs, or asset files. No images, screenshots, or marketing claims to preserve.

## Product Principles

- Faithfulness to the module beats convenience: every term, example, and case comes from the book, and nothing is invented.
- Reading is the product: long-form, distraction-free prose with clear typographic rhythm; quizzes and prompts serve the reading, not the reverse.
- Persistence is trust: anything the student would care about losing (progress, reflections, highlights) survives in a real database, not the browser.
- Precision matters: the module's careful distinctions (ethical vs. aesthetic vs. technical vs. etiquette; moral issue vs. decision vs. judgment vs. dilemma; ethics vs. morals vs. amoral) are the curriculum and must be taught accurately.
- Accessibility and craft: semantic HTML, WCAG AA contrast in light and dark mode, keyboard-driven navigation, and typed, well-structured code.

## Accessibility & Inclusion

Reading surface designed for mobile-first long-form reading with visible focus states, semantic landmarks, and WCAG AA contrast in both light and dark modes.
