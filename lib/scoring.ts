import { MBTIType, Trait } from "./types";

type Counts = Record<Trait, number>;

/**
 * 8개 답변(Trait 배열)을 집계해 최종 MBTI 4자리를 계산합니다.
 * 동점일 경우 기획서 기준에 따라 I, N, T, P를 우선합니다.
 */
export function calculateMBTI(answers: Trait[]): MBTIType {
  const counts: Counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  answers.forEach((trait) => {
    counts[trait] += 1;
  });

  const pickWithTieBreak = (a: Trait, b: Trait, tieWinner: Trait): Trait =>
    counts[a] === counts[b] ? tieWinner : counts[a] > counts[b] ? a : b;

  const ei = pickWithTieBreak("E", "I", "I");
  const sn = pickWithTieBreak("S", "N", "N");
  const tf = pickWithTieBreak("T", "F", "T");
  const jp = pickWithTieBreak("J", "P", "P");

  return `${ei}${sn}${tf}${jp}` as MBTIType;
}
