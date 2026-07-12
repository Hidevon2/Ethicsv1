import { Chapter, Question } from "@/types";

export const chapters: Chapter[] = [
  {
    id: 0,
    title: "Foundations of Ethical Thought",
    philosopher: "Various",
    dates: "Ancient–Modern",
    summary:
      "An introduction to the fundamental questions and frameworks that define the study of ethics, including the three major approaches that have shaped Western moral philosophy.",
    sections: [
      {
        heading: "What Is Ethics?",
        paragraphs: [
          "Ethics, from the Greek word ethos meaning character or custom, is the systematic study of how human beings ought to live. It examines questions of right and wrong, virtue and vice, justice and injustice. Unlike law, which is codified and enforced by institutions, ethics dwells in the domain of moral reasoning — the principles by which we judge actions, intentions, and character.",
          "Every human society has grappled with ethical questions: What does it mean to live well? What do we owe to one another? When is an action justified? These questions are inescapable, arising in our personal relationships, our professional lives, and our roles as citizens.",
        ],
      },
      {
        heading: "Core Questions of Ethics",
        paragraphs: [
          "Ethics grapples with several core questions that have occupied thinkers for millennia. The question of the good life asks what constitutes genuine human flourishing — is it pleasure, knowledge, virtue, or some combination? The question of right action asks how we ought to treat others and what principles should guide our conduct. The question of character asks what kind of person one should strive to become.",
          "These questions are interconnected. How we answer the question of the good life shapes our understanding of right action, and both inform our conception of virtue. Ethics is thus a holistic discipline, concerned with the entirety of human experience and aspiration.",
        ],
      },
      {
        heading: "Three Major Ethical Approaches",
        paragraphs: [
          "Western ethical thought has been shaped by three major frameworks. Virtue ethics, originating with Aristotle, focuses on character: the question is not 'What should I do?' but 'What kind of person should I become?' Virtue ethics emphasizes the cultivation of character traits — courage, temperance, justice, wisdom — that enable human flourishing.",
          "Deontological ethics, articulated most powerfully by Immanuel Kant, focuses on duty and universal moral rules. Actions are right or wrong in themselves, regardless of their consequences. Kant's categorical imperative commands us to act only according to principles that could be universal laws, and always to treat humanity as an end, never merely as a means.",
          "Consequentialism, particularly utilitarianism as developed by Jeremy Bentham and John Stuart Mill, judges actions by their outcomes. The right action is the one that produces the greatest overall good. This framework requires impartial consideration of everyone's interests, demanding that we weigh benefits and harms without favoritism.",
        ],
      },
      {
        heading: "Why Study Ethics?",
        paragraphs: [
          "Studying ethics sharpens our ability to reason about moral questions, reveals the assumptions underlying our judgments, and exposes us to perspectives that challenge our own. It does not provide easy answers but equips us with the tools to think more clearly and consistently about how we ought to live.",
          "In an age of complex global challenges — from climate change to artificial intelligence to social justice — ethical reasoning is more important than ever. The study of ethics prepares us not only for personal moral decisions but for engaged citizenship in a diverse and interconnected world.",
        ],
      },
    ],
    questions: [
      {
        id: 0,
        question: "What is the Greek word from which 'ethics' is derived, and what does it mean?",
        options: [
          "Ethikos — meaning moral judgment",
          "Ethos — meaning character or custom",
          "Eidos — meaning form or idea",
          "Ethnos — meaning people or nation",
        ],
        correctIndex: 1,
        explanation:
          "The word 'ethics' derives from the Greek 'ethos,' meaning character or custom. This origin reminds us that ethics is concerned not merely with discrete decisions but with the kind of person one becomes through habitual action.",
      },
      {
        id: 1,
        question: "Which ethical framework asks 'What kind of person should I become?' rather than 'What should I do?'",
        options: [
          "Deontological ethics",
          "Consequentialism",
          "Virtue ethics",
          "Utilitarianism",
        ],
        correctIndex: 2,
        explanation:
          "Virtue ethics, originating with Aristotle, focuses on character and asks what kind of person one should become, emphasizing the cultivation of virtues such as courage, temperance, justice, and wisdom.",
      },
      {
        id: 2,
        question: "According to the text, which of the following is a core question of ethics?",
        options: [
          "What is the most efficient economic system?",
          "What constitutes genuine human flourishing?",
          "What is the nature of physical reality?",
          "How do languages develop over time?",
        ],
        correctIndex: 1,
        explanation:
          "A core question of ethics asks what constitutes genuine human flourishing — the good life. This question is fundamental to understanding how we ought to live and what ends are worth pursuing.",
      },
      {
        id: 3,
        question: "Immanuel Kant's deontological ethics judges actions based on:",
        options: [
          "Their consequences and outcomes",
          "Their conformity to universal moral rules and duty",
          "The character of the person performing them",
          "The cultural context in which they occur",
        ],
        correctIndex: 1,
        explanation:
          "Kant's deontological ethics judges actions as right or wrong in themselves based on their conformity to universal moral rules and duty, regardless of consequences.",
      },
      {
        id: 4,
        question: "What does the categorical imperative command according to Kant?",
        options: [
          "Always act to maximize happiness",
          "Act only on principles that could become universal laws",
          "Follow the example of virtuous role models",
          "Obey the laws of your country",
        ],
        correctIndex: 1,
        explanation:
          "Kant's categorical imperative commands us to act only according to principles that could become universal laws, ensuring consistency and impartiality in moral reasoning.",
      },
      {
        id: 5,
        question: "Which framework judges actions by their outcomes and seeks to produce the greatest overall good?",
        options: [
          "Virtue ethics",
          "Deontological ethics",
          "Consequentialism / Utilitarianism",
          "Natural law theory",
        ],
        correctIndex: 2,
        explanation:
          "Consequentialism, particularly utilitarianism, judges actions by their outcomes. The right action is the one that produces the greatest overall good for the greatest number.",
      },
      {
        id: 6,
        question: "According to the chapter, studying ethics helps us to:",
        options: [
          "Memorize a set of moral rules",
          "Win arguments about moral questions",
          "Think more clearly and consistently about how we ought to live",
          "Achieve perfect moral certainty",
        ],
        correctIndex: 2,
        explanation:
          "Studying ethics sharpens our ability to reason about moral questions and equips us with tools to think more clearly about how we ought to live, though it does not provide easy answers.",
      },
      {
        id: 7,
        question: "Unlike law, ethics is primarily concerned with:",
        options: [
          "Codified rules enforced by governing institutions",
          "Moral reasoning and principles for judging actions and character",
          "Economic efficiency and resource allocation",
          "Empirical observation of human behavior",
        ],
        correctIndex: 1,
        explanation:
          "While law consists of codified rules enforced by institutions, ethics dwells in the domain of moral reasoning — the principles by which we judge actions, intentions, and character.",
      },
      {
        id: 8,
        question: "The three major Western ethical frameworks are virtue ethics, deontological ethics, and:",
        options: [
          "Care ethics",
          "Consequentialism",
          "Relativism",
          "Contractarianism",
        ],
        correctIndex: 1,
        explanation:
          "The three major Western ethical frameworks are virtue ethics (character), deontological ethics (duty), and consequentialism (outcomes).",
      },
      {
        id: 9,
        question: "Why does the text argue ethics is particularly important today?",
        options: [
          "Because people are less moral than in the past",
          "Because technology has eliminated ethical dilemmas",
          "Because complex global challenges require ethical reasoning",
          "Because most people have never studied philosophy",
        ],
        correctIndex: 2,
        explanation:
          "In an age of complex global challenges from climate change to artificial intelligence, ethical reasoning is more important than ever for personal decisions and engaged citizenship.",
      },
    ],
  },
  {
    id: 1,
    title: "Aristotle & Virtue Ethics",
    philosopher: "Aristotle",
    dates: "384–322 BCE",
    summary:
      "Aristotle's virtue ethics centers on eudaimonia (flourishing), the development of moral character through habit, and the doctrine of the golden mean as the path to virtuous action.",
    sections: [
      {
        heading: "Eudaimonia: The Goal of Human Life",
        paragraphs: [
          "For Aristotle, the highest human good is eudaimonia — often translated as happiness, but better understood as flourishing or living well. Eudaimonia is not a feeling or emotional state but an activity of the soul in accordance with virtue over a complete life. It is the ultimate end for which all other things are pursued.",
          "Aristotle argues that the distinctive function of human beings is rational activity. Just as a good harpist performs the function of harp-playing well, a good human being performs the function of being human well — that is, through reason-guided activity. Eudaimonia consists in this excellent performance of our distinctive human capacity.",
        ],
      },
      {
        heading: "Virtue and the Golden Mean",
        paragraphs: [
          "Virtue, or arete, is excellence of character. Aristotle defines moral virtue as a disposition to choose the mean between two extremes — excess and deficiency. This is the famous doctrine of the golden mean. For example, courage is the mean between cowardice (deficiency) and recklessness (excess). Generosity is the mean between stinginess and profligacy.",
          "The golden mean is not a mathematical midpoint but a relative concept, determined by practical wisdom (phronesis). What counts as moderate depends on the person, the situation, and the circumstances. Phronesis is the intellectual virtue that enables us to discern the appropriate response in each particular situation.",
        ],
      },
      {
        heading: "The Cultivation of Character",
        paragraphs: [
          "Aristotle emphasizes that virtue is not innate but developed through practice and habituation. We become just by performing just actions, temperate by performing temperate actions, courageous by performing courageous actions. Character is formed through repeated choice and action, gradually shaping our dispositions until virtuous conduct becomes second nature.",
          "This process requires moral education within a community that models and rewards virtue. Aristotle insists that we are not born virtuous but born with the capacity to become virtuous, a potential that must be actualized through proper upbringing, good habits, and the guidance of wise mentors.",
        ],
      },
    ],
    questions: [
      {
        id: 0,
        question: "What does Aristotle's term 'eudaimonia' best translate to?",
        options: [
          "Pleasure or sensory enjoyment",
          "Flourishing or living well",
          "Moral duty",
          "Divine grace",
        ],
        correctIndex: 1,
        explanation:
          "Eudaimonia is best understood as flourishing or living well — not a momentary feeling but an activity of the soul in accordance with virtue over a complete life.",
      },
      {
        id: 1,
        question: "According to Aristotle, what is the distinctive function of human beings?",
        options: [
          "To pursue pleasure",
          "To engage in rational activity",
          "To live in communities",
          "To reproduce and survive",
        ],
        correctIndex: 1,
        explanation:
          "Aristotle argues that the distinctive function of human beings is rational activity. Eudaimonia consists in performing this function excellently through reason-guided activity.",
      },
      {
        id: 2,
        question: "What is Aristotle's doctrine of the golden mean?",
        options: [
          "A mathematical formula for moral calculation",
          "The idea that virtue lies between two extremes of excess and deficiency",
          "The principle that everyone deserves equal wealth",
          "The belief that happiness is found in moderation of all desires",
        ],
        correctIndex: 1,
        explanation:
          "The golden mean is the idea that virtue is a disposition to choose the mean between two extremes — excess and deficiency, as determined by practical wisdom.",
      },
      {
        id: 3,
        question: "What is the virtue that lies between cowardice and recklessness?",
        options: [
          "Temperance",
          "Justice",
          "Courage",
          "Prudence",
        ],
        correctIndex: 2,
        explanation:
          "Courage is the golden mean between the extremes of cowardice (deficiency of confidence) and recklessness (excess of confidence).",
      },
      {
        id: 4,
        question: "What is phronesis?",
        options: [
          "The science of physics",
          "Practical wisdom that discerns the appropriate response in each situation",
          "The study of philosophical texts",
          "A type of logical argument",
        ],
        correctIndex: 1,
        explanation:
          "Phronesis is practical wisdom — the intellectual virtue that enables us to discern what is appropriate in each particular situation, including where the golden mean lies.",
      },
      {
        id: 5,
        question: "How does Aristotle believe virtue is developed?",
        options: [
          "Through divine revelation",
          "Through reading philosophical works",
          "Through practice and habituation — performing virtuous actions repeatedly",
          "Through rational analysis alone",
        ],
        correctIndex: 2,
        explanation:
          "Aristotle emphasizes that virtue is developed through practice and habituation. We become just by performing just actions, courageous by performing courageous actions.",
      },
      {
        id: 6,
        question: "What is 'arete' in Aristotle's philosophy?",
        options: [
          "A type of government",
          "The ultimate pleasure",
          "Excellence or virtue of character",
          "The afterlife",
        ],
        correctIndex: 2,
        explanation:
          "Arete is excellence or virtue of character — the disposition to choose the mean between extremes and to act in accordance with right reason.",
      },
      {
        id: 7,
        question: "What role does community play in Aristotle's virtue ethics?",
        options: [
          "Community is irrelevant to individual moral development",
          "Community provides the laws that define right and wrong",
          "Community models and rewards virtue, providing moral education",
          "Community exists only to protect individual rights",
        ],
        correctIndex: 2,
        explanation:
          "Aristotle insists that moral development requires a community that models and rewards virtue, providing proper upbringing, good habits, and guidance from wise mentors.",
      },
      {
        id: 8,
        question: "According to Aristotle, the golden mean for a given virtue is:",
        options: [
          "Always exactly halfway between two extremes",
          "Determined by practical wisdom considering the person and situation",
          "The same for all people in all circumstances",
          "Based on majority opinion",
        ],
        correctIndex: 1,
        explanation:
          "The golden mean is not a mathematical midpoint but is determined by practical wisdom (phronesis), considering the person, situation, and circumstances.",
      },
      {
        id: 9,
        question: "Aristotle compares human excellence to:",
        options: [
          "A machine functioning efficiently",
          "A harpist performing well",
          "A king ruling wisely",
          "An artist creating beauty",
        ],
        correctIndex: 1,
        explanation:
          "Aristotle argues that just as a good harpist performs the function of harp-playing well, a good human being performs the function of being human well through reason-guided activity.",
      },
    ],
  },
  {
    id: 2,
    title: "Immanuel Kant & Deontological Ethics",
    philosopher: "Immanuel Kant",
    dates: "1724–1804",
    summary:
      "Kant's deontological ethics centers on the categorical imperative, duty as the foundation of morality, and the principle that human beings must always be treated as ends in themselves, never merely as means.",
    sections: [
      {
        heading: "Duty and the Good Will",
        paragraphs: [
          "For Kant, the only thing good without qualification is a good will. A person of good will acts not from inclination or self-interest but from duty. Kant distinguishes between actions done in accordance with duty (merely following the rules) and actions done from duty (motivated by recognition of moral obligation). Only the latter has genuine moral worth.",
          "Consider the shopkeeper who gives fair change. If she does so to protect her reputation, her action accords with duty but has no moral worth. If she gives fair change because she recognizes it as her duty, her action has moral worth. The difference lies in the motive, not the action itself.",
        ],
      },
      {
        heading: "The Categorical Imperative",
        paragraphs: [
          "Kant's categorical imperative is the supreme principle of morality. Unlike hypothetical imperatives (if you want X, do Y), the categorical imperative commands unconditionally. Kant offers several formulations of this principle. The Formula of Universal Law commands: 'Act only according to that maxim whereby you can at the same time will that it should become a universal law.'",
          "The Formula of Humanity commands: 'Act in such a way that you treat humanity, whether in your own person or in the person of any other, always at the same time as an end and never merely as a means.' This formulation grounds human dignity and the fundamental respect we owe to all rational beings.",
        ],
      },
      {
        heading: "Autonomy and the Kingdom of Ends",
        paragraphs: [
          "Kant argues that morality presupposes freedom. To be moral agents, we must be autonomous — capable of giving the moral law to ourselves rather than simply following external commands. Autonomy is the capacity of rational beings to legislate the moral law for themselves and to obey it out of respect for duty.",
          "The ideal community of rational beings living under moral law is what Kant calls the Kingdom of Ends. In this kingdom, each member is both sovereign (giving the law) and subject (bound by the law). This vision of mutual respect and self-governance remains one of Kant's most inspiring contributions to ethical thought.",
        ],
      },
    ],
    questions: [
      {
        id: 0,
        question: "According to Kant, what is the only thing good without qualification?",
        options: [
          "Happiness",
          "Pleasure",
          "A good will",
          "Intelligence",
        ],
        correctIndex: 2,
        explanation:
          "Kant argues that a good will is the only thing good without qualification. All other goods — happiness, wealth, intelligence — can be used badly, but a good will is good in itself.",
      },
      {
        id: 1,
        question: "What distinguishes an action done from duty from an action merely in accordance with duty?",
        options: [
          "The outcome of the action",
          "The motive of the agent",
          "The difficulty of the action",
          "The approval of others",
        ],
        correctIndex: 1,
        explanation:
          "Actions done from duty are motivated by recognition of moral obligation, while actions merely in accordance with duty follow the rules but for other motives like self-interest.",
      },
      {
        id: 2,
        question: "The Formula of Universal Law commands us to:",
        options: [
          "Always act to maximize happiness",
          "Act only on maxims that could become universal laws",
          "Follow the example of virtuous people",
          "Obey the commands of legitimate authority",
        ],
        correctIndex: 1,
        explanation:
          "The Formula of Universal Law commands: 'Act only according to that maxim whereby you can at the same time will that it should become a universal law.'",
      },
      {
        id: 3,
        question: "The Formula of Humanity commands us to:",
        options: [
          "Always pursue the greatest good for the greatest number",
          "Treat humanity always as an end and never merely as a means",
          "Develop our talents to the fullest extent",
          "Live in harmony with nature",
        ],
        correctIndex: 1,
        explanation:
          "The Formula of Humanity commands us to treat humanity, whether in ourselves or others, always as an end and never merely as a means, grounding human dignity.",
      },
      {
        id: 4,
        question: "What is a hypothetical imperative?",
        options: [
          "A command that applies unconditionally to all rational beings",
          "A conditional command: if you want X, do Y",
          "A moral rule derived from religious teaching",
          "A principle that admits of exceptions",
        ],
        correctIndex: 1,
        explanation:
          "A hypothetical imperative is a conditional command ('If you want X, do Y'), unlike the categorical imperative which commands unconditionally.",
      },
      {
        id: 5,
        question: "What does Kant mean by autonomy?",
        options: [
          "The ability to do whatever one wants",
          "The capacity to give the moral law to oneself",
          "Independence from all social constraints",
          "Freedom from physical coercion",
        ],
        correctIndex: 1,
        explanation:
          "Autonomy is the capacity of rational beings to give the moral law to themselves and to obey it out of respect for duty, rather than following external commands.",
      },
      {
        id: 6,
        question: "What is Kant's Kingdom of Ends?",
        options: [
          "An afterlife where virtuous people are rewarded",
          "A political utopia with perfect laws",
          "An ideal community of rational beings living under moral law",
          "The final stage of historical development",
        ],
        correctIndex: 2,
        explanation:
          "The Kingdom of Ends is Kant's vision of an ideal community where each member is both sovereign (giving the law) and subject (bound by the law), united by mutual respect.",
      },
      {
        id: 7,
        question: "Kant would say that lying is wrong because:",
        options: [
          "It usually leads to bad consequences",
          "A universal law permitting lies would be self-defeating",
          "It damages the liar's character",
          "It violates social conventions",
        ],
        correctIndex: 1,
        explanation:
          "Kant argues lying is wrong because a universal law permitting lying would be self-defeating — if everyone lied, trust and communication would collapse, making lying impossible.",
      },
      {
        id: 8,
        question: "What grounds human dignity in Kant's ethics?",
        options: [
          "Our capacity for pleasure and pain",
          "Our rational nature and capacity for autonomy",
          "Our creation by a divine being",
          "Our membership in a political community",
        ],
        correctIndex: 1,
        explanation:
          "For Kant, human dignity is grounded in our rational nature and capacity for autonomy — our ability to give the moral law to ourselves and act from duty.",
      },
      {
        id: 9,
        question: "According to Kant, an action has moral worth when it is performed:",
        options: [
          "With good consequences",
          "From duty and respect for the moral law",
          "With feelings of sympathy or compassion",
          "In accordance with social expectations",
        ],
        correctIndex: 1,
        explanation:
          "An action has moral worth only when performed from duty and respect for the moral law, not from inclination, self-interest, or even sympathy.",
      },
    ],
  },
  {
    id: 3,
    title: "John Stuart Mill & Utilitarianism",
    philosopher: "John Stuart Mill",
    dates: "1806–1873",
    summary:
      "Mill's utilitarianism refines Bentham's greatest happiness principle by distinguishing higher and lower pleasures, advocating for individual liberty, and developing rule utilitarianism as a practical moral framework.",
    sections: [
      {
        heading: "The Greatest Happiness Principle",
        paragraphs: [
          "Utilitarianism, as developed by Jeremy Bentham and refined by John Stuart Mill, holds that actions are right in proportion as they tend to promote happiness and wrong as they tend to produce unhappiness. This is the greatest happiness principle, also known as the principle of utility. Happiness is identified with pleasure and the absence of pain.",
          "Mill insists that utilitarianism is not a crude hedonism. He distinguishes between higher pleasures of the mind (intellectual, aesthetic, moral) and lower pleasures of the body. A person who has experienced both will prefer the higher pleasures, even if they are accompanied by discomfort. 'It is better to be a human being dissatisfied than a pig satisfied.'",
        ],
      },
      {
        heading: "Quality Over Quantity",
        paragraphs: [
          "Mill's crucial innovation was to introduce qualitative distinctions among pleasures. Bentham had treated all pleasures as commensurable, differing only in intensity and duration. Mill argues that some pleasures are intrinsically superior to others. Competent judges — those who have experienced both kinds of pleasure — consistently prefer higher pleasures.",
          "This qualitative distinction rescues utilitarianism from the objection that it is a 'doctrine worthy only of swine.' Mill maintains that the happiness of human beings is more complex and valuable than that of animals because human capacities for thought, emotion, and social engagement are more developed.",
        ],
      },
      {
        heading: "Liberty and Rule Utilitarianism",
        paragraphs: [
          "Mill's On Liberty argues that individual freedom should be restricted only to prevent harm to others. This harm principle is itself grounded in utilitarian reasoning: free inquiry and experimentation with ways of living promote human flourishing and social progress. A society that suppresses individuality stagnates.",
          "Mill developed rule utilitarianism, which holds that we should follow general rules that tend to promote happiness, even if particular actions might produce more happiness by violating them. This approach addresses common objections to act utilitarianism, such as whether we should punish an innocent person if it would maximize overall happiness.",
        ],
      },
    ],
    questions: [
      {
        id: 0,
        question: "What is the central principle of utilitarianism?",
        options: [
          "Always act according to universal moral rules",
          "The greatest happiness for the greatest number",
          "Follow the example of virtuous role models",
          "Respect the rights of all individuals",
        ],
        correctIndex: 1,
        explanation:
          "The greatest happiness principle holds that actions are right in proportion as they promote happiness and wrong as they tend to produce unhappiness.",
      },
      {
        id: 1,
        question: "How did Mill distinguish higher pleasures from lower pleasures?",
        options: [
          "Higher pleasures last longer",
          "Higher pleasures are intellectual, aesthetic, or moral, while lower pleasures are bodily",
          "Higher pleasures are more intense",
          "Higher pleasures are easier to obtain",
        ],
        correctIndex: 1,
        explanation:
          "Mill distinguishes higher pleasures of the mind (intellectual, aesthetic, moral) from lower pleasures of the body. Competent judges who have experienced both prefer higher pleasures.",
      },
      {
        id: 2,
        question: "What does Mill mean by 'It is better to be a human being dissatisfied than a pig satisfied'?",
        options: [
          "Pigs cannot experience happiness",
          "Human beings are never truly happy",
          "Higher pleasures are qualitatively superior even if they involve discomfort",
          "Dissatisfaction is the natural human condition",
        ],
        correctIndex: 2,
        explanation:
          "Mill argues that higher pleasures are qualitatively superior to lower pleasures, so a human experiencing higher pleasures with some dissatisfaction is better off than a pig experiencing only bodily satisfaction.",
      },
      {
        id: 3,
        question: "What is Mill's harm principle?",
        options: [
          "Harm is always wrong regardless of consequences",
          "Individual freedom should be restricted only to prevent harm to others",
          "Society must punish all harmful actions",
          "Individuals may harm others in self-defense",
        ],
        correctIndex: 1,
        explanation:
          "Mill's harm principle states that individual freedom should be restricted only to prevent harm to others, grounded in utilitarian reasoning about human flourishing.",
      },
      {
        id: 4,
        question: "What is rule utilitarianism?",
        options: [
          "The view that we should always follow moral rules without exception",
          "The view that we should follow rules that tend to promote happiness, even if exceptions could produce more happiness",
          "The view that rules are irrelevant to moral decision-making",
          "The view that rules should be determined by religious authorities",
        ],
        correctIndex: 1,
        explanation:
          "Rule utilitarianism holds that we should follow general rules that tend to promote happiness, addressing objections about punishing innocents or breaking promises for marginal gains.",
      },
      {
        id: 5,
        question: "How did Mill's view differ from Bentham's on pleasure?",
        options: [
          "Mill rejected the importance of pleasure entirely",
          "Mill introduced qualitative distinctions among pleasures, while Bentham treated all pleasures as equal",
          "Bentham focused on intellectual pleasures, Mill on bodily pleasures",
          "They had identical views on pleasure",
        ],
        correctIndex: 1,
        explanation:
          "Bentham treated all pleasures as commensurable, differing only in intensity and duration. Mill introduced qualitative distinctions, arguing some pleasures are intrinsically superior.",
      },
      {
        id: 6,
        question: "According to Mill, who determines which pleasures are higher?",
        options: [
          "Philosophers and academics",
          "Competent judges who have experienced both kinds of pleasure",
          "The majority of people through democratic vote",
          "Religious authorities",
        ],
        correctIndex: 1,
        explanation:
          "Mill argues that competent judges — those who have experienced both higher and lower pleasures — are the authorities on which pleasures are qualitatively superior.",
      },
      {
        id: 7,
        question: "What is the principle of utility?",
        options: [
          "Act according to whatever is most useful for yourself",
          "Seek the greatest happiness for the greatest number",
          "Maximize efficiency in all actions",
          "Follow utilitarian rules without exception",
        ],
        correctIndex: 1,
        explanation:
          "The principle of utility, or the greatest happiness principle, holds that actions are right as they promote happiness and wrong as they produce unhappiness.",
      },
      {
        id: 8,
        question: "Mill argues that free inquiry and experimentation with ways of living promote:",
        options: [
          "Moral relativism",
          "Social chaos",
          "Human flourishing and social progress",
          "Individualism at the expense of community",
        ],
        correctIndex: 2,
        explanation:
          "Mill argues that free inquiry and experimentation promote human flourishing and social progress — a society that suppresses individuality stagnates.",
      },
      {
        id: 9,
        question: "How does rule utilitarianism address the objection about punishing an innocent person?",
        options: [
          "It permits punishment of innocents if it maximizes happiness",
          "It prohibits such punishment because the rule 'do not punish the innocent' promotes overall happiness",
          "It avoids the question as irrelevant",
          "It argues that punishing innocents is always wrong regardless of consequences",
        ],
        correctIndex: 1,
        explanation:
          "Rule utilitarianism prohibits punishing the innocent because the general rule 'do not punish the innocent' tends to promote overall happiness, even if a particular case might seem to benefit.",
      },
    ],
  },
  {
    id: 4,
    title: "Confucius & Relational Ethics",
    philosopher: "Confucius",
    dates: "551–479 BCE",
    summary:
      "Confucian ethics centers on relational duties, social harmony, and the cultivation of virtue through proper relationships, emphasizing ren (humaneness) and li (ritual propriety) as foundations of moral life.",
    sections: [
      {
        heading: "Ren: The Virtue of Humaneness",
        paragraphs: [
          "At the heart of Confucian ethics is ren (仁), often translated as humaneness, benevolence, or perfect virtue. Ren is the comprehensive virtue that encompasses all others — it is the quality of being fully human in one's relationships with others. Confucius describes ren as 'loving others' and emphasizes that it begins at home, in family relationships.",
          "Ren is not an abstract ideal but a practical disposition manifested in everyday conduct. The Confucian golden rule, expressed negatively, states: 'Do not do to others what you do not want done to yourself.' This principle of reciprocity (shu) is the practical expression of ren in social life.",
        ],
      },
      {
        heading: "Li: Ritual Propriety and Social Harmony",
        paragraphs: [
          "Li (礼) refers to the complex system of rituals, customs, and social conventions that govern proper conduct. Far from mere formalism, li is the medium through which ren is expressed and cultivated. Participating in rituals — from family ceremonies to state functions — shapes character and maintains social harmony.",
          "Confucius insisted that li must be more than external conformity; it must express genuine inner feeling. The Analects record him saying, 'What can a person do with the rites who is not humane?' Proper conduct without humaneness is empty performance. The integration of inner virtue (ren) and outer form (li) is the Confucian ideal.",
        ],
      },
      {
        heading: "The Five Relationships",
        paragraphs: [
          "Confucian ethics is fundamentally relational. The Five Relationships — parent and child, ruler and subject, husband and wife, elder and younger sibling, and friend and friend — define the moral landscape. Each relationship involves mutual obligations, though traditional Confucianism emphasizes the duties of the subordinate party.",
          "Filial piety (xiao) — respect and care for one's parents and ancestors — is the foundational virtue from which all other virtues develop. From learning to honor and care for parents, one learns the attitudes and habits necessary for all ethical relationships. The family is the school of virtue.",
        ],
      },
    ],
    questions: [
      {
        id: 0,
        question: "What does the Chinese term 'ren' mean in Confucian ethics?",
        options: [
          "Ritual propriety",
          "Humaneness or benevolence",
          "Wisdom",
          "Courage",
        ],
        correctIndex: 1,
        explanation:
          "Ren (仁) is the comprehensive virtue of humaneness or benevolence — the quality of being fully human in one's relationships with others.",
      },
      {
        id: 1,
        question: "The Confucian golden rule states:",
        options: [
          "Do to others as they do to you",
          "Do not do to others what you do not want done to yourself",
          "Treat others as means to your own ends",
          "Always put others before yourself",
        ],
        correctIndex: 1,
        explanation:
          "Confucius's negative formulation of the golden rule: 'Do not do to others what you do not want done to yourself' — the principle of reciprocity (shu).",
      },
      {
        id: 2,
        question: "What is 'li' in Confucian thought?",
        options: [
          "A type of philosophical argument",
          "Rituals, customs, and social conventions governing proper conduct",
          "The ultimate reality",
          "A school of Confucian thought",
        ],
        correctIndex: 1,
        explanation:
          "Li (礼) is the system of rituals, customs, and social conventions through which ren is expressed and cultivated, shaping character and maintaining social harmony.",
      },
      {
        id: 3,
        question: "According to Confucius, what is the foundational virtue from which all others develop?",
        options: [
          "Courage",
          "Wisdom",
          "Filial piety (xiao)",
          "Honesty",
        ],
        correctIndex: 2,
        explanation:
          "Filial piety (xiao) — respect and care for one's parents and ancestors — is the foundational virtue in Confucian ethics, the school of virtue for all other relationships.",
      },
      {
        id: 4,
        question: "How many primary relationships structure Confucian ethics?",
        options: [
          "Three",
          "Five",
          "Seven",
          "Ten",
        ],
        correctIndex: 1,
        explanation:
          "The Five Relationships structure Confucian ethics: parent-child, ruler-subject, husband-wife, elder-younger sibling, and friend-friend.",
      },
      {
        id: 5,
        question: "What did Confucius mean by saying 'What can a person do with the rites who is not humane?'",
        options: [
          "Only humane people should participate in rituals",
          "Ritual conduct without inner humaneness is empty performance",
          "Rituals are more important than humaneness",
          "Humaneness can replace rituals",
        ],
        correctIndex: 1,
        explanation:
          "Confucius insisted that li must express genuine inner feeling; proper conduct without humaneness is empty performance. The ideal integrates ren and li.",
      },
      {
        id: 6,
        question: "The principle of reciprocity in Confucian ethics is called:",
        options: [
          "Ren",
          "Li",
          "Shu",
          "Xiao",
        ],
        correctIndex: 2,
        explanation:
          "Shu is the Confucian principle of reciprocity — 'Do not do to others what you do not want done to yourself' — the practical expression of ren.",
      },
      {
        id: 7,
        question: "In Confucian ethics, the family is understood as:",
        options: [
          "A private institution separate from moral development",
          "The school of virtue where one learns ethical relationships",
          "Less important than the state",
          "A purely biological unit",
        ],
        correctIndex: 1,
        explanation:
          "The family is the school of virtue in Confucian ethics. From learning to honor and care for parents, one develops the attitudes for all ethical relationships.",
      },
      {
        id: 8,
        question: "Which relationship is NOT one of Confucius's Five Relationships?",
        options: [
          "Parent and child",
          "Ruler and subject",
          "Teacher and student",
          "Friend and friend",
        ],
        correctIndex: 2,
        explanation:
          "The Five Relationships are: parent-child, ruler-subject, husband-wife, elder-younger sibling, and friend-friend. Teacher-student is not one of the five.",
      },
      {
        id: 9,
        question: "Confucian ethics can best be described as:",
        options: [
          "Individualistic and focused on personal autonomy",
          "Relational and focused on duties within social roles",
          "Universal and focused on abstract principles",
          "Skeptical and focused on questioning all values",
        ],
        correctIndex: 1,
        explanation:
          "Confucian ethics is fundamentally relational, defining moral obligations through the specific duties that arise within social roles and relationships.",
      },
    ],
  },
  {
    id: 5,
    title: "Thomas Aquinas & Natural Law Ethics",
    philosopher: "Thomas Aquinas",
    dates: "1225–1274",
    summary:
      "Aquinas's natural law theory grounds morality in human nature and the rational pursuit of the good, synthesizing Aristotelian virtue ethics with Christian theology through the concepts of eternal law, natural law, and synderesis.",
    sections: [
      {
        heading: "The Framework of Law",
        paragraphs: [
          "Aquinas distinguishes four kinds of law. Eternal law is God's rational plan for the universe. Natural law is the participation of rational creatures in eternal law — the moral principles discoverable through human reason. Divine law is revealed in Scripture, guiding humans to their supernatural end. Human law is civil legislation derived from natural law.",
          "Natural law is not imposed on us from without but is inscribed in our rational nature. The first precept of natural law is: 'Good is to be done and pursued, and evil is to be avoided.' All other moral principles derive from this foundational directive, which is known through synderesis — the innate habit of practical reason.",
        ],
      },
      {
        heading: "Human Nature and the Goods of Life",
        paragraphs: [
          "Aquinas argues that moral principles are grounded in the basic goods toward which human nature inclines. These include life (the drive for self-preservation), procreation (the drive to reproduce and educate offspring), knowledge (the drive to understand truth), sociability (the drive to live in community), and reason (the drive to act in accordance with rational nature).",
          "Actions that promote these basic goods are morally good; actions that undermine them are morally evil. This approach explains why certain actions — murder, theft, lying — are intrinsically wrong: they directly violate fundamental human goods.",
        ],
      },
      {
        heading: "Reason and Moral Discovery",
        paragraphs: [
          "For Aquinas, moral reasoning is not a matter of calculating consequences or consulting emotions but of rationally discerning what fulfills human nature. The moral life is the life lived in accordance with reason, which is our distinctively human capacity. Through reason, we can identify the goods that perfect us and the actions that realize those goods.",
          "Aquinas's natural law theory thus offers a middle path between rigid rule-based ethics and relativistic consequentialism. Moral principles are universal insofar as they are grounded in a shared human nature, but their application requires practical wisdom (prudentia) attuned to the particular circumstances of each situation.",
        ],
      },
    ],
    questions: [
      {
        id: 0,
        question: "According to Aquinas, what is natural law?",
        options: [
          "The laws of physics governing the natural world",
          "The participation of rational creatures in eternal law, discoverable through reason",
          "A set of rules revealed in sacred scripture",
          "The customs and traditions of a particular society",
        ],
        correctIndex: 1,
        explanation:
          "Natural law is the participation of rational creatures in eternal law — moral principles discoverable through human reason, not imposed from without but inscribed in our rational nature.",
      },
      {
        id: 1,
        question: "What is the first precept of natural law?",
        options: [
          "Do not kill",
          "Good is to be done and pursued, and evil is to be avoided",
          "Love your neighbor as yourself",
          "Act according to universal moral rules",
        ],
        correctIndex: 1,
        explanation:
          "The first precept of natural law is 'Good is to be done and pursued, and evil is to be avoided.' All other moral principles derive from this foundational directive.",
      },
      {
        id: 2,
        question: "What is synderesis?",
        options: [
          "A type of logical fallacy",
          "The innate habit of practical reason that grasps first moral principles",
          "The act of confessing sins",
          "A form of moral skepticism",
        ],
        correctIndex: 1,
        explanation:
          "Synderesis is the innate habit of practical reason by which we grasp the first principles of moral action, including the foundational precept of doing good and avoiding evil.",
      },
      {
        id: 3,
        question: "Which of the following is NOT one of the basic goods Aquinas identifies?",
        options: [
          "Life and self-preservation",
          "Procreation and education of offspring",
          "Wealth and material prosperity",
          "Knowledge and understanding of truth",
        ],
        correctIndex: 2,
        explanation:
          "Aquinas identifies basic goods including life, procreation, knowledge, sociability, and reason. Wealth is a means to goods, not a basic good in itself.",
      },
      {
        id: 4,
        question: "What four kinds of law does Aquinas distinguish?",
        options: [
          "Moral, legal, religious, and customary",
          "Eternal, natural, divine, and human",
          "Universal, particular, written, and unwritten",
          "Divine, ecclesial, civil, and criminal",
        ],
        correctIndex: 1,
        explanation:
          "Aquinas distinguishes eternal law (God's plan), natural law (rational participation in eternal law), divine law (Scripture), and human law (civil legislation).",
      },
      {
        id: 5,
        question: "According to Aquinas, why are actions like murder and theft intrinsically wrong?",
        options: [
          "Because they are prohibited by civil law",
          "Because they directly violate fundamental human goods",
          "Because they typically lead to bad consequences",
          "Because society disapproves of them",
        ],
        correctIndex: 1,
        explanation:
          "These actions are intrinsically wrong because they directly violate fundamental human goods — life in the case of murder, property and social trust in the case of theft.",
      },
      {
        id: 6,
        question: "What role does practical wisdom (prudentia) play in Aquinas's natural law theory?",
        options: [
          "It is irrelevant — moral rules apply mechanically",
          "It applies universal moral principles to particular circumstances",
          "It replaces natural law when circumstances require",
          "It determines which goods are basic",
        ],
        correctIndex: 1,
        explanation:
          "While moral principles are universal, their application requires practical wisdom (prudentia) attuned to the particular circumstances of each situation.",
      },
      {
        id: 7,
        question: "How does Aquinas's natural law theory understand the relationship between reason and morality?",
        options: [
          "Reason and morality are independent of each other",
          "The moral life is the life lived in accordance with reason",
          "Reason is an obstacle to moral goodness",
          "Morality is based on emotion, not reason",
        ],
        correctIndex: 1,
        explanation:
          "For Aquinas, the moral life is the life lived in accordance with reason, our distinctively human capacity. Through reason we identify the goods that fulfill us.",
      },
      {
        id: 8,
        question: "What does Aquinas mean by eternal law?",
        options: [
          "Principles that never change",
          "God's rational plan for the universe",
          "Universal moral truths known to all people",
          "Laws that have existed since the beginning of time",
        ],
        correctIndex: 1,
        explanation:
          "Eternal law is God's rational plan for the universe, the ultimate source of all other forms of law in Aquinas's framework.",
      },
      {
        id: 9,
        question: "According to Aquinas, what is the relationship between human law and natural law?",
        options: [
          "Human law is unrelated to natural law",
          "Human law should be derived from natural law",
          "Human law takes priority over natural law",
          "Natural law is created by human law",
        ],
        correctIndex: 1,
        explanation:
          "Aquinas holds that human law (civil legislation) should be derived from natural law. Laws that contradict natural law are unjust and lack moral authority.",
      },
    ],
  },
  {
    id: 6,
    title: "Simone de Beauvoir & Existentialist Ethics",
    philosopher: "Simone de Beauvoir",
    dates: "1908–1986",
    summary:
      "De Beauvoir's existentialist ethics centers on freedom, authenticity, and the ambiguous human condition, arguing for mutual recognition and collective liberation as the foundation of ethical life.",
    sections: [
      {
        heading: "Freedom and Ambiguity",
        paragraphs: [
          "For Simone de Beauvoir, the fundamental fact of the human condition is ambiguity: we are both subjects (free consciousness) and objects (bodies in a material world). This dual nature means we cannot escape freedom. We are 'condemned to be free' — not in the sense of unlimited choice but in the sense that we must choose, and our choices define us.",
          "De Beauvoir rejects the idea that there is a fixed human nature that determines how we should live. Instead, we create ourselves through our choices and actions. This radical freedom is both exhilarating and terrifying. Many people flee from it into what de Beauvoir calls 'seriousness' — treating some external value as absolute to avoid the burden of choice.",
        ],
      },
      {
        heading: "Bad Faith and Authenticity",
        paragraphs: [
          "Bad faith (mauvaise foi) is the denial of our freedom. It takes two forms: denying that we are free (pretending we have no choice) and denying that we are responsible for our choices (blaming circumstances, our upbringing, or our nature). The woman who claims she 'had no choice' but to submit to sexist expectations is in bad faith.",
          "Authenticity, by contrast, is the recognition and acceptance of our freedom and responsibility. The authentic person acknowledges that she is the source of her values and actions, and she lives with the anxiety and uncertainty that this entails. Authenticity is the existentialist virtue.",
        ],
      },
      {
        heading: "The Other and Mutual Recognition",
        paragraphs: [
          "De Beauvoir's ethics is deeply social. She argues that our freedom is fundamentally intertwined with the freedom of others. To treat another person as a mere object — to deny their freedom — is to diminish our own humanity. Ethical life requires mutual recognition: acknowledging others as free subjects like ourselves.",
          "In The Second Sex, de Beauvoir analyzes how women have been relegated to the role of the Other — defined relative to men rather than as autonomous subjects. Her ethics calls for the liberation of all oppressed groups, arguing that true freedom cannot be achieved individually but requires collective transformation of social structures.",
        ],
      },
    ],
    questions: [
      {
        id: 0,
        question: "What does de Beauvoir mean by the 'ambiguity' of the human condition?",
        options: [
          "Humans are fundamentally irrational",
          "We are both subjects (free consciousness) and objects (material bodies)",
          "Moral questions have no clear answers",
          "Human nature is unknowable",
        ],
        correctIndex: 1,
        explanation:
          "The ambiguity of the human condition refers to our dual nature as both free subjects (consciousness) and objects (bodies in the material world).",
      },
      {
        id: 1,
        question: "What is 'bad faith' (mauvaise foi) in existentialist ethics?",
        options: [
          "Acting immorally",
          "The denial of our freedom and responsibility",
          "Failing to keep promises",
          "Believing in God",
        ],
        correctIndex: 1,
        explanation:
          "Bad faith is the denial of our freedom — either pretending we have no choice or denying responsibility for our choices by blaming circumstances or our nature.",
      },
      {
        id: 2,
        question: "What does authenticity require in de Beauvoir's view?",
        options: [
          "Always telling the truth",
          "Recognition and acceptance of our freedom and responsibility",
          "Living according to tradition",
          "Rejecting all social conventions",
        ],
        correctIndex: 1,
        explanation:
          "Authenticity is the recognition and acceptance of our freedom and responsibility — acknowledging that we are the source of our values and actions.",
      },
      {
        id: 3,
        question: "What does de Beauvoir argue about the relationship between individual freedom and others' freedom?",
        options: [
          "Individual freedom is independent of others",
          "Our freedom is fundamentally intertwined with the freedom of others",
          "Others' freedom limits our own freedom",
          "Freedom is only possible in isolation",
        ],
        correctIndex: 1,
        explanation:
          "De Beauvoir argues that our freedom is fundamentally intertwined with others'. Treating others as objects diminishes our own humanity. Ethical life requires mutual recognition.",
      },
      {
        id: 4,
        question: "What role does 'seriousness' play in de Beauvoir's ethics?",
        options: [
          "It is the proper attitude toward moral questions",
          "It is a flight from freedom — treating an external value as absolute to avoid choice",
          "It describes people who take ethics seriously",
          "It is synonymous with authenticity",
        ],
        correctIndex: 1,
        explanation:
          "'Seriousness' is fleeing from freedom by treating some external value as absolute, thereby avoiding the burden of choosing one's own values.",
      },
      {
        id: 5,
        question: "In The Second Sex, how does de Beauvoir analyze women's situation?",
        options: [
          "As biologically determined to be caregivers",
          "As having been relegated to the role of the Other, defined relative to men",
          "As naturally inferior to men in rational capacity",
          "As choosing freely to accept traditional roles",
        ],
        correctIndex: 1,
        explanation:
          "De Beauvoir analyzes how women have been relegated to the role of the Other — defined relative to men rather than as autonomous subjects.",
      },
      {
        id: 6,
        question: "According to de Beauvoir, true freedom requires:",
        options: [
          "Individual liberation from all social constraints",
          "Collective transformation of social structures",
          "Acceptance of one's predetermined role",
          "Isolation from oppressive societies",
        ],
        correctIndex: 1,
        explanation:
          "De Beauvoir argues that true freedom cannot be achieved individually but requires collective transformation of social structures that oppress groups.",
      },
      {
        id: 7,
        question: "What is 'the Other' in de Beauvoir's existentialist ethics?",
        options: [
          "A foreigner or stranger",
          "A person denied full subjecthood and defined relative to a dominant group",
          "An opponent in moral disagreement",
          "Anyone who is different from oneself",
        ],
        correctIndex: 1,
        explanation:
          "The Other is a person or group denied full subjecthood and defined relative to a dominant group, as de Beauvoir analyzes women being defined relative to men.",
      },
      {
        id: 8,
        question: "How does de Beauvoir view the claim that someone 'had no choice'?",
        options: [
          "It is usually true — circumstances often constrain us completely",
          "It is often an expression of bad faith, denying one's freedom",
          "It is the correct description of most moral situations",
          "It applies only to those in extreme poverty",
        ],
        correctIndex: 1,
        explanation:
          "De Beauvoir would view the claim that someone 'had no choice' as often being bad faith — a denial of freedom and responsibility for one's choices.",
      },
      {
        id: 9,
        question: "What does mutual recognition mean in de Beauvoir's ethics?",
        options: [
          "Both parties agree on moral principles",
          "Acknowledging others as free subjects like ourselves",
          "Recognizing cultural differences",
          "Accepting social hierarchies",
        ],
        correctIndex: 1,
        explanation:
          "Mutual recognition means acknowledging others as free subjects like ourselves, which is fundamental to ethical life in de Beauvoir's existentialist framework.",
      },
    ],
  },
];

