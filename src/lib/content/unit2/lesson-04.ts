import type { Lesson } from "@/lib/types";

export const unit2Lesson04: Lesson = {
  slug: "justice-and-rights",
  number: 4,
  unit: 2,
  title: "Justice and Rights",
  coverLine:
    "A right is a valid claim on society — and it must earn its keep by contributing to the general good.",
  summary:
    "Mill's utilitarian account of rights: rights as valid claims on society, justified by the happiness they serve — extended even to animals.",
  learningOutcomes: [
    "Understand utilitarianism's understanding of rights.",
    "Situate rights in relation to justice.",
    "Apply this understanding of rights and justice.",
  ],
  think: [
    {
      id: "rights",
      heading: "Rights as valid claims",
      blocks: [
        {
          type: "paragraph",
          text: "Mill understands justice as a respect for rights directed toward society's pursuit of the greatest happiness of the greatest number. For him, rights are a {{right-as-a-valid-claim-on-society}} and are justified by utility.",
        },
        {
          type: "paragraph",
          text: "Mill explains that a right resides in the injured person, treated as one of the forms in which the other two elements — the idea and sentiment — clothe themselves: a hurt to some assignable person or persons on the one hand, and a demand for punishment on the other. When we speak of violation of a right we mean a person has a valid claim on society to protect him in the possession of it, either by the force of law or by that of education and opinion.",
        },
        {
          type: "paragraph",
          text: "The rights referred to are related to the interests that serve general happiness. The right to due process, the right to free speech or religion among others are justified because they contribute to the general good: society is made happier if its citizens are able to live their lives knowing that their interests are protected, and society as a whole defends it.",
        },
      ],
    },
    {
      id: "animals",
      heading: "Rights for animals",
      blocks: [
        {
          type: "paragraph",
          text: "Mill extends this concept to animals — they have rights because of the effect of instituting and protecting their interests. It is not accidental that utilitarians are also the staunchest defenders of animal rights.",
        },
        {
          type: "paragraph",
          text: "A right is justifiable on utilitarian principles inasmuch as it produces an overall happiness greater than the unhappiness resulting from its implementation.",
        },
      ],
    },
  ],
  keyTerms: [
    {
      slug: "right-as-a-valid-claim-on-society",
      term: "right as a valid claim on society",
      definition:
        "Mill's account of a right: a person has a valid claim on society to protect him in the possession of it, either by the force of law or by education and opinion; such claims are justified by the utility they serve.",
    },
  ],
  reflections: [
    {
      id: "u2l4-exp-1",
      group: "experience",
      text: "Think of a right you hold — to speak, to practice your religion, or to a fair trial. Who protects it, and why does society defend it?",
    },
    {
      id: "u2l4-asse-1",
      group: "assess",
      text: "According to Mill, why are rights like due process and free speech justified, even though they belong to individuals?",
    },
    {
      id: "u2l4-chal-1",
      group: "challenge",
      text: "Mill says utilitarians are the staunchest defenders of animal rights because protecting animals' interests serves general happiness. Do you agree that rights can be extended to animals on utilitarian grounds?",
    },
  ],
  quiz: [
    {
      id: "u2l4-q1",
      kind: "multiple-choice",
      prompt: "How does Mill define a right?",
      options: [
        "A valid claim on society to protect the person in the possession of it",
        "A gift granted by the sovereign",
        "An interest that can never be overridden",
        "A privilege enjoyed only by the majority",
      ],
      correctIndex: 0,
      explanation:
        "When we speak of the violation of a right, Mill means a person has a valid claim on society to protect him in the possession of it, by force of law or by education and opinion.",
    },
    {
      id: "u2l4-q2",
      kind: "true-false",
      prompt:
        "For Mill, rights are justified by utility — they contribute to the general happiness.",
      correct: true,
      explanation:
        "Rights like due process, free speech, and religion are justified because they contribute to the general good; society is happier when interests are protected.",
    },
    {
      id: "u2l4-q3",
      kind: "true-false",
      prompt:
        "According to the lesson, Mill extends rights to animals because instituting and protecting their interests has an effect on overall happiness.",
      correct: true,
      explanation:
        "The lesson states Mill extends rights to animals because of the effect of instituting and protecting their interests, and that utilitarians are the staunchest defenders of animal rights.",
    },
    {
      id: "u2l4-q4",
      kind: "multiple-choice",
      prompt: "When is a right justifiable on utilitarian principles?",
      options: [
        "When it produces an overall happiness greater than the unhappiness resulting from its implementation",
        "When it never produces any unhappiness",
        "When it protects only the interests of the majority",
        "When it is guaranteed by law alone",
      ],
      correctIndex: 0,
      explanation:
        "The lesson's closing formulation: a right is justifiable inasmuch as it produces an overall happiness greater than the unhappiness resulting from its implementation.",
    },
    {
      id: "u2l4-q5",
      kind: "multiple-choice",
      prompt: "How does Mill understand justice?",
      options: [
        "As a respect for rights directed toward society's pursuit of the greatest happiness of the greatest number",
        "As the will of the majority",
        "As whatever the law says",
        "As retribution for wrongs",
      ],
      correctIndex: 0,
      explanation:
        "Mill understands justice as a respect for rights directed toward society's pursuit of the greatest happiness of the greatest number.",
    },
    {
      id: "u2l4-q6",
      kind: "multiple-choice",
      prompt: "Where does a right reside, according to Mill?",
      options: ["In the injured person", "In the state", "In the law books", "In public opinion"],
      correctIndex: 0,
      explanation:
        "Mill explains that a right resides in the injured person, treated as one of the forms in which the other two elements — the idea and sentiment — clothe themselves.",
    },
    {
      id: "u2l4-q7",
      kind: "multiple-choice",
      prompt: "A right is one of the forms in which which two elements clothe themselves?",
      options: ["The idea and the sentiment", "Pleasure and pain", "Law and opinion", "Justice and utility"],
      correctIndex: 0,
      explanation:
        "The lesson says a right resides in the injured person, treated as one of the forms in which the other two elements — the idea and sentiment — clothe themselves.",
    },
    {
      id: "u2l4-q8",
      kind: "multiple-choice",
      prompt:
        "Mill says the idea and sentiment clothe themselves in two forms: a hurt to some assignable person or persons, and:",
      options: ["a demand for punishment", "a demand for compensation", "a public apology", "a written law"],
      correctIndex: 0,
      explanation:
        "The two forms are a hurt to some assignable person or persons on the one hand, and a demand for punishment on the other.",
    },
    {
      id: "u2l4-q9",
      kind: "true-false",
      prompt: "A right is protected either by the force of law or by that of education and opinion.",
      correct: true,
      explanation:
        "Mill says a violation of a right means a person has a valid claim on society to protect him in its possession, either by the force of law or by that of education and opinion.",
    },
    {
      id: "u2l4-q10",
      kind: "multiple-choice",
      prompt:
        "Which rights does the lesson name as justified because they contribute to the general good?",
      options: ["Due process, free speech, and religion", "Property and inheritance", "Voting and taxes", "Privacy and leisure"],
      correctIndex: 0,
      explanation:
        "The lesson names the right to due process, the right to free speech or religion, among others, as justified because they contribute to the general good.",
    },
    {
      id: "u2l4-q11",
      kind: "true-false",
      prompt:
        "Society is made happier if its citizens are able to live their lives knowing that their interests are protected.",
      correct: true,
      explanation:
        "The lesson states that society is made happier if its citizens can live knowing their interests are protected, and society as a whole defends them.",
    },
    {
      id: "u2l4-q12",
      kind: "multiple-choice",
      prompt: "Why does the lesson say Mill extends rights to animals?",
      options: [
        "Because of the effect of instituting and protecting their interests",
        "Because animals can file claims",
        "Because animals are legal persons",
        "Because the law requires it",
      ],
      correctIndex: 0,
      explanation:
        "Mill extends the concept of rights to animals because of the effect of instituting and protecting their interests.",
    },
    {
      id: "u2l4-q13",
      kind: "multiple-choice",
      prompt:
        "What does the lesson mean by \"it is not accidental that utilitarians are also the staunchest defenders of animal rights\"?",
      options: [
        "Rights for animals follow from the utilitarian account of rights as serving general happiness",
        "Utilitarians are sentimentalists",
        "Utilitarians dislike human beings",
        "It is a mere coincidence",
      ],
      correctIndex: 0,
      explanation:
        "Because rights are justified by the happiness they produce, extending protection to animals' interests follows naturally from utilitarian principles.",
    },
    {
      id: "u2l4-q14",
      kind: "true-false",
      prompt:
        "For Mill, a right is an absolute guarantee that can never be overridden by the general good.",
      correct: false,
      explanation:
        "Rights are justified by the utility they serve — a right is justifiable when it produces more overall happiness than unhappiness, so it is not an absolute guarantee.",
    },
    {
      id: "u2l4-q15",
      kind: "multiple-choice",
      prompt: "Which best describes the utilitarian justification of rights like free speech?",
      options: [
        "They contribute to the general good — society is happier when interests are protected",
        "They are natural and need no justification",
        "They come from divine command",
        "They exist only in written constitutions",
      ],
      correctIndex: 0,
      explanation:
        "Rights like free speech are justified because they contribute to the general good: society is happier when its citizens know their interests are protected.",
    },
    {
      id: "u2l4-q16",
      kind: "true-false",
      prompt: "The rights Mill refers to are related to the interests that serve general happiness.",
      correct: true,
      explanation:
        "The lesson states that the rights referred to are related to the interests that serve general happiness.",
    },
    {
      id: "u2l4-q17",
      kind: "multiple-choice",
      prompt:
        "The violation of a right means a person has a valid claim on society to protect him in its possession — by what two means?",
      options: [
        "By the force of law, or by education and opinion",
        "By the police, or by the courts",
        "By the family, or by the church",
        "By money, or by votes",
      ],
      correctIndex: 0,
      explanation:
        "Mill says society protects the claim either by the force of law or by that of education and opinion.",
    },
    {
      id: "u2l4-q18",
      kind: "true-false",
      prompt: "According to Mill, rights are justified by utility.",
      correct: true,
      explanation:
        "For Mill, rights are valid claims on society and are justified by utility — they serve the general happiness.",
    },
    {
      id: "u2l4-q19",
      kind: "multiple-choice",
      prompt:
        "What does the extension of rights to animals show about utilitarianism's account of rights?",
      options: [
        "Rights can be justified by the happiness they produce, even beyond human beings",
        "Rights belong only to human beings",
        "Rights are granted by the sovereign",
        "Rights are fixed and unchanging",
      ],
      correctIndex: 0,
      explanation:
        "If rights are justified by the happiness they serve, they can extend even to animals — which is why utilitarians are staunch defenders of animal rights.",
    },
    {
      id: "u2l4-q20",
      kind: "matching",
      prompt: "Match each phrase with the claim it belongs to.",
      pairs: [
        { left: "A valid claim on society to protect the person in its possession", right: "Mill's definition of a right" },
        { left: "A hurt to an assignable person, and a demand for punishment", right: "The two forms in which the idea and sentiment clothe themselves" },
        { left: "By the force of law, or by education and opinion", right: "How a right is protected" },
        { left: "It produces overall happiness greater than the unhappiness from its implementation", right: "When a right is justifiable on utilitarian principles" },
      ],
      explanation:
        "Mill defines a right as a valid claim on society, protected by law or by education and opinion; the idea and sentiment clothe themselves in a hurt to an assignable person and a demand for punishment; and a right is justifiable when its happiness outweighs its unhappiness.",
    },
  ],
};
