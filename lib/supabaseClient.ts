import { createClient } from "@supabase/supabase-js";
import { Trait } from "./types";

/**
 * docs/supabase-info.md 에 기재된 프로젝트 접속 정보를 하드코딩합니다.
 * Publishable(anon) Key는 클라이언트(브라우저)에 노출되어도 안전하도록 설계된
 * 공개 키이며, RLS(Row Level Security) 정책으로 접근 범위를 제어합니다.
 */
const SUPABASE_PROJECT_ID = "ptentwqfgijbwdlysyxg";
const SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_obmKd0Px66_Ot0EQ7q4k7Q_r8HT-WoL";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export const MBTI_RESULTS_TABLE = "mbti_results";

/**
 * 메인 화면의 '누적 참여자 수' 배너를 위해 현재까지 적재된 결과 Row 수를 조회합니다.
 */
export async function fetchParticipantCount(): Promise<number> {
  const { count, error } = await supabase
    .from(MBTI_RESULTS_TABLE)
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("참여자 수 조회 실패:", error.message);
    return 0;
  }

  return count ?? 0;
}

/**
 * 유저가 테스트를 완료했을 때 최종 MBTI 결과와 선택 답변 리스트를 DB에 적재합니다.
 */
export async function saveMbtiResult(
  mbtiType: string,
  answers: Trait[]
): Promise<{ success: boolean }> {
  const { error } = await supabase
    .from(MBTI_RESULTS_TABLE)
    .insert({ mbti_type: mbtiType, answers });

  if (error) {
    console.error("결과 저장 실패:", error.message);
    return { success: false };
  }

  return { success: true };
}