export interface ActivityTopic {
  heading: string;
  paragraphs: string[];
}

export interface ActivityContent {
  title: string;
  topics: ActivityTopic[];
  questions: Question[];
}

export const activityContent: ActivityContent = {
  title: "Types of Value Judgment",
  topics: [
    {
      heading: "Aesthetic Value Judgment",
      paragraphs: [
        "Aesthetic value judgments are evaluations based on feelings of pleasure or displeasure in response to beauty, art, or sensory experience. When we say 'That sunset is beautiful,' 'This music is sublime,' or 'Her dress is elegant,' we are making aesthetic judgments. Unlike factual judgments (which can be verified objectively) or moral judgments (which concern right and wrong), aesthetic judgments occupy a distinctive middle ground: they are subjective in origin — grounded in personal feeling — yet they carry an implicit claim to universal validity.",
        "Immanuel Kant, in his Critique of Judgment, argued that judgments of taste are characterized by 'subjective universality.' When you call a painting beautiful, you are not merely reporting your private pleasure ('I like it') but asserting that others ought to share your response. This distinguishes aesthetic judgments from mere expressions of personal preference. Aesthetic judgments involve disinterested pleasure — enjoyment that is not tied to personal desire or practical interest. Contemporary aestheticians have extended Kant's framework to include not only judgments of beauty and ugliness but also substantive aesthetic judgments (dainty, dumpy, elegant, sublime) and the recognition that aesthetic value can apply to both art and nature.",
      ],
    },
    {
      heading: "Technical Value Judgment",
      paragraphs: [
        "Technical value judgments evaluate how effectively something fulfills its intended function or purpose. When we say 'This knife cuts well,' 'That algorithm is efficient,' or 'The bridge is structurally sound,' we are making technical judgments. These judgments are grounded in standards of performance, craftsmanship, and practical effectiveness. Unlike moral judgments, which ask whether an action is right or wrong, technical judgments ask whether a thing or action achieves its purpose well.",
        "The concept traces back to Aristotle's notion of techne — the kind of knowledge involved in craft, skill, or making. Technical value requires competent judges who understand the relevant standards. A professional chef is better qualified than a novice to judge whether a knife is well-designed; an engineer is better qualified to assess a bridge. Technical judgments are objective in the sense that they can be tested against real-world performance, yet they depend on context: a good hunting knife may be a poor surgical scalpel. The same action can be evaluated technically (Did it achieve its goal?) and morally (Was it right to do it?), and these evaluations can come apart.",
      ],
    },
    {
      heading: "Etiquette as Value Judgment",
      paragraphs: [
        "Etiquette refers to the conventional rules of polite behavior and social conduct within a particular community or culture. Judgments of etiquette evaluate actions as polite or rude, proper or improper — for example, 'It is rude to interrupt,' 'You should thank the host,' or 'Using the correct fork shows good manners.' These judgments are distinct from moral judgments in several ways: they focus on outward conduct rather than inner motivation, they are culturally relative, and they concern the form and appearance of social interaction rather than fundamental questions of right and wrong.",
        "Despite these differences, philosophers such as David Hume and Philippa Foot have argued that etiquette has genuine moral significance. Hume observed that rules of politeness serve to 'facilitate the intercourse of minds' and prevent social friction. More recently, philosophers have argued that good manners are essential to acknowledging the dignity of others — treating people with courtesy is a direct way of showing respect. When etiquette fails — through rudeness, boorishness, or deliberate incivility — it can undermine others' sense of worth and belonging. Thus, while the specific rules of etiquette vary across cultures, the underlying value of treating others with consideration and respect is a universal moral concern.",
      ],
    },
  ],
  questions: [
    {
      id: 0,
      question: "What distinguishes aesthetic value judgments from factual judgments?",
      options: [
        "Aesthetic judgments are always true; factual judgments are sometimes false",
        "Aesthetic judgments are based on feelings of pleasure or displeasure and claim subjective universality",
        "Aesthetic judgments are about nature only; factual judgments are about art",
        "Aesthetic judgments are objective; factual judgments are subjective",
      ],
      correctIndex: 1,
      explanation:
        "Aesthetic judgments are grounded in personal feeling (pleasure/displeasure) yet claim universal validity — Kant called this 'subjective universality.' Factual judgments, by contrast, are verified objectively.",
    },
    {
      id: 1,
      question: "According to Kant, what is 'subjective universality' in judgments of taste?",
      options: [
        "They are merely private opinions with no claim on others",
        "They are based on subjective feeling but assert that others ought to agree",
        "They are universal because everyone has the same taste",
        "They are scientifically verifiable by anyone",
      ],
      correctIndex: 1,
      explanation:
        "Subjective universality means a judgment of taste is based on personal feeling yet claims that others should share the same response — unlike 'I like it,' which merely reports private preference.",
    },
    {
      id: 2,
      question: "Which of the following is an example of an aesthetic value judgment?",
      options: [
        "Stealing is wrong",
        "This painting is beautiful",
        "Water boils at 100 degrees Celsius",
        "You should not interrupt others",
      ],
      correctIndex: 1,
      explanation:
        "'This painting is beautiful' is an aesthetic judgment about beauty. 'Stealing is wrong' is a moral judgment, 'Water boils at 100°C' is a factual judgment, and 'Do not interrupt' is a rule of etiquette.",
    },
    {
      id: 3,
      question: "What does Kant mean by 'disinterested pleasure' in aesthetic judgment?",
      options: [
        "Pleasure that is not tied to personal desire or practical interest",
        "Pleasure that comes from things we find boring",
        "Pleasure that is shared equally by everyone",
        "Pleasure that has no emotional component",
      ],
      correctIndex: 0,
      explanation:
        "Disinterested pleasure is enjoyment that is not tied to personal desire, ownership, or practical interest — you can find a painting beautiful without wanting to possess it.",
    },
    {
      id: 4,
      question: "What does a technical value judgment evaluate?",
      options: [
        "Whether an action is morally right or wrong",
        "Whether something is beautiful or ugly",
        "How effectively something fulfills its intended function",
        "Whether a social rule is being followed",
      ],
      correctIndex: 2,
      explanation:
        "Technical value judgments assess how effectively something achieves its purpose — e.g., 'This knife cuts well' or 'This algorithm is efficient.'",
    },
    {
      id: 5,
      question: "Aristotle's concept of 'techne' refers to:",
      options: [
        "Theoretical knowledge of universal truths",
        "Craft knowledge or skill in making and doing things",
        "Moral wisdom about how to live well",
        "Intuitive understanding of beauty",
      ],
      correctIndex: 1,
      explanation:
        "Techne is the kind of knowledge involved in craft, skill, or making — the practical expertise that underlies technical value judgments.",
    },
    {
      id: 6,
      question: "Why is a professional chef better qualified than a novice to judge whether a knife is well-designed?",
      options: [
        "Chefs have more expensive knives",
        "Technical judgments require competent judges who understand the relevant standards",
        "Chefs are more intelligent than non-chefs",
        "Technical judgments are based on personal preference",
      ],
      correctIndex: 1,
      explanation:
        "Technical value requires competent judges who understand the relevant standards of performance. A chef has the expertise to evaluate a knife's effectiveness in culinary contexts.",
    },
    {
      id: 7,
      question: "How do judgments of etiquette primarily differ from moral judgments?",
      options: [
        "Etiquette is about universal truths; morality is culturally relative",
        "Etiquette focuses on outward conduct and social conventions; morality addresses deeper principles of right and wrong",
        "Etiquette is more important than morality",
        "There is no difference — they are the same thing",
      ],
      correctIndex: 1,
      explanation:
        "Etiquette concerns outward conduct and social conventions (politeness, manners), while morality addresses fundamental principles of right and wrong, justice, and human welfare.",
    },
    {
      id: 8,
      question: "What did David Hume argue about the function of manners and etiquette?",
      options: [
        "They are trivial and morally irrelevant",
        "They facilitate social interaction and prevent friction between people",
        "They should be replaced by universal moral rules",
        "They are the foundation of all moral systems",
      ],
      correctIndex: 1,
      explanation:
        "Hume argued that rules of politeness serve to 'facilitate the intercourse of minds' and prevent the social friction that arises from pride and self-conceit.",
    },
    {
      id: 9,
      question: "Why have some philosophers argued that etiquette has moral significance?",
      options: [
        "Because breaking etiquette rules is always illegal",
        "Because good manners are essential to acknowledging the dignity and respectworthiness of others",
        "Because etiquette rules never vary between cultures",
        "Because politeness is more important than honesty",
      ],
      correctIndex: 1,
      explanation:
        "Philosophers argue that good manners are a direct way of acknowledging others' dignity and worth. Rudeness can undermine a person's sense of belonging and self-worth, giving etiquette genuine moral weight.",
    },
  ],
};

