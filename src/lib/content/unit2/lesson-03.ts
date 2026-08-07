import type { Lesson } from "@/lib/types";

export const unit2Lesson03: Lesson = {
  slug: "principle-of-the-greatest-number",
  number: 3,
  unit: 2,
  title: "Principle of the Greatest Number",
  coverLine:
    "Not your pleasure alone, but the pleasure of the greatest number affected by your action.",
  summary:
    "Mill's principle of the greatest number, the hierarchy of higher and lower pleasures, and the moral irrelevance of motive.",
  learningOutcomes: [
    "Understand the principle of the greatest number.",
    "Distinguish higher from lower pleasures.",
    "Apply the distinction in understanding utilitarianism.",
  ],
  think: [
    {
      id: "greatest-number",
      heading: "The greatest number",
      blocks: [
        {
          type: "paragraph",
          text: "Equating happiness with pleasure does not aim to describe the utilitarian moral agent alone and independently from others. It is not only about our individual pleasures — however high, intellectual, or noble — but also about the pleasure of the greatest number affected by the consequences of our actions.",
        },
        {
          type: "quote",
          text: "I have dwelt on this point, as being part of a perfectly just conception of utility… renders refutations superfluous.",
          source: "John Stuart Mill, Utilitarianism (1861)",
        },
        {
          type: "paragraph",
          text: "Utilitarianism cannot lead to selfish acts. It does not constitute a moral good if we are the only ones satisfied by our actions. It is the standard by which to evaluate what is moral, implies that utilitarianism is not separable from liberal social practices, and aims to improve the quality of life for all persons — the greatest happiness of the greatest number, not dismissive of sacrifices that procure more happiness for others.",
        },
        {
          type: "paragraph",
          text: "Mill uses the eradication of disease and technology as examples of utilitarian maximization.",
        },
        {
          type: "subheading",
          text: "The moral irrelevance of motive",
        },
        {
          type: "paragraph",
          text: "Because utilitarianism maximizes the total amount of pleasure over displeasure for the greatest number, Mill pushes for the {{moral-irrelevance-of-motive}} in evaluating actions. He who saves a fellow creature from drowning does the right thing whether or not he is moved by a good motive: utilitarianism cares about the best consequence for the highest number of people, not the agent's intention. Moral value cannot be discerned in intention or motivation; it is based solely and exclusively on the difference the act makes to the world's total amount of pleasure and pain.",
        },
        {
          type: "paragraph",
          text: "This leads to questioning utilitarianism's take on moral rights. Actions based only on the greatest happiness of the greatest number make it justifiable to let these occasions travel beyond the particular persons concerned.",
        },
      ],
    },
    {
      id: "higher-and-lower-pleasures",
      heading: "Higher and lower pleasures",
      blocks: [
        {
          type: "paragraph",
          text: "Mill revises Benthamite utilitarianism and its common calculus by referring to a hierarchy of {{higher-and-lower-pleasures}}. But who or what pleasures are higher or more preferable? Mill argues that the determination of the better pleasure depends on the decision of a majority of people who have experienced both pleasures.",
        },
      ],
    },
  ],
  keyTerms: [
    {
      slug: "higher-and-lower-pleasures",
      term: "higher and lower pleasures",
      definition:
        "Mill's hierarchy within the greatest happiness principle: some pleasures are higher, or worth more, than others; the better pleasure is determined by a majority of people who have experienced both.",
    },
    {
      slug: "moral-irrelevance-of-motive",
      term: "moral irrelevance of motive",
      definition:
        "Mill's position that the rightness of an action is judged by its consequences, not by the agent's intention or motivation.",
    },
  ],
  reflections: [
    {
      id: "u2l3-exp-1",
      group: "experience",
      text: "The utilitarianism of Bentham seems to argue that the interest of a few persons can be sacrificed if it benefits a greater number. Is it more preferable to build a church rather than build a firing range (say, because there are more churchgoers than soldiers in need of firing ranges)? Do you agree?",
    },
    {
      id: "u2l3-asse-1",
      group: "assess",
      text: "Is every good commensurable? Can we weigh different goods using a common scale, or is it possible that the value of some goods, such as love or hope, is not comparable with the value of other goods, like money?",
    },
    {
      id: "u2l3-asse-2",
      group: "assess",
      text: "Do you think that pleasures should be counted — even objectionable pleasures, like the pleasures that terrorists derive from being fundamentalists?",
    },
    {
      id: "u2l3-chal-1",
      group: "challenge",
      text: "Mill revises Benthamite utilitarianism and its common calculus by referring to a hierarchy of pleasures — but who or what pleasures are higher or more preferable? Mill argues the determination of the better pleasure depends on the decision of a majority of people who have experienced both pleasures. But does that mean the majority really aims at higher pleasures?",
    },
    {
      id: "u2l3-chal-2",
      group: "challenge",
      text: "When listening to the Philippine government's argument in favor of the anti-terror law, to what extent are these based on utilitarian grounds? Identify three arguments and demonstrate why these are utilitarian.",
    },
  ],
  quiz: [
    {
      id: "u2l3-q1",
      kind: "matching",
      prompt: "Match each view with the thinker who holds it.",
      pairs: [
        { left: "Happiness is equated with pleasure, weighed quantitatively", right: "Jeremy Bentham" },
        { left: "Pleasures form a hierarchy of higher and lower pleasures", right: "John Stuart Mill" },
        { left: "Rightness is judged without regard to the agent's motive", right: "John Stuart Mill" },
        { left: "The better pleasure is settled by a majority who have experienced both", right: "John Stuart Mill" },
      ],
      explanation:
        "Bentham's quantitative calculus equates happiness with pleasure; Mill revises it with a hierarchy of higher and lower pleasures, holds motive morally irrelevant, and settles the better pleasure by a majority of those who have experienced both.",
    },
    {
      id: "u2l3-q2",
      kind: "true-false",
      prompt:
        "Mill argues that the determination of the better pleasure depends on the decision of a majority of people who have experienced both pleasures.",
      correct: true,
      explanation:
        "The lesson states Mill's criterion: the better pleasure is determined by a majority of people who have experienced both pleasures.",
    },
    {
      id: "u2l3-q3",
      kind: "multiple-choice",
      prompt: "Why does Mill hold that motive is morally irrelevant?",
      options: [
        "Because rightness depends on the difference the act makes to the world's total amount of pleasure and pain",
        "Because motives are impossible to know",
        "Because all motives are self-interested",
        "Because the law ignores intention",
      ],
      correctIndex: 0,
      explanation:
        "Moral value is based solely on the difference the act makes to the world's total pleasure and pain, not on the agent's intention or motivation.",
    },
    {
      id: "u2l3-q4",
      kind: "multiple-choice",
      prompt: "What does the lesson say utilitarianism cannot lead to?",
      options: [
        "Selfish acts",
        "Sacrifices that procure more happiness for others",
        "The eradication of disease",
        "Liberal social practices",
      ],
      correctIndex: 0,
      explanation:
        "Utilitarianism cannot lead to selfish acts — it does not constitute a moral good if we are the only ones satisfied by our actions.",
    },
    {
      id: "u2l3-q5",
      kind: "true-false",
      prompt:
        "Mill uses the eradication of disease and technology as examples of utilitarian maximization.",
      correct: true,
      explanation:
        "The lesson notes that Mill uses the eradication of disease and technology as examples of how utilitarianism maximizes total pleasure over displeasure.",
    },
    {
      id: "u2l3-q6",
      kind: "true-false",
      prompt:
        "Utilitarianism does not constitute a moral good if we are the only ones satisfied by our actions.",
      correct: true,
      explanation:
        "The lesson states that utilitarianism is not a moral good if we are the only ones satisfied by our actions — it cannot lead to selfish acts.",
    },
    {
      id: "u2l3-q7",
      kind: "multiple-choice",
      prompt: "What does the lesson say utilitarianism is not separable from?",
      options: ["Liberal social practices", "Religious faith", "Legal codes", "Traditional customs"],
      correctIndex: 0,
      explanation:
        "The lesson says utilitarianism is the standard by which to evaluate what is moral, and that it is not separable from liberal social practices.",
    },
    {
      id: "u2l3-q8",
      kind: "multiple-choice",
      prompt:
        "\"He who saves a fellow creature from drowning does the right thing whether or not he is moved by a good motive.\" Which claim does this illustrate?",
      options: [
        "The moral irrelevance of motive",
        "The principle of utility",
        "The two sovereign masters",
        "Higher and lower pleasures",
      ],
      correctIndex: 0,
      explanation:
        "Utilitarianism cares about the best consequence for the greatest number, not the agent's intention — so the act is right whether or not the motive is good.",
    },
    {
      id: "u2l3-q9",
      kind: "true-false",
      prompt:
        "For Mill, moral value can be discerned in the agent's intention or motivation.",
      correct: false,
      explanation:
        "Mill holds that moral value is based solely and exclusively on the difference the act makes to the world's total amount of pleasure and pain, not on intention.",
    },
    {
      id: "u2l3-q10",
      kind: "multiple-choice",
      prompt: "How does Mill say the better pleasure is determined?",
      options: [
        "By a majority of people who have experienced both pleasures",
        "By philosophers alone",
        "By the state",
        "By tradition",
      ],
      correctIndex: 0,
      explanation:
        "Mill argues that the determination of the better pleasure depends on the decision of a majority of people who have experienced both pleasures.",
    },
    {
      id: "u2l3-q11",
      kind: "true-false",
      prompt:
        "The principle of the greatest number aims to improve the quality of life for all persons.",
      correct: true,
      explanation:
        "The lesson says the principle aims to improve the quality of life for all persons — the greatest happiness of the greatest number.",
    },
    {
      id: "u2l3-q12",
      kind: "multiple-choice",
      prompt:
        "The moral irrelevance of motive leads the lesson to question which of utilitarianism's positions?",
      options: [
        "Its take on moral rights",
        "Its definition of pleasure",
        "Its view of the state",
        "Its history",
      ],
      correctIndex: 0,
      explanation:
        "If rightness rests only on the greatest happiness of the greatest number, it becomes justifiable to let the consequences travel beyond the particular persons concerned — questioning utilitarianism's take on moral rights.",
    },
    {
      id: "u2l3-q13",
      kind: "multiple-choice",
      prompt: "Utilitarian evaluation is concerned with the pleasure of:",
      options: [
        "the greatest number affected by the consequences of our actions",
        "the agent alone",
        "the wealthy only",
        "the majority party",
      ],
      correctIndex: 0,
      explanation:
        "It is not only about our individual pleasures, but also about the pleasure of the greatest number affected by the consequences of our actions.",
    },
    {
      id: "u2l3-q14",
      kind: "true-false",
      prompt:
        "The lesson says the principle of the greatest number is dismissive of sacrifices that procure more happiness for others.",
      correct: false,
      explanation:
        "The lesson says the opposite: the principle is not dismissive of sacrifices that procure more happiness for others.",
    },
    {
      id: "u2l3-q15",
      kind: "multiple-choice",
      prompt: "The eradication of disease and technology are given as examples of:",
      options: [
        "utilitarian maximization",
        "higher pleasures",
        "the two sovereign masters",
        "moral rights",
      ],
      correctIndex: 0,
      explanation:
        "The lesson notes that Mill uses the eradication of disease and technology as examples of utilitarian maximization.",
    },
    {
      id: "u2l3-q16",
      kind: "multiple-choice",
      prompt: "What is Mill's hierarchy of higher and lower pleasures?",
      options: [
        "Some pleasures are higher, or worth more, than others",
        "All pleasures are of equal worth",
        "Only bodily pleasures count",
        "Pleasures cannot be compared",
      ],
      correctIndex: 0,
      explanation:
        "Mill revises Benthamite utilitarianism and its common calculus by referring to a hierarchy in which some pleasures are higher, or worth more, than others.",
    },
    {
      id: "u2l3-q17",
      kind: "true-false",
      prompt:
        "Mill's hierarchy of pleasures revises Benthamite utilitarianism and its common calculus.",
      correct: true,
      explanation:
        "The lesson states that Mill revises Benthamite utilitarianism and its common calculus by referring to a hierarchy of higher and lower pleasures.",
    },
    {
      id: "u2l3-q18",
      kind: "multiple-choice",
      prompt: "Why does the lesson say utilitarianism cannot lead to selfish acts?",
      options: [
        "It is not a moral good if we are the only ones satisfied by our actions",
        "It forbids all personal enjoyment",
        "It requires constant self-denial",
        "It ignores consequences",
      ],
      correctIndex: 0,
      explanation:
        "Utilitarianism does not constitute a moral good if we are the only ones satisfied by our actions — so it cannot lead to selfish acts.",
    },
    {
      id: "u2l3-q19",
      kind: "multiple-choice",
      prompt: "Equating happiness with pleasure does NOT aim to:",
      options: [
        "describe the utilitarian moral agent alone and independently from others",
        "include the pleasure of the greatest number affected by the consequences of our actions",
        "improve the quality of life for all persons",
        "aim at the greatest happiness of the greatest number",
      ],
      correctIndex: 0,
      explanation:
        "The lesson says equating happiness with pleasure does not aim to describe the utilitarian moral agent alone and independently from others — it is about the greatest number affected.",
    },
    {
      id: "u2l3-q20",
      kind: "matching",
      prompt: "Match each claim with the principle it belongs to.",
      pairs: [
        { left: "Actions are right in proportion as they tend to promote happiness", right: "The greatest happiness principle" },
        { left: "The better pleasure is settled by a majority who have experienced both", right: "Higher and lower pleasures" },
        { left: "Rightness is judged by consequences, not the agent's intention", right: "The moral irrelevance of motive" },
        { left: "Not your pleasure alone, but the greatest number affected by your action", right: "The principle of the greatest number" },
      ],
      explanation:
        "The greatest happiness principle grounds rightness in happiness; the hierarchy of pleasures settles the better pleasure by a majority; motive is morally irrelevant; and evaluation extends to the greatest number affected.",
    },
  ],
};
