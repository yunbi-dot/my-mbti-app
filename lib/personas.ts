import { MBTIType, Persona } from "./types";

export const personas: Record<MBTIType, Persona> = {
  INTJ: {
    type: "INTJ",
    title: "독고다이 아키텍트 마스터",
    tagline: "계획 없는 배포는 재앙이다. 시스템 설계의 신",
    emoji: "🧠",
    gradient: "from-indigo-600 to-violet-500",
    traits: [
      "완벽한 설계도 없이는 코드 한 줄도 짜지 않는다",
      "회의보다 혼자 몰입하는 시간에 최고의 아이디어가 나온다",
      "\"왜?\"라는 질문을 끝까지 파고들어 본질을 찾아낸다",
    ],
    bestMatch: {
      type: "ENFP",
      title: "아이디어 폭발 스파크 기획자",
      reason: "논리적인 설계에 반짝이는 상상력을 더해주는 최고의 파트너",
    },
    worstMatch: {
      type: "ESFP",
      title: "퍼포먼스 만렙 스타 마케터",
      reason: "즉흥적인 텐션에 계획이 자꾸 틀어져 피로감을 느낀다",
    },
  },
  INTP: {
    type: "INTP",
    title: "밤샘 분석 AI 연구원",
    tagline: "왜 대답을 못 하니... 알고리즘과 디버깅의 신",
    emoji: "🔬",
    gradient: "from-indigo-600 to-violet-500",
    traits: [
      "새벽 3시에도 알고리즘 최적화 아이디어가 떠오르면 바로 코드를 켠다",
      "\"그거 왜 그렇게 동작해요?\"라는 질문을 끝까지 파헤친다",
      "정리되지 않은 감보다 검증된 논리를 신뢰한다",
    ],
    bestMatch: {
      type: "ENTJ",
      title: "거침없는 빌드업 CPO",
      reason: "내 분석에 방향과 추진력을 더해주는 든든한 조력자",
    },
    worstMatch: {
      type: "ESFJ",
      title: "네트워킹 만렙 분위기 메이커",
      reason: "잡담과 스몰토크가 길어질수록 집중력이 흩어진다",
    },
  },
  ENTJ: {
    type: "ENTJ",
    title: "거침없는 빌드업 CPO",
    tagline: "방향성은 내가 정한다. 무결점 비즈니스 리더",
    emoji: "🚀",
    gradient: "from-indigo-600 to-violet-500",
    traits: [
      "회의 시작 5분 만에 결론과 액션 아이템을 정리한다",
      "비효율적인 프로세스를 보면 못 참고 뜯어고친다",
      "목표를 위해서라면 야근도 마다하지 않는 추진력",
    ],
    bestMatch: {
      type: "INFP",
      title: "유저 빙의 감성 UI 디자이너",
      reason: "차가운 전략에 따뜻한 유저 감성을 불어넣어 준다",
    },
    worstMatch: {
      type: "ISFP",
      title: "자유로운 영혼의 프론트엔드 아티스트",
      reason: "정해진 일정보다 감을 따르는 스타일에 답답함을 느낀다",
    },
  },
  ENTP: {
    type: "ENTP",
    title: "아이디어 뱅크 그로스 해커",
    tagline: "이거 바꾸면 대박 날 듯? 프로 불편러 혁신가",
    emoji: "💡",
    gradient: "from-indigo-600 to-violet-500",
    traits: [
      "\"이거 이렇게 바꾸면 대박 날 것 같은데요?\"를 하루에 5번은 외친다",
      "토론과 반박을 즐기며 그 안에서 더 좋은 답을 찾는다",
      "같은 업무를 반복하면 금방 지루해한다",
    ],
    bestMatch: {
      type: "INFJ",
      title: "비전 제시형 프로덕트 전략가",
      reason: "번뜩이는 아이디어에 깊은 통찰을 더해 완성도를 높여준다",
    },
    worstMatch: {
      type: "ISTJ",
      title: "팩트 체크 중심 QA 마스터",
      reason: "매뉴얼과 원칙을 강조할 때마다 답답함을 느낀다",
    },
  },
  INFJ: {
    type: "INFJ",
    title: "비전 제시형 프로덕트 전략가",
    tagline: "프로덕트의 철학을 만듭니다. 숨은 멘토",
    emoji: "🧭",
    gradient: "from-cyan-500 to-indigo-500",
    traits: [
      "기능 하나에도 \"이게 유저에게 어떤 의미일까\"를 먼저 고민한다",
      "팀의 갈등을 조용히 중재하는 숨은 해결사",
      "확신이 서면 흔들리지 않고 끝까지 밀어붙인다",
    ],
    bestMatch: {
      type: "ENTP",
      title: "아이디어 뱅크 그로스 해커",
      reason: "정제된 비전에 폭발적인 실행 아이디어를 더해준다",
    },
    worstMatch: {
      type: "ESTP",
      title: "위기 탈출 넘버원 소방수 개발자",
      reason: "장기적 비전보다 즉흥적 대응을 우선할 때 온도차를 느낀다",
    },
  },
  INFP: {
    type: "INFP",
    title: "유저 빙의 감성 UI 디자이너",
    tagline: "한 픽셀의 UI에도 유저의 마음을 담습니다",
    emoji: "🎨",
    gradient: "from-cyan-500 to-indigo-500",
    traits: [
      "버튼 색상 하나에도 유저의 감정을 먼저 상상한다",
      "내 작업물에 대한 비판에 생각보다 오래 마음이 쓰인다",
      "팀의 가치와 방향에 공감할 때 최고의 몰입을 보여준다",
    ],
    bestMatch: {
      type: "ENTJ",
      title: "거침없는 빌드업 CPO",
      reason: "섬세한 감성에 뚜렷한 방향성을 제시해주는 든든한 리더",
    },
    worstMatch: {
      type: "ESTJ",
      title: "폭풍 추진력의 PM 리더",
      reason: "감정보다 숫자와 일정을 앞세울 때 서운함을 느낀다",
    },
  },
  ENFJ: {
    type: "ENFJ",
    title: "팀의 성장을 이끄는 스크럼 마스터",
    tagline: "모두 할 수 있어요! 팀의 사기를 책임지는 치어리더",
    emoji: "📣",
    gradient: "from-cyan-500 to-indigo-500",
    traits: [
      "팀원 한 명 한 명의 컨디션까지 세심하게 챙긴다",
      "\"우리 할 수 있어요!\"라는 응원으로 팀 사기를 끌어올린다",
      "갈등 상황에서 누구보다 먼저 중재에 나선다",
    ],
    bestMatch: {
      type: "INTP",
      title: "밤샘 분석 AI 연구원",
      reason: "따뜻한 리더십에 냉철한 논리를 더해 균형을 잡아준다",
    },
    worstMatch: {
      type: "ISTP",
      title: "조용한 백엔드 버그 킬러",
      reason: "감정 표현이 적을 때 서운함과 답답함을 동시에 느낀다",
    },
  },
  ENFP: {
    type: "ENFP",
    title: "아이디어 폭발 스파크 기획자",
    tagline: "재미없는 서비스는 안 만들어요! 트렌드 세터",
    emoji: "✨",
    gradient: "from-cyan-500 to-indigo-500",
    traits: [
      "회의 중 떠오른 아이디어를 참지 못하고 바로 공유한다",
      "사람들과의 브레인스토밍에서 에너지가 폭발한다",
      "재미없는 서비스는 못 만든다는 나름의 철학이 있다",
    ],
    bestMatch: {
      type: "INTJ",
      title: "독고다이 아키텍트 마스터",
      reason: "반짝이는 아이디어를 탄탄한 설계로 완성해주는 파트너",
    },
    worstMatch: {
      type: "ISTJ",
      title: "팩트 체크 중심 QA 마스터",
      reason: "디테일한 규칙과 절차를 강조할 때 숨이 막힌다",
    },
  },
  ISTJ: {
    type: "ISTJ",
    title: "팩트 체크 중심 QA 마스터",
    tagline: "제 눈에 버그가 걸렸습니다. 철두철미한 수문장",
    emoji: "🔍",
    gradient: "from-blue-600 to-indigo-600",
    traits: [
      "체크리스트 없이는 배포 승인을 하지 않는다",
      "한 번 정한 원칙과 프로세스는 끝까지 지킨다",
      "사소한 버그 하나도 그냥 지나치지 못한다",
    ],
    bestMatch: {
      type: "ESFP",
      title: "퍼포먼스 만렙 스타 마케터",
      reason: "꼼꼼한 원칙에 활기와 유연함을 더해주는 존재",
    },
    worstMatch: {
      type: "ENTP",
      title: "아이디어 뱅크 그로스 해커",
      reason: "즉흥적으로 원칙을 바꾸려 할 때 불안함을 느낀다",
    },
  },
  ISFJ: {
    type: "ISFJ",
    title: "든든한 백업 요정 서비스 운영자",
    tagline: "이슈 발생? 제가 다 처리해 둘게요. 보이지 않는 영웅",
    emoji: "🛡️",
    gradient: "from-blue-600 to-indigo-600",
    traits: [
      "장애 알림이 오면 누구보다 먼저 대응 채널에 접속한다",
      "동료가 놓친 부분까지 조용히 챙겨준다",
      "화려하진 않지만 묵묵히 팀을 지탱하는 힘이 있다",
    ],
    bestMatch: {
      type: "ESTP",
      title: "위기 탈출 넘버원 소방수 개발자",
      reason: "든든한 백업에 과감한 실행력을 더해 최고의 위기 대응팀이 된다",
    },
    worstMatch: {
      type: "ENTP",
      title: "아이디어 뱅크 그로스 해커",
      reason: "안정보다 변화를 계속 추구할 때 마음이 불편해진다",
    },
  },
  ESTJ: {
    type: "ESTJ",
    title: "폭풍 추진력의 PM 리더",
    tagline: "스프린트 지연은 없다. 철저한 일정과 실행력",
    emoji: "📊",
    gradient: "from-blue-600 to-indigo-600",
    traits: [
      "스프린트 계획표는 분 단위로 정리되어야 마음이 편하다",
      "데드라인 앞에서 누구보다 강한 실행력을 보여준다",
      "정해진 규칙과 역할 분담을 명확히 하는 것을 선호한다",
    ],
    bestMatch: {
      type: "ISFP",
      title: "자유로운 영혼의 프론트엔드 아티스트",
      reason: "빡빡한 일정에 감각적인 유연함을 더해주는 존재",
    },
    worstMatch: {
      type: "INFP",
      title: "유저 빙의 감성 UI 디자이너",
      reason: "감정적인 논의가 길어지면 진행이 늦어져 답답함을 느낀다",
    },
  },
  ESFJ: {
    type: "ESFJ",
    title: "네트워킹 만렙 분위기 메이커",
    tagline: "팀원 간 불화 제로! 모두를 챙기는 마당발 올라운더",
    emoji: "🤝",
    gradient: "from-blue-600 to-indigo-600",
    traits: [
      "팀 회식 장소부터 생일 챙기기까지 다 담당한다",
      "팀원 간 갈등의 낌새만 보여도 바로 화해를 주선한다",
      "모두가 만족하는 결정을 내리기 위해 애쓴다",
    ],
    bestMatch: {
      type: "ISTP",
      title: "조용한 백엔드 버그 킬러",
      reason: "왁자지껄한 분위기에 묵직한 신뢰감을 더해주는 파트너",
    },
    worstMatch: {
      type: "INTJ",
      title: "독고다이 아키텍트 마스터",
      reason: "혼자만의 시간을 존중받지 못한다고 느낄 때 서운해한다",
    },
  },
  ISTP: {
    type: "ISTP",
    title: "조용한 백엔드 버그 킬러",
    tagline: "말은 필요 없다. 코드로 증명하는 실력파 엔지니어",
    emoji: "🛠️",
    gradient: "from-teal-500 to-cyan-600",
    traits: [
      "말보다 코드로 증명하는 걸 더 편하게 여긴다",
      "복잡한 버그일수록 오히려 더 몰입하고 흥미를 느낀다",
      "불필요한 회의보다 실제 문제 해결에 시간을 쓰고 싶다",
    ],
    bestMatch: {
      type: "ESFJ",
      title: "네트워킹 만렙 분위기 메이커",
      reason: "무뚝뚝한 실력파에게 살가운 소통 창구가 되어준다",
    },
    worstMatch: {
      type: "ENFJ",
      title: "팀의 성장을 이끄는 스크럼 마스터",
      reason: "지나친 관심과 감정 공유 요청이 부담스럽게 느껴진다",
    },
  },
  ISFP: {
    type: "ISFP",
    title: "자유로운 영혼의 프론트엔드 아티스트",
    tagline: "화면 인터랙션은 예술이죠. 감각적인 개발자",
    emoji: "🖌️",
    gradient: "from-teal-500 to-cyan-600",
    traits: [
      "픽셀 하나, 애니메이션 한 줄에도 감각을 담아낸다",
      "정해진 틀보다 그때그때의 영감을 따르는 걸 좋아한다",
      "갈등 상황을 피하고 조용히 내 할 일에 집중한다",
    ],
    bestMatch: {
      type: "ESTJ",
      title: "폭풍 추진력의 PM 리더",
      reason: "자유로운 감각에 명확한 방향과 추진력을 더해준다",
    },
    worstMatch: {
      type: "ENTJ",
      title: "거침없는 빌드업 CPO",
      reason: "강하게 밀어붙이는 스타일에 위축되고 지치기 쉽다",
    },
  },
  ESTP: {
    type: "ESTP",
    title: "위기 탈출 넘버원 소방수 개발자",
    tagline: "라이브 서버 터졌다고요? 지금 당장 고칩니다",
    emoji: "🚒",
    gradient: "from-teal-500 to-cyan-600",
    traits: [
      "라이브 서버 장애 알림에 오히려 아드레날린이 솟는다",
      "계획보다 지금 눈앞의 문제 해결이 먼저다",
      "몸으로 부딪히며 배우는 실전형 문제 해결러",
    ],
    bestMatch: {
      type: "ISFJ",
      title: "든든한 백업 요정 서비스 운영자",
      reason: "화끈한 대응력 뒤에서 꼼꼼하게 마무리를 책임져준다",
    },
    worstMatch: {
      type: "INFJ",
      title: "비전 제시형 프로덕트 전략가",
      reason: "장기적인 고민이 길어질수록 답답함을 느낀다",
    },
  },
  ESFP: {
    type: "ESFP",
    title: "퍼포먼스 만렙 스타 마케터",
    tagline: "우리 서비스 모르는 사람 없게 해 주세요. 바이럴 장인",
    emoji: "🎤",
    gradient: "from-teal-500 to-cyan-600",
    traits: [
      "새로운 캠페인 아이디어만 보면 눈이 반짝인다",
      "팀 분위기를 순식간에 밝게 만드는 에너지 부자",
      "계획보다 지금 이 순간의 재미와 임팩트를 중요하게 여긴다",
    ],
    bestMatch: {
      type: "ISTJ",
      title: "팩트 체크 중심 QA 마스터",
      reason: "화려한 아이디어를 꼼꼼하게 현실로 만들어주는 파트너",
    },
    worstMatch: {
      type: "INTP",
      title: "밤샘 분석 AI 연구원",
      reason: "깊은 분석과 침묵이 길어지면 답답함을 느낀다",
    },
  },
};

export function getPersona(type: string): Persona | undefined {
  return personas[type.toUpperCase() as MBTIType];
}
