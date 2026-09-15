import type { Lesson } from "@/lib/types";

export const unit3Lesson01: Lesson = {
  slug: "on-moral-conviction",
  number: 1,
  unit: 3,
  title: "On Moral Conviction",
  coverLine:
    "A taxi driver returned ₱260,000 in lost property. No reward was promised. Why did he do it?",
  summary:
    "Reggie Cabututan's honesty defines duty in deontology: doing the right thing because it is right, independent of reward or punishment.",
  learningOutcomes: [
    "Identify scenarios that confront the reader with duty.",
    "Describe the two common motives for doing the right thing — reward and punishment.",
    "Recognize that beneath those motives there's a sufficient one on its own: that it's simply the right thing to do.",
  ],
  think: [
    {
      id: "regie-cabututan",
      heading: "The honesty of Reggie Cabututan",
      blocks: [
        {
          type: "paragraph",
          text: "On January 24, 2017, Baguio City's mayor gave taxi driver Reggie Cabututan a certificate for \"extraordinary show of honesty in the performance of their duties.\" Three days earlier, an Australian passenger, Trent Shields — sleep-deprived and unwell — had left a suitcase in Reggie's cab containing a laptop, passport, and headphones worth roughly ₱260,000. At the moment Reggie discovered it, there was no promise of a reward from the city or the owner; selling the contents could have meaningfully supplemented a taxi driver's wages. He returned it anyway.",
        },
        {
          type: "paragraph",
          text: "The lesson uses this to define a {{reward}} precisely: not an entitlement, but something freely given and unrequired — if it were demanded, it would be a {{payment}} instead.",
        },
      ],
    },
    {
      id: "counterfactuals",
      heading: "What he could have told himself",
      blocks: [
        {
          type: "paragraph",
          text: "The lesson then walks the counterfactual both ways — what rationalizations Reggie *could* have used to justify keeping it (\"finders keepers, losers weepers,\" \"he was careless, he'll learn\") — to arrive at the idea that Reggie likely acted from a {{moral-conviction}}: a belief that doing the right thing is one's {{duty}}, independent of what it costs or gains. That's the chapter's working definition of {{duty}} in {{deontology}}.",
        },
      ],
    },
  ],
  keyTerms: [
    {
      slug: "deontology",
      term: "deontology",
      definition:
        "An ethical theory that judges the morality of an action based on whether it conforms to a moral rule or duty, independent of the action's consequences.",
    },
    {
      slug: "duty",
      term: "duty",
      definition:
        "Being obligated to do the right thing even when another course of action would benefit you more.",
    },
    {
      slug: "moral-conviction",
      term: "moral conviction",
      definition:
        "Holding it as a principle of action that doing the right thing is one's duty, regardless of reward or punishment.",
    },
    {
      slug: "reward",
      term: "reward",
      definition:
        "A freely given, unrequired gift for service or effort; ceases to be a reward and becomes a payment the moment it's demanded or expected.",
    },
    {
      slug: "payment",
      term: "payment",
      definition:
        "What a reward becomes the moment it is demanded or expected — an entitlement rather than a freely given gift.",
    },
  ],
  reflections: [
    {
      id: "u3l1-exp-1",
      group: "experience",
      text: "A classmate offers your friend a \"codigo\" (cheat sheet) for an upcoming math test. Your friend asks you: \"It'll raise my grade — what's wrong with using it?\" Set aside rewards and punishments and answer from moral conviction alone: what would you tell your friend, and what is your friend's duty here, in deontological terms?",
    },
    {
      id: "u3l1-asse-1",
      group: "assess",
      text: "Reflect on these everyday duty scenarios:\n1. Telling the truth (vs. blaming others for harm you caused)\n2. Keeping simple promises (returning borrowed things, honoring a parent's wish)\n3. Following rules (no jaywalking, submitting requirements on time, dress code)\nFor each, what does duty require, and how does it differ from what reward or punishment would suggest?",
    },
    {
      id: "u3l1-chal-1",
      group: "challenge",
      text: "Do I need those rewards, or need to avoid those punishments, just to do the right thing? What does it mean for me to do my duty, by just doing the right thing? / Ano ang kahulugan ng paggawa ng akin tungkulin, dahil tama itong gawin, at kaya naman hindi ko na kailangan ng gantimpala o parusa, upang gawin ito?",
    },
  ],
  quiz: [
    {
      id: "u3l1-q1",
      kind: "multiple-choice",
      prompt: "What did Reggie Cabututan do that earned him a certificate from the City Government of Baguio?",
      options: [
        "He returned a lost suitcase containing a laptop, passport, and headphones worth roughly ₱260,000",
        "He reported a crime he witnessed",
        "He helped an injured passenger",
        "He drove a passenger to the hospital in an emergency",
      ],
      correctIndex: 0,
      explanation:
        "Reggie Cabututan returned a suitcase left by Australian passenger Trent Shields containing items worth roughly ₱260,000, earning a certificate for extraordinary honesty.",
    },
    {
      id: "u3l1-q2",
      kind: "multiple-choice",
      prompt: "What kinds of rewards could Reggie have earned from returning the suitcase? Name two or three.",
      options: [
        "A certificate from the city, gratitude from the passenger, and possibly a monetary tip",
        "A promotion at work and a raise",
        "A scholarship for his children",
        "Free taxi license renewal for life",
      ],
      correctIndex: 0,
      explanation:
        "The lesson notes that Reggie could have received a certificate (which he did), gratitude from the owner, and possibly a monetary reward — all freely given, not demanded.",
    },
    {
      id: "u3l1-q3",
      kind: "multiple-choice",
      prompt: "Suppose Reggie wasn't primarily motivated by those rewards — what else could explain doing the right thing?",
      options: [
        "Moral conviction: a belief that doing the right thing is one's duty, regardless of reward or punishment",
        "Fear of being caught on camera",
        "Hope for a better tip next time",
        "Pressure from his taxi operator",
      ],
      correctIndex: 0,
      explanation:
        "The lesson defines moral conviction as holding it as a principle of action that doing the right thing is one's duty, independent of what it costs or gains.",
    },
    {
      id: "u3l1-q4",
      kind: "true-false",
      prompt:
        "A reward ceases to be a reward and becomes a payment the moment it's demanded or expected.",
      correct: true,
      explanation:
        "The lesson defines a reward as freely given and unrequired; if it were demanded, it would be a payment instead.",
    },
    {
      id: "u3l1-q5",
      kind: "multiple-choice",
      prompt: "Which of the following rationalizations could Reggie have used to justify keeping the suitcase?",
      options: [
        "\"Finders keepers, losers weepers\" and \"He was careless, he'll learn\"",
        "\"The law requires me to return it\" and \"My boss told me to\"",
        "\"I'll get a bigger reward if I wait\" and \"The police are watching\"",
        "\"It's not my problem\" and \"Someone else will return it\"",
      ],
      correctIndex: 0,
      explanation:
        "The lesson explicitly names these two rationalizations as counterfactuals Reggie could have told himself.",
    },
    {
      id: "u3l1-q6",
      kind: "true-false",
      prompt:
        "In deontology, duty means being obligated to do the right thing even when another course of action would benefit you more.",
      correct: true,
      explanation:
        "This is the lesson's working definition of duty in deontology — obligation independent of personal benefit.",
    },
    {
      id: "u3l1-q7",
      kind: "multiple-choice",
      prompt: "What is the lesson's working definition of moral conviction?",
      options: [
        "Holding it as a principle of action that doing the right thing is one's duty, regardless of reward or punishment",
        "A strong feeling that something is right",
        "Following the law because of fear of punishment",
        "Doing good only when someone is watching",
      ],
      correctIndex: 0,
      explanation:
        "Moral conviction is defined as the principle that doing the right thing is one's duty, independent of consequences.",
    },
    {
      id: "u3l1-q8",
      kind: "multiple-choice",
      prompt: "The classmate offers your friend a \"codigo\" for a math test. Your friend says: \"It'll raise my grade — what's wrong with using it?\" From a deontological view, what is your friend's duty?",
      options: [
        "Not to cheat, because cheating violates a duty to honesty and fairness regardless of the grade benefit",
        "To use the codigo since the grade matters more",
        "To ask the teacher for permission first",
        "To share the codigo with the whole class",
      ],
      correctIndex: 0,
      explanation:
        "Deontology holds that duty requires doing the right thing (not cheating) because it is right, not because of the reward (better grade) or punishment (getting caught).",
    },
    {
      id: "u3l1-q9",
      kind: "true-false",
      prompt:
        "The lesson lists telling the truth, keeping promises, and following rules as everyday scenarios where duty applies.",
      correct: true,
      explanation:
        "The EXPERIENCE section explicitly lists these three everyday duty scenarios for reflection.",
    },
    {
      id: "u3l1-q10",
      kind: "multiple-choice",
      prompt: "The closing question of the lesson is given in both English and Filipino. What does the Filipino version ask?",
      options: [
        "Ano ang kahulugan ng paggawa ng akin tungkulin, dahil tama itong gawin, at kaya naman hindi ko na kailangan ng gantimpala o parusa, upang gawin ito?",
        "Bakit kailangan nating sundin ang batas?",
        "Anong gagawin mo kung may regalo?",
        "Sino ang magdesisyon kung ano ang tama?",
      ],
      correctIndex: 0,
      explanation:
        "The lesson preserves the closing question in both languages as specified.",
    },
    {
      id: "u3l1-q11",
      kind: "matching",
      prompt: "Match each key term with its definition as used in this lesson.",
      pairs: [
        { left: "Deontology", right: "An ethical theory judging actions by conformity to duty, not consequences" },
        { left: "Duty", right: "Being obligated to do the right thing even when another course would benefit you more" },
        { left: "Moral conviction", right: "The principle that doing the right thing is one's duty, regardless of reward or punishment" },
        { left: "Reward", right: "A freely given, unrequired gift; becomes payment if demanded" },
      ],
      explanation:
        "These definitions come directly from the lesson's key terms and narrative.",
    },
    {
      id: "u3l1-q12",
      kind: "true-false",
      prompt:
        "The lesson uses the Reggie Cabututan case to introduce deontology by contrasting duty with reward/punishment motives.",
      correct: true,
      explanation:
        "The case illustrates that Reggie acted from moral conviction (duty) rather than for reward or fear of punishment.",
    },
    {
      id: "u3l1-q13",
      kind: "multiple-choice",
      prompt: "What was in the suitcase Trent Shields left in Reggie's cab?",
      options: [
        "A laptop, passport, and headphones worth roughly ₱260,000",
        "Cash worth ₱500,000",
        "Jewelry and travel documents",
        "A phone and wallet",
      ],
      correctIndex: 0,
      explanation:
        "The lesson specifies the suitcase contained a laptop, passport, and headphones worth roughly ₱260,000.",
    },
    {
      id: "u3l1-q14",
      kind: "true-false",
      prompt:
        "At the moment Reggie discovered the suitcase, there was a promised reward from the city government.",
      correct: false,
      explanation:
        "The lesson states there was no promise of a reward from the city or the owner at the moment Reggie discovered it.",
    },
    {
      id: "u3l1-q15",
      kind: "multiple-choice",
      prompt: "What date did the mayor of Baguio City give Reggie Cabututan the certificate?",
      options: ["January 24, 2017", "January 21, 2017", "February 1, 2017", "January 15, 2017"],
      correctIndex: 0,
      explanation:
        "The certificate was awarded on January 24, 2017, three days after the suitcase was returned.",
    },
    {
      id: "u3l1-q16",
      kind: "multiple-choice",
      prompt: "In the EXPERIENCE reflection, what scenario involves a classmate offering a \"codigo\"?",
      options: [
        "A math test cheat sheet scenario",
        "A science project plagiarism scenario",
        "A history essay copying scenario",
        "A language exam translation scenario",
      ],
      correctIndex: 0,
      explanation:
        "The EXPERIENCE reflection presents a classmate offering a \"codigo\" (cheat sheet) for an upcoming math test.",
    },
    {
      id: "u3l1-q17",
      kind: "true-false",
      prompt:
        "Selling the contents of the suitcase could have meaningfully supplemented a taxi driver's wages.",
      correct: true,
      explanation:
        "The lesson explicitly states that selling the contents could have meaningfully supplemented a taxi driver's wages.",
    },
    {
      id: "u3l1-q18",
      kind: "multiple-choice",
      prompt: "Which of the following is NOT one of the three everyday duty scenarios listed in the lesson?",
      options: [
        "Donating to charity anonymously",
        "Telling the truth (vs. blaming others for harm you caused)",
        "Keeping simple promises (returning borrowed things, honoring a parent's wish)",
        "Following rules (no jaywalking, submitting requirements on time, dress code)",
      ],
      correctIndex: 0,
      explanation:
        "The three scenarios are telling the truth, keeping promises, and following rules. Donating to charity is not listed.",
    },
    {
      id: "u3l1-q19",
      kind: "true-false",
      prompt:
        "The lesson's definition of duty in deontology depends on the consequences of the action.",
      correct: false,
      explanation:
        "Deontology defines duty as independent of consequences — doing the right thing because it is right, not because of what it gains or costs.",
    },
    {
      id: "u3l1-q20",
      kind: "matching",
      prompt: "Match each element of the Reggie Cabututan case with its detail.",
      pairs: [
        { left: "Regie Cabututan", right: "Taxi driver who returned the suitcase" },
        { left: "Trent Shields", right: "Australian passenger who left the suitcase" },
        { left: "January 24, 2017", right: "Date the mayor awarded the certificate" },
        { left: "₱260,000", right: "Approximate value of the suitcase contents" },
      ],
      explanation:
        "Reggie returned Trent's suitcase; the mayor awarded the certificate on January 24, 2017; the contents were worth roughly ₱260,000.",
    },
  ],
};