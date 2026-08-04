import type { SourceComparison } from "@/lib/types";

export const sourcesComparison: SourceComparison[] = [
  {
    id: "law",
    name: "Law",
    tagline: "The command of the state",
    intro:
      "From the criminal and civil codes down to the provincial and city level — Rizal province, Antipolo City — the law commands, and its commands are backed by the power of the state.",
    strengths: [
      "Clear and specific prohibitions written down and enforceable",
      "Uniform standard binding all persons within its reach",
      "Backed by institutions that can compel obedience",
    ],
    limitations: [
      "A good act may go beyond mere obedience — passers-by who ignore someone in need break no law yet seem culpable",
      "Law marks the floor, not the whole of moral obligation",
    ],
  },
  {
    id: "religion",
    name: "Religion",
    tagline: "The command of the divine",
    intro:
      "Divine command theory: what is right is what God commands. The lesson's scriptural example is Deuteronomy 11, obedience owed to a Supreme Authority.",
    strengths: [
      "Clear prohibitions that match our moral intuition",
      "Positive ideals, not merely restrictions",
      "A Supreme Authority able to compel absolute obedience",
    ],
    limitations: [
      "Practical multiplicity of religions and intra-faith disagreement",
      "The conceptual Euthyphro problem, with the Crusades as the tragic case",
      "Questioning its difficulties is not an attack on faith — it is reason's work",
    ],
  },
  {
    id: "culture",
    name: "Culture",
    tagline: "The command of the community",
    intro:
      "Cultures differ in aesthetics, religion, etiquette, and taboos around nudity and the relations between men and women; from this diversity grows cultural relativism.",
    strengths: [
      "Its appeal is tolerance — a genuine moral gain",
      "Grounded in the lived practices a community actually honors",
    ],
    limitations: [
      "If a culture's tradition is headhunting, relativism cannot call it wrong",
      "Difference alone does not prove the absence of a standard",
    ],
  },
];
