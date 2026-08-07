const fs = require('fs');
const path = require('path');

const bsodKnowledgeItems = [
  {
    id: "bsod-common-01",
    title: "Windows 11 블루스크린 공통 대응 가이드 (SFC/DISM & 안전 모드)",
    sourceFile: "Microsoft Support 공식 가이드 / Windows 11 BSOD",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "소프트웨어",
    categoryMedium: "OS",
    symptom: "Windows 11 시스템 비정상 종료, 블루스크린 발생 및 무한 재부팅 루프",
    actionTaken: "1. 외장장치 물리 격리 2. Shift+다시시작으로 안전모드 진입 3. dism /restorehealth 및 sfc /scannow 수행 4. 드라이버 롤백",
    tags: ["OS", "블루스크린", "Windows11", "SafeMode", "SFC", "DISM", "BSOD"],
    sbar: {
      situation: "[S] Windows 11 디바이스가 비정상적으로 종료되거나 무한 재부팅 루프 현상 발생.",
      background: "[B] Microsoft 공식 지원 데이터베이스 기준 일차적 공통 복구 가이드라인 적용.",
      assessment: "[A] 신규 외장 하드웨어 충돌, 커널 시스템 파일 파손, 누적 업데이트 결함 또는 드라이버 버전 비호환성.",
      recommendation: "[R] 1. 최근 연결한 USB/외장 하드웨어 물리적 제거\n2. [[안전 모드]] 진입 (로그인 화면에서 Shift + 다시시작 > 문제해결 > 시작설정)\n3. CMD 관리자 권한 실행 후 시스템 복구 명령 수행:\n   - `dism /online /cleanup-image /restorehealth`\n   - `sfc /scannow`\n4. 최근 패치 및 [[드라이버 롤백]] 적용"
    },
    wikilinks: ["안전 모드", "드라이버 롤백"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bsod-memory-management",
    title: "MEMORY_MANAGEMENT (0x0000001A)",
    sourceFile: "Microsoft Support 공식 가이드 / Windows 11 BSOD",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "소프트웨어",
    categoryMedium: "OS",
    symptom: "Stop Code: MEMORY_MANAGEMENT (0x0000001A) - 가상/물리 메모리 관리 시스템 결함",
    actionTaken: "1. RAM 탈거 후 단자 청소 및 재장착 2. mdsched.exe 메모리 진단 도구 실행 3. 누적 업데이트 수동 제거 및 OS 재설치",
    tags: ["OS", "블루스크린", "MEMORY_MANAGEMENT", "0x0000001A", "RAM", "메모리진단"],
    sbar: {
      situation: "[S] Windows 가상 및 물리 메모리(RAM) 관리 시스템에 구조적 정합성 파손 및 무결성 위반 발생.",
      background: "[B] RAM 물리 단자 먼지 유입, 보안 업데이트 패키지 커널 충돌, 그래픽/메인보드 드라이버 메모리 침범.",
      assessment: "[A] 물리 RAM 메모리 모듈 손상 또는 슬롯 접촉 불량, 메모리 맵 참조 오류.",
      recommendation: "[R] 1. RAM 하판 분리 후 알코올/지우개로 [[RAM 세척]] 단자 청소 및 슬롯 변경 재장착\n2. [[메모리 진단 도구]] (`mdsched.exe`) 실행하여 RAM 하드웨어 결함 검사\n3. 지속 발생 시 안전 모드에서 최근 [[Windows 업데이트 제거]] 또는 OS 클린 재설치"
    },
    wikilinks: ["RAM 세척", "메모리 진단 도구", "Windows 업데이트 제거"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bsod-system-thread-exception",
    title: "SYSTEM_THREAD_EXCEPTION_NOT_HANDLED (0x0000007E)",
    sourceFile: "Microsoft Support 공식 가이드 / Windows 11 BSOD",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "소프트웨어",
    categoryMedium: "OS",
    symptom: "Stop Code: SYSTEM_THREAD_EXCEPTION_NOT_HANDLED (0x0000007E) - 커널 스레드 예외 처리 실패",
    actionTaken: "1. 안전 모드 진입 2. intelppm.sys/nvlddmkm.sys 등 실패 드라이버 식별 3. 장치관리자 드라이버 롤백/제거",
    sbar: {
      situation: "[S] 시스템 드라이버나 커널 스레드가 예외 상태를 발생시켰으나 이를 처리하지 못하고 정지됨.",
      background: "[B] 화면 하단에 `intelppm.sys`, `nvlddmkm.sys`, `wpprecorder.sys` 등 실패 시작 파일 표출.",
      assessment: "[A] 불량 메모리 영역 접근, 버전 비호환 드라이버, 4K 섹터 디스크 드라이버 호환성 문제.",
      recommendation: "[R] 1. [[안전 모드]] 부팅 후 장치 관리자 진입\n2. 오류 표출 드라이버 (인텔 그래픽, 프로세서 전원, 오디오 드라이버 등) [[드라이버 롤백]] 또는 제거\n3. 시스템 복원 시점 활용하여 이전 시점으로 복원"
    },
    wikilinks: ["안전 모드", "드라이버 롤백"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bsod-irql-not-less-or-equal",
    title: "IRQL_NOT_LESS_OR_EQUAL (0x0000000A)",
    sourceFile: "Microsoft Support 공식 가이드 / Windows 11 BSOD",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "소프트웨어",
    categoryMedium: "OS",
    symptom: "Stop Code: IRQL_NOT_LESS_OR_EQUAL (0x0000000A) - 높은 IRQL 수준에서 유효하지 않은 가상 메모리 접근",
    actionTaken: "1. 무선 랜카드 드라이버 및 Gradius/Tgate 보안 에이전트 충돌 검증 2. 무선 랜카드 드라이버 초기화 3. sfc /scannow 실행",
    sbar: {
      situation: "[S] 디바이스 드라이버가 높은 IRQL 권한 수준에서 유효하지 않거나 보호된 가상 메모리 주소에 잘못 접근.",
      background: "[B] 무선 랜카드 드라이버 불량, 사내 보안 에이전트(EPP, Gradius, Tgate)와 장치 드라이버 간 커널 충돌.",
      assessment: "[A] 메모리 접근 권한 위반 및 무선 네트워크 솔루션 오탐으로 인한 무한 덤프.",
      recommendation: "[R] 1. [[Gradius]] 및 [[Tgate]] 보안 에이전트 충돌 여부 확인 후 최신 정합 패치 주입\n2. 무선 랜카드 드라이버 삭제 후 제조사 수동 정합 드라이버 재설치\n3. `sfc /scannow`를 통한 메모리 매핑 구조 원복"
    },
    wikilinks: ["Gradius", "Tgate"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bsod-page-fault-in-nonpaged-area",
    title: "PAGE_FAULT_IN_NONPAGED_AREA (0x00000050)",
    sourceFile: "Microsoft Support 공식 가이드 / Windows 11 BSOD",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "소프트웨어",
    categoryMedium: "OS",
    symptom: "Stop Code: PAGE_FAULT_IN_NONPAGED_AREA (0x00000050) - 비페이징 영역 무효 주소 참조",
    actionTaken: "1. 오작동 보안 에이전트(CrowdStrike/V3) 수동 격리 2. PE 부팅으로 파일 덮어쓰기 3. chkdsk C: /f /r 배드섹터 정비",
    sbar: {
      situation: "[S] 물리 메모리에 상주하는 Nonpaged Area 영역에서 무효한 가상 주소 데이터를 참조하여 오류 발생.",
      background: "[B] CrowdStrike Falcon, V3 등 보안 에이전트 오작동, 메인보드 L2 캐시 손상, 저장장치 배드섹터.",
      assessment: "[A] 메모리 무효 주소 호출 및 SSD/HDD 저장매체 파일 시스템 파손.",
      recommendation: "[R] 1. 오류 원인 모듈(예: `C-00000291*.sys`) 식별 후 안전모드/PE 부팅 진입\n2. 정상 파일 덮어쓰기 또는 모듈 격리\n3. `chkdsk C: /f /r` 수행하여 디스크 배드섹터 검사 및 복구"
    },
    wikilinks: ["EPP V3 오진에 따른 system32 DLL 복구 절차"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bsod-whea-uncorrectable-error",
    title: "WHEA_UNCORRECTABLE_ERROR (0x00000124)",
    sourceFile: "Microsoft Support 공식 가이드 / Windows 11 BSOD",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "하드웨어",
    categoryMedium: "하드웨어",
    symptom: "Stop Code: WHEA_UNCORRECTABLE_ERROR (0x00000124) - 복구 불가능한 하드웨어 물리 에러 발생",
    actionTaken: "1. BIOS 오버클럭/전압 초기화 (Load Default) 2. 파워서플라이 및 팬 청소 3. CPU 서멀구리스 재도포 및 장비 교체",
    sbar: {
      situation: "[S] 하드웨어 자체에서 복구 불가능한 물리적 하드웨어 오류(WHEA)가 감지되어 커널 정지.",
      background: "[B] 파워서플라이 전압 미달, CPU/RAM 오버클럭 임계치 초과, 냉각 팬 고장으로 인한 과열.",
      assessment: "[A] CPU/메인보드 물리적 과열 또는 전원 공급 장치 하드웨어 파손.",
      recommendation: "[R] 1. BIOS 진입 후 [[BIOS 초기화]] (Load Setup Defaults)\n2. PC 내부 팬 이물질 제거, 서멀 구리스 재도포\n3. 파워서플라이 및 메인보드 하드웨어 점검/교체"
    },
    wikilinks: ["BIOS 초기화"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bsod-critical-process-died",
    title: "CRITICAL_PROCESS_DIED (0x000000EF)",
    sourceFile: "Microsoft Support 공식 가이드 / Windows 11 BSOD",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "소프트웨어",
    categoryMedium: "OS",
    symptom: "Stop Code: CRITICAL_PROCESS_DIED (0x000000EF) - 핵심 운영체제 프로세스 예기치 않은 종료",
    actionTaken: "1. csrss.exe/lsass.exe/smss.exe 소거 여부 확인 2. 안전모드에서 악성 에이전트 제거 3. dism /restorehealth 복구",
    sbar: {
      situation: "[S] Windows 핵심 필수 프로세스(`csrss.exe`, `lsass.exe`, `smss.exe` 등)가 예기치 않게 종료됨.",
      background: "[B] 악성코드 감염, 사용자 임의 권한 변경, 시스템 드라이버 및 백신 무결성 파손.",
      assessment: "[A] 커널 필수 서비스 프로세스 훼손으로 운영체제 가동 불가능.",
      recommendation: "[R] 1. [[안전 모드]] 부팅 후 최근 변경된 의심 에이전트/프로그램 제거\n2. `dism /online /cleanup-image /restorehealth` 명령어로 커널 정상 구성 요소 강제 복구\n3. 복구 불가 시 [[OS 포맷]] 및 마스터 이미지 복원"
    },
    wikilinks: ["안전 모드", "협력업체 반출 PC 로우포맷 (Zero-Filling) 표준 절차"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bsod-inaccessible-boot-device",
    title: "INACCESSIBLE_BOOT_DEVICE (0x0000007B)",
    sourceFile: "Microsoft Support 공식 가이드 / Windows 11 BSOD",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "하드웨어",
    categoryMedium: "저장장치",
    symptom: "Stop Code: INACCESSIBLE_BOOT_DEVICE (0x0000007B) - 부팅 디스크 또는 AHCI/NVMe 드라이버 인식 불가",
    actionTaken: "1. SSD/HDD 물리 재장착 및 슬롯 이물질 제거 2. BIOS AHCI/NVMe 컨트롤러 설정 확인 3. 부팅 래코드 복구(bootrec)",
    sbar: {
      situation: "[S] 부팅 과정에서 Windows 커널이 부팅 전용 저장매체(SSD/HDD) 파일 시스템에 접근하지 못함.",
      background: "[B] SSD 물리 슬롯 미세 접촉 불량, BIOS 스토리 모드(IDE/AHCI/RAID) 무단 변경, BCD 파손.",
      assessment: "[A] 스토리 컨트롤러 드라이버 누락 또는 SSD 커넥터 접속 손상.",
      recommendation: "[R] 1. SSD 하판 탈거 후 물리 먼지 제거 후 재장착\n2. BIOS 진입 후 Storage Controller Mode를 AHCI/NVMe로 정상 원복\n3. 복구 콘솔에서 `bootrec /fixmbr` 및 `bootrec /rebuildbcd` 수행"
    },
    wikilinks: ["BIOS 초기화"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bsod-kmode-exception-not-handled",
    title: "KMODE_EXCEPTION_NOT_HANDLED (0x000001E)",
    sourceFile: "Microsoft Support 공식 가이드 / Windows 11 BSOD",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "소프트웨어",
    categoryMedium: "OS",
    symptom: "Stop Code: KMODE_EXCEPTION_NOT_HANDLED (0x0000001E) - 커널 모드 핸들러 예외 미처리",
    actionTaken: "1. 타사 장치 드라이버 롤백 2. 빠른 시작(Fast Startup) 기능 해제 3. 안전 모드 디바이스 제거",
    sbar: {
      situation: "[S] 커널 모드 프로그램이 예외를 발생시켰으나 오류 처리기가 이를 포착하지 못해 정지.",
      background: "[B] 호환되지 않는 외장 드라이버, Fast Startup 기능과 최신 드라이버 간 전원 상태 충돌.",
      assessment: "[A] 커널 레벨 드라이버 명령어 비정상 참조.",
      recommendation: "[R] 1. 윈도우 전원 옵션에서 [[빠른 시작 켜기 (Fast Startup)]] 해제\n2. 안전 모드 부팅 후 최근 설치한 하드웨어 드라이버 제거\n3. [[SFC 검사]] 실행"
    },
    wikilinks: ["안전 모드"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bsod-dpc-watchdog-violation",
    title: "DPC_WATCHDOG_VIOLATION (0x00000133)",
    sourceFile: "Microsoft Support 공식 가이드 / Windows 11 BSOD",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "소프트웨어",
    categoryMedium: "OS",
    symptom: "Stop Code: DPC_WATCHDOG_VIOLATION (0x00000133) - DPC 감시 타이머 응답 시간 초과",
    actionTaken: "1. iastorA.sys / NVMe 컨트롤러 드라이버 업데이트 2. SSD 펌웨어 업데이트 3. 시스템 파일 무결성 검사",
    sbar: {
      situation: "[S] DPC(Deferred Procedure Call) 지연 프로시저 응답 시간이 와치독 임계치를 초과하여 다운.",
      background: "[B] SSD 저장장치 펌웨어 구형 버전, SATA AHCI 표준 드라이버(iastorA.sys) 호환성 에러.",
      assessment: "[A] SSD 스토리지 I/O 응답 지연으로 시스템 루프 멈춤.",
      recommendation: "[R] 1. 장치 관리자 > IDE ATA/ATAPI 컨트롤러에서 표준 SATA AHCI 드라이버로 변경\n2. SSD 제조사 공식 [[SSD 펌웨어 업데이트]] 적용\n3. `sfc /scannow` 실행"
    },
    wikilinks: [],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bsod-kernel-security-check-failure",
    title: "KERNEL_SECURITY_CHECK_FAILURE (0x00000139)",
    sourceFile: "Microsoft Support 공식 가이드 / Windows 11 BSOD",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "보안프로그램",
    categoryMedium: "OS/보안",
    symptom: "Stop Code: KERNEL_SECURITY_CHECK_FAILURE (0x00000139) - 커널 핵심 데이터 구조 훼손 탐지",
    actionTaken: "1. 바이러스 및 오작동 보안 에이전트 최신 패치 2. 메모리 진단 mdsched.exe 수행 3. 백신 이중 설치 해제",
    sbar: {
      situation: "[S] 커널이 치명적인 데이터 구조 손상을 감지하여 보안 위반 방지를 위해 시스템 정지.",
      background: "[B] 보안 프로그램 이중 설치 충돌, 메모리 훼손 악성 에이전트, 무결성 파손.",
      assessment: "[A] 커널 메모리 무결성 감시 기능(Kernel Patch Protection) 작동.",
      recommendation: "[R] 1. 이중 설치된 타사 보안 에이전트 중 1종 정돈 삭제\n2. [[ubCUBE]], [[Tgate]] 최신 정합 패치 버전 적용\n3. `sfc /scannow`를 통한 정상 커널 파일 복원"
    },
    wikilinks: ["ubCUBE", "Tgate"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bsod-video-tdr-failure",
    title: "VIDEO_TDR_FAILURE (0x00000116 / 0x00000117)",
    sourceFile: "Microsoft Support 공식 가이드 / Windows 11 BSOD",
    date: "2026-08-07",
    department: "전사",
    categoryLarge: "하드웨어",
    categoryMedium: "하드웨어",
    symptom: "Stop Code: VIDEO_TDR_FAILURE (tikikmp.sys / nvlddmkm.sys / atikmpag.sys) - 디스플레이 드라이버 응답 복구 실패",
    actionTaken: "1. DDU(Display Driver Uninstaller)로 그래픽 드라이버 완전 삭제 2. 최신 제조사 정식 드라이버 재설치 3. GPU 발열 점검",
    sbar: {
      situation: "[S] 그래픽카드 디스플레이 드라이버가 응답을 멈췄으나 지정 시간 내 복구되지 않음.",
      background: "[B] GPU 과열, 외장 그래픽 칩셋 물리 손상, 그래픽 드라이버 충돌 (`nvlddmkm.sys`, `atikmpag.sys`).",
      assessment: "[A] 그래픽 렌더링 칩셋 TDR(Timeout Detection and Recovery) 복구 실패.",
      recommendation: "[R] 1. 안전 모드 진입 후 DDU 툴로 기존 [[그래픽 드라이버 완전 삭제]]\n2. NVIDIA/AMD/Intel 공식 안정성 인증 드라이버 클린 설치\n3. 노트북/데스크탑 GPU 서멀 구리스 재도포 및 먼지 청소"
    },
    wikilinks: ["안전 모드"],
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

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

console.log(`Current seed items: ${currentSeed.length}`);

// Prepend BSOD items to current seed items, avoiding duplicate IDs
const existingIds = new Set(currentSeed.map(i => i.id));
const newBsodItems = bsodKnowledgeItems.filter(i => !existingIds.has(i.id));

const combinedStore = [...newBsodItems, ...currentSeed];
console.log(`Combined total seed items: ${combinedStore.length}`);

const fileOutput = `// HanWha IT Service Knowledge Wiki - Full Seed Data (${combinedStore.length} records)
const SEED_KNOWLEDGE_DATA = ${JSON.stringify(combinedStore, null, 2)};
`;

fs.writeFileSync(seedPath, fileOutput, 'utf8');
console.log('Successfully updated seed_data.js with Windows 11 BSOD official guide entries!');

// Also update data/seed.csv
const destCsvPath = path.join(__dirname, 'data', 'seed.csv');
let csvRows = ['Source_File,Date,Department,Category_Large,Category_Medium,Symptom,Action_Taken'];

combinedStore.forEach(item => {
  const cleanSym = `"${(item.symptom || '').replace(/"/g, '""')}"`;
  const cleanAct = `"${(item.actionTaken || '').replace(/"/g, '""')}"`;
  csvRows.push(`${item.sourceFile},${item.date},${item.department},${item.categoryLarge},${item.categoryMedium},${cleanSym},${cleanAct}`);
});

fs.writeFileSync(destCsvPath, csvRows.join('\n'), 'utf8');
console.log(`Updated data/seed.csv with ${combinedStore.length} total records!`);
