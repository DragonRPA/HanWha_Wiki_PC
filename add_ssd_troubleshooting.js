const fs = require('fs');
const path = require('path');

const ssdWikiItems = [
  {
    id: "ssd-trouble-01",
    title: "SSD 부팅 장애 및 드라이브 인식 실패 (Boot Device Not Found)",
    sourceFile: "wiki-ssd-troubleshooting-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "하드웨어",
    categoryMedium: "저장장치",
    symptom: "부팅 장치 인식 불가(Boot Device Not Found), 0x0000001A MEMORY_MANAGEMENT 블루스크린 반복 및 무한 재부팅 루프",
    actionTaken: "1. 시스템 하판 탈거 후 메인보드/SSD 골드 핑 이물질 클리닝 및 재안착(Reseat) 2. 인식 불가 시 SSD 물리 교체 및 표준 OS 마스터 이미지 포맷 적용",
    tags: ["하드웨어", "저장장치", "SSD", "BootDeviceNotFound", "골드핑세척", "0x0000001A", "OS포맷"],
    sbar: {
      situation: "[S] 시스템 가동 또는 Windows 업데이트 진행 중 `Boot Device Not Found` 메시지 표출되며 디스크 인식 실패 및 블루스크린 발생.",
      background: "[B] SSD 인터페이스 슬롯 체결 상태 이격, 메인보드 및 SSD 골드 핑(Gold Pin) 먼지 오염 또는 플래시 메모리 물리적 손상 (wiki-ssd-troubleshooting-v1.md).",
      assessment: "[A] SSD 슬롯 물리적 접촉 불량 또는 SSD 하드웨어 자체 불량.",
      recommendation: "[R] 1. 시스템 하판 탈거 후 체결 부위 이물질 클리닝 및 재안착(Reseat)\n2. 드라이브 인식 불가 시 [[SSD 물리 교체]] 및 사내 표준 [[OS 마스터 이미지 포맷]] 적용"
    },
    wikilinks: ["SSD 물리 교체", "OS 마스터 이미지 포맷", "MEMORY_MANAGEMENT (0x0000001A)"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "ssd-trouble-02",
    title: "SSD 데이터 백업/이관 도중 전송 중단 및 원본 유실 복구 절차",
    sourceFile: "wiki-ssd-troubleshooting-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "하드웨어",
    categoryMedium: "백업",
    symptom: "PC 자산 교체 중 크로스케이블 백업 전송 중 네트워크 끊김으로 전송 강제 중단 및 원본 저장 영역 폴더 소실",
    actionTaken: "1. 물리 섹터 덮어쓰기(Overwrite) 방지를 위해 파티션 추가 쓰기/지우기 작업 전면 금지 2. 디스크 안전 탈거 후 보안팀 공식 반출 승인 상신 3. 전문 복구 업체 이관",
    sbar: {
      situation: "[S] 신구 PC 데이터 백업 중 네트워크 끊김으로 데이터 전송이 중단되고 원본 폴더 소실 발생.",
      background: "[B] 네트워크 백업 전송 이탈 및 파일 시스템 구조 파손.",
      assessment: "[A] 파티션 MFT/FAT 레코드 파손 및 데이터 유실 위험.",
      recommendation: "[R] 1. 대상 파티션에 대한 추가 데이터 쓰기/지우기 [[덮어쓰기 금지]]\n2. PC지원실에서 디스크 안전 탈거 후 [[정보보안팀 반출 승인]] 상신\n3. 전문 복구 업체 이송하여 복원 처리"
    },
    wikilinks: ["정보보안팀 반출 승인"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "ssd-trouble-03",
    title: "SSD 디스크 사용량(점유율) 100% 지속 및 시스템 프리징 대응",
    sourceFile: "wiki-ssd-troubleshooting-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "하드웨어",
    categoryMedium: "저장장치",
    symptom: "유휴 상태(Idle)임에도 디스크 Active Time 점유율 100% 지속, 마우스 포인터 멈춤 및 OS 전반 응답 불능",
    actionTaken: "1. 칩셋 및 저장장치 드라이버 최신화 및 OS 재설치 2. 동일 증상 재발 시 초기 물리 배드섹터 결함 확정 후 신품 SSD 대체 장착",
    sbar: {
      situation: "[S] 가하중 작업이 없는 유휴 상태임에도 디스크 사용량이 100%를 유지하며 시스템 프리징 초래.",
      background: "[B] 스토리지 드라이버 호환성 에러 또는 SSD 플래시 컨트롤러 배드섹터 초기 불량.",
      assessment: "[A] SSD 스토리지 I/O 응답 지연 및 초기 물리 배드섹터.",
      recommendation: "[R] 1. 저장장치 칩셋 드라이버 최신화 및 OS 재설치\n2. 증상 재발 시 [[SSD 초기 배드섹터 불량]] 판정 ➔ 신품 SSD 일대일 물리 대체 장착 및 AS 반납"
    },
    wikilinks: ["DPC_WATCHDOG_VIOLATION (0x00000133)"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "ssd-trouble-04",
    title: "C드라이브 여유 공간 포화 & 파티션 동적 강제 병합 확장",
    sourceFile: "wiki-ssd-troubleshooting-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "하드웨어",
    categoryMedium: "저장장치",
    symptom: "C드라이브 가용 용량 포화로 인한 Windows 업데이트 거부, 시스템 부팅 프리징 및 속도 저하",
    actionTaken: "1. 디스크 관리 도구에서 D드라이브 유휴 볼륨 축소 후 C드라이브 시스템 파티션 영역 동적 강제 병합 확장(볼륨 재조정) 2. 대용량 소명 시 부서 자체 예산 SSD 증설",
    sbar: {
      situation: "[S] C드라이브 용량이 부족하여 OS 패치 및 시스템 가동 멈춤 발생.",
      background: "[B] 윈도우 업데이트 패치 및 사내 에이전트 구동 데이터 누적.",
      assessment: "[A] C드라이브 가용 볼륨 포화.",
      recommendation: "[R] 1. 디스크 관리 도구에서 D드라이브 유휴 공간 축소\n2. [[C드라이브 동적 파티션 확장]] 적용\n3. 영구 공간 부족 시 부서 예산으로 [[증설용 SSD]] 수급 및 추가 장착 지원"
    },
    wikilinks: ["증설용 SSD"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "ssd-trouble-05",
    title: "퇴사 및 전배 임직원 전산 자산 반납 통제 & SSD 밀폐 물리 시건",
    sourceFile: "wiki-ssd-troubleshooting-v1.md",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "보안",
    categoryMedium: "기타",
    symptom: "임직원 퇴사/전배로 노트북/데스크톱 반납 시 내부 SSD 기밀 소스 코드 및 사업 자료 노출 위험",
    actionTaken: "1. 반납 즉시 본체 개방 후 SSD 물리적 완전 탈거 2. 공식 자산 폐기 신청서 상신 후 보안팀 대장 동기화 3. 시건 보관함 물리 밀폐 잠금 보관",
    sbar: {
      situation: "[S] 퇴사/전배자 단말 반납 시 저장장치 내부 기밀 자료 비인가 유출 위험 상존.",
      background: "[B] 전사 정보보호 보안 관리 지침 (wiki-ssd-troubleshooting-v1.md).",
      assessment: "[A] 저장매체 무단 방치 시 데이터 반출 사고 위험.",
      recommendation: "[R] 1. 기기 반납 즉시 [[SSD 물리 탈거]] 수행\n2. 전자결재 [[자산 폐기 신청서]] 상신\n3. 승인 시까지 [[PC지원실 시건 보관함]] 밀폐 잠금 보관"
    },
    wikilinks: ["자산 폐기 신청서"],
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

// Remove old ssd-trouble items if any, then prepend
const nonSsdTroubleItems = currentSeed.filter(item => !item.id.startsWith('ssd-trouble-'));
const combinedStore = [...ssdWikiItems, ...nonSsdTroubleItems];

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
