import type { LessonSlug } from "@/lib/types";

export interface WrapUpKeyWord {
  label: string;
  lessonSlug: LessonSlug;
  termSlug?: string;
  fallbackDefinition?: string;
}

export const unitThreeWrapUp = {
  harness: {
    title: "HARNESS",
    prompt:
      "Whistle-blowing and the Duty to Speak Truth to Power. Research a real whistleblower news story; identify the unethical act exposed and who committed it; give findings and opinion. Context: Philippine whistleblowers Primitivo Mijares, Heidi Mendoza, and Rodolfo Lozada Jr. as reference cases. Whistleblowing is one way of \"speaking truth to power\" when an authority figure instructs a subordinate to do something unethical (bribery, extortion, deception, rights violations) and the subordinate's principles conflict with the employer-employee obligation to obey. Beyond public exposure (testifying, going to media), three quieter intervention methods: (1) secretly informing a higher authority (the \"boss of the boss\"), (2) writing an anonymous letter threatening to expose the wrongdoing, (3) collaborating with like-minded colleagues to quietly sabotage/prevent the unethical act. It takes moral character to stand up to authority, but it also takes wisdom to pick the right intervention method.",
  },
  summary: [
    "Introduced deontology through the case of Reggie Cabututan, a taxi driver who returned ₱260,000 in lost property without any promised reward.",
    "Defined duty as the obligation to do the right thing even when another course of action would benefit you more.",
    "Defined moral conviction as the principle that doing the right thing is one's duty, regardless of reward or punishment.",
    "Distinguished reward (a freely given, unrequired gift) from payment (what a reward becomes when demanded or expected).",
    "Noted that this unit currently contains two lessons; more lessons on deontology will be added in future updates.",
  ],
  keyWords: [
    { label: "Deontology", lessonSlug: "on-moral-conviction", termSlug: "deontology" },
    { label: "Duty", lessonSlug: "on-moral-conviction", termSlug: "duty" },
    { label: "Moral conviction", lessonSlug: "on-moral-conviction", termSlug: "moral-conviction" },
    { label: "Reward", lessonSlug: "on-moral-conviction", termSlug: "reward" },
    { label: "Whistleblowing", lessonSlug: "on-moral-conviction", fallbackDefinition: "Exposing an authority figure's unethical or illegal act; can be done publicly or through quieter channels (informing a higher authority, an anonymous warning, or coordinated non-cooperation)." },
  ],
  furtherReading: {
    note: "Compiled for this site — not reproduced from the module's Suggested Readings page. Verify against pp. 83–86.",
    text:
      "Immanuel Kant, Groundwork of the Metaphysics of Morals (1785) — the categorical imperative and duty for duty's sake. See also the module's discussion of whistleblowing cases: Primitivo Mijares, Heidi Mendoza, Rodolfo Lozada Jr.",
    topics: [
      "deontology",
      "duty",
      "moral-conviction",
      "reward",
    ],
  },
};