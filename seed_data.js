// HanWha IT Service Wiki - Seed Data (SRS v2.0 & 실무 CSV/TXT 데이터 반영)
const SEED_KNOWLEDGE_DATA = [
  {
    id: "seed-ubcube-01",
    title: "ubCUBE (문서보안 DRM)",
    sourceFile: "서울 유지보수 대장 / PC지원 단톡방.txt",
    date: "2024-01-02",
    department: "사업전략1팀 / 커뮤니케이션팀 / 서현사업장",
    categoryLarge: "보안프로그램",
    categoryMedium: "ubCUBE",
    symptom: "문서보안 복호화 문의 및 문서 열기 불가, 엑셀 ACL 모드 오류 발생",
    actionTaken: "DRM 삭제 후 재설치 및 보안팀(강병식 과장) 연동 예외 패치 업데이트",
    sbar: {
      situation: "임직원이 보안 문서(암호화 파일) 열람 시 복호화 실패, 화면 튕김 또는 'ACL 모드 오류' 팝업 발생.",
      background: "ubCUBE 에이전트 업데이트 및 MS 오피스 후킹 모듈 간의 버전 불일치 또는 로그인 패스워드 미동기화로 발생.",
      assessment: "유비큐브 DRM 로그인 정보 잠김 또는 기존 설치 인스턴스 손상. 복합기 인쇄 스풀러와 커널 충돌 가능성 확인.",
      recommendation: "1. [[ubCUBE 삭제 툴]]을 이용해 기존 에이전트 완전 제거\n2. 컴퓨터 재부팅 후 최신 ubCUBE 보안 패치 수동 설치\n3. [[Tgate]] 패스워드와 연동 동기화 확인\n4. 엑셀 ACL 오류 지속 시 Safe Mode 실행 안내"
    },
    tags: ["DRM", "ubCUBE", "복호화", "보안프로그램", "문서보안"],
    createdAt: "2024-01-02T09:00:00.000Z",
    updatedAt: "2026-08-07T14:00:00.000Z"
  },
  {
    id: "seed-tgate-01",
    title: "Tgate (무결성 및 인증 에이전트)",
    sourceFile: "서울/판교 유지보수 대장 / PC지원 단톡방.txt",
    date: "2024-01-09",
    department: "경영진단팀 / 인재채용팀 / 구미사업장",
    categoryLarge: "보안프로그램",
    categoryMedium: "Tgate",
    symptom: "티게이트 패스워드 5회 이상 불일치로 계정 잠김, 무결성 검사 실패 경고",
    actionTaken: "보안팀 패스워드 초기화 안내 및 V3 무결성 재설치 후 무결성 성공 확인",
    sbar: {
      situation: "Tgate 로그인 패스워드 5회 오류 시 계정이 강제 잠금되며 네트워크 접속 및 내부 솔루션 접근 불가.",
      background: "매월 Tgate 패스워드 변경 주기 도래 시 미변경 단말이 구형 패스워드로 재접속을 시도하여 잠김 발생.",
      assessment: "V3 백신 무결성 검사 실패와 동시 발생 시 보안 에이전트 프로필 파손 가능성 높음.",
      recommendation: "1. 보안팀 담당자(사번 초기화)를 통해 Tgate 패스워드 초기화\n2. [[V3 백신]] 수동 업데이트 및 무결성 검사 재수행\n3. [[WIPS 무선인증]] 프로필 재설정"
    },
    tags: ["Tgate", "무결성실패", "패스워드초기화", "보안인증"],
    createdAt: "2024-01-09T10:00:00.000Z",
    updatedAt: "2026-08-07T14:00:00.000Z"
  },
  {
    id: "seed-gradius-01",
    title: "Gradius (네트워크 차단 및 보안인증)",
    sourceFile: "판교 유지보수 대장 / PC지원 단톡방.txt",
    date: "2024-02-21",
    department: "회계1팀 / 레이다MRO팀 / 판교BS센터",
    categoryLarge: "보안프로그램",
    categoryMedium: "Gradius",
    symptom: "퇴직자 계정 등록으로 인한 랜카드 인식 불가 및 일반망/방산망 네트워크 차단",
    actionTaken: "Gradius 차단 해제, OTP 번호 수령 후 사원증 계정 재등록 및 무선랜 어댑터 초기화",
    sbar: {
      situation: "Gradius 보안 에이전트가 단말 MAC 주소 또는 사번 변경을 탐지하여 IP 네트워크 어댑터를 강제 차단.",
      background: "조직 이동, 사번 변경, 또는 퇴사자 단말 재할당 시 기존 Gradius 등록 정보가 잔존하여 차단 발생.",
      assessment: "그라디우스 IP 설정 차단 기능 작동으로 장치관리자 랜카드 드라이버 표출 오류 유발.",
      recommendation: "1. [[Gradius OTP 요청]] 코드를 받아 비상인증 코드 입력\n2. 구형 사용자 사번 정보 삭제 및 신규 사번 재등록\n3. [[네트워크 어댑터 초기화]] 실행"
    },
    tags: ["Gradius", "OTP", "IP차단", "그라디우스", "네트워크차단"],
    createdAt: "2024-02-21T11:00:00.000Z",
    updatedAt: "2026-08-07T14:00:00.000Z"
  },
  {
    id: "seed-wips-01",
    title: "WIPS (무선 침입 방지 시스템) & SSID",
    sourceFile: "서울/판교 유지보수 대장 / PC지원 단톡방.txt",
    date: "2024-01-09",
    department: "정보시스템실ICT / 무인체계팀 / 커뮤니케이션팀",
    categoryLarge: "네트워크",
    categoryMedium: "WIPS/무선",
    symptom: "신규 단말 무선 접속 시 WIPS 차단 발생, Hidden SSID(HSC_HQ) 접속 불가",
    actionTaken: "보안팀 무선 점검 대장에 단말 MAC 주소 수동 승인 등록 및 WIPS 무선 차단 예외 처리 인가",
    sbar: {
      situation: "사내 와이파이(HSC_HQ, HSC_HQE) 무선 연결 시 미인가 장비로 오탐지되어 WIPS가 신호를 강제 차단.",
      background: "사내 보안팀의 무선 와이파이 보안 SSID 숨김(Hidden) 개보수 및 미등록 단말 주기적 자동 차단.",
      assessment: "단말 무선 랜카드 MAC 주소가 보안팀 무선인증 DB에 사전 승인되지 않아 발생.",
      recommendation: "1. [[보안팀 WIPS 등록]] 시스템에 단말 MAC 주소 상신\n2. 숨겨진 네트워크 이름 `HSC_HQ` 수동 지정 입력\n3. [[무선인증솔루션]] 패스워드 동기화"
    },
    tags: ["WIPS", "와이파이", "HSC_HQ", "무선차단", "MAC등록"],
    createdAt: "2024-01-09T14:00:00.000Z",
    updatedAt: "2026-08-07T14:00:00.000Z"
  },
  {
    id: "seed-epp-dll-01",
    title: "EPP V3 오진에 따른 system32 DLL 복구 절차",
    sourceFile: "PC지원 단톡방.txt",
    date: "2025-10-16",
    department: "용인연구소 / 전사 공통",
    categoryLarge: "보안프로그램",
    categoryMedium: "Tgate/V3",
    symptom: "방산망 전사 EPP V3 백신 업데이트 오류로 인해 MS 오피스 기동 불가 대규모 장애 발생",
    actionTaken: "정상 일반망 PC에서 9개 필수 DLL 추출 후 PE 부팅으로 방산 PC system32 폴더 덮어쓰기 복구",
    sbar: {
      situation: "EPP V3 백신 패키지 결함으로 system32 내 오피스 필수 라이브러리 파일이 오진 삭제되어 MS Office 전면 마비.",
      background: "오프라인 방산망 내 백신 오탐 정책이 집행되어 Windows system32 필수 서비스 DLL 9종이 격리됨.",
      assessment: "schedsvc.dll, wuaueng.dll, wuapi.dll, sppsvc.exe, slc.dll 등 9개 핵심 DLL 소실 확인.",
      recommendation: "1. 정상 일반망 PC에서 [[System32 핵심 DLL 9종]] 추출 복사\n2. 대상 PC를 Windows PE USB로 부팅\n3. `C:\\Windows\\System32\\` 경로에 수동 덮어쓰기 복구\n4. [[V3 백신]] 예외 정책 강제 업데이트"
    },
    tags: ["DLL복구", "EPP", "V3오진", "system32", "오피스오류"],
    createdAt: "2025-10-16T08:05:00.000Z",
    updatedAt: "2026-08-07T14:00:00.000Z"
  },
  {
    id: "seed-samsung-printer-01",
    title: "삼성 스캔 복합기 (Easy Printer Manager) 설정",
    sourceFile: "서울/판교 유지보수 대장 / PC지원 Q&A",
    date: "2024-01-15",
    department: "경영기획1팀 / 인사2팀 / 사장실",
    categoryLarge: "OA기기",
    categoryMedium: "복합기",
    symptom: "삼성 복합기 스캔 시 '등록된 사용자 수 초과(200명)' 또는 사원증 등록 오류",
    actionTaken: "Samsung Easy Printer Manager 프로그램에서 미사용 사번 정리 및 사원증 스캔 매핑 재등록",
    sbar: {
      situation: "삼성 스캔 전용 복합기 장치 패널에서 스캔 사용자를 등록하려 하나 200명 한도 초과로 등록 안 됨.",
      background: "퇴직자 및 전배 임직원의 기존 스캔 프로필이 초기화되지 않고 유휴 데이터로 누적됨.",
      assessment: "삼성 스캔복합기 장치 메모리 한계(최대 200명) 도달.",
      recommendation: "1. [[PC지원실 지원]] 요청하여 복합기 IP 접속 후 사용자 리스트 초기화\n2. [[Samsung Easy Printer Manager]]에서 본인 사번/사번 재등록\n3. 스캔 저장 폴더 경로 설정 확인"
    },
    tags: ["삼성복합기", "이지프린터", "스캔등록", "사용자초과"],
    createdAt: "2024-01-15T09:00:00.000Z",
    updatedAt: "2026-08-07T14:00:00.000Z"
  },
  {
    id: "seed-sindo-printer-01",
    title: "신도리코 출력 복합기 사번 드라이버 설정",
    sourceFile: "서울/판교 유지보수 대장 / PC지원 Q&A",
    date: "2024-01-04",
    department: "인재채용팀 / 회계1팀 / 지원팀",
    categoryLarge: "OA기기",
    categoryMedium: "복합기",
    symptom: "신도리코 복합기 출력 전송 시 비밀번호 오류 또는 인쇄물 미출력 현상",
    actionTaken: "SetUName 속성 사번으로 수정 후 드라이버 재설치 및 최초 사원증 카드 탭 등록 완료",
    sbar: {
      situation: "신도 복합기로 문서 인쇄 명령을 전송하였으나 복합기 전면 패널에서 본인 사원증을 태그해도 인쇄 목록 미표출.",
      background: "프린터 드라이버 환경설정 내 사용자 ID(SetUName) 항목이 사번이 아닌 윈도우 계정명으로 자동 지정됨.",
      assessment: "사내 보안 출력 서버와 프린터 드라이버 ID 인증 매핑 불일치.",
      recommendation: "1. 제어판 > 장치 및 프린터 > 신도 복합기 속성 진입\n2. 장치 구성 탭에서 사용자 인증 ID를 [[본인 사번]]으로 변경\n3. 최초 인쇄 시 보안팀 승인 및 사원증 태그 등록"
    },
    tags: ["신도리코", "보안출력", "SetUName", "사원증등록"],
    createdAt: "2024-01-04T13:00:00.000Z",
    updatedAt: "2026-08-07T14:00:00.000Z"
  },
  {
    id: "seed-cleverus-01",
    title: "클레버스 (Cleverus) 그룹웨어 & 메신저 접속 오류",
    sourceFile: "서울/판교 유지보수 대장 / PC지원 단톡방.txt",
    date: "2024-01-17",
    department: "금융팀 / 커뮤니케이션팀 / 지원팀",
    categoryLarge: "소프트웨어",
    categoryMedium: "기본 프로그램",
    symptom: "클레버스 전자결재 안열림, 메신저 로그인 실패 (도메인 변경 대응)",
    actionTaken: "엣지 브라우저 쿠키 초기화 및 메신저 도메인 주소 `hanwha.com` -> `hanwhasystems.com` 변경",
    sbar: {
      situation: "클레버스 그룹웨어 로그인 불가능 및 아웃룩 연동 메신저 Add-in 튕김 현상 발생.",
      background: "사내 도메인 개편으로 메신저 서버 접속 도메인 주소가 업데이트되었으나 기존 클라이언트에 미반영.",
      assessment: "MS Edge 브라우저 캐시 손상 및 메신저 환경설정 서버 도메인 주소 구버전 잔존.",
      recommendation: "1. [[MS Edge 브라우저]] 설정 > 쿠키 및 사이트 데이터 전체 삭제\n2. 클레버스 메신저 환경설정에서 도메인을 `hanwhasystems.com`으로 수정\n3. [[아웃룩 Add-in]] 재설치"
    },
    tags: ["클레버스", "메신저", "도메인변경", "전자결재", "Edge초기화"],
    createdAt: "2024-01-17T11:00:00.000Z",
    updatedAt: "2026-08-07T14:00:00.000Z"
  },
  {
    id: "seed-mangan-01",
    title: "망간자료전송 에이전트 실행 및 서버 연결",
    sourceFile: "서울/판교 유지보수 대장 / PC지원 단톡방.txt",
    date: "2024-03-06",
    department: "구매1팀 / 사이버전장팀 / 해양연구소",
    categoryLarge: "보안프로그램",
    categoryMedium: "망간자료전송",
    symptom: "방산망 PC에서 망간자료전송 구동 시 프로토콜 버전 불일치 및 서버 연결 끊김",
    actionTaken: "구버전 삭제 후 최신 버전 망간전송 패키지(instal.hanwha-rd.com) 재설치 안내",
    sbar: {
      situation: "방산망과 일반망 간 데이터 전송 시 망간자료전송 프로그램 실행 실패 및 서버 인증 에러 발생.",
      background: "망간전송 보안 서버 정책 업데이트에 따라 구버전 에이전트의 통신 포트 접속이 차단됨.",
      assessment: "에이전트 프로토콜 버전 불일치로 인한 인증 실패.",
      recommendation: "1. 사내 방산망 전용 다운로드 사이트 `instal.hanwha-rd.com` 접속\n2. [[최신 망간자료전송 패키지]] 다운로드 및 덮어쓰기 설치\n3. [[Tgate 인증]] 동기화 상태 확인"
    },
    tags: ["망간자료전송", "방산망", "자료전송", "보안프로그램"],
    createdAt: "2024-03-06T15:00:00.000Z",
    updatedAt: "2026-08-07T14:00:00.000Z"
  },
  {
    id: "seed-format-lowlevel-01",
    title: "협력업체 반출 PC 로우포맷 (Zero-Filling) 표준 절차",
    sourceFile: "PC지원 단톡방.txt / 판교 유지보수 대장",
    date: "2024-04-04",
    department: "지능형지휘통제팀 / 대공방어체계팀 / 사업마케팅팀",
    categoryLarge: "하드웨어",
    categoryMedium: "포맷/로우포맷",
    symptom: "협력업체 철수 및 출장 반출 PC의 기밀 정보 잔존 우려에 따른 보안 포맷 시한 도래",
    actionTaken: "전자결재 포맷신청서 수령 후 전산 기기 하드디스크 전량 로우포맷(Zero-Filling) 및 OS 재설치",
    sbar: {
      situation: "사외 반출 또는 협력사 반납 장비의 기밀 기술자료 유출 방지를 위한 물리적 완전 삭제 필요.",
      background: "사내 정보보안 규정에 의거하여 임차/반출/파기 자산은 단순 윈도우 포맷이 아닌 로우포맷 필수.",
      assessment: "단순 빠른 포맷 실행 시 복구 유틸리티를 통한 데이터 복원 위험 잔존.",
      recommendation: "1. 클래버스 전자결재 [[PC 포맷 신청서]] 승인 확인\n2. 전용 로우포맷 유틸리티(Zero-filling) 실행하여 디스크 전체 0값 덮어쓰기\n3. [[사내 표준 OS 마스터 이미지]] 재설치 및 보안 스티커 봉인"
    },
    tags: ["로우포맷", "ZeroFilling", "보안포맷", "반출PC", "기밀파기"],
    createdAt: "2024-04-04T17:30:00.000Z",
    updatedAt: "2026-08-07T14:00:00.000Z"
  }
];
