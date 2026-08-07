const fs = require('fs');
const path = require('path');

const knownIssuesItems = [
  {
    id: "known-issue-01",
    title: "[Known Issue] MEMORY_MANAGEMENT (0x0000001A) 보안 패치 충돌",
    sourceFile: "windows-known-issues-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "소프트웨어",
    categoryMedium: "OS",
    symptom: "윈도우 11 최신 누적 보안 패치가 메모리 리소스 할당 테이블과 손상 마찰을 일으키며 0x0000001A 블루스크린 무한 발생",
    actionTaken: "1. 중요 소스 및 작업 데이터 안전 백업 진행 2. 최근 누적 업데이트 수동 제거 또는 정합 OS 마스터 이미지를 활용한 클린 재설치 적용",
    tags: ["Windows11", "KnownIssue", "MEMORY_MANAGEMENT", "0x0000001A", "보안패치", "OS포맷"],
    sbar: {
      situation: "[S] 윈도우 11 최신 누적 보안 패치 적용 후 메모리 리소스 할당 테이블 파손으로 0x0000001A 블루스크린 반복 발생.",
      background: "[B] OS 업데이트와 사내 보안 에이전트 간의 커널 메모리 주소 할당 정합성 충돌 (windows-known-issues-v1.md).",
      assessment: "[A] 가상 메모리 매핑 구조 위반 및 물리 메모리 할당 테이블 마찰.",
      recommendation: "[R] 1. 중요 소스 데이터 안전 백업\n2. [[Windows 업데이트 제거]] 수동 이행\n3. 지속 발생 시 정합 OS 마스터 이미지 기반 [[OS 클린 재설치]] 적용"
    },
    wikilinks: ["Windows 업데이트 제거", "OS 클린 재설치"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "known-issue-02",
    title: "[Known Issue] Windows Update 56% 정지 및 무한 부팅 복구",
    sourceFile: "windows-known-issues-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "소프트웨어",
    categoryMedium: "OS",
    symptom: "윈도우 업데이트 진행 중 56% 구간에서 진행이 정지되며 시스템 무한 재부팅 루프 발생",
    actionTaken: "1. BIOS 진입 후 Secure Boot 정책 Disabled 변경 2. 안전모드 진입 3. SoftwareDistribution 캐시 초기화 (net stop wuauserv)",
    tags: ["Windows11", "KnownIssue", "WindowsUpdate", "SecureBoot", "안전모드", "SoftwareDistribution"],
    sbar: {
      situation: "[S] 윈도우 11 업데이트 적용 중 56% 위치에서 무한 정지 및 부팅 루프가 반복됨.",
      background: "[B] UEFI 보안 부팅(Secure Boot) 무결성 검증 정책과 업데이트 바이너리 간의 커널 서명 충돌.",
      assessment: "[A] Secure Boot 무결성 체크 실패로 인한 업데이트 프로세스 교착 상태.",
      recommendation: "[R] 1. BIOS 진입 후 `Secure Boot` 정책 임시 비활성화(`Disabled`)\n2. [[안전 모드]] 진입\n3. CMD(관리자)에서 `net stop wuauserv` 후 `C:\\Windows\\SoftwareDistribution` 폴더 삭제 초기화\n4. 업데이트 정상 완료 후 Secure Boot 재활성화."
    },
    wikilinks: ["안전 모드"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "known-issue-03",
    title: "[Known Issue] Windows 11 기본 캡처도구 및 그림판 강제 종료",
    sourceFile: "windows-known-issues-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "소프트웨어",
    categoryMedium: "기본 프로그램",
    symptom: "외부 금융/행정 사이트 접속 후 기본 캡처도구(Snipping Tool) 및 그림판 실행 시 아무 오류창 없이 즉시 강제 종료",
    actionTaken: "1. 제어판 > 프로그램 및 기능 진입 2. 상주 중인 nProtect Online Security 및 TouchENKey 프로세스 수동 종료 및 삭제 3. 캡처도구 재실행",
    tags: ["Windows11", "KnownIssue", "캡처도구", "nProtect", "TouchENKey", "키보드보안"],
    sbar: {
      situation: "[S] 윈도우 기본 캡처도구 및 그림판 기동 시 아무 오류창 없이 즉시 프로세스 강제 종료됨.",
      background: "[B] 외부 금융/행정 접속 시 자동 상주하는 키보드보안 에이전트(nProtect, TouchENKey)와 윈도우 캡처 엔진 스레드 간 스크린 후킹 방지 프로세스 충돌.",
      assessment: "[A] 키보드보안 프로그램이 캡처도구 스레드를 무단 점유하여 강제 종료 유발.",
      recommendation: "[R] 1. 제어판 > 프로그램 및 기능 진입\n2. 접속 후 상주 중인 [[nProtect Online Security]] 및 [[TouchENKey]] 프로세스 수동 종료 및 미사용 시 삭제\n3. 캡처도구 재실행."
    },
    wikilinks: ["nProtect Online Security", "TouchENKey"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "known-issue-04",
    title: "[Known Issue] Windows 11 블루투스 무선 장치 유실 및 차단",
    sourceFile: "windows-known-issues-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "네트워크",
    categoryMedium: "WIPS/무선",
    symptom: "블루투스 무선 키보드/마우스 신호가 주기적으로 완전 유실되거나 연결 끊김",
    actionTaken: "1. 블루투스 직연결 대신 로지텍 유니파잉 수신기(동글 USB) 우회 연결 2. 보안팀에 Gradius 무선 예외 인가 상신",
    tags: ["Windows11", "KnownIssue", "블루투스", "Gradius", "유니파잉", "동글"],
    sbar: {
      situation: "[S] 윈도우 11 단말에서 블루투스 무선 키보드/마우스 신호가 주기적으로 완전 유실됨.",
      background: "[B] 사내 전사 망 제어 및 정보보호 솔루션 [[Gradius]]의 무선 매체 차단 정책이 블루투스 어댑터를 미인가 매체로 오탐하여 강제 셧다운.",
      assessment: "[A] Gradius 에이전트에 의한 블루투스 무선 라디오 하드웨어 차단.",
      recommendation: "[R] 1. 블루투스 직연결 대신 [[로지텍 유니파잉 수신기 (동글 USB)]] 우회 연결\n2. 보안팀에 [[Gradius 무선 예외 인가]] 신청 상신."
    },
    wikilinks: ["Gradius", "로지텍 유니파잉 수신기 (동글 USB)", "Gradius 무선 예외 인가"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "known-issue-05",
    title: "[Known Issue] LG 그램 단말 웹 파일 업로드 및 첨부 차단 오류",
    sourceFile: "windows-known-issues-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "소프트웨어",
    categoryMedium: "기타",
    symptom: "신규 지급된 LG 그램 노트북에서 웹 브라우저, 클레버스 메일 등 파일 첨부 기능 클릭 시 무한 먹통/프리징",
    actionTaken: "1. 제어판 > 프로그램 및 기능 진입 2. OEM 번들 프로그램 LG Smart Assistant 수동 완전 삭제 3. PC 재부팅 후 Gradius 정책 재동기화",
    sbar: {
      situation: "[S] 신규 지급된 LG 그램 노트북에서 웹 브라우저, 클레버스 메일 등 파일 첨부 기능 작동 불가.",
      background: "[B] LG 그램 OEM 제어 모듈인 `LG Smart Assistant`와 사내 [[Gradius]] 보안 엔진 간의 파일 접근 커널 메모리 후킹 충돌.",
      assessment: "[A] 파일 선택 대화상자(File Open Dialog) 스레드가 이중 후킹되어 프리징 유발.",
      recommendation: "[R] 1. 제어판 > 프로그램 및 기능 진입\n2. OEM 번들 프로그램 [[LG Smart Assistant]] 수동 완전 삭제\n3. PC 재부팅 후 [[Gradius]] 정책 재동기화."
    },
    wikilinks: ["LG Smart Assistant", "Gradius"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "known-issue-06",
    title: "[Known Issue] CrowdStrike Falcon (0x50, 0x7E) 블루스크린 대규모 장애 복구",
    sourceFile: "windows-known-issues-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "보안프로그램",
    categoryMedium: "Tgate/V3",
    symptom: "CrowdStrike Falcon 보안 패치 결함으로 0x00000050, 0x0000007E 블루스크린 무한 부팅 마비",
    actionTaken: "1. Safe Mode 또는 WinPE USB 부팅 2. C:\\Windows\\System32\\drivers\\CrowdStrike\\ 이동 3. C-00000291*.sys 수동 강제 삭제",
    tags: ["Windows11", "KnownIssue", "CrowdStrike", "Falcon", "0x00000050", "0x0000007E", "안전모드"],
    sbar: {
      situation: "[S] 글로벌 보안 에이전트 패치 오류로 전사 PC가 0x50, 0x7E 블루스크린으로 윈도우 진입 불가.",
      background: "[B] CrowdStrike Falcon 에이전트 드라이버 패치 파일이 무효 메모리 영역을 무단 침범하여 커널 스래시 유발.",
      assessment: "[A] `C-00000291*.sys` 드라이버 파일의 커널 파손.",
      recommendation: "[R] 1. [[안전 모드]] 또는 WinPE USB로 부팅\n2. `C:\\Windows\\System32\\drivers\\CrowdStrike\\` 디렉터리로 이동\n3. 손상 드라이버 파일 `C-00000291*.sys` 수동 강제 삭제\n4. 정상 부팅 후 최신 정책 수동 주입."
    },
    wikilinks: ["안전 모드"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Load existing seed data
const seedPath = path.join(__dirname, 'seed_data.js');
let currentSeed = [];

if (fs.existsSync(seedPath)) {
  const content = fs.readFileSync(seedPath, 'utf8');
  const jsonMatch = content.match(/const SEED_KNOWLEDGE_DATA = (\[[\s\S]*\]);/);
  if (jsonMatch) {
    try {
      currentSeed = JSON.parse(jsonMatch[1]);
    } catch(e) {}
  }
}

// Remove old known-issue items if any, then prepend
const nonKnownIssueItems = currentSeed.filter(item => !item.id.startsWith('known-issue-'));
const combinedStore = [...knownIssuesItems, ...nonKnownIssueItems];

console.log(`Combined total seed items: ${combinedStore.length}`);

// Write seed_data.js
const fileOutput = `// HanWha IT Service Knowledge Wiki - Full Seed Data (${combinedStore.length} records)
const SEED_KNOWLEDGE_DATA = ${JSON.stringify(combinedStore, null, 2)};
`;

fs.writeFileSync(seedPath, fileOutput, 'utf8');
console.log(`Successfully updated seed_data.js with ${combinedStore.length} items!`);

// Write data/seed.csv
const destCsvPath = path.join(__dirname, 'data', 'seed.csv');
let csvRows = ['Source_File,Date,Department,Category_Large,Category_Medium,Symptom,Action_Taken'];

combinedStore.forEach(item => {
  const cleanSym = `"${(item.symptom || '').replace(/"/g, '""')}"`;
  const cleanAct = `"${(item.actionTaken || '').replace(/"/g, '""')}"`;
  csvRows.push(`${item.sourceFile},${item.date},${item.department},${item.categoryLarge},${item.categoryMedium},${cleanSym},${cleanAct}`);
});

fs.writeFileSync(destCsvPath, csvRows.join('\n'), 'utf8');
console.log(`Updated data/seed.csv with ${combinedStore.length} total records!`);
