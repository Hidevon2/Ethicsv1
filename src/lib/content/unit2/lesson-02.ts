import type { Lesson } from "@/lib/types";

export const unit2Lesson02: Lesson = {
  slug: "principle-of-utility",
  number: 2,
  unit: 2,
  title: "Principle of Utility",
  coverLine:
    "Two sovereign masters — pleasure and pain — govern everything we do. What makes an action useful?",
  summary:
    "Bentham's principle of utility and Mill's theory of life: the two sides of the principle, and how the two thinkers begin to disagree.",
  learningOutcomes: [
    "Understand the principle of utility.",
    "Distinguish Bentham from Mill's understanding of the said principle.",
    "Apply the distinction.",
  ],
  think: [
    {
      id: "two-sovereign-masters",
      heading: "Two sovereign masters",
      blocks: [
        {
          type: "paragraph",
          text: "The {{principle-of-utility}} is the heart of utilitarian philosophy and what makes it consequentialist. From An Introduction to the Principles of Morals and Legislation (1789), Bentham argues our actions are governed by {{two-sovereign-masters}} — pleasure and pain.",
        },
        {
          type: "quote",
          text: "Nature has placed mankind under the governance of two sovereign masters… to rear the fabric of felicity by the hands of reason and of law.",
          source: "Jeremy Bentham, An Introduction to the Principles of Morals and Legislation (1789)",
        },
        {
          type: "paragraph",
          text: "The principle has two sides. It describes the motivation of our actions — we do what is pleasurable and avoid what is painful — and it holds pleasure as good if and only if it produces more happiness than unhappiness. Bentham equates happiness with pleasure.",
        },
      ],
    },
    {
      id: "theory-of-life",
      heading: "Mill's theory of life",
      blocks: [
        {
          type: "paragraph",
          text: "What Bentham identified as the natural moral preferability of pleasure, Mill calls a {{theory-of-life}}.",
        },
        {
          type: "quote",
          text: "The creed which accepts as the foundation of morals, utility or the {{greatest-happiness-principle}}, holds that actions are right in proportion as they tend to promote happiness; wrong as they tend to produce the reverse of happiness…",
          source: "John Stuart Mill, Utilitarianism (1861)",
        },
        {
          type: "paragraph",
          text: "The book raises open questions: is it morally acceptable to eat or exercise excessively? Can indulging in extravagant pleasures at the expense of others be justified on utilitarian grounds? Is maximizing pleasure by wanton intemperance permissible if nobody is suffering? Bentham and Mill do not answer these the same way.",
        },
      ],
    },
  ],
  profiles: [
    {
      id: "jeremy-bentham",
      name: "Jeremy Bentham",
      lifespan: "1748–1832",
      role: "The founder of utilitarianism",
      facts: [
        "Born February 15, 1748 in London.",
        "Teacher of James Mill.",
        "First wrote about the greatest happiness principle.",
        "Known for the penal-management system called the panopticon.",
        "Advocate of economic freedom, women's rights, separation of church and state, animal rights, the abolition of slavery, the death penalty, and corporal punishment for children.",
        "Denied individual legal rights and did not agree with natural law.",
        "On his death, June 6, 1832, he donated his corpse to University College London, where his auto-icon is still on public display.",
      ],
    },
    {
      id: "john-stuart-mill",
      name: "John Stuart Mill",
      lifespan: "1806–1873",
      role: "The reviser of Bentham's utilitarianism",
      facts: [
        "Born May 20, 1806 in Pentonville, London.",
        "Son of James Mill, a friend and disciple of Bentham.",
        "Homeschooled: studied Greek at three and Latin at eight, and wrote a history of Roman Law at eleven.",
        "Suffered a nervous breakdown at twenty.",
        "Married Harriet Taylor after 21 years of friendship.",
        "His ethical theory is in the long essay Utilitarianism (1861).",
        "Died May 8, 1873 in Avignon, France, from erysipelas.",
      ],
    },
  ],
  keyTerms: [
    {
      slug: "principle-of-utility",
      term: "principle of utility",
      definition:
        "The heart of utilitarian philosophy: actions are governed by two sovereign masters, pleasure and pain; the principle describes our motivation and holds pleasure good if it produces more happiness than unhappiness.",
    },
    {
      slug: "two-sovereign-masters",
      term: "two sovereign masters",
      definition:
        "Bentham's phrase for pleasure and pain — the two forces he argues govern all our actions.",
    },
    {
      slug: "greatest-happiness-principle",
      term: "greatest happiness principle",
      definition:
        "Mill's name for utility, the foundation of morals: actions are right in proportion as they tend to promote happiness, and wrong as they tend to produce the reverse of happiness.",
    },
    {
      slug: "theory-of-life",
      term: "theory of life",
      definition:
        "Mill's name for what Bentham identified as the natural moral preferability of pleasure — a creed about how life should be lived.",
    },
    {
      slug: "auto-icon",
      term: "auto-icon",
      definition:
        "Bentham's preserved body, donated to University College London on his death and still on public display there.",
    },
  ],
  reflections: [
    {
      id: "u2l2-exp-1",
      group: "experience",
      text: "Think of a decision you recently made that turned on pleasure and pain. What would Bentham's account of your motivation say happened?",
    },
    {
      id: "u2l2-asse-1",
      group: "assess",
      text: "Bentham equates happiness with pleasure. What might be lost in that equation? Give an example of something you value that is not simply a matter of pleasure or pain.",
    },
    {
      id: "u2l2-chal-1",
      group: "challenge",
      text: "Is it morally acceptable to eat or exercise excessively, or to maximize pleasure by wanton intemperance if nobody is suffering? Bentham and Mill do not answer these the same way — which answer do you give, and why?",
    },
  ],
  quiz: [
    {
      id: "u2l2-q1",
      kind: "true-false",
      prompt: "Bentham's two sovereign masters are pleasure and pain.",
      correct: true,
      explanation:
        "From An Introduction to the Principles of Morals and Legislation (1789), Bentham argues that nature places mankind under the governance of two sovereign masters — pleasure and pain.",
    },
    {
      id: "u2l2-q2",
      kind: "multiple-choice",
      prompt: "What are the two sides of the principle of utility?",
      options: [
        "It describes our motivation — we do what is pleasurable and avoid what is painful — and it holds pleasure good if it produces more happiness than unhappiness",
        "It commands us to seek pleasure and forbids all pain",
        "It describes the law and the state",
        "It measures only the pleasures of the agent alone",
      ],
      correctIndex: 0,
      explanation:
        "The lesson presents the principle with two sides: a description of how we are motivated and a standard holding pleasure good if and only if it produces more happiness than unhappiness.",
    },
    {
      id: "u2l2-q3",
      kind: "true-false",
      prompt: "Bentham equates happiness with pleasure.",
      correct: true,
      explanation:
        "The lesson states plainly that Bentham equates happiness with pleasure.",
    },
    {
      id: "u2l2-q4",
      kind: "multiple-choice",
      prompt: "What does Mill call what Bentham identified as the natural moral preferability of pleasure?",
      options: [
        "A theory of life",
        "The panopticon",
        "The principle of the greatest number",
        "Moral irrelevance of motive",
      ],
      correctIndex: 0,
      explanation:
        "Mill calls it a theory of life — the creed that grounds morals in utility or the greatest happiness principle.",
    },
    {
      id: "u2l2-q5",
      kind: "true-false",
      prompt:
        "Bentham donated his corpse to University College London, where his auto-icon is still on public display.",
      correct: true,
      explanation:
        "The biography card records that on his death, June 6, 1832, Bentham donated his corpse to University College London, where his auto-icon is still on display.",
    },
    {
      id: "u2l2-q6",
      kind: "multiple-choice",
      prompt: "In which work did Bentham argue that pleasure and pain govern our actions?",
      options: [
        "An Introduction to the Principles of Morals and Legislation (1789)",
        "Utilitarianism (1861)",
        "The Republic",
        "The Panopticon Papers",
      ],
      correctIndex: 0,
      explanation:
        "The two sovereign masters passage comes from Bentham's An Introduction to the Principles of Morals and Legislation (1789).",
    },
    {
      id: "u2l2-q7",
      kind: "true-false",
      prompt: "John Stuart Mill was homeschooled — he studied Greek at three and Latin at eight.",
      correct: true,
      explanation:
        "His biography card records that he was homeschooled, studying Greek at three and Latin at eight, and writing a history of Roman Law at eleven.",
    },
    {
      id: "u2l2-q8",
      kind: "multiple-choice",
      prompt: "What does the principle of utility hold pleasure to be?",
      options: [
        "Good if and only if it produces more happiness than unhappiness",
        "Always evil",
        "The only thing that is bad",
        "Irrelevant to ethics",
      ],
      correctIndex: 0,
      explanation:
        "The principle has two sides: it describes our motivation and holds pleasure good if and only if it produces more happiness than unhappiness.",
    },
    {
      id: "u2l2-q9",
      kind: "true-false",
      prompt: "Bentham was the teacher of James Mill.",
      correct: true,
      explanation:
        "The biography card records that Bentham was the teacher of James Mill — who in turn was the father of John Stuart Mill.",
    },
    {
      id: "u2l2-q10",
      kind: "multiple-choice",
      prompt: "Which penal-management system is Bentham known for?",
      options: ["The panopticon", "The auto-icon", "The greatest happiness principle", "The two sovereign masters"],
      correctIndex: 0,
      explanation:
        "Bentham is known for the penal-management system called the panopticon, among his other achievements.",
    },
    {
      id: "u2l2-q11",
      kind: "multiple-choice",
      prompt: "Which of the following did Bentham NOT advocate?",
      options: [
        "Economic freedom",
        "Women's rights",
        "The abolition of slavery",
        "An established state religion",
      ],
      correctIndex: 3,
      explanation:
        "Bentham advocated the separation of church and state, so an established state religion is the one thing on the list he did not advocate.",
    },
    {
      id: "u2l2-q12",
      kind: "true-false",
      prompt: "Bentham denied individual legal rights and did not agree with natural law.",
      correct: true,
      explanation:
        "The biography card records both: Bentham denied individual legal rights and did not agree with natural law.",
    },
    {
      id: "u2l2-q13",
      kind: "multiple-choice",
      prompt: "What did Bentham do with his corpse on his death?",
      options: [
        "He donated it to University College London, where his auto-icon is still on public display",
        "He was buried at sea",
        "He was cremated",
        "His body was returned to France",
      ],
      correctIndex: 0,
      explanation:
        "On his death, June 6, 1832, Bentham donated his corpse to University College London, where his auto-icon is still on public display.",
    },
    {
      id: "u2l2-q14",
      kind: "multiple-choice",
      prompt: "Who was John Stuart Mill's father?",
      options: [
        "James Mill, a friend and disciple of Bentham",
        "Jeremy Bentham",
        "Thomas Carlyle",
        "Harriet Taylor",
      ],
      correctIndex: 0,
      explanation:
        "John Stuart Mill was the son of James Mill, a friend and disciple of Bentham.",
    },
    {
      id: "u2l2-q15",
      kind: "true-false",
      prompt: "John Stuart Mill suffered a nervous breakdown at twenty.",
      correct: true,
      explanation:
        "His biography card records that Mill suffered a nervous breakdown at twenty.",
    },
    {
      id: "u2l2-q16",
      kind: "multiple-choice",
      prompt: "Whom did Mill marry, and after how long a friendship?",
      options: [
        "Harriet Taylor, after 21 years of friendship",
        "Harriet Taylor, after 5 years",
        "Mary Wollstonecraft, after 10 years",
        "He never married",
      ],
      correctIndex: 0,
      explanation:
        "The biography card records that Mill married Harriet Taylor after 21 years of friendship.",
    },
    {
      id: "u2l2-q17",
      kind: "multiple-choice",
      prompt: "In which work did Mill set out his ethical theory?",
      options: [
        "Utilitarianism (1861)",
        "An Introduction to the Principles of Morals and Legislation (1789)",
        "The Republic",
        "On Liberty (1859)",
      ],
      correctIndex: 0,
      explanation:
        "Mill's ethical theory is in the long essay Utilitarianism (1861). The 1789 work belongs to Bentham.",
    },
    {
      id: "u2l2-q18",
      kind: "true-false",
      prompt: "Mill died in 1873 in Avignon, France, from erysipelas.",
      correct: true,
      explanation:
        "The biography card records that Mill died May 8, 1873 in Avignon, France, from erysipelas.",
    },
    {
      id: "u2l2-q19",
      kind: "multiple-choice",
      prompt: "Which of the following is one of the open questions the book raises about pleasure?",
      options: [
        "Is it morally acceptable to eat or exercise excessively?",
        "Is it always wrong to break a promise?",
        "Does the state have a duty to tax?",
        "Are moral rules discovered by reason alone?",
      ],
      correctIndex: 0,
      explanation:
        "The book raises questions such as whether eating or exercising excessively is morally acceptable, and whether wanton intemperance is permissible if nobody is suffering.",
    },
    {
      id: "u2l2-q20",
      kind: "matching",
      prompt: "Match each fact with the thinker it belongs to.",
      pairs: [
        { left: "Founded the penal-management system called the panopticon", right: "Jeremy Bentham" },
        { left: "Wrote a history of Roman Law at eleven", right: "John Stuart Mill" },
        { left: "Born February 15, 1748 in London", right: "Jeremy Bentham" },
        { left: "Married Harriet Taylor after 21 years of friendship", right: "John Stuart Mill" },
      ],
      explanation:
        "The panopticon and the 1748 London birth belong to Bentham; the Roman Law history at eleven and the marriage to Harriet Taylor belong to Mill.",
    },
  ],
};
