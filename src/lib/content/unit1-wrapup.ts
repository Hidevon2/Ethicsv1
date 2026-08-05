import type { LessonSlug } from "@/lib/types";

export interface WrapUpKeyWord {
  label: string;
  lessonSlug: LessonSlug;
  termSlug?: string;
  fallbackDefinition?: string;
}

export const unitOneWrapUp = {
  harness: {
    title: "HARNESS",
    prompt:
      "Corruption in the form of nepotism and cronyism are long-recognized social and political problems in this country — we are so accustomed to it that some go so far as to find ways to justify it, more or less saying it is only right for a person in power to protect and look after those around him or her, one's family and friends, without regard to the welfare of others. Could this be said to be basically another form of egoism? Discuss.",
  },
  summary: [
    "Established the scope and rationale for a discussion of ethics.",
    "Explored various domains of valuation in order to distinguish what might make a particular type of valuation a moral or ethical one given the gravity of the concern.",
    "Clarified some of the terms used in the study of ethics.",
    "Assessed a number of problematic ways of thinking about ethics — some giving a too-simplistic answer to the question of our bases or foundations for moral valuation, while others seem to dismiss the possibility of ethics altogether.",
  ],
  keyWords: [
    { label: "Ethics", lessonSlug: "brotherhood-or-violence", termSlug: "ethics" },
    {
      label: "Morality",
      lessonSlug: "brotherhood-or-violence",
      fallbackDefinition:
        "The standards of right and wrong by which human conduct is judged — the subject matter that the study of ethics examines.",
    },
    { label: "Aesthetics", lessonSlug: "valuation", termSlug: "aesthetics" },
    { label: "Etiquette", lessonSlug: "valuation", termSlug: "etiquette" },
    { label: "Technique", lessonSlug: "valuation", termSlug: "technical" },
    { label: "Descriptive", lessonSlug: "thinking-of-ethics", termSlug: "descriptive-ethics" },
    { label: "Normative", lessonSlug: "thinking-of-ethics", termSlug: "normative-ethics" },
    { label: "Positive Law", lessonSlug: "sources-of-authority", termSlug: "law" },
    { label: "Divine Command Theory", lessonSlug: "sources-of-authority", termSlug: "divine-command-theory" },
    { label: "Cultural Relativism", lessonSlug: "sources-of-authority", termSlug: "cultural-relativism" },
    { label: "Subjectivism", lessonSlug: "senses-of-the-self", termSlug: "subjectivism" },
    { label: "Psychological Egoism", lessonSlug: "senses-of-the-self", termSlug: "psychological-egoism" },
    { label: "Ethical Egoism", lessonSlug: "senses-of-the-self", termSlug: "ethical-egoism" },
  ],
  furtherReading: {
    note: "Compiled for this site — not reproduced from the module's Suggested Readings page. Verify against p. 31.",
    text:
      "Plato, Republic (esp. bks 1–2 on why to be just and the ring of Gyges; bk 4 on the ordering of the soul; bk 9 on the tyrant).",
    topics: [
      "divine-command-theory",
      "cultural-relativism",
      "subjectivism",
      "psychological-egoism",
      "ethical-egoism",
    ],
  },
};
