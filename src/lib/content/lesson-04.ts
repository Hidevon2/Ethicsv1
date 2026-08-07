import type { Lesson } from "@/lib/types";

export const lesson04: Lesson = {
  slug: "sources-of-authority",
  number: 4,
  title: "Sources of Authority",
  coverLine:
    "Law, religion, culture. Three authorities that claim to tell us right from wrong — and where each one runs out.",
  summary:
    "Why law, religion, and culture are supposed higher authorities — their importance, their limits, and the problems of using them simply.",
  learningOutcomes: [
    "Recognize the importance but also the limit of law as a source of authority.",
    "Understand the difficulty of a simplistic use of religion as the basis of ethics.",
    "Assess how culture can help but also hinder ethical thinking.",
  ],
  think: [
    {
      id: "introduction",
      heading: "Where does right and wrong come from?",
      blocks: [
        {
          type: "paragraph",
          text: "When people ask where right and wrong come from, three authorities are commonly named: {{law}}, {{religion}}, and {{culture}}. Each seems to stand above our individual opinions and tell us how to act. This lesson examines all three — and shows that each is more limited than it first appears.",
        },
      ],
    },
    {
      id: "law",
      heading: "Law",
      blocks: [
        {
          type: "paragraph",
          text: "Law has real importance. Filipinos are bound by the criminal and civil codes, down to the level of provinces and cities — Rizal province, Antipolo City, and every unit below them. Law gives society a written standard of conduct, and obedience to it keeps public life orderly.",
        },
        {
          type: "paragraph",
          text: "But a good act may go beyond mere obedience to law. Consider passers-by who ignore someone in need. They break no law — nothing in the criminal code forces them to help — yet they seem culpable. Our sense that they did something wrong suggests that ethics demands more than law does.",
        },
        {
          type: "paragraph",
          text: "Later in the course, the lesson notes, Immanuel Kant's {{deontology}} will take the concept of law and use it in a more ethically significant way — a moral law the agent gives to himself, not merely a statute enforced by the state.",
        },
      ],
    },
    {
      id: "religion",
      heading: "Religion",
      blocks: [
        {
          type: "quote",
          text: "Love the Lord, your God, therefore, and always heed his charge: his statutes, decrees, and commandments.",
          source: "Deuteronomy 11, New American Bible",
        },
        {
          type: "paragraph",
          text: "The religious basis of ethics is often expressed as {{divine command theory}}: God — or Allah, or Jehovah — commands, and we are obliged to obey. The authority is supreme, the obligation absolute.",
        },
        {
          type: "subheading",
          text: "Its strengths",
        },
        {
          type: "paragraph",
          text: "Divine command theory has real attractions. It provides a clear code of prohibitions that matches our moral intuitions — \"Thou shall not kill, thou shall not steal, thou shall not commit adultery.\" It adds positive ideals such as forgiveness and charity. And it rests on a Supreme Authority, one that can compel absolute obedience in a way no human institution can.",
        },
        {
          type: "subheading",
          text: "Its problems",
        },
        {
          type: "paragraph",
          text: "There is a practical problem and a conceptual problem. The practical problem is the multiplicity of religions, each with its own demands, which often conflict with one another. Nor does agreement end within a single faith: believers disagree over which scriptures apply, how to interpret them, and which pastor to obey.",
        },
        {
          type: "paragraph",
          text: "The conceptual problem is the {{Euthyphro}} problem, raised by Plato: is something holy because the gods love it, or is it loved by the gods because it is holy? Rephrased for divine commands: is an act right only because God commanded it — which would make morality arbitrary, and which makes the Crusades a tragic case of killing in God's name — or is it right in itself, which is why God commanded it, implying standards of right and wrong knowable independently of God?",
        },
        {
          type: "paragraph",
          text: "One clarification is essential: questioning divine command theory is not an attack on faith. It is an invitation to find a less problematic link between faith and ethics. That is the link Thomas Aquinas later develops in his account of {{natural law}}.",
        },
      ],
    },
    {
      id: "culture",
      heading: "Culture",
      blocks: [
        {
          type: "paragraph",
          text: "Culture is the third supposed authority, and it begins with the obvious fact of diversity. Aesthetic standards differ — Japanese and Indian art answer to different senses of beauty. Religions differ — Buddhism and Christianity make different claims. Etiquette differs — dining practices vary from table to table and nation to nation. There are taboos around nudity that one society observes and another does not. Even the relations between men and women range across the spectrum, from equality to dominance and submission.",
        },
        {
          type: "paragraph",
          text: "From this diversity, some jump to {{cultural relativism}}: the view that what is ethically acceptable is relative to, or dependent on, one's culture. Cultural values and practices, on this view, should be understood within their own cultural context, and people should not judge other cultures by their own values.",
        },
        {
          type: "subheading",
          text: "Its appeal",
        },
        {
          type: "paragraph",
          text: "Cultural relativism has a genuine appeal: it teaches tolerance. It warns us not to impose our standards on others, and it reminds us that much of what we take for granted is itself shaped by the culture we grew up in. Culture can help ethical thinking by broadening it.",
        },
        {
          type: "subheading",
          text: "Its problems",
        },
        {
          type: "paragraph",
          text: "But culture can also hinder ethical thinking. Cultural relativism leaves us unable to criticize practices like headhunting, however clearly wrong they seem. And the argument from diversity is weak: the bare fact that cultures differ does not prove that there is no standard. Difference alone does not show that any practice is as good as any other.",
        },
      ],
    },
  ],
  keyTerms: [
    {
      slug: "law",
      term: "law",
      definition:
        "Written rules of conduct enforced by the state, binding on citizens from the national codes down to the provincial and city level — Rizal province, Antipolo City.",
    },
    {
      slug: "religion",
      term: "religion",
      definition:
        "A system of belief in a supreme being — God, Allah, or Jehovah — whose commands are often taken as the basis of ethics.",
    },
    {
      slug: "culture",
      term: "culture",
      definition:
        "The shared values, practices, aesthetics, etiquette, and taboos of a society, differing across peoples.",
    },
    {
      slug: "divine-command-theory",
      term: "divine command theory",
      definition:
        "The view that God commands and we are obliged to obey — an act is right because God commanded it.",
    },
    {
      slug: "euthyphro",
      term: "Euthyphro problem",
      definition:
        "Plato's question: is something holy because the gods love it, or loved by the gods because it is holy? Rephrased, it asks whether an act is right only because God commanded it, or right in itself.",
    },
    {
      slug: "natural-law",
      term: "natural law",
      definition:
        "Thomas Aquinas's account of a less problematic link between faith and ethics, developed after questioning divine command theory.",
    },
    {
      slug: "deontology",
      term: "deontology",
      definition:
        "Kant's later use of the concept of law in a more ethically significant way — a moral law the agent gives to himself, not merely a statute enforced by the state.",
    },
    {
      slug: "cultural-relativism",
      term: "cultural relativism",
      definition:
        "The view that what is ethically acceptable is relative to, or dependent on, one's culture; that cultural values and practices should be understood within their own context; and that people should not judge other cultures by their own values.",
    },
  ],
  reflections: [
    {
      id: "l4-exp-1",
      group: "experience",
      text: "Think of a rule you follow without much reflection — a law, a custom, a religious practice. Why do you follow it: fear, habit, faith, or conviction?",
    },
    {
      id: "l4-asse-1",
      group: "assess",
      text: "Passers-by who ignore someone in need break no law, yet they seem culpable. What does this tell us about the limits of law as a source of ethics?",
    },
    {
      id: "l4-asse-2",
      group: "assess",
      text: "A good act may go beyond mere obedience to law. Give an example of an act that obeys the law yet is not good, and an act that exceeds the law and is good.",
    },
    {
      id: "l4-asse-3",
      group: "assess",
      text: "Explain the Euthyphro problem in your own words. Why does it make a simplistic use of religion as the basis of ethics difficult?",
    },
    {
      id: "l4-asse-4",
      group: "assess",
      text: "Why does the diversity of cultures not, by itself, prove that there is no ethical standard?",
    },
    {
      id: "l4-chal-1",
      group: "challenge",
      text: "Is a practice accepted by one's own culture ever beyond criticism — or does cultural relativism leave us unable to criticize practices like headhunting? Take a position and defend it.",
    },
  ],
  quiz: [
    {
      id: "l4-q1",
      kind: "multiple-choice",
      prompt: "Which three supposed higher authorities does the lesson examine?",
      options: [
        "Law, religion, and culture",
        "Law, philosophy, and science",
        "Religion, science, and tradition",
        "Culture, politics, and economics",
      ],
      correctIndex: 0,
      explanation:
        "The lesson examines three supposed higher authorities that claim to tell us right from wrong: law, religion, and culture.",
    },
    {
      id: "l4-q2",
      kind: "multiple-choice",
      prompt: "To what level does the lesson say Filipinos are bound by the criminal and civil codes?",
      options: [
        "Only the national level",
        "Down to the provincial and city level",
        "Only within Metro Manila",
        "Only when they agree with the law",
      ],
      correctIndex: 1,
      explanation:
        "Filipinos are bound by the criminal and civil codes down to the level of provinces and cities — the lesson names Rizal province and Antipolo City.",
    },
    {
      id: "l4-q3",
      kind: "multiple-choice",
      prompt: "Why do passers-by who ignore someone in need seem culpable, even though they break no law?",
      options: [
        "Because ignoring someone in need is a crime",
        "Because a good act may go beyond mere obedience to law",
        "Because the law requires them to help",
        "Because they are members of a profession",
      ],
      correctIndex: 1,
      explanation:
        "They break no law, yet seem culpable — a sign that ethics demands more than mere obedience to law.",
    },
    {
      id: "l4-q4",
      kind: "multiple-choice",
      prompt: "Divine command theory holds that:",
      options: [
        "God commands, and we are obliged to obey",
        "Moral standards are created by human societies",
        "Reason alone discovers right and wrong",
        "Obedience to law is the whole of ethics",
      ],
      correctIndex: 0,
      explanation:
        "The religious basis of ethics is often expressed as divine command theory: God — or Allah, or Jehovah — commands, and we are obliged to obey.",
    },
    {
      id: "l4-q5",
      kind: "multiple-choice",
      prompt: "The Euthyphro problem asks whether something is holy because the gods love it, or:",
      options: [
        "loved by the gods because it is holy",
        "holy only for human beings",
        "holy because it is forbidden",
        "loved by humans because it is useful",
      ],
      correctIndex: 0,
      explanation:
        "Plato's Euthyphro asks: is something holy because the gods love it, or is it loved by the gods because it is holy?",
    },
    {
      id: "l4-q6",
      kind: "multiple-choice",
      prompt: "Which of the following is a practical problem with religion as a basis for ethics?",
      options: [
        "A multiplicity of religions with conflicting demands",
        "There are no moral rules in any religion",
        "Religions never inspire charity",
        "Religions agree on every scripture",
      ],
      correctIndex: 0,
      explanation:
        "Practically, there are many religions whose demands conflict — and even within one faith believers disagree over which scriptures apply, how to interpret them, and which pastor to obey.",
    },
    {
      id: "l4-q7",
      kind: "true-false",
      prompt: "The Crusades are cited in the lesson as a tragic case of killing in God's name.",
      correct: true,
      explanation:
        "The lesson cites the Crusades as a tragic case that arises if an act is right only because God commanded it — making morality arbitrary.",
    },
    {
      id: "l4-q8",
      kind: "true-false",
      prompt: "Questioning divine command theory is an attack on faith.",
      correct: false,
      explanation:
        "The lesson clarifies that questioning divine command theory is not an attack on faith, but an invitation to a less problematic link between faith and ethics.",
    },
    {
      id: "l4-q9",
      kind: "multiple-choice",
      prompt: "Which thinker develops the less problematic link between faith and ethics in his account of natural law?",
      options: ["Immanuel Kant", "Thomas Aquinas", "Plato", "Confucius"],
      correctIndex: 1,
      explanation:
        "The lesson notes that Thomas Aquinas later develops a less problematic link between faith and ethics in his account of natural law.",
    },
    {
      id: "l4-q10",
      kind: "multiple-choice",
      prompt: "Cultural relativism is the view that what is ethically acceptable is:",
      options: [
        "relative to, or dependent on, one's culture",
        "the same in every culture",
        "decided by the state alone",
        "discoverable only by philosophers",
      ],
      correctIndex: 0,
      explanation:
        "Cultural relativism holds that what is ethically acceptable is relative to, or dependent on, one's culture — so cultural practices should be understood in their own context.",
    },
    {
      id: "l4-q11",
      kind: "multiple-choice",
      prompt: "What is the appeal of cultural relativism?",
      options: [
        "It teaches tolerance",
        "It proves there is one standard for all",
        "It allows us to judge other cultures",
        "It abolishes all moral rules",
      ],
      correctIndex: 0,
      explanation:
        "Cultural relativism's genuine appeal is that it teaches tolerance, warning us not to impose our standards on others.",
    },
    {
      id: "l4-q12",
      kind: "multiple-choice",
      prompt: "Which of the following is a problem with cultural relativism?",
      options: [
        "It leaves us unable to criticize practices like headhunting",
        "It makes every culture identical",
        "It forbids any cultural practice",
        "It requires a supreme authority",
      ],
      correctIndex: 0,
      explanation:
        "If acceptability is relative to one's culture, we lose the grounds to criticize practices like headhunting — and difference alone does not prove there is no standard.",
    },
    {
      id: "l4-q13",
      kind: "true-false",
      prompt: "The bare fact that cultures differ proves that there is no ethical standard.",
      correct: false,
      explanation:
        "The argument from diversity is weak: the fact that cultures differ does not prove there is no standard. Difference alone does not show any practice is as good as any other.",
    },
    {
      id: "l4-q14",
      kind: "matching",
      prompt: "Match each concept with the claim that belongs to it.",
      pairs: [
        { left: "Divine command theory", right: "God commands, and we are obliged to obey" },
        { left: "Euthyphro problem", right: "Holy because the gods love it, or loved because holy?" },
        { left: "Cultural relativism", right: "Acceptability is relative to one's culture" },
        { left: "Natural law", right: "Aquinas's less problematic link between faith and ethics" },
      ],
      explanation:
        "Divine command theory grounds right in God's command; the Euthyphro problem questions that ground; cultural relativism relativizes right to culture; natural law offers Aquinas's later link between faith and ethics.",
    },
    {
      id: "l4-q15",
      kind: "multiple-choice",
      prompt: "What does the lesson say law gives society?",
      options: [
        "A written standard of conduct, obedience to which keeps public life orderly",
        "Freedom from all moral duties",
        "A guarantee that no one will ever be harmed",
        "A complete account of ethics",
      ],
      correctIndex: 0,
      explanation:
        "Law gives society a written standard of conduct, and obedience to it keeps public life orderly — but a good act may go beyond mere obedience to law.",
    },
    {
      id: "l4-q16",
      kind: "multiple-choice",
      prompt:
        "Which thinker does the lesson say later takes the concept of law and uses it in a more ethically significant way?",
      options: ["Immanuel Kant", "Thomas Aquinas", "Plato", "Aristotle"],
      correctIndex: 0,
      explanation:
        "The lesson notes that Immanuel Kant's deontology uses law in a more ethically significant way — a moral law the agent gives to himself, not merely a statute enforced by the state.",
    },
    {
      id: "l4-q17",
      kind: "true-false",
      prompt:
        "Divine command theory provides a clear code of prohibitions and adds positive ideals such as forgiveness and charity.",
      correct: true,
      explanation:
        "These are listed among divine command theory's strengths: a clear code of prohibitions that matches our moral intuitions, and positive ideals such as forgiveness and charity.",
    },
    {
      id: "l4-q18",
      kind: "multiple-choice",
      prompt: "Which of the following is a strength of divine command theory?",
      options: [
        "It rests on a Supreme Authority that can compel absolute obedience",
        "It eliminates all disagreement among believers",
        "It needs no interpretation",
        "It applies only to private life",
      ],
      correctIndex: 0,
      explanation:
        "Divine command theory rests on a Supreme Authority — one that can compel absolute obedience in a way no human institution can.",
    },
    {
      id: "l4-q19",
      kind: "multiple-choice",
      prompt: "Which example of cultural diversity does the lesson give?",
      options: [
        "Japanese and Indian art answer to different senses of beauty",
        "Everyone agrees on dining practices",
        "All societies share identical taboos",
        "Relations between men and women are identical everywhere",
      ],
      correctIndex: 0,
      explanation:
        "The lesson cites aesthetic standards that differ — Japanese and Indian art answer to different senses of beauty — among other cultural differences.",
    },
    {
      id: "l4-q20",
      kind: "matching",
      prompt: "Match each item with the claim it illustrates.",
      pairs: [
        { left: "Rizal province, Antipolo City", right: "The levels to which the law binds Filipinos" },
        { left: "Thou shall not kill, steal, or commit adultery", right: "Divine command theory's clear code of prohibitions" },
        { left: "Japanese and Indian art answer to different senses of beauty", right: "Cultural diversity in aesthetics" },
        { left: "Thomas Aquinas", right: "Natural law as a less problematic link between faith and ethics" },
      ],
      explanation:
        "The law binds citizens down to the provincial and city level; the prohibitions illustrate divine command theory's clear code; differing art answers to cultural diversity; and Aquinas develops natural law.",
    },
  ],
};