export interface CaseStudy {
  title: string;
  subtitle: string;
  story: string[];
  questions: Question[];
}

export const caseStudy: CaseStudy = {
  title: "The Unsolved Case of Cris Anthony Mendez",
  subtitle: "Hazing, Silence, and the Failure of Justice in the Philippines",
  story: [
    "Cris Anthony Mendez was a 20-year-old graduating student of Public Administration at the University of the Philippines Diliman. On the night of August 26, 2007, he attended what was supposed to be an initiation rite of the Sigma Rho Fraternity. Early the next morning, he was rushed to the Veterans Memorial Medical Center by Dr. Francisco Cruz and his son, Miguel Francisco Cruz, who was also a UP student. Mendez was declared dead on arrival.",
    "The autopsy revealed a devastating picture: at least ten hematomas across his body, both arms bruised from shoulder to elbow, contused and hemorrhagic lungs, and massive internal bleeding. The medico-legal report classified the cause of death as traumatic injuries consistent with severe hazing. Mendez had been beaten systematically as part of the fraternity's initiation.",
    "Despite the evidence, no one was ever convicted. The UP Student Disciplinary Tribunal filed administrative cases against 13 members of Sigma Rho, but the criminal cases stalled. Witnesses refused to speak. The fraternity's code of silence \u2014 the omert\u00e0 \u2014 held firm. Those who knew what happened inside that room chose loyalty to the brotherhood over justice for the dead.",
    "The case wound through the courts for years. The Court of Appeals and the Supreme Court eventually upheld UP's right to proceed with administrative sanctions, but criminal accountability remained elusive. To this day, no one has been held criminally liable for the death of Cris Anthony Mendez. His case stands as a haunting reminder of how systems \u2014 legal, academic, and social \u2014 can fail when silence is protected over truth.",
  ],
  questions: [
    {
      id: 0,
      question: "What was Cris Anthony Mendez's cause of death?",
      options: [
        "Gunshot wounds",
        "Traumatic injuries consistent with severe hazing",
        "Drug overdose",
        "Vehicular accident",
      ],
      correctIndex: 1,
      explanation:
        "The autopsy report showed at least ten hematomas, bruised arms from shoulder to elbow, contused and hemorrhagic lungs, and massive internal bleeding — all consistent with severe hazing during fraternity initiation.",
    },
    {
      id: 1,
      question: "Why has no one been held criminally liable for Mendez's death?",
      options: [
        "The police lost all evidence",
        "The fraternity's code of silence prevented witnesses from coming forward",
        "The suspect fled the country",
        "The court ruled it was an accident",
      ],
      correctIndex: 1,
      explanation:
        "The fraternity's code of silence (omert\u00e0) held firm. Witnesses refused to speak, and those who knew the truth chose loyalty to the brotherhood over justice, stalling criminal prosecution.",
    },
    {
      id: 2,
      question: "What did the Supreme Court eventually rule regarding Mendez's case?",
      options: [
        "All charges were dropped permanently",
        "The UP Student Disciplinary Tribunal could proceed with administrative sanctions against the fraternity members",
        "The fraternity was legally dissolved",
        "The Mendez family was ordered to pay damages",
      ],
      correctIndex: 1,
      explanation:
        "The Supreme Court upheld the University of the Philippines' right to pursue administrative proceedings against the Sigma Rho members through its Student Disciplinary Tribunal, even as criminal accountability remained unresolved.",
    },
    {
      id: 3,
      question: "What broader ethical problem does the Mendez case exemplify?",
      options: [
        "Hazing is a victimless tradition",
        "University discipline is always sufficient justice",
        "Institutional and cultural silence can shield perpetrators from accountability",
        "Philippine courts are too harsh on fraternities",
      ],
      correctIndex: 2,
      explanation:
        "The Mendez case exemplifies how institutional and cultural silence — the fraternity's omert\u00e0, legal delays, and systemic failures — can shield perpetrators from accountability, leaving families without justice.",
    },
  ],
};

export function shuffleQuestions<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
