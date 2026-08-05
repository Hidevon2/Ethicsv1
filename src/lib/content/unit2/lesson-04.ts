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
  ],
};
