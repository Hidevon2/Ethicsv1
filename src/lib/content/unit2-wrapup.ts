import type { LessonSlug } from "@/lib/types";

export interface WrapUpKeyWord {
  label: string;
  lessonSlug: LessonSlug;
  termSlug?: string;
  fallbackDefinition?: string;
}

export const unitTwoWrapUp = {
  harness: {
    title: "HARNESS",
    prompt:
      "Corruption in the form of nepotism and cronyism are long-recognized social and political problems in this country — we are so accustomed to it that some go so far as to find ways to justify it, more or less saying it is only right for a person in power to protect and look after those around him or her, one's family and friends, without regard to the welfare of others. Could this be said to be basically another form of egoism? Discuss.",
  },
  summary: [
    "Introduced utilitarianism through the principle of utility and the principle of the greatest number.",
    "Examined how actions are judged by their consequences and their ability to maximize pleasure and minimize pain.",
    "Considered the role of the community and the individual in ethical decision-making.",
    "Explored the connection between personal happiness and the greater good of society.",
  ],
  keyWords: [
    { label: "Utilitarianism", lessonSlug: "principle-of-utility", termSlug: "utility" },
    { label: "Greatest Number", lessonSlug: "principle-of-the-greatest-number", termSlug: "greatest-number" },
    { label: "Pleasure", lessonSlug: "principle-of-utility", termSlug: "pleasure" },
    { label: "Pain", lessonSlug: "principle-of-utility", termSlug: "pain" },
    { label: "Consequence", lessonSlug: "principle-of-utility", termSlug: "consequence" },
    { label: "Hedonism", lessonSlug: "principle-of-utility", termSlug: "hedonism" },
    { label: "Net Utility", lessonSlug: "principle-of-utility", termSlug: "net-utility" },
    { label: "Net Balance", lessonSlug: "principle-of-the-greatest-number", termSlug: "net-balance" },
    { label: "Benefit", lessonSlug: "principle-of-the-greatest-number", termSlug: "benefit" },
    { label: "Harm", lessonSlug: "principle-of-the-greatest-number", termSlug: "harm" },
  ],
  furtherReading: {
    note: "Compiled for this site — not reproduced from the module's Suggested Readings page.",
    text:
      "Jeremy Bentham, An Introduction to the Principles of Morals and Legislation (1789) — the principle of utility and the Greatest Happiness Principle. John Stuart Mill, Utilitarianism (1861) — qualitative hedonism and the proof of the principle.",
    topics: [
      "utility",
      "greatest-number",
      "consequence",
      "hedonism",
    ],
  },
};

