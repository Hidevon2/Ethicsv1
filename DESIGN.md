---
name: Ethics · Unit I Reviewer
description: A Filipino komiks issue of a Unit I Ethics reviewer — panels, halftone, ink rules, one red stamp.
colors:
  ink-black: "#211d16"
  cream-newsprint: "#f4efe2"
  komiks-red: "#a62a1e"
  komiks-teal: "#0f6b5c"
  inked-paper: "#fbf6ea"
  inked-paper-muted: "#ede4cd"
  ink-line: "#d6c9ac"
  ink-muted: "#6d6350"
  ink-black-dark: "#ece4d2"
  cream-newsprint-dark: "#16130c"
  komiks-red-dark: "#e06857"
  komiks-teal-dark: "#58b8a0"
  inked-paper-dark: "#201b12"
  inked-paper-muted-dark: "#2a2419"
  ink-line-dark: "#3a3326"
  ink-muted-dark: "#a99e88"
typography:
  scale:
    micro: "0.625rem"
    label: "0.6875rem"
    small-body: "0.9375rem"
    body: "1.0625rem"
    title: "1.5rem"
    headline: "2.25rem"
    display-min: "3.5rem"
    display-max: "6rem"
  display:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(3.5rem, 10vw, 6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  small-body:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    letterSpacing: "0.12em"
  micro:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  stamp: "6px"
  focus-ring: "2px"
  scrollbar: "3px"
spacing:
  tight: "8px"
  snug: "16px"
  section: "56px"
components:
  button-primary:
    backgroundColor: "{colors.komiks-red}"
    textColor: "{colors.inked-paper}"
    rounded: "{rounded.stamp}"
    padding: "16px 24px"
    border: "2px solid {colors.ink-black}"
  button-secondary:
    backgroundColor: "{colors.inked-paper}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.stamp}"
    padding: "16px 24px"
    border: "2px solid {colors.ink-black}"
  panel-card:
    backgroundColor: "{colors.inked-paper}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.stamp}"
    border: "2px solid {colors.ink-black}"
  input-field:
    backgroundColor: "{colors.cream-newsprint}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.stamp}"
    border: "2px solid {colors.ink-black}"
---

# Design System: Ethics · Unit I Reviewer

## Overview

**Creative North Star: "The Komiks Issue Reader"**

Unit I reads as a Filipino komiks issue: a newsprint-bound magazine the student picks up before the exam and reads story-first. Panels instead of cards, halftone dots instead of gradients, 2px ink rules with hard offset shadows instead of soft elevation — the module is a cover story, each lesson a new page of the issue, and finishing a quiz stamps a verdict in red ink. The design refuses the generic editorial reader that every long-form study app ships: there is no glass, no rounded softness, no neutral gray-taupe tablet chrome.

The personality is newspaperman-dramatic and warm. Spectral's literary serif carries the narration with the gravity of a byline, while Archivo's compressed sans runs the masthead, labels, and controls like the type on a comic's cover credits. Density sits high enough to feel like print — real paragraph rhythm, justified confidence, generous gutters — yet every interactive element (a key term, a highlight, a quiz option) is unmistakably a printed thing you can poke.

**Key Characteristics:**
- Komiks panels as the container grammar: every block is a 2px ink-outlined panel with a hard offset registration shadow.
- Halftone dot fields as the only texture — flat SVG dot patterns, never gradients.
- Exactly one accent stamp: komiks red. Teal is the ink for answers and "on file" states only.
- Serif narration at ~68ch measure; sans chrome that names itself in uppercase micro-labels.
- Light newsprint and dark "night press" themes, both printed on the same ink vocabulary.
- Motion is comic-book energy on interaction: buttons press down a hair and shift their offset shadow, panels translate on hover — one authored moment per component, nothing ambient.

## Colors

A two-ink press: warm cream newsprint and near-black ink, with one red stamp and one teal confirmation. Muted secondary text is tinted from the ink, never gray.

### Primary
- **Komiks Red** (#a62a1e / dark #e06857): the stamp. Lesson-number badges, the Lesson 1 starburst, the primary button, active nav, quiz verdicts, the scroll-progress ribbon. It is the hero ink and stays rare — reserved for first-class actions and verdicts, not for body chrome.

### Secondary
- **Komiks Teal** (#0f6b5c / dark #58b8a0): the confirmation ink. "Correct" feedback, "On file" answers, strengths in the Sources comparison, the Experience callout tag. It never competes with red for emphasis; red announces, teal confirms.

### Neutral
- **Ink Black** (#211d16 / dark #ece4d2): primary text and every panel rule. On the cover, the ETHICS masthead is set in it.
- **Cream Newsprint** (#f4efe2 / dark #16130c): the page background, printed over with a faint halftone field on the cover band.
- **Inked Paper** (#fbf6ea / dark #201b12): raised panel surfaces and the header bar.
- **Inked Paper Muted** (#ede4cd / dark #2a2419): panel headers, selected options, hover fills.
- **Ink Line** (#d6c9ac / dark #3a3326): the registration shadow color under panels and the quiet border tone.
- **Ink Muted** (#6d6350 / dark #a99e88): secondary text, micro-labels, arrows — a desaturated ink, never gray.

### Named Rules
**The One-Stamp Rule.** Komiks red is used on a small minority of any given screen. Its rarity is what makes the stamp read as a stamp; when red appears everywhere, nothing is approved.

## Typography

**Display Font:** Spectral (700) with Georgia fallback
**Body Font:** Spectral (400/500/600) with Georgia fallback
**Label Font:** Archivo (600/700) with Helvetica Neue fallback

**Character:** A byline's voice. Spectral's sturdy serif makes the module read like printed fiction — italicized cover lines, quoted Scripture, dialogue-quoted examples — while Archivo delivers comic-book lettering energy in small caps and tracking for mastheads, labels, and control text.

### Hierarchy
- **Display** (700, clamp to ~6rem, line-height 1, -0.03em): the ETHICS masthead and page titles. Cover-only.
- **Headline** (700, 2.25rem, 1.2): lesson and page headings, balanced with `text-balance`.
- **Title** (700, 1.5rem, 1.3): lesson titles in the table of contents.
- **Body** (400, 1.0625rem, 1.7, 68ch max): the narration and quiz options. Set with `text-pretty`; reading width is 65–75ch.
- **Small Body** (400, 0.9375rem, 1.6): panel summary lines, glossary definitions, source cards, compact narration.
- **Label** (600/700, 0.6875rem, 0.12–0.24em tracking, uppercase): lesson numbers, "Learning outcomes", callout tags, nav, control names.
- **Micro** (600, 0.625rem, 0.12–0.24em tracking, uppercase): the smallest credits — key-cap hints, source card labels, cover meta rows, quiz kind tags. Never interactive.

### Named Rules
**The Print-Measure Rule.** Narration paragraphs never exceed ~68ch, so the reader returns to the same comfortable line length on every lesson page and never reads a full-width wall of ink.

## Layout

A magazine spine, not a dashboard. The page shell is `max-w-6xl` with generous gutters; the lesson reading column narrows to the 68ch print measure, with a sticky table-of-contents sidebar appearing from `lg:` while the article scrolls. Mobile is a strict single column — header, panel, prose, quiz, one after another.

Sections breathe: roughly 56px between major blocks, more space above a heading than below it. The cover stacks a masthead band (halftone field, red starburst mark) above the table-of-contents panel and the Unit progress strip. The header is a sticky masthead row — brand mark left, nav right — with a 3px reading-progress ribbon that fills as the lesson scrolls.

## Elevation & Depth

Depth is printed, not ambient. Panels sit forward of the page via a hard offset "registration shadow" — the ink line sliding a few pixels behind the panel, never blurred, never colored-tinted: `box-shadow: 4px 4px 0 var(--border)`. There is no soft elevation, no glow, no blur.

### Shadow Vocabulary
- **Panel** (`4px 4px 0 var(--border)`): all block panels — outcomes, callouts, quiz cards, glossary, the cover TOC.
- **Control** (`3px 3px 0 var(--border)`): buttons and small interactive panels.
- **Pressed** (hover/active: shadow shrinks to `2px 2px 0` then `none`, element translates +1/+3px): the comic-book press of pushing a printed button.

### Named Rules
**The No-Glow Rule.** Depth comes only from offset ink shadows. Any blurred, colored, or zero-offset shadow is decoration and is banned.

## Motion

Motion is comic-book energy on interaction and nothing else. Every animation is a single authored moment tied to a reader action — a stamp, a pop, or a press. Nothing plays on load, scroll, or a timer; nothing idles, loops, or drifts. The one exception is the reading-progress ribbon, the module's single continuously animated element.

### Vocabulary
- **Pressed** (hover/active: shadow shrinks to `2px 2px 0` then `none`, element translates +1/+3px): the comic-book press of pushing a printed button. Applies to buttons, nav pills, and other controls.
- **Emergent** (hover/focus: shadow re-draws to `3px 3px 0`, element translates -2px up): the comic-book tension of a panel picked up from the table. Applies to lesson cards and TOC/nav panels that lift. Static reading panels never move — the narration must not shift under the reader.
- **Reserved**: continuous motion appears in exactly one place — the 3px reading-progress ribbon that tracks scroll position directly, with no easing lag.

### Interaction Choreography
- **Key term chips:** the speech-bubble definition pops with a `bubble-up` entrance — translate + fade over ~130ms, no spring or overshoot. Dismiss is the reverse, ~100ms. The bubble is a first-class printed panel, not a gray tooltip.
- **Quiz options:** the chosen option locks instantly — no animation on the choice itself. The teal "Correct!" / red "Not quite." verdict fades in over ~150ms (never slides or bounces) and is announced via `aria-live`.
- **Completion stamp:** the starburst "Sagot! Perfect score" or the score panel lands once with a scale-in (0.9 → 1, ~150ms) — a stamp punched down, never spinning or bouncing.
- **Focus rings** appear instantly; only the underlying surface may ease.

### Page & Scroll Motion
- **Lesson navigation** is an instant content swap — a page turn, never a crossfade or slide.
- **The TOC/sidebar** has no entrance animation: it is present, sticky, and static.
- **The reading-progress ribbon** tracks scroll directly with no easing lag.

### Reduced Motion (`prefers-reduced-motion: reduce`)
- Hover/press translates drop to zero — only shadow and color change, instantly, with no movement.
- Information-carrying fades stay but shorten to ~50ms: definition cards, quiz verdicts, and the completion stamp. They are never removed, because they carry state.
- Every state — correct/incorrect, saved, completed — must still be conveyed visually and programmatically without relying on motion.

### Named Rules
**The Authored Moment Rule.** If a transition is not a stamp, a pop, or a press tied to reader action, it does not happen. No scroll-triggered reveals, no word-by-word text animation, no parallax layers, no glow pulses, no decorative spinner loaders, and no transition longer than ~200ms.

## Shapes

Print geometry with a stamp's crispness. Radius is a firm 6px (`--radius`) — the corner of a comic panel, not a pill and not a soft blob. Two smaller radii exist for printed chrome only: 2px on focus rings and 3px on the scrollbar thumb. Every panel, button, input, and chip carries a 2px ink rule (`border-2 border-foreground`). Halftone dot fields (`--halftone` pattern) texture only surfaces that belong to the printed world — the cover band — never content areas. The starburst (`clip-path` polygon) is the stamp's punch-out used for the Lesson 1 mark and the perfect-score verdict; speech-bubble tails (pure CSS triangles) point definition chips and tooltips at the text they explain.

## Components

### Buttons
- **Shape:** 2px ink outline, 6px radius, hard `3px 3px 0` offset shadow.
- **Primary:** komiks red fill with inked-paper text — save, mark complete, finish quiz, "check matching". Uppercase Archivo, 0.08em tracking.
- **Secondary:** inked-paper fill, ink text — cancel, unmark, retake. Ghost: text-only with a panel-muted hover fill.
- **Press:** hover translates +1px and the shadow tightens to `2px 2px 0`; active lands +3px with no shadow, like stamping.
- **Focus:** a 2px primary outline, never removed.

### Panels / Cards
- **Corner Style:** 6px radius; 2px ink border; hard `4px 4px 0` registration shadow.
- **Background:** inked-paper body with an inked-paper-muted header strip (the "panel header" band carrying the tag or number).
- **Internal Padding:** ~16–20px; header 10–12px.

### Key Term Chips
Inline chips in the narration with an ink border and primary text; on tap or hover they pop a speech-bubble definition card with `bubble-up` tail, ~280px max width. The popup is a first-class printed panel, not a gray tooltip.

### Callout Blocks (Signature)
The module's THINK / EXPERIENCE / ASSESS / CHALLENGE boxes render as distinct panels: a panel header with a small stamped icon and uppercase tag — THINK in red, EXPERIENCE in teal, ASSESS in ink, CHALLENGE in red with an editor's energy. Challenge prompts contain a full-width ink-outlined textarea that saves answers to the database and confirms with teal "On file" text.

### Inputs / Fields
- **Style:** cream/background fill, 2px ink border, 6px radius; placeholder in ink-muted.
- **Focus:** 2px primary outline; the search field's underline focus is a clean ink rule.

### Navigation
A sticky masthead: "Ethics · Unit I" mark (Archivo bold, red "Ethics"), centered-ish nav of Lessons / Sources / Reflections in uppercase micro-labels, an outlined search button with a `/` key hint, and the theme toggle. Active route is a red-stamped pill.

### Quiz Cards (Signature)
Each question is a panel with a stamped number, an uppercase kind label ("Multiple choice", "True or false", "Discrimination drill", "Term matching"), and options as outlined radio rows. Answering stamps immediate feedback: teal "Correct!" or red "Not quite." with the lesson-grounded explanation in `aria-live`. The finished quiz stamps a starburst "Sagot! Perfect score" or a score panel.

## Do's and Don'ts

### Do:
- **Do** set every block inside a 2px ink-outlined panel with a hard offset shadow — that is the komiks container grammar.
- **Do** keep narration to the ~68ch print measure with `text-pretty` paragraphs and `text-balance` headings.
- **Do** use Komiks Red only for stamps, verdicts, and first-class actions; confirm correct answers and saved work in Komiks Teal.
- **Do** texture surfaces with halftone dot fields only where the printed world lives (the cover band), never content areas.
- **Do** keep one pressed-panel motion per interactive element — press in, shadow tightens, done.
- **Do** ship both newsprint light and night-press dark themes from the same ink token set.

### Don't:
- **Don't** use gradients, glow, blur, or soft-rounded elevation — depth is hard offset ink shadows only.
- **Don't** reach for purple/violet or any accent beyond the red stamp and teal confirmation.
- **Don't** use raw `bg-white`/`text-black` — all surfaces and text come from the newsprint/ink tokens.
- **Don't** break the reading column to card grids on the lesson page — it is an article, not a dashboard.
- **Don't** let the rounded corners soften past a stamp's crisp 6px or become pills.
