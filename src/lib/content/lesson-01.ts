import type { Lesson } from "@/lib/types";

export const lesson01: Lesson = {
  slug: "brotherhood-or-violence",
  number: 1,
  title: "Brotherhood or Violence?",
  coverLine:
    "A 20-year-old is gone. No one came forward. Where does ethics begin?",
  summary:
    "The death of Cris Anthony Mendez and why a real-world case — not a theory — is the starting context of ethics.",
  learningOutcomes: [
    "Identify the important details of the report on the death of Cris Anthony Mendez.",
    "Reflect on hazing as a real-world issue that touches campus life.",
    "Recognize that a real-world moral problem is the starting context of ethics.",
  ],
  think: [
    {
      id: "case-report",
      heading: "The report",
      blocks: [
        {
          type: "paragraph",
          text: "In August 2007, a 20-year-old student of the University of the Philippines died. His name was Cris Anthony Mendez, and the suspicion that met the news was {{hazing}}. The report reached the public with a question few could answer: what happened, and who was responsible?",
        },
        {
          type: "paragraph",
          text: "No one came forward. Day after day, nobody claimed responsibility for the rites that led to his death, and nobody identified the people involved.",
        },
        {
          type: "paragraph",
          text: "The officers of Sigma Rho, the {{fraternity}} to which Mendez was believed to belong, issued a public statement denouncing the death. Yet the members said to be involved in the hazing vanished — they could not be found, and they did not come forward.",
        },
        {
          type: "paragraph",
          text: "The chancellor of the University of the Philippines responded by asking every fraternity on campus to justify its existence. The question put to the organizations was simple: after the tragedy, why should fraternities continue at all?",
        },
        {
          type: "paragraph",
          text: "The case remains unresolved. No one was held accountable, and the circumstances surrounding Mendez's death remain a matter of suspicion rather than of settled fact.",
        },
      ],
    },
    {
      id: "starting-point",
      heading: "Where ethics begins",
      blocks: [
        {
          type: "paragraph",
          text: "This news report is not merely a tragedy to be mourned and then forgotten. It is a real-world moral problem: people died or were harmed, others failed to come forward, an organization denied responsibility, and a community asked what it should do. Such problems — not abstract theories first, but concrete situations that call for judgment — are the starting context of {{ethics}}. We begin the study of the ethical dimension of human existence with this case precisely because ethics begins where real people are wronged.",
        },
      ],
    },
  ],
  keyTerms: [
    {
      slug: "hazing",
      term: "hazing",
      definition:
        "The subjection of new members of a group — typically a fraternity — to initiation rites that humiliate, injure, or endanger them.",
    },
    {
      slug: "fraternity",
      term: "fraternity",
      definition:
        "A brotherhood, a social organization of men; in campus life, fraternities commonly admit new members through initiation rites.",
    },
    {
      slug: "ethics",
      term: "ethics",
      definition:
        "The study of what is right and wrong in human conduct — the discipline this unit begins with, using a real-world case as its starting point.",
    },
  ],
  reflections: [
    {
      id: "l1-exp-1",
      group: "experience",
      text: "Have you ever heard of a hazing incident — in the news, on campus, or from a friend? What did you feel, and what did you think should happen to the people involved?",
    },
    {
      id: "l1-asse-1",
      group: "assess",
      text: "What wrong things were done in the Mendez case? Identify the wrong acts, the wrong omissions, and the people involved in each.",
    },
    {
      id: "l1-asse-2",
      group: "assess",
      text: "What are the different forms of hazing? What are their consequences — for the victim, the family, the fraternity, and the campus?",
    },
    {
      id: "l1-asse-3",
      group: "assess",
      text: "What are the pros and cons of fraternities and their traditions? Weigh what fraternities claim to offer against the dangers of their initiation rites.",
    },
    {
      id: "l1-asse-4",
      group: "assess",
      text: "Where do you agree and where do you disagree with your classmates about hazing and about fraternities?",
    },
    {
      id: "l1-chal-1",
      group: "challenge",
      text: "Initiation rites, bullying, and hazing: is there a place for them in student organizations? If a line must be drawn, where is it?",
    },
    {
      id: "l1-chal-2",
      group: "challenge",
      text: "Can hazing ever be justified? Defend your answer.",
    },
  ],
  quiz: [
    {
      id: "l1-q1",
      kind: "multiple-choice",
      prompt: "Who was Cris Anthony Mendez?",
      options: [
        "A 20-year-old UP student who died in August 2007",
        "A fraternity officer who denounced hazing",
        "The UP chancellor who questioned the fraternities",
        "A member of Sigma Rho who came forward",
      ],
      correctIndex: 0,
      explanation:
        "The report identifies Cris Anthony Mendez as a 20-year-old UP student whose death in August 2007 was suspected to be the result of fraternity hazing.",
    },
    {
      id: "l1-q2",
      kind: "multiple-choice",
      prompt: "How did the officers of Sigma Rho respond to the death?",
      options: [
        "They admitted responsibility and surrendered",
        "They denounced the death while the members involved vanished",
        "They filed a case against the chancellor",
        "They refused to make any statement",
      ],
      correctIndex: 1,
      explanation:
        "Sigma Rho's leaders publicly denounced the death, but the members said to be involved in the hazing could not be found and did not come forward.",
    },
    {
      id: "l1-q3",
      kind: "true-false",
      prompt: "No one came forward to claim responsibility for the death of Cris Anthony Mendez.",
      correct: true,
      explanation:
        "The report states that nobody came forward and nobody identified the people involved in the rites that led to his death.",
    },
    {
      id: "l1-q4",
      kind: "true-false",
      prompt: "The case of Cris Anthony Mendez was fully resolved soon after the events of August 2007.",
      correct: false,
      explanation:
        "The case remains unresolved: no one was held accountable and the circumstances remain a matter of suspicion rather than settled fact.",
    },
    {
      id: "l1-q5",
      kind: "multiple-choice",
      prompt: "What did the UP chancellor ask of the fraternities after the death?",
      options: [
        "To justify their existence",
        "To disband immediately",
        "To reveal the names of their members",
        "To pay the family a fine",
      ],
      correctIndex: 0,
      explanation:
        "The chancellor asked every fraternity on campus to justify its existence — a challenge to the organizations to say why they should continue after the tragedy.",
    },
    {
      id: "l1-q6",
      kind: "multiple-choice",
      prompt:
        "What does the Mendez case show about the starting context of ethics?",
      options: [
        "Ethics begins with abstract theories and definitions",
        "Ethics begins with real-world moral problems",
        "Ethics is concerned only with legal violations",
        "Ethics applies only to campus organizations",
      ],
      correctIndex: 1,
      explanation:
        "The lesson begins with this real-world case because real situations that call for moral judgment are the starting context of ethics.",
    },
    {
      id: "l1-q7",
      kind: "matching",
      prompt:
        "Match each term with its meaning as used in this lesson.",
      pairs: [
        { left: "Hazing", right: "Initiation rites that humiliate, injure, or endanger new members" },
        { left: "Fraternity", right: "A brotherhood that admits new members through initiation rites" },
        { left: "Ethics", right: "The study of what is right and wrong in human conduct" },
      ],
      explanation:
        "The lesson uses these terms to describe the case: hazing as dangerous initiation rites, fraternity as the brotherhood involved, and ethics as the study that begins with such real-world cases.",
    },
    {
      id: "l1-q8",
      kind: "multiple-choice",
      prompt: "In which month and year did Cris Anthony Mendez die?",
      options: ["August 2007", "January 2015", "June 2005", "December 2003"],
      correctIndex: 0,
      explanation:
        "The report dates the death to August 2007, when a 20-year-old UP student died and the suspicion that met the news was hazing.",
    },
    {
      id: "l1-q9",
      kind: "multiple-choice",
      prompt: "What suspicion met the news of Mendez's death?",
      options: ["Hazing", "An accident", "An illness", "A crime of passion"],
      correctIndex: 0,
      explanation:
        "The lesson says the suspicion that met the news of Mendez's death was hazing — the subjection of new members to dangerous initiation rites.",
    },
    {
      id: "l1-q10",
      kind: "true-false",
      prompt: "Mendez was a 20-year-old student of the University of the Philippines.",
      correct: true,
      explanation:
        "The report identifies Cris Anthony Mendez as a 20-year-old student of the University of the Philippines.",
    },
    {
      id: "l1-q11",
      kind: "true-false",
      prompt: "After the death, the UP chancellor ordered every fraternity on campus to disband.",
      correct: false,
      explanation:
        "The chancellor responded by asking every fraternity to justify its existence — not by ordering them to disband.",
    },
    {
      id: "l1-q12",
      kind: "true-false",
      prompt: "The officers of Sigma Rho issued a public statement denouncing the death.",
      correct: true,
      explanation:
        "Sigma Rho's officers publicly denounced the death, even as the members said to be involved in the hazing vanished.",
    },
    {
      id: "l1-q13",
      kind: "multiple-choice",
      prompt: "Which best explains why the Mendez case remains unresolved?",
      options: [
        "No one was held accountable, and the circumstances remain a matter of suspicion rather than settled fact",
        "The police closed the case as an accident",
        "The family refused to cooperate",
        "The fraternity paid damages to the family",
      ],
      correctIndex: 0,
      explanation:
        "The lesson closes the report by noting that no one was held accountable and that the circumstances remain a matter of suspicion rather than of settled fact.",
    },
    {
      id: "l1-q14",
      kind: "multiple-choice",
      prompt:
        "Which term refers to initiation rites that humiliate, injure, or endanger new members?",
      options: ["Hazing", "Fraternity", "Ethics", "Etiquette"],
      correctIndex: 0,
      explanation:
        "Hazing is defined as the subjection of new members of a group — typically a fraternity — to initiation rites that humiliate, injure, or endanger them.",
    },
    {
      id: "l1-q15",
      kind: "multiple-choice",
      prompt: "To which fraternity was Mendez believed to belong?",
      options: ["Sigma Rho", "Sigma Delta", "Alpha Omega", "Tau Gamma"],
      correctIndex: 0,
      explanation:
        "The report names Sigma Rho as the fraternity to which Mendez was believed to belong.",
    },
    {
      id: "l1-q16",
      kind: "multiple-choice",
      prompt: "What happened to the members said to be involved in the hazing?",
      options: [
        "They could not be found and did not come forward",
        "They were arrested the same week",
        "They surrendered to the police",
        "They publicly apologized",
      ],
      correctIndex: 0,
      explanation:
        "The members said to be involved in the hazing vanished — they could not be found, and they did not come forward.",
    },
    {
      id: "l1-q17",
      kind: "true-false",
      prompt:
        "The lesson presents the Mendez case as an abstract theoretical exercise rather than a real-world moral problem.",
      correct: false,
      explanation:
        "The lesson stresses the opposite: the Mendez case is a concrete real-world moral problem — the starting context of ethics — not an abstract theory.",
    },
    {
      id: "l1-q18",
      kind: "multiple-choice",
      prompt: "Why does the lesson begin with the Mendez report rather than with a theory?",
      options: [
        "Because ethics begins where real people are wronged",
        "Because hazing is the only moral problem",
        "Because theories are not needed in ethics",
        "Because the case is the most famous in history",
      ],
      correctIndex: 0,
      explanation:
        "The lesson states that such real-world problems — not abstract theories first — are the starting context of ethics, precisely because ethics begins where real people are wronged.",
    },
    {
      id: "l1-q19",
      kind: "matching",
      prompt: "Match each element of the case with its role in the lesson.",
      pairs: [
        { left: "Cris Anthony Mendez", right: "The 20-year-old UP student whose death opened the lesson" },
        { left: "Sigma Rho", right: "The fraternity whose officers denounced the death" },
        { left: "The UP chancellor", right: "Asked every fraternity to justify its existence" },
        { left: "The case's status", right: "Unresolved — a matter of suspicion, not settled fact" },
      ],
      explanation:
        "Mendez is the victim whose death opened the lesson; Sigma Rho is the fraternity whose leaders denounced it; the chancellor asked the fraternities to justify themselves; and the case itself remains unresolved.",
    },
    {
      id: "l1-q20",
      kind: "multiple-choice",
      prompt:
        "Which omission does the lesson emphasize alongside the wrong act of the hazing itself?",
      options: [
        "No one came forward to claim responsibility, and nobody identified those involved",
        "The family did not file a case",
        "The school did not issue a statement",
        "The media stopped reporting the story",
      ],
      correctIndex: 0,
      explanation:
        "The report emphasizes that nobody came forward and nobody identified the people involved in the rites that led to Mendez's death.",
    },
  ],
};
