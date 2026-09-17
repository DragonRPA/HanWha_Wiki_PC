const fs = require('fs');
const path = require('path');

const hardwareWikiItems = [
  {
    id: "hw-trouble-01",
    title: "RAM(메모리) 불량 증상 및 세척 정비 가이드",
    sourceFile: "wiki-hardware-troubleshooting-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "하드웨어",
    categoryMedium: "RAM",
    symptom: "전원 인가 후 메인보드 비프음 경고(3~4회) 및 화면 무반응, MEMORY_MANAGEMENT (0x0000001A) 블루스크린 발생",
    actionTaken: "1. 잔류 전류 방전 후 RAM 적출 2. 금색 접촉 단자(Gold contact) 지우개 및 알코올 세척 3. 슬롯 교차 재장착 4. mdsched.exe 메모리 진단",
    tags: ["하드웨어", "RAM", "메모리불량", "RAM세척", "비프음", "0x0000001A", "MEMORY_MANAGEMENT"],
    sbar: {
      situation: "[S] PC 전원 인가 시 비프음 3~4회 발생하며 화면 안 나옴. 또는 0x0000001A 블루스크린 다수 발생.",
      background: "[B] RAM 골드 단자 산화, 슬롯 접촉부 먼지 유입 및 가상 메모리 매핑 위반 (wiki-hardware-troubleshooting-v1.md).",
      assessment: "[A] RAM 슬롯 접촉 불량 또는 메모리 칩셋 물리적 불량.",
      recommendation: "[R] 1. 전원 케이블 분리 후 잔류 전원 방전\n2. RAM 적출 후 금색 접촉 단자를 [[RAM 세척]] 지우개/알코올로 세척\n3. 슬롯 위치 교차 재장착\n4. `mdsched.exe` 메모리 진단 실행"
    },
    wikilinks: ["RAM 세척", "MEMORY_MANAGEMENT (0x0000001A)"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "hw-trouble-02",
    title: "그래픽카드(GPU) 화면 줄가기/노이즈 및 TDR 장애 대응",
    sourceFile: "wiki-hardware-troubleshooting-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "하드웨어",
    categoryMedium: "그래픽카드",
    symptom: "화면 줄 가기, 분홍/초록 격자 무늬 노이즈(Artifacting), 블랙아웃, 팬 폭주, VIDEO_TDR_FAILURE 발생",
    actionTaken: "1. 안전 모드 진입 2. DDU(Display Driver Uninstaller) 툴 이용 기존 드라이버 완전 삭제 3. WHQL 최신 공식 드라이버 클린 설치 4. 8핀 보조전원 체결 실사",
    tags: ["하드웨어", "GPU", "그래픽카드", "Artifacting", "DDU", "VIDEO_TDR_FAILURE"],
    sbar: {
      situation: "[S] 모니터 화면 분홍/초록 격자 노이즈 발생, 3D 구동 시 모니터 블랙아웃 및 VIDEO_TDR_FAILURE 발생.",
      background: "[B] 그래픽카드 칩셋 메모리(VRAM) 파손, GPU 과열 또는 디스플레이 드라이버 TDR 복구 실패.",
      assessment: "[A] GPU 비디오 렌더링 스케줄러 멈춤 및 전원 공급 부족.",
      recommendation: "[R] 1. [[안전 모드]] 부팅 후 DDU 툴로 기존 그래픽 드라이버 삭제\n2. WHQL 공식 인증 그래픽 드라이버 재설치\n3. PCIe 슬롯 및 보조 전원 8핀 물리 체결 실사"
    },
    wikilinks: ["안전 모드", "VIDEO_TDR_FAILURE (0x00000116 / 0x00000117)"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "hw-trouble-03",
    title: "유선 LAN 식별되지 않은 네트워크 & 커넥터 수리",
    sourceFile: "wiki-hardware-troubleshooting-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "네트워크",
    categoryMedium: "IP/DNS",
    symptom: "지구본 아이콘 활성화, 고정 IP 입력 시에도 '식별되지 않은 네트워크' 오류 및 잦은 패킷 유실",
    actionTaken: "1. netsh winsock reset 및 IP 초기화 2. 파손된 RJ-45 커넥터 전용 툴 재가공 3. WIPS 및 EPP 차단 여부 검증",
    sbar: {
      situation: "[S] 유선 LAN 연결 시 지구본 아이콘이 뜨며 식별되지 않은 네트워크 에러 발생.",
      background: "[B] RJ-45 랜케이블 핀 물리적 파손, 스택 어댑터 프로토콜 꼬임, 보안팀 MAC 차단.",
      assessment: "[A] 물리 렌선 핀 접촉 불량 또는 WIPS/보안 어댑터 세팅 파손.",
      recommendation: "[R] 1. CMD에서 `netsh winsock reset` 및 `netsh int ip reset` 수행\n2. 파손된 [[RJ-45 커넥터]] 전용 툴로 핀 재배열 수동 랜작업\n3. 보안팀 무선/유선 MAC 등록 조회"
    },
    wikilinks: ["WIPS (무선 침입 방지 시스템) & SSID"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "hw-trouble-04",
    title: "무선 WIFI AP 목록 유실 & Gradius 무선 차단 조치",
    sourceFile: "wiki-hardware-troubleshooting-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "네트워크",
    categoryMedium: "WIPS/무선",
    symptom: "가용 와이파이 AP 목록 완전 유실, Gradius 보안 솔루션의 무선랜 어댑터 강제 차단 현상",
    actionTaken: "1. Gradius 오탐 해제 및 Tgate 연동 재설치 2. 무선 드라이버 속성 '전원 절약을 위해 컴퓨터가 이 장치를 끌 수 있음' 체크 해제",
    sbar: {
      situation: "[S] 와이파이 목록이 모두 사라지고 무선랜 어댑터가 작동하지 않음.",
      background: "[B] 사내 전사 통합 보안 솔루션 [[Gradius]] 무선 매체 통제 정책 오탐지.",
      assessment: "[A] Gradius에 의한 무선랜카드 장치 강제 셧다운 및 전원 절약 옵션 에러.",
      recommendation: "[R] 1. [[Gradius]] 차단 예외 처리 및 [[Tgate]] 연동 재설치\n2. 장치 관리자 > 무선 랜카드 속성 > 전원 관리 탭에서 '전원 절약을 위해 컴퓨터가 이 장치를 끌 수 있음' 해제"
    },
    wikilinks: ["Gradius (네트워크 차단 및 보안인증)", "Tgate (무결성 및 인증 에이전트)"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "hw-trouble-05",
    title: "AUDIO 출력장치 미설치 & 마이크 송수신 불가 조치",
    sourceFile: "wiki-hardware-troubleshooting-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "하드웨어",
    categoryMedium: "기타",
    symptom: "소리 아이콘에 '출력 장치 설치 안 됨' 경고 표출, Teams/Zoom 화상 회의 마이크 음성 미인식",
    actionTaken: "1. mmsys.cpl 실행 후 기본 재생/녹음 장치 지정 2. Realtek/인텔 SST 사운드 드라이버 롤백 3. 윈도우 마이크 개인정보 접근 허용",
    sbar: {
      situation: "[S] 윈도우 오디오 출력 장치가 사라지고 Teams/Zoom 화상 회의 마이크 음성이 송수신되지 않음.",
      background: "[B] 오디오 서비스 드라이버(Realtek/Intel SST) 업데이트 충돌 및 윈도우 개인정보 권한 차단.",
      assessment: "[A] 사운드 드라이버 서비스 정지 또는 마이크 개인정보 접근 차단.",
      recommendation: "[R] 1. `mmsys.cpl` 실행하여 기본 장치 지정\n2. 장치 관리자에서 [[인텔 스마트 사운드 기술 (SST)]] 드라이버 롤백\n3. 윈도우 설정 > 개인 정보 및 보안 > 마이크 앱 접근 권한 '켜기'"
    },
    wikilinks: [],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "hw-trouble-06",
    title: "터치패드 포인터 멈춤 & 배터리 부풀음 (Battery Swelling)",
    sourceFile: "wiki-hardware-troubleshooting-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "하드웨어",
    categoryMedium: "노트북",
    symptom: "노트북 터치패드 포인터 멈춤, 클릭 불가능, 하판 및 터치패드 주변이 들뜨고 부풀어 오르는 현상",
    actionTaken: "1. Fn + 터치패드 락 단축키 상태 확인 2. 배터리 팽창(Swelling) 식별 시 하판 분해 및 가스 배터리 물리적 안전 탈거 3. 렌탈사 교체 접수",
    sbar: {
      situation: "[S] 노트북 터치패드 클릭이 인가되지 않고 하판 팜레스트 부위가 심하게 들뜨고 부풀어 오름.",
      background: "[B] 리튬이온 배터리 노후화로 인한 내부 가스 팽창(Battery Swelling)으로 터치패드 압력 변형 발생.",
      assessment: "[A] 배터리 스웰링에 의한 물리적 하우징 압착.",
      recommendation: "[R] 1. Fn 단축키 터치패드 잠금 여부 일차 확인\n2. 배터리 부풀음 발견 시 즉시 전원 OFF 후 하판 분해하여 [[팽창 배터리 안전 탈거]]\n3. PC지원실 접수 후 렌탈사 신품 배터리/노트북 교체 요청"
    },
    wikilinks: [],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "hw-trouble-07",
    title: "DISPLAY 모니터 화면 어두움 (백라이트 고장) 및 해상도 조정",
    sourceFile: "wiki-hardware-troubleshooting-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "하드웨어",
    categoryMedium: "모니터",
    symptom: "모니터 백라이트 손상으로 화면이 희미하게 어둡게 나옴, 34인치 울트라와이드 권장 해상도 미지원",
    actionTaken: "1. 외장 그래픽 드라이버 최신화 및 재생 빈도 수동 변경 2. 백라이트 패널 고장 단말 식별 시 SSD 하드 탈거 후 모니터/노트북 교체",
    sbar: {
      situation: "[S] 모니터 패널 화면이 매우 희미하고 어둡게 표출되거나 34인치 와이드 화면 해상도가 찌그러짐.",
      background: "[B] 패널 백라이트 LED 소자 고장 또는 그래픽 드라이버 권장 해상도 미인식.",
      assessment: "[A] 모니터 백라이트 패널 물리 고장 또는 디스플레이 설정 미정합.",
      recommendation: "[R] 1. 디스플레이 설정 > 고급 디스플레이에서 해상도 및 주사율(Hz) 수동 변경\n2. 백라이트 패널 완전 고장 단말은 데이터 보존을 위해 [[SSD 하드 탈거]] 후 모니터/노트북 교체 배정"
    },
    wikilinks: [],
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

// Remove old hw-trouble items if any, then prepend
const nonHwTroubleItems = currentSeed.filter(item => !item.id.startsWith('hw-trouble-'));
const combinedStore = [...hardwareWikiItems, ...nonHwTroubleItems];

console.log(`Combined total seed items: ${combinedStore.length}`);

// Write seed_data.js
const fileOutput = `// 피씨위키 IT Knowledge Wiki - Full Seed Data (${combinedStore.length} records)
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
