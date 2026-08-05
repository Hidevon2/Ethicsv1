import type { Lesson } from "@/lib/types";

export const unit2Lesson01: Lesson = {
  slug: "the-common-good",
  number: 1,
  unit: 2,
  title: "The Common Good",
  coverLine:
    "A firefight in Mamasapano. Sixty-seven lives. When may individual rights be set aside for the greatest number?",
  summary:
    "The Mamasapano clash as the entry to utilitarianism — an ethical theory that judges actions by the usefulness of their consequences.",
  learningOutcomes: [
    "Understand the principles behind utilitarianism.",
    "Recognize the principle behind the greatest good.",
    "Review personal convictions on the topic.",
  ],
  think: [
    {
      id: "mamasapano",
      heading: "The Mamasapano clash",
      blocks: [
        {
          type: "paragraph",
          text: "On January 25, 2015, the 84th Special Action Force conducted a police operation at Tukanalipao, Mamasapano, Maguindanao. Known as Oplan Exodus, it was intended to serve an arrest warrant on Zulkifli bin Hir (“Marwan”), a Malaysian terrorist and bomb-maker with a $5 million bounty on his head.",
        },
        {
          type: "paragraph",
          text: "The operation led to a clash between the PNP-SAF on one side and the BIFF and MILF on the other. Although the operation was “successful” because of Marwan's death, the firefight claimed sixty-seven lives — forty-four SAF troopers, eighteen MILF fighters, and five civilians.",
        },
        {
          type: "paragraph",
          text: "In the Congress investigations that followed, then Senate President Franklin Drilon and Senator Francis Escudero debated the admissibility of an audio recording allegedly attempting to cover up the massacre. Drilon questioned it under the Anti-Wiretapping Law, citing Section 4 of RA 4200. Escudero cited the legal brief of the Free Legal Assistance Group (FLAG) that the law protects only the recording and interception of private communications. Senator Grace Poe argued otherwise, in the Filipino quote the book prints.",
        },
        {
          type: "paragraph",
          text: "The analysis begins with the law. The 1987 Constitution protects the right to private communication but provides exemptions — a lawful court order, and issues of public safety and order. RA 4200 and RA 9372 (Human Security Act of 2007) both allow exemptions in instances of treason, espionage, rebellion, and sedition.",
        },
        {
          type: "paragraph",
          text: "The case raises a core question: can the government infringe individual rights, and does it become legitimate to sacrifice individual rights when considering the greatest benefit for the greatest number?",
        },
      ],
    },
    {
      id: "utilitarianism",
      heading: "What is utilitarianism?",
      blocks: [
        {
          type: "paragraph",
          text: "{{utilitarianism}} is an ethical theory arguing for the goodness of pleasure and determining right behavior based on the usefulness of an action's consequences. Its root word is “utility.”",
        },
        {
          type: "paragraph",
          text: "Utilitarianism is {{consequentialism}}: it determines what is right by the consequences of an action. Note that not all consequentialist theories are utilitarian.",
        },
        {
          type: "paragraph",
          text: "The two foremost utilitarian thinkers are Jeremy Bentham (1748–1832) and John Stuart Mill (1806–1873). The lessons that follow study their principle of utility and their principle of the greatest number.",
        },
      ],
    },
  ],
  editorNotes: [
    {
      id: "editors-bridge",
      label: "Editor's bridge",
      note: "Editor's bridge — summarizes where the module goes next. Verify against p. 36.",
      blocks: [
        {
          type: "paragraph",
          text: "Utilitarianism is consequentialist: rightness is determined by the usefulness of an action's consequences, not by intention. The Mamasapano case poses the question of whether individual rights may be infringed, and whether it becomes legitimate to sacrifice individual rights when considering the greatest benefit for the greatest number.",
        },
        {
          type: "paragraph",
          text: "The 1987 Constitution protects private communication but allows exemptions for a lawful court order and for public safety and order, and RA 4200 and RA 9372 allow exemptions in cases of treason, espionage, rebellion, and sedition.",
        },
        {
          type: "paragraph",
          text: "The following lessons unpack the two principles that grow out of the case: the principle of utility (Lesson 2) and the principle of the greatest number (Lesson 3).",
        },
        {
          type: "paragraph",
          text: "Reflect on the case itself: was Oplan Exodus justified by its result? Do the sixty-seven deaths change the evaluation? And where would you draw the line between public safety and individual rights?",
        },
      ],
    },
  ],
  keyTerms: [
    {
      slug: "utilitarianism",
      term: "utilitarianism",
      definition:
        "An ethical theory arguing for the goodness of pleasure and determining right behavior based on the usefulness of an action's consequences.",
    },
    {
      slug: "consequentialism",
      term: "consequentialism",
      definition:
        "The view that the rightness of an action is determined by its consequences; utilitarianism is a consequentialist theory, though not all consequentialist theories are utilitarian.",
    },
  ],
  reflections: [
    {
      id: "u2l1-exp-1",
      group: "experience",
      text: "What was your first reaction to the Mamasapano clash — and what shaped it: the lives lost, the mission, or the debate over the recording?",
    },
    {
      id: "u2l1-asse-1",
      group: "assess",
      text: "According to the lesson, when do the 1987 Constitution, RA 4200, and RA 9372 allow private communications to be intruded upon? What do these exemptions suggest about when individual rights yield to the public interest?",
    },
    {
      id: "u2l1-chal-1",
      group: "challenge",
      text: "Is it ever legitimate to sacrifice individual rights for the greatest benefit of the greatest number? Defend your answer with the Mamasapano case in view.",
    },
  ],
  quiz: [
    {
      id: "u2l1-q1",
      kind: "multiple-choice",
      prompt:
        "Which conclusion best captures the question the Mamasapano case raises for utilitarianism?",
      options: [
        "Whether it becomes legitimate to sacrifice individual rights when considering the greatest benefit for the greatest number",
        "Whether the police should always follow court orders without exception",
        "Whether private communication can ever be recorded in the Philippines",
        "Whether the MILF fighters were civilians under the law",
      ],
      correctIndex: 0,
      explanation:
        "The case poses the core question directly: can the government infringe individual rights, and does it become legitimate to sacrifice them for the greatest benefit of the greatest number?",
    },
    {
      id: "u2l1-q2",
      kind: "true-false",
      prompt:
        "RA 4200 and RA 9372 (Human Security Act of 2007) both allow exemptions to the protection of private communications in instances of treason, espionage, rebellion, and sedition.",
      correct: true,
      explanation:
        "The lesson states that both laws allow such exemptions, alongside the 1987 Constitution's exemptions for a lawful court order and issues of public safety and order.",
    },
    {
      id: "u2l1-q3",
      kind: "multiple-choice",
      prompt: "Which statement about utilitarianism and consequentialism is correct?",
      options: [
        "Utilitarianism is consequentialist, though not all consequentialist theories are utilitarian",
        "All consequentialist theories are utilitarian",
        "Utilitarianism is not a consequentialist theory",
        "Utilitarianism ignores the consequences of actions",
      ],
      correctIndex: 0,
      explanation:
        "The lesson defines utilitarianism as consequentialist — right behavior is determined by the usefulness of an action's consequences — while noting that not every consequentialist theory is utilitarian.",
    },
    {
      id: "u2l1-q4",
      kind: "true-false",
      prompt:
        "The Mamasapano firefight claimed sixty-seven lives — forty-four SAF troopers, eighteen MILF fighters, and five civilians.",
      correct: true,
      explanation:
        "Those are the exact numbers given in the lesson for the lives claimed by the firefight on January 25, 2015.",
    },
    {
      id: "u2l1-q5",
      kind: "multiple-choice",
      prompt:
        "Whom does the lesson name as the two foremost utilitarian thinkers?",
      options: [
        "Jeremy Bentham (1748–1832) and John Stuart Mill (1806–1873)",
        "John Locke and Thomas Hobbes",
        "Plato and Aristotle",
        "Immanuel Kant and Thomas Aquinas",
      ],
      correctIndex: 0,
      explanation:
        "The lesson names Jeremy Bentham and John Stuart Mill as the two foremost utilitarian thinkers whose principles the following lessons examine.",
    },
  ],
};
