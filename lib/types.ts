export type Trait = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export type Dimension = "EI" | "SN" | "TF" | "JP";

export interface QuizOption {
  label: "A" | "B";
  text: string;
  trait: Trait;
}

export interface QuizQuestion {
  id: number;
  dimension: Dimension;
  question: string;
  options: [QuizOption, QuizOption];
}

export type MBTIType =
  | "INTJ"
  | "INTP"
  | "ENTJ"
  | "ENTP"
  | "INFJ"
  | "INFP"
  | "ENFJ"
  | "ENFP"
  | "ISTJ"
  | "ISFJ"
  | "ESTJ"
  | "ESFJ"
  | "ISTP"
  | "ISFP"
  | "ESTP"
  | "ESFP";

export interface MatchInfo {
  type: MBTIType;
  title: string;
  reason: string;
}

export interface Persona {
  type: MBTIType;
  title: string;
  tagline: string;
  emoji: string;
  gradient: string;
  traits: [string, string, string];
  bestMatch: MatchInfo;
  worstMatch: MatchInfo;
}
