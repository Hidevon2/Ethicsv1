import type { Lesson } from "@/lib/types";

export const lesson02: Lesson = {
  slug: "valuation",
  number: 2,
  title: "Valuation",
  coverLine:
    "Not every value judgment is an ethical one. Where is the line drawn?",
  summary:
    "Distinguishing ethical value judgments from the economic, aesthetic, technical, and etiquette valuations of everyday life.",
  learningOutcomes: [
    "Distinguish ethical value judgments from non-ethical ones.",
    "Identify the kinds of non-ethical valuation: economic, aesthetic, technical, and etiquette.",
    "Classify everyday value judgments as ethical or non-ethical.",
  ],
  think: [
    {
      id: "value-judgments",
      heading: "Value judgments everywhere",
      blocks: [
        {
          type: "paragraph",
          text: "Every day we make {{value judgment}} after value judgment. Something is good, something else is bad; one act is right, another is wrong; a song is beautiful, a meal is delicious, a habit is rude. The question this lesson asks is deceptively simple: are all of these judgments ethical?",
        },
        {
          type: "paragraph",
          text: "The answer is no. Only some value judgments are ethical ones. To see the difference, we have to look at the kinds of valuation that fill our days — and to notice that most of them are not ethical valuation at all.",
        },
      ],
    },
    {
      id: "economic",
      heading: "Economic or monetary value",
      blocks: [
        {
          type: "paragraph",
          text: "Much of what we value can be expressed in money. A cup of rice costs twelve pesos. A Manila–Naga bus ticket costs a certain amount. We judge whether something is expensive or cheap, a bargain or a rip-off. These are {{economic value}} judgments.",
        },
        {
          type: "paragraph",
          text: "Yet to say that a cup of rice is expensive is not to make an ethical judgment. It says nothing about right or wrong, good or evil — it merely reports what things cost. Monetary valuation is real, but it is not ethical valuation.",
        },
      ],
    },
    {
      id: "aesthetics",
      heading: "Aesthetic valuation",
      blocks: [
        {
          type: "paragraph",
          text: "{{Aesthetics}} comes from the Greek aisthesis, meaning \"sense\" or \"feeling.\" It covers our approval or disapproval of what we see, hear, smell, or taste. We speak of \"taste in music\" and \"taste in clothes\"; we say that we like a movie or a song.",
        },
        {
          type: "paragraph",
          text: "These judgments of beauty and taste are aesthetic valuations. When we say a song is good or a dress is ugly, we are not yet speaking ethically. Aesthetic approval and disapproval concern our senses and feelings, not the moral rightness of an act.",
        },
      ],
    },
    {
      id: "technical",
      heading: "Technical valuation",
      blocks: [
        {
          type: "paragraph",
          text: "{{Technical}} valuation comes from the Greek techne, meaning skill or craft, and it judges the right or wrong way of doing something. In baking, the dry ingredients are mixed before the liquids. In basketball, a player may not travel more than two steps.",
        },
        {
          type: "paragraph",
          text: "To say that a baker did something the wrong way, or that a player travelled, is to make a technical judgment. The act is judged against a standard of correct procedure — not against a standard of right and wrong conduct.",
        },
      ],
    },
    {
      id: "etiquette",
      heading: "Etiquette",
      blocks: [
        {
          type: "paragraph",
          text: "{{Etiquette}} governs our relatively trivial approvals and disapprovals of manners and social form. We knock politely before entering an office rather than barging in. We say \"please.\" We do not pick our noses in public.",
        },
        {
          type: "paragraph",
          text: "Judgments of etiquette concern good manners and social grace. They are small matters of approval and disapproval — and they are not ethics.",
        },
      ],
    },
  ],
  keyTerms: [
    {
      slug: "value-judgment",
      term: "value judgment",
      definition:
        "A judgment that something is good or bad, right or wrong, beautiful or ugly, expensive or cheap — an evaluation of worth.",
    },
    {
      slug: "economic-value",
      term: "economic value",
      definition:
        "Value expressed in monetary terms, such as a cup of rice at twelve pesos or a Manila–Naga bus ticket; economic valuation is not ethical valuation.",
    },
    {
      slug: "aesthetics",
      term: "aesthetics",
      definition:
        "From the Greek aisthesis, \"sense\" or \"feeling\": approval or disapproval of what we see, hear, smell, or taste — \"taste in music,\" \"taste in clothes.\"",
    },
    {
      slug: "technical",
      term: "technical valuation",
      definition:
        "From the Greek techne: the right or wrong way of doing something, such as mixing dry ingredients before liquids in baking.",
    },
    {
      slug: "etiquette",
      term: "etiquette",
      definition:
        "Relatively trivial approval or disapproval of manners and social form — knocking politely, saying \"please,\" not picking one's nose in public.",
    },
  ],
  reflections: [
    {
      id: "l2-exp-1",
      group: "experience",
      text: "Look back at the judgments you made today — about a price, a song, a procedure, a display of manners. Classify each as economic, aesthetic, technical, or etiquette valuation.",
    },
    {
      id: "l2-asse-1",
      group: "assess",
      text: "Why is \"a cup of rice at twelve pesos\" not an ethical valuation? What would have to change for a valuation about it to become ethical?",
    },
    {
      id: "l2-asse-2",
      group: "assess",
      text: "A basketball player who takes more than two steps commits a technical violation. Could the same act ever be a moral matter? When, and why?",
    },
    {
      id: "l2-chal-1",
      group: "challenge",
      text: "Can a matter of taste — aesthetic, technical, or etiquette — ever become a moral matter? Construct an example in which it does, and defend it.",
    },
  ],
  quiz: [
    {
      id: "l2-q1",
      kind: "multiple-choice",
      prompt: "From which Greek word does \"aesthetics\" come, and what does it mean?",
      options: [
        "aisthesis — \"sense\" or \"feeling\"",
        "techne — \"craft\"",
        "ethos — \"character\"",
        "nomos — \"law\"",
      ],
      correctIndex: 0,
      explanation:
        "Aesthetics comes from the Greek aisthesis, meaning \"sense\" or \"feeling,\" and covers approval or disapproval of what we see, hear, smell, or taste.",
    },
    {
      id: "l2-q2",
      kind: "multiple-choice",
      prompt: "Which of the following is an ethical valuation?",
      options: [
        "This cup of rice is expensive at twelve pesos.",
        "The Manila–Naga bus ticket is a bargain.",
        "Stealing the cup of rice would be wrong.",
        "I like the way this rice tastes.",
      ],
      correctIndex: 2,
      explanation:
        "Judgments of price and taste are economic or aesthetic. Saying that stealing would be wrong judges an act as right or wrong — an ethical valuation.",
    },
    {
      id: "l2-q3",
      kind: "multiple-choice",
      prompt:
        "The basketball rule that a player may not travel more than two steps is an example of which kind of valuation?",
      options: ["Ethical", "Aesthetic", "Technical", "Etiquette"],
      correctIndex: 2,
      explanation:
        "Technical valuation, from the Greek techne, judges the right or wrong way of doing something — and the two-step rule is a standard of correct play.",
    },
    {
      id: "l2-q4",
      kind: "true-false",
      prompt: "Judgments of monetary value, such as the price of a bus ticket, are ethical valuations.",
      correct: false,
      explanation:
        "Monetary or economic valuation reports what things cost. It is real, but it is not ethical valuation.",
    },
    {
      id: "l2-q5",
      kind: "true-false",
      prompt:
        "Saying \"please\" and knocking politely before entering an office are matters of etiquette, not of ethics.",
      correct: true,
      explanation:
        "Etiquette covers relatively trivial approval and disapproval of manners — matters of social form rather than of right and wrong conduct.",
    },
    {
      id: "l2-q6",
      kind: "classification",
      prompt:
        "Given a statement, classify it as an ethical, aesthetic, technical, or etiquette valuation.",
      categoryLabel: "Valuation type",
      categories: ["Ethical", "Aesthetic", "Technical", "Etiquette"],
      correctIndex: 1,
      explanation:
        "\"The album is a masterpiece\" approves of what we hear — a matter of taste in music. It is an aesthetic valuation, not an ethical one.",
    },
    {
      id: "l2-q7",
      kind: "classification",
      prompt:
        "Given a statement, classify it as an ethical, aesthetic, technical, or etiquette valuation.",
      categoryLabel: "Valuation type",
      categories: ["Ethical", "Aesthetic", "Technical", "Etiquette"],
      correctIndex: 2,
      explanation:
        "\"The baker added the liquids first\" judges how something was done against a standard of correct procedure — a technical valuation.",
    },
    {
      id: "l2-q8",
      kind: "classification",
      prompt:
        "Given a statement, classify it as an ethical, aesthetic, technical, or etiquette valuation.",
      categoryLabel: "Valuation type",
      categories: ["Ethical", "Aesthetic", "Technical", "Etiquette"],
      correctIndex: 3,
      explanation:
        "Barging into an office without knocking breaches manners and social form — a relatively trivial approval or disapproval of etiquette.",
    },
    {
      id: "l2-q9",
      kind: "classification",
      prompt:
        "Given a statement, classify it as an ethical, aesthetic, technical, or etiquette valuation.",
      categoryLabel: "Valuation type",
      categories: ["Ethical", "Aesthetic", "Technical", "Etiquette"],
      correctIndex: 0,
      explanation:
        "Lying to cover up a theft judges an act as right or wrong in itself — an ethical valuation, the kind this lesson sets apart from the others.",
    },
    {
      id: "l2-q10",
      kind: "matching",
      prompt: "Match each kind of valuation with the judgment that belongs to it.",
      pairs: [
        { left: "Aesthetic", right: "The song is beautiful" },
        { left: "Technical", right: "Mix dry ingredients before liquids" },
        { left: "Etiquette", right: "Knock before entering an office" },
        { left: "Economic", right: "A cup of rice costs twelve pesos" },
      ],
      explanation:
        "Beauty is aesthetic (aisthesis); correct procedure is technical (techne); manners are etiquette; and price is economic — none of them ethical.",
    },
  ],
};
