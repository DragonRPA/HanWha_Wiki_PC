// IT Service Knowledge Wiki - Full Seed Data (719 records)
const SEED_KNOWLEDGE_DATA = [
  {
    "id": "ms-update-80070002",
    "title": "[0x80070002] ERROR_FILE_NOT_FOUND - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x80070002] Windows 업데이트 다운로드 또는 설치 중 0x80070002 오류 발생하며 업데이트 중단",
    "actionTaken": "1. Windows Update 및 BITS 서비스 중지: net stop wuauserv, net stop bits 2. C:\\Windows\\SoftwareDistribution 폴더 내용 전체 삭제 3. 서비스 재시작 및 업데이트 재시도",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x80070002",
      "ERROR_FILE_NOT_FOUND",
      "WindowsUpdate",
      "SoftwareDistribution",
      "BITS",
      "DISM"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x80070002] (ERROR_FILE_NOT_FOUND) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 업데이트 배포 임시 폴더(SoftwareDistribution) 내 패키지 파일 누락 또는 카탈로그 서명 손상",
      "recommendation": "[R] 표준 조치 절차:\n1. 관리자 권한 명령 프롬프트(CMD) 실행\n2. `net stop wuauserv` 및 `net stop bits` 명령 입력하여 업데이트 백그라운드 서비스 정지\n3. `C:\\Windows\\SoftwareDistribution` 폴더로 이동하여 `DataStore` 및 `Download` 폴더 내 캐시 파일 완전 삭제\n4. `net start wuauserv` 및 `net start bits` 실행 후 [설정 > Windows 업데이트]에서 재검색\n📌 연관 지식: [[WindowsUpdate]], [[SoftwareDistribution]], [[BITS]], [[DISM]]"
    },
    "wikilinks": [
      "WindowsUpdate",
      "SoftwareDistribution",
      "BITS",
      "DISM"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-80070003",
    "title": "[0x80070003] ERROR_PATH_NOT_FOUND - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x80070003] Windows Update 진행 중 0x80070003 경로를 찾을 수 없음 오류 발생",
    "actionTaken": "DISM 컴포넌트 복구 및 시스템 파일 무결성 복구(sfc /scannow) 후 임시 캐시 초기화",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x80070003",
      "ERROR_PATH_NOT_FOUND",
      "DISM",
      "sfc",
      "컴포넌트저장소",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x80070003] (ERROR_PATH_NOT_FOUND) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 시스템 파티션 또는 레지스트리에 정의된 업데이트 다운로드 대상 폴더 경로 유실",
      "recommendation": "[R] 표준 조치 절차:\n1. `DISM /Online /Cleanup-Image /RestoreHealth` 실행하여 시스템 컴포넌트 저장소 복원\n2. `sfc /scannow` 실행하여 손상된 시스템 파일 100% 자동 복구\n3. 레지스트리 `HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Component Based Servicing` 경로 점검\n📌 연관 지식: [[DISM]], [[sfc]], [[컴포넌트저장소]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "DISM",
      "sfc",
      "컴포넌트저장소",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-80070005",
    "title": "[0x80070005] ERROR_ACCESS_DENIED - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x80070005] 업데이트 설치 중 0x80070005 액세스가 거부되었습니다 오류 표출",
    "actionTaken": "1. 타사 안티바이러스 실시간 감시 일시 중단 2. SubInACL 또는 윈도우 기본 권한 재설정",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x80070005",
      "ERROR_ACCESS_DENIED",
      "액세스거부",
      "클린부팅",
      "WindowsUpdate",
      "권한복구"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x80070005] (ERROR_ACCESS_DENIED) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 타사 백신/보안 프로그램의 시스템 디렉터리 권한 잠금 또는 파일 시스템 ACL 권한 손상",
      "recommendation": "[R] 표준 조치 절차:\n1. 설치된 타사 백신(AhnLab, 알약, Norton 등)의 실시간 감시 일시 비활성화\n2. 명령 프롬프트에서 `secedit /configure /cfg %windir%\\inf\\defltbase.inf /db defltbase.sdb /verbose` 기본 보안 템플릿 복원\n3. 클린 부팅(`msconfig` > 모든 Microsoft 서비스 숨기기 > 모두 사용 안 함) 후 업데이트 설치\n📌 연관 지식: [[액세스거부]], [[클린부팅]], [[WindowsUpdate]], [[권한복구]]"
    },
    "wikilinks": [
      "액세스거부",
      "클린부팅",
      "WindowsUpdate",
      "권한복구"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-80070057",
    "title": "[0x80070057] ERROR_INVALID_PARAMETER - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x80070057] Windows Update 또는 백업 작업 시 매개 변수가 틀립니다(0x80070057) 오류 발생",
    "actionTaken": "1. chkdsk C: /f 디스크 검사 2. 시스템 예약 파티션 여유 공간 확보 3. 레지스트리 구분자 확인",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x80070057",
      "ERROR_INVALID_PARAMETER",
      "chkdsk",
      "디스크관리",
      "파티션",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x80070057] (ERROR_INVALID_PARAMETER) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 시스템 예약 파티션 공간 부족, 디스크 파일 시스템 오류(더티 비트) 또는 표준 10진수 구분 기호 오류",
      "recommendation": "[R] 표준 조치 절차:\n1. `chkdsk C: /f /r` 명령 실행 후 시스템 재부팅하여 파일 시스템 및 배드섹터 교정\n2. 디스크 관리자에서 시스템 예약(ESP) 파티션의 여유 공간이 최소 100MB 이상인지 확인\n3. 국가 및 언어 설정에서 소수점 구분 기호가 마침표(.)로 설정되어 있는지 검증\n📌 연관 지식: [[chkdsk]], [[디스크관리]], [[파티션]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "chkdsk",
      "디스크관리",
      "파티션",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-80070422",
    "title": "[0x80070422] ERROR_SERVICE_DISABLED - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x80070422] Windows 업데이트를 확인할 수 없음 오류 0x80070422 표시",
    "actionTaken": "services.msc에서 Windows Update 서비스를 시작 유형 [자동]으로 변경 후 시작",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x80070422",
      "ERROR_SERVICE_DISABLED",
      "서비스관리",
      "wuauserv",
      "BITS",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x80070422] (ERROR_SERVICE_DISABLED) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: Windows Update 서비스(wuauserv) 또는 의존성 서비스가 사용 안 함으로 강제 비활성화됨",
      "recommendation": "[R] 표준 조치 절차:\n1. 실행 창(Win + R)에서 `services.msc` 입력\n2. `Windows Update` 서비스 더블 클릭 후 시작 유형을 [자동] 또는 [수동]으로 전환 후 [시작] 버튼 클릭\n3. `Background Intelligent Transfer Service(BITS)` 및 `Cryptographic Services`도 실행 중인지 점검\n📌 연관 지식: [[서비스관리]], [[wuauserv]], [[BITS]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "서비스관리",
      "wuauserv",
      "BITS",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-80070490",
    "title": "[0x80070490] ERROR_NOT_FOUND - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x80070490] 업데이트 중 0x80070490(Element not found) 발생하며 CBS 매니페스트 누락",
    "actionTaken": "DISM 및 SFC 무결성 스캔 실행 후 실패 시 윈도우 인플레이스(In-Place) 업그레이드 복구",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x80070490",
      "ERROR_NOT_FOUND",
      "CBS",
      "DISM",
      "인플레이스업그레이드",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x80070490] (ERROR_NOT_FOUND) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 컴포넌트 기반 서비스(CBS) 매니페스트 파일 손상으로 패키지 구성 요소를 찾을 수 없음",
      "recommendation": "[R] 표준 조치 절차:\n1. `DISM.exe /Online /Cleanup-image /Scanhealth` 실행하여 손상 규모 확인\n2. `DISM.exe /Online /Cleanup-image /Restorehealth` 실행으로 공식 마이크로소프트 서버에서 원본 복구\n3. `sfc /scannow` 실행\n📌 연관 지식: [[CBS]], [[DISM]], [[인플레이스업그레이드]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "CBS",
      "DISM",
      "인플레이스업그레이드",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-80070643",
    "title": "[0x80070643] ERROR_INSTALL_FAILURE - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x80070643] Windows 복구 환경(WinRE) 업데이트(KB5034441 등) 설치 시 0x80070643 무한 실패",
    "actionTaken": "diskpart를 사용하여 OS 파티션을 약 500MB 축소하고 복구 파티션을 250MB 이상 확장",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x80070643",
      "ERROR_INSTALL_FAILURE",
      "WinRE",
      "복구파티션",
      "diskpart",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x80070643] (ERROR_INSTALL_FAILURE) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 복구 파티션(Recovery Partition)의 크기가 부족하여 새로운 WinRE.wim 이미지를 기록하지 못함",
      "recommendation": "[R] 표준 조치 절차:\n1. `reagentc /disable` 명령으로 복구 환경 일시 비활성화\n2. `diskpart` 진입 후 `list disk`, `select disk 0`, `list partition`으로 복구 파티션 확인\n3. OS 파티션을 500MB 축소(`shrink desired=500 minimum=500`) 후 복구 파티션 삭제 및 확장 생성\n4. `reagentc /enable` 실행 후 Windows Update 재시도\n📌 연관 지식: [[WinRE]], [[복구파티션]], [[diskpart]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "WinRE",
      "복구파티션",
      "diskpart",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-80073701",
    "title": "[0x80073701] ERROR_SXS_ASSEMBLY_MISSING - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x80073701] 업데이트 설치 중 0x80073701 참조된 어셈블리를 찾을 수 없습니다 오류 발생",
    "actionTaken": "DISM StartComponentCleanup 실행 및 수동 독립 실행형 패키지(MSU) 설치",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x80073701",
      "ERROR_SXS_ASSEMBLY_MISSING",
      "WinSxS",
      "MSU",
      "DISM",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x80073701] (ERROR_SXS_ASSEMBLY_MISSING) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: WinSxS 폴더 내의 이전 서비스 어셈블리 페이로드가 손상되었거나 언어 팩 종속성 불일치",
      "recommendation": "[R] 표준 조치 절차:\n1. `dism /online /cleanup-image /startcomponentcleanup` 명령으로 SxS 컴포넌트 정리\n2. `DISM /Online /Cleanup-Image /RestoreHealth` 실행\n3. Microsoft 카탈로그(catalog.update.microsoft.com)에서 해당 KB 번호의 MSU 파일을 수동 다운로드하여 오프라인 설치\n📌 연관 지식: [[WinSxS]], [[MSU]], [[DISM]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "WinSxS",
      "MSU",
      "DISM",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-80073712",
    "title": "[0x80073712] ERROR_SXS_COMPONENT_STORE_CORRUPT - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x80073712] Windows 기능 추가/제거 또는 업데이트 시 0x80073712 구성 요소 저장소 손상 표출",
    "actionTaken": "Windows 설치 ISO 이미지를 마운트하여 WIM 소스를 지정한 DISM 복구 수행",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x80073712",
      "ERROR_SXS_COMPONENT_STORE_CORRUPT",
      "WinSxS",
      "ISO마운트",
      "DISM",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x80073712] (ERROR_SXS_COMPONENT_STORE_CORRUPT) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: WinSxS 컴포넌트 저장소의 패키지 매니페스트 및 파일 데이터베이스 구조적 붕괴",
      "recommendation": "[R] 표준 조치 절차:\n1. 동일 빌드의 Windows 10/11 공식 ISO 파일을 가상 드라이브(예: E:)에 탑재\n2. `DISM /Online /Cleanup-Image /RestoreHealth /Source:WIM:E:\\sources\\install.wim:1 /LimitAccess` 실행\n3. 로컬 클린 원본 소스를 참조하여 손상된 WinSxS 구성 요소 완벽 대체 복구\n📌 연관 지식: [[WinSxS]], [[ISO마운트]], [[DISM]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "WinSxS",
      "ISO마운트",
      "DISM",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-800f081f",
    "title": "[0x800F081F] CBS_E_SOURCE_NOT_FOUND - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x800F081F] .NET Framework 3.5 설치 또는 누적 업데이트 시 0x800F081F 소스 파일을 찾을 수 없음",
    "actionTaken": "설치 미디어의 sxs 폴더를 소스로 지정하여 오프라인 기능 설치",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x800F081F",
      "CBS_E_SOURCE_NOT_FOUND",
      "NetFx3",
      "닷넷프레임워크",
      "DISM",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x800F081F] (CBS_E_SOURCE_NOT_FOUND) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 로컬 WinSxS 저장소에 해당 선택적 기능 페이로드가 제거되어 있고 Windows Update 서버 연결 차단됨",
      "recommendation": "[R] 표준 조치 절차:\n1. Windows 설치 USB 또는 ISO 탑재 (드라이브 명: D: 가정)\n2. `DISM /Online /Enable-Feature /FeatureName:NetFx3 /All /LimitAccess /Source:D:\\sources\\sxs` 실행\n3. 오프라인 바이너리를 직접 주입하여 인터넷 연결 없이도 완결 설치\n📌 연관 지식: [[NetFx3]], [[닷넷프레임워크]], [[DISM]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "NetFx3",
      "닷넷프레임워크",
      "DISM",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-800f0906",
    "title": "[0x800F0906] CBS_E_DOWNLOAD_FAILURE - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x800F0906] 선택적 기능 또는 언어 팩 추가 시 0x800F0906 소스 파일을 다운로드할 수 없음",
    "actionTaken": "로컬 그룹 정책 편집기(gpedit.msc)에서 선택적 구성 요소 원본 경로 정책 구성",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x800F0906",
      "CBS_E_DOWNLOAD_FAILURE",
      "gpedit",
      "WSUS",
      "그룹정책",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x800F0906] (CBS_E_DOWNLOAD_FAILURE) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 사내 프록시, 방화벽, 또는 WSUS 정책으로 인해 Microsoft 공용 업데이트 서버 접근 불가",
      "recommendation": "[R] 표준 조치 절차:\n1. `gpedit.msc` 실행 > [컴퓨터 구성 > 관리 템플릿 > 시스템]\n2. [선택적 구성 요소 설치 및 구성 요소 복구 설정 지정] 정책 [사용]으로 구성\n3. [WSUS 대신 Windows Update에 직접 연결하여 복구 콘텐츠 다운로드] 체크박스 활성화\n📌 연관 지식: [[gpedit]], [[WSUS]], [[그룹정책]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "gpedit",
      "WSUS",
      "그룹정책",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-800f0922",
    "title": "[0x800F0922] CBS_E_INSTALL_FAILED - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x800F0922] 업데이트 진행률 99% 도달 후 변경 내용을 실행 취소하는 중 메시지와 함께 0x800F0922 롤백",
    "actionTaken": "1. EFI 시스템 파티션의 로그 및 폰트 파일 정리 2. Secure Boot 설정 확인",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x800F0922",
      "CBS_E_INSTALL_FAILED",
      "EFI파티션",
      "SecureBoot",
      "mountvol",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x800F0922] (CBS_E_INSTALL_FAILED) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 시스템 예약(EFI) 파티션 용량 부족(15MB 미만) 또는 보안 부팅(Secure Boot) 키 갱신 오류",
      "recommendation": "[R] 표준 조치 절차:\n1. `mountvol Y: /S` 명령으로 EFI 파티션을 임시 드라이브 Y:로 마운트\n2. Y:\\EFI\\Microsoft\\Boot\\Fonts 디렉터리 내 미사용 다국어 폰트 삭제하여 여유 공간 50MB 이상 확보\n3. `mountvol Y: /D`로 마운트 해제 후 재부팅하여 업데이트 재시도\n📌 연관 지식: [[EFI파티션]], [[SecureBoot]], [[mountvol]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "EFI파티션",
      "SecureBoot",
      "mountvol",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-80240034",
    "title": "[0x80240034] WU_E_DOWNLOAD_FAILED - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x80240034] Windows Update 카탈로그 검색은 성공하나 다운로드 시작 즉시 0x80240034 오류 발생",
    "actionTaken": "네트워크 어댑터 재설정 및 소프트웨어 배포 폴더 리셋",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x80240034",
      "WU_E_DOWNLOAD_FAILED",
      "winsock",
      "flushdns",
      "BITS",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x80240034] (WU_E_DOWNLOAD_FAILED) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 네트워크 연결 불안정, BITS 전송 서비스 장애 또는 배포 토큰 만료",
      "recommendation": "[R] 표준 조치 절차:\n1. 명령 프롬프트에서 `netsh winsock reset` 및 `netsh int ip reset` 실행\n2. `ipconfig /flushdns` 실행\n3. `wuauserv` 중지 후 `C:\\Windows\\SoftwareDistribution\\Download` 폴더 비우고 재시도\n📌 연관 지식: [[winsock]], [[flushdns]], [[BITS]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "winsock",
      "flushdns",
      "BITS",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-80244018",
    "title": "[0x80244018] WU_E_PT_HTTP_STATUS_FORBIDDEN - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x80244018] 업데이트 서버와 통신 중 0x80244018 (HTTP 403 Forbidden) 오류 발생",
    "actionTaken": "프록시 설정 비활성화(`netsh winhttp reset proxy`) 및 VPN 연결 해제 후 직접 연결",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x80244018",
      "WU_E_PT_HTTP_STATUS_FORBIDDEN",
      "winhttp",
      "프록시",
      "VPN",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x80244018] (WU_E_PT_HTTP_STATUS_FORBIDDEN) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 프록시 서버 차단, VPN 터널링 충돌 또는 사내 보안 게이트웨이의 패키지 다운로드 제한",
      "recommendation": "[R] 표준 조치 절차:\n1. `netsh winhttp show proxy`로 현재 윈도우 HTTP 프록시 상태 확인\n2. `netsh winhttp reset proxy` 명령을 실행하여 직접 인터넷 연결(Direct Access)로 복원\n3. 활성화된 서드파티 VPN 클라이언트 완전 종료\n📌 연관 지식: [[winhttp]], [[프록시]], [[VPN]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "winhttp",
      "프록시",
      "VPN",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-8024402c",
    "title": "[0x8024402C] WU_E_PT_WINHTTP_NAME_NOT_RESOLVED - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0x8024402C] Windows 업데이트 시 0x8024402C 발생하며 업데이트 서버 이름을 확인할 수 없음",
    "actionTaken": "네트워크 어댑터의 DNS를 신뢰할 수 있는 공공 DNS(1.1.1.1 또는 8.8.8.8)로 수동 변경",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0x8024402C",
      "WU_E_PT_WINHTTP_NAME_NOT_RESOLVED",
      "DNS",
      "IPv4",
      "ncpa.cpl",
      "WindowsUpdate"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0x8024402C] (WU_E_PT_WINHTTP_NAME_NOT_RESOLVED) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: DNS 서버 설정 오류로 인해 Microsoft 업데이트 서버 호스트 이름 풀이 실패",
      "recommendation": "[R] 표준 조치 절차:\n1. [네트워크 연결] 제어판(ncpa.cpl) 실행\n2. 사용 중인 활성 이더넷/Wi-Fi 어댑터 속성 > [인터넷 프로토콜 버전 4(TCP/IPv4)] 선택\n3. 기본 DNS 서버를 `1.1.1.1` (Cloudflare) 또는 `8.8.8.8` (Google)로 입력 후 확인\n📌 연관 지식: [[DNS]], [[IPv4]], [[ncpa.cpl]], [[WindowsUpdate]]"
    },
    "wikilinks": [
      "DNS",
      "IPv4",
      "ncpa.cpl",
      "WindowsUpdate"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-c0000005",
    "title": "[0xC0000005] STATUS_ACCESS_VIOLATION - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0xC0000005] 응용 프로그램 실행 중 0xC0000005 응용 프로그램 오류 발생하며 강제 종료",
    "actionTaken": "1. 데이터 실행 방지(DEP) 설정 확인 2. RAM 메모리 진단 실행 3. Visual C++ 재배포 패키지 재설치",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0xC0000005",
      "STATUS_ACCESS_VIOLATION",
      "메모리접근위반",
      "DEP",
      "mdsched",
      "VisualC++"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0xC0000005] (STATUS_ACCESS_VIOLATION) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 프로그램이 시스템 메모리의 할당되지 않은 영역 또는 보호된 메모리 주소에 읽기/쓰기 시도",
      "recommendation": "[R] 표준 조치 절차:\n1. `mdsched.exe` (Windows 메모리 진단) 실행하여 물리 RAM 불량 여부 사전 판정\n2. [시스템 속성 > 고급 > 성능 설정 > 데이터 실행 방지(DEP)]에서 기본값(필수 Windows 프로그램에 대해서만) 확인\n3. Microsoft 공식 최신 Visual C++ All-in-One 재배포 패키지 런타임 재설치\n📌 연관 지식: [[메모리접근위반]], [[DEP]], [[mdsched]], [[VisualC++]]"
    },
    "wikilinks": [
      "메모리접근위반",
      "DEP",
      "mdsched",
      "VisualC++"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-c0000142",
    "title": "[0xC0000142] STATUS_DLL_INIT_FAILED - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0xC0000142] 프로그램 실행 시 응용 프로그램을 제대로 시작하지 못했습니다(0xC0000142) 오류 창 표출",
    "actionTaken": "1. 시스템 파일 무결성 복구(`sfc /scannow`) 2. 클린 부팅을 통한 타사 DLL 인젝션 차단",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0xC0000142",
      "STATUS_DLL_INIT_FAILED",
      "DLL오류",
      "sfc",
      "DDU",
      "런타임"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0xC0000142] (STATUS_DLL_INIT_FAILED) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 응용 프로그램이 의존하는 핵심 DLL 라이브러리의 초기화 실패 또는 버전 충돌",
      "recommendation": "[R] 표준 조치 절차:\n1. 명령 프롬프트에서 `sfc /scannow` 실행하여 시스템 핵심 DLL 파일 무결성 복원\n2. 그래픽 드라이버 클린 설치(DDU 사용 권장)\n3. 보안/금융 사이트의 키보드 보안 모듈(nProtect, TouchEN) 충돌 시 제어판에서 삭제\n📌 연관 지식: [[DLL오류]], [[sfc]], [[DDU]], [[런타임]]"
    },
    "wikilinks": [
      "DLL오류",
      "sfc",
      "DDU",
      "런타임"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "ms-update-c000021a",
    "title": "[0xC000021A] STATUS_SYSTEM_PROCESS_TERMINATED - Windows 업데이트 및 시스템 오류 해결",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Windows Update",
    "symptom": "[0xC000021A] 부팅 중 블루스크린 발생하며 중지 코드 0xC000021A 표출",
    "actionTaken": "안전 모드 부팅 후 최근 설치된 드라이버 롤백 및 드라이버 서명 적용 비활성화 모드 테스트",
    "tags": [
      "소프트웨어",
      "WindowsUpdate",
      "0xC000021A",
      "STATUS_SYSTEM_PROCESS_TERMINATED",
      "BSOD",
      "Winlogon",
      "안전모드",
      "WinRE"
    ],
    "sbar": {
      "situation": "[S] 사용자 PC에서 [0xC000021A] (STATUS_SYSTEM_PROCESS_TERMINATED) 오류가 발생하여 업데이트가 진행되지 않거나 시스템 작업이 실패함.",
      "background": "[B] 출처: Microsoft 공식 기술 문서 (CC-BY 4.0) | 분류: Windows Update & 서비스 스택",
      "assessment": "[A] 장애 원인 분석: 사용자 모드 서브시스템인 winlogon.exe 또는 csrss.exe 프로세스가 예기치 않게 종료됨",
      "recommendation": "[R] 표준 조치 절차:\n1. Windows 복구 환경(WinRE) 진입 > [고급 옵션 > 시작 설정 > 다시 시작]\n2. [7) 드라이버 서명 적용 사용 안 함] 또는 [4) 안전 모드 사용]으로 진입\n3. 최근 설치된 서드파티 드라이버 삭제 및 `dism /image:C:\\ /cleanup-image /revertpendingactions` 실행\n📌 연관 지식: [[BSOD]], [[Winlogon]], [[안전모드]], [[WinRE]]"
    },
    "wikilinks": [
      "BSOD",
      "Winlogon",
      "안전모드",
      "WinRE"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.283Z",
    "updatedAt": "2026-09-17T14:26:55.283Z"
  },
  {
    "id": "hw-spec-1-beep-1-",
    "title": "[하드웨어 규격] AMI BIOS Beep - 1 Beep (단음 1회) (DRAM Refresh Failure) 점검 가이드",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "BIOS",
    "symptom": "[1 Beep (단음 1회)] PC 전원 켜짐 후 화면 반응 없이 비프음 1회 발생",
    "actionTaken": "RAM 모듈 탈착 후 골드핑거 세척 및 A2(2번) 슬롯 재장착",
    "tags": [
      "하드웨어",
      "진단규격",
      "DRAM Refresh Failure",
      "AMI",
      "RAM",
      "비프음",
      "메모리접촉불량",
      "골드핑거"
    ],
    "sbar": {
      "situation": "[S] PC 하드웨어 부팅 또는 가동 중 [1 Beep (단음 1회)] 상태가 식별되어 정상 가동이 불가능함.",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 (공개 팩트) | 대상 부품: DRAM Refresh Failure",
      "assessment": "[A] 하드웨어 결함 분석: 메인보드의 시스템 타이머 회로 또는 메모리(RAM) 첫 번째 슬롯 리프레시 실패",
      "recommendation": "[R] 표준 정비 절차:\n1. 전원 플러그 제거 후 본체 전원 버튼을 10초간 눌러 잔류 전원 완전 방전(Power Drain)\n2. 장착된 RAM 모듈을 탈거하고 지우개나 접점부활제(BW-100)로 금도금 접점부(골드핑거) 세척\n3. 단일 RAM인 경우 CPU에서 2번째 슬롯(A2)에 \"딱\" 소리가 나도록 완벽 밀착 재장착\n📌 연관 지식: [[AMI]], [[RAM]], [[비프음]], [[메모리접촉불량]], [[골드핑거]]"
    },
    "wikilinks": [
      "AMI",
      "RAM",
      "비프음",
      "메모리접촉불량",
      "골드핑거"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "hw-spec-2-beeps-2-",
    "title": "[하드웨어 규격] AMI BIOS Beep - 2 Beeps (단음 2회) (Parity Error) 점검 가이드",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "BIOS",
    "symptom": "[2 Beeps (단음 2회)] 전원 인가 시 비프음 2회 울리며 부팅 불가",
    "actionTaken": "다중 RAM 장착 시 슬롯 교차 장착 및 단일 램 단독 부팅 테스트",
    "tags": [
      "하드웨어",
      "진단규격",
      "Parity Error",
      "AMI",
      "RAM",
      "비프음",
      "CMOS초기화"
    ],
    "sbar": {
      "situation": "[S] PC 하드웨어 부팅 또는 가동 중 [2 Beeps (단음 2회)] 상태가 식별되어 정상 가동이 불가능함.",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 (공개 팩트) | 대상 부품: Parity Error",
      "assessment": "[A] 하드웨어 결함 분석: 시스템 메모리 64KB 패리티 검사 실패 또는 메모리 슬롯 접촉 불량",
      "recommendation": "[R] 표준 정비 절차:\n1. 2개 이상의 램이 장착된 경우 1개만 남기고 번갈아 장착하여 불량 RAM 단독 색출\n2. 메인보드 메모리 슬롯 내부의 먼지를 에어 스프레이로 분사 청소\n3. BIOS CMOS 배터리(CR2032)를 5분간 탈착하여 바이오스 클럭 및 타이밍 초기화\n📌 연관 지식: [[AMI]], [[RAM]], [[비프음]], [[CMOS초기화]]"
    },
    "wikilinks": [
      "AMI",
      "RAM",
      "비프음",
      "CMOS초기화"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "hw-spec-3-beeps-3-",
    "title": "[하드웨어 규격] AMI BIOS Beep - 3 Beeps (단음 3회) (Base 64K RAM Failure) 점검 가이드",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "BIOS",
    "symptom": "[3 Beeps (단음 3회)] 전원 ON 시 비프음 3회 연속 출력 후 화면 먹통",
    "actionTaken": "신품 RAM으로 대체 교체 테스트 또는 다른 채널 슬롯 장착",
    "tags": [
      "하드웨어",
      "진단규격",
      "Base 64K RAM Failure",
      "AMI",
      "RAM",
      "비프음",
      "MemTest86",
      "쿨러장력"
    ],
    "sbar": {
      "situation": "[S] PC 하드웨어 부팅 또는 가동 중 [3 Beeps (단음 3회)] 상태가 식별되어 정상 가동이 불가능함.",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 (공개 팩트) | 대상 부품: Base 64K RAM Failure",
      "assessment": "[A] 하드웨어 결함 분석: 기본 64KB 베이스 메모리 주소 영역 읽기/쓰기 실패 (RAM 모듈 물리 손상 가능성)",
      "recommendation": "[R] 표준 정비 절차:\n1. 장착된 RAM을 다른 정상 작동 PC에서 MemTest86으로 셀 결함 정밀 검사\n2. 정상 작동이 확인된 예비 RAM을 장착하여 메인보드 슬롯 고장 여부 교차 검증\n3. CPU 쿨러 결착 장력이 과도하여 핀 접촉이 틀어진 경우 쿨러 장력 완화 재결착\n📌 연관 지식: [[AMI]], [[RAM]], [[비프음]], [[MemTest86]], [[쿨러장력]]"
    },
    "wikilinks": [
      "AMI",
      "RAM",
      "비프음",
      "MemTest86",
      "쿨러장력"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "hw-spec-5-beeps-5-",
    "title": "[하드웨어 규격] AMI BIOS Beep - 5 Beeps (단음 5회) (Processor (CPU) Error) 점검 가이드",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "BIOS",
    "symptom": "[5 Beeps (단음 5회)] 전원 팬은 회전하나 비프음 5회 발생하며 화면 무반응",
    "actionTaken": "1. 파워서플라이 CPU 8핀 보조전원 결착 확인 2. CPU 쿨러 탈거 후 소켓 핀 검사",
    "tags": [
      "하드웨어",
      "진단규격",
      "Processor (CPU) Error",
      "AMI",
      "CPU",
      "비프음",
      "보조전원",
      "소켓핀"
    ],
    "sbar": {
      "situation": "[S] PC 하드웨어 부팅 또는 가동 중 [5 Beeps (단음 5회)] 상태가 식별되어 정상 가동이 불가능함.",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 (공개 팩트) | 대상 부품: Processor (CPU) Error",
      "assessment": "[A] 하드웨어 결함 분석: CPU 프로세서 인식 실패, 메인보드 소켓 핀 휨 또는 12V 8핀 CPU 보조전원 케이블 미연결",
      "recommendation": "[R] 표준 정비 절차:\n1. 파워서플라이의 4+4핀(또는 8핀) CPU 전용 보조전원 케이블이 메인보드 좌상단에 견고히 체결되었는지 확인\n2. CPU 쿨러를 탈거하고 CPU를 조심스럽게 꺼내어 메인보드 소켓 핀(LGA 방식) 휨이나 이물질 확인\n3. AMD AM4/AM5 무뽑기 및 핀 파손 유무 육안 점검\n📌 연관 지식: [[AMI]], [[CPU]], [[비프음]], [[보조전원]], [[소켓핀]]"
    },
    "wikilinks": [
      "AMI",
      "CPU",
      "비프음",
      "보조전원",
      "소켓핀"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "hw-spec-8-beeps-8-",
    "title": "[하드웨어 규격] AMI BIOS Beep - 8 Beeps (단음 8회) (Display Memory Error) 점검 가이드",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "BIOS",
    "symptom": "[8 Beeps (단음 8회)] 비프음 8회 출력되며 모니터에 신호 없음(No Signal) 표시",
    "actionTaken": "외장 그래픽카드 탈착 후 PCIe 골드핑거 세척 및 보조전원(PCIe 8핀) 재연결",
    "tags": [
      "하드웨어",
      "진단규격",
      "Display Memory Error",
      "AMI",
      "그래픽카드",
      "GPU",
      "비프음",
      "PCIe"
    ],
    "sbar": {
      "situation": "[S] PC 하드웨어 부팅 또는 가동 중 [8 Beeps (단음 8회)] 상태가 식별되어 정상 가동이 불가능함.",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 (공개 팩트) | 대상 부품: Display Memory Error",
      "assessment": "[A] 하드웨어 결함 분석: 외장 그래픽카드(VGA) 미인식, VRAM 읽기/쓰기 실패 또는 PCIe 슬롯 접촉 불량",
      "recommendation": "[R] 표준 정비 절차:\n1. 모니터 케이블이 메인보드 내장 출력단자가 아닌 외장 그래픽카드 포트에 꽂혀 있는지 1차 확인\n2. 그래픽카드 탈거 후 슬롯 먼지 청소 및 골드핑거 BW-100 클리닝 후 래치가 잠기도록 재장착\n3. 그래픽카드 PCIe 6+2핀 보조전원을 별도 독립 케이블로 직결 체결\n📌 연관 지식: [[AMI]], [[그래픽카드]], [[GPU]], [[비프음]], [[PCIe]]"
    },
    "wikilinks": [
      "AMI",
      "그래픽카드",
      "GPU",
      "비프음",
      "PCIe"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "hw-spec-1-long-2-short-1-2-",
    "title": "[하드웨어 규격] Award BIOS Beep - 1 Long 2 Short (장음 1회, 단음 2회) (Video Adapter Error) 점검 가이드",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "BIOS",
    "symptom": "[1 Long 2 Short (장음 1회, 단음 2회)] 삐--- 삑 삑 비프음 출력 후 화면 출력 불가",
    "actionTaken": "그래픽카드 재장착 및 모니터 케이블(DP/HDMI) 교체 테스트",
    "tags": [
      "하드웨어",
      "진단규격",
      "Video Adapter Error",
      "Award",
      "그래픽카드",
      "비프음",
      "HDMI",
      "DP"
    ],
    "sbar": {
      "situation": "[S] PC 하드웨어 부팅 또는 가동 중 [1 Long 2 Short (장음 1회, 단음 2회)] 상태가 식별되어 정상 가동이 불가능함.",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 (공개 팩트) | 대상 부품: Video Adapter Error",
      "assessment": "[A] 하드웨어 결함 분석: 비디오 카드 초기화 실패 또는 모니터 연결 인터페이스 인식 불가",
      "recommendation": "[R] 표준 정비 절차:\n1. 외장 그래픽카드 완벽 탈거 후 메인보드 첫 번째 PCIe x16 슬롯에 단단히 재결착\n2. DP(DisplayPort) 또는 HDMI 케이블을 다른 포트로 이동 연결\n3. 모니터 OSD 메뉴에서 입력 신호가 [자동(Auto)] 또는 해당 포트로 올바르게 선택되었는지 점검\n📌 연관 지식: [[Award]], [[그래픽카드]], [[비프음]], [[HDMI]], [[DP]]"
    },
    "wikilinks": [
      "Award",
      "그래픽카드",
      "비프음",
      "HDMI",
      "DP"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "hw-spec-continuous-long-",
    "title": "[하드웨어 규격] Award BIOS Beep - Continuous Long (연속 장음) (DRAM Failure) 점검 가이드",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "BIOS",
    "symptom": "[Continuous Long (연속 장음)] 삐--- 삐--- 장음이 끊김 없이 무한 반복되며 부팅 멈춤",
    "actionTaken": "전체 RAM 탈거 후 1개씩 단일 장착하여 불량 슬롯 및 불량 모듈 판별",
    "tags": [
      "하드웨어",
      "진단규격",
      "DRAM Failure",
      "Award",
      "RAM",
      "비프음",
      "메모리불량"
    ],
    "sbar": {
      "situation": "[S] PC 하드웨어 부팅 또는 가동 중 [Continuous Long (연속 장음)] 상태가 식별되어 정상 가동이 불가능함.",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 (공개 팩트) | 대상 부품: DRAM Failure",
      "assessment": "[A] 하드웨어 결함 분석: 메모리가 메인보드에 전혀 감지되지 않거나 심각한 슬롯 접촉 불량",
      "recommendation": "[R] 표준 정비 절차:\n1. 전원 차단 후 모든 RAM 탈거\n2. CPU와 가장 가까운 슬롯부터 차례대로 단일 RAM을 꽂아 부팅 시도\n3. 특정 모듈에서만 연속음이 발생할 경우 해당 RAM 교체 필요\n📌 연관 지식: [[Award]], [[RAM]], [[비프음]], [[메모리불량]]"
    },
    "wikilinks": [
      "Award",
      "RAM",
      "비프음",
      "메모리불량"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "hw-spec-2-amber-4-white-2-4-",
    "title": "[하드웨어 규격] Dell Diagnostic LED - 2 Amber, 4 White (주황 2회, 흰색 4회) (Memory / RAM Failure) 점검 가이드",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "[2 Amber, 4 White (주황 2회, 흰색 4회)] Dell 데스크탑/노트북 전원 버튼 LED가 주황색 2회, 흰색 4회 점멸 반복",
    "actionTaken": "Dell 권장 규격의 DDR4/DDR5 메모리 확인 및 개별 슬롯 점검",
    "tags": [
      "하드웨어",
      "진단규격",
      "Memory / RAM Failure",
      "Dell",
      "LED점멸",
      "SupportAssist",
      "RAM"
    ],
    "sbar": {
      "situation": "[S] PC 하드웨어 부팅 또는 가동 중 [2 Amber, 4 White (주황 2회, 흰색 4회)] 상태가 식별되어 정상 가동이 불가능함.",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 (공개 팩트) | 대상 부품: Memory / RAM Failure",
      "assessment": "[A] 하드웨어 결함 분석: Dell 하드웨어 자체 진단 규격: 메모리(RAM) 모듈 오류 또는 호환 불가",
      "recommendation": "[R] 표준 정비 절차:\n1. 노트북인 경우 하판을 분리하여 SO-DIMM 메모리 모듈 재장착\n2. Dell SupportAssist 부팅 진단(부팅 시 F12 > Diagnostics) 실행하여 에러 코드 취득\n3. 규격 외 클럭의 혼용 장착 여부 확인 및 단일 모듈 테스트\n📌 연관 지식: [[Dell]], [[LED점멸]], [[SupportAssist]], [[RAM]]"
    },
    "wikilinks": [
      "Dell",
      "LED점멸",
      "SupportAssist",
      "RAM"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "hw-spec-3-amber-5-white-3-5-",
    "title": "[하드웨어 규격] Dell Diagnostic LED - 3 Amber, 5 White (주황 3회, 흰색 5회) (Power Rail Timeout) 점검 가이드",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "[3 Amber, 5 White (주황 3회, 흰색 5회)] Dell 시스템 전원 버튼 LED가 주황색 3회, 흰색 5회 점멸 후 전원 차단",
    "actionTaken": "1. 외부 모든 USB 및 도킹 스테이션 탈거 2. 메인보드 RTC 리셋 점퍼 실행",
    "tags": [
      "하드웨어",
      "진단규격",
      "Power Rail Timeout",
      "Dell",
      "LED점멸",
      "RTC리셋",
      "전원쇼트"
    ],
    "sbar": {
      "situation": "[S] PC 하드웨어 부팅 또는 가동 중 [3 Amber, 5 White (주황 3회, 흰색 5회)] 상태가 식별되어 정상 가동이 불가능함.",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 (공개 팩트) | 대상 부품: Power Rail Timeout",
      "assessment": "[A] 하드웨어 결함 분석: Dell 하드웨어 자체 진단: 메인보드 전원 레일 시퀀스 타임아웃 (전원 공급 장치 또는 쇼트)",
      "recommendation": "[R] 표준 정비 절차:\n1. 전원 어댑터 및 외장 마우스, 키보드, USB 장비 전체 분리\n2. 전원 버튼을 30~35초간 누르고 있어 Dell 메인보드 하드웨어 RTC 리셋 강제 실행\n3. 전원 버튼 LED가 파란색/흰색으로 정상 순환 점멸할 때까지 대기 후 전원 인가\n📌 연관 지식: [[Dell]], [[LED점멸]], [[RTC리셋]], [[전원쇼트]]"
    },
    "wikilinks": [
      "Dell",
      "LED점멸",
      "RTC리셋",
      "전원쇼트"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "hw-spec-3-long-2-short-caps-lock-3-2-",
    "title": "[하드웨어 규격] HP Diagnostic Blink - 3 Long, 2 Short (Caps Lock 점멸 3장 2단) (Memory Module Error) 점검 가이드",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "[3 Long, 2 Short (Caps Lock 점멸 3장 2단)] HP 노트북/데스크탑 전원 인가 시 Caps Lock LED가 긴 점멸 3회, 짧은 점멸 2회 반복",
    "actionTaken": "RAM 접점 청소 및 HP PC Hardware Diagnostics UEFI 실행",
    "tags": [
      "하드웨어",
      "진단규격",
      "Memory Module Error",
      "HP",
      "CapsLock점멸",
      "UEFI진단",
      "RAM"
    ],
    "sbar": {
      "situation": "[S] PC 하드웨어 부팅 또는 가동 중 [3 Long, 2 Short (Caps Lock 점멸 3장 2단)] 상태가 식별되어 정상 가동이 불가능함.",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 (공개 팩트) | 대상 부품: Memory Module Error",
      "assessment": "[A] 하드웨어 결함 분석: HP 하드웨어 진단: 메모리 초기화 오류 (Memory not initialized)",
      "recommendation": "[R] 표준 정비 절차:\n1. 부팅 시 F2 키를 연타하여 [HP PC Hardware Diagnostics UEFI] 진입\n2. [Component Tests > Memory > Fast Test] 실행\n3. 에러 failure ID 취득 또는 RAM 재장착 조치\n📌 연관 지식: [[HP]], [[CapsLock점멸]], [[UEFI진단]], [[RAM]]"
    },
    "wikilinks": [
      "HP",
      "CapsLock점멸",
      "UEFI진단",
      "RAM"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "hw-spec-5-long-2-short-caps-lock-5-2-",
    "title": "[하드웨어 규격] HP Diagnostic Blink - 5 Long, 2 Short (Caps Lock 점멸 5장 2단) (BIOS Recovery Required) 점검 가이드",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "[5 Long, 2 Short (Caps Lock 점멸 5장 2단)] HP PC 전원 켜짐 후 Caps Lock LED 5장 2단 점멸하며 블랙스크린 유지",
    "actionTaken": "HP 하드웨어 단축키(Win + B)를 사용한 BIOS 비상 자동 복구 시퀀스 실행",
    "tags": [
      "하드웨어",
      "진단규격",
      "BIOS Recovery Required",
      "HP",
      "BIOS복구",
      "Win+B",
      "블랙스크린"
    ],
    "sbar": {
      "situation": "[S] PC 하드웨어 부팅 또는 가동 중 [5 Long, 2 Short (Caps Lock 점멸 5장 2단)] 상태가 식별되어 정상 가동이 불가능함.",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 (공개 팩트) | 대상 부품: BIOS Recovery Required",
      "assessment": "[A] 하드웨어 결함 분석: 메인보드 임베디드 컨트롤러(EC)의 BIOS 이미지 무결성 검증 실패 (바이오스 손상)",
      "recommendation": "[R] 표준 정비 절차:\n1. PC 전원을 완전 종료\n2. 키보드의 `Windows 키`와 `B 키`를 동시에 누른 상태를 유지하면서 `전원 버튼`을 2~3초간 누르고 전원 버튼만 손을 뗌\n3. 화면에 \"HP BIOS Recovery\" 검은색 화면이 나타날 때까지 Win + B 키를 계속 유지\n4. 내장 복구 파티션에서 정상 BIOS 이미지를 자동 플래싱 복원\n📌 연관 지식: [[HP]], [[BIOS복구]], [[Win+B]], [[블랙스크린]]"
    },
    "wikilinks": [
      "HP",
      "BIOS복구",
      "Win+B",
      "블랙스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "hw-spec-beep-2101-2102",
    "title": "[하드웨어 규격] Lenovo Diagnostic - BEEP 2101 / 2102 (SSD Initialization Error) 점검 가이드",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "[BEEP 2101 / 2102] ThinkPad 부팅 시 \"2101: Detection error on SSD (M.2)\" 에러 메시지 표출",
    "actionTaken": "M.2 슬롯 나사 체결 상태 확인 및 재장착, SSD 펌웨어 업데이트",
    "tags": [
      "하드웨어",
      "진단규격",
      "SSD Initialization Error",
      "Lenovo",
      "ThinkPad",
      "M.2",
      "NVMe",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] PC 하드웨어 부팅 또는 가동 중 [BEEP 2101 / 2102] 상태가 식별되어 정상 가동이 불가능함.",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 (공개 팩트) | 대상 부품: SSD Initialization Error",
      "assessment": "[A] 하드웨어 결함 분석: M.2 NVMe SSD의 PCIe 링크 감지 실패 또는 슬롯 접촉 불량, 서멀패드 변형으로 인한 슬롯 뜸",
      "recommendation": "[R] 표준 정비 절차:\n1. 노트북 하판 분리 후 배터리 커넥터 일시 분리\n2. M.2 SSD 고정 나사를 풀고 SSD를 30도 각도로 들어올려 완전히 탈거\n3. M.2 슬롯 핀 내 이물질 청소 후 다시 수평으로 완전히 밀어 넣고 나사 체결\n4. BIOS 진입(F1)하여 [Config > Storage] 항목에서 SSD 모델명 정상 인식 여부 검증\n📌 연관 지식: [[Lenovo]], [[ThinkPad]], [[M.2]], [[NVMe]], [[SSD]]"
    },
    "wikilinks": [
      "Lenovo",
      "ThinkPad",
      "M.2",
      "NVMe",
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "kisa-sec-001",
    "title": "[KISA 표준 가이드] 공유기 DNS 변조 파밍 감지 및 복구",
    "sourceFile": "KISA 보호나라 표준 가이드",
    "date": "2026-08-07",
    "categoryLarge": "네트워크",
    "categoryMedium": "네트워크 보안",
    "symptom": "특정 포털 사이트 접속 시 보안 인증서 경고 또는 금융감독원 팝업창이 강제 표출됨",
    "actionTaken": "공유기 공장 초기화(RST) 및 관리자 암호 변경, 통신사 공인 DNS 강제 지정",
    "tags": [
      "네트워크",
      "보안",
      "KISA가이드",
      "DNS변조",
      "파밍",
      "공유기초기화",
      "flushdns",
      "네트워크보안"
    ],
    "sbar": {
      "situation": "[S] PC 및 사내망 환경에서 [공유기 DNS 변조 파밍 감지 및 복구] 위협 또는 이상 증상이 식별됨.",
      "background": "[B] 출처: KISA 보호나라 공공 PC 보안 가이드 (공공누리 제1유형) | 신뢰성: 공인 표준",
      "assessment": "[A] 보안 및 네트워크 원인 분석: 사설 공유기(IPTIME, 유플러스 등) 관리자 계정 해킹으로 악성 사설 DNS 주소가 강제 주입됨",
      "recommendation": "[R] 표준 긴급 조치 절차:\n1. 공유기 후면 리셋(RST) 버튼을 핀으로 10초 이상 길게 눌러 공장 초기화 수행\n2. 공유기 관리자 페이지(192.168.0.1 등) 접속하여 기본 `admin/admin` 암호를 8자리 이상 복합 문자로 즉시 변경\n3. [고급 설정 > 네트워크 관리 > 인터넷 설정]에서 DNS 주소를 KT(168.126.63.1 / 168.126.63.2) 또는 SKB, LGU+ 공식 DNS로 수동 고정\n4. PC 명령 프롬프트에서 `ipconfig /flushdns` 실행하여 로컬 DNS 캐시 완전 정화\n📌 연관 지식: [[DNS변조]], [[파밍]], [[공유기초기화]], [[flushdns]], [[네트워크보안]]"
    },
    "wikilinks": [
      "DNS변조",
      "파밍",
      "공유기초기화",
      "flushdns",
      "네트워크보안"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "kisa-sec-002",
    "title": "[KISA 표준 가이드] 랜섬웨어 감염 의심 시 긴급 초기 대응",
    "sourceFile": "KISA 보호나라 표준 가이드",
    "date": "2026-08-07",
    "categoryLarge": "네트워크",
    "categoryMedium": "보안/복구",
    "symptom": "파일 확장자가 알 수 없는 문자열로 변경되고 바탕화면에 README 텍스트 파일 생성됨",
    "actionTaken": "1. 즉각적인 유선 랜선 탈거 및 Wi-Fi 차단 2. 강제 전원 OFF 및 오프라인 백업 검사",
    "tags": [
      "네트워크",
      "보안",
      "KISA가이드",
      "랜섬웨어",
      "긴급격리",
      "KISA",
      "데이터복구",
      "보안"
    ],
    "sbar": {
      "situation": "[S] PC 및 사내망 환경에서 [랜섬웨어 감염 의심 시 긴급 초기 대응] 위협 또는 이상 증상이 식별됨.",
      "background": "[B] 출처: KISA 보호나라 공공 PC 보안 가이드 (공공누리 제1유형) | 신뢰성: 공인 표준",
      "assessment": "[A] 보안 및 네트워크 원인 분석: 랜섬웨어 악성코드가 실행되어 로컬 디스크 및 연결된 네트워크 드라이브 파일 비대칭 암호화 진행 중",
      "recommendation": "[R] 표준 긴급 조치 절차:\n1. 네트워크 공유 드라이브로의 암호화 확산을 막기 위해 1초 내로 유선 랜선을 뽑고 Wi-Fi를 비활성화\n2. PC 전원 코드를 뽑거나 전원 버튼을 길게 눌러 강제 셧다운 (진행 중인 백그라운드 암호화 즉각 중단)\n3. 디스크를 분리하여 감염되지 않은 별도의 보안 격리 PC에서 읽기 전용(Write-Blocker)으로 연결 후 복구 가능성 진단\n4. KISA 보호나라(118) 또는 NoMoreRansom 프로젝트 사이트에서 복호화 키 공개 여부 확인\n📌 연관 지식: [[랜섬웨어]], [[긴급격리]], [[KISA]], [[데이터복구]], [[보안]]"
    },
    "wikilinks": [
      "랜섬웨어",
      "긴급격리",
      "KISA",
      "데이터복구",
      "보안"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "kisa-sec-003",
    "title": "[KISA 표준 가이드] 원격 데스크톱(RDP 3389) 무차별 대입 공격 방어",
    "sourceFile": "KISA 보호나라 표준 가이드",
    "date": "2026-08-07",
    "categoryLarge": "네트워크",
    "categoryMedium": "네트워크 보안",
    "symptom": "작업 관리자 또는 이벤트 뷰어(Security 4625)에 수천 건의 알 수 없는 계정 로그인 실패 기록 누적",
    "actionTaken": "1. RDP 기본 포트 레지스트리 변경 2. Windows 방화벽 인바운드 특정 IP 제한",
    "tags": [
      "네트워크",
      "보안",
      "KISA가이드",
      "RDP",
      "원격데스크톱",
      "방화벽",
      "레지스트리",
      "포트변경"
    ],
    "sbar": {
      "situation": "[S] PC 및 사내망 환경에서 [원격 데스크톱(RDP 3389) 무차별 대입 공격 방어] 위협 또는 이상 증상이 식별됨.",
      "background": "[B] 출처: KISA 보호나라 공공 PC 보안 가이드 (공공누리 제1유형) | 신뢰성: 공인 표준",
      "assessment": "[A] 보안 및 네트워크 원인 분석: 공인 IP 환경에서 RDP 기본 포트(3389)가 외부에 노출되어 해외 봇넷의 무차별 대입 공격(Brute-Force) 발생",
      "recommendation": "[R] 표준 긴급 조치 절차:\n1. `regedit` 실행 후 `HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\WinStations\\RDP-Tcp` 이동\n2. `PortNumber` 값을 10진수로 선택 후 49152~65535 범위의 비표준 사용자 정의 포트 번호로 변경\n3. [고급 보안이 포함된 Windows Defender 방화벽]에서 원격 데스크톱 규칙의 [영역 > 원격 IP 주소]에 신뢰할 수 있는 특정 IP만 허용 지정\n📌 연관 지식: [[RDP]], [[원격데스크톱]], [[방화벽]], [[레지스트리]], [[포트변경]]"
    },
    "wikilinks": [
      "RDP",
      "원격데스크톱",
      "방화벽",
      "레지스트리",
      "포트변경"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "kisa-sec-004",
    "title": "[KISA 표준 가이드] Windows 네트워크 TCP/IP 스택 및 Winsock 완전 초기화",
    "sourceFile": "KISA 보호나라 표준 가이드",
    "date": "2026-08-07",
    "categoryLarge": "네트워크",
    "categoryMedium": "네트워크 보안",
    "symptom": "Wi-Fi 및 이더넷 연결됨 상태이나 웹 브라우저 접속 불가 및 DNS 요청 타임아웃 지속",
    "actionTaken": "관리자 권한 CMD에서 netsh winsock reset 및 netsh int ip reset 명령으로 스택 초기화",
    "tags": [
      "네트워크",
      "보안",
      "KISA가이드",
      "winsock",
      "TCP/IP",
      "netsh",
      "네트워크초기화",
      "IP충돌"
    ],
    "sbar": {
      "situation": "[S] PC 및 사내망 환경에서 [Windows 네트워크 TCP/IP 스택 및 Winsock 완전 초기화] 위협 또는 이상 증상이 식별됨.",
      "background": "[B] 출처: KISA 보호나라 공공 PC 보안 가이드 (공공누리 제1유형) | 신뢰성: 공인 표준",
      "assessment": "[A] 보안 및 네트워크 원인 분석: 타사 네트워크 보안 필터 드라이버 충돌 또는 Winsock LSP(Layered Service Provider) 카탈로그 손상",
      "recommendation": "[R] 표준 긴급 조치 절차:\n1. 관리자 권한으로 명령 프롬프트(CMD) 실행\n2. `netsh winsock reset` 입력 후 Enter (소켓 인터페이스 초기화)\n3. `netsh int ip reset` 입력 후 Enter (TCP/IP v4/v6 프로토콜 스택 리셋)\n4. `ipconfig /release` 및 `ipconfig /renew`로 새 IP 할당 요청 후 시스템 재부팅\n📌 연관 지식: [[winsock]], [[TCP/IP]], [[netsh]], [[네트워크초기화]], [[IP충돌]]"
    },
    "wikilinks": [
      "winsock",
      "TCP/IP",
      "netsh",
      "네트워크초기화",
      "IP충돌"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "kisa-sec-005",
    "title": "[KISA 표준 가이드] SMBv1 취약점 차단 및 랜섬웨어 전파 방지",
    "sourceFile": "KISA 보호나라 표준 가이드",
    "date": "2026-08-07",
    "categoryLarge": "네트워크",
    "categoryMedium": "보안/복구",
    "symptom": "사내 네트워크에서 워너크라이(WannaCry) 류의 파일 공유 취약점 공격 노출 우려",
    "actionTaken": "Windows 기능 켜기/끄기에서 SMB 1.0/CIFS 파일 공유 지원 완전 비활성화",
    "tags": [
      "네트워크",
      "보안",
      "KISA가이드",
      "SMBv1",
      "랜섬웨어",
      "Windows기능",
      "보안패치"
    ],
    "sbar": {
      "situation": "[S] PC 및 사내망 환경에서 [SMBv1 취약점 차단 및 랜섬웨어 전파 방지] 위협 또는 이상 증상이 식별됨.",
      "background": "[B] 출처: KISA 보호나라 공공 PC 보안 가이드 (공공누리 제1유형) | 신뢰성: 공인 표준",
      "assessment": "[A] 보안 및 네트워크 원인 분석: 구형 SMB 1.0 파일 공유 프로토콜이 활성화되어 있어 EternalBlue 익스플로잇에 노출",
      "recommendation": "[R] 표준 긴급 조치 절차:\n1. 제어판 > [프로그램 및 기능] > [Windows 기능 켜기/끄기] 클릭\n2. [SMB 1.0/CIFS 파일 공유 지원] 항목의 체크를 완전히 해제 후 [확인]\n3. PowerShell(관리자)에서 `Disable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol` 실행 후 재부팅\n📌 연관 지식: [[SMBv1]], [[랜섬웨어]], [[Windows기능]], [[보안패치]]"
    },
    "wikilinks": [
      "SMBv1",
      "랜섬웨어",
      "Windows기능",
      "보안패치"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.284Z",
    "updatedAt": "2026-09-17T14:26:55.284Z"
  },
  {
    "id": "ms-bsod-0000000a",
    "title": "[0x0000000A] IRQL_NOT_LESS_OR_EQUAL - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x0000000A] 고부하 작업 또는 부팅 중 블루스크린 IRQL_NOT_LESS_OR_EQUAL (0x0000000A) 발생",
    "actionTaken": "최근 설치된 드라이버 롤백, 그래픽/칩셋 드라이버 클린 재설치 및 메모리 진단(mdsched)",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x0000000A",
      "IRQL_NOT_LESS_OR_EQUAL",
      "IRQL",
      "BSOD",
      "DDU",
      "드라이버",
      "mdsched"
    ],
    "sbar": {
      "situation": "[S] [0x0000000A] 고부하 작업 또는 부팅 중 블루스크린 IRQL_NOT_LESS_OR_EQUAL (0x0000000A) 발생",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: 커널 모드 프로세스나 드라이버가 너무 높은 인터럽트 요청 레벨(IRQL)에서 페이징 가능한 메모리에 불법 접근",
      "recommendation": "[R] 표준 조치 절차:\n1. 안전 모드로 부팅하여 [장치 관리자]에서 최근 업데이트된 디바이스 드라이버 롤백\n2. Display Driver Uninstaller(DDU)를 사용하여 안전 모드에서 그래픽 드라이버 완전 밀고 최신 WHQL 버전 설치\n3. `mdsched.exe` 실행하여 RAM 물리적 불량 섹터 여부 정밀 테스트\n📌 연관 지식: [[IRQL]], [[BSOD]], [[DDU]], [[드라이버]], [[mdsched]]"
    },
    "wikilinks": [
      "IRQL",
      "BSOD",
      "DDU",
      "드라이버",
      "mdsched"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-0000001e",
    "title": "[0x0000001E] KMODE_EXCEPTION_NOT_HANDLED - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x0000001E] 프로그램 실행 또는 시스템 가동 중 KMODE_EXCEPTION_NOT_HANDLED (0x0000001E) 블루스크린",
    "actionTaken": "오류 덤프(minidump)에 명시된 문제 파일(.sys) 식별 및 해당 드라이버 교체/삭제",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x0000001E",
      "KMODE_EXCEPTION_NOT_HANDLED",
      "KMODE",
      "BSOD",
      "Minidump",
      "WinDbg",
      "sfc"
    ],
    "sbar": {
      "situation": "[S] [0x0000001E] 프로그램 실행 또는 시스템 가동 중 KMODE_EXCEPTION_NOT_HANDLED (0x0000001E) 블루스크린",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: 커널 모드 프로그램이 생성한 예외를 오류 처리기가 포착하지 못함 (결함 드라이버 또는 하드웨어 손상)",
      "recommendation": "[R] 표준 조치 절차:\n1. BlueScreenView 또는 WinDbg를 통해 `C:\\Windows\\Minidump` 분석하여 충돌 모듈(.sys) 확인\n2. 해당 드라이버가 타사 백신, 가상 드라이브, 또는 메인보드 번들 유틸리티인 경우 제어판에서 완전 삭제\n3. `DISM /Online /Cleanup-Image /RestoreHealth` 및 `sfc /scannow` 실행\n📌 연관 지식: [[KMODE]], [[BSOD]], [[Minidump]], [[WinDbg]], [[sfc]]"
    },
    "wikilinks": [
      "KMODE",
      "BSOD",
      "Minidump",
      "WinDbg",
      "sfc"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-0000003b",
    "title": "[0x0000003B] SYSTEM_SERVICE_EXCEPTION - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x0000003B] 웹 브라우징, 게임, 그래픽 작업 중 SYSTEM_SERVICE_EXCEPTION (0x0000003B) 블루스크린",
    "actionTaken": "GPU 드라이버 업데이트, 시스템 파일 무결성 검사 및 뱅킹 보안 모듈 충돌 검사",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x0000003B",
      "SYSTEM_SERVICE_EXCEPTION",
      "SYSTEM_SERVICE",
      "BSOD",
      "GPU",
      "보안모듈",
      "sfc"
    ],
    "sbar": {
      "situation": "[S] [0x0000003B] 웹 브라우징, 게임, 그래픽 작업 중 SYSTEM_SERVICE_EXCEPTION (0x0000003B) 블루스크린",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: 사용자 모드에서 커널 모드로 전환 중 시스템 서비스 루틴 인터페이스 에러 (주로 dxgkrnl.sys, ntoskrnl.exe)",
      "recommendation": "[R] 표준 조치 절차:\n1. GPU 제조사(NVIDIA, AMD, Intel) 공식 웹사이트에서 안정화된 최신 WHQL 드라이버 다운로드 설치\n2. 금융/공공기관 보안 프로그램(VeraPort, AnySign, nProtect) 제어판에서 전량 삭제\n3. 명령 프롬프트에서 `sfc /scannow` 실행하여 손상된 시스템 바이너리 복원\n📌 연관 지식: [[SYSTEM_SERVICE]], [[BSOD]], [[GPU]], [[보안모듈]], [[sfc]]"
    },
    "wikilinks": [
      "SYSTEM_SERVICE",
      "BSOD",
      "GPU",
      "보안모듈",
      "sfc"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-0000007e",
    "title": "[0x0000007E] SYSTEM_THREAD_EXCEPTION_NOT_HANDLED - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x0000007E] 시스템 기동 시 SYSTEM_THREAD_EXCEPTION_NOT_HANDLED (0x0000007E) 블루스크린 반복",
    "actionTaken": "C드라이브 여유 공간 20GB 이상 확보 및 안전 모드에서 그래픽 드라이버 재설치",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x0000007E",
      "SYSTEM_THREAD_EXCEPTION_NOT_HANDLED",
      "SYSTEM_THREAD",
      "BSOD",
      "BIOS",
      "디스크정리",
      "드라이버"
    ],
    "sbar": {
      "situation": "[S] [0x0000007E] 시스템 기동 시 SYSTEM_THREAD_EXCEPTION_NOT_HANDLED (0x0000007E) 블루스크린 반복",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: 시스템 스레드에서 생성된 예외가 처리되지 않음 (디스크 공간 부족 또는 호환되지 않는 비디오 드라이버)",
      "recommendation": "[R] 표준 조치 절차:\n1. C드라이브 남은 용량이 15% 이상인지 확인하고 디스크 정리(cleanmgr) 실행\n2. 메인보드 BIOS 펌웨어를 최신 안정 버전으로 업데이트하여 하드웨어 호환성 개선\n3. 안전 모드에서 문제가 된 드라이버 파일(예: nvlddmkm.sys, atikmdag.sys) 이름 변경 또는 제거\n📌 연관 지식: [[SYSTEM_THREAD]], [[BSOD]], [[BIOS]], [[디스크정리]], [[드라이버]]"
    },
    "wikilinks": [
      "SYSTEM_THREAD",
      "BSOD",
      "BIOS",
      "디스크정리",
      "드라이버"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-00000050",
    "title": "[0x00000050] PAGE_FAULT_IN_NONPAGED_AREA - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x00000050] 부팅 또는 작업 중 PAGE_FAULT_IN_NONPAGED_AREA (0x00000050) 블루스크린 발생",
    "actionTaken": "RAM 모듈 탈착 세척 및 가상 메모리(페이징 파일) 크기 재설정",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x00000050",
      "PAGE_FAULT_IN_NONPAGED_AREA",
      "PAGE_FAULT",
      "BSOD",
      "RAM",
      "가상메모리",
      "chkdsk"
    ],
    "sbar": {
      "situation": "[S] [0x00000050] 부팅 또는 작업 중 PAGE_FAULT_IN_NONPAGED_AREA (0x00000050) 블루스크린 발생",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: 유효하지 않은 시스템 메모리 주소 참조 (물리 RAM 불량, L2/L3 캐시 결함 또는 안티바이러스 필터 드라이버 충돌)",
      "recommendation": "[R] 표준 조치 절차:\n1. RAM을 탈거하여 지우개/BW-100으로 골드핑거 세척 후 1개씩 단독 장착하여 불량 램 판별\n2. [시스템 속성 > 고급 > 성능 설정 > 고급 > 가상 메모리]에서 [모든 드라이브에 대한 페이징 파일 크기 자동 관리] 체크 확인\n3. chkdsk C: /f /r 실행으로 디스크 페이징 영역 배드섹터 검사\n📌 연관 지식: [[PAGE_FAULT]], [[BSOD]], [[RAM]], [[가상메모리]], [[chkdsk]]"
    },
    "wikilinks": [
      "PAGE_FAULT",
      "BSOD",
      "RAM",
      "가상메모리",
      "chkdsk"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-000000d1",
    "title": "[0x000000D1] DRIVER_IRQL_NOT_LESS_OR_EQUAL - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x000000D1] 네트워크 통신 또는 USB 장치 연결 시 DRIVER_IRQL_NOT_LESS_OR_EQUAL (0x000000D1)",
    "actionTaken": "유선/무선 네트워크 어댑터 드라이버 클린 재설치 및 절전 모드 해제",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x000000D1",
      "DRIVER_IRQL_NOT_LESS_OR_EQUAL",
      "DRIVER_IRQL",
      "BSOD",
      "네트워크어댑터",
      "Wi-Fi",
      "절전모드"
    ],
    "sbar": {
      "situation": "[S] [0x000000D1] 네트워크 통신 또는 USB 장치 연결 시 DRIVER_IRQL_NOT_LESS_OR_EQUAL (0x000000D1)",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: 네트워크 카드(NIC), Wi-Fi, 또는 USB 컨트롤러 드라이버가 부적절한 메모리 주소에 접근",
      "recommendation": "[R] 표준 조치 절차:\n1. 장치 관리자에서 유선 이더넷 및 Wi-Fi 어댑터 우클릭 > [드라이버 업데이트] 또는 디바이스 제거 후 재부팅\n2. 어댑터 속성 [전원 관리] 탭에서 [전원을 절약하기 위해 컴퓨터가 이 장치를 끌 수 있음] 체크 해제\n3. 타사 네트워크 모니터링/VPN 가상 어댑터 프로그램 삭제\n📌 연관 지식: [[DRIVER_IRQL]], [[BSOD]], [[네트워크어댑터]], [[Wi-Fi]], [[절전모드]]"
    },
    "wikilinks": [
      "DRIVER_IRQL",
      "BSOD",
      "네트워크어댑터",
      "Wi-Fi",
      "절전모드"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-00000116",
    "title": "[0x00000116] VIDEO_TDR_FAILURE - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x00000116] 동영상 재생 또는 게임 플레이 중 화면이 멈췄다가 VIDEO_TDR_FAILURE (0x00000116) 블루스크린",
    "actionTaken": "1. DDU 클린 설치 2. GPU 클럭/전압 다운클럭 3. 레지스트리 TdrDelay 조정",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x00000116",
      "VIDEO_TDR_FAILURE",
      "VIDEO_TDR",
      "BSOD",
      "GPU",
      "DDU",
      "TdrDelay"
    ],
    "sbar": {
      "situation": "[S] [0x00000116] 동영상 재생 또는 게임 플레이 중 화면이 멈췄다가 VIDEO_TDR_FAILURE (0x00000116) 블루스크린",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: 그래픽 카드 드라이버가 제한 시간(기본 2초) 내에 GPU 응답을 완료하지 못함(TDR 타임아웃)",
      "recommendation": "[R] 표준 조치 절차:\n1. DDU(Display Driver Uninstaller)로 기존 그래픽 드라이버 완전 삭제 후 클린 재설치\n2. 그래픽 카드 팩토리 오버클럭이 적용된 경우 애프터버너 등으로 기본 정규 클럭으로 환원\n3. `regedit` > `HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers`에 DWORD(32비트) `TdrDelay`를 생성하고 값 8(초)로 설정\n📌 연관 지식: [[VIDEO_TDR]], [[BSOD]], [[GPU]], [[DDU]], [[TdrDelay]]"
    },
    "wikilinks": [
      "VIDEO_TDR",
      "BSOD",
      "GPU",
      "DDU",
      "TdrDelay"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-00000133",
    "title": "[0x00000133] DPC_WATCHDOG_VIOLATION - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x00000133] 마우스 커서가 뚝뚝 끊기다가 시스템 정지 후 DPC_WATCHDOG_VIOLATION (0x00000133) BSOD",
    "actionTaken": "SATA/NVMe 스토리지 컨트롤러 드라이버 표준 AHCI로 교체 및 SSD 펌웨어 업데이트",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x00000133",
      "DPC_WATCHDOG_VIOLATION",
      "DPC_WATCHDOG",
      "BSOD",
      "SSD펌웨어",
      "AHCI",
      "빠른시작"
    ],
    "sbar": {
      "situation": "[S] [0x00000133] 마우스 커서가 뚝뚝 끊기다가 시스템 정지 후 DPC_WATCHDOG_VIOLATION (0x00000133) BSOD",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: 특정 드라이버(주로 스토리지 컨트롤러 storahci.sys 또는 Wi-Fi 드라이버)가 DPC 루틴을 장시간 점유",
      "recommendation": "[R] 표준 조치 절차:\n1. 장치 관리자 > [IDE ATA/ATAPI 컨트롤러] > 표준 SATA AHCI 컨트롤러로 드라이버 교체\n2. SSD 제조사 공식 툴(삼성 Magician, Crucial Storage Executive 등)로 SSD 최신 펌웨어 적용\n3. 빠른 시작 켜기(Fast Startup) 제어판 전원 옵션에서 비활성화\n📌 연관 지식: [[DPC_WATCHDOG]], [[BSOD]], [[SSD펌웨어]], [[AHCI]], [[빠른시작]]"
    },
    "wikilinks": [
      "DPC_WATCHDOG",
      "BSOD",
      "SSD펌웨어",
      "AHCI",
      "빠른시작"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-00000139",
    "title": "[0x00000139] KERNEL_SECURITY_CHECK_FAILURE - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x00000139] 프로그램 실행 중 KERNEL_SECURITY_CHECK_FAILURE (0x00000139) 블루스크린 발생",
    "actionTaken": "오버클럭 해제, 메모리 무결성(Core Isolation) 옵션 확인 및 바이러스 정밀 검사",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x00000139",
      "KERNEL_SECURITY_CHECK_FAILURE",
      "KERNEL_SECURITY",
      "BSOD",
      "오버클럭",
      "코어격리",
      "XMP"
    ],
    "sbar": {
      "situation": "[S] [0x00000139] 프로그램 실행 중 KERNEL_SECURITY_CHECK_FAILURE (0x00000139) 블루스크린 발생",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: 운영체제 커널이 핵심 데이터 구조(리스트 헤더, 스택 쿠키 등)의 변조 또는 메모리 손상을 감지",
      "recommendation": "[R] 표준 조치 절차:\n1. BIOS에서 CPU/RAM 오버클럭 및 XMP/EXPO 설정을 해제하고 기본값(Default) 로드\n2. Windows 보안 > [장치 보안 > 코어 격리 > 메모리 무결성] 설정 점검\n3. Windows Defender 오프라인 검사 실행\n📌 연관 지식: [[KERNEL_SECURITY]], [[BSOD]], [[오버클럭]], [[코어격리]], [[XMP]]"
    },
    "wikilinks": [
      "KERNEL_SECURITY",
      "BSOD",
      "오버클럭",
      "코어격리",
      "XMP"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-000000ef",
    "title": "[0x000000EF] CRITICAL_PROCESS_DIED - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x000000EF] 시스템이 급작스럽게 프리징된 후 CRITICAL_PROCESS_DIED (0x000000EF) 블루스크린 표출",
    "actionTaken": "SFC/DISM 무결성 복구 및 최근 설치된 의심스러운 시스템 패치 롤백",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x000000EF",
      "CRITICAL_PROCESS_DIED",
      "CRITICAL_PROCESS",
      "BSOD",
      "sfc",
      "DISM",
      "업데이트삭제"
    ],
    "sbar": {
      "situation": "[S] [0x000000EF] 시스템이 급작스럽게 프리징된 후 CRITICAL_PROCESS_DIED (0x000000EF) 블루스크린 표출",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: Windows 핵심 필수 프로세스(csrss.exe, wininit.exe, services.exe 등)가 예기치 않게 종료됨",
      "recommendation": "[R] 표준 조치 절차:\n1. 명령 프롬프트(관리자)에서 `sfc /scannow` 실행\n2. `DISM /Online /Cleanup-Image /RestoreHealth` 실행\n3. 최근 설치된 윈도우 업데이트가 원인일 경우 [제어판 > 프로그램 추가/제거 > 설치된 업데이트 보기]에서 해당 KB 삭제\n📌 연관 지식: [[CRITICAL_PROCESS]], [[BSOD]], [[sfc]], [[DISM]], [[업데이트삭제]]"
    },
    "wikilinks": [
      "CRITICAL_PROCESS",
      "BSOD",
      "sfc",
      "DISM",
      "업데이트삭제"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-00000154",
    "title": "[0x00000154] UNEXPECTED_STORE_EXCEPTION - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x00000154] SSD 가동 중 디스크 100% 점유율 유지되다가 UNEXPECTED_STORE_EXCEPTION (0x00000154) 발생",
    "actionTaken": "SSD 케이블/M.2 슬롯 접촉 상태 점검, CrystalDiskInfo 건강 상태 진단 및 전원 관리 옵션 변경",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x00000154",
      "UNEXPECTED_STORE_EXCEPTION",
      "STORE_EXCEPTION",
      "BSOD",
      "SSD",
      "CrystalDiskInfo",
      "디스크100%"
    ],
    "sbar": {
      "situation": "[S] [0x00000154] SSD 가동 중 디스크 100% 점유율 유지되다가 UNEXPECTED_STORE_EXCEPTION (0x00000154) 발생",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: 저장장치(SSD/HDD)의 일시적 통신 단절 또는 불량 섹터로 인해 커널 저장소 메모리 페이지 반환 실패",
      "recommendation": "[R] 표준 조치 절차:\n1. M.2 NVMe SSD 탈거 후 슬롯 먼지 제거 및 재장착, SATA 케이블 교체\n2. CrystalDiskInfo로 05 치환된 섹터 수 및 C5 보류 중인 섹터 수 확인\n3. 전원 옵션 [고성능] 선택 및 [하드 디스크 끄기: 0분(사용 안 함)] 설정\n📌 연관 지식: [[STORE_EXCEPTION]], [[BSOD]], [[SSD]], [[CrystalDiskInfo]], [[디스크100%]]"
    },
    "wikilinks": [
      "STORE_EXCEPTION",
      "BSOD",
      "SSD",
      "CrystalDiskInfo",
      "디스크100%"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-0000007b",
    "title": "[0x0000007B] INACCESSIBLE_BOOT_DEVICE - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x0000007B] Windows 로딩 서클 회전 중 INACCESSIBLE_BOOT_DEVICE (0x0000007B) 블루스크린 발생하며 무한 재부팅",
    "actionTaken": "BIOS 진입하여 SATA 모드(AHCI/RAID) 원복 및 BCD 부팅 구성 데이터 재구축",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x0000007B",
      "INACCESSIBLE_BOOT_DEVICE",
      "INACCESSIBLE_BOOT",
      "BSOD",
      "AHCI",
      "RAID",
      "bootrec",
      "BCD"
    ],
    "sbar": {
      "situation": "[S] [0x0000007B] Windows 로딩 서클 회전 중 INACCESSIBLE_BOOT_DEVICE (0x0000007B) 블루스크린 발생하며 무한 재부팅",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: 부팅 중 부팅 파티션 디스크 컨트롤러 드라이버 초기화 실패 (SATA 모드 IDE/AHCI/RAID 변경 등)",
      "recommendation": "[R] 표준 조치 절차:\n1. 부팅 시 Del/F2 키로 BIOS 진입 후 [SATA Operation / VMD Controller] 모드가 AHCI인지 RAID인지 기존 설정으로 원복\n2. Windows 복구 환경(WinRE) 명령 프롬프트 진입\n3. `bootrec /fixmbr`, `bootrec /fixboot`, `bootrec /rebuildbcd` 차례대로 실행하여 부트 로더 복원\n📌 연관 지식: [[INACCESSIBLE_BOOT]], [[BSOD]], [[AHCI]], [[RAID]], [[bootrec]], [[BCD]]"
    },
    "wikilinks": [
      "INACCESSIBLE_BOOT",
      "BSOD",
      "AHCI",
      "RAID",
      "bootrec",
      "BCD"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-00000124",
    "title": "[0x00000124] WHEA_UNCORRECTABLE_ERROR - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x00000124] 작업 중 사운드가 드르륵 걸리며 WHEA_UNCORRECTABLE_ERROR (0x00000124) 하드웨어 오류 BSOD",
    "actionTaken": "1. CPU 언더볼팅/오버클럭 해제 2. CPU 서멀구리스 재도포 3. 파워서플라이 전압 출력 점검",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x00000124",
      "WHEA_UNCORRECTABLE_ERROR",
      "WHEA",
      "BSOD",
      "CPU발열",
      "언더볼팅",
      "HWiNFO64",
      "서멀구리스"
    ],
    "sbar": {
      "situation": "[S] [0x00000124] 작업 중 사운드가 드르륵 걸리며 WHEA_UNCORRECTABLE_ERROR (0x00000124) 하드웨어 오류 BSOD",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: CPU 프로세서 코어 전압 부족, 극심한 발열(Throttling 초과) 또는 PCIe 버스 하드웨어 물리 결함",
      "recommendation": "[R] 표준 조치 절차:\n1. BIOS 진입하여 CPU 전압 오프셋 및 PBO/전력제한 해제 설정을 기본값(Auto)으로 초기화\n2. HWiNFO64 프로그램으로 풀로드 시 CPU 코어 온도가 95도를 초과하는지 모니터링 후 쿨러 서멀 재도포\n3. 파워서플라이 12V 전압 강하 여부 점검\n📌 연관 지식: [[WHEA]], [[BSOD]], [[CPU발열]], [[언더볼팅]], [[HWiNFO64]], [[서멀구리스]]"
    },
    "wikilinks": [
      "WHEA",
      "BSOD",
      "CPU발열",
      "언더볼팅",
      "HWiNFO64",
      "서멀구리스"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ms-bsod-00000074",
    "title": "[0x00000074] BAD_SYSTEM_CONFIG_INFO - 블루스크린(BSOD) 공식 진단 및 복구",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "블루스크린(BSOD)",
    "symptom": "[0x00000074] 부팅 과정에서 BAD_SYSTEM_CONFIG_INFO (0x00000074) 블루스크린 표출",
    "actionTaken": "WinRE 명령 프롬프트에서 레지스트리 백업 복원 또는 시스템 복원 지점 적용",
    "tags": [
      "소프트웨어",
      "블루스크린(BSOD)",
      "0x00000074",
      "BAD_SYSTEM_CONFIG_INFO",
      "BAD_CONFIG",
      "BSOD",
      "레지스트리",
      "시스템복원",
      "BCD"
    ],
    "sbar": {
      "situation": "[S] [0x00000074] 부팅 과정에서 BAD_SYSTEM_CONFIG_INFO (0x00000074) 블루스크린 표출",
      "background": "[B] 출처: Microsoft 공식 레퍼런스 | 분류: 소프트웨어 > 블루스크린(BSOD)",
      "assessment": "[A] 장애 원인 분석: Windows 시스템 레지스트리 하이브 파일(SYSTEM, SOFTWARE)의 논리적/물리적 손상",
      "recommendation": "[R] 표준 조치 절차:\n1. WinRE 복구 환경에서 [시스템 복원]을 선택하여 이전 정상 작동 지점으로 롤백\n2. 복원 지점이 없는 경우 명령 프롬프트에서 `C:\\Windows\\System32\\config\\RegBack` 백업 하이브 확인 후 복구\n3. `bcdedit /deletevalue {default} numproc` 및 `bcdedit /deletevalue {default} truncatememory`로 BCD 부팅 제약 해제\n📌 연관 지식: [[BAD_CONFIG]], [[BSOD]], [[레지스트리]], [[시스템복원]], [[BCD]]"
    },
    "wikilinks": [
      "BAD_CONFIG",
      "BSOD",
      "레지스트리",
      "시스템복원",
      "BCD"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "hw-ami-6beep",
    "title": "[하드웨어 규격] AMI BIOS - 6 Beeps (Gate A20 / 키보드 컨트롤러 결함)",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "BIOS",
    "symptom": "전원 켜짐 후 비프음 단음 6회 울리며 화면 출력 불가",
    "actionTaken": "1. 외부 키보드 및 USB 허브 전체 탈착 후 부팅 2. CMOS 클리어 점퍼 리셋",
    "tags": [
      "하드웨어",
      "BIOS",
      "AMI BIOS Beep",
      "6 Beeps",
      "AMI",
      "비프음",
      "GateA20",
      "CMOS초기화",
      "SuperIO"
    ],
    "sbar": {
      "situation": "[S] 전원 켜짐 후 비프음 단음 6회 울리며 화면 출력 불가",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 | 분류: 하드웨어 > BIOS",
      "assessment": "[A] 장애 원인 분석: 메인보드 키보드 컨트롤러 칩셋(Super I/O) 결함 또는 Gate A20 라인 전환 오류",
      "recommendation": "[R] 표준 조치 절차:\n1. 본체 후면에 장착된 모든 USB 키보드, 마우스, 외장 기기를 분리하고 전원 켜기\n2. 전원 플러그를 뽑고 메인보드의 CLRTC / JBAT1 점퍼 핀을 쇼트시켜 CMOS 완전 초기화\n3. 지속 발생 시 메인보드 Super I/O 칩셋 고장으로 제조사 A/S 센터 점검 필요\n📌 연관 지식: [[AMI]], [[비프음]], [[GateA20]], [[CMOS초기화]], [[SuperIO]]"
    },
    "wikilinks": [
      "AMI",
      "비프음",
      "GateA20",
      "CMOS초기화",
      "SuperIO"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "hw-ami-7beep",
    "title": "[하드웨어 규격] AMI BIOS - 7 Beeps (Processor Exception Interrupt 오류)",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "BIOS",
    "symptom": "PC 전원 인가 시 비프음 7회 출력되며 부팅 중단",
    "actionTaken": "CPU 탈거 후 소켓 핀 검사 및 다른 정상 CPU로 교차 검증",
    "tags": [
      "하드웨어",
      "BIOS",
      "AMI BIOS Beep",
      "7 Beeps",
      "AMI",
      "비프음",
      "CPU소켓",
      "인터럽트",
      "쿨러장력"
    ],
    "sbar": {
      "situation": "[S] PC 전원 인가 시 비프음 7회 출력되며 부팅 중단",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 | 분류: 하드웨어 > BIOS",
      "assessment": "[A] 장애 원인 분석: CPU 프로세서가 가상 모드 예외 인터럽트를 생성함 (CPU 물리 불량 또는 소켓 접촉 불량)",
      "recommendation": "[R] 표준 조치 절차:\n1. 쿨러를 조심스럽게 분리하고 CPU를 꺼내어 소켓 핀 휨/부러짐이 없는지 돋보기로 전수 검사\n2. CPU 밑면 접점(LGA 패드)을 알코올 스왑으로 깨끗이 닦아내고 재장착\n3. 쿨러 장착 시 대각선 순서로 균일한 토크로 나사를 조여 장력 불균형 방지\n📌 연관 지식: [[AMI]], [[비프음]], [[CPU소켓]], [[인터럽트]], [[쿨러장력]]"
    },
    "wikilinks": [
      "AMI",
      "비프음",
      "CPU소켓",
      "인터럽트",
      "쿨러장력"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "hw-ami-9beep",
    "title": "[하드웨어 규격] AMI BIOS - 9 Beeps (ROM Checksum Error / 롬 바이오스 손상)",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "BIOS",
    "symptom": "비프음 9회 울리며 부팅 화면 진입 불가",
    "actionTaken": "BIOS Flashback 기능을 이용한 바이오스 강제 재플래싱 복구",
    "tags": [
      "하드웨어",
      "BIOS",
      "AMI BIOS Beep",
      "9 Beeps",
      "AMI",
      "비프음",
      "BIOSFlashback",
      "롬바이오스",
      "체크섬"
    ],
    "sbar": {
      "situation": "[S] 비프음 9회 울리며 부팅 화면 진입 불가",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 | 분류: 하드웨어 > BIOS",
      "assessment": "[A] 장애 원인 분석: 메인보드 SPI 플래시 ROM에 저장된 BIOS 펌웨어 체크섬 불일치 (바이오스 손상)",
      "recommendation": "[R] 표준 조치 절차:\n1. 다른 PC에서 메인보드 제조사 홈페이지로부터 최신 BIOS ROM 다운로드\n2. FAT32로 포맷된 USB 루트 디렉터리에 지정된 이름(예: creative.bin 등)으로 저장\n3. 메인보드 후면 [BIOS Flashback] 전용 USB 포트에 꽂고 플래시백 버튼을 3초간 눌러 LED 깜빡임 확인 후 자동 복원\n📌 연관 지식: [[AMI]], [[비프음]], [[BIOSFlashback]], [[롬바이오스]], [[체크섬]]"
    },
    "wikilinks": [
      "AMI",
      "비프음",
      "BIOSFlashback",
      "롬바이오스",
      "체크섬"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "hw-dell-2amber-7white",
    "title": "[하드웨어 규격] Dell 시스템 - 2 Amber 7 White (LCD/디스플레이 패널 오류)",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "디스플레이",
    "symptom": "Dell 노트북 전원 버튼 LED가 주황색 2회, 흰색 7회 반복 점멸하며 화면 블랙",
    "actionTaken": "eDP 케이블 재장착 및 Dell BIST(자체 화면 테스트) 실행",
    "tags": [
      "하드웨어",
      "디스플레이",
      "Dell",
      "LED점멸",
      "LCDBIST",
      "eDP케이블",
      "화면"
    ],
    "sbar": {
      "situation": "[S] Dell 노트북 전원 버튼 LED가 주황색 2회, 흰색 7회 반복 점멸하며 화면 블랙",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 | 분류: 하드웨어 > 노트북",
      "assessment": "[A] 장애 원인 분석: Dell 하드웨어 규격: 디스플레이 패널 연결 케이블(eDP) 단선 또는 LCD 패널 전원 불량",
      "recommendation": "[R] 표준 조치 절차:\n1. 전원 OFF 상태에서 `D 키`를 누른 상태를 유지하며 `전원 버튼`을 눌러 화면 자체 테스트(LCD BIST) 진입\n2. 화면에 빨강, 초록, 파랑, 흰색 전체 색상이 순차 출력되면 패널 정상, eDP 케이블/메인보드 결함\n3. 외부 모니터(HDMI/Type-C) 연결 시 정상 출력되는지 교차 확인\n📌 연관 지식: [[Dell]], [[LED점멸]], [[LCDBIST]], [[eDP케이블]], [[노트북화면]]"
    },
    "wikilinks": [
      "Dell",
      "LED점멸",
      "LCDBIST",
      "eDP케이블",
      "노트북화면"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "hw-dell-3amber-3white",
    "title": "[하드웨어 규격] Dell 시스템 - 3 Amber 3 White (BIOS Recovery Image Not Found)",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "Dell 전원 LED 주황 3회, 흰색 3회 점멸하며 복구 이미지 없음 오류",
    "actionTaken": "USB 드라이브에 BIOS 복구 파일 생성 후 강제 복구(Ctrl + Esc)",
    "tags": [
      "하드웨어",
      "데스크탑",
      "Dell Diagnostic LED",
      "3 Amber 3 White",
      "Dell",
      "LED점멸",
      "BIOS복구",
      "Ctrl+Esc",
      "rcv"
    ],
    "sbar": {
      "situation": "[S] Dell 전원 LED 주황 3회, 흰색 3회 점멸하며 복구 이미지 없음 오류",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 | 분류: 하드웨어 > 데스크탑",
      "assessment": "[A] 장애 원인 분석: EFI 시스템 파티션 내 BIOS 복구 이미지(BIOS_IMG.rcv)가 없거나 손상됨",
      "recommendation": "[R] 표준 조치 절차:\n1. 정상 PC에서 Dell 지원 사이트로부터 해당 모델 BIOS exe 파일 다운로드\n2. 파일명을 `BIOS_IMG.rcv`로 변경하여 FAT32 USB 드라이브에 복사\n3. Dell PC에 USB 연결 후 전원 코드 연결 시 `Ctrl + Esc` 키를 동시에 누르고 있어 자동 복구 모드 강제 기동\n📌 연관 지식: [[Dell]], [[LED점멸]], [[BIOS복구]], [[Ctrl+Esc]], [[rcv]]"
    },
    "wikilinks": [
      "Dell",
      "LED점멸",
      "BIOS복구",
      "Ctrl+Esc",
      "rcv"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "hw-hp-3long-3short",
    "title": "[하드웨어 규격] HP 시스템 - 3 Long 3 Short (그래픽 컨트롤러 초기화 실패)",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "HP PC 전원 인가 시 Caps Lock/전원 LED가 3회 긴 점멸, 3회 짧은 점멸 반복",
    "actionTaken": "외장 그래픽카드 PCIe 슬롯 재결착 및 보조 전원 점검",
    "tags": [
      "하드웨어",
      "데스크탑",
      "HP Diagnostic Blink",
      "3 Long 3 Short",
      "HP",
      "CapsLock점멸",
      "그래픽카드",
      "PCIe",
      "GPU"
    ],
    "sbar": {
      "situation": "[S] HP PC 전원 인가 시 Caps Lock/전원 LED가 3회 긴 점멸, 3회 짧은 점멸 반복",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 | 분류: 하드웨어 > 데스크탑",
      "assessment": "[A] 장애 원인 분석: HP 하드웨어 진단: 그래픽 컨트롤러(GPU) 미감지 또는 초기화 타임아웃",
      "recommendation": "[R] 표준 조치 절차:\n1. 외장 그래픽 카드를 탈거하여 PCIe 슬롯의 이물질을 청소하고 견고히 재장착\n2. 파워서플라이에서 그래픽카드로 인입되는 보조전원 케이블 재결착\n3. 내장 그래픽이 있는 CPU인 경우 외장 그래픽 탈거 후 메인보드 포트로 단독 부팅 테스트\n📌 연관 지식: [[HP]], [[CapsLock점멸]], [[그래픽카드]], [[PCIe]], [[GPU]]"
    },
    "wikilinks": [
      "HP",
      "CapsLock점멸",
      "그래픽카드",
      "PCIe",
      "GPU"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "hw-ram-dualchannel",
    "title": "[하드웨어 규격] DDR4/DDR5 메모리 듀얼 채널 장착 서열 (A2/B2 2·4번 슬롯 원칙)",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "메모리",
    "symptom": "2개 RAM 장착 시 싱글 채널로만 동작하거나 부팅 시 무한 재부팅(메모리 트레이닝 실패)",
    "actionTaken": "CPU 소켓으로부터 2번째(A2), 4번째(B2) 슬롯에 우선 장착",
    "tags": [
      "하드웨어",
      "메모리",
      "메모리 규격",
      "RAM 슬롯 서열",
      "RAM",
      "듀얼채널",
      "데이지체인",
      "XMP",
      "CPU-Z"
    ],
    "sbar": {
      "situation": "[S] 2개 RAM 장착 시 싱글 채널로만 동작하거나 부팅 시 무한 재부팅(메모리 트레이닝 실패)",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 | 분류: 하드웨어 > 메모리",
      "assessment": "[A] 장애 원인 분석: 메인보드 데이지체인(Daisy Chain) 토폴로지 구조상 종단 슬롯인 2번(A2)과 4번(B2) 미준수",
      "recommendation": "[R] 표준 조치 절차:\n1. 메인보드 4개 슬롯 중 1번(A1), 3번(B1)에만 장착된 경우 2번(A2), 4번(B2)으로 이동 장착\n2. 종단 신호 반사파(Signal Reflection) 간섭을 방지하여 고클럭 XMP/EXPO 안정적 부팅 보장\n3. CPU-Z 프로그램 [Memory] 탭에서 `Channel #`이 [Dual] (DDR5의 경우 2 x 32-bit 또는 4 x 32-bit)로 표시되는지 확인\n📌 연관 지식: [[RAM]], [[듀얼채널]], [[데이지체인]], [[XMP]], [[CPU-Z]]"
    },
    "wikilinks": [
      "RAM",
      "듀얼채널",
      "데이지체인",
      "XMP",
      "CPU-Z"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "hw-power-drain",
    "title": "[하드웨어 정비] 잔류 전원 방전(Power Drain) 및 메인보드 하드웨어 리셋 절차",
    "sourceFile": "PC 하드웨어 표준 진단 규격",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "전원/파워",
    "symptom": "낙뢰, 정전, 또는 절전 모드 복귀 후 전원 버튼을 눌러도 팬조차 돌지 않고 전원 무반응",
    "actionTaken": "전원 플러그 완전 분리 후 전원 버튼 30초 지속 압박 방전 조치",
    "tags": [
      "하드웨어",
      "전원/파워",
      "전원 진단",
      "Power Drain",
      "PowerDrain",
      "잔류전원방전",
      "전원무반응",
      "보호회로",
      "파워서플라이"
    ],
    "sbar": {
      "situation": "[S] 낙뢰, 정전, 또는 절전 모드 복귀 후 전원 버튼을 눌러도 팬조차 돌지 않고 전원 무반응",
      "background": "[B] 출처: PC 하드웨어 표준 진단 규격 | 분류: 하드웨어 > 전원/파워",
      "assessment": "[A] 장애 원인 분석: 파워서플라이 또는 메인보드의 보호 회로(OVP/UVP/OCP)가 과전류/정전기로 래치(Latch) 잠금 상태",
      "recommendation": "[R] 표준 조치 절차:\n1. 본체 후면 전원 케이블을 물리적으로 뽑고 멀티탭 스위치 차단\n2. 전면 전원 버튼을 손가락으로 누른 상태를 30~45초간 유지 (내부 커패시터에 충전된 잔류 전원 방전)\n3. 노트북인 경우 배터리 및 어댑터 분리 후 전원 버튼 30초 압박\n4. 전원 코드를 벽면 단독 콘센트에 다시 직결하고 전원 켜기\n📌 연관 지식: [[PowerDrain]], [[잔류전원방전]], [[전원무반응]], [[보호회로]], [[파워서플라이]]"
    },
    "wikilinks": [
      "PowerDrain",
      "잔류전원방전",
      "전원무반응",
      "보호회로",
      "파워서플라이"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "kisa-wifi-wpa3",
    "title": "[KISA 표준 가이드] Wi-Fi 무선 네트워크 보안 암호화(WPA3/WPA2) 설정 수칙",
    "sourceFile": "KISA 보호나라 표준 가이드",
    "date": "2026-08-07",
    "categoryLarge": "네트워크",
    "categoryMedium": "네트워크 보안",
    "symptom": "공공 Wi-Fi 또는 사내 무선망 패킷 스니핑 및 비인가 무선 침입 위협",
    "actionTaken": "공유기 무선 보안 모드를 WPA2-PSK(AES) 또는 WPA3-SAE로 전환",
    "tags": [
      "네트워크",
      "네트워크 보안",
      "무선 네트워크 보안",
      "KISA",
      "Wi-Fi",
      "WPA3",
      "AES",
      "공유기보안"
    ],
    "sbar": {
      "situation": "[S] 공공 Wi-Fi 또는 사내 무선망 패킷 스니핑 및 비인가 무선 침입 위협",
      "background": "[B] 출처: KISA 보호나라 표준 가이드 | 분류: 네트워크 > 네트워크 보안",
      "assessment": "[A] 장애 원인 분석: 구형 WEP 또는 취약한 WPA-PSK(TKIP) 프로토콜 사용으로 무선 암호화 키 크래킹 취약",
      "recommendation": "[R] 표준 조치 절차:\n1. 무선 공유기 설정 페이지 접속 > [무선 설정/보안]\n2. 보안 인증 방식을 [WPA2-PSK/WPA3-SAE 개인]으로 선택하고 암호화 알고리즘을 반드시 [AES]로 고정\n3. 무선 비밀번호를 영문 대소문자, 숫자, 특수기호 조합 12자리 이상으로 생성\n4. WPS(Wi-Fi Protected Setup) PIN 방식 비활성화\n📌 연관 지식: [[KISA]], [[Wi-Fi]], [[WPA3]], [[AES]], [[공유기보안]]"
    },
    "wikilinks": [
      "KISA",
      "Wi-Fi",
      "WPA3",
      "AES",
      "공유기보안"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "kisa-suspicious-process",
    "title": "[KISA 표준 가이드] 악성 프로세스 및 가상화폐 채굴기(Cryptominer) 식별 및 제거",
    "sourceFile": "KISA 보호나라 표준 가이드",
    "date": "2026-08-07",
    "categoryLarge": "네트워크",
    "categoryMedium": "보안/복구",
    "symptom": "PC 부팅 후 유휴 상태에서도 CPU/GPU 점유율이 90~100% 지속되며 쿨러 굉음 발생",
    "actionTaken": "1. 리소스 모니터로 프로세스 이미지 경로 확인 2. 자동 실행(Autoruns) 레지스트리 정리",
    "tags": [
      "네트워크",
      "보안/복구",
      "악성코드 대응",
      "KISA",
      "채굴기",
      "Autoruns",
      "작업관리자",
      "악성코드"
    ],
    "sbar": {
      "situation": "[S] PC 부팅 후 유휴 상태에서도 CPU/GPU 점유율이 90~100% 지속되며 쿨러 굉음 발생",
      "background": "[B] 출처: KISA 보호나라 표준 가이드 | 분류: 네트워크 > 보안/복구",
      "assessment": "[A] 장애 원인 분석: 정상 프로세스(svchost.exe, explorer.exe)를 사칭한 악성 백그라운드 마이닝 프로세스 상주",
      "recommendation": "[R] 표준 조치 절차:\n1. `Ctrl + Shift + Esc`로 작업 관리자 실행 > 세부 정보 탭에서 CPU 점유율 순 정렬\n2. 의심 프로세스 우클릭 > [파일 위치 열기] 클릭하여 `C:\\Windows\\System32`가 아닌 `AppData`나 `Temp`에 위치하는지 검사\n3. Sysinternals Autoruns 도구로 [Logon] 및 [Scheduled Tasks] 탭에서 정체불명의 실행 항목 삭제\n4. Windows Defender 최신 시그니처 업데이트 후 오프라인 전체 검사 수행\n📌 연관 지식: [[KISA]], [[채굴기]], [[Autoruns]], [[작업관리자]], [[악성코드]]"
    },
    "wikilinks": [
      "KISA",
      "채굴기",
      "Autoruns",
      "작업관리자",
      "악성코드"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "kisa-dns-flush-cache",
    "title": "[KISA 표준 가이드] DNS 캐시 포이즈닝 예방 및 로컬 리졸버 캐시 플러시",
    "sourceFile": "KISA 보호나라 표준 가이드",
    "date": "2026-08-07",
    "categoryLarge": "네트워크",
    "categoryMedium": "네트워크",
    "symptom": "정상 도메인 주소를 입력했음에도 피싱 사이트나 잘못된 IP로 연결되는 현상",
    "actionTaken": "1. ipconfig /flushdns 실행 2. C:\\Windows\\System32\\drivers\\etc\\hosts 파일 무결성 복원",
    "tags": [
      "네트워크",
      "네트워크",
      "네트워크 무결성",
      "KISA",
      "DNS캐시",
      "flushdns",
      "hosts파일",
      "파밍"
    ],
    "sbar": {
      "situation": "[S] 정상 도메인 주소를 입력했음에도 피싱 사이트나 잘못된 IP로 연결되는 현상",
      "background": "[B] 출처: KISA 보호나라 표준 가이드 | 분류: 네트워크 > 네트워크",
      "assessment": "[A] 장애 원인 분석: 로컬 PC의 DNS 확인자 캐시 테이블이 오염되었거나 악성 호스트(hosts) 파일 변조",
      "recommendation": "[R] 표준 조치 절차:\n1. 관리자 권한 CMD에서 `ipconfig /flushdns` 입력하여 DNS 리졸버 캐시 테이블 즉각 소탕\n2. `notepad C:\\Windows\\System32\\drivers\\etc\\hosts` 열어 맨 아래에 불법적으로 추가된 도메인-IP 매핑 항목 삭제\n3. 기본 hosts 내용인 `# 127.0.0.1 localhost` 외 의심 IP 매핑 확인 후 저장\n📌 연관 지식: [[KISA]], [[DNS캐시]], [[flushdns]], [[hosts파일]], [[파밍]]"
    },
    "wikilinks": [
      "KISA",
      "DNS캐시",
      "flushdns",
      "hosts파일",
      "파밍"
    ],
    "backlinks": [],
    "createdAt": "2026-09-17T14:26:55.289Z",
    "updatedAt": "2026-09-17T14:26:55.289Z"
  },
  {
    "id": "ssd-trouble-02",
    "title": "SSD 데이터 백업/이관 도중 전송 중단 및 원본 유실 복구 절차",
    "sourceFile": "SSD 트러블슈팅 가이드",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "백업",
    "symptom": "PC 자산 교체 중 크로스케이블 백업 전송 중 네트워크 끊김으로 전송 강제 중단 및 원본 저장 영역 폴더 소실",
    "actionTaken": "1. 물리 섹터 덮어쓰기(Overwrite) 방지를 위해 파티션 추가 쓰기/지우기 작업 전면 금지 2. 디스크 안전 탈거 후 전산관리자 공식 반출 승인 상신 3. 전문 복구 업체 이관",
    "sbar": {
      "situation": "[S] 신구 PC 데이터 백업 중 네트워크 끊김으로 데이터 전송이 중단되고 원본 폴더 소실 발생.",
      "background": "[B] 네트워크 백업 전송 이탈 및 파일 시스템 구조 파손.",
      "assessment": "[A] 파티션 MFT/FAT 레코드 파손 및 데이터 유실 위험.",
      "recommendation": "[R] 1. 대상 파티션에 대한 추가 데이터 쓰기/지우기 [[덮어쓰기 금지]]\n2. PC지원실에서 디스크 안전 탈거 후 [[정보전산관리자 반출 승인]] 상신\n3. 전문 복구 업체 이송하여 복원 처리"
    },
    "wikilinks": [
      "정보전산관리자 반출 승인"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T06:06:53.493Z",
    "updatedAt": "2026-08-07T06:06:53.493Z"
  },
  {
    "id": "hw-trouble-01",
    "title": "RAM(메모리) 불량 증상 및 세척 정비 가이드",
    "sourceFile": "하드웨어 트러블슈팅 가이드",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "RAM",
    "symptom": "전원 인가 후 메인보드 비프음 경고(3~4회) 및 화면 무반응, MEMORY_MANAGEMENT (0x0000001A) 블루스크린 발생",
    "actionTaken": "1. 잔류 전류 방전 후 RAM 적출 2. 금색 접촉 단자(Gold contact) 지우개 및 알코올 세척 3. 슬롯 교차 재장착 4. mdsched.exe 메모리 진단",
    "tags": [
      "하드웨어",
      "RAM",
      "메모리불량",
      "RAM세척",
      "비프음",
      "0x0000001A",
      "MEMORY_MANAGEMENT"
    ],
    "sbar": {
      "situation": "[S] PC 전원 인가 시 비프음 3~4회 발생하며 화면 안 나옴. 또는 0x0000001A 블루스크린 다수 발생.",
      "background": "[B] RAM 골드 단자 산화, 슬롯 접촉부 먼지 유입 및 가상 메모리 매핑 위반 (wiki-hardware-troubleshooting-v1.md).",
      "assessment": "[A] RAM 슬롯 접촉 불량 또는 메모리 칩셋 물리적 불량.",
      "recommendation": "[R] 1. 전원 케이블 분리 후 잔류 전원 방전\n2. RAM 적출 후 금색 접촉 단자를 [[RAM 세척]] 지우개/알코올로 세척\n3. 슬롯 위치 교차 재장착\n4. `mdsched.exe` 메모리 진단 실행"
    },
    "wikilinks": [
      "RAM 세척",
      "MEMORY_MANAGEMENT (0x0000001A)"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T06:04:44.488Z",
    "updatedAt": "2026-08-07T06:04:44.489Z"
  },
  {
    "id": "hw-trouble-02",
    "title": "그래픽카드(GPU) 화면 줄가기/노이즈 및 TDR 장애 대응",
    "sourceFile": "하드웨어 트러블슈팅 가이드",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "그래픽카드",
    "symptom": "화면 줄 가기, 분홍/초록 격자 무늬 노이즈(Artifacting), 블랙아웃, 팬 폭주, VIDEO_TDR_FAILURE 발생",
    "actionTaken": "1. 안전 모드 진입 2. DDU(Display Driver Uninstaller) 툴 이용 기존 드라이버 완전 삭제 3. WHQL 최신 공식 드라이버 클린 설치 4. 8핀 보조전원 체결 실사",
    "tags": [
      "하드웨어",
      "GPU",
      "그래픽카드",
      "Artifacting",
      "DDU",
      "VIDEO_TDR_FAILURE"
    ],
    "sbar": {
      "situation": "[S] 모니터 화면 분홍/초록 격자 노이즈 발생, 3D 구동 시 모니터 블랙아웃 및 VIDEO_TDR_FAILURE 발생.",
      "background": "[B] 그래픽카드 칩셋 메모리(VRAM) 파손, GPU 과열 또는 디스플레이 드라이버 TDR 복구 실패.",
      "assessment": "[A] GPU 비디오 렌더링 스케줄러 멈춤 및 전원 공급 부족.",
      "recommendation": "[R] 1. [[안전 모드]] 부팅 후 DDU 툴로 기존 그래픽 드라이버 삭제\n2. WHQL 공식 인증 그래픽 드라이버 재설치\n3. PCIe 슬롯 및 보조 전원 8핀 물리 체결 실사"
    },
    "wikilinks": [
      "안전 모드",
      "VIDEO_TDR_FAILURE (0x00000116 / 0x00000117)"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T06:04:44.489Z",
    "updatedAt": "2026-08-07T06:04:44.489Z"
  },
  {
    "id": "hw-trouble-03",
    "title": "유선 LAN 식별되지 않은 네트워크 & 커넥터 수리",
    "sourceFile": "하드웨어 트러블슈팅 가이드",
    "date": "2026-08-07",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP/DNS",
    "symptom": "지구본 아이콘 활성화, 고정 IP 입력 시에도 '식별되지 않은 네트워크' 오류 및 잦은 패킷 유실",
    "actionTaken": "1. netsh winsock reset 및 IP 초기화 2. 파손된 RJ-45 커넥터 전용 툴 재가공 3. WIPS 및 EPP 차단 여부 검증",
    "sbar": {
      "situation": "[S] 유선 LAN 연결 시 지구본 아이콘이 뜨며 식별되지 않은 네트워크 에러 발생.",
      "background": "[B] RJ-45 랜케이블 핀 물리적 파손, 스택 어댑터 프로토콜 꼬임, 전산관리자 MAC 차단.",
      "assessment": "[A] 물리 렌선 핀 접촉 불량 또는 WIPS/보안 어댑터 세팅 파손.",
      "recommendation": "[R] 1. CMD에서 `netsh winsock reset` 및 `netsh int ip reset` 수행\n2. 파손된 [[RJ-45 커넥터]] 전용 툴로 핀 재배열 수동 랜작업\n3. 전산관리자 무선/유선 MAC 등록 조회"
    },
    "wikilinks": [
      "WIPS (무선 침입 방지 시스템) & SSID"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T06:04:44.489Z",
    "updatedAt": "2026-08-07T06:04:44.489Z"
  },
  {
    "id": "hw-trouble-04",
    "title": "무선 WIFI AP 목록 유실 & 보안 솔루션 무선 차단 조치",
    "sourceFile": "하드웨어 트러블슈팅 가이드",
    "date": "2026-08-07",
    "categoryLarge": "네트워크",
    "categoryMedium": "WIPS/무선",
    "symptom": "가용 와이파이 AP 목록 완전 유실, 보안 솔루션 보안 솔루션의 무선랜 어댑터 강제 차단 현상",
    "actionTaken": "1. 보안 솔루션 오탐 해제 및 망연계 시스템 연동 재설치 2. 무선 드라이버 속성 '전원 절약을 위해 컴퓨터가 이 장치를 끌 수 있음' 체크 해제",
    "sbar": {
      "situation": "[S] 와이파이 목록이 모두 사라지고 무선랜 어댑터가 작동하지 않음.",
      "background": "[B] 사내 전사 통합 보안 솔루션 [[보안 솔루션]] 무선 매체 통제 정책 오탐지.",
      "assessment": "[A] 보안 솔루션에 의한 무선랜카드 장치 강제 셧다운 및 전원 절약 옵션 에러.",
      "recommendation": "[R] 1. [[보안 솔루션]] 차단 예외 처리 및 [[망연계 시스템]] 연동 재설치\n2. 장치 관리자 > 무선 랜카드 속성 > 전원 관리 탭에서 '전원 절약을 위해 컴퓨터가 이 장치를 끌 수 있음' 해제"
    },
    "wikilinks": [
      "보안 솔루션 (네트워크 차단 및 보안인증)",
      "망연계 시스템 (무결성 및 인증 에이전트)"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T06:04:44.489Z",
    "updatedAt": "2026-08-07T06:04:44.489Z"
  },
  {
    "id": "hw-trouble-05",
    "title": "AUDIO 출력장치 미설치 & 마이크 송수신 불가 조치",
    "sourceFile": "하드웨어 트러블슈팅 가이드",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "사운드/오디오",
    "symptom": "소리 아이콘에 '출력 장치 설치 안 됨' 경고 표출, Teams/Zoom 화상 회의 마이크 음성 미인식",
    "actionTaken": "1. mmsys.cpl 실행 후 기본 재생/녹음 장치 지정 2. Realtek/인텔 SST 사운드 드라이버 롤백 3. 윈도우 마이크 개인정보 접근 허용",
    "sbar": {
      "situation": "[S] 윈도우 오디오 출력 장치가 사라지고 Teams/Zoom 화상 회의 마이크 음성이 송수신되지 않음.",
      "background": "[B] 오디오 서비스 드라이버(Realtek/Intel SST) 업데이트 충돌 및 윈도우 개인정보 권한 차단.",
      "assessment": "[A] 사운드 드라이버 서비스 정지 또는 마이크 개인정보 접근 차단.",
      "recommendation": "[R] 1. `mmsys.cpl` 실행하여 기본 장치 지정\n2. 장치 관리자에서 [[인텔 스마트 사운드 기술 (SST)]] 드라이버 롤백\n3. 윈도우 설정 > 개인 정보 및 보안 > 마이크 앱 접근 권한 '켜기'"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T06:04:44.489Z",
    "updatedAt": "2026-08-07T06:04:44.489Z",
    "tags": [
      "하드웨어",
      "사운드",
      "오디오",
      "마이크"
    ]
  },
  {
    "id": "hw-trouble-06",
    "title": "터치패드 포인터 멈춤 & 배터리 부풀음 (Battery Swelling)",
    "sourceFile": "하드웨어 트러블슈팅 가이드",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "배터리/전원",
    "symptom": "노트북 터치패드 포인터 멈춤, 클릭 불가능, 하판 및 터치패드 주변이 들뜨고 부풀어 오르는 현상",
    "actionTaken": "1. Fn + 터치패드 락 단축키 상태 확인 2. 배터리 팽창(Swelling) 식별 시 하판 분해 및 가스 배터리 물리적 안전 탈거 3. 렌탈사 교체 접수",
    "sbar": {
      "situation": "[S] 노트북 터치패드 클릭이 인가되지 않고 하판 팜레스트 부위가 심하게 들뜨고 부풀어 오름.",
      "background": "[B] 리튬이온 배터리 노후화로 인한 내부 가스 팽창(Battery Swelling)으로 터치패드 압력 변형 발생.",
      "assessment": "[A] 배터리 스웰링에 의한 물리적 하우징 압착.",
      "recommendation": "[R] 1. Fn 단축키 터치패드 잠금 여부 일차 확인\n2. 배터리 부풀음 발견 시 즉시 전원 OFF 후 하판 분해하여 [[팽창 배터리 안전 탈거]]\n3. PC지원실 접수 후 렌탈사 신품 배터리/노트북 교체 요청"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T06:04:44.489Z",
    "updatedAt": "2026-08-07T06:04:44.489Z",
    "tags": [
      "하드웨어",
      "배터리",
      "터치패드",
      "스웰링"
    ]
  },
  {
    "id": "hw-trouble-07",
    "title": "DISPLAY 모니터 화면 어두움 (백라이트 고장) 및 해상도 조정",
    "sourceFile": "하드웨어 트러블슈팅 가이드",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "디스플레이",
    "symptom": "모니터 백라이트 손상으로 화면이 희미하게 어둡게 나옴, 34인치 울트라와이드 권장 해상도 미지원",
    "actionTaken": "1. 외장 그래픽 드라이버 최신화 및 재생 빈도 수동 변경 2. 백라이트 패널 고장 단말 식별 시 SSD 하드 탈거 후 모니터/노트북 교체",
    "sbar": {
      "situation": "[S] 모니터 패널 화면이 매우 희미하고 어둡게 표출되거나 34인치 와이드 화면 해상도가 찌그러짐.",
      "background": "[B] 패널 백라이트 LED 소자 고장 또는 그래픽 드라이버 권장 해상도 미인식.",
      "assessment": "[A] 모니터 백라이트 패널 물리 고장 또는 디스플레이 설정 미정합.",
      "recommendation": "[R] 1. 디스플레이 설정 > 고급 디스플레이에서 해상도 및 주사율(Hz) 수동 변경\n2. 백라이트 패널 완전 고장 단말은 데이터 보존을 위해 [[SSD 하드 탈거]] 후 모니터/노트북 교체 배정"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T06:04:44.489Z",
    "updatedAt": "2026-08-07T06:04:44.489Z",
    "tags": [
      "하드웨어",
      "디스플레이",
      "백라이트",
      "해상도"
    ]
  },
  {
    "id": "known-issue-01",
    "title": "[Known Issue] MEMORY_MANAGEMENT (0x0000001A) 보안 패치 충돌",
    "sourceFile": "Windows 11 기술 가이드",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "윈도우 11 최신 누적 보안 패치가 메모리 리소스 할당 테이블과 손상 마찰을 일으키며 0x0000001A 블루스크린 무한 발생",
    "actionTaken": "1. 중요 소스 및 작업 데이터 안전 백업 진행 2. 최근 누적 업데이트 수동 제거 또는 정합 OS 마스터 이미지를 활용한 클린 재설치 적용",
    "tags": [
      "Windows11",
      "KnownIssue",
      "MEMORY_MANAGEMENT",
      "0x0000001A",
      "보안패치",
      "OS포맷"
    ],
    "sbar": {
      "situation": "[S] 윈도우 11 최신 누적 보안 패치 적용 후 메모리 리소스 할당 테이블 파손으로 0x0000001A 블루스크린 반복 발생.",
      "background": "[B] OS 업데이트와 사내 보안 에이전트 간의 커널 메모리 주소 할당 정합성 충돌 (windows-known-issues-v1.md).",
      "assessment": "[A] 가상 메모리 매핑 구조 위반 및 물리 메모리 할당 테이블 마찰.",
      "recommendation": "[R] 1. 중요 소스 데이터 안전 백업\n2. [[Windows 업데이트 제거]] 수동 이행\n3. 지속 발생 시 정합 OS 마스터 이미지 기반 [[OS 클린 재설치]] 적용"
    },
    "wikilinks": [
      "Windows 업데이트 제거",
      "OS 클린 재설치"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T06:00:21.686Z",
    "updatedAt": "2026-08-07T06:00:21.686Z"
  },
  {
    "id": "known-issue-02",
    "title": "[Known Issue] Windows Update 56% 정지 및 무한 부팅 복구",
    "sourceFile": "Windows 11 기술 가이드",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "윈도우 업데이트 진행 중 56% 구간에서 진행이 정지되며 시스템 무한 재부팅 루프 발생",
    "actionTaken": "1. BIOS 진입 후 Secure Boot 정책 Disabled 변경 2. 안전모드 진입 3. SoftwareDistribution 캐시 초기화 (net stop wuauserv)",
    "tags": [
      "Windows11",
      "KnownIssue",
      "WindowsUpdate",
      "SecureBoot",
      "안전모드",
      "SoftwareDistribution"
    ],
    "sbar": {
      "situation": "[S] 윈도우 11 업데이트 적용 중 56% 위치에서 무한 정지 및 부팅 루프가 반복됨.",
      "background": "[B] UEFI 보안 부팅(Secure Boot) 무결성 검증 정책과 업데이트 바이너리 간의 커널 서명 충돌.",
      "assessment": "[A] Secure Boot 무결성 체크 실패로 인한 업데이트 프로세스 교착 상태.",
      "recommendation": "[R] 1. BIOS 진입 후 `Secure Boot` 정책 임시 비활성화(`Disabled`)\n2. [[안전 모드]] 진입\n3. CMD(관리자)에서 `net stop wuauserv` 후 `C:\\Windows\\SoftwareDistribution` 폴더 삭제 초기화\n4. 업데이트 정상 완료 후 Secure Boot 재활성화."
    },
    "wikilinks": [
      "안전 모드"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T06:00:21.686Z",
    "updatedAt": "2026-08-07T06:00:21.686Z"
  },
  {
    "id": "known-issue-03",
    "title": "[Known Issue] Windows 11 기본 캡처도구 및 그림판 강제 종료",
    "sourceFile": "Windows 11 기술 가이드",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "외부 금융/행정 사이트 접속 후 기본 캡처도구(Snipping Tool) 및 그림판 실행 시 아무 오류창 없이 즉시 강제 종료",
    "actionTaken": "1. 제어판 > 프로그램 및 기능 진입 2. 상주 중인 nProtect Online Security 및 TouchENKey 프로세스 수동 종료 및 삭제 3. 캡처도구 재실행",
    "tags": [
      "Windows11",
      "KnownIssue",
      "캡처도구",
      "nProtect",
      "TouchENKey",
      "키보드보안"
    ],
    "sbar": {
      "situation": "[S] 윈도우 기본 캡처도구 및 그림판 기동 시 아무 오류창 없이 즉시 프로세스 강제 종료됨.",
      "background": "[B] 외부 금융/행정 접속 시 자동 상주하는 키보드보안 에이전트(nProtect, TouchENKey)와 윈도우 캡처 엔진 스레드 간 스크린 후킹 방지 프로세스 충돌.",
      "assessment": "[A] 키보드보안 프로그램이 캡처도구 스레드를 무단 점유하여 강제 종료 유발.",
      "recommendation": "[R] 1. 제어판 > 프로그램 및 기능 진입\n2. 접속 후 상주 중인 [[nProtect Online Security]] 및 [[TouchENKey]] 프로세스 수동 종료 및 미사용 시 삭제\n3. 캡처도구 재실행."
    },
    "wikilinks": [
      "nProtect Online Security",
      "TouchENKey"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T06:00:21.686Z",
    "updatedAt": "2026-08-07T06:00:21.686Z"
  },
  {
    "id": "known-issue-04",
    "title": "[Known Issue] Windows 11 블루투스 무선 장치 유실 및 차단",
    "sourceFile": "Windows 11 기술 가이드",
    "date": "2026-08-07",
    "categoryLarge": "네트워크",
    "categoryMedium": "WIPS/무선",
    "symptom": "블루투스 무선 키보드/마우스 신호가 주기적으로 완전 유실되거나 연결 끊김",
    "actionTaken": "1. 블루투스 직연결 대신 로지텍 유니파잉 수신기(동글 USB) 우회 연결 2. 전산관리자에 보안 솔루션 무선 예외 인가 상신",
    "tags": [
      "Windows11",
      "KnownIssue",
      "블루투스",
      "보안솔루션",
      "유니파잉",
      "동글"
    ],
    "sbar": {
      "situation": "[S] 윈도우 11 단말에서 블루투스 무선 키보드/마우스 신호가 주기적으로 완전 유실됨.",
      "background": "[B] 사내 전사 망 제어 및 정보보호 솔루션 [[보안 솔루션]]의 무선 매체 차단 정책이 블루투스 어댑터를 미인가 매체로 오탐하여 강제 셧다운.",
      "assessment": "[A] 보안 솔루션 에이전트에 의한 블루투스 무선 라디오 하드웨어 차단.",
      "recommendation": "[R] 1. 블루투스 직연결 대신 [[로지텍 유니파잉 수신기 (동글 USB)]] 우회 연결\n2. 전산관리자에 [[보안 솔루션 무선 예외 인가]] 신청 상신."
    },
    "wikilinks": [
      "보안 솔루션",
      "로지텍 유니파잉 수신기 (동글 USB)",
      "보안 솔루션 무선 예외 인가"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T06:00:21.686Z",
    "updatedAt": "2026-08-07T06:00:21.686Z"
  },
  {
    "id": "known-issue-05",
    "title": "[Known Issue] LG 그램 단말 웹 파일 업로드 및 첨부 차단 오류",
    "sourceFile": "Windows 11 기술 가이드",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "브라우저",
    "symptom": "신규 지급된 LG 그램 노트북에서 웹 브라우저, 사내 메신저 메일 등 파일 첨부 기능 클릭 시 무한 먹통/프리징",
    "actionTaken": "1. 제어판 > 프로그램 및 기능 진입 2. OEM 번들 프로그램 LG Smart Assistant 수동 완전 삭제 3. PC 재부팅 후 보안 솔루션 정책 재동기화",
    "sbar": {
      "situation": "[S] 신규 지급된 LG 그램 노트북에서 웹 브라우저, 사내 메신저 메일 등 파일 첨부 기능 작동 불가.",
      "background": "[B] LG 그램 OEM 제어 모듈인 `LG Smart Assistant`와 사내 [[보안 솔루션]] 보안 엔진 간의 파일 접근 커널 메모리 후킹 충돌.",
      "assessment": "[A] 파일 선택 대화상자(File Open Dialog) 스레드가 이중 후킹되어 프리징 유발.",
      "recommendation": "[R] 1. 제어판 > 프로그램 및 기능 진입\n2. OEM 번들 프로그램 [[LG Smart Assistant]] 수동 완전 삭제\n3. PC 재부팅 후 [[보안 솔루션]] 정책 재동기화."
    },
    "wikilinks": [
      "LG Smart Assistant",
      "보안 솔루션"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T06:00:21.686Z",
    "updatedAt": "2026-08-07T06:00:21.686Z",
    "tags": [
      "소프트웨어",
      "Windows11",
      "파일업로드"
    ]
  },
  {
    "id": "bsod-full-1",
    "title": "[BSOD] APC_INDEX_MISMATCH (0x00000001)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: APC_INDEX_MISMATCH (0x00000001) - APC(Asynchronous Procedure Call) 인덱스 불일치 오류. 커널 모드 드라이버가 APC 비활성화/활성화 수를 맞추지 못할 때 발생.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "APC_INDEX_MISMATCH",
      "0x00000001",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code APC_INDEX_MISMATCH (0x00000001).",
      "background": "[B] APC(Asynchronous Procedure Call) 인덱스 불일치 오류. 커널 모드 드라이버가 APC 비활성화/활성화 수를 맞추지 못할 때 발생. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.529Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-2",
    "title": "[BSOD] DEVICE_QUEUE_NOT_BUSY (0x00000002)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DEVICE_QUEUE_NOT_BUSY (0x00000002) - 디바이스 큐 비활성화 오류. 디바이스 큐가 사용 중이지 않은 상태에서 큐 조작 시도.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DEVICE_QUEUE_NOT_BUSY",
      "0x00000002",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DEVICE_QUEUE_NOT_BUSY (0x00000002).",
      "background": "[B] 디바이스 큐 비활성화 오류. 디바이스 큐가 사용 중이지 않은 상태에서 큐 조작 시도. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-3",
    "title": "[BSOD] EVT_INVALID_HANDLE (0x00000003)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: EVT_INVALID_HANDLE (0x00000003) - 유효하지 않은 이벤트 핸들 참조. 커널 핸들 테이블 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "EVT_INVALID_HANDLE",
      "0x00000003",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code EVT_INVALID_HANDLE (0x00000003).",
      "background": "[B] 유효하지 않은 이벤트 핸들 참조. 커널 핸들 테이블 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-4",
    "title": "[BSOD] INVALID_DATA_ACCESS_TRAP (0x00000004)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INVALID_DATA_ACCESS_TRAP (0x00000004) - 무효 데이터 접근 트랩. CPU 트랩 핸들러가 승인되지 않은 메모리 데이터 읽기 탐지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INVALID_DATA_ACCESS_TRAP",
      "0x00000004",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INVALID_DATA_ACCESS_TRAP (0x00000004).",
      "background": "[B] 무효 데이터 접근 트랩. CPU 트랩 핸들러가 승인되지 않은 메모리 데이터 읽기 탐지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-5",
    "title": "[BSOD] INVALID_PROCESSOR_STATE (0x00000005)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INVALID_PROCESSOR_STATE (0x00000005) - 유효하지 않은 프로세서 상태. CPU 컨텍스트 전환 중 레지스터 상태 이상.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INVALID_PROCESSOR_STATE",
      "0x00000005",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INVALID_PROCESSOR_STATE (0x00000005).",
      "background": "[B] 유효하지 않은 프로세서 상태. CPU 컨텍스트 전환 중 레지스터 상태 이상. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-6",
    "title": "[BSOD] INVALID_PROCESSOR_CONTEXT (0x00000006)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INVALID_PROCESSOR_CONTEXT (0x00000006) - 유효하지 않은 프로세서 컨텍스트. 멀티코어 전원 관리 동기화 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INVALID_PROCESSOR_CONTEXT",
      "0x00000006",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INVALID_PROCESSOR_CONTEXT (0x00000006).",
      "background": "[B] 유효하지 않은 프로세서 컨텍스트. 멀티코어 전원 관리 동기화 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-7",
    "title": "[BSOD] IRQL_NOT_GREATER_OR_EQUAL (0x00000009)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: IRQL_NOT_GREATER_OR_EQUAL (0x00000009) - IRQL 인터럽트 요청 레벨 미달 오류. 드라이버가 지정된 레벨 이상을 요구했으나 미달.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "IRQL_NOT_GREATER_OR_EQUAL",
      "0x00000009",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code IRQL_NOT_GREATER_OR_EQUAL (0x00000009).",
      "background": "[B] IRQL 인터럽트 요청 레벨 미달 오류. 드라이버가 지정된 레벨 이상을 요구했으나 미달. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-9",
    "title": "[BSOD] NO_EXCEPTION_HANDLING_FUNCTION (0x0000000B)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NO_EXCEPTION_HANDLING_FUNCTION (0x0000000B) - 예외 처리 함수 누락. 커널 스레드 예외 핸들러 미등록.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NO_EXCEPTION_HANDLING_FUNCTION",
      "0x0000000B",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NO_EXCEPTION_HANDLING_FUNCTION (0x0000000B).",
      "background": "[B] 예외 처리 함수 누락. 커널 스레드 예외 핸들러 미등록. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-10",
    "title": "[BSOD] MAXIMUM_WAIT_OBJECTS_EXCEEDED (0x0000000C)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MAXIMUM_WAIT_OBJECTS_EXCEEDED (0x0000000C) - 최대 대기 개체 수 초과. KeWaitForMultipleObjects 호출 시 제한(64개) 초과.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MAXIMUM_WAIT_OBJECTS_EXCEEDED",
      "0x0000000C",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MAXIMUM_WAIT_OBJECTS_EXCEEDED (0x0000000C).",
      "background": "[B] 최대 대기 개체 수 초과. KeWaitForMultipleObjects 호출 시 제한(64개) 초과. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-11",
    "title": "[BSOD] MUTEX_LEVEL_NUMBER_MISMATCH (0x0000000D)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MUTEX_LEVEL_NUMBER_MISMATCH (0x0000000D) - 뮤텍스 레벨 번호 불일치. 데드락 방지 뮤텍스 순서 위반.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MUTEX_LEVEL_NUMBER_MISMATCH",
      "0x0000000D",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MUTEX_LEVEL_NUMBER_MISMATCH (0x0000000D).",
      "background": "[B] 뮤텍스 레벨 번호 불일치. 데드락 방지 뮤텍스 순서 위반. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-12",
    "title": "[BSOD] NO_USER_GEB_OBJECT (0x0000000E)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NO_USER_GEB_OBJECT (0x0000000E) - 사용자 GEB 개체 없음. 시스템 그래픽 서브시스템 렌더링 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NO_USER_GEB_OBJECT",
      "0x0000000E",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NO_USER_GEB_OBJECT (0x0000000E).",
      "background": "[B] 사용자 GEB 개체 없음. 시스템 그래픽 서브시스템 렌더링 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-13",
    "title": "[BSOD] SPIN_LOCK_ALREADY_OWNED (0x0000000F)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SPIN_LOCK_ALREADY_OWNED (0x0000000F) - 스핀락 이미 소유됨. 동기화 스핀락 수동 재취득 시도 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SPIN_LOCK_ALREADY_OWNED",
      "0x0000000F",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SPIN_LOCK_ALREADY_OWNED (0x0000000F).",
      "background": "[B] 스핀락 이미 소유됨. 동기화 스핀락 수동 재취득 시도 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-14",
    "title": "[BSOD] SPIN_LOCK_NOT_OWNED (0x00000010)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SPIN_LOCK_NOT_OWNED (0x00000010) - 스핀락 미소유 해제 시도. 소유하지 않은 스핀락 해제 요청.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SPIN_LOCK_NOT_OWNED",
      "0x00000010",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SPIN_LOCK_NOT_OWNED (0x00000010).",
      "background": "[B] 스핀락 미소유 해제 시도. 소유하지 않은 스핀락 해제 요청. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-15",
    "title": "[BSOD] THREAD_NOT_MUTEX_OWNER (0x00000011)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: THREAD_NOT_MUTEX_OWNER (0x00000011) - 스레드가 뮤텍스 소유자가 않음. 소유하지 않은 뮤텍스 해제.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "THREAD_NOT_MUTEX_OWNER",
      "0x00000011",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code THREAD_NOT_MUTEX_OWNER (0x00000011).",
      "background": "[B] 스레드가 뮤텍스 소유자가 않음. 소유하지 않은 뮤텍스 해제. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-16",
    "title": "[BSOD] TRAP_CAUSE_UNKNOWN (0x00000012)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: TRAP_CAUSE_UNKNOWN (0x00000012) - 원인 불명의 알 수 없는 CPU 트랩 발생.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "TRAP_CAUSE_UNKNOWN",
      "0x00000012",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code TRAP_CAUSE_UNKNOWN (0x00000012).",
      "background": "[B] 원인 불명의 알 수 없는 CPU 트랩 발생. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-17",
    "title": "[BSOD] EMPTY_THREAD_REAPER_LIST (0x00000013)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: EMPTY_THREAD_REAPER_LIST (0x00000013) - 비어있는 스레드 리퍼 리스트. 종료 스레드 수거 큐 이상.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "EMPTY_THREAD_REAPER_LIST",
      "0x00000013",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code EMPTY_THREAD_REAPER_LIST (0x00000013).",
      "background": "[B] 비어있는 스레드 리퍼 리스트. 종료 스레드 수거 큐 이상. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-18",
    "title": "[BSOD] CREATE_DELETE_LOCK_NOT_LOCKED (0x00000014)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CREATE_DELETE_LOCK_NOT_LOCKED (0x00000014) - 생성/삭제 잠금 미잠금. 동기화 락 상태 불일치.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CREATE_DELETE_LOCK_NOT_LOCKED",
      "0x00000014",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CREATE_DELETE_LOCK_NOT_LOCKED (0x00000014).",
      "background": "[B] 생성/삭제 잠금 미잠금. 동기화 락 상태 불일치. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-19",
    "title": "[BSOD] LAST_CHANCE_CALLED_FROM_KMODE (0x00000015)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: LAST_CHANCE_CALLED_FROM_KMODE (0x00000015) - 커널 모드 라스트 찬스 예외 발생. Unhandled exception 커널 정지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "LAST_CHANCE_CALLED_FROM_KMODE",
      "0x00000015",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code LAST_CHANCE_CALLED_FROM_KMODE (0x00000015).",
      "background": "[B] 커널 모드 라스트 찬스 예외 발생. Unhandled exception 커널 정지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-20",
    "title": "[BSOD] CID_HANDLE_CREATION (0x00000016)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CID_HANDLE_CREATION (0x00000016) - CID 핸들 생성 실패. 프로세스/스레드 ID 핸들 테이블 만동.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CID_HANDLE_CREATION",
      "0x00000016",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CID_HANDLE_CREATION (0x00000016).",
      "background": "[B] CID 핸들 생성 실패. 프로세스/스레드 ID 핸들 테이블 만동. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-21",
    "title": "[BSOD] CID_HANDLE_DELETION (0x00000017)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CID_HANDLE_DELETION (0x00000017) - CID 핸들 삭제 중 구조적 오류.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CID_HANDLE_DELETION",
      "0x00000017",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CID_HANDLE_DELETION (0x00000017).",
      "background": "[B] CID 핸들 삭제 중 구조적 오류. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-22",
    "title": "[BSOD] REFERENCE_BY_POINTER (0x00000018)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: REFERENCE_BY_POINTER (0x00000018) - 포인터 참조 카운트 파손. 디바이스 개체 참조 수 0 미만 소구.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "REFERENCE_BY_POINTER",
      "0x00000018",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code REFERENCE_BY_POINTER (0x00000018).",
      "background": "[B] 포인터 참조 카운트 파손. 디바이스 개체 참조 수 0 미만 소구. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-23",
    "title": "[BSOD] BAD_POOL_HEADER (0x00000019)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: BAD_POOL_HEADER (0x00000019) - 커널 메모리 풀 헤더 파손. 메모리 할당 블록 덮어쓰기 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "BAD_POOL_HEADER",
      "0x00000019",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code BAD_POOL_HEADER (0x00000019).",
      "background": "[B] 커널 메모리 풀 헤더 파손. 메모리 할당 블록 덮어쓰기 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-24",
    "title": "[BSOD] MEMORY_MANAGEMENT (0x0000001A)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MEMORY_MANAGEMENT (0x0000001A) - 가상/물리 메모리(RAM) 관리 시스템 결함. RAM 손상 및 누적 패치 충돌.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MEMORY_MANAGEMENT",
      "0x0000001A",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MEMORY_MANAGEMENT (0x0000001A).",
      "background": "[B] 가상/물리 메모리(RAM) 관리 시스템 결함. RAM 손상 및 누적 패치 충돌. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-25",
    "title": "[BSOD] PFN_SHARE_COUNT_TOOMANY (0x0000001B)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PFN_SHARE_COUNT_TOOMANY (0x0000001B) - PFN(Page Frame Number) 공유 카운트 초과.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PFN_SHARE_COUNT_TOOMANY",
      "0x0000001B",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PFN_SHARE_COUNT_TOOMANY (0x0000001B).",
      "background": "[B] PFN(Page Frame Number) 공유 카운트 초과. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-26",
    "title": "[BSOD] PFN_REFERENCE_COUNT_TOOMANY (0x0000001C)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PFN_REFERENCE_COUNT_TOOMANY (0x0000001C) - PFN 참조 카운트 임계치 초과.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PFN_REFERENCE_COUNT_TOOMANY",
      "0x0000001C",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PFN_REFERENCE_COUNT_TOOMANY (0x0000001C).",
      "background": "[B] PFN 참조 카운트 임계치 초과. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-27",
    "title": "[BSOD] NO_SPIN_LOCK_AVAILABLE (0x0000001D)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NO_SPIN_LOCK_AVAILABLE (0x0000001D) - 가용 스핀락 없음. 동기화 자원 고갈.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NO_SPIN_LOCK_AVAILABLE",
      "0x0000001D",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NO_SPIN_LOCK_AVAILABLE (0x0000001D).",
      "background": "[B] 가용 스핀락 없음. 동기화 자원 고갈. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-29",
    "title": "[BSOD] SHARED_RESOURCE_CONV_ERROR (0x0000001F)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SHARED_RESOURCE_CONV_ERROR (0x0000001F) - 공유 자원 전환 오류.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SHARED_RESOURCE_CONV_ERROR",
      "0x0000001F",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SHARED_RESOURCE_CONV_ERROR (0x0000001F).",
      "background": "[B] 공유 자원 전환 오류. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-30",
    "title": "[BSOD] KERNEL_APC_PENDING_DURING_EXIT (0x00000020)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: KERNEL_APC_PENDING_DURING_EXIT (0x00000020) - 스레드 종료 중 KERNEL APC 대기 상태 잔존.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "KERNEL_APC_PENDING_DURING_EXIT",
      "0x00000020",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code KERNEL_APC_PENDING_DURING_EXIT (0x00000020).",
      "background": "[B] 스레드 종료 중 KERNEL APC 대기 상태 잔존. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-31",
    "title": "[BSOD] QUOTA_UNDERFLOW (0x00000021)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: QUOTA_UNDERFLOW (0x00000021) - 커널 메모리 쿼터 언더플로우. 수거 쿼터 계산 오류.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "QUOTA_UNDERFLOW",
      "0x00000021",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code QUOTA_UNDERFLOW (0x00000021).",
      "background": "[B] 커널 메모리 쿼터 언더플로우. 수거 쿼터 계산 오류. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-32",
    "title": "[BSOD] FILE_SYSTEM (0x00000022)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: FILE_SYSTEM (0x00000022) - 파일 시스템 일반 커널 에러. NTFS/FAT 파일 체계 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "FILE_SYSTEM",
      "0x00000022",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code FILE_SYSTEM (0x00000022).",
      "background": "[B] 파일 시스템 일반 커널 에러. NTFS/FAT 파일 체계 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-33",
    "title": "[BSOD] FAT_FILE_SYSTEM (0x00000023)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: FAT_FILE_SYSTEM (0x00000023) - FAT/FAT32 드라이버 내부 처리 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "FAT_FILE_SYSTEM",
      "0x00000023",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code FAT_FILE_SYSTEM (0x00000023).",
      "background": "[B] FAT/FAT32 드라이버 내부 처리 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-34",
    "title": "[BSOD] NTFS_FILE_SYSTEM (0x00000024)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NTFS_FILE_SYSTEM (0x00000024) - NTFS 드라이버 커널 읽기/쓰기 실패. 디스크 배드섹터 유발.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NTFS_FILE_SYSTEM",
      "0x00000024",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NTFS_FILE_SYSTEM (0x00000024).",
      "background": "[B] NTFS 드라이버 커널 읽기/쓰기 실패. 디스크 배드섹터 유발. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-35",
    "title": "[BSOD] NPFS_FILE_SYSTEM (0x00000025)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NPFS_FILE_SYSTEM (0x00000025) - NPFS(Named Pipe File System) 입출력 커널 통신 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NPFS_FILE_SYSTEM",
      "0x00000025",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NPFS_FILE_SYSTEM (0x00000025).",
      "background": "[B] NPFS(Named Pipe File System) 입출력 커널 통신 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-36",
    "title": "[BSOD] CDFS_FILE_SYSTEM (0x00000026)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CDFS_FILE_SYSTEM (0x00000026) - CDFS(CD-ROM File System) 파일 렌더링 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CDFS_FILE_SYSTEM",
      "0x00000026",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CDFS_FILE_SYSTEM (0x00000026).",
      "background": "[B] CDFS(CD-ROM File System) 파일 렌더링 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-37",
    "title": "[BSOD] RDR_FILE_SYSTEM (0x00000027)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: RDR_FILE_SYSTEM (0x00000027) - 네트워크 리다이렉터(RDR) 파일 시스템 커널 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "RDR_FILE_SYSTEM",
      "0x00000027",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code RDR_FILE_SYSTEM (0x00000027).",
      "background": "[B] 네트워크 리다이렉터(RDR) 파일 시스템 커널 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-38",
    "title": "[BSOD] CORRUPT_WITH_AUTOCHK (0x00000028)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CORRUPT_WITH_AUTOCHK (0x00000028) - 부팅 autochk 실행 중 무결성 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CORRUPT_WITH_AUTOCHK",
      "0x00000028",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CORRUPT_WITH_AUTOCHK (0x00000028).",
      "background": "[B] 부팅 autochk 실행 중 무결성 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-39",
    "title": "[BSOD] KERNEL_AUTO_BOOST_INVALID_LOCK (0x00000029)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: KERNEL_AUTO_BOOST_INVALID_LOCK (0x00000029) - 커널 오토 부스트 잠금 무효. 락 오너십 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "KERNEL_AUTO_BOOST_INVALID_LOCK",
      "0x00000029",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code KERNEL_AUTO_BOOST_INVALID_LOCK (0x00000029).",
      "background": "[B] 커널 오토 부스트 잠금 무효. 락 오너십 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-40",
    "title": "[BSOD] KERNEL_AUTO_BOOST_LOCK_ACQUISITION_WITH_RAISED_IRQL (0x0000002A)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: KERNEL_AUTO_BOOST_LOCK_ACQUISITION_WITH_RAISED_IRQL (0x0000002A) - 상승된 IRQL에서 오토 부스트 락 취득 시도.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "KERNEL_AUTO_BOOST_LOCK_ACQUISITION_WITH_RAISED_IRQL",
      "0x0000002A",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code KERNEL_AUTO_BOOST_LOCK_ACQUISITION_WITH_RAISED_IRQL (0x0000002A).",
      "background": "[B] 상승된 IRQL에서 오토 부스트 락 취득 시도. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-41",
    "title": "[BSOD] PANIC_STACK_SWITCH (0x0000002B)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PANIC_STACK_SWITCH (0x0000002B) - 커널 스택 전환 실패 패닉.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PANIC_STACK_SWITCH",
      "0x0000002B",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PANIC_STACK_SWITCH (0x0000002B).",
      "background": "[B] 커널 스택 전환 실패 패닉. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-42",
    "title": "[BSOD] KMODE_EXCEPTION_NOT_HANDLED_M (0x0000002C)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: KMODE_EXCEPTION_NOT_HANDLED_M (0x0000002C) - 커널 모드 미처리 예외 (섀도 덤프).",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "KMODE_EXCEPTION_NOT_HANDLED_M",
      "0x0000002C",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code KMODE_EXCEPTION_NOT_HANDLED_M (0x0000002C).",
      "background": "[B] 커널 모드 미처리 예외 (섀도 덤프). (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-43",
    "title": "[BSOD] KERNEL_EXPANSION_STACK_OVERFLOW (0x0000002D)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: KERNEL_EXPANSION_STACK_OVERFLOW (0x0000002D) - 커널 확장 스택 오버플로우. 무한 재귀 함수 호출.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "KERNEL_EXPANSION_STACK_OVERFLOW",
      "0x0000002D",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code KERNEL_EXPANSION_STACK_OVERFLOW (0x0000002D).",
      "background": "[B] 커널 확장 스택 오버플로우. 무한 재귀 함수 호출. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-44",
    "title": "[BSOD] DATA_BUS_ERROR (0x0000002E)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "하드웨어",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DATA_BUS_ERROR (0x0000002E) - RAM/메인보드 데이터 버스 패리티 오류.",
    "actionTaken": "1. RAM/CPU 슬롯 청소 및 물리 수리 2. BIOS 설정 초기화 (Load Default) 3. 파워서플라이 및 하드웨어 점검/교체",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DATA_BUS_ERROR",
      "0x0000002E",
      "하드웨어",
      "하드웨어"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DATA_BUS_ERROR (0x0000002E).",
      "background": "[B] RAM/메인보드 데이터 버스 패리티 오류. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. RAM/CPU 슬롯 청소 및 물리 수리 2. BIOS 설정 초기화 (Load Default) 3. 파워서플라이 및 하드웨어 점검/교체 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]], [[BIOS 초기화]], [[RAM 세척]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구",
      "BIOS 초기화",
      "RAM 세척"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-45",
    "title": "[BSOD] INSTRUCTION_BUS_ERROR (0x0000002F)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INSTRUCTION_BUS_ERROR (0x0000002F) - CPU 명령어 버스 파수 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INSTRUCTION_BUS_ERROR",
      "0x0000002F",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INSTRUCTION_BUS_ERROR (0x0000002F).",
      "background": "[B] CPU 명령어 버스 파수 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-46",
    "title": "[BSOD] PHASE0_INITIALIZATION_FAILED (0x00000031)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PHASE0_INITIALIZATION_FAILED (0x00000031) - Windows 커널 Phase 0 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PHASE0_INITIALIZATION_FAILED",
      "0x00000031",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PHASE0_INITIALIZATION_FAILED (0x00000031).",
      "background": "[B] Windows 커널 Phase 0 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-47",
    "title": "[BSOD] PHASE1_INITIALIZATION_FAILED (0x00000032)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PHASE1_INITIALIZATION_FAILED (0x00000032) - Windows 커널 Phase 1 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PHASE1_INITIALIZATION_FAILED",
      "0x00000032",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PHASE1_INITIALIZATION_FAILED (0x00000032).",
      "background": "[B] Windows 커널 Phase 1 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-48",
    "title": "[BSOD] UNEXPECTED_INITIALIZATION_CALL (0x00000033)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: UNEXPECTED_INITIALIZATION_CALL (0x00000033) - 예기치 않은 초기화 호출.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "UNEXPECTED_INITIALIZATION_CALL",
      "0x00000033",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code UNEXPECTED_INITIALIZATION_CALL (0x00000033).",
      "background": "[B] 예기치 않은 초기화 호출. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-49",
    "title": "[BSOD] CACHE_MANAGER (0x00000034)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CACHE_MANAGER (0x00000034) - Windows 캐시 관리자 커널 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CACHE_MANAGER",
      "0x00000034",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CACHE_MANAGER (0x00000034).",
      "background": "[B] Windows 캐시 관리자 커널 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-50",
    "title": "[BSOD] NO_MORE_IRP_STACK_LOCATIONS (0x00000035)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NO_MORE_IRP_STACK_LOCATIONS (0x00000035) - IRP 드라이버 스택 위치 고갈.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NO_MORE_IRP_STACK_LOCATIONS",
      "0x00000035",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NO_MORE_IRP_STACK_LOCATIONS (0x00000035).",
      "background": "[B] IRP 드라이버 스택 위치 고갈. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-51",
    "title": "[BSOD] DEVICE_REFERENCE_COUNT_NOT_ZERO (0x00000036)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DEVICE_REFERENCE_COUNT_NOT_ZERO (0x00000036) - 디바이스 언로드 시 참조 카운트 0 아님.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DEVICE_REFERENCE_COUNT_NOT_ZERO",
      "0x00000036",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DEVICE_REFERENCE_COUNT_NOT_ZERO (0x00000036).",
      "background": "[B] 디바이스 언로드 시 참조 카운트 0 아님. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-52",
    "title": "[BSOD] FLOPPY_INTERNAL_ERROR (0x00000037)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: FLOPPY_INTERNAL_ERROR (0x00000037) - 플로피 디바이스 내부 커널 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "FLOPPY_INTERNAL_ERROR",
      "0x00000037",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code FLOPPY_INTERNAL_ERROR (0x00000037).",
      "background": "[B] 플로피 디바이스 내부 커널 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-53",
    "title": "[BSOD] SERIAL_DRIVER_INTERNAL (0x00000038)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SERIAL_DRIVER_INTERNAL (0x00000038) - 시리얼 포트 드라이버 내부 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SERIAL_DRIVER_INTERNAL",
      "0x00000038",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SERIAL_DRIVER_INTERNAL (0x00000038).",
      "background": "[B] 시리얼 포트 드라이버 내부 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-54",
    "title": "[BSOD] SYSTEM_EXIT_OWNED_MUTEX (0x00000039)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SYSTEM_EXIT_OWNED_MUTEX (0x00000039) - 시스템 스레드 종료 시 소유 뮤텍스 미해제.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SYSTEM_EXIT_OWNED_MUTEX",
      "0x00000039",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SYSTEM_EXIT_OWNED_MUTEX (0x00000039).",
      "background": "[B] 시스템 스레드 종료 시 소유 뮤텍스 미해제. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-55",
    "title": "[BSOD] SYSTEM_UNSCANED_FREE_POOL (0x0000003A)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SYSTEM_UNSCANED_FREE_POOL (0x0000003A) - 미검사 커널 프리 풀 해제 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SYSTEM_UNSCANED_FREE_POOL",
      "0x0000003A",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SYSTEM_UNSCANED_FREE_POOL (0x0000003A).",
      "background": "[B] 미검사 커널 프리 풀 해제 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-57",
    "title": "[BSOD] INTERRUPT_UNWIND_ATTEMPTED (0x0000003C)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INTERRUPT_UNWIND_ATTEMPTED (0x0000003C) - 인터럽트 언와인드 시도 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INTERRUPT_UNWIND_ATTEMPTED",
      "0x0000003C",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INTERRUPT_UNWIND_ATTEMPTED (0x0000003C).",
      "background": "[B] 인터럽트 언와인드 시도 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-58",
    "title": "[BSOD] INTERRUPT_EXCEPTION_NOT_HANDLED (0x0000003D)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INTERRUPT_EXCEPTION_NOT_HANDLED (0x0000003D) - 인터럽트 처리기 예외 미처리.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INTERRUPT_EXCEPTION_NOT_HANDLED",
      "0x0000003D",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INTERRUPT_EXCEPTION_NOT_HANDLED (0x0000003D).",
      "background": "[B] 인터럽트 처리기 예외 미처리. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-59",
    "title": "[BSOD] MULTIPROCESSOR_CONFIGURATION_NOT_SUPPORTED (0x0000003E)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MULTIPROCESSOR_CONFIGURATION_NOT_SUPPORTED (0x0000003E) - 지원되지 않는 다중 프로세서 코어 설정.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MULTIPROCESSOR_CONFIGURATION_NOT_SUPPORTED",
      "0x0000003E",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MULTIPROCESSOR_CONFIGURATION_NOT_SUPPORTED (0x0000003E).",
      "background": "[B] 지원되지 않는 다중 프로세서 코어 설정. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-60",
    "title": "[BSOD] NO_MORE_SYSTEM_PTES (0x0000003F)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NO_MORE_SYSTEM_PTES (0x0000003F) - 시스템 PTE(Page Table Entry) 고갈. 메모리 공간 부족.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NO_MORE_SYSTEM_PTES",
      "0x0000003F",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NO_MORE_SYSTEM_PTES (0x0000003F).",
      "background": "[B] 시스템 PTE(Page Table Entry) 고갈. 메모리 공간 부족. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-61",
    "title": "[BSOD] TARGET_MDL_TOO_SMALL (0x00000040)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: TARGET_MDL_TOO_SMALL (0x00000040) - 타겟 MDL 메모리 설명자 크기 부족.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "TARGET_MDL_TOO_SMALL",
      "0x00000040",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code TARGET_MDL_TOO_SMALL (0x00000040).",
      "background": "[B] 타겟 MDL 메모리 설명자 크기 부족. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-62",
    "title": "[BSOD] MUST_SUCCEED_POOL_EMPTY (0x00000041)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MUST_SUCCEED_POOL_EMPTY (0x00000041) - Must Succeed 커널 풀 고갈.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MUST_SUCCEED_POOL_EMPTY",
      "0x00000041",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MUST_SUCCEED_POOL_EMPTY (0x00000041).",
      "background": "[B] Must Succeed 커널 풀 고갈. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-63",
    "title": "[BSOD] ATDISK_DRIVER_INTERNAL (0x00000042)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: ATDISK_DRIVER_INTERNAL (0x00000042) - AT 디스크 드라이버 내부 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "ATDISK_DRIVER_INTERNAL",
      "0x00000042",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code ATDISK_DRIVER_INTERNAL (0x00000042).",
      "background": "[B] AT 디스크 드라이버 내부 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-64",
    "title": "[BSOD] NO_SUCH_PARTITION (0x00000043)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NO_SUCH_PARTITION (0x00000043) - 부팅 지정 파티션 찾을 수 없음.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NO_SUCH_PARTITION",
      "0x00000043",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NO_SUCH_PARTITION (0x00000043).",
      "background": "[B] 부팅 지정 파티션 찾을 수 없음. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-65",
    "title": "[BSOD] MULTIPLE_IRP_COMPLETE_REQUESTS (0x00000044)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MULTIPLE_IRP_COMPLETE_REQUESTS (0x00000044) - 드라이버가 동일 IRP 요청을 중복 완료 시도.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MULTIPLE_IRP_COMPLETE_REQUESTS",
      "0x00000044",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MULTIPLE_IRP_COMPLETE_REQUESTS (0x00000044).",
      "background": "[B] 드라이버가 동일 IRP 요청을 중복 완료 시도. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-66",
    "title": "[BSOD] INSUFFICIENT_SYSTEM_MAP_RESOURCES (0x00000045)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INSUFFICIENT_SYSTEM_MAP_RESOURCES (0x00000045) - 시스템 맵 리소스 부족.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INSUFFICIENT_SYSTEM_MAP_RESOURCES",
      "0x00000045",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INSUFFICIENT_SYSTEM_MAP_RESOURCES (0x00000045).",
      "background": "[B] 시스템 맵 리소스 부족. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-67",
    "title": "[BSOD] DEREFERENCE_BUS_INTERFACE (0x00000046)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DEREFERENCE_BUS_INTERFACE (0x00000046) - 버스 인터페이스 역참조 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DEREFERENCE_BUS_INTERFACE",
      "0x00000046",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DEREFERENCE_BUS_INTERFACE (0x00000046).",
      "background": "[B] 버스 인터페이스 역참조 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-68",
    "title": "[BSOD] DEREFERENCE_EXTENDED_PROFILE (0x00000047)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DEREFERENCE_EXTENDED_PROFILE (0x00000047) - 확장 프로필 역참조 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DEREFERENCE_EXTENDED_PROFILE",
      "0x00000047",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DEREFERENCE_EXTENDED_PROFILE (0x00000047).",
      "background": "[B] 확장 프로필 역참조 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-69",
    "title": "[BSOD] CANCEL_STATE_IN_COMPLETED_IRP (0x00000048)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CANCEL_STATE_IN_COMPLETED_IRP (0x00000048) - 완료된 IRP 취소 상태 오류.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CANCEL_STATE_IN_COMPLETED_IRP",
      "0x00000048",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CANCEL_STATE_IN_COMPLETED_IRP (0x00000048).",
      "background": "[B] 완료된 IRP 취소 상태 오류. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-70",
    "title": "[BSOD] PAGE_FAULT_WITH_INTERRUPTS_OFF (0x00000049)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PAGE_FAULT_WITH_INTERRUPTS_OFF (0x00000049) - 인터럽트 차단 상태에서 페이징 파실 발생.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PAGE_FAULT_WITH_INTERRUPTS_OFF",
      "0x00000049",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PAGE_FAULT_WITH_INTERRUPTS_OFF (0x00000049).",
      "background": "[B] 인터럽트 차단 상태에서 페이징 파실 발생. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-71",
    "title": "[BSOD] IRQL_GT_ZERO_AT_SYSTEM_SERVICE (0x0000004A)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: IRQL_GT_ZERO_AT_SYSTEM_SERVICE (0x0000004A) - 시스템 서비스 완료 시 IRQL 0 초과 상태.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "IRQL_GT_ZERO_AT_SYSTEM_SERVICE",
      "0x0000004A",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code IRQL_GT_ZERO_AT_SYSTEM_SERVICE (0x0000004A).",
      "background": "[B] 시스템 서비스 완료 시 IRQL 0 초과 상태. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-72",
    "title": "[BSOD] STREAMS_INTERNAL_ERROR (0x0000004B)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: STREAMS_INTERNAL_ERROR (0x0000004B) - 스트림 내부 커널 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "STREAMS_INTERNAL_ERROR",
      "0x0000004B",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code STREAMS_INTERNAL_ERROR (0x0000004B).",
      "background": "[B] 스트림 내부 커널 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-73",
    "title": "[BSOD] FATAL_UNHANDLED_HARD_ERROR (0x0000004C)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: FATAL_UNHANDLED_HARD_ERROR (0x0000004C) - 치명적인 미처리 하드웨어 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "FATAL_UNHANDLED_HARD_ERROR",
      "0x0000004C",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code FATAL_UNHANDLED_HARD_ERROR (0x0000004C).",
      "background": "[B] 치명적인 미처리 하드웨어 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-74",
    "title": "[BSOD] NO_PAGES_AVAILABLE (0x0000004D)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NO_PAGES_AVAILABLE (0x0000004D) - 사용 가능 물리 메모리 페이지 고갈.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NO_PAGES_AVAILABLE",
      "0x0000004D",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NO_PAGES_AVAILABLE (0x0000004D).",
      "background": "[B] 사용 가능 물리 메모리 페이지 고갈. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-75",
    "title": "[BSOD] PFN_LIST_CORRUPT (0x0000004E)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PFN_LIST_CORRUPT (0x0000004E) - Page Frame Number 메모리 리스트 구조체 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PFN_LIST_CORRUPT",
      "0x0000004E",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PFN_LIST_CORRUPT (0x0000004E).",
      "background": "[B] Page Frame Number 메모리 리스트 구조체 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-76",
    "title": "[BSOD] NDIS_INTERNAL_ERROR (0x0000004F)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NDIS_INTERNAL_ERROR (0x0000004F) - NDIS 네트워크 드라이버 인터페이스 내부 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NDIS_INTERNAL_ERROR",
      "0x0000004F",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NDIS_INTERNAL_ERROR (0x0000004F).",
      "background": "[B] NDIS 네트워크 드라이버 인터페이스 내부 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-78",
    "title": "[BSOD] REGISTRY_ERROR (0x00000051)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: REGISTRY_ERROR (0x00000051) - Windows 레지스트리 Hive 파일 시스템 커널 읽기/쓰기 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "REGISTRY_ERROR",
      "0x00000051",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code REGISTRY_ERROR (0x00000051).",
      "background": "[B] Windows 레지스트리 Hive 파일 시스템 커널 읽기/쓰기 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-79",
    "title": "[BSOD] MAILSLOT_TECHNICAL_ERROR (0x00000052)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MAILSLOT_TECHNICAL_ERROR (0x00000052) - 메일슬롯 파일 시스템 커널 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MAILSLOT_TECHNICAL_ERROR",
      "0x00000052",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MAILSLOT_TECHNICAL_ERROR (0x00000052).",
      "background": "[B] 메일슬롯 파일 시스템 커널 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-80",
    "title": "[BSOD] FTDISK_INTERNAL_ERROR (0x00000058)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: FTDISK_INTERNAL_ERROR (0x00000058) - FTDisk 볼륨 드라이버 커널 결함.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "FTDISK_INTERNAL_ERROR",
      "0x00000058",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code FTDISK_INTERNAL_ERROR (0x00000058).",
      "background": "[B] FTDisk 볼륨 드라이버 커널 결함. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-81",
    "title": "[BSOD] HAL_INITIALIZATION_FAILED (0x0000005C)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: HAL_INITIALIZATION_FAILED (0x0000005C) - HAL(Hardware Abstraction Layer) 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "HAL_INITIALIZATION_FAILED",
      "0x0000005C",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code HAL_INITIALIZATION_FAILED (0x0000005C).",
      "background": "[B] HAL(Hardware Abstraction Layer) 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-82",
    "title": "[BSOD] UNSUPPORTED_PROCESSOR (0x0000005D)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: UNSUPPORTED_PROCESSOR (0x0000005D) - Windows 11 미지원 명령 집합 프로세서.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "UNSUPPORTED_PROCESSOR",
      "0x0000005D",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code UNSUPPORTED_PROCESSOR (0x0000005D).",
      "background": "[B] Windows 11 미지원 명령 집합 프로세서. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-83",
    "title": "[BSOD] OBJECT_INITIALIZATION_FAILED (0x0000005E)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: OBJECT_INITIALIZATION_FAILED (0x0000005E) - 커널 개체 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "OBJECT_INITIALIZATION_FAILED",
      "0x0000005E",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code OBJECT_INITIALIZATION_FAILED (0x0000005E).",
      "background": "[B] 커널 개체 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-84",
    "title": "[BSOD] SECURITY_INITIALIZATION_FAILED (0x0000005F)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SECURITY_INITIALIZATION_FAILED (0x0000005F) - 커널 보안 시스템 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SECURITY_INITIALIZATION_FAILED",
      "0x0000005F",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SECURITY_INITIALIZATION_FAILED (0x0000005F).",
      "background": "[B] 커널 보안 시스템 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-85",
    "title": "[BSOD] PROCESS_INITIALIZATION_FAILED (0x00000060)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PROCESS_INITIALIZATION_FAILED (0x00000060) - 시스템 프로세스 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PROCESS_INITIALIZATION_FAILED",
      "0x00000060",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PROCESS_INITIALIZATION_FAILED (0x00000060).",
      "background": "[B] 시스템 프로세스 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-86",
    "title": "[BSOD] HAL1_INITIALIZATION_FAILED (0x00000061)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: HAL1_INITIALIZATION_FAILED (0x00000061) - HAL Phase 1 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "HAL1_INITIALIZATION_FAILED",
      "0x00000061",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code HAL1_INITIALIZATION_FAILED (0x00000061).",
      "background": "[B] HAL Phase 1 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-87",
    "title": "[BSOD] OBJECT1_INITIALIZATION_FAILED (0x00000062)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: OBJECT1_INITIALIZATION_FAILED (0x00000062) - 커널 개체 Phase 1 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "OBJECT1_INITIALIZATION_FAILED",
      "0x00000062",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code OBJECT1_INITIALIZATION_FAILED (0x00000062).",
      "background": "[B] 커널 개체 Phase 1 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-88",
    "title": "[BSOD] SECURITY1_INITIALIZATION_FAILED (0x00000063)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SECURITY1_INITIALIZATION_FAILED (0x00000063) - 보안 서브시스템 Phase 1 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SECURITY1_INITIALIZATION_FAILED",
      "0x00000063",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SECURITY1_INITIALIZATION_FAILED (0x00000063).",
      "background": "[B] 보안 서브시스템 Phase 1 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-89",
    "title": "[BSOD] SYMBOLIC_INITIALIZATION_FAILED (0x00000064)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SYMBOLIC_INITIALIZATION_FAILED (0x00000064) - 심볼릭 링크 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SYMBOLIC_INITIALIZATION_FAILED",
      "0x00000064",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SYMBOLIC_INITIALIZATION_FAILED (0x00000064).",
      "background": "[B] 심볼릭 링크 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-90",
    "title": "[BSOD] MEMORY1_INITIALIZATION_FAILED (0x00000065)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MEMORY1_INITIALIZATION_FAILED (0x00000065) - 메모리 관리자 Phase 1 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MEMORY1_INITIALIZATION_FAILED",
      "0x00000065",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MEMORY1_INITIALIZATION_FAILED (0x00000065).",
      "background": "[B] 메모리 관리자 Phase 1 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-91",
    "title": "[BSOD] CONFIG_INITIALIZATION_FAILED (0x00000066)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CONFIG_INITIALIZATION_FAILED (0x00000066) - 시스템 레지스트리 구성 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CONFIG_INITIALIZATION_FAILED",
      "0x00000066",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CONFIG_INITIALIZATION_FAILED (0x00000066).",
      "background": "[B] 시스템 레지스트리 구성 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-92",
    "title": "[BSOD] FILE1_INITIALIZATION_FAILED (0x00000067)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: FILE1_INITIALIZATION_FAILED (0x00000067) - 파일 시스템 Phase 1 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "FILE1_INITIALIZATION_FAILED",
      "0x00000067",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code FILE1_INITIALIZATION_FAILED (0x00000067).",
      "background": "[B] 파일 시스템 Phase 1 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-93",
    "title": "[BSOD] IO1_INITIALIZATION_FAILED (0x00000068)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: IO1_INITIALIZATION_FAILED (0x00000068) - I/O 관리자 Phase 1 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "IO1_INITIALIZATION_FAILED",
      "0x00000068",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code IO1_INITIALIZATION_FAILED (0x00000068).",
      "background": "[B] I/O 관리자 Phase 1 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-94",
    "title": "[BSOD] PROCESS1_INITIALIZATION_FAILED (0x00000069)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PROCESS1_INITIALIZATION_FAILED (0x00000069) - 프로세스 관리자 Phase 1 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PROCESS1_INITIALIZATION_FAILED",
      "0x00000069",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PROCESS1_INITIALIZATION_FAILED (0x00000069).",
      "background": "[B] 프로세스 관리자 Phase 1 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-95",
    "title": "[BSOD] PROCESSOR_START_FAILED (0x0000006B)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PROCESSOR_START_FAILED (0x0000006B) - 다중 코어 멀티프로세서 시작 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PROCESSOR_START_FAILED",
      "0x0000006B",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PROCESSOR_START_FAILED (0x0000006B).",
      "background": "[B] 다중 코어 멀티프로세서 시작 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-96",
    "title": "[BSOD] REFMON_INITIALIZATION_FAILED (0x0000006C)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: REFMON_INITIALIZATION_FAILED (0x0000006C) - 참조 모니터 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "REFMON_INITIALIZATION_FAILED",
      "0x0000006C",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code REFMON_INITIALIZATION_FAILED (0x0000006C).",
      "background": "[B] 참조 모니터 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-97",
    "title": "[BSOD] SESSION1_INITIALIZATION_FAILED (0x0000006D)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SESSION1_INITIALIZATION_FAILED (0x0000006D) - 세션 1 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SESSION1_INITIALIZATION_FAILED",
      "0x0000006D",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SESSION1_INITIALIZATION_FAILED (0x0000006D).",
      "background": "[B] 세션 1 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-98",
    "title": "[BSOD] SESSION2_INITIALIZATION_FAILED (0x0000006E)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SESSION2_INITIALIZATION_FAILED (0x0000006E) - 세션 2 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SESSION2_INITIALIZATION_FAILED",
      "0x0000006E",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SESSION2_INITIALIZATION_FAILED (0x0000006E).",
      "background": "[B] 세션 2 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-99",
    "title": "[BSOD] CONFIG_LIST_FAILED (0x00000073)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CONFIG_LIST_FAILED (0x00000073) - 핵심 레지스트리 Hive 로드 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CONFIG_LIST_FAILED",
      "0x00000073",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CONFIG_LIST_FAILED (0x00000073).",
      "background": "[B] 핵심 레지스트리 Hive 로드 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-101",
    "title": "[BSOD] CANNOT_WRITE_CONFIGURATION (0x00000075)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CANNOT_WRITE_CONFIGURATION (0x00000075) - SYSTEM 레지스트리 Hive 파일 쓰기 공간 부족.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CANNOT_WRITE_CONFIGURATION",
      "0x00000075",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CANNOT_WRITE_CONFIGURATION (0x00000075).",
      "background": "[B] SYSTEM 레지스트리 Hive 파일 쓰기 공간 부족. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-102",
    "title": "[BSOD] PROCESS_HAS_LOCKED_PAGES (0x00000076)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PROCESS_HAS_LOCKED_PAGES (0x00000076) - 프로세스가 잠긴 메모리 페이지를 해제하지 않고 종료.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PROCESS_HAS_LOCKED_PAGES",
      "0x00000076",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PROCESS_HAS_LOCKED_PAGES (0x00000076).",
      "background": "[B] 프로세스가 잠긴 메모리 페이지를 해제하지 않고 종료. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-103",
    "title": "[BSOD] KERNEL_STACK_INPAGE_ERROR (0x00000077)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: KERNEL_STACK_INPAGE_ERROR (0x00000077) - 커널 메모리 스택 엑세스 실패. SSD/HDD 디스크 배드섹터 원인.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "KERNEL_STACK_INPAGE_ERROR",
      "0x00000077",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code KERNEL_STACK_INPAGE_ERROR (0x00000077).",
      "background": "[B] 커널 메모리 스택 엑세스 실패. SSD/HDD 디스크 배드섹터 원인. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-104",
    "title": "[BSOD] PHASE0_EXCEPTION (0x00000078)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PHASE0_EXCEPTION (0x00000078) - Phase 0 커널 초기화 예외.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PHASE0_EXCEPTION",
      "0x00000078",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PHASE0_EXCEPTION (0x00000078).",
      "background": "[B] Phase 0 커널 초기화 예외. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-105",
    "title": "[BSOD] MISMATCHED_HAL (0x00000079)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MISMATCHED_HAL (0x00000079) - HAL 레벨과 커널 릴리즈 파일 불일치.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MISMATCHED_HAL",
      "0x00000079",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MISMATCHED_HAL (0x00000079).",
      "background": "[B] HAL 레벨과 커널 릴리즈 파일 불일치. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-106",
    "title": "[BSOD] KERNEL_DATA_INPAGE_ERROR (0x0000007A)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: KERNEL_DATA_INPAGE_ERROR (0x0000007A) - 커널 데이터를 메모리로 페이징 중 I/O 읽기 에러 발생.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "KERNEL_DATA_INPAGE_ERROR",
      "0x0000007A",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code KERNEL_DATA_INPAGE_ERROR (0x0000007A).",
      "background": "[B] 커널 데이터를 메모리로 페이징 중 I/O 읽기 에러 발생. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-108",
    "title": "[BSOD] BUGCODE_NDIS_DRIVER (0x0000007C)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: BUGCODE_NDIS_DRIVER (0x0000007C) - NDIS 네트워크 드라이버 버그 코드 발생.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "BUGCODE_NDIS_DRIVER",
      "0x0000007C",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code BUGCODE_NDIS_DRIVER (0x0000007C).",
      "background": "[B] NDIS 네트워크 드라이버 버그 코드 발생. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-109",
    "title": "[BSOD] INSTALL_MORE_MEMORY (0x0000007D)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INSTALL_MORE_MEMORY (0x0000007D) - Windows 11 실행 최소 용량 메모리 부족.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INSTALL_MORE_MEMORY",
      "0x0000007D",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INSTALL_MORE_MEMORY (0x0000007D).",
      "background": "[B] Windows 11 실행 최소 용량 메모리 부족. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-111",
    "title": "[BSOD] UNEXPECTED_KERNEL_MODE_TRAP (0x0000007F)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: UNEXPECTED_KERNEL_MODE_TRAP (0x0000007F) - CPU 트랩 예외 발생. 오버클럭, RAM 불량, 하드웨어 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "UNEXPECTED_KERNEL_MODE_TRAP",
      "0x0000007F",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code UNEXPECTED_KERNEL_MODE_TRAP (0x0000007F).",
      "background": "[B] CPU 트랩 예외 발생. 오버클럭, RAM 불량, 하드웨어 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-112",
    "title": "[BSOD] NMI_HARDWARE_FAILURE (0x00000080)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "하드웨어",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NMI_HARDWARE_FAILURE (0x00000080) - NMI(Non-Maskable Interrupt) 하드웨어 치명적 결함.",
    "actionTaken": "1. RAM/CPU 슬롯 청소 및 물리 수리 2. BIOS 설정 초기화 (Load Default) 3. 파워서플라이 및 하드웨어 점검/교체",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NMI_HARDWARE_FAILURE",
      "0x00000080",
      "하드웨어",
      "하드웨어"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NMI_HARDWARE_FAILURE (0x00000080).",
      "background": "[B] NMI(Non-Maskable Interrupt) 하드웨어 치명적 결함. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. RAM/CPU 슬롯 청소 및 물리 수리 2. BIOS 설정 초기화 (Load Default) 3. 파워서플라이 및 하드웨어 점검/교체 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]], [[BIOS 초기화]], [[RAM 세척]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구",
      "BIOS 초기화",
      "RAM 세척"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-113",
    "title": "[BSOD] SPIN_LOCK_INIT_FAILURE (0x00000081)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SPIN_LOCK_INIT_FAILURE (0x00000081) - 스핀락 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SPIN_LOCK_INIT_FAILURE",
      "0x00000081",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SPIN_LOCK_INIT_FAILURE (0x00000081).",
      "background": "[B] 스핀락 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-114",
    "title": "[BSOD] DFS_FILE_SYSTEM (0x00000082)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DFS_FILE_SYSTEM (0x00000082) - DFS(Distributed File System) 파일 시스템 커널 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DFS_FILE_SYSTEM",
      "0x00000082",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DFS_FILE_SYSTEM (0x00000082).",
      "background": "[B] DFS(Distributed File System) 파일 시스템 커널 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-115",
    "title": "[BSOD] OFS_FILE_SYSTEM (0x00000084)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: OFS_FILE_SYSTEM (0x00000084) - OFS 파일 시스템 커널 결함.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "OFS_FILE_SYSTEM",
      "0x00000084",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code OFS_FILE_SYSTEM (0x00000084).",
      "background": "[B] OFS 파일 시스템 커널 결함. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-116",
    "title": "[BSOD] SETUP_FAILURE (0x00000085)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SETUP_FAILURE (0x00000085) - Windows 11 셋업 커널 진입 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SETUP_FAILURE",
      "0x00000085",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SETUP_FAILURE (0x00000085).",
      "background": "[B] Windows 11 셋업 커널 진입 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-117",
    "title": "[BSOD] KERNEL_MODE_EXCEPTION_NOT_HANDLED (0x0000008E)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: KERNEL_MODE_EXCEPTION_NOT_HANDLED (0x0000008E) - 커널 모드 프로그램 미처리 예외 발생.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "KERNEL_MODE_EXCEPTION_NOT_HANDLED",
      "0x0000008E",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code KERNEL_MODE_EXCEPTION_NOT_HANDLED (0x0000008E).",
      "background": "[B] 커널 모드 프로그램 미처리 예외 발생. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-118",
    "title": "[BSOD] PP0_INITIALIZATION_FAILED (0x0000008F)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PP0_INITIALIZATION_FAILED (0x0000008F) - 플러그 앤 플레이(PnP) Phase 0 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PP0_INITIALIZATION_FAILED",
      "0x0000008F",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PP0_INITIALIZATION_FAILED (0x0000008F).",
      "background": "[B] 플러그 앤 플레이(PnP) Phase 0 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-119",
    "title": "[BSOD] PP1_INITIALIZATION_FAILED (0x00000090)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PP1_INITIALIZATION_FAILED (0x00000090) - 플러그 앤 플레이(PnP) Phase 1 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PP1_INITIALIZATION_FAILED",
      "0x00000090",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PP1_INITIALIZATION_FAILED (0x00000090).",
      "background": "[B] 플러그 앤 플레이(PnP) Phase 1 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-120",
    "title": "[BSOD] UP_DRIVER_ON_MP_SYSTEM (0x00000092)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: UP_DRIVER_ON_MP_SYSTEM (0x00000092) - 단일 코어 전용 드라이버가 멀티코어 커널에서 실행됨.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "UP_DRIVER_ON_MP_SYSTEM",
      "0x00000092",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code UP_DRIVER_ON_MP_SYSTEM (0x00000092).",
      "background": "[B] 단일 코어 전용 드라이버가 멀티코어 커널에서 실행됨. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-121",
    "title": "[BSOD] INVALID_KERNEL_HANDLE (0x00000093)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INVALID_KERNEL_HANDLE (0x00000093) - 유효하지 않은 커널 핸들 사용 시도.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INVALID_KERNEL_HANDLE",
      "0x00000093",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INVALID_KERNEL_HANDLE (0x00000093).",
      "background": "[B] 유효하지 않은 커널 핸들 사용 시도. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-122",
    "title": "[BSOD] KERNEL_STACK_LOCKED_AT_EXIT (0x00000094)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: KERNEL_STACK_LOCKED_AT_EXIT (0x00000094) - 스레드 종료 시 커널 스택 잠김 잔존.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "KERNEL_STACK_LOCKED_AT_EXIT",
      "0x00000094",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code KERNEL_STACK_LOCKED_AT_EXIT (0x00000094).",
      "background": "[B] 스레드 종료 시 커널 스택 잠김 잔존. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-123",
    "title": "[BSOD] INVALID_WORK_QUEUE_ITEM (0x00000096)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INVALID_WORK_QUEUE_ITEM (0x00000096) - 유효하지 않은 워크 큐 아이템 처리 시도.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INVALID_WORK_QUEUE_ITEM",
      "0x00000096",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INVALID_WORK_QUEUE_ITEM (0x00000096).",
      "background": "[B] 유효하지 않은 워크 큐 아이템 처리 시도. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-124",
    "title": "[BSOD] BOUND_IMAGE_UNSUPPORTED (0x00000097)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: BOUND_IMAGE_UNSUPPORTED (0x00000097) - 지원되지 않는 바운드 이미지 로드 시도.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "BOUND_IMAGE_UNSUPPORTED",
      "0x00000097",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code BOUND_IMAGE_UNSUPPORTED (0x00000097).",
      "background": "[B] 지원되지 않는 바운드 이미지 로드 시도. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-125",
    "title": "[BSOD] END_OF_NT_EVALUATION_PERIOD (0x00000098)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: END_OF_NT_EVALUATION_PERIOD (0x00000098) - Windows 11 평가판 사용 기간 만료.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "END_OF_NT_EVALUATION_PERIOD",
      "0x00000098",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code END_OF_NT_EVALUATION_PERIOD (0x00000098).",
      "background": "[B] Windows 11 평가판 사용 기간 만료. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-126",
    "title": "[BSOD] INVALID_REGION_OR_SEGMENT (0x00000099)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INVALID_REGION_OR_SEGMENT (0x00000099) - 유효하지 않은 메모리 영역 또는 세그먼트 매핑.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INVALID_REGION_OR_SEGMENT",
      "0x00000099",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INVALID_REGION_OR_SEGMENT (0x00000099).",
      "background": "[B] 유효하지 않은 메모리 영역 또는 세그먼트 매핑. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-127",
    "title": "[BSOD] SYSTEM_LICENSE_VIOLATION (0x0000009A)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SYSTEM_LICENSE_VIOLATION (0x0000009A) - Windows 시스템 정품 인증 라이선스 위반 탐지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SYSTEM_LICENSE_VIOLATION",
      "0x0000009A",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SYSTEM_LICENSE_VIOLATION (0x0000009A).",
      "background": "[B] Windows 시스템 정품 인증 라이선스 위반 탐지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-128",
    "title": "[BSOD] UDFS_FILE_SYSTEM (0x0000009B)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: UDFS_FILE_SYSTEM (0x0000009B) - UDFS(DVD/ISO File System) 커널 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "UDFS_FILE_SYSTEM",
      "0x0000009B",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code UDFS_FILE_SYSTEM (0x0000009B).",
      "background": "[B] UDFS(DVD/ISO File System) 커널 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-129",
    "title": "[BSOD] MACHINE_CHECK_EXCEPTION (0x0000009C)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "하드웨어",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MACHINE_CHECK_EXCEPTION (0x0000009C) - CPU 칩셋 내부 하드웨어 오류 감지 (Machine Check).",
    "actionTaken": "1. RAM/CPU 슬롯 청소 및 물리 수리 2. BIOS 설정 초기화 (Load Default) 3. 파워서플라이 및 하드웨어 점검/교체",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MACHINE_CHECK_EXCEPTION",
      "0x0000009C",
      "하드웨어",
      "하드웨어"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MACHINE_CHECK_EXCEPTION (0x0000009C).",
      "background": "[B] CPU 칩셋 내부 하드웨어 오류 감지 (Machine Check). (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. RAM/CPU 슬롯 청소 및 물리 수리 2. BIOS 설정 초기화 (Load Default) 3. 파워서플라이 및 하드웨어 점검/교체 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]], [[BIOS 초기화]], [[RAM 세척]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구",
      "BIOS 초기화",
      "RAM 세척"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-130",
    "title": "[BSOD] USER_MODE_HEALTH_MONITOR (0x0000009E)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: USER_MODE_HEALTH_MONITOR (0x0000009E) - 유저 모드 프로세스 헬스 모니터링 타임아웃 종료.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "USER_MODE_HEALTH_MONITOR",
      "0x0000009E",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code USER_MODE_HEALTH_MONITOR (0x0000009E).",
      "background": "[B] 유저 모드 프로세스 헬스 모니터링 타임아웃 종료. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-131",
    "title": "[BSOD] DRIVER_POWER_STATE_FAILURE (0x0000009F)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_POWER_STATE_FAILURE (0x0000009F) - 드라이버 전원 관리 상태 절전/복구 전환 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_POWER_STATE_FAILURE",
      "0x0000009F",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_POWER_STATE_FAILURE (0x0000009F).",
      "background": "[B] 드라이버 전원 관리 상태 절전/복구 전환 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-132",
    "title": "[BSOD] INTERNAL_POWER_ERROR (0x000000A0)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INTERNAL_POWER_ERROR (0x000000A0) - 전원 관리 서브시스템 내부 커널 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INTERNAL_POWER_ERROR",
      "0x000000A0",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INTERNAL_POWER_ERROR (0x000000A0).",
      "background": "[B] 전원 관리 서브시스템 내부 커널 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-133",
    "title": "[BSOD] PCI_BUS_DRIVER_INTERNAL (0x000000A1)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PCI_BUS_DRIVER_INTERNAL (0x000000A1) - PCI 버스 드라이버 내부 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PCI_BUS_DRIVER_INTERNAL",
      "0x000000A1",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PCI_BUS_DRIVER_INTERNAL (0x000000A1).",
      "background": "[B] PCI 버스 드라이버 내부 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-134",
    "title": "[BSOD] MEMORY_IMAGE_CORRUPT (0x000000A2)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MEMORY_IMAGE_CORRUPT (0x000000A2) - 메모리 덤프 이미지 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MEMORY_IMAGE_CORRUPT",
      "0x000000A2",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MEMORY_IMAGE_CORRUPT (0x000000A2).",
      "background": "[B] 메모리 덤프 이미지 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-135",
    "title": "[BSOD] ACPI_DRIVER_INTERNAL (0x000000A3)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: ACPI_DRIVER_INTERNAL (0x000000A3) - ACPI 전원 관리 드라이버 내부 오류.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "ACPI_DRIVER_INTERNAL",
      "0x000000A3",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code ACPI_DRIVER_INTERNAL (0x000000A3).",
      "background": "[B] ACPI 전원 관리 드라이버 내부 오류. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-136",
    "title": "[BSOD] CNSS_FILE_SYSTEM_FILTER (0x000000A4)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CNSS_FILE_SYSTEM_FILTER (0x000000A4) - CNSS 파일 시스템 필터 드라이버 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CNSS_FILE_SYSTEM_FILTER",
      "0x000000A4",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CNSS_FILE_SYSTEM_FILTER (0x000000A4).",
      "background": "[B] CNSS 파일 시스템 필터 드라이버 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-137",
    "title": "[BSOD] ACPI_BIOS_ERROR (0x000000A5)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: ACPI_BIOS_ERROR (0x000000A5) - 메인보드 ACPI BIOS 전원 관리 규격 불일치.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "ACPI_BIOS_ERROR",
      "0x000000A5",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code ACPI_BIOS_ERROR (0x000000A5).",
      "background": "[B] 메인보드 ACPI BIOS 전원 관리 규격 불일치. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-138",
    "title": "[BSOD] BAD_EXSYSTEM_PARTITION (0x000000A7)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: BAD_EXSYSTEM_PARTITION (0x000000A7) - 손상된 시스템 파티션 레코드.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "BAD_EXSYSTEM_PARTITION",
      "0x000000A7",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code BAD_EXSYSTEM_PARTITION (0x000000A7).",
      "background": "[B] 손상된 시스템 파티션 레코드. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-139",
    "title": "[BSOD] SESSION_HAS_VALID_VIEWS_ON_EXIT (0x000000AB)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SESSION_HAS_VALID_VIEWS_ON_EXIT (0x000000AB) - 세션 종료 시 뷰 미해제 잔존.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SESSION_HAS_VALID_VIEWS_ON_EXIT",
      "0x000000AB",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SESSION_HAS_VALID_VIEWS_ON_EXIT (0x000000AB).",
      "background": "[B] 세션 종료 시 뷰 미해제 잔존. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-140",
    "title": "[BSOD] AUTO_BOOST_LOCK_ACQUISITION_FAILURE (0x000000AC)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: AUTO_BOOST_LOCK_ACQUISITION_FAILURE (0x000000AC) - 오토 부스트 락 취득 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "AUTO_BOOST_LOCK_ACQUISITION_FAILURE",
      "0x000000AC",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code AUTO_BOOST_LOCK_ACQUISITION_FAILURE (0x000000AC).",
      "background": "[B] 오토 부스트 락 취득 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-141",
    "title": "[BSOD] VIDEO_DRIVER_INIT_FAILURE (0x000000B4)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: VIDEO_DRIVER_INIT_FAILURE (0x000000B4) - 디스플레이 그래픽 드라이버 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "VIDEO_DRIVER_INIT_FAILURE",
      "0x000000B4",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code VIDEO_DRIVER_INIT_FAILURE (0x000000B4).",
      "background": "[B] 디스플레이 그래픽 드라이버 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-142",
    "title": "[BSOD] ATTEMPTED_SWITCH_FROM_DPC (0x000000B8)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: ATTEMPTED_SWITCH_FROM_DPC (0x000000B8) - DPC 루틴 내에서 불법 스레드 스위치 시도.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "ATTEMPTED_SWITCH_FROM_DPC",
      "0x000000B8",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code ATTEMPTED_SWITCH_FROM_DPC (0x000000B8).",
      "background": "[B] DPC 루틴 내에서 불법 스레드 스위치 시도. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-143",
    "title": "[BSOD] CHIPSET_DETECTED_ERROR (0x000000B9)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CHIPSET_DETECTED_ERROR (0x000000B9) - 메인보드 칩셋 하드웨어 오류 감지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CHIPSET_DETECTED_ERROR",
      "0x000000B9",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CHIPSET_DETECTED_ERROR (0x000000B9).",
      "background": "[B] 메인보드 칩셋 하드웨어 오류 감지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-144",
    "title": "[BSOD] SESSION_HAS_VALID_PROCESSES_ON_EXIT (0x000000BA)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SESSION_HAS_VALID_PROCESSES_ON_EXIT (0x000000BA) - 세션 종료 시 활성 프로세스 잔존.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SESSION_HAS_VALID_PROCESSES_ON_EXIT",
      "0x000000BA",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SESSION_HAS_VALID_PROCESSES_ON_EXIT (0x000000BA).",
      "background": "[B] 세션 종료 시 활성 프로세스 잔존. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-145",
    "title": "[BSOD] NETWORK_BOOT_INITIALIZATION_FAILED (0x000000BB)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NETWORK_BOOT_INITIALIZATION_FAILED (0x000000BB) - PXE 네트워크 부팅 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NETWORK_BOOT_INITIALIZATION_FAILED",
      "0x000000BB",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NETWORK_BOOT_INITIALIZATION_FAILED (0x000000BB).",
      "background": "[B] PXE 네트워크 부팅 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-146",
    "title": "[BSOD] NETWORK_BOOT_DUPLICATE_ADDRESS (0x000000BC)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: NETWORK_BOOT_DUPLICATE_ADDRESS (0x000000BC) - 네트워크 부팅 IP 주소 중복 탐지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "NETWORK_BOOT_DUPLICATE_ADDRESS",
      "0x000000BC",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code NETWORK_BOOT_DUPLICATE_ADDRESS (0x000000BC).",
      "background": "[B] 네트워크 부팅 IP 주소 중복 탐지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-147",
    "title": "[BSOD] INVALID_HIBERNATED_STATE (0x000000BD)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INVALID_HIBERNATED_STATE (0x000000BD) - 유효하지 않은 최대절전모드 파일 상태.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INVALID_HIBERNATED_STATE",
      "0x000000BD",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INVALID_HIBERNATED_STATE (0x000000BD).",
      "background": "[B] 유효하지 않은 최대절전모드 파일 상태. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-148",
    "title": "[BSOD] ATTEMPTED_WRITE_TO_READONLY_MEMORY (0x000000BE)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: ATTEMPTED_WRITE_TO_READONLY_MEMORY (0x000000BE) - 읽기 전용 커널 메모리 영역에 무단 쓰기 시도.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "ATTEMPTED_WRITE_TO_READONLY_MEMORY",
      "0x000000BE",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code ATTEMPTED_WRITE_TO_READONLY_MEMORY (0x000000BE).",
      "background": "[B] 읽기 전용 커널 메모리 영역에 무단 쓰기 시도. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-149",
    "title": "[BSOD] MUTEX_ALREADY_OWNED (0x000000BF)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MUTEX_ALREADY_OWNED (0x000000BF) - 뮤텍스 중복 소유 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MUTEX_ALREADY_OWNED",
      "0x000000BF",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MUTEX_ALREADY_OWNED (0x000000BF).",
      "background": "[B] 뮤텍스 중복 소유 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-150",
    "title": "[BSOD] SPECIAL_POOL_DETECTED_MEMORY_CORRUPTION (0x000000C1)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SPECIAL_POOL_DETECTED_MEMORY_CORRUPTION (0x000000C1) - 스페셜 메모리 풀에서 커널 덮어쓰기 파손 탐지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SPECIAL_POOL_DETECTED_MEMORY_CORRUPTION",
      "0x000000C1",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SPECIAL_POOL_DETECTED_MEMORY_CORRUPTION (0x000000C1).",
      "background": "[B] 스페셜 메모리 풀에서 커널 덮어쓰기 파손 탐지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-151",
    "title": "[BSOD] BAD_POOL_CALLER (0x000000C2)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: BAD_POOL_CALLER (0x000000C2) - 잘못된 메모리 풀 해제 요청. 드라이버 메모리 버그.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "BAD_POOL_CALLER",
      "0x000000C2",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code BAD_POOL_CALLER (0x000000C2).",
      "background": "[B] 잘못된 메모리 풀 해제 요청. 드라이버 메모리 버그. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-152",
    "title": "[BSOD] DRIVER_VERIFIER_DETECTED_VIOLATION (0x000000C4)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_VERIFIER_DETECTED_VIOLATION (0x000000C4) - Driver Verifier 검증 도구가 드라이버 위반 탐지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_VERIFIER_DETECTED_VIOLATION",
      "0x000000C4",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_VERIFIER_DETECTED_VIOLATION (0x000000C4).",
      "background": "[B] Driver Verifier 검증 도구가 드라이버 위반 탐지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-153",
    "title": "[BSOD] DRIVER_CORRUPTED_EXPOOL (0x000000C5)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_CORRUPTED_EXPOOL (0x000000C5) - 드라이버가 커널 풀 메모리를 무단 파손함.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_CORRUPTED_EXPOOL",
      "0x000000C5",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_CORRUPTED_EXPOOL (0x000000C5).",
      "background": "[B] 드라이버가 커널 풀 메모리를 무단 파손함. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-154",
    "title": "[BSOD] DRIVER_CAUGHT_MODIFYING_FREED_POOL (0x000000C6)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_CAUGHT_MODIFYING_FREED_POOL (0x000000C6) - 이미 해제된 메모리 풀을 드라이버가 무단 수정 탐지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_CAUGHT_MODIFYING_FREED_POOL",
      "0x000000C6",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_CAUGHT_MODIFYING_FREED_POOL (0x000000C6).",
      "background": "[B] 이미 해제된 메모리 풀을 드라이버가 무단 수정 탐지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-155",
    "title": "[BSOD] TIMER_OR_DPC_INVALID (0x000000C7)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: TIMER_OR_DPC_INVALID (0x000000C7) - 유효하지 않은 타이머 또는 DPC 주소 참조.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "TIMER_OR_DPC_INVALID",
      "0x000000C7",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code TIMER_OR_DPC_INVALID (0x000000C7).",
      "background": "[B] 유효하지 않은 타이머 또는 DPC 주소 참조. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-156",
    "title": "[BSOD] IRQL_UNEXPECTED_VALUE (0x000000C8)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: IRQL_UNEXPECTED_VALUE (0x000000C8) - 예기치 않은 IRQL 수치 탐지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "IRQL_UNEXPECTED_VALUE",
      "0x000000C8",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code IRQL_UNEXPECTED_VALUE (0x000000C8).",
      "background": "[B] 예기치 않은 IRQL 수치 탐지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-157",
    "title": "[BSOD] DRIVER_VERIFIER_IOMANAGER_VIOLATION (0x000000C9)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_VERIFIER_IOMANAGER_VIOLATION (0x000000C9) - Driver Verifier I/O 관리자 위반 탐지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_VERIFIER_IOMANAGER_VIOLATION",
      "0x000000C9",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_VERIFIER_IOMANAGER_VIOLATION (0x000000C9).",
      "background": "[B] Driver Verifier I/O 관리자 위반 탐지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-158",
    "title": "[BSOD] PNP_DETECTED_FATAL_ERROR (0x000000CA)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PNP_DETECTED_FATAL_ERROR (0x000000CA) - PnP(Plug and Play) 치명적 하드웨어 오류 감지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PNP_DETECTED_FATAL_ERROR",
      "0x000000CA",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PNP_DETECTED_FATAL_ERROR (0x000000CA).",
      "background": "[B] PnP(Plug and Play) 치명적 하드웨어 오류 감지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-159",
    "title": "[BSOD] DRIVER_LEFT_LOCKED_PAGES_IN_PROCESS (0x000000CB)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_LEFT_LOCKED_PAGES_IN_PROCESS (0x000000CB) - 드라이버가 잠긴 메모리 페이지를 해제하지 않고 이탈.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_LEFT_LOCKED_PAGES_IN_PROCESS",
      "0x000000CB",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_LEFT_LOCKED_PAGES_IN_PROCESS (0x000000CB).",
      "background": "[B] 드라이버가 잠긴 메모리 페이지를 해제하지 않고 이탈. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-160",
    "title": "[BSOD] PAGE_FAULT_IN_FREED_SPECIAL_POOL (0x000000CC)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PAGE_FAULT_IN_FREED_SPECIAL_POOL (0x000000CC) - 해제된 스페셜 메모리 풀 영역 참조 페이징 오류.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PAGE_FAULT_IN_FREED_SPECIAL_POOL",
      "0x000000CC",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PAGE_FAULT_IN_FREED_SPECIAL_POOL (0x000000CC).",
      "background": "[B] 해제된 스페셜 메모리 풀 영역 참조 페이징 오류. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-161",
    "title": "[BSOD] PAGE_FAULT_BEYOND_END_OF_ALLOCATION (0x000000CD)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PAGE_FAULT_BEYOND_END_OF_ALLOCATION (0x000000CD) - 할당 범위 경계를 넘어선 무단 페이징 오류.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PAGE_FAULT_BEYOND_END_OF_ALLOCATION",
      "0x000000CD",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PAGE_FAULT_BEYOND_END_OF_ALLOCATION (0x000000CD).",
      "background": "[B] 할당 범위 경계를 넘어선 무단 페이징 오류. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-162",
    "title": "[BSOD] DRIVER_UNLOADED_WITHOUT_CANCELLING_PENDING_OPERATIONS (0x000000CE)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_UNLOADED_WITHOUT_CANCELLING_PENDING_OPERATIONS (0x000000CE) - 보류 작업을 취소하지 않고 드라이버 언로드.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_UNLOADED_WITHOUT_CANCELLING_PENDING_OPERATIONS",
      "0x000000CE",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_UNLOADED_WITHOUT_CANCELLING_PENDING_OPERATIONS (0x000000CE).",
      "background": "[B] 보류 작업을 취소하지 않고 드라이버 언로드. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-163",
    "title": "[BSOD] TERMINAL_SERVER_DRIVER_MADE_INVALID_TAG (0x000000CF)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: TERMINAL_SERVER_DRIVER_MADE_INVALID_TAG (0x000000CF) - 터미널 서버 드라이버 유효하지 않은 태그 생성.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "TERMINAL_SERVER_DRIVER_MADE_INVALID_TAG",
      "0x000000CF",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code TERMINAL_SERVER_DRIVER_MADE_INVALID_TAG (0x000000CF).",
      "background": "[B] 터미널 서버 드라이버 유효하지 않은 태그 생성. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-164",
    "title": "[BSOD] DRIVER_CORRUPTED_MMPOOL (0x000000D0)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_CORRUPTED_MMPOOL (0x000000D0) - 드라이버가 메모리 관리자 풀 메모리 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_CORRUPTED_MMPOOL",
      "0x000000D0",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_CORRUPTED_MMPOOL (0x000000D0).",
      "background": "[B] 드라이버가 메모리 관리자 풀 메모리 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-166",
    "title": "[BSOD] BUGCODE_IDRIVER_MAPPED_PORT_SPACE (0x000000D2)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: BUGCODE_IDRIVER_MAPPED_PORT_SPACE (0x000000D2) - 드라이버 포트 스페이스 매핑 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "BUGCODE_IDRIVER_MAPPED_PORT_SPACE",
      "0x000000D2",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code BUGCODE_IDRIVER_MAPPED_PORT_SPACE (0x000000D2).",
      "background": "[B] 드라이버 포트 스페이스 매핑 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-167",
    "title": "[BSOD] DRIVER_PORT_COMPLETION_SET_DATA (0x000000D3)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_PORT_COMPLETION_SET_DATA (0x000000D3) - 드라이버 포트 완성 데이터 설정 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_PORT_COMPLETION_SET_DATA",
      "0x000000D3",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_PORT_COMPLETION_SET_DATA (0x000000D3).",
      "background": "[B] 드라이버 포트 완성 데이터 설정 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-168",
    "title": "[BSOD] SYSTEM_SCAN_AT_UNAUTHENTICATED_LOCATION (0x000000D4)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SYSTEM_SCAN_AT_UNAUTHENTICATED_LOCATION (0x000000D4) - 미인증 커널 위치 시스템 스캔 탐지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SYSTEM_SCAN_AT_UNAUTHENTICATED_LOCATION",
      "0x000000D4",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SYSTEM_SCAN_AT_UNAUTHENTICATED_LOCATION (0x000000D4).",
      "background": "[B] 미인증 커널 위치 시스템 스캔 탐지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-169",
    "title": "[BSOD] DRIVER_PAGE_FAULT_IN_FREED_SPECIAL_POOL (0x000000D5)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_PAGE_FAULT_IN_FREED_SPECIAL_POOL (0x000000D5) - 해제된 스페셜 풀 영역 드라이버 페이징 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_PAGE_FAULT_IN_FREED_SPECIAL_POOL",
      "0x000000D5",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_PAGE_FAULT_IN_FREED_SPECIAL_POOL (0x000000D5).",
      "background": "[B] 해제된 스페셜 풀 영역 드라이버 페이징 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-170",
    "title": "[BSOD] DRIVER_PAGE_FAULT_BEYOND_END_OF_ALLOCATION (0x000000D6)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_PAGE_FAULT_BEYOND_END_OF_ALLOCATION (0x000000D6) - 할당 범위를 초과한 드라이버 페이징 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_PAGE_FAULT_BEYOND_END_OF_ALLOCATION",
      "0x000000D6",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_PAGE_FAULT_BEYOND_END_OF_ALLOCATION (0x000000D6).",
      "background": "[B] 할당 범위를 초과한 드라이버 페이징 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-171",
    "title": "[BSOD] DRIVER_UNMAPPED_SYSTEM_VA (0x000000D7)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_UNMAPPED_SYSTEM_VA (0x000000D7) - 매핑 해제된 시스템 가상 주소 참조.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_UNMAPPED_SYSTEM_VA",
      "0x000000D7",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_UNMAPPED_SYSTEM_VA (0x000000D7).",
      "background": "[B] 매핑 해제된 시스템 가상 주소 참조. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-172",
    "title": "[BSOD] DRIVER_USED_EXCESSIVE_PTES (0x000000D8)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_USED_EXCESSIVE_PTES (0x000000D8) - 드라이버가 남용 수준으로 과도한 PTE 소비.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_USED_EXCESSIVE_PTES",
      "0x000000D8",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_USED_EXCESSIVE_PTES (0x000000D8).",
      "background": "[B] 드라이버가 남용 수준으로 과도한 PTE 소비. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-173",
    "title": "[BSOD] LOCKED_PAGES_TRACKER_CORRUPT (0x000000D9)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: LOCKED_PAGES_TRACKER_CORRUPT (0x000000D9) - 잠긴 페이지 추적기 구조체 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "LOCKED_PAGES_TRACKER_CORRUPT",
      "0x000000D9",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code LOCKED_PAGES_TRACKER_CORRUPT (0x000000D9).",
      "background": "[B] 잠긴 페이지 추적기 구조체 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-174",
    "title": "[BSOD] SYSTEM_PTE_MISUSE (0x000000DA)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SYSTEM_PTE_MISUSE (0x000000DA) - 시스템 PTE 무단 남용 탐지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SYSTEM_PTE_MISUSE",
      "0x000000DA",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SYSTEM_PTE_MISUSE (0x000000DA).",
      "background": "[B] 시스템 PTE 무단 남용 탐지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-175",
    "title": "[BSOD] DRIVER_CORRUPTED_SYSPTES (0x000000DB)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_CORRUPTED_SYSPTES (0x000000DB) - 드라이버가 시스템 PTE 메모리 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_CORRUPTED_SYSPTES",
      "0x000000DB",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_CORRUPTED_SYSPTES (0x000000DB).",
      "background": "[B] 드라이버가 시스템 PTE 메모리 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-176",
    "title": "[BSOD] DRIVER_INVALID_STACK_ACCESS (0x000000DC)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_INVALID_STACK_ACCESS (0x000000DC) - 드라이버 유효하지 않은 스택 메모리 접근.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_INVALID_STACK_ACCESS",
      "0x000000DC",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_INVALID_STACK_ACCESS (0x000000DC).",
      "background": "[B] 드라이버 유효하지 않은 스택 메모리 접근. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-177",
    "title": "[BSOD] POOL_CORRUPTION_IN_FILE_AREA (0x000000DE)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: POOL_CORRUPTION_IN_FILE_AREA (0x000000DE) - 파일 영역 내 메모리 풀 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "POOL_CORRUPTION_IN_FILE_AREA",
      "0x000000DE",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code POOL_CORRUPTION_IN_FILE_AREA (0x000000DE).",
      "background": "[B] 파일 영역 내 메모리 풀 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-178",
    "title": "[BSOD] IMPERSONATING_WORKER_THREAD (0x000000DF)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: IMPERSONATING_WORKER_THREAD (0x000000DF) - 워커 스레드가 임퍼소네이션(가징) 상태 유지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "IMPERSONATING_WORKER_THREAD",
      "0x000000DF",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code IMPERSONATING_WORKER_THREAD (0x000000DF).",
      "background": "[B] 워커 스레드가 임퍼소네이션(가징) 상태 유지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-179",
    "title": "[BSOD] ACPI_BIOS_FATAL_ERROR (0x000000E0)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: ACPI_BIOS_FATAL_ERROR (0x000000E0) - ACPI BIOS 치명적 오류 발생.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "ACPI_BIOS_FATAL_ERROR",
      "0x000000E0",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code ACPI_BIOS_FATAL_ERROR (0x000000E0).",
      "background": "[B] ACPI BIOS 치명적 오류 발생. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-180",
    "title": "[BSOD] WORKER_THREAD_RETURNED_AT_BAD_IRQL (0x000000E1)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: WORKER_THREAD_RETURNED_AT_BAD_IRQL (0x000000E1) - 워커 스레드가 상승된 IRQL 레벨에서 리턴됨.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "WORKER_THREAD_RETURNED_AT_BAD_IRQL",
      "0x000000E1",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code WORKER_THREAD_RETURNED_AT_BAD_IRQL (0x000000E1).",
      "background": "[B] 워커 스레드가 상승된 IRQL 레벨에서 리턴됨. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-181",
    "title": "[BSOD] MANUALLY_INITIATED_CRASH (0x000000E2)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MANUALLY_INITIATED_CRASH (0x000000E2) - 사용자/엔지니어가 수동으로 유발한 BSOD (Ctrl+ScrollLock).",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MANUALLY_INITIATED_CRASH",
      "0x000000E2",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MANUALLY_INITIATED_CRASH (0x000000E2).",
      "background": "[B] 사용자/엔지니어가 수동으로 유발한 BSOD (Ctrl+ScrollLock). (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-182",
    "title": "[BSOD] RESOURCE_NOT_OWNED (0x000000E3)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: RESOURCE_NOT_OWNED (0x000000E3) - 소유하지 않은 공유 자원 해제 시도.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "RESOURCE_NOT_OWNED",
      "0x000000E3",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code RESOURCE_NOT_OWNED (0x000000E3).",
      "background": "[B] 소유하지 않은 공유 자원 해제 시도. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-183",
    "title": "[BSOD] WORKER_THREAD_INVALID_STATE (0x000000E4)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: WORKER_THREAD_INVALID_STATE (0x000000E4) - 워커 스레드 유효하지 않은 상태.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "WORKER_THREAD_INVALID_STATE",
      "0x000000E4",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code WORKER_THREAD_INVALID_STATE (0x000000E4).",
      "background": "[B] 워커 스레드 유효하지 않은 상태. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-184",
    "title": "[BSOD] DRIVER_VERIFIER_DMA_VIOLATION (0x000000E6)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_VERIFIER_DMA_VIOLATION (0x000000E6) - Driver Verifier DMA 버퍼 위반 탐지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_VERIFIER_DMA_VIOLATION",
      "0x000000E6",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_VERIFIER_DMA_VIOLATION (0x000000E6).",
      "background": "[B] Driver Verifier DMA 버퍼 위반 탐지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-185",
    "title": "[BSOD] INVALID_FLOATING_POINT_STATE (0x000000E7)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INVALID_FLOATING_POINT_STATE (0x000000E7) - 유효하지 않은 CPU 부동소수점 상태.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INVALID_FLOATING_POINT_STATE",
      "0x000000E7",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INVALID_FLOATING_POINT_STATE (0x000000E7).",
      "background": "[B] 유효하지 않은 CPU 부동소수점 상태. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-186",
    "title": "[BSOD] INVALID_CANCEL_OF_FILE_OPEN (0x000000E8)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: INVALID_CANCEL_OF_FILE_OPEN (0x000000E8) - 파일 오픈 취소 요청 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "INVALID_CANCEL_OF_FILE_OPEN",
      "0x000000E8",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code INVALID_CANCEL_OF_FILE_OPEN (0x000000E8).",
      "background": "[B] 파일 오픈 취소 요청 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-187",
    "title": "[BSOD] ACTIVE_EX_WORKER_THREAD_TERMINATION (0x000000E9)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: ACTIVE_EX_WORKER_THREAD_TERMINATION (0x000000E9) - 활성 워커 스레드 강제 종료 탐지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "ACTIVE_EX_WORKER_THREAD_TERMINATION",
      "0x000000E9",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code ACTIVE_EX_WORKER_THREAD_TERMINATION (0x000000E9).",
      "background": "[B] 활성 워커 스레드 강제 종료 탐지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-188",
    "title": "[BSOD] THREAD_STUCK_IN_DEVICE_DRIVER (0x000000EA)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: THREAD_STUCK_IN_DEVICE_DRIVER (0x000000EA) - 디바이스 그래픽 드라이버 내 스레드 무한 루프 갇힘.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "THREAD_STUCK_IN_DEVICE_DRIVER",
      "0x000000EA",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code THREAD_STUCK_IN_DEVICE_DRIVER (0x000000EA).",
      "background": "[B] 디바이스 그래픽 드라이버 내 스레드 무한 루프 갇힘. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-189",
    "title": "[BSOD] DIRTY_MAPPED_PAGES_CONGRUENCE (0x000000EB)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DIRTY_MAPPED_PAGES_CONGRUENCE (0x000000EB) - 더티 매핑 페이지 일관성 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DIRTY_MAPPED_PAGES_CONGRUENCE",
      "0x000000EB",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DIRTY_MAPPED_PAGES_CONGRUENCE (0x000000EB).",
      "background": "[B] 더티 매핑 페이지 일관성 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-190",
    "title": "[BSOD] SESSION_HAS_VALID_SPECIAL_VIEWS (0x000000EC)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SESSION_HAS_VALID_SPECIAL_VIEWS (0x000000EC) - 세션 종료 시 스페셜 뷰 잔존.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SESSION_HAS_VALID_SPECIAL_VIEWS",
      "0x000000EC",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SESSION_HAS_VALID_SPECIAL_VIEWS (0x000000EC).",
      "background": "[B] 세션 종료 시 스페셜 뷰 잔존. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-191",
    "title": "[BSOD] UNMOUNTABLE_BOOT_VOLUME (0x000000ED)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: UNMOUNTABLE_BOOT_VOLUME (0x000000ED) - 부팅 볼륨 마운트 불가. 디스크 BCD/파일시스템 손상.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "UNMOUNTABLE_BOOT_VOLUME",
      "0x000000ED",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code UNMOUNTABLE_BOOT_VOLUME (0x000000ED).",
      "background": "[B] 부팅 볼륨 마운트 불가. 디스크 BCD/파일시스템 손상. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-192",
    "title": "[BSOD] CRITICAL_INITIALIZATION_FAILURE (0x000000EE)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CRITICAL_INITIALIZATION_FAILURE (0x000000EE) - 치명적인 필수 서브시스템 초기화 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CRITICAL_INITIALIZATION_FAILURE",
      "0x000000EE",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CRITICAL_INITIALIZATION_FAILURE (0x000000EE).",
      "background": "[B] 치명적인 필수 서브시스템 초기화 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-194",
    "title": "[BSOD] CRITICAL_OBJECT_TERMINATION (0x000000F4)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CRITICAL_OBJECT_TERMINATION (0x000000F4) - 치명적인 프로세스 개체 강제 종료.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CRITICAL_OBJECT_TERMINATION",
      "0x000000F4",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CRITICAL_OBJECT_TERMINATION (0x000000F4).",
      "background": "[B] 치명적인 프로세스 개체 강제 종료. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-195",
    "title": "[BSOD] DRIVER_OVERRAN_STACK_BUFFER (0x000000F7)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DRIVER_OVERRAN_STACK_BUFFER (0x000000F7) - 드라이버 스택 버퍼 오버런 (보안 버퍼 침범).",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DRIVER_OVERRAN_STACK_BUFFER",
      "0x000000F7",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DRIVER_OVERRAN_STACK_BUFFER (0x000000F7).",
      "background": "[B] 드라이버 스택 버퍼 오버런 (보안 버퍼 침범). (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-196",
    "title": "[BSOD] HTTP_DRIVER_CORRUPTED (0x000000FA)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: HTTP_DRIVER_CORRUPTED (0x000000FA) - HTTP.sys 웹 서버 드라이버 메모리 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "HTTP_DRIVER_CORRUPTED",
      "0x000000FA",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code HTTP_DRIVER_CORRUPTED (0x000000FA).",
      "background": "[B] HTTP.sys 웹 서버 드라이버 메모리 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-197",
    "title": "[BSOD] ATTEMPTED_EXECUTE_OF_NOEXECUTE_MEMORY (0x000000FC)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: ATTEMPTED_EXECUTE_OF_NOEXECUTE_MEMORY (0x000000FC) - 실행 방지(NX/DEP) 메모리 영역 실행 시도.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "ATTEMPTED_EXECUTE_OF_NOEXECUTE_MEMORY",
      "0x000000FC",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code ATTEMPTED_EXECUTE_OF_NOEXECUTE_MEMORY (0x000000FC).",
      "background": "[B] 실행 방지(NX/DEP) 메모리 영역 실행 시도. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-198",
    "title": "[BSOD] DIRTY_NOWRITE_PAGES_CONGRUENCE (0x000000FD)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: DIRTY_NOWRITE_PAGES_CONGRUENCE (0x000000FD) - 쓰기 금지 더티 페이지 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "DIRTY_NOWRITE_PAGES_CONGRUENCE",
      "0x000000FD",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code DIRTY_NOWRITE_PAGES_CONGRUENCE (0x000000FD).",
      "background": "[B] 쓰기 금지 더티 페이지 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-199",
    "title": "[BSOD] BUGCODE_USB_DRIVER (0x000000FE)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: BUGCODE_USB_DRIVER (0x000000FE) - USB 포트 드라이버 치명적 버그 코드 발생.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "BUGCODE_USB_DRIVER",
      "0x000000FE",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code BUGCODE_USB_DRIVER (0x000000FE).",
      "background": "[B] USB 포트 드라이버 치명적 버그 코드 발생. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-200",
    "title": "[BSOD] LOADER_BLOCK_MISMATCH (0x00000100)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: LOADER_BLOCK_MISMATCH (0x00000100) - OS 로더 블록 버전 불일치.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "LOADER_BLOCK_MISMATCH",
      "0x00000100",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code LOADER_BLOCK_MISMATCH (0x00000100).",
      "background": "[B] OS 로더 블록 버전 불일치. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-201",
    "title": "[BSOD] CLOCK_WATCHDOG_TIMEOUT (0x00000101)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "하드웨어",
    "categoryMedium": "하드웨어",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: CLOCK_WATCHDOG_TIMEOUT (0x00000101) - 다중 코어 CPU 클럭 와치독 타임아웃. CPU 과열/오버클럭.",
    "actionTaken": "1. RAM/CPU 슬롯 청소 및 물리 수리 2. BIOS 설정 초기화 (Load Default) 3. 파워서플라이 및 하드웨어 점검/교체",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "CLOCK_WATCHDOG_TIMEOUT",
      "0x00000101",
      "하드웨어",
      "하드웨어"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code CLOCK_WATCHDOG_TIMEOUT (0x00000101).",
      "background": "[B] 다중 코어 CPU 클럭 와치독 타임아웃. CPU 과열/오버클럭. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. RAM/CPU 슬롯 청소 및 물리 수리 2. BIOS 설정 초기화 (Load Default) 3. 파워서플라이 및 하드웨어 점검/교체 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]], [[BIOS 초기화]], [[RAM 세척]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구",
      "BIOS 초기화",
      "RAM 세척"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-203",
    "title": "[BSOD] WDF_VIOLATION (0x0000010D)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: WDF_VIOLATION (0x0000010D) - WDF(Windows Driver Framework) 프레임워크 규칙 위반.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "WDF_VIOLATION",
      "0x0000010D",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code WDF_VIOLATION (0x0000010D).",
      "background": "[B] WDF(Windows Driver Framework) 프레임워크 규칙 위반. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-204",
    "title": "[BSOD] VIDEO_MEMORY_MANAGEMENT_INTERNAL (0x0000010E)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: VIDEO_MEMORY_MANAGEMENT_INTERNAL (0x0000010E) - 비디오 그래픽 메모리 관리자 내부 오류.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "VIDEO_MEMORY_MANAGEMENT_INTERNAL",
      "0x0000010E",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code VIDEO_MEMORY_MANAGEMENT_INTERNAL (0x0000010E).",
      "background": "[B] 비디오 그래픽 메모리 관리자 내부 오류. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-205",
    "title": "[BSOD] RESOURCE_MANAGER_EXCEPTION (0x0000010F)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: RESOURCE_MANAGER_EXCEPTION (0x0000010F) - 자원 관리자 서브시스템 예외.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "RESOURCE_MANAGER_EXCEPTION",
      "0x0000010F",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code RESOURCE_MANAGER_EXCEPTION (0x0000010F).",
      "background": "[B] 자원 관리자 서브시스템 예외. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-207",
    "title": "[BSOD] VIDEO_TDR_TIMEOUT_DETECTED (0x00000117)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: VIDEO_TDR_TIMEOUT_DETECTED (0x00000117) - 디스플레이 그래픽 TDR 타임아웃 감지.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "VIDEO_TDR_TIMEOUT_DETECTED",
      "0x00000117",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code VIDEO_TDR_TIMEOUT_DETECTED (0x00000117).",
      "background": "[B] 디스플레이 그래픽 TDR 타임아웃 감지. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-208",
    "title": "[BSOD] VIDEO_SCHEDULER_INTERNAL_ERROR (0x00000119)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: VIDEO_SCHEDULER_INTERNAL_ERROR (0x00000119) - 비디오 그래픽 스케줄러 내부 커널 오류.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "VIDEO_SCHEDULER_INTERNAL_ERROR",
      "0x00000119",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code VIDEO_SCHEDULER_INTERNAL_ERROR (0x00000119).",
      "background": "[B] 비디오 그래픽 스케줄러 내부 커널 오류. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-209",
    "title": "[BSOD] ATTEMPTED_WRITE_TO_CM_PROTECTED_READONLY_PAGE (0x0000011C)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: ATTEMPTED_WRITE_TO_CM_PROTECTED_READONLY_PAGE (0x0000011C) - 보호된 읽기 전용 CM 페이지 무단 쓰기 시도.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "ATTEMPTED_WRITE_TO_CM_PROTECTED_READONLY_PAGE",
      "0x0000011C",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code ATTEMPTED_WRITE_TO_CM_PROTECTED_READONLY_PAGE (0x0000011C).",
      "background": "[B] 보호된 읽기 전용 CM 페이지 무단 쓰기 시도. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-210",
    "title": "[BSOD] EVENT_TRACING_FATAL_ERROR (0x0000011D)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: EVENT_TRACING_FATAL_ERROR (0x0000011D) - 이벤트 트레이싱(ETW) 치명적 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "EVENT_TRACING_FATAL_ERROR",
      "0x0000011D",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code EVENT_TRACING_FATAL_ERROR (0x0000011D).",
      "background": "[B] 이벤트 트레이싱(ETW) 치명적 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-212",
    "title": "[BSOD] FAULTY_HARDWARE_CORRUPTED_PAGE (0x0000012B)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: FAULTY_HARDWARE_CORRUPTED_PAGE (0x0000012B) - 불량 물리 메모리(RAM) 카드로 인한 페이지 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "FAULTY_HARDWARE_CORRUPTED_PAGE",
      "0x0000012B",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code FAULTY_HARDWARE_CORRUPTED_PAGE (0x0000012B).",
      "background": "[B] 불량 물리 메모리(RAM) 카드로 인한 페이지 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-215",
    "title": "[BSOD] KERNEL_MODE_HEAP_CORRUPTION (0x0000013A)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: KERNEL_MODE_HEAP_CORRUPTION (0x0000013A) - 커널 모드 힙 메모리 덮어쓰기 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "KERNEL_MODE_HEAP_CORRUPTION",
      "0x0000013A",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code KERNEL_MODE_HEAP_CORRUPTION (0x0000013A).",
      "background": "[B] 커널 모드 힙 메모리 덮어쓰기 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-216",
    "title": "[BSOD] BUGCODE_USB3_DRIVER (0x00000144)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: BUGCODE_USB3_DRIVER (0x00000144) - USB 3.0 포트 드라이버 버그 코드 발생.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "BUGCODE_USB3_DRIVER",
      "0x00000144",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code BUGCODE_USB3_DRIVER (0x00000144).",
      "background": "[B] USB 3.0 포트 드라이버 버그 코드 발생. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-217",
    "title": "[BSOD] SOC_SUBSYSTEM_FAILURE (0x0000014B)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SOC_SUBSYSTEM_FAILURE (0x0000014B) - SoC 원칩 하드웨어 서브시스템 실패.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SOC_SUBSYSTEM_FAILURE",
      "0x0000014B",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SOC_SUBSYSTEM_FAILURE (0x0000014B).",
      "background": "[B] SoC 원칩 하드웨어 서브시스템 실패. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-219",
    "title": "[BSOD] WIN32K_CRITICAL_FAILURE (0x00000164)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: WIN32K_CRITICAL_FAILURE (0x00000164) - win32k.sys 그래픽 서브시스템 치명적 오류.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "WIN32K_CRITICAL_FAILURE",
      "0x00000164",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code WIN32K_CRITICAL_FAILURE (0x00000164).",
      "background": "[B] win32k.sys 그래픽 서브시스템 치명적 오류. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-220",
    "title": "[BSOD] MICROCODE_REVISION_MISMATCH (0x0000017E)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: MICROCODE_REVISION_MISMATCH (0x0000017E) - CPU 마이크로코드 바이오스 릴리즈 불일치.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "MICROCODE_REVISION_MISMATCH",
      "0x0000017E",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code MICROCODE_REVISION_MISMATCH (0x0000017E).",
      "background": "[B] CPU 마이크로코드 바이오스 릴리즈 불일치. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-222",
    "title": "[BSOD] KERNEL_AUTO_BOOST_INVALID_LOCK_RELEASE (0x00000192)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: KERNEL_AUTO_BOOST_INVALID_LOCK_RELEASE (0x00000192) - 커널 오토 부스트 잠금 해제 무효.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "KERNEL_AUTO_BOOST_INVALID_LOCK_RELEASE",
      "0x00000192",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code KERNEL_AUTO_BOOST_INVALID_LOCK_RELEASE (0x00000192).",
      "background": "[B] 커널 오토 부스트 잠금 해제 무효. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-223",
    "title": "[BSOD] WIN32K_POWER_WATCHDOG_TIMEOUT (0x0000019C)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: WIN32K_POWER_WATCHDOG_TIMEOUT (0x0000019C) - win32k 전원 관리 와치독 타임아웃.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "WIN32K_POWER_WATCHDOG_TIMEOUT",
      "0x0000019C",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code WIN32K_POWER_WATCHDOG_TIMEOUT (0x0000019C).",
      "background": "[B] win32k 전원 관리 와치독 타임아웃. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-224",
    "title": "[BSOD] WIN32K_CALLOUT_WATCHDOG_TIMEOUT (0x000001A1)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: WIN32K_CALLOUT_WATCHDOG_TIMEOUT (0x000001A1) - win32k 콜아웃 와치독 타임아웃.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "WIN32K_CALLOUT_WATCHDOG_TIMEOUT",
      "0x000001A1",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code WIN32K_CALLOUT_WATCHDOG_TIMEOUT (0x000001A1).",
      "background": "[B] win32k 콜아웃 와치독 타임아웃. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-225",
    "title": "[BSOD] STORE_DATA_STRUCTURE_CORRUPTION (0x000001C7)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: STORE_DATA_STRUCTURE_CORRUPTION (0x000001C7) - 메모리 압축 스토어 구조체 파손.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "STORE_DATA_STRUCTURE_CORRUPTION",
      "0x000001C7",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code STORE_DATA_STRUCTURE_CORRUPTION (0x000001C7).",
      "background": "[B] 메모리 압축 스토어 구조체 파손. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-226",
    "title": "[BSOD] UCMUCSI_FAILURE (0x000001D4)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: UCMUCSI_FAILURE (0x000001D4) - USB-C 타입 전원 전달(PD) 커널 드라이버 에러.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "UCMUCSI_FAILURE",
      "0x000001D4",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code UCMUCSI_FAILURE (0x000001D4).",
      "background": "[B] USB-C 타입 전원 전달(PD) 커널 드라이버 에러. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-227",
    "title": "[BSOD] PROMETHEUS_DRIVER_FATAL_ERROR (0x000001E3)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: PROMETHEUS_DRIVER_FATAL_ERROR (0x000001E3) - Prometheus 보안 드라이버 치명적 오류.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "PROMETHEUS_DRIVER_FATAL_ERROR",
      "0x000001E3",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code PROMETHEUS_DRIVER_FATAL_ERROR (0x000001E3).",
      "background": "[B] Prometheus 보안 드라이버 치명적 오류. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "bsod-full-228",
    "title": "[BSOD] SYNTHETIC_HEARTBEAT_TIMEOUT (0x000001FC)",
    "sourceFile": "Microsoft 공식 레퍼런스",
    "date": "2026-08-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Windows 11 Stop Code 블루스크린 오류: SYNTHETIC_HEARTBEAT_TIMEOUT (0x000001FC) - 가상화 Hyper-V 헬스 하트비트 타임아웃.",
    "actionTaken": "1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치",
    "tags": [
      "Windows11",
      "BSOD",
      "블루스크린",
      "SYNTHETIC_HEARTBEAT_TIMEOUT",
      "0x000001FC",
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Windows 11 디바이스 가동 중 커널 정지 블루스크린 표출: Stop Code SYNTHETIC_HEARTBEAT_TIMEOUT (0x000001FC).",
      "background": "[B] 가상화 Hyper-V 헬스 하트비트 타임아웃. (Microsoft 공식 버그체크 레퍼런스 규격).",
      "assessment": "[A] 커널 메모리 무결성, 드라이버 호환성, 하드웨어 I/O 응답 지연 또는 보안 솔루션 정책 충돌.",
      "recommendation": "[R] 1. Shift+다시시작으로 안전모드 진입 2. 장치관리자 드라이버 롤백/제거 3. dism /restorehealth 및 sfc /scannow 4. 복구 불가능 시 OS 클린 재설치 📌 연관 복구 가이드: [[안전 모드]], [[sfc /scannow]], [[DISM 복구]]"
    },
    "wikilinks": [
      "안전 모드",
      "sfc /scannow",
      "DISM 복구"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:31:38.530Z",
    "updatedAt": "2026-08-07T05:31:38.530Z"
  },
  {
    "id": "seed-3",
    "title": "기본 프로그램 - 아웃룩 대용량 첨부파일 안열림",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-02",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "아웃룩 대용량 첨부파일 안열림",
    "actionTaken": "사내 메신저 - 고객센터 - 애드인 확장기능 다운 안내",
    "tags": [
      "소프트웨어",
      "아웃룩"
    ],
    "sbar": {
      "situation": "[S] 아웃룩 대용량 첨부파일 안열림",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 - 고객센터 - 애드인 확장기능 다운 안내 📌 연관 지식: [[아웃룩]]"
    },
    "wikilinks": [
      "아웃룩"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.307Z",
    "updatedAt": "2026-08-07T05:08:48.307Z"
  },
  {
    "id": "seed-8",
    "title": "IP - IP변경 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-03",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "IP변경 문의",
    "actionTaken": "전산관리자 IP신청안내",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] IP변경 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 전산관리자 IP신청안내 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.307Z",
    "updatedAt": "2026-08-07T05:08:48.307Z"
  },
  {
    "id": "seed-9",
    "title": "드라이버 - 사내 메신저 전자결재 안열림",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-04",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "사내 메신저 전자결재 안열림",
    "actionTaken": "사내 메신저 - 고객센터 - 사내 메신저 뷰어 다운로드 안내",
    "tags": [
      "소프트웨어",
      "드라이버"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 전자결재 안열림",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 - 고객센터 - 사내 메신저 뷰어 다운로드 안내"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.307Z",
    "updatedAt": "2026-08-07T05:08:48.307Z"
  },
  {
    "id": "seed-11",
    "title": "기본 프로그램 - 신도 복합기 출력 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-04",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "신도 복합기 출력 문의",
    "actionTaken": "복합기 드라이버 설치",
    "tags": [
      "소프트웨어",
      "복합기",
      "신도"
    ],
    "sbar": {
      "situation": "[S] 신도 복합기 출력 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 복합기 드라이버 설치 📌 연관 지식: [[복합기]], [[신도]]"
    },
    "wikilinks": [
      "복합기",
      "신도"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.307Z",
    "updatedAt": "2026-08-07T05:08:48.307Z"
  },
  {
    "id": "seed-14",
    "title": "IP - 네트워크 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-04",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "네트워크 문의",
    "actionTaken": "IP 입력 후 SSID 입력",
    "tags": [
      "네트워크",
      "SSID"
    ],
    "sbar": {
      "situation": "[S] 네트워크 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] IP 입력 후 SSID 입력 📌 연관 지식: [[IP]], [[SSID]]"
    },
    "wikilinks": [
      "IP",
      "SSID"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.307Z",
    "updatedAt": "2026-08-07T05:08:48.307Z"
  },
  {
    "id": "seed-16",
    "title": "기본 프로그램 - 공용 업무 PC 메일 연동 삭제 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-04",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "공용 업무 PC 메일 연동 삭제 문의",
    "actionTaken": "제어판 - 메일 - 전자 메일계정 삭제",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 공용 업무 PC 메일 연동 삭제 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 제어판 - 메일 - 전자 메일계정 삭제"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.307Z",
    "updatedAt": "2026-08-07T05:08:48.307Z"
  },
  {
    "id": "seed-18",
    "title": "IP - IP 입력 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-05",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "IP 입력 문의",
    "actionTaken": "서브넷 마스크 / 기본 게이트웨이 / DNS 안내",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] IP 입력 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 서브넷 마스크 / 기본 게이트웨이 / DNS 안내 📌 연관 지식: [[IP]], [[DNS]]"
    },
    "wikilinks": [
      "IP",
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.307Z",
    "updatedAt": "2026-08-07T05:08:48.307Z"
  },
  {
    "id": "seed-20",
    "title": "기본 프로그램 - 복합기 스캔 등록 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-08",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "복합기 스캔 등록 문의",
    "actionTaken": "복합기 드라이버 설치",
    "tags": [
      "소프트웨어",
      "복합기",
      "스캔"
    ],
    "sbar": {
      "situation": "[S] 복합기 스캔 등록 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 복합기 드라이버 설치 📌 연관 지식: [[복합기]], [[스캔]]"
    },
    "wikilinks": [
      "복합기",
      "스캔"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.307Z",
    "updatedAt": "2026-08-07T05:08:48.307Z"
  },
  {
    "id": "seed-21",
    "title": "기본 프로그램 - 사내 메신저 전자결재 안열림",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-08",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 전자결재 안열림",
    "actionTaken": "사내 메신저 드라이버 설치 안내",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 전자결재 안열림",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 드라이버 설치 안내"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.307Z",
    "updatedAt": "2026-08-07T05:08:48.307Z"
  },
  {
    "id": "seed-26",
    "title": "드라이버 - 신도 복합기 계정 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-09",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "신도 복합기 계정 문의",
    "actionTaken": "복합기 패스워드 초기화 안내",
    "tags": [
      "소프트웨어",
      "드라이버",
      "복합기",
      "신도",
      "워드"
    ],
    "sbar": {
      "situation": "[S] 신도 복합기 계정 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 복합기 패스워드 초기화 안내 📌 연관 지식: [[복합기]], [[신도]], [[워드]]"
    },
    "wikilinks": [
      "복합기",
      "신도",
      "워드"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-27",
    "title": "IP - IP 변경 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-09",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "IP 변경 문의",
    "actionTaken": "보안 솔루션 - OTP요청 - 코드 전산관리자 안내",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] IP 변경 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 보안 솔루션 - OTP요청 - 코드 전산관리자 안내 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-28",
    "title": "IP - 네트워크 연결 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-09",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "네트워크 연결 문의",
    "actionTaken": "전산관리자 윕스 등록 및 맥 초기화 안내",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 네트워크 연결 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 전산관리자 윕스 등록 및 맥 초기화 안내"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-30",
    "title": "기본 프로그램 - 노트북 셋팅 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-10",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "노트북 셋팅 문의",
    "actionTaken": "보안 소프트웨어 설치 완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 노트북 셋팅 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 보안 소프트웨어 설치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-37",
    "title": "기본 프로그램 - 면접용 노트북 셋팅",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-12",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "면접용 노트북 셋팅",
    "actionTaken": "노트북 셋팅",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 면접용 노트북 셋팅",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 노트북 셋팅"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-38",
    "title": "데스크탑 - 26층 TF 노트북 1대 교체 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-12",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "26층 TF 노트북 1대 교체 문의",
    "actionTaken": "신청 및 교체 안내",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 26층 TF 노트북 1대 교체 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 신청 및 교체 안내"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-39",
    "title": "드라이버 - 삼성 복합기 스캔 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-15",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "삼성 복합기 스캔 문의",
    "actionTaken": "카드 등록 후 사용 안내",
    "tags": [
      "소프트웨어",
      "드라이버",
      "복합기",
      "삼성",
      "스캔"
    ],
    "sbar": {
      "situation": "[S] 삼성 복합기 스캔 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 카드 등록 후 사용 안내 📌 연관 지식: [[복합기]], [[삼성]], [[스캔]]"
    },
    "wikilinks": [
      "복합기",
      "삼성",
      "스캔"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-41",
    "title": "드라이버 - 삼성 복합기 드라이버 설치 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-15",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "삼성 복합기 드라이버 설치 문의",
    "actionTaken": "이지 프린터 재설치 안내",
    "tags": [
      "소프트웨어",
      "드라이버",
      "복합기",
      "삼성"
    ],
    "sbar": {
      "situation": "[S] 삼성 복합기 드라이버 설치 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 이지 프린터 재설치 안내 📌 연관 지식: [[복합기]], [[삼성]]"
    },
    "wikilinks": [
      "복합기",
      "삼성"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-47",
    "title": "드라이버 - 사내 메신저 메신져 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-15",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "사내 메신저 메신져 문의",
    "actionTaken": "사내 메신저 메신져 다운로드",
    "tags": [
      "소프트웨어",
      "드라이버"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 메신져 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 메신져 다운로드"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-50",
    "title": "드라이버 - 삼성 스캔 복합기 등록 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-16",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "삼성 스캔 복합기 등록 문의",
    "actionTaken": "사번/사번 로그인 후 카드 등록",
    "tags": [
      "소프트웨어",
      "드라이버",
      "복합기",
      "삼성",
      "스캔"
    ],
    "sbar": {
      "situation": "[S] 삼성 스캔 복합기 등록 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 사번/사번 로그인 후 카드 등록 📌 연관 지식: [[복합기]], [[삼성]], [[스캔]]"
    },
    "wikilinks": [
      "복합기",
      "삼성",
      "스캔"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-59",
    "title": "기본 프로그램 - 사내 메신저 메신져 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-17",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 메신져 문의",
    "actionTaken": "메신져 도메인주소 corp.com -> corpsystems.com 변경 후 정상",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 메신져 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 메신져 도메인주소 corp.com -> corpsystems.com 변경 후 정상"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-60",
    "title": "드라이버 - 삼성 복합기 스캔 등록 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-17",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "삼성 복합기 스캔 등록 문의",
    "actionTaken": "지원업무 - IT - OA 일반업무망 복합기 드라이버 설치 안내",
    "tags": [
      "소프트웨어",
      "드라이버",
      "복합기",
      "삼성",
      "스캔"
    ],
    "sbar": {
      "situation": "[S] 삼성 복합기 스캔 등록 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 지원업무 - IT - OA 일반업무망 복합기 드라이버 설치 안내 📌 연관 지식: [[복합기]], [[삼성]], [[스캔]]"
    },
    "wikilinks": [
      "복합기",
      "삼성",
      "스캔"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-61",
    "title": "드라이버 - 무선 마우스 페어링 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-17",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "무선 마우스 페어링 문의",
    "actionTaken": "페어링 연결 완료",
    "tags": [
      "소프트웨어",
      "드라이버",
      "페어링"
    ],
    "sbar": {
      "situation": "[S] 무선 마우스 페어링 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 페어링 연결 완료 📌 연관 지식: [[페어링]]"
    },
    "wikilinks": [
      "페어링"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-63",
    "title": "드라이버 - 신도리코 출력 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-18",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "신도리코 출력 문의",
    "actionTaken": "신도 복합기드라이버 재설치",
    "tags": [
      "소프트웨어",
      "드라이버",
      "복합기",
      "신도리코",
      "신도"
    ],
    "sbar": {
      "situation": "[S] 신도리코 출력 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 신도 복합기드라이버 재설치 📌 연관 지식: [[복합기]], [[신도리코]], [[신도]]"
    },
    "wikilinks": [
      "복합기",
      "신도리코",
      "신도"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-65",
    "title": "기본 프로그램 - 화면 해상도 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-18",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "화면 해상도 문의",
    "actionTaken": "해상도 조절 완료",
    "tags": [
      "소프트웨어",
      "해상도"
    ],
    "sbar": {
      "situation": "[S] 화면 해상도 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 해상도 조절 완료 📌 연관 지식: [[해상도]]"
    },
    "wikilinks": [
      "해상도"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-71",
    "title": "IP - DNS 변경 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-22",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "DNS 변경 문의",
    "actionTaken": "DNS 배치파일 전달",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] DNS 변경 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] DNS 배치파일 전달 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-74",
    "title": "기본 프로그램 - 삼성 복합기 스캔 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-23",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "삼성 복합기 스캔 문의",
    "actionTaken": "삼성 복합기 관리자 등록 안내",
    "tags": [
      "소프트웨어",
      "복합기",
      "복합기",
      "삼성",
      "스캔"
    ],
    "sbar": {
      "situation": "[S] 삼성 복합기 스캔 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 삼성 복합기 관리자 등록 안내 📌 연관 지식: [[복합기]], [[복합기 관리자]], [[삼성]], [[스캔]]"
    },
    "wikilinks": [
      "복합기",
      "복합기 관리자",
      "삼성",
      "스캔"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-75",
    "title": "기본 프로그램 - 업무용 노트북 보안 소프트웨어 설치 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-23",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "업무용 노트북 보안 소프트웨어 설치 문의",
    "actionTaken": "보안 소프트웨어 가이드",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 업무용 노트북 보안 소프트웨어 설치 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 보안 소프트웨어 가이드"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-76",
    "title": "IP - ICT망 네트워크 연결 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-24",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "ICT망 네트워크 연결 문의",
    "actionTaken": "일시적 오류 반복 증상시 문의 요청",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] ICT망 네트워크 연결 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 일시적 오류 반복 증상시 문의 요청"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-77",
    "title": "IP - 네트워크 끊킴 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-25",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "네트워크 끊킴 문의",
    "actionTaken": "SSID 재연결 후 정상",
    "tags": [
      "네트워크",
      "SSID"
    ],
    "sbar": {
      "situation": "[S] 네트워크 끊킴 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] SSID 재연결 후 정상 📌 연관 지식: [[SSID]]"
    },
    "wikilinks": [
      "SSID"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-81",
    "title": "기본 프로그램 - 사내 메신저 패스워드 변경 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-29",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 패스워드 변경 문의",
    "actionTaken": "사내 메신저 환경설정 안내",
    "tags": [
      "소프트웨어",
      "사내 메신저",
      "워드"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 패스워드 변경 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 환경설정 안내 📌 연관 지식: [[사내 메신저]], [[워드]]"
    },
    "wikilinks": [
      "사내 메신저",
      "워드"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-83",
    "title": "기본 프로그램 - 회의실 빔프로젝트 연결 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-29",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "회의실 빔프로젝트 연결 문의",
    "actionTaken": "케이블 빠짐으로 연결 정상 작동",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 회의실 빔프로젝트 연결 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 케이블 빠짐으로 연결 정상 작동"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-85",
    "title": "기본 프로그램 - 접견실 화상회의 테스트 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-29",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "접견실 화상회의 테스트 요청",
    "actionTaken": "화상회의 점검 및 정상 작동 확인",
    "tags": [
      "소프트웨어",
      "화상회의"
    ],
    "sbar": {
      "situation": "[S] 접견실 화상회의 테스트 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 화상회의 점검 및 정상 작동 확인 📌 연관 지식: [[화상회의]]"
    },
    "wikilinks": [
      "화상회의"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-90",
    "title": "IP - 방송실 노트북 네트워크 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-30",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "방송실 노트북 네트워크 문의",
    "actionTaken": "네트워크 차단으로 전산관리자 해제 요청",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 방송실 노트북 네트워크 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 차단으로 전산관리자 해제 요청"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-91",
    "title": "기본 프로그램 - 복합기 출력 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-30",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "복합기 출력 문의",
    "actionTaken": "복합기 등록 완료",
    "tags": [
      "소프트웨어",
      "복합기"
    ],
    "sbar": {
      "situation": "[S] 복합기 출력 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 복합기 등록 완료 📌 연관 지식: [[복합기]]"
    },
    "wikilinks": [
      "복합기"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-98",
    "title": "기본 프로그램 - 26층 사내 메신저 접속 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-01",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "26층 사내 메신저 접속 문의",
    "actionTaken": "사내 메신저 고객센터 안내",
    "tags": [
      "소프트웨어",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 26층 사내 메신저 접속 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 고객센터 안내 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-106",
    "title": "드라이버 - 신도리코 복합기 출력 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "신도리코 복합기 출력 문의",
    "actionTaken": "복합기 최초등록 후 정상",
    "tags": [
      "소프트웨어",
      "드라이버",
      "복합기",
      "신도리코",
      "신도"
    ],
    "sbar": {
      "situation": "[S] 신도리코 복합기 출력 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 복합기 최초등록 후 정상 📌 연관 지식: [[복합기]], [[신도리코]], [[신도]]"
    },
    "wikilinks": [
      "복합기",
      "신도리코",
      "신도"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-107",
    "title": "기본 프로그램 - 개인프린터 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "개인프린터 문의",
    "actionTaken": "정착기 교체 예정",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 개인프린터 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 정착기 교체 예정"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-109",
    "title": "기본 프로그램 - 사내 메신저 계정 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-13",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 계정 문의",
    "actionTaken": "사내 메신저 계정 연동 안내",
    "tags": [
      "소프트웨어",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 계정 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 계정 연동 안내 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-113",
    "title": "기본 프로그램 - 26층 TF 복합기 셋팅 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-14",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "26층 TF 복합기 셋팅 문의",
    "actionTaken": "복합기 드라이버 설치",
    "tags": [
      "소프트웨어",
      "복합기"
    ],
    "sbar": {
      "situation": "[S] 26층 TF 복합기 셋팅 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 복합기 드라이버 설치 📌 연관 지식: [[복합기]]"
    },
    "wikilinks": [
      "복합기"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-116",
    "title": "PDF - PDF 안열림 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-20",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "PDF",
    "symptom": "PDF 안열림 문의",
    "actionTaken": "확장자 변경",
    "tags": [
      "소프트웨어",
      "PDF"
    ],
    "sbar": {
      "situation": "[S] PDF 안열림 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: PDF. 현장 처리 결과 검증.",
      "recommendation": "[R] 확장자 변경"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-124",
    "title": "기본 프로그램 - 복합기 최초등록 후 정상",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-26",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "복합기 최초등록 후 정상",
    "actionTaken": "복합기 최초등록 후 정상",
    "tags": [
      "소프트웨어",
      "복합기"
    ],
    "sbar": {
      "situation": "[S] 복합기 최초등록 후 정상",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 복합기 최초등록 후 정상 📌 연관 지식: [[복합기]]"
    },
    "wikilinks": [
      "복합기"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-127",
    "title": "기본 프로그램 - 신도리코 복합기 출력 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-28",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "신도리코 복합기 출력 문의",
    "actionTaken": "복합기 로그인 후 정상 출력",
    "tags": [
      "소프트웨어",
      "복합기",
      "신도리코",
      "신도"
    ],
    "sbar": {
      "situation": "[S] 신도리코 복합기 출력 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 복합기 로그인 후 정상 출력 📌 연관 지식: [[복합기]], [[신도리코]], [[신도]]"
    },
    "wikilinks": [
      "복합기",
      "신도리코",
      "신도"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-128",
    "title": "기본 프로그램 - 무선 키보드 / 마우스 페어링 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-29",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "무선 키보드 / 마우스 페어링 문의",
    "actionTaken": "페어링 연결 완료",
    "tags": [
      "소프트웨어",
      "페어링"
    ],
    "sbar": {
      "situation": "[S] 무선 키보드 / 마우스 페어링 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 페어링 연결 완료 📌 연관 지식: [[페어링]]"
    },
    "wikilinks": [
      "페어링"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.308Z",
    "updatedAt": "2026-08-07T05:08:48.308Z"
  },
  {
    "id": "seed-134",
    "title": "기본 프로그램 - 사내 메신저 로그인 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-04",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 로그인 문의",
    "actionTaken": "쿠키 삭제 및 초기화 후 정상 로그인",
    "tags": [
      "소프트웨어",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 로그인 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 쿠키 삭제 및 초기화 후 정상 로그인 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-139",
    "title": "기본 프로그램 - 망간전송 설치 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-06",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "망간전송 설치 문의",
    "actionTaken": "설치 URL 안내",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 망간전송 설치 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 설치 URL 안내"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-142",
    "title": "기본 프로그램 - 알PDF 설치 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-08",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "알PDF 설치 문의",
    "actionTaken": "알툴즈 설치 안내",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 알PDF 설치 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 알툴즈 설치 안내"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-143",
    "title": "기본 프로그램 - 자산실사 사번 입력 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-12",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "자산실사 사번 입력 문의",
    "actionTaken": "등록되지 않은 사번으로 나온다고하여 서버 등록",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 자산실사 사번 입력 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 등록되지 않은 사번으로 나온다고하여 서버 등록"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-148",
    "title": "브라우저 - 엣지 문서 다운로드 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-13",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "브라우저",
    "symptom": "엣지 문서 다운로드 문의",
    "actionTaken": "다운로드 안내",
    "tags": [
      "소프트웨어",
      "브라우저"
    ],
    "sbar": {
      "situation": "[S] 엣지 문서 다운로드 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 브라우저. 현장 처리 결과 검증.",
      "recommendation": "[R] 다운로드 안내"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-153",
    "title": "기본 프로그램 - 회의실 화상회의 줌 연결 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-14",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "회의실 화상회의 줌 연결 문의",
    "actionTaken": "화상회의 점검 및 정상 작동 확인",
    "tags": [
      "소프트웨어",
      "줌",
      "화상회의"
    ],
    "sbar": {
      "situation": "[S] 회의실 화상회의 줌 연결 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 화상회의 점검 및 정상 작동 확인 📌 연관 지식: [[줌]], [[화상회의]]"
    },
    "wikilinks": [
      "줌",
      "화상회의"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-156",
    "title": "IP - IP신청 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-18",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "IP신청 문의",
    "actionTaken": "사내 메신저 - 전자결재 안내",
    "tags": [
      "네트워크",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] IP신청 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 - 전자결재 안내 📌 연관 지식: [[IP]], [[사내 메신저]]"
    },
    "wikilinks": [
      "IP",
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-167",
    "title": "기본 프로그램 - 사내 메신저 패스워드 초기화",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-22",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 패스워드 초기화",
    "actionTaken": "업무 부서 김동욱 패스워드 초기화 안내",
    "tags": [
      "소프트웨어",
      "사내 메신저",
      "워드"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 패스워드 초기화",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 업무 부서 김동욱 패스워드 초기화 안내 📌 연관 지식: [[사내 메신저]], [[워드]]"
    },
    "wikilinks": [
      "사내 메신저",
      "워드"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-169",
    "title": "IP - 일반망 IP신청 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-27",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망 IP신청 문의",
    "actionTaken": "전산관리자 안내",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 일반망 IP신청 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 전산관리자 안내 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-171",
    "title": "기본 프로그램 - 워드문서 안열리고 깨짐 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-29",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "워드문서 안열리고 깨짐 문의",
    "actionTaken": "DRM 담당자 안내",
    "tags": [
      "소프트웨어",
      "워드"
    ],
    "sbar": {
      "situation": "[S] 워드문서 안열리고 깨짐 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] DRM 담당자 안내 📌 연관 지식: [[워드]]"
    },
    "wikilinks": [
      "워드"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-174",
    "title": "기본 프로그램 - 무선 키보드 페어링 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-01",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "무선 키보드 페어링 문의",
    "actionTaken": "키보드 페어링 완료",
    "tags": [
      "소프트웨어",
      "페어링"
    ],
    "sbar": {
      "situation": "[S] 무선 키보드 페어링 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 키보드 페어링 완료 📌 연관 지식: [[페어링]]"
    },
    "wikilinks": [
      "페어링"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-180",
    "title": "기본 프로그램 - SSl 인증서 설치 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-08",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "SSl 인증서 설치 요청",
    "actionTaken": "설치",
    "tags": [
      "소프트웨어",
      "SSL"
    ],
    "sbar": {
      "situation": "[S] SSl 인증서 설치 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 설치 📌 연관 지식: [[SSL]]"
    },
    "wikilinks": [
      "SSL"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-181",
    "title": "기본 프로그램 - DNS변경 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-08",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "DNS변경 요청",
    "actionTaken": "변경 완료",
    "tags": [
      "소프트웨어",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] DNS변경 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 변경 완료 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-185",
    "title": "기본 프로그램 - 외부메일 발송시 패스워드 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-11",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "외부메일 발송시 패스워드 문의",
    "actionTaken": "오피스 메일 첨부파일 암호화 예외 안내",
    "tags": [
      "소프트웨어",
      "오피스",
      "워드"
    ],
    "sbar": {
      "situation": "[S] 외부메일 발송시 패스워드 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 오피스 메일 첨부파일 암호화 예외 안내 📌 연관 지식: [[오피스]], [[워드]]"
    },
    "wikilinks": [
      "오피스",
      "워드"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-191",
    "title": "기본 프로그램 - 무선 마우프 페어링 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-16",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "무선 마우프 페어링 문의",
    "actionTaken": "페어링 연결 완료",
    "tags": [
      "소프트웨어",
      "페어링"
    ],
    "sbar": {
      "situation": "[S] 무선 마우프 페어링 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 페어링 연결 완료 📌 연관 지식: [[페어링]]"
    },
    "wikilinks": [
      "페어링"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-195",
    "title": "기본 프로그램 - 아웃룩 실행 안됨 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-16",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "아웃룩 실행 안됨 문의",
    "actionTaken": "아웃룩 애드인 재설치",
    "tags": [
      "소프트웨어",
      "아웃룩"
    ],
    "sbar": {
      "situation": "[S] 아웃룩 실행 안됨 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 아웃룩 애드인 재설치 📌 연관 지식: [[아웃룩]]"
    },
    "wikilinks": [
      "아웃룩"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-196",
    "title": "업데이트 - 메신져 실행 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-17",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "업데이트",
    "symptom": "메신져 실행 문의",
    "actionTaken": "사내 메신저 - 고객센터 메신져 애드인 설치",
    "tags": [
      "소프트웨어",
      "업데이트",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 메신져 실행 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 업데이트. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 - 고객센터 메신져 애드인 설치 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-206",
    "title": "기본 프로그램 - 자산실사 프로그램 실행 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-22",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "자산실사 프로그램 실행 문의",
    "actionTaken": "자산실사 등록 안내",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 자산실사 프로그램 실행 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 자산실사 등록 안내"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-207",
    "title": "라이센스 - 오피스 정품인증 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-23",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "라이센스",
    "symptom": "오피스 정품인증 문의",
    "actionTaken": "제품키 전달",
    "tags": [
      "소프트웨어",
      "라이센스",
      "오피스"
    ],
    "sbar": {
      "situation": "[S] 오피스 정품인증 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 라이센스. 현장 처리 결과 검증.",
      "recommendation": "[R] 제품키 전달 📌 연관 지식: [[오피스]]"
    },
    "wikilinks": [
      "오피스"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-218",
    "title": "기본 프로그램 - 무선 마우스 / 무선 키보드 페어링 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-30",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "무선 마우스 / 무선 키보드 페어링 문의",
    "actionTaken": "페어링 연결 완료",
    "tags": [
      "소프트웨어",
      "페어링"
    ],
    "sbar": {
      "situation": "[S] 무선 마우스 / 무선 키보드 페어링 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 페어링 연결 완료 📌 연관 지식: [[페어링]]"
    },
    "wikilinks": [
      "페어링"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-221",
    "title": "기본 프로그램 - 엑셀 파일 안열림 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05-03",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "엑셀 파일 안열림 문의",
    "actionTaken": "DRM 문제로 인한 원격지원 담당자 안내",
    "tags": [
      "소프트웨어",
      "엑셀"
    ],
    "sbar": {
      "situation": "[S] 엑셀 파일 안열림 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] DRM 문제로 인한 원격지원 담당자 안내 📌 연관 지식: [[엑셀]]"
    },
    "wikilinks": [
      "엑셀"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-225",
    "title": "기본 프로그램 - 인터넷 접속 안됨 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05-21",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "인터넷 접속 안됨 문의",
    "actionTaken": "SSL 인증서 재설치 후 정상",
    "tags": [
      "소프트웨어",
      "SSL"
    ],
    "sbar": {
      "situation": "[S] 인터넷 접속 안됨 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] SSL 인증서 재설치 후 정상 📌 연관 지식: [[SSL]]"
    },
    "wikilinks": [
      "SSL"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-227",
    "title": "기본 프로그램 - 사내 메신저 패스워드 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05-21",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 패스워드 문의",
    "actionTaken": "사내 메신저 패스워드 초기화 안내",
    "tags": [
      "소프트웨어",
      "사내 메신저",
      "워드"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 패스워드 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 패스워드 초기화 안내 📌 연관 지식: [[사내 메신저]], [[워드]]"
    },
    "wikilinks": [
      "사내 메신저",
      "워드"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.309Z",
    "updatedAt": "2026-08-07T05:08:48.309Z"
  },
  {
    "id": "seed-234",
    "title": "기본 프로그램 - MS 오피스 재설치 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06-03",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "MS 오피스 재설치 문의",
    "actionTaken": "안내 완료",
    "tags": [
      "소프트웨어",
      "오피스"
    ],
    "sbar": {
      "situation": "[S] MS 오피스 재설치 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 안내 완료 📌 연관 지식: [[오피스]]"
    },
    "wikilinks": [
      "오피스"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-237",
    "title": "데스크탑 - 데스크탑 작동 오류 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06-12",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "데스크탑 작동 오류 문의",
    "actionTaken": "안내 완료",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 데스크탑 작동 오류 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 안내 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-238",
    "title": "IP - IP문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06-12",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "IP문의",
    "actionTaken": "전산관리자 안내 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] IP문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 전산관리자 안내 완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-244",
    "title": "기본 프로그램 - 보안 설치 프로그램 노트북에 복사 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06-17",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "보안 설치 프로그램 노트북에 복사 요청",
    "actionTaken": "보안 설치 프로그램 복사",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 보안 설치 프로그램 노트북에 복사 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 보안 설치 프로그램 복사"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-248",
    "title": "OS - 윈도우 비밀번호 해제 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06-18",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "윈도우 비밀번호 해제 요청",
    "actionTaken": "조치 완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 윈도우 비밀번호 해제 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 조치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-253",
    "title": "데스크탑 - 부팅불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06-25",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "부팅불가",
    "actionTaken": "SSD 교체및 os 설치완료",
    "tags": [
      "하드웨어",
      "데스크탑",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] 부팅불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] SSD 교체및 os 설치완료 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-254",
    "title": "IP - 보안 소프트웨어 설치 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06-25",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "보안 소프트웨어 설치 문의",
    "actionTaken": "IP주소 확인 후 보안 소프트웨어설치완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 보안 소프트웨어 설치 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] IP주소 확인 후 보안 소프트웨어설치완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-260",
    "title": "기본 프로그램 - MS OFFICE 미구동",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07-03",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "MS OFFICE 미구동",
    "actionTaken": "오피스 재설치완료",
    "tags": [
      "소프트웨어",
      "오피스"
    ],
    "sbar": {
      "situation": "[S] MS OFFICE 미구동",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 오피스 재설치완료 📌 연관 지식: [[오피스]]"
    },
    "wikilinks": [
      "오피스"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-262",
    "title": "IP - 전배로인한 IP 셋팅",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07-03",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "전배로인한 IP 셋팅",
    "actionTaken": "IP 셋팅완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 전배로인한 IP 셋팅",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] IP 셋팅완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-269",
    "title": "기본 프로그램 - 사내 개발망 망간자료전송 설치주소 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07-23",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 개발망 망간자료전송 설치주소 요청",
    "actionTaken": "설치주소 전달완료",
    "tags": [
      "소프트웨어",
      "망간자료전송"
    ],
    "sbar": {
      "situation": "[S] 사내 개발망 망간자료전송 설치주소 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 설치주소 전달완료 📌 연관 지식: [[망간자료전송]], [[망간자료전송]]"
    },
    "wikilinks": [
      "망간자료전송",
      "망간자료전송"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-274",
    "title": "데스크탑 - 하드웨어 고장으로인한 수리 절차 안내",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07-24",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "하드웨어 고장으로인한 수리 절차 안내",
    "actionTaken": "절차 안내완료",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 하드웨어 고장으로인한 수리 절차 안내",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 절차 안내완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-278",
    "title": "IP - 유선네트워크 -> 무선네트워크 변경요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07-24",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "유선네트워크 -> 무선네트워크 변경요청",
    "actionTaken": "변경 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 유선네트워크 -> 무선네트워크 변경요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 변경 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-291",
    "title": "IP - IP 주소문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07-31",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "IP 주소문의",
    "actionTaken": "안내완료",
    "tags": [
      "네트워크",
      "RPA2"
    ],
    "sbar": {
      "situation": "[S] IP 주소문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 안내완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-295",
    "title": "IP - 미니PC IP주소 교체문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08-02",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "미니PC IP주소 교체문의",
    "actionTaken": "교체절차 안내완료",
    "tags": [
      "네트워크",
      "RPA2"
    ],
    "sbar": {
      "situation": "[S] 미니PC IP주소 교체문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 교체절차 안내완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-296",
    "title": "OS - 개발PC 사내 개발망 OS 설치요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08-02",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "개발PC 사내 개발망 OS 설치요청",
    "actionTaken": "설치완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 개발PC 사내 개발망 OS 설치요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-298",
    "title": "기본 프로그램 - 망간자료전송 실행안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08-06",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "망간자료전송 실행안됨",
    "actionTaken": "망간자료전송 재설치완료",
    "tags": [
      "소프트웨어",
      "망간자료전송"
    ],
    "sbar": {
      "situation": "[S] 망간자료전송 실행안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 망간자료전송 재설치완료 📌 연관 지식: [[망간자료전송]], [[망간자료전송]]"
    },
    "wikilinks": [
      "망간자료전송",
      "망간자료전송"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-302",
    "title": "OS - Win11HOME에서 PRO 교체방법 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08-09",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "Win11HOME에서 PRO 교체방법 문의",
    "actionTaken": "부서비용으로 소프트웨어 구매안내완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] Win11HOME에서 PRO 교체방법 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 부서비용으로 소프트웨어 구매안내완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-304",
    "title": "IP - 무선네트워크 -> 유선네트워크 변경요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08-26",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "무선네트워크 -> 유선네트워크 변경요청",
    "actionTaken": "변경 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 무선네트워크 -> 유선네트워크 변경요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 변경 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-310",
    "title": "드라이버 - 임원 노트북 키보드 , 마우스 블루투스 연",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09-26",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "임원 노트북 키보드 , 마우스 블루투스 연결 문의",
    "actionTaken": "블루투스 연결 완료",
    "tags": [
      "소프트웨어",
      "드라이버"
    ],
    "sbar": {
      "situation": "[S] 임원 노트북 키보드 , 마우스 블루투스 연결 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 블루투스 연결 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-311",
    "title": "기본 프로그램 - 아웃룩 메일회수및 대용량 첨부 안됨 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09-26",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "아웃룩 메일회수및 대용량 첨부 안됨 문의",
    "actionTaken": "아웃룩 애드인 재설치",
    "tags": [
      "소프트웨어",
      "아웃룩"
    ],
    "sbar": {
      "situation": "[S] 아웃룩 메일회수및 대용량 첨부 안됨 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 아웃룩 애드인 재설치 📌 연관 지식: [[아웃룩]]"
    },
    "wikilinks": [
      "아웃룩"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-317",
    "title": "기본 프로그램 - 엑셀 저장시 엑셀 팅김",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10-14",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "엑셀 저장시 엑셀 팅김",
    "actionTaken": "오피스 재설치완료",
    "tags": [
      "소프트웨어",
      "오피스",
      "엑셀"
    ],
    "sbar": {
      "situation": "[S] 엑셀 저장시 엑셀 팅김",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 오피스 재설치완료 📌 연관 지식: [[오피스]], [[엑셀]]"
    },
    "wikilinks": [
      "오피스",
      "엑셀"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-319",
    "title": "기본 프로그램 - 임직원 아웃룩 설정 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10-17",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "임직원 아웃룩 설정 문의",
    "actionTaken": "아웃룩 계정 설정 후 정상 접속 확인",
    "tags": [
      "소프트웨어",
      "아웃룩"
    ],
    "sbar": {
      "situation": "[S] 임직원 아웃룩 설정 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 아웃룩 계정 설정 후 정상 접속 확인 📌 연관 지식: [[아웃룩]]"
    },
    "wikilinks": [
      "아웃룩"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-327",
    "title": "데스크탑 - 출입 관리 PC 안켜짐",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10-25",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "출입 관리 PC 안켜짐",
    "actionTaken": "멀티콘센트및 파워케이블 재연결후 정상작동",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 출입 관리 PC 안켜짐",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 멀티콘센트및 파워케이블 재연결후 정상작동"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-329",
    "title": "기본 프로그램 - 임원 줌 실행시 오류창 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10-30",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "임원 줌 실행시 오류창 발생",
    "actionTaken": "줌 재설치 및 타 사업장 줌 테스트",
    "tags": [
      "소프트웨어",
      "줌"
    ],
    "sbar": {
      "situation": "[S] 임원 줌 실행시 오류창 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 줌 재설치 및 타 사업장 줌 테스트 📌 연관 지식: [[줌]]"
    },
    "wikilinks": [
      "줌"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-336",
    "title": "기본 프로그램 - 사내 메신저 접속 불",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "11-07",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 접속 불",
    "actionTaken": "엣지 쿠키및 저장된 데이터 삭제후 접속 확인",
    "tags": [
      "소프트웨어",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 접속 불",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 엣지 쿠키및 저장된 데이터 삭제후 접속 확인 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-342",
    "title": "기본 프로그램 - 임원 PC 줌 점검 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "11-26",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "임원 PC 줌 점검 요청",
    "actionTaken": "줌 회의 참가 및 음질, 영상 테스트 완료",
    "tags": [
      "소프트웨어",
      "줌"
    ],
    "sbar": {
      "situation": "[S] 임원 PC 줌 점검 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 줌 회의 참가 및 음질, 영상 테스트 완료 📌 연관 지식: [[줌]]"
    },
    "wikilinks": [
      "줌"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-343",
    "title": "기본 프로그램 - 사내 메신저 뷰어 ENC 파일 안열림",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "11-28",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 뷰어 ENC 파일 안열림",
    "actionTaken": "사내 메신저 뷰어 종료 후 정상적으로 열림",
    "tags": [
      "소프트웨어",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 뷰어 ENC 파일 안열림",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 뷰어 종료 후 정상적으로 열림 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-344",
    "title": "기본 프로그램 - 엑셀실행시 \"죄송합니다. 콘텐츠에 문제가 발",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "11-29",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "엑셀실행시 \"죄송합니다. 콘텐츠에 문제가 발견되었습니다.\" 메시지 뜸",
    "actionTaken": "오피스 재설치완료",
    "tags": [
      "소프트웨어",
      "오피스",
      "엑셀"
    ],
    "sbar": {
      "situation": "[S] 엑셀실행시 \"죄송합니다. 콘텐츠에 문제가 발견되었습니다.\" 메시지 뜸",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 오피스 재설치완료 📌 연관 지식: [[오피스]], [[엑셀]]"
    },
    "wikilinks": [
      "오피스",
      "엑셀"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-345",
    "title": "기본 프로그램 - 샤크라 계정 만료 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-02",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "샤크라 계정 만료 문의",
    "actionTaken": "고객센터 02-6313-3114번 이관완료",
    "tags": [
      "소프트웨어",
      "정보시스템실(ICT)"
    ],
    "sbar": {
      "situation": "[S] 샤크라 계정 만료 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 고객센터 02-6313-3114번 이관완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-346",
    "title": "기본 프로그램 - 사내 메신저및 메신저 로그인 불",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-02",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저및 메신저 로그인 불",
    "actionTaken": "사내 메신저 비밀번호 초기화후 사내 메신저, 메신저 로그인 작동 정상확인",
    "tags": [
      "소프트웨어",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저및 메신저 로그인 불",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 비밀번호 초기화후 사내 메신저, 메신저 로그인 작동 정상확인 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-347",
    "title": "기본 프로그램 - 아웃룩 계정 설정 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-03",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "아웃룩 계정 설정 요청",
    "actionTaken": "아웃룩 계정 설정 후 정상 접속 확인",
    "tags": [
      "소프트웨어",
      "아웃룩"
    ],
    "sbar": {
      "situation": "[S] 아웃룩 계정 설정 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 아웃룩 계정 설정 후 정상 접속 확인 📌 연관 지식: [[아웃룩]]"
    },
    "wikilinks": [
      "아웃룩"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-350",
    "title": "기본 프로그램 - 아웃룩 안열림",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-12",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "아웃룩 안열림",
    "actionTaken": "오피스 삭제후 재설치",
    "tags": [
      "소프트웨어",
      "아웃룩",
      "오피스"
    ],
    "sbar": {
      "situation": "[S] 아웃룩 안열림",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 오피스 삭제후 재설치 📌 연관 지식: [[아웃룩]], [[오피스]]"
    },
    "wikilinks": [
      "아웃룩",
      "오피스"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-352",
    "title": "기본 프로그램 - 오피스 엑셀 실행 불",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-12",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "오피스 엑셀 실행 불",
    "actionTaken": "오피스 삭제후 재설치",
    "tags": [
      "소프트웨어",
      "오피스",
      "엑셀"
    ],
    "sbar": {
      "situation": "[S] 오피스 엑셀 실행 불",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 오피스 삭제후 재설치 📌 연관 지식: [[오피스]], [[엑셀]]"
    },
    "wikilinks": [
      "오피스",
      "엑셀"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-353",
    "title": "기본 프로그램 - 메신저 로그인 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-13",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "메신저 로그인 안됨",
    "actionTaken": "Add-in 재설치후 정상 로그인",
    "tags": [
      "소프트웨어",
      "AD"
    ],
    "sbar": {
      "situation": "[S] 메신저 로그인 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] Add-in 재설치후 정상 로그인 📌 연관 지식: [[AD]]"
    },
    "wikilinks": [
      "AD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.310Z"
  },
  {
    "id": "seed-354",
    "title": "IP - 14층->13층 이동 후 인터넷 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-16",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "14층->13층 이동 후 인터넷 안됨",
    "actionTaken": "MAC값 ICT망 등록되어있어 WIPS 해제",
    "tags": [
      "네트워크",
      "WIPS"
    ],
    "sbar": {
      "situation": "[S] 14층->13층 이동 후 인터넷 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] MAC값 ICT망 등록되어있어 WIPS 해제 📌 연관 지식: [[WIPS]], [[IP]]"
    },
    "wikilinks": [
      "WIPS",
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.310Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-355",
    "title": "IP - 자리 이전 후 네트워크 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-16",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "자리 이전 후 네트워크 안됨",
    "actionTaken": "무선랜카드 재장착 후 네트워크 연결 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 자리 이전 후 네트워크 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 무선랜카드 재장착 후 네트워크 연결 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-356",
    "title": "IP - 조직개편 사업장 전배로 네트워크 설정 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-16",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "조직개편 사업장 전배로 네트워크 설정 요청",
    "actionTaken": "일반업무망 IP 세팅 가이드 지급",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 조직개편 사업장 전배로 네트워크 설정 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 일반업무망 IP 세팅 가이드 지급 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-357",
    "title": "기본 프로그램 - 보증보험 발급 신청 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-16",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "보증보험 발급 신청 문의",
    "actionTaken": "엣지 IE 모드 설정후 정상로그인",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 보증보험 발급 신청 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 엣지 IE 모드 설정후 정상로그인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-358",
    "title": "기본 프로그램 - 사번 변경으로 인한 메일 백업문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-16",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사번 변경으로 인한 메일 백업문의",
    "actionTaken": "사내 메신저 메일 백업후 아웃룩 복원 안내",
    "tags": [
      "소프트웨어",
      "아웃룩",
      "사내 메신저",
      "백업"
    ],
    "sbar": {
      "situation": "[S] 사번 변경으로 인한 메일 백업문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 메일 백업후 아웃룩 복원 안내 📌 연관 지식: [[아웃룩]], [[사내 메신저]], [[백업]]"
    },
    "wikilinks": [
      "아웃룩",
      "사내 메신저",
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-359",
    "title": "기본 프로그램 - 경비전산 시스템 접속 불",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-16",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "경비전산 시스템 접속 불",
    "actionTaken": "엣지 IE 모드 설정후 정상로그인",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 경비전산 시스템 접속 불",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 엣지 IE 모드 설정후 정상로그인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-361",
    "title": "IP - 네트워크 연결 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12-20",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "네트워크 연결 안됨",
    "actionTaken": "구형 DNS 삭제후 신규 DNS 입력 완료",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] 네트워크 연결 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 구형 DNS 삭제후 신규 DNS 입력 완료 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-371",
    "title": "기본 프로그램 - PDF 안열림 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-02",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "PDF 안열림 문의",
    "actionTaken": "한 PDF 연결 등록 안내",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] PDF 안열림 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 한 PDF 연결 등록 안내"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-372",
    "title": "드라이버 - 프린터 출력 불",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-03",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "프린터 출력 불",
    "actionTaken": "복합기 드라이버 삭제후 재설치",
    "tags": [
      "소프트웨어",
      "드라이버",
      "복합기"
    ],
    "sbar": {
      "situation": "[S] 프린터 출력 불",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 복합기 드라이버 삭제후 재설치 📌 연관 지식: [[복합기]]"
    },
    "wikilinks": [
      "복합기"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-378",
    "title": "기본 프로그램 - 아웃룩 메일 인증하라고 계속 뜸",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-14",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "아웃룩 메일 인증하라고 계속 뜸",
    "actionTaken": "아웃룩 메일 인증 완료",
    "tags": [
      "소프트웨어",
      "아웃룩"
    ],
    "sbar": {
      "situation": "[S] 아웃룩 메일 인증하라고 계속 뜸",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 아웃룩 메일 인증 완료 📌 연관 지식: [[아웃룩]]"
    },
    "wikilinks": [
      "아웃룩"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-379",
    "title": "기본 프로그램 - 엣지 다운 증상",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-14",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "엣지 다운 증상",
    "actionTaken": "엣지 설정 초기화",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 엣지 다운 증상",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 엣지 설정 초기화"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-380",
    "title": "기본 프로그램 - 스캔 불",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-14",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "스캔 불",
    "actionTaken": "삼성 복합기 관리자 스캔 설정 완료",
    "tags": [
      "소프트웨어",
      "복합기",
      "삼성",
      "스캔"
    ],
    "sbar": {
      "situation": "[S] 스캔 불",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 삼성 복합기 관리자 스캔 설정 완료 📌 연관 지식: [[복합기 관리자]], [[삼성]], [[스캔]]"
    },
    "wikilinks": [
      "복합기 관리자",
      "삼성",
      "스캔"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-381",
    "title": "브라우저 - 사내 메신저 접속 불",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-14",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "브라우저",
    "symptom": "사내 메신저 접속 불",
    "actionTaken": "엣지 초기화후 정상작동",
    "tags": [
      "소프트웨어",
      "브라우저",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 접속 불",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 브라우저. 현장 처리 결과 검증.",
      "recommendation": "[R] 엣지 초기화후 정상작동 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-382",
    "title": "브라우저 - 사내 메신저 인사, 경비정산 탭 접속 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-15",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "브라우저",
    "symptom": "사내 메신저 인사, 경비정산 탭 접속 안됨",
    "actionTaken": "윈도우 업데이트 후 정상 접속 확인",
    "tags": [
      "소프트웨어",
      "브라우저",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 인사, 경비정산 탭 접속 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 브라우저. 현장 처리 결과 검증.",
      "recommendation": "[R] 윈도우 업데이트 후 정상 접속 확인 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-383",
    "title": "기본 프로그램 - 자산실사 업데이트 사번 미등록",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01-17",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "자산실사 업데이트 사번 미등록",
    "actionTaken": "김균우 주임께 아웃룩 메일로 등록 요청 안내",
    "tags": [
      "소프트웨어",
      "아웃룩"
    ],
    "sbar": {
      "situation": "[S] 자산실사 업데이트 사번 미등록",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 김균우 주임께 아웃룩 메일로 등록 요청 안내 📌 연관 지식: [[아웃룩]]"
    },
    "wikilinks": [
      "아웃룩"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-391",
    "title": "기본 프로그램 - 아웃룩 사서함 메일 꽉참",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-10",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "아웃룩 사서함 메일 꽉참",
    "actionTaken": "메일백업후 사서함 정리 안내",
    "tags": [
      "소프트웨어",
      "아웃룩",
      "백업"
    ],
    "sbar": {
      "situation": "[S] 아웃룩 사서함 메일 꽉참",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 메일백업후 사서함 정리 안내 📌 연관 지식: [[아웃룩]], [[백업]]"
    },
    "wikilinks": [
      "아웃룩",
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-396",
    "title": "기본 프로그램 - 엣지 재설치 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-11",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "엣지 재설치 문의",
    "actionTaken": "엣지 삭제후 재설치",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 엣지 재설치 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 엣지 삭제후 재설치"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-397",
    "title": "IP - IP 설정 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-12",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "IP 설정 문의",
    "actionTaken": "IP 셋팅완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] IP 설정 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] IP 셋팅완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-403",
    "title": "기본 프로그램 - 닷넷프레임 3.5 설치 불",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-19",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "닷넷프레임 3.5 설치 불",
    "actionTaken": ".NET Framework 3.5(.NET 2.0 및 3.0 포함) 설치후 정상작동",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 닷넷프레임 3.5 설치 불",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] .NET Framework 3.5(.NET 2.0 및 3.0 포함) 설치후 정상작동"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-406",
    "title": "드라이버 - CAD 파일 안보임",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-20",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "CAD 파일 안보임",
    "actionTaken": "그래픽카드 드라이버 삭제후 재설치및 해상도 변경",
    "tags": [
      "소프트웨어",
      "드라이버",
      "AD",
      "해상도"
    ],
    "sbar": {
      "situation": "[S] CAD 파일 안보임",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 그래픽카드 드라이버 삭제후 재설치및 해상도 변경 📌 연관 지식: [[AD]], [[해상도]]"
    },
    "wikilinks": [
      "AD",
      "해상도"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-409",
    "title": "OS - PC 멈춤문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02-27",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "PC 멈춤문의",
    "actionTaken": "램테스트 실시후 윈도우 최적화",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] PC 멈춤문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 램테스트 실시후 윈도우 최적화"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-415",
    "title": "기본 프로그램 - 사내 메신저 접속안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-10",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 접속안됨",
    "actionTaken": "엣지 초기화후 정상작동",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 접속안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 엣지 초기화후 정상작동"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-421",
    "title": "드라이버 - 회의실 복합기 연결 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-17",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "회의실 복합기 연결 요청",
    "actionTaken": "회의실 복합기 연결",
    "tags": [
      "소프트웨어",
      "드라이버",
      "복합기"
    ],
    "sbar": {
      "situation": "[S] 회의실 복합기 연결 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 회의실 복합기 연결 📌 연관 지식: [[복합기]]"
    },
    "wikilinks": [
      "복합기"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-422",
    "title": "드라이버 - 스캔 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-18",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "스캔 안됨",
    "actionTaken": "스캐 드라이버 삭제후 재설치",
    "tags": [
      "소프트웨어",
      "드라이버",
      "스캔"
    ],
    "sbar": {
      "situation": "[S] 스캔 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 스캐 드라이버 삭제후 재설치 📌 연관 지식: [[스캔]]"
    },
    "wikilinks": [
      "스캔"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.311Z",
    "updatedAt": "2026-08-07T05:08:48.311Z"
  },
  {
    "id": "seed-426",
    "title": "기본 프로그램 - 아웃룩 메일 발송 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-20",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "아웃룩 메일 발송 안됨",
    "actionTaken": "아웃룩 사서함 메일 정리후 담당자 안내",
    "tags": [
      "소프트웨어",
      "아웃룩"
    ],
    "sbar": {
      "situation": "[S] 아웃룩 메일 발송 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 아웃룩 사서함 메일 정리후 담당자 안내 📌 연관 지식: [[아웃룩]]"
    },
    "wikilinks": [
      "아웃룩"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-429",
    "title": "IP - 일반망 접속 불",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-25",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망 접속 불",
    "actionTaken": "랜카드 드라이버 설치후 IP 주소 재설정",
    "tags": [
      "네트워크",
      "정보시스템실(ICT)"
    ],
    "sbar": {
      "situation": "[S] 일반망 접속 불",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 랜카드 드라이버 설치후 IP 주소 재설정 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-431",
    "title": "기본 프로그램 - 사내 메신저 비번 틀림",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-25",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 비번 틀림",
    "actionTaken": "사내 메신저 비번 초기화 설정 안내",
    "tags": [
      "소프트웨어",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 비번 틀림",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 비번 초기화 설정 안내 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-432",
    "title": "기본 프로그램 - 사내 메신저 임직원 검색 정보 안보임",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-27",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 임직원 검색 정보 안보임",
    "actionTaken": "엣지 브라우저 초기화후 업데이트",
    "tags": [
      "소프트웨어",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 임직원 검색 정보 안보임",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 엣지 브라우저 초기화후 업데이트 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-437",
    "title": "IP - 사내 개발망 IP신청 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03-31",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "사내 개발망 IP신청 문의",
    "actionTaken": "사내 메신저 - 전자결재 안내",
    "tags": [
      "네트워크",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 사내 개발망 IP신청 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 - 전자결재 안내 📌 연관 지식: [[IP]], [[사내 메신저]]"
    },
    "wikilinks": [
      "IP",
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-439",
    "title": "기본 프로그램 - 엣지 IE 모드 접속후 ACTIVE-X 설치",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-01",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "엣지 IE 모드 접속후 ACTIVE-X 설치안됨",
    "actionTaken": "엣지 IE 모드 설정후 ACTIVE-X 설치완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 엣지 IE 모드 접속후 ACTIVE-X 설치안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 엣지 IE 모드 설정후 ACTIVE-X 설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-440",
    "title": "기본 프로그램 - 사내 메신저 첨부파일 안열림",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-01",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 첨부파일 안열림",
    "actionTaken": "엣지 초기화후 정상작동",
    "tags": [
      "소프트웨어",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 첨부파일 안열림",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 엣지 초기화후 정상작동 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-442",
    "title": "데스크탑 - 램증설 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-01",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "램증설 문의",
    "actionTaken": "램종류 확인후 증설 안내",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 램증설 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 램종류 확인후 증설 안내"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-443",
    "title": "IP - 사내 개발망 연결 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-02",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "사내 개발망 연결 문의",
    "actionTaken": "전산관리자 IP신청안내",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 사내 개발망 연결 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 전산관리자 IP신청안내 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-446",
    "title": "기본 프로그램 - 안전환경 접속 불",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04-10",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "안전환경 접속 불",
    "actionTaken": "안전환경",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 안전환경 접속 불",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 안전환경"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-451",
    "title": "브라우저 - 국방전자조달시스템",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06-26",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "브라우저",
    "symptom": "국방전자조달시스템",
    "actionTaken": "파일 비교 실수로 정상파일 선택 후 정상 진본성파일 오류 해결",
    "tags": [
      "소프트웨어",
      "브라우저"
    ],
    "sbar": {
      "situation": "[S] 국방전자조달시스템",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 브라우저. 현장 처리 결과 검증.",
      "recommendation": "[R] 파일 비교 실수로 정상파일 선택 후 정상 진본성파일 오류 해결"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-452",
    "title": "기본 프로그램 - 엑셀 ACL 모드 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06-26",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "엑셀 ACL 모드 오류",
    "actionTaken": "문서보안(DRM) 에러로 SAFE 모드 안내",
    "tags": [
      "소프트웨어",
      "DRM",
      "엑셀"
    ],
    "sbar": {
      "situation": "[S] 엑셀 ACL 모드 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 문서보안(DRM) 에러로 SAFE 모드 안내 📌 연관 지식: [[문서보안(DRM)]], [[엑셀]]"
    },
    "wikilinks": [
      "문서보안(DRM)",
      "엑셀"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-453",
    "title": "IP - 사내 개발망 접속오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06-27",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "사내 개발망 접속오류",
    "actionTaken": "아이피 기한 만료로 새로 발급",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 사내 개발망 접속오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 아이피 기한 만료로 새로 발급"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-455",
    "title": "기본 프로그램 - 보안 소프트웨어 설치 지원",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06-27",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "보안 소프트웨어 설치 지원",
    "actionTaken": "보안 소프트웨어 설치 안내",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 보안 소프트웨어 설치 지원",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 보안 소프트웨어 설치 안내"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-456",
    "title": "기본 프로그램 - 프린트 설정",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06-27",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "프린트 설정",
    "actionTaken": "스캔 설정",
    "tags": [
      "소프트웨어",
      "스캔"
    ],
    "sbar": {
      "situation": "[S] 프린트 설정",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 스캔 설정 📌 연관 지식: [[스캔]]"
    },
    "wikilinks": [
      "스캔"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-464",
    "title": "기본 프로그램 - 기본 프로그램 설치 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07-10",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "기본 프로그램 설치 문의",
    "actionTaken": "기본프로그램 설치 완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 기본 프로그램 설치 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 기본프로그램 설치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-465",
    "title": "기본 프로그램 - 신규 PC로 자료 이전",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07-10",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "신규 PC로 자료 이전",
    "actionTaken": "자료 이전 완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 신규 PC로 자료 이전",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 자료 이전 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-466",
    "title": "기본 프로그램 - 기존 PC 자료 이전",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07-18",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "기존 PC 자료 이전",
    "actionTaken": "기존 PC 자료 이전 완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 기존 PC 자료 이전",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 기존 PC 자료 이전 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-467",
    "title": "기본 프로그램 - 스캔 설정 문읩",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07-18",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "스캔 설정 문읩",
    "actionTaken": "스캔 설정 완료",
    "tags": [
      "소프트웨어",
      "스캔"
    ],
    "sbar": {
      "situation": "[S] 스캔 설정 문읩",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 스캔 설정 완료 📌 연관 지식: [[스캔]]"
    },
    "wikilinks": [
      "스캔"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-468",
    "title": "기본 프로그램 - 한글 설치 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07-21",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "한글 설치 문의",
    "actionTaken": "한글 설치 완료",
    "tags": [
      "소프트웨어",
      "한글"
    ],
    "sbar": {
      "situation": "[S] 한글 설치 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 한글 설치 완료 📌 연관 지식: [[한글]]"
    },
    "wikilinks": [
      "한글"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-476",
    "title": "데스크탑 - 개발용PC PCI모듈점검",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/05(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "개발용PC PCI모듈점검",
    "actionTaken": "PC 분해후 점검완료",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 개발용PC PCI모듈점검",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] PC 분해후 점검완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-497",
    "title": "데스크탑 - WIFI 안잡힘",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/13(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "WIFI 안잡힘",
    "actionTaken": "무선랜카드 교체완료",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] WIFI 안잡힘",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 무선랜카드 교체완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-498",
    "title": "데스크탑 - PC 탄냄새남",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/13(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "PC 탄냄새남",
    "actionTaken": "파워서플라이 교체완료",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] PC 탄냄새남",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 파워서플라이 교체완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-499",
    "title": "드라이버 - 프린터 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/13(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "프린터 안됨",
    "actionTaken": "프린터 ID 재설정완료",
    "tags": [
      "소프트웨어",
      "드라이버"
    ],
    "sbar": {
      "situation": "[S] 프린터 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 프린터 ID 재설정완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-505",
    "title": "OS - PC 로그인 계정 잠금현상 처리 및 무선네트",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/15(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "PC 로그인 계정 잠금현상 처리 및 무선네트워크 설정",
    "actionTaken": "계정잠금해제완료, IP 설정완료",
    "tags": [
      "소프트웨어",
      "OS",
      "RPA"
    ],
    "sbar": {
      "situation": "[S] PC 로그인 계정 잠금현상 처리 및 무선네트워크 설정",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 계정잠금해제완료, IP 설정완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-506",
    "title": "OS - 내부 보안망 교체",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/15(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "내부 보안망 교체",
    "actionTaken": "보안 소프트웨어 셋팅완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 교체",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 보안 소프트웨어 셋팅완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-508",
    "title": "기본 프로그램 - 엑셀 사른이름저장안됨/SAP 설치요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/15(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "엑셀 사른이름저장안됨/SAP 설치요청",
    "actionTaken": "오피스재설치완료, SAP 설치완료",
    "tags": [
      "소프트웨어",
      "오피스",
      "엑셀"
    ],
    "sbar": {
      "situation": "[S] 엑셀 사른이름저장안됨/SAP 설치요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 오피스재설치완료, SAP 설치완료 📌 연관 지식: [[오피스]], [[엑셀]]"
    },
    "wikilinks": [
      "오피스",
      "엑셀"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-509",
    "title": "기본 프로그램 - 메신저 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/15(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "메신저 오류",
    "actionTaken": "메신저 재설치완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 메신저 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 메신저 재설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-510",
    "title": "기본 프로그램 - 문서보안(DRM) 로그인 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/16(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "문서보안(DRM) 로그인 불가",
    "actionTaken": "PC 재부팅완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 문서보안(DRM) 로그인 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] PC 재부팅완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-516",
    "title": "IP - 내부 보안망PC 네트워크 연결불량",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/20(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망PC 네트워크 연결불량",
    "actionTaken": "IP 다중MAC 연결 확인 후 IP초기화 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 네트워크 연결불량",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] IP 다중MAC 연결 확인 후 IP초기화 완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-518",
    "title": "라이센스 - 내부 보안망PC 윈도우 라이선스 인증오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/20(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "라이센스",
    "symptom": "내부 보안망PC 윈도우 라이선스 인증오류",
    "actionTaken": "내부 보안망PC 네트워크 연결후 인증상태 확인",
    "tags": [
      "소프트웨어",
      "라이센스"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 윈도우 라이선스 인증오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 라이센스. 현장 처리 결과 검증.",
      "recommendation": "[R] 내부 보안망PC 네트워크 연결후 인증상태 확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-526",
    "title": "IP - 일반망PC 네트워크 연결상태불량",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/22(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망PC 네트워크 연결상태불량",
    "actionTaken": "일반망 고정IP 입스 등록 여부 및 IP 초기화 요청 및 네트워크 설정 초기화 작업완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 일반망PC 네트워크 연결상태불량",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 일반망 고정IP 입스 등록 여부 및 IP 초기화 요청 및 네트워크 설정 초기화 작업완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-527",
    "title": "기본 프로그램 - 한글파일 실행불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/22(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "한글파일 실행불가",
    "actionTaken": "한글오피스 재설치 후 정상확인",
    "tags": [
      "소프트웨어",
      "오피스",
      "한글"
    ],
    "sbar": {
      "situation": "[S] 한글파일 실행불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 한글오피스 재설치 후 정상확인 📌 연관 지식: [[오피스]], [[한글]]"
    },
    "wikilinks": [
      "오피스",
      "한글"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-545",
    "title": "IP - 네트워크 접속 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/06(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "네트워크 접속 불가",
    "actionTaken": "이전 DNS서버 사용중으로 변경완료",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] 네트워크 접속 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 이전 DNS서버 사용중으로 변경완료 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.312Z",
    "updatedAt": "2026-08-07T05:08:48.312Z"
  },
  {
    "id": "seed-556",
    "title": "IP - 내부 보안망PC 네트워트 어뎁터 인식불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/07(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망PC 네트워트 어뎁터 인식불가",
    "actionTaken": "보안 솔루션 IP설정차단기능으로 드라이버 표출불가 확인 후 네트워크 재연결완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 네트워트 어뎁터 인식불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 보안 솔루션 IP설정차단기능으로 드라이버 표출불가 확인 후 네트워크 재연결완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.313Z",
    "updatedAt": "2026-08-07T05:08:48.313Z"
  },
  {
    "id": "seed-576",
    "title": "IP - 내부 보안망 네트워크 접속오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/14(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망 네트워크 접속오류",
    "actionTaken": "네트워크어뎁터 재연결후 IP세팅 초기화",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 네트워크 접속오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크어뎁터 재연결후 IP세팅 초기화 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.313Z",
    "updatedAt": "2026-08-07T05:08:48.313Z"
  },
  {
    "id": "seed-591",
    "title": "백업 - 퇴사자PC내의 자료 백업요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/25(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "백업",
    "symptom": "퇴사자PC내의 자료 백업요청",
    "actionTaken": "내부 보안망 백업용 외장하드 대여완료",
    "tags": [
      "하드웨어",
      "백업"
    ],
    "sbar": {
      "situation": "[S] 퇴사자PC내의 자료 백업요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] 내부 보안망 백업용 외장하드 대여완료 📌 연관 지식: [[백업]]"
    },
    "wikilinks": [
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.313Z",
    "updatedAt": "2026-08-07T05:08:48.313Z"
  },
  {
    "id": "seed-592",
    "title": "라이센스 - MS오피스 제품인증 불가 및 Teams 로그",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/25(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "라이센스",
    "symptom": "MS오피스 제품인증 불가 및 Teams 로그인 불가",
    "actionTaken": "pc 재부팅 및 메신저프로그램 업데이트 후 정상동작 완료",
    "tags": [
      "소프트웨어",
      "라이센스",
      "오피스"
    ],
    "sbar": {
      "situation": "[S] MS오피스 제품인증 불가 및 Teams 로그인 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 라이센스. 현장 처리 결과 검증.",
      "recommendation": "[R] pc 재부팅 및 메신저프로그램 업데이트 후 정상동작 완료 📌 연관 지식: [[오피스]]"
    },
    "wikilinks": [
      "오피스"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.313Z",
    "updatedAt": "2026-08-07T05:08:48.313Z"
  },
  {
    "id": "seed-601",
    "title": "데스크탑 - PC RAM규격 확인 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/04(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "PC RAM규격 확인 요청",
    "actionTaken": "규격 확인 완료",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] PC RAM규격 확인 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 규격 확인 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.313Z",
    "updatedAt": "2026-08-07T05:08:48.313Z"
  },
  {
    "id": "seed-604",
    "title": "OS - 협력업체 PC OS설치 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/04(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "협력업체 PC OS설치 요청",
    "actionTaken": "OS설치 완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 협력업체 PC OS설치 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS설치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.313Z",
    "updatedAt": "2026-08-07T05:08:48.313Z"
  },
  {
    "id": "seed-608",
    "title": "데스크탑 - RAM,SSD 추가 장착 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/08(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "RAM,SSD 추가 장착 요청",
    "actionTaken": "추가 장착 완료",
    "tags": [
      "하드웨어",
      "데스크탑",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] RAM,SSD 추가 장착 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 추가 장착 완료 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-613",
    "title": "데스크탑 - 전원 인가시 PC화면 표출 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/08(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "전원 인가시 PC화면 표출 안됨",
    "actionTaken": "램불량으로 테스트후 조치 완료",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 전원 인가시 PC화면 표출 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 램불량으로 테스트후 조치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-614",
    "title": "데스크탑 - 부팅 및 보안 소프트웨어 설치시 블루스크린 표출",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/08(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "부팅 및 보안 소프트웨어 설치시 블루스크린 표출",
    "actionTaken": "랜카드 교체후 조치완료",
    "tags": [
      "하드웨어",
      "데스크탑",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 부팅 및 보안 소프트웨어 설치시 블루스크린 표출",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 랜카드 교체후 조치완료 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-616",
    "title": "IP - DNS서버 변경 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/09(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "DNS서버 변경 요청",
    "actionTaken": "DNS 수동변경완료",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] DNS서버 변경 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] DNS 수동변경완료 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-620",
    "title": "IP - DNS 서버 변경 배치파일 공유",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/11(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "DNS 서버 변경 배치파일 공유",
    "actionTaken": "최신버전 배치파일 공유 완료",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] DNS 서버 변경 배치파일 공유",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 최신버전 배치파일 공유 완료 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-621",
    "title": "IP - DNS 서버 변경관련 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/11(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "DNS 서버 변경관련 문의",
    "actionTaken": "최신버전 배치파일 공유 후 DNS서버 변경 확인",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] DNS 서버 변경관련 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 최신버전 배치파일 공유 후 DNS서버 변경 확인 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-623",
    "title": "백업 - SSD 복구 데이터 이동요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/15(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "백업",
    "symptom": "SSD 복구 데이터 이동요청",
    "actionTaken": "해당 SSD자료 이관완료",
    "tags": [
      "하드웨어",
      "백업",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] SSD 복구 데이터 이동요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] 해당 SSD자료 이관완료 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-624",
    "title": "IP - 일반망 인터넷 간헐적 끊김 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/15(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망 인터넷 간헐적 끊김 발생",
    "actionTaken": "네트워크 어뎁터 초기화 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 일반망 인터넷 간헐적 끊김 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 어뎁터 초기화 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-626",
    "title": "IP - DNS 서버 변경 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/15(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "DNS 서버 변경 요청",
    "actionTaken": "DNS 수동변경완료",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] DNS 서버 변경 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] DNS 수동변경완료 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-629",
    "title": "기본 프로그램 - 오피스 전체 복사 붙여넣기 기능 불량",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/17(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "오피스 전체 복사 붙여넣기 기능 불량",
    "actionTaken": "오피스 재설치 완료",
    "tags": [
      "소프트웨어",
      "오피스"
    ],
    "sbar": {
      "situation": "[S] 오피스 전체 복사 붙여넣기 기능 불량",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 오피스 재설치 완료 📌 연관 지식: [[오피스]]"
    },
    "wikilinks": [
      "오피스"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-631",
    "title": "IP - 외부 사업장 반출 일반망pc 네트워크 연결 요",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/17(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "외부 사업장 반출 일반망pc 네트워크 연결 요청",
    "actionTaken": "임시IP 확인후 네트워크 설정 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 외부 사업장 반출 일반망pc 네트워크 연결 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 임시IP 확인후 네트워크 설정 완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-639",
    "title": "OS - 내부 보안망 PC 로그인 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/18(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "내부 보안망 PC 로그인 오류",
    "actionTaken": "기존암호 초기화 및 새암호 변경완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 PC 로그인 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 기존암호 초기화 및 새암호 변경완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-641",
    "title": "드라이버 - 일반망 스캐너 등록",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/18(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "일반망 스캐너 등록",
    "actionTaken": "복합기 관리자 사무기기 연결 완료 및 출력확인",
    "tags": [
      "소프트웨어",
      "드라이버",
      "복합기"
    ],
    "sbar": {
      "situation": "[S] 일반망 스캐너 등록",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 복합기 관리자 사무기기 연결 완료 및 출력확인 📌 연관 지식: [[복합기 관리자]]"
    },
    "wikilinks": [
      "복합기 관리자"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-643",
    "title": "IP - 내부 보안망PC 네트워크 연결 불량",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/18(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망PC 네트워크 연결 불량",
    "actionTaken": "랜 어뎁터 접촉불량으로 재연결 성공",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 네트워크 연결 불량",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 랜 어뎁터 접촉불량으로 재연결 성공"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-644",
    "title": "라이센스 - Visual studio 2019 설치안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/18(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "라이센스",
    "symptom": "Visual studio 2019 설치안됨",
    "actionTaken": "평가판 삭제후 설지완료",
    "tags": [
      "소프트웨어",
      "라이센스"
    ],
    "sbar": {
      "situation": "[S] Visual studio 2019 설치안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 라이센스. 현장 처리 결과 검증.",
      "recommendation": "[R] 평가판 삭제후 설지완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-653",
    "title": "IP - 일반망PC 네트워크 접속오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/22(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망PC 네트워크 접속오류",
    "actionTaken": "장기 미사용으로 IP차단 확인 후 해제 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 일반망PC 네트워크 접속오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 장기 미사용으로 IP차단 확인 후 해제 완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-654",
    "title": "IP - 일반망PC DNS서버 변경 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/22(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망PC DNS서버 변경 오류",
    "actionTaken": "DNS 수동변경완료",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] 일반망PC DNS서버 변경 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] DNS 수동변경완료 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-655",
    "title": "데스크탑 - 내부 보안망 PC 부팅오류 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/22(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "내부 보안망 PC 부팅오류 발생",
    "actionTaken": "SSD 문제로 복구업체 안내완료",
    "tags": [
      "하드웨어",
      "데스크탑",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 PC 부팅오류 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] SSD 문제로 복구업체 안내완료 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-656",
    "title": "OS - 내부 보안망 연결불가 및 내부 보안망 프로그램 설치 요",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/22(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "내부 보안망 연결불가 및 내부 보안망 프로그램 설치 요청",
    "actionTaken": "OS 재설치 완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 연결불가 및 내부 보안망 프로그램 설치 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 재설치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-659",
    "title": "기본 프로그램 - 사내 개발망 한글2018 프로그램 설치문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/23(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 개발망 한글2018 프로그램 설치문의",
    "actionTaken": "내부 보안망 아웃록으로 설치파일 분활압축하여 전송완료",
    "tags": [
      "소프트웨어",
      "한글"
    ],
    "sbar": {
      "situation": "[S] 사내 개발망 한글2018 프로그램 설치문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 내부 보안망 아웃록으로 설치파일 분활압축하여 전송완료 📌 연관 지식: [[한글]]"
    },
    "wikilinks": [
      "한글"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-662",
    "title": "OS - 그룹웨어 접속 외에 외부 인터넷안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/23(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "그룹웨어 접속 외에 외부 인터넷안됨",
    "actionTaken": "SSL 인증서 설치안내완료",
    "tags": [
      "소프트웨어",
      "OS",
      "SSL"
    ],
    "sbar": {
      "situation": "[S] 그룹웨어 접속 외에 외부 인터넷안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] SSL 인증서 설치안내완료 📌 연관 지식: [[SSL]]"
    },
    "wikilinks": [
      "SSL"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-666",
    "title": "IP - 망연계 시스템 로그인 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/23(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "망연계 시스템 로그인 안됨",
    "actionTaken": "무선드라이버 재설치 후 정상작동확인완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 망연계 시스템 로그인 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 무선드라이버 재설치 후 정상작동확인완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-676",
    "title": "기본 프로그램 - 아웃록 대용량첨부 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/24(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "아웃록 대용량첨부 안됨",
    "actionTaken": "아웃록 애딩 재설치안내완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 아웃록 대용량첨부 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 아웃록 애딩 재설치안내완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-679",
    "title": "IP - 일반망pc 네트워크 세팅요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/24(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망pc 네트워크 세팅요청",
    "actionTaken": "네트워크 어뎁터 설정 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 일반망pc 네트워크 세팅요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 어뎁터 설정 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-681",
    "title": "유지보수 - 무선랜카드 네트워크 접속",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/25(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "유지보수",
    "symptom": "무선랜카드 네트워크 접속",
    "actionTaken": "랜카드 변경 및 IP셋팅완료",
    "tags": [
      "하드웨어",
      "유지보수"
    ],
    "sbar": {
      "situation": "[S] 무선랜카드 네트워크 접속",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 유지보수. 현장 처리 결과 검증.",
      "recommendation": "[R] 랜카드 변경 및 IP셋팅완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-682",
    "title": "OS - 공유폴더 셋팅안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/25(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "공유폴더 셋팅안됨",
    "actionTaken": "연구소PC지원 이관완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 공유폴더 셋팅안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 연구소PC지원 이관완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-684",
    "title": "IP - 일반망 네트워크 접속안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/25(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망 네트워크 접속안됨",
    "actionTaken": "IP 다중MAC 연결 확인 후 IP초기화 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 일반망 네트워크 접속안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] IP 다중MAC 연결 확인 후 IP초기화 완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-687",
    "title": "라이센스 - 개발PC 알집프로그램 설치문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/26(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "라이센스",
    "symptom": "개발PC 알집프로그램 설치문의",
    "actionTaken": "사내망 외에 소프트웨어 사용신청서 상신절차안내완료",
    "tags": [
      "소프트웨어",
      "라이센스"
    ],
    "sbar": {
      "situation": "[S] 개발PC 알집프로그램 설치문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 라이센스. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내망 외에 소프트웨어 사용신청서 상신절차안내완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-690",
    "title": "브라우저 - 사내 메신저 결재서류 뷰어 프로그램 설치문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/26(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "브라우저",
    "symptom": "사내 메신저 결재서류 뷰어 프로그램 설치문의",
    "actionTaken": "경로 안내완료",
    "tags": [
      "소프트웨어",
      "브라우저"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 결재서류 뷰어 프로그램 설치문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 브라우저. 현장 처리 결과 검증.",
      "recommendation": "[R] 경로 안내완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-692",
    "title": "OS - AD계정 로그인안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/26(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "AD계정 로그인안됨",
    "actionTaken": "AD 담당자 이관완료",
    "tags": [
      "소프트웨어",
      "OS",
      "AD"
    ],
    "sbar": {
      "situation": "[S] AD계정 로그인안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] AD 담당자 이관완료 📌 연관 지식: [[AD]]"
    },
    "wikilinks": [
      "AD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-699",
    "title": "IP - 사내 개발망 개발PC 네트워크 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/26(금)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "사내 개발망 개발PC 네트워크 안됨",
    "actionTaken": "랜선 연결 확인후 테스트완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 사내 개발망 개발PC 네트워크 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 랜선 연결 확인후 테스트완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-704",
    "title": "OS - 윈도우비밀번호 로그인안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/29(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "윈도우비밀번호 로그인안됨",
    "actionTaken": "사내 메신저 비밀번호로 로그인완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 윈도우비밀번호 로그인안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 비밀번호로 로그인완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-710",
    "title": "OS - 사내 메신저 로그인안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/29(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "사내 메신저 로그인안됨",
    "actionTaken": "와이파이 재접속 후 정상작동확인완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 로그인안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 와이파이 재접속 후 정상작동확인완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-713",
    "title": "OS - 윈도우11 라이선스 제공요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/29(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "윈도우11 라이선스 제공요청",
    "actionTaken": "라이선스 구매안내완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 윈도우11 라이선스 제공요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 라이선스 구매안내완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-714",
    "title": "OS - HTTPS:// 접속안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/29(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "HTTPS:// 접속안됨",
    "actionTaken": "로컬계정 생성 후 정상작동확인완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] HTTPS:// 접속안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 로컬계정 생성 후 정상작동확인완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-722",
    "title": "OS - 부서에서 구매한 PC WINDOWS, 필수프",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/30(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "부서에서 구매한 PC WINDOWS, 필수프로그램 설치 절차 문의",
    "actionTaken": "절차 설명안내완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 부서에서 구매한 PC WINDOWS, 필수프로그램 설치 절차 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 절차 설명안내완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-723",
    "title": "기본 프로그램 - 큐브락 사용자인증 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/30(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "큐브락 사용자인증 안됨",
    "actionTaken": "큐브락 사용자 정보 안내완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 큐브락 사용자인증 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 큐브락 사용자 정보 안내완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-727",
    "title": "OS - 일반업무망 WIFI 정보 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/30(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "일반업무망 WIFI 정보 요청",
    "actionTaken": "정보안내완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 일반업무망 WIFI 정보 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 정보안내완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-731",
    "title": "OS - 출장용 노트북(HP) OS설치 및 필수보안프",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/02(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "출장용 노트북(HP) OS설치 및 필수보안 소프트웨어 업데이트 요청",
    "actionTaken": "OS설치 및 보안 소프트웨어 업데이트 완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 출장용 노트북(HP) OS설치 및 필수보안 소프트웨어 업데이트 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS설치 및 보안 소프트웨어 업데이트 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-732",
    "title": "OS - 부서 개발용PC OS설치 및 세팅요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/02(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "부서 개발용PC OS설치 및 세팅요청",
    "actionTaken": "OS설치 및 셋팅 완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 부서 개발용PC OS설치 및 세팅요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS설치 및 셋팅 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.314Z",
    "updatedAt": "2026-08-07T05:08:48.314Z"
  },
  {
    "id": "seed-734",
    "title": "OS - 개발PC OS설치 및 보안 소프트웨어 설치",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/02(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "개발PC OS설치 및 보안 소프트웨어 설치",
    "actionTaken": "OS 설치 및 설치프로그램 설치완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 개발PC OS설치 및 보안 소프트웨어 설치",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 설치 및 설치프로그램 설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-737",
    "title": "OS - 협력업체 PC 사내 개발망 셋팅 진행문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/02(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "협력업체 PC 사내 개발망 셋팅 진행문의",
    "actionTaken": "진행률 공유완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 협력업체 PC 사내 개발망 셋팅 진행문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 진행률 공유완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-739",
    "title": "OS - 협력업체 PC의 사내 개발망 셋팅",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/02(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "협력업체 PC의 사내 개발망 셋팅",
    "actionTaken": "셋팅완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 협력업체 PC의 사내 개발망 셋팅",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 셋팅완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-750",
    "title": "기본 프로그램 - PC OFF 솔루션 근태 설정안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/07(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "PC OFF 솔루션 근태 설정안됨",
    "actionTaken": "인사담당자 이관완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] PC OFF 솔루션 근태 설정안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 인사담당자 이관완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-753",
    "title": "OS - 보안솔루션 설치 지원",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/08(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "보안솔루션 설치 지원",
    "actionTaken": "셋팅완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 보안솔루션 설치 지원",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 셋팅완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-754",
    "title": "IP - 전입 임직원 일반망PC 네트워크 연결문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/08(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "전입 임직원 일반망PC 네트워크 연결문의",
    "actionTaken": "일반망 네트워크 어뎁터 및 WIFI 설정 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 전입 임직원 일반망PC 네트워크 연결문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 일반망 네트워크 어뎁터 및 WIFI 설정 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-756",
    "title": "브라우저 - 품의서, 경비정산 팝업이 발생안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/08(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "브라우저",
    "symptom": "품의서, 경비정산 팝업이 발생안됨",
    "actionTaken": "액티브 설치프로그램 재설치완료",
    "tags": [
      "소프트웨어",
      "브라우저"
    ],
    "sbar": {
      "situation": "[S] 품의서, 경비정산 팝업이 발생안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 브라우저. 현장 처리 결과 검증.",
      "recommendation": "[R] 액티브 설치프로그램 재설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-757",
    "title": "IP - 내부 보안망 유선LAN 동작 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/08(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망 유선LAN 동작 안됨",
    "actionTaken": "네트워크 재설정완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 유선LAN 동작 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 재설정완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-767",
    "title": "브라우저 - 사내 메신저 인사시스템 접속오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/09(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "브라우저",
    "symptom": "사내 메신저 인사시스템 접속오류",
    "actionTaken": "엣지브라우저 초기화 후 재실행 안내",
    "tags": [
      "소프트웨어",
      "브라우저",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 인사시스템 접속오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 브라우저. 현장 처리 결과 검증.",
      "recommendation": "[R] 엣지브라우저 초기화 후 재실행 안내 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-768",
    "title": "IP - 일반망 PC 네트워크 연결 불량",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/09(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망 PC 네트워크 연결 불량",
    "actionTaken": "네트워크 어뎁터 초기화 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 일반망 PC 네트워크 연결 불량",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 어뎁터 초기화 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-778",
    "title": "데스크탑 - 내부 보안망PC 부팅오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/14(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "내부 보안망PC 부팅오류",
    "actionTaken": "SSD 고장확인, 복구업체 이관완료",
    "tags": [
      "하드웨어",
      "데스크탑",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 부팅오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] SSD 고장확인, 복구업체 이관완료 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-780",
    "title": "라이센스 - 오피스 프로그램 라이선스 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/16(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "라이센스",
    "symptom": "오피스 프로그램 라이선스 오류",
    "actionTaken": "PC 재부팅 후 정상확인",
    "tags": [
      "소프트웨어",
      "라이센스",
      "오피스"
    ],
    "sbar": {
      "situation": "[S] 오피스 프로그램 라이선스 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 라이센스. 현장 처리 결과 검증.",
      "recommendation": "[R] PC 재부팅 후 정상확인 📌 연관 지식: [[오피스]]"
    },
    "wikilinks": [
      "오피스"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-791",
    "title": "OS - 출장용 노트북(GRAM) OS 설치 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/21(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "출장용 노트북(GRAM) OS 설치 요청",
    "actionTaken": "출장용 노트북 1대 OS설치 완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 출장용 노트북(GRAM) OS 설치 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 출장용 노트북 1대 OS설치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-792",
    "title": "데스크탑 - PC 재부팅 중 미작동 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/21(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "PC 재부팅 중 미작동 발생",
    "actionTaken": "바이오스 업데이트 완료",
    "tags": [
      "하드웨어",
      "데스크탑",
      "바이오스"
    ],
    "sbar": {
      "situation": "[S] PC 재부팅 중 미작동 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 바이오스 업데이트 완료 📌 연관 지식: [[바이오스]]"
    },
    "wikilinks": [
      "바이오스"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-797",
    "title": "OS - PC안됨 문서 안열림",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/22(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "PC안됨 문서 안열림",
    "actionTaken": "OS 충돌로 재설치완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] PC안됨 문서 안열림",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 충돌로 재설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-798",
    "title": "OS - 화면 블럭아웃",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/22(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "화면 블럭아웃",
    "actionTaken": "재부팅완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 화면 블럭아웃",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 재부팅완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-814",
    "title": "브라우저 - 개발사이트 접속안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/27(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "브라우저",
    "symptom": "개발사이트 접속안됨",
    "actionTaken": "업무 부서 이관완료",
    "tags": [
      "소프트웨어",
      "브라우저"
    ],
    "sbar": {
      "situation": "[S] 개발사이트 접속안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 브라우저. 현장 처리 결과 검증.",
      "recommendation": "[R] 업무 부서 이관완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-822",
    "title": "드라이버 - 랜카드 드라이버 설치후 블루스크린 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/28(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "랜카드 드라이버 설치후 블루스크린 발생",
    "actionTaken": "랜카드 교체후 조치완료",
    "tags": [
      "소프트웨어",
      "드라이버",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 랜카드 드라이버 설치후 블루스크린 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 랜카드 교체후 조치완료 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.315Z",
    "updatedAt": "2026-08-07T05:08:48.315Z"
  },
  {
    "id": "seed-824",
    "title": "IP - 일반망 네트워크 연결불량",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/28(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망 네트워크 연결불량",
    "actionTaken": "네트워크 어뎁터 초기화 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 일반망 네트워크 연결불량",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 어뎁터 초기화 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-829",
    "title": "OS - 경비정산, 예산관리 등 사이트 접속안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/29(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "경비정산, 예산관리 등 사이트 접속안됨",
    "actionTaken": "고객센터 이관완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 경비정산, 예산관리 등 사이트 접속안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 고객센터 이관완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-839",
    "title": "기본 프로그램 - 아웃록 메일수신(회수), 대용량메일 사용시",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/03(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "아웃록 메일수신(회수), 대용량메일 사용시 스크립트 에러 발생",
    "actionTaken": "아웃록 에딩 재설치완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 아웃록 메일수신(회수), 대용량메일 사용시 스크립트 에러 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 아웃록 에딩 재설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-841",
    "title": "OS - 블루스크린 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/03(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "블루스크린 발생",
    "actionTaken": "오류화면 확인 불가로 추후 재발생시 재방문 예정",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 블루스크린 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 오류화면 확인 불가로 추후 재발생시 재방문 예정 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-842",
    "title": "데스크탑 - 부팅 및 동작속도 느림",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/04(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "부팅 및 동작속도 느림",
    "actionTaken": "점검결과 정상으로 문제발생시 다시 문의예정",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 부팅 및 동작속도 느림",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 점검결과 정상으로 문제발생시 다시 문의예정"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-846",
    "title": "드라이버 - 프린터 식별 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/10(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "프린터 식별 안됨",
    "actionTaken": "프린터 드라이버 재설치 완료",
    "tags": [
      "소프트웨어",
      "드라이버"
    ],
    "sbar": {
      "situation": "[S] 프린터 식별 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 프린터 드라이버 재설치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-847",
    "title": "IP - 내부 보안망 PC 미접속으로 인한 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/10(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망 PC 미접속으로 인한 요청",
    "actionTaken": "무선 세팅 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 PC 미접속으로 인한 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 무선 세팅 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-853",
    "title": "데스크탑 - 부팅불가 및 하드인식 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/11(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "부팅불가 및 하드인식 불가",
    "actionTaken": "램슬롯 청소완료",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 부팅불가 및 하드인식 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 램슬롯 청소완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-870",
    "title": "라이센스 - ms관련 제품 미작동",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/19(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "라이센스",
    "symptom": "ms관련 제품 미작동",
    "actionTaken": "msoffice 재설치 및 라이선스 재등록 완료",
    "tags": [
      "소프트웨어",
      "라이센스"
    ],
    "sbar": {
      "situation": "[S] ms관련 제품 미작동",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 라이센스. 현장 처리 결과 검증.",
      "recommendation": "[R] msoffice 재설치 및 라이선스 재등록 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-885",
    "title": "백업 - 내부 보안망PC 교체로인한 이전PC 데이터백업용",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/24(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "백업",
    "symptom": "내부 보안망PC 교체로인한 이전PC 데이터백업용 저장매체 오류발생",
    "actionTaken": "다른 SSD로 대여 완료",
    "tags": [
      "하드웨어",
      "백업",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 교체로인한 이전PC 데이터백업용 저장매체 오류발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] 다른 SSD로 대여 완료 📌 연관 지식: [[SSD]], [[백업]]"
    },
    "wikilinks": [
      "SSD",
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-886",
    "title": "백업 - 내부 보안망PC 복구데이터 이전작업 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/25(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "백업",
    "symptom": "내부 보안망PC 복구데이터 이전작업 요청",
    "actionTaken": "복구데이터 이전완료",
    "tags": [
      "하드웨어",
      "백업"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 복구데이터 이전작업 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] 복구데이터 이전완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-887",
    "title": "OS - MS 오피스 인증요청발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/26(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "MS 오피스 인증요청발생",
    "actionTaken": "라이선스 복구완료",
    "tags": [
      "소프트웨어",
      "OS",
      "오피스"
    ],
    "sbar": {
      "situation": "[S] MS 오피스 인증요청발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 라이선스 복구완료 📌 연관 지식: [[오피스]]"
    },
    "wikilinks": [
      "오피스"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-888",
    "title": "OS - OS 재설치요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/26(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "OS 재설치요청",
    "actionTaken": "OS 설치완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] OS 재설치요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-889",
    "title": "OS - 내부 보안망PC OS 재설치",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/26(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "내부 보안망PC OS 재설치",
    "actionTaken": "재설치완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC OS 재설치",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 재설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-890",
    "title": "OS - SW 문서 작업시 PC 멈춤",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/26(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "SW 문서 작업시 PC 멈춤",
    "actionTaken": "OS 충돌로 재설치완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] SW 문서 작업시 PC 멈춤",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 충돌로 재설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-891",
    "title": "IP - 내부 보안망 네트워크 유무선 변경 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/26(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망 네트워크 유무선 변경 요청",
    "actionTaken": "전산관리자 협의 후 변경완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 네트워크 유무선 변경 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 전산관리자 협의 후 변경완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-892",
    "title": "OS - 납품업체노트북 OS설치를 위한 고정IP공유",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/27(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "납품업체노트북 OS설치를 위한 고정IP공유 요청",
    "actionTaken": "정책상 불가로 취소",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 납품업체노트북 OS설치를 위한 고정IP공유 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 정책상 불가로 취소 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-893",
    "title": "브라우저 - Edge 속도 버벅임, 멈춤발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/27(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "브라우저",
    "symptom": "Edge 속도 버벅임, 멈춤발생",
    "actionTaken": "브라우저 검색기록 및 캐쉬 삭제, 브라우저 초기화 진행 후 정상 속도 확인",
    "tags": [
      "소프트웨어",
      "브라우저"
    ],
    "sbar": {
      "situation": "[S] Edge 속도 버벅임, 멈춤발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 브라우저. 현장 처리 결과 검증.",
      "recommendation": "[R] 브라우저 검색기록 및 캐쉬 삭제, 브라우저 초기화 진행 후 정상 속도 확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-897",
    "title": "OS - 블루스크린 발생 및 PC 강제부팅현상 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "06/28(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "블루스크린 발생 및 PC 강제부팅현상 발생",
    "actionTaken": "네트워크 어뎁터 교체 후 정상동작 확인",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 블루스크린 발생 및 PC 강제부팅현상 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 어뎁터 교체 후 정상동작 확인 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-900",
    "title": "IP - 내부 보안망 네트워크 연결불량",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/01(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망 네트워크 연결불량",
    "actionTaken": "네트워크 어뎁터 재설정",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 네트워크 연결불량",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 어뎁터 재설정"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-902",
    "title": "기본 프로그램 - 내부 보안망 PC 한글파일 실행불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/01(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "내부 보안망 PC 한글파일 실행불가",
    "actionTaken": "한글 2018 프로그램 재설치 후 정상실행 확인",
    "tags": [
      "소프트웨어",
      "한글"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 PC 한글파일 실행불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 한글 2018 프로그램 재설치 후 정상실행 확인 📌 연관 지식: [[한글]]"
    },
    "wikilinks": [
      "한글"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-904",
    "title": "OS - PC 윈도우 시작버튼 및 윈도우 기능 실행",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/01(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "PC 윈도우 시작버튼 및 윈도우 기능 실행 불가",
    "actionTaken": "점검 결과 OS깨짐 확인으로 포멧신청서 상신 및 OS재설치 권유",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] PC 윈도우 시작버튼 및 윈도우 기능 실행 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 점검 결과 OS깨짐 확인으로 포멧신청서 상신 및 OS재설치 권유"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-907",
    "title": "IP - 내부 보안망 무선랜 설정 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/02(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망 무선랜 설정 요청",
    "actionTaken": "자리이동으로 인한 유->무선 세팅변경 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 무선랜 설정 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 자리이동으로 인한 유->무선 세팅변경 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-908",
    "title": "os - PC전원 킨후 PC 응용프로그램 동작불가 및",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/02(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "os",
    "symptom": "PC전원 킨후 PC 응용프로그램 동작불가 및 블루스크린 다수발생",
    "actionTaken": "OS 깨짐현상 확인 후 재설치 권유 및 포멧신청서 상신 요청",
    "tags": [
      "소프트웨어",
      "os",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] PC전원 킨후 PC 응용프로그램 동작불가 및 블루스크린 다수발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: os. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 깨짐현상 확인 후 재설치 권유 및 포멧신청서 상신 요청 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-911",
    "title": "OS - 화면보호기 진입시 PC전원 꺼짐발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/02(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "화면보호기 진입시 PC전원 꺼짐발생",
    "actionTaken": "해당증상 확인 위해 1일간 테스트 결과 증상없음확인",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 화면보호기 진입시 PC전원 꺼짐발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 해당증상 확인 위해 1일간 테스트 결과 증상없음확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-914",
    "title": "IP - 내부 보안망PC 네트워크 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/02(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망PC 네트워크 오류",
    "actionTaken": "네트워크 어뎁터 초기화 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 네트워크 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 어뎁터 초기화 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-915",
    "title": "IP - 일반망PC 네트워크 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/02(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망PC 네트워크 오류",
    "actionTaken": "네트워크 어뎁터 초기화 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 일반망PC 네트워크 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 어뎁터 초기화 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-917",
    "title": "OS - 신규입사자 내부 보안망PC 블루스크린 및 부팅 오",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/03(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "신규입사자 내부 보안망PC 블루스크린 및 부팅 오류발생",
    "actionTaken": "레지스트리값 및 타임서버 변경 후 정상동작 확인",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 신규입사자 내부 보안망PC 블루스크린 및 부팅 오류발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 레지스트리값 및 타임서버 변경 후 정상동작 확인 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-919",
    "title": "백업 - 정용석 전문 내부 보안망PC 복구데이터 백업 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/03(수)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "백업",
    "symptom": "정용석 전문 내부 보안망PC 복구데이터 백업 요청",
    "actionTaken": "정용석 전문 내부 보안망PC 교체예정으로 백업일정 다시잡을예정",
    "tags": [
      "하드웨어",
      "백업"
    ],
    "sbar": {
      "situation": "[S] 정용석 전문 내부 보안망PC 복구데이터 백업 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] 정용석 전문 내부 보안망PC 교체예정으로 백업일정 다시잡을예정 📌 연관 지식: [[백업]]"
    },
    "wikilinks": [
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-926",
    "title": "OS - 내부 보안망PC 블루스크린 및 부팅 오류 재발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/05(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "내부 보안망PC 블루스크린 및 부팅 오류 재발생",
    "actionTaken": "네트워크 랜커넥터 교체후 정상 연결",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 블루스크린 및 부팅 오류 재발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 랜커넥터 교체후 정상 연결 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-937",
    "title": "OS - 내부 보안망PC 블루스크린 및 부팅 오류발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/12(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "내부 보안망PC 블루스크린 및 부팅 오류발생",
    "actionTaken": "랜커넥터 교체 후 연결 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 블루스크린 및 부팅 오류발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 랜커넥터 교체 후 연결 완료 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-949",
    "title": "브라우저 - 인사시스템 접속오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/16(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "브라우저",
    "symptom": "인사시스템 접속오류",
    "actionTaken": "os업데이트 오류로 포멧신청서 상신후 작업완료",
    "tags": [
      "소프트웨어",
      "브라우저"
    ],
    "sbar": {
      "situation": "[S] 인사시스템 접속오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 브라우저. 현장 처리 결과 검증.",
      "recommendation": "[R] os업데이트 오류로 포멧신청서 상신후 작업완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-950",
    "title": "데스크탑 - 전원시 알람 울림",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/16(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "전원시 알람 울림",
    "actionTaken": "RAM 재장착 후 정상동작 확인",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 전원시 알람 울림",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] RAM 재장착 후 정상동작 확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.316Z",
    "updatedAt": "2026-08-07T05:08:48.316Z"
  },
  {
    "id": "seed-957",
    "title": "OS - 블루스크린 다수 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/17(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "블루스크린 다수 발생",
    "actionTaken": "레지스트리값 및 타임서버 변경 후 정상동작 확인",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 블루스크린 다수 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 레지스트리값 및 타임서버 변경 후 정상동작 확인 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-962",
    "title": "라이센스 - 오피스 라이센스 등록불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/18(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "라이센스",
    "symptom": "오피스 라이센스 등록불가",
    "actionTaken": "배치파일 실행 후 정상등록 확인",
    "tags": [
      "소프트웨어",
      "라이센스",
      "오피스"
    ],
    "sbar": {
      "situation": "[S] 오피스 라이센스 등록불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 라이센스. 현장 처리 결과 검증.",
      "recommendation": "[R] 배치파일 실행 후 정상등록 확인 📌 연관 지식: [[오피스]]"
    },
    "wikilinks": [
      "오피스"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-968",
    "title": "OS - 일반망PC 버벅임 및 블루스크린 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/22(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "일반망PC 버벅임 및 블루스크린 발생",
    "actionTaken": "포멧신청서 확인후 작업완료",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 일반망PC 버벅임 및 블루스크린 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 포멧신청서 확인후 작업완료 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-975",
    "title": "OS - 일반망PC 보안 소프트웨어 설치오류로 인한 포멧",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/26(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "일반망PC 보안 소프트웨어 설치오류로 인한 포멧 요청",
    "actionTaken": "포멧신청서 확인후 작업완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 일반망PC 보안 소프트웨어 설치오류로 인한 포멧 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 포멧신청서 확인후 작업완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-980",
    "title": "기본 프로그램 - 메일 첨부파일 다운로드 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/29(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "메일 첨부파일 다운로드 오류",
    "actionTaken": "outlook 재설치 후 첨부파일 다운로드 완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 메일 첨부파일 다운로드 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] outlook 재설치 후 첨부파일 다운로드 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-981",
    "title": "OS - 내부 보안망PC 블루스크린 및 부팅 오류 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "07/29(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "내부 보안망PC 블루스크린 및 부팅 오류 발생",
    "actionTaken": "SSD 고장으로 복구업체 소개 완료 및 SSD 교체후 OS설치 작업 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "SSD",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 블루스크린 및 부팅 오류 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] SSD 고장으로 복구업체 소개 완료 및 SSD 교체후 OS설치 작업 완료 📌 연관 지식: [[SSD]], [[블루스크린]]"
    },
    "wikilinks": [
      "SSD",
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-984",
    "title": "데스크탑 - 부서비용 구매 추가 RAM 장착 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/01(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "부서비용 구매 추가 RAM 장착 요청",
    "actionTaken": "장착 후 인식 완료 확인",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 부서비용 구매 추가 RAM 장착 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 장착 후 인식 완료 확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-987",
    "title": "IP - 임원실 PC IP신청으로 인한 교체예정",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/01(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "임원실 PC IP신청으로 인한 교체예정 PC 세부정보 요청",
    "actionTaken": "공유완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 임원실 PC IP신청으로 인한 교체예정 PC 세부정보 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 공유완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-989",
    "title": "OS - 개발환경 구축 후 지속적인 블루스크린 발생으",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/02(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "개발환경 구축 후 지속적인 블루스크린 발생으로 OS 재설치 필요",
    "actionTaken": "포멧신청서 확인후 작업완료",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 개발환경 구축 후 지속적인 블루스크린 발생으로 OS 재설치 필요",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 포멧신청서 확인후 작업완료 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-990",
    "title": "OS - 반출용 PC VDI 환경으로 셋팅 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/02(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "반출용 PC VDI 환경으로 셋팅 요청",
    "actionTaken": "포멧신청서 확인후 작업완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 반출용 PC VDI 환경으로 셋팅 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 포멧신청서 확인후 작업완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-997",
    "title": "데스크탑 - 블루스크린 및 재부팅 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/06(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "블루스크린 및 재부팅 불가",
    "actionTaken": "SSD고장 확인 안내 및 SSD 교체 필요",
    "tags": [
      "하드웨어",
      "데스크탑",
      "SSD",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 블루스크린 및 재부팅 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] SSD고장 확인 안내 및 SSD 교체 필요 📌 연관 지식: [[SSD]], [[블루스크린]]"
    },
    "wikilinks": [
      "SSD",
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-999",
    "title": "OS - 부서비용으로 SSD구매 및 OS설치 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/06(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "부서비용으로 SSD구매 및 OS설치 요청",
    "actionTaken": "SSD 교체 후 OS설치 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] 부서비용으로 SSD구매 및 OS설치 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] SSD 교체 후 OS설치 완료 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1001",
    "title": "OS - 일반망PC OS재설치 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/06(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "일반망PC OS재설치 요청",
    "actionTaken": "포멧신청서 확인후 작업완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 일반망PC OS재설치 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 포멧신청서 확인후 작업완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1009",
    "title": "OS - 내부 보안망pc 블루스크린 다수 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/19(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "내부 보안망pc 블루스크린 다수 발생",
    "actionTaken": "랜커넥터 교체작업 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망pc 블루스크린 다수 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 랜커넥터 교체작업 완료 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1010",
    "title": "기본 프로그램 - 한글 파일 실행불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/19(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "한글 파일 실행불가",
    "actionTaken": "한글 2018 프로그램 재설치 후 정상실행 확인",
    "tags": [
      "소프트웨어",
      "한글"
    ],
    "sbar": {
      "situation": "[S] 한글 파일 실행불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 한글 2018 프로그램 재설치 후 정상실행 확인 📌 연관 지식: [[한글]]"
    },
    "wikilinks": [
      "한글"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1018",
    "title": "데스크탑 - 내부 보안망PC 화면표출 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/21(수)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "내부 보안망PC 화면표출 안됨",
    "actionTaken": "재부팅 후 표출완료",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 화면표출 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 재부팅 후 표출완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1019",
    "title": "기본 프로그램 - 아웃룩 메일 저장 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/21(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "아웃룩 메일 저장 오류",
    "actionTaken": "메일 저장경로 변경후 조치완료",
    "tags": [
      "소프트웨어",
      "아웃룩"
    ],
    "sbar": {
      "situation": "[S] 아웃룩 메일 저장 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 메일 저장경로 변경후 조치완료 📌 연관 지식: [[아웃룩]]"
    },
    "wikilinks": [
      "아웃룩"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1023",
    "title": "데스크탑 - 제안서 서버 PC HDMI 케이블 연결시 화",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/22(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "제안서 서버 PC HDMI 케이블 연결시 화면 표출 불가",
    "actionTaken": "HDMI 포트 변경후 연결 완료",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 제안서 서버 PC HDMI 케이블 연결시 화면 표출 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] HDMI 포트 변경후 연결 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1025",
    "title": "IP - 교육용PC 네트워크 세팅 작업",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/22(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "교육용PC 네트워크 세팅 작업",
    "actionTaken": "네트워크 어뎁터 설정 및 연결상태 확인 완료 (10.240.33.200)",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 교육용PC 네트워크 세팅 작업",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 어뎁터 설정 및 연결상태 확인 완료 (10.240.33.200)"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1035",
    "title": "OS - 교육용PC OS 설치 및 보안 소프트웨어 설치",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/22(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "교육용PC OS 설치 및 보안 소프트웨어 설치 및 세팅 작업",
    "actionTaken": "세팅 완료 (110NZVF048223)",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 교육용PC OS 설치 및 보안 소프트웨어 설치 및 세팅 작업",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 세팅 완료 (110NZVF048223)"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1045",
    "title": "OS - 내부 보안망PC 윈도우 진입 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/23(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "내부 보안망PC 윈도우 진입 불가",
    "actionTaken": "해당 PC SSD 고장확인 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 윈도우 진입 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 해당 PC SSD 고장확인 완료 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1046",
    "title": "IP - 복직 후 일반망PC 네트워크 연결 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/23(금)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "복직 후 일반망PC 네트워크 연결 불가",
    "actionTaken": "장기 미사용으로 IP차단 확인 후 해제 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 복직 후 일반망PC 네트워크 연결 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 장기 미사용으로 IP차단 확인 후 해제 완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1049",
    "title": "OS - 블루스크린 발생 및 부팅오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/26(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "블루스크린 발생 및 부팅오류",
    "actionTaken": "해당장비 메인보드고장으로 렌탈사에 임시장비 요청",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 블루스크린 발생 및 부팅오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 해당장비 메인보드고장으로 렌탈사에 임시장비 요청 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1060",
    "title": "기본 프로그램 - 사내 메신저 접속 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/29(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "사내 메신저 접속 오류",
    "actionTaken": "PW초기화 완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 사내 메신저 접속 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] PW초기화 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1061",
    "title": "데스크탑 - 임시장비 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/29(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "임시장비 요청",
    "actionTaken": "지급완료",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 임시장비 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 지급완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1062",
    "title": "OS - 재택근무 PC 인사시스템 접속 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "08/29(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "재택근무 PC 인사시스템 접속 불가",
    "actionTaken": "엣지 업데이트 및 윈도우 업데이트 진행후 접속 완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 재택근무 PC 인사시스템 접속 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 엣지 업데이트 및 윈도우 업데이트 진행후 접속 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.317Z",
    "updatedAt": "2026-08-07T05:08:48.317Z"
  },
  {
    "id": "seed-1075",
    "title": "IP - DNS 서버 변경으로 인한 네트워크 접속 불",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09/04(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "DNS 서버 변경으로 인한 네트워크 접속 불가",
    "actionTaken": "DNS서버 변경 배치파일 실행 후 정상 연결 확인",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] DNS 서버 변경으로 인한 네트워크 접속 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] DNS서버 변경 배치파일 실행 후 정상 연결 확인 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1078",
    "title": "OS - 내부 보안망 PC 보안 소프트웨어 실행시 블루스크린",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09/04(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "내부 보안망 PC 보안 소프트웨어 실행시 블루스크린 발생",
    "actionTaken": "내부 보안망 랜 커넥터 교체후 정상동작 확인",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 PC 보안 소프트웨어 실행시 블루스크린 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 내부 보안망 랜 커넥터 교체후 정상동작 확인 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1080",
    "title": "OS - 사내 개발망 PC 패스워드 변경 및 로컬보안정",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09/05(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "사내 개발망 PC 패스워드 변경 및 로컬보안정책을 설정 차단",
    "actionTaken": "AD이행 프로그램 실행 후 설정 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "워드",
      "AD"
    ],
    "sbar": {
      "situation": "[S] 사내 개발망 PC 패스워드 변경 및 로컬보안정책을 설정 차단",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] AD이행 프로그램 실행 후 설정 완료 📌 연관 지식: [[워드]], [[AD]]"
    },
    "wikilinks": [
      "워드",
      "AD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1082",
    "title": "드라이버 - 프린터 작동안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09/09(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "프린터 작동안됨",
    "actionTaken": "프린터 스풀 재조정완료",
    "tags": [
      "소프트웨어",
      "드라이버"
    ],
    "sbar": {
      "situation": "[S] 프린터 작동안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 프린터 스풀 재조정완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1084",
    "title": "OS - 화면이 검정색으로 변경되며 PC가 느려져서",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09/09(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "화면이 검정색으로 변경되며 PC가 느려져서 사용불가",
    "actionTaken": "OS 복구완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 화면이 검정색으로 변경되며 PC가 느려져서 사용불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 복구완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1085",
    "title": "OS - 윈도우 로그인계정 로그인 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09/09(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "윈도우 로그인계정 로그인 불가",
    "actionTaken": "관리자계정 로그인 후 T-GATE 재설치완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 윈도우 로그인계정 로그인 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 관리자계정 로그인 후 T-GATE 재설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1087",
    "title": "OS - PC 멈춤",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09/09(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "PC 멈춤",
    "actionTaken": "OS 복구완료/ 최적화완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] PC 멈춤",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 복구완료/ 최적화완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1090",
    "title": "기본 프로그램 - 일반망PC 한글실행 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09/11(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "일반망PC 한글실행 불가",
    "actionTaken": "재설치 완료",
    "tags": [
      "소프트웨어",
      "한글"
    ],
    "sbar": {
      "situation": "[S] 일반망PC 한글실행 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 재설치 완료 📌 연관 지식: [[한글]]"
    },
    "wikilinks": [
      "한글"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1091",
    "title": "브라우저 - Edge 실행 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09/12(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "브라우저",
    "symptom": "Edge 실행 불가",
    "actionTaken": "시스템 파일 손상 확인 복구명령어 실행후 조치 완료",
    "tags": [
      "소프트웨어",
      "브라우저"
    ],
    "sbar": {
      "situation": "[S] Edge 실행 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 브라우저. 현장 처리 결과 검증.",
      "recommendation": "[R] 시스템 파일 손상 확인 복구명령어 실행후 조치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1101",
    "title": "OS - 윈도우 패스워드 분실",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09/23(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "윈도우 패스워드 분실",
    "actionTaken": "초기화완료",
    "tags": [
      "소프트웨어",
      "OS",
      "워드"
    ],
    "sbar": {
      "situation": "[S] 윈도우 패스워드 분실",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 초기화완료 📌 연관 지식: [[워드]]"
    },
    "wikilinks": [
      "워드"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1108",
    "title": "OS - 블루스크린",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "09/30(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "블루스크린",
    "actionTaken": "OS 복구완료",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 블루스크린",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 복구완료 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1112",
    "title": "유지보수 - 10층 ICT 회의실 사업장->연구소 이전 샤이",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/07(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "유지보수",
    "symptom": "10층 ICT 회의실 사업장->연구소 이전 샤이니즈, 화상장비 구성품 및 점검 요청",
    "actionTaken": "이전 화상장비 시리얼 넘버 및 구성품 점검 상태 확인 완료",
    "tags": [
      "하드웨어",
      "유지보수"
    ],
    "sbar": {
      "situation": "[S] 10층 ICT 회의실 사업장->연구소 이전 샤이니즈, 화상장비 구성품 및 점검 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 유지보수. 현장 처리 결과 검증.",
      "recommendation": "[R] 이전 화상장비 시리얼 넘버 및 구성품 점검 상태 확인 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1114",
    "title": "OS - 내부 보안망 PC OS 강제부팅 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/07(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "내부 보안망 PC OS 강제부팅 발생",
    "actionTaken": "시스템파일 손상으로 복구 명령어 실행 조치 완료 및 네트워크 C타입 커넥터 교체완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 PC OS 강제부팅 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 시스템파일 손상으로 복구 명령어 실행 조치 완료 및 네트워크 C타입 커넥터 교체완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1116",
    "title": "기본 프로그램 - WORD 로그인 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/08(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "WORD 로그인 불가",
    "actionTaken": "원래 비로그인 상태가 정상으로 사용에도 지장없음 확인",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] WORD 로그인 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 원래 비로그인 상태가 정상으로 사용에도 지장없음 확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1118",
    "title": "OS - 윈도우 화면 표출 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/10(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "윈도우 화면 표출 불가",
    "actionTaken": "재부팅 후 표출완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 윈도우 화면 표출 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 재부팅 후 표출완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1121",
    "title": "유지보수 - 지하 6층 화상장비 구성품 상태확인 및 구입",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/11(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "유지보수",
    "symptom": "지하 6층 화상장비 구성품 상태확인 및 구입 필요물품 조사, 정상 작동 점검 요청",
    "actionTaken": "구성품 확인 및 점검 완료 및 필요 물품 조사 후 내용공유 완료",
    "tags": [
      "하드웨어",
      "유지보수"
    ],
    "sbar": {
      "situation": "[S] 지하 6층 화상장비 구성품 상태확인 및 구입 필요물품 조사, 정상 작동 점검 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 유지보수. 현장 처리 결과 검증.",
      "recommendation": "[R] 구성품 확인 및 점검 완료 및 필요 물품 조사 후 내용공유 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1126",
    "title": "IP - 내부 보안망 노트PC 네트워크 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/16(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망 노트PC 네트워크 안됨",
    "actionTaken": "DNS 재설정완료",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 노트PC 네트워크 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] DNS 재설정완료 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1128",
    "title": "OS - 장시간 사용시 블루스크린 표출, 에러메세지",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/17(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "장시간 사용시 블루스크린 표출, 에러메세지 표출 후 자동재부팅 발생",
    "actionTaken": "보안 솔루션dll 파일 손상 확인 및 시스템파일 복구 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 장시간 사용시 블루스크린 표출, 에러메세지 표출 후 자동재부팅 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 보안 솔루션dll 파일 손상 확인 및 시스템파일 복구 완료 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1139",
    "title": "OS - 일반망PC 블루스크린 표출",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/21(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "일반망PC 블루스크린 표출",
    "actionTaken": "시스템파일 복구명령어 실행후 정상작동 확인",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 일반망PC 블루스크린 표출",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 시스템파일 복구명령어 실행후 정상작동 확인 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1144",
    "title": "백업 - 일반망PC 교체로 인한 데이터 백업 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/22(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "백업",
    "symptom": "일반망PC 교체로 인한 데이터 백업 요청",
    "actionTaken": "PC지원실 내부에서 데이터 백업 진행 완료",
    "tags": [
      "하드웨어",
      "백업"
    ],
    "sbar": {
      "situation": "[S] 일반망PC 교체로 인한 데이터 백업 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] PC지원실 내부에서 데이터 백업 진행 완료 📌 연관 지식: [[백업]]"
    },
    "wikilinks": [
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1146",
    "title": "드라이버 - 일반망PC 프린터 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/22(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "드라이버",
    "symptom": "일반망PC 프린터 안됨",
    "actionTaken": "프린터 드라이버 재설치 완료",
    "tags": [
      "소프트웨어",
      "드라이버"
    ],
    "sbar": {
      "situation": "[S] 일반망PC 프린터 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 드라이버. 현장 처리 결과 검증.",
      "recommendation": "[R] 프린터 드라이버 재설치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1153",
    "title": "OS - 계정 로그인안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/24(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "계정 로그인안됨",
    "actionTaken": "윕스해제완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 계정 로그인안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 윕스해제완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1154",
    "title": "OS - 재부팅됨(브라우저 실행시)",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/24(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "재부팅됨(브라우저 실행시)",
    "actionTaken": "OS 복구완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 재부팅됨(브라우저 실행시)",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 복구완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1157",
    "title": "백업 - PC교체로 인한 데이터 백업 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/24(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "백업",
    "symptom": "PC교체로 인한 데이터 백업 요청",
    "actionTaken": "PC지원실 감독하에 데이터백업 진행완료",
    "tags": [
      "하드웨어",
      "백업"
    ],
    "sbar": {
      "situation": "[S] PC교체로 인한 데이터 백업 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] PC지원실 감독하에 데이터백업 진행완료 📌 연관 지식: [[백업]]"
    },
    "wikilinks": [
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.318Z",
    "updatedAt": "2026-08-07T05:08:48.318Z"
  },
  {
    "id": "seed-1169",
    "title": "데스크탑 - 워크스테이션 수리 가능 문의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/30(수)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "워크스테이션 수리 가능 문의",
    "actionTaken": "PC지원실 방문 후 확인 예정",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 워크스테이션 수리 가능 문의",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] PC지원실 방문 후 확인 예정"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.319Z",
    "updatedAt": "2026-08-07T05:08:48.319Z"
  },
  {
    "id": "seed-1170",
    "title": "데스크탑 - 전원 인가 후 부팅안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/30(수)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "전원 인가 후 부팅안됨",
    "actionTaken": "납품업체 이관완료",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 전원 인가 후 부팅안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 납품업체 이관완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.319Z",
    "updatedAt": "2026-08-07T05:08:48.319Z"
  },
  {
    "id": "seed-1171",
    "title": "OS - PC를켜도 메모리 에러창으로 알림창만 계속뜨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "10/30(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "PC를켜도 메모리 에러창으로 알림창만 계속뜨고 동작불가",
    "actionTaken": "OS 재설치완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] PC를켜도 메모리 에러창으로 알림창만 계속뜨고 동작불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 재설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.319Z",
    "updatedAt": "2026-08-07T05:08:48.319Z"
  },
  {
    "id": "seed-1204",
    "title": "OS - 일반망PC 시스템 종료화면에서 멈춤",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "11/06(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "일반망PC 시스템 종료화면에서 멈춤",
    "actionTaken": "재부팅 후 시스템파일 복구작업 진행후 정상동작확인",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 일반망PC 시스템 종료화면에서 멈춤",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 재부팅 후 시스템파일 복구작업 진행후 정상동작확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.319Z",
    "updatedAt": "2026-08-07T05:08:48.319Z"
  },
  {
    "id": "seed-1208",
    "title": "데스크탑 - 전원 키면 소리나면서 부팅 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "11/07(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "전원 키면 소리나면서 부팅 안됨",
    "actionTaken": "RAM 재장착 후 정상동작 확인",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 전원 키면 소리나면서 부팅 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] RAM 재장착 후 정상동작 확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.319Z",
    "updatedAt": "2026-08-07T05:08:48.319Z"
  },
  {
    "id": "seed-1211",
    "title": "IP - 내부 보안망 무선 연결",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "11/11(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망 무선 연결",
    "actionTaken": "무선인증솔루션 삽입완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 무선 연결",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 무선인증솔루션 삽입완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.319Z",
    "updatedAt": "2026-08-07T05:08:48.319Z"
  },
  {
    "id": "seed-1212",
    "title": "OS - PC부팅이 너무 느리고 성능저하",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "11/12(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "PC부팅이 너무 느리고 성능저하",
    "actionTaken": "OS 복구완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] PC부팅이 너무 느리고 성능저하",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 복구완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.319Z",
    "updatedAt": "2026-08-07T05:08:48.319Z"
  },
  {
    "id": "seed-1214",
    "title": "OS - 블루스크린 유발 및 전체적인 느림",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "11/12(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "블루스크린 유발 및 전체적인 느림",
    "actionTaken": "OS 복구완료",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 블루스크린 유발 및 전체적인 느림",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] OS 복구완료 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.319Z",
    "updatedAt": "2026-08-07T05:08:48.319Z"
  },
  {
    "id": "seed-1231",
    "title": "IP - 일반망PC 네트워크 연결 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "11/21(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망PC 네트워크 연결 불가",
    "actionTaken": "일반망 PC WIFI 설정OFF 확인 후 네트워크 어뎁터 재설정 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 일반망PC 네트워크 연결 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 일반망 PC WIFI 설정OFF 확인 후 네트워크 어뎁터 재설정 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.319Z",
    "updatedAt": "2026-08-07T05:08:48.319Z"
  },
  {
    "id": "seed-1237",
    "title": "ip - 일반망PC DNS서버 변경 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "11/26(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "ip",
    "symptom": "일반망PC DNS서버 변경 요청",
    "actionTaken": "메일 및 통화로 내용 전달 완료",
    "tags": [
      "네트워크",
      "ip",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] 일반망PC DNS서버 변경 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: ip. 현장 처리 결과 검증.",
      "recommendation": "[R] 메일 및 통화로 내용 전달 완료 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.319Z",
    "updatedAt": "2026-08-07T05:08:48.319Z"
  },
  {
    "id": "seed-1241",
    "title": "ip - 내부 보안망pc 네크워크 연결오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "11/27(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "ip",
    "symptom": "내부 보안망pc 네크워크 연결오류",
    "actionTaken": "어뎁터 초기화 후 정상 연결 확인",
    "tags": [
      "네트워크",
      "ip"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망pc 네크워크 연결오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: ip. 현장 처리 결과 검증.",
      "recommendation": "[R] 어뎁터 초기화 후 정상 연결 확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.319Z",
    "updatedAt": "2026-08-07T05:08:48.319Z"
  },
  {
    "id": "seed-1247",
    "title": "OS - 일반망 PC 블루스크린 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12/03(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "일반망 PC 블루스크린 발생",
    "actionTaken": "시스템 파일 복구 명령어 실행 후 정상동작 확인",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 일반망 PC 블루스크린 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 시스템 파일 복구 명령어 실행 후 정상동작 확인 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.319Z",
    "updatedAt": "2026-08-07T05:08:48.319Z"
  },
  {
    "id": "seed-1254",
    "title": "백업 - 부문장 이전PC 데이터 백업요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12/12(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "백업",
    "symptom": "부문장 이전PC 데이터 백업요청",
    "actionTaken": "데이터 백업 완료 및 이전 PC 반납처리 완료",
    "tags": [
      "하드웨어",
      "백업"
    ],
    "sbar": {
      "situation": "[S] 부문장 이전PC 데이터 백업요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] 데이터 백업 완료 및 이전 PC 반납처리 완료 📌 연관 지식: [[백업]]"
    },
    "wikilinks": [
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1255",
    "title": "데스크탑 - 메모리 부족으로 메시지 다수 표출",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12/13(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "메모리 부족으로 메시지 다수 표출",
    "actionTaken": "데스크탑 RAM 재장착 후 정상동작확인",
    "tags": [
      "하드웨어",
      "데스크탑"
    ],
    "sbar": {
      "situation": "[S] 메모리 부족으로 메시지 다수 표출",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 데스크탑 RAM 재장착 후 정상동작확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1256",
    "title": "백업 - 이전 PC 자료 데이터 백업 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12/13(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "백업",
    "symptom": "이전 PC 자료 데이터 백업 요청",
    "actionTaken": "데이터 백업 완료 및 이전 PC 반납처리 완료",
    "tags": [
      "하드웨어",
      "백업"
    ],
    "sbar": {
      "situation": "[S] 이전 PC 자료 데이터 백업 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] 데이터 백업 완료 및 이전 PC 반납처리 완료 📌 연관 지식: [[백업]]"
    },
    "wikilinks": [
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1261",
    "title": "IP - 내부 보안망PC 네트워크 접속오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12/19(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망PC 네트워크 접속오류",
    "actionTaken": "네트워크 어뎁터 초기화",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 네트워크 접속오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 네트워크 어뎁터 초기화"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1267",
    "title": "OS - 내부 보안망PC 동작이 느림",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "12/24(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "내부 보안망PC 동작이 느림",
    "actionTaken": "시스템 파일 복구 명령어 실행 후 정상동작 확인",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 동작이 느림",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 시스템 파일 복구 명령어 실행 후 정상동작 확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1278",
    "title": "IP - 일반망PC 인터넷 연결느림 및 끊김 현상 발",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/02(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "일반망PC 인터넷 연결느림 및 끊김 현상 발생",
    "actionTaken": "DNS서버 미변경 확인, 네트워크 어뎁터 재설정 후 정상 연결 확인",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] 일반망PC 인터넷 연결느림 및 끊김 현상 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] DNS서버 미변경 확인, 네트워크 어뎁터 재설정 후 정상 연결 확인 📌 연관 지식: [[DNS]]"
    },
    "wikilinks": [
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1284",
    "title": "OS - 부팅시 블루 스크린 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/06(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "부팅시 블루 스크린 발생",
    "actionTaken": "내부 보안망 PC C타입 LAN커넥터 오류 확인 및 해당좌석 LAN포트 불량으로 내부 보안망 PC 유->무 변경 작업 완료",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 부팅시 블루 스크린 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 내부 보안망 PC C타입 LAN커넥터 오류 확인 및 해당좌석 LAN포트 불량으로 내부 보안망 PC 유->무 변경 작업 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1285",
    "title": "기본 프로그램 - PPT 작업 후 저장시 응답없음 및 화면 멈",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/06(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "PPT 작업 후 저장시 응답없음 및 화면 멈춤",
    "actionTaken": "문서보안(DRM) 비로그인확인 로그인후 정상확인",
    "tags": [
      "소프트웨어",
      "DRM"
    ],
    "sbar": {
      "situation": "[S] PPT 작업 후 저장시 응답없음 및 화면 멈춤",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 문서보안(DRM) 비로그인확인 로그인후 정상확인 📌 연관 지식: [[문서보안(DRM)]]"
    },
    "wikilinks": [
      "문서보안(DRM)"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1288",
    "title": "IP - 임원실 및 임원실 PC IP 외부 사이트",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/07(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "임원실 및 임원실 PC IP 외부 사이트 접속 예외신청",
    "actionTaken": "결제상신 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 임원실 및 임원실 PC IP 외부 사이트 접속 예외신청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 결제상신 완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1289",
    "title": "IP - 공용 업무 PC IP 외부 사이트 접속 예외",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/07(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "공용 업무 PC IP 외부 사이트 접속 예외신청",
    "actionTaken": "결제상신 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 공용 업무 PC IP 외부 사이트 접속 예외신청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 결제상신 완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1290",
    "title": "OS - 블루스크린 다수발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/07(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "블루스크린 다수발생",
    "actionTaken": "시스템 파일 복구 명령어 실행 후 정상동작 확인",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 블루스크린 다수발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 시스템 파일 복구 명령어 실행 후 정상동작 확인 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1291",
    "title": "IP - 네트워크 어뎁터 드라이브 표출 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/07(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "네트워크 어뎁터 드라이브 표출 오류",
    "actionTaken": "보안 솔루션 정책으로 인한 차단상황으로 네트워크 어뎁터 초기화 완료",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 네트워크 어뎁터 드라이브 표출 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 보안 솔루션 정책으로 인한 차단상황으로 네트워크 어뎁터 초기화 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1292",
    "title": "데스크탑 - PC 전원 안켜짐",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/07(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데스크탑",
    "symptom": "PC 전원 안켜짐",
    "actionTaken": "해당 PC 외관 파손 및 메인 보드, ssd고장으로 인한 PC교체 예정",
    "tags": [
      "하드웨어",
      "데스크탑",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] PC 전원 안켜짐",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데스크탑. 현장 처리 결과 검증.",
      "recommendation": "[R] 해당 PC 외관 파손 및 메인 보드, ssd고장으로 인한 PC교체 예정 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1297",
    "title": "IP - 내부 보안망PC 네트워크 연결 안됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/16(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "IP",
    "symptom": "내부 보안망PC 네트워크 연결 안됨",
    "actionTaken": "어뎁터 초기화 후 정상 연결 확인",
    "tags": [
      "네트워크"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망PC 네트워크 연결 안됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: IP. 현장 처리 결과 검증.",
      "recommendation": "[R] 어뎁터 초기화 후 정상 연결 확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1307",
    "title": "유지보수 - 신규 PC 세팅 및 이전",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/21(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "유지보수",
    "symptom": "신규 PC 세팅 및 이전",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "유지보수"
    ],
    "sbar": {
      "situation": "[S] 신규 PC 세팅 및 이전",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 유지보수. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1313",
    "title": "일반망 이슈 - 노트북 일반망 네트워크 이슈",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/22(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "일반망 이슈",
    "symptom": "노트북 일반망 네트워크 이슈",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "일반망 이슈"
    ],
    "sbar": {
      "situation": "[S] 노트북 일반망 네트워크 이슈",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 일반망 이슈. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1314",
    "title": "내부 보안망 연결 점검 - 내부 보안망 네트워크 연결 점검",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/22(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "내부 보안망 연결 점검",
    "symptom": "내부 보안망 네트워크 연결 점검",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "내부 보안망 연결 점검"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 네트워크 연결 점검",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 내부 보안망 연결 점검. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1315",
    "title": "배터리 고장 - 배터리 고장, PC 전원 고장",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/22(수)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "배터리 고장",
    "symptom": "배터리 고장, PC 전원 고장",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "배터리 고장"
    ],
    "sbar": {
      "situation": "[S] 배터리 고장, PC 전원 고장",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 배터리 고장. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1316",
    "title": "무선랜 신청 - 내부 보안망 PC 무선랜 신청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/22(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "무선랜 신청",
    "symptom": "내부 보안망 PC 무선랜 신청",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "무선랜 신청"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 PC 무선랜 신청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 무선랜 신청. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1317",
    "title": "노후 PC 교체 - 노후 PC 교체",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/22(수)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "노후 PC 교체",
    "symptom": "노후 PC 교체",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "노후 PC 교체"
    ],
    "sbar": {
      "situation": "[S] 노후 PC 교체",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 노후 PC 교체. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1318",
    "title": "내부 보안망 접속 에러 - 내부 보안망 접속 에러",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/22(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "내부 보안망 접속 에러",
    "symptom": "내부 보안망 접속 에러",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "내부 보안망 접속 에러"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 접속 에러",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 내부 보안망 접속 에러. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1321",
    "title": "SSD 교체 - SSD 교체",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/23(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "SSD 교체",
    "symptom": "SSD 교체",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "SSD 교체",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] SSD 교체",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: SSD 교체. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1324",
    "title": "SSD 증설 - SSD 증설",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/23(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "SSD 증설",
    "symptom": "SSD 증설",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "SSD 증설",
      "기반 SW",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] SSD 증설",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: SSD 증설. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1326",
    "title": "부팅 안 됨 - 부팅 안 됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/23(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "부팅 안 됨",
    "symptom": "부팅 안 됨",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "부팅 안 됨"
    ],
    "sbar": {
      "situation": "[S] 부팅 안 됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 부팅 안 됨. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1327",
    "title": "PC 전원 안 켜짐 - PC 전원 안 켜짐 / SSD 손실 시 책",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/23(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "PC 전원 안 켜짐",
    "symptom": "PC 전원 안 켜짐 / SSD 손실 시 책임 묻지 않음 확인",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "PC 전원 안 켜짐",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] PC 전원 안 켜짐 / SSD 손실 시 책임 묻지 않음 확인",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: PC 전원 안 켜짐. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1328",
    "title": "전원미인가 - 전원미인가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/23(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "전원미인가",
    "symptom": "전원미인가",
    "actionTaken": "동일모델 교체완료",
    "tags": [
      "하드웨어",
      "전원미인가"
    ],
    "sbar": {
      "situation": "[S] 전원미인가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 전원미인가. 현장 처리 결과 검증.",
      "recommendation": "[R] 동일모델 교체완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1329",
    "title": "일반망/내부 보안망 수거 - 일반망/내부 보안망 수거",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/23(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "일반망/내부 보안망 수거",
    "symptom": "일반망/내부 보안망 수거",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "일반망/내부 보안망 수거"
    ],
    "sbar": {
      "situation": "[S] 일반망/내부 보안망 수거",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 일반망/내부 보안망 수거. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1330",
    "title": "복구 데이터 이관 - 복구 데이터 이관",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/23(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "복구 데이터 이관",
    "symptom": "복구 데이터 이관",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "복구 데이터 이관"
    ],
    "sbar": {
      "situation": "[S] 복구 데이터 이관",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 복구 데이터 이관. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1331",
    "title": "PC 전원 ON 시 특정 음 이상징후 확인 - PC 전원 ON 시 특정 음 이상징후 확인",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/23(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "PC 전원 ON 시 특정 음 이상징후 확인",
    "symptom": "PC 전원 ON 시 특정 음 이상징후 확인",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "PC 전원 ON 시 특정 음 이상징후 확인"
    ],
    "sbar": {
      "situation": "[S] PC 전원 ON 시 특정 음 이상징후 확인",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: PC 전원 ON 시 특정 음 이상징후 확인. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1333",
    "title": "윈도우 변경 - 윈도우 변경",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/24(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "윈도우 변경",
    "symptom": "윈도우 변경",
    "actionTaken": "조치 완료",
    "tags": [
      "소프트웨어",
      "윈도우 변경"
    ],
    "sbar": {
      "situation": "[S] 윈도우 변경",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 윈도우 변경. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1334",
    "title": "자료 이동 - 내부 보안망 PC 자료 이동",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/24(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "자료 이동",
    "symptom": "내부 보안망 PC 자료 이동",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "자료 이동"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 PC 자료 이동",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 자료 이동. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1335",
    "title": "자료 백업 및 자료 이동 - D드라이브 자료 백업 및 신규 PC 자료 이",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/24(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "자료 백업 및 자료 이동",
    "symptom": "D드라이브 자료 백업 및 신규 PC 자료 이동",
    "actionTaken": "자료 이동 완료",
    "tags": [
      "하드웨어",
      "자료 백업 및 자료 이동",
      "D드라이브",
      "백업"
    ],
    "sbar": {
      "situation": "[S] D드라이브 자료 백업 및 신규 PC 자료 이동",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 자료 백업 및 자료 이동. 현장 처리 결과 검증.",
      "recommendation": "[R] 자료 이동 완료 📌 연관 지식: [[D드라이브]], [[백업]]"
    },
    "wikilinks": [
      "D드라이브",
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1336",
    "title": "OS - 블루스크린 발생(하루 2~3회)",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/24(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "블루스크린 발생(하루 2~3회)",
    "actionTaken": "조치 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "SW팀(미래기술)",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 블루스크린 발생(하루 2~3회)",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1337",
    "title": "일반망 PC 네트워크 오류 - 일반망 PC 네트워크 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/24(금)",
    "categoryLarge": "네트워크",
    "categoryMedium": "일반망 PC 네트워크 오류",
    "symptom": "일반망 PC 네트워크 오류",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "일반망 PC 네트워크 오류"
    ],
    "sbar": {
      "situation": "[S] 일반망 PC 네트워크 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 일반망 PC 네트워크 오류. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1340",
    "title": "C드라이브 파티션 조정 - C드라이브 파티션 조정",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/31(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "C드라이브 파티션 조정",
    "symptom": "C드라이브 파티션 조정",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "C드라이브 파티션 조정",
      "SW팀(미래기술)",
      "파티션",
      "C드라이브"
    ],
    "sbar": {
      "situation": "[S] C드라이브 파티션 조정",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: C드라이브 파티션 조정. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[파티션]], [[C드라이브]]"
    },
    "wikilinks": [
      "파티션",
      "C드라이브"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1341",
    "title": "OS - 부팅 시 블루스크린 발생",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/31(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "부팅 시 블루스크린 발생",
    "actionTaken": "조치 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 부팅 시 블루스크린 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1342",
    "title": "OS - 블루스크린 및 HDD 용량 부족",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "01/31(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "블루스크린 및 HDD 용량 부족",
    "actionTaken": "조치 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 블루스크린 및 HDD 용량 부족",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1344",
    "title": "SSD 자료 확인 - SSD 카드 및 복구 자료 재확인",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/07(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "SSD 자료 확인",
    "symptom": "SSD 카드 및 복구 자료 재확인",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "SSD 자료 확인",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] SSD 카드 및 복구 자료 재확인",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: SSD 자료 확인. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1345",
    "title": "PC 재설정 - 임시 계정 사용 후 정식 계정 발급에 따른",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/10(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "PC 재설정",
    "symptom": "임시 계정 사용 후 정식 계정 발급에 따른 PC 재설정 요청",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "PC 재설정"
    ],
    "sbar": {
      "situation": "[S] 임시 계정 사용 후 정식 계정 발급에 따른 PC 재설정 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: PC 재설정. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1346",
    "title": "인증프로그램 요청 - 오피스 인증프로그램 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/10(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "인증프로그램 요청",
    "symptom": "오피스 인증프로그램 요청",
    "actionTaken": "인증 완료",
    "tags": [
      "소프트웨어",
      "인증프로그램 요청",
      "오피스"
    ],
    "sbar": {
      "situation": "[S] 오피스 인증프로그램 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 인증프로그램 요청. 현장 처리 결과 검증.",
      "recommendation": "[R] 인증 완료 📌 연관 지식: [[오피스]]"
    },
    "wikilinks": [
      "오피스"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1347",
    "title": "PC 프로그램 비정상 - PC 프로그램 비정상",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/11(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "PC 프로그램 비정상",
    "symptom": "PC 프로그램 비정상",
    "actionTaken": "조치 완료",
    "tags": [
      "소프트웨어",
      "PC 프로그램 비정상"
    ],
    "sbar": {
      "situation": "[S] PC 프로그램 비정상",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: PC 프로그램 비정상. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1349",
    "title": "내부 보안망 네트워크 오류 - 내부 보안망 네트워크 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/13(목)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "내부 보안망 네트워크 오류",
    "symptom": "내부 보안망 네트워크 오류",
    "actionTaken": "재부팅 완료",
    "tags": [
      "소프트웨어",
      "내부 보안망 네트워크 오류"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 네트워크 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 내부 보안망 네트워크 오류. 현장 처리 결과 검증.",
      "recommendation": "[R] 재부팅 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1350",
    "title": "자료 교체로 인한 자료 백업 - 자료 교체로 인한 자료 백업",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/13(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "자료 교체로 인한 자료 백업",
    "symptom": "자료 교체로 인한 자료 백업",
    "actionTaken": "백업 완료",
    "tags": [
      "하드웨어",
      "자료 교체로 인한 자료 백업",
      "백업"
    ],
    "sbar": {
      "situation": "[S] 자료 교체로 인한 자료 백업",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 자료 교체로 인한 자료 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] 백업 완료 📌 연관 지식: [[백업]]"
    },
    "wikilinks": [
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1351",
    "title": "PC 세팅 - 계정 변경으로 인한 PC 세팅",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/14(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "PC 세팅",
    "symptom": "계정 변경으로 인한 PC 세팅",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "PC 세팅"
    ],
    "sbar": {
      "situation": "[S] 계정 변경으로 인한 PC 세팅",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: PC 세팅. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1353",
    "title": "내부 보안망 유선에서 무선으로 변경 - 내부 보안망 유선에서 무선으로 변경",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/18(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "내부 보안망 유선에서 무선으로 변경",
    "symptom": "내부 보안망 유선에서 무선으로 변경",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "내부 보안망 유선에서 무선으로 변경"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 유선에서 무선으로 변경",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 내부 보안망 유선에서 무선으로 변경. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1354",
    "title": "OS - PC 사용 시 블루스크린으로 재시작 문제",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/19(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "PC 사용 시 블루스크린으로 재시작 문제",
    "actionTaken": "조치 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "SW팀(미래기술)",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] PC 사용 시 블루스크린으로 재시작 문제",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1355",
    "title": "인터넷 연결 끊김 - 인터넷 연결 끊김",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/20(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "인터넷 연결 끊김",
    "symptom": "인터넷 연결 끊김",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "인터넷 연결 끊김"
    ],
    "sbar": {
      "situation": "[S] 인터넷 연결 끊김",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 인터넷 연결 끊김. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1356",
    "title": "연결 요청 - 내부 보안망 네트워크 연결 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/24(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "연결 요청",
    "symptom": "내부 보안망 네트워크 연결 요청",
    "actionTaken": "유선랜 등록 확인",
    "tags": [
      "네트워크",
      "연결 요청"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 네트워크 연결 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 연결 요청. 현장 처리 결과 검증.",
      "recommendation": "[R] 유선랜 등록 확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1357",
    "title": "연결 오류 - 시뮬레이션 PC 내 내부 보안망 및 무선 인터넷",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/24(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "연결 오류",
    "symptom": "시뮬레이션 PC 내 내부 보안망 및 무선 인터넷 연결 오류",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "연결 오류"
    ],
    "sbar": {
      "situation": "[S] 시뮬레이션 PC 내 내부 보안망 및 무선 인터넷 연결 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 연결 오류. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1358",
    "title": "인터넷 변경 - 이사 후 PC 점검 및 무선 인터넷 변경",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/25(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "인터넷 변경",
    "symptom": "이사 후 PC 점검 및 무선 인터넷 변경",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "인터넷 변경"
    ],
    "sbar": {
      "situation": "[S] 이사 후 PC 점검 및 무선 인터넷 변경",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 인터넷 변경. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1359",
    "title": "망 점검 - 일반망/내부 보안망 네트워크 점검",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/26(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "망 점검",
    "symptom": "일반망/내부 보안망 네트워크 점검",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "망 점검"
    ],
    "sbar": {
      "situation": "[S] 일반망/내부 보안망 네트워크 점검",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 망 점검. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1361",
    "title": "내부 보안망 네트워크 설정 - 내부 보안망 네트워크 설정",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/28(금)",
    "categoryLarge": "네트워크",
    "categoryMedium": "내부 보안망 네트워크 설정",
    "symptom": "내부 보안망 네트워크 설정",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "내부 보안망 네트워크 설정"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 네트워크 설정",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 내부 보안망 네트워크 설정. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1362",
    "title": "SSD 추가 - SSD 추가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "02/28(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "SSD 추가",
    "symptom": "SSD 추가",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "SSD 추가",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] SSD 추가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: SSD 추가. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1363",
    "title": "OS - 블루스크린",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/04(화)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "블루스크린",
    "actionTaken": "조치 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 블루스크린",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1364",
    "title": "SSD 교체 - SSD 불량으로 인한 교체",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/04(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "SSD 교체",
    "symptom": "SSD 불량으로 인한 교체",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "SSD 교체",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] SSD 불량으로 인한 교체",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: SSD 교체. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1365",
    "title": "배터리 고장 - 노트북 배터리 고장으로 인한 교체 신청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/05(수)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "배터리 고장",
    "symptom": "노트북 배터리 고장으로 인한 교체 신청",
    "actionTaken": "동일 모델 교체 완료",
    "tags": [
      "하드웨어",
      "배터리 고장"
    ],
    "sbar": {
      "situation": "[S] 노트북 배터리 고장으로 인한 교체 신청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 배터리 고장. 현장 처리 결과 검증.",
      "recommendation": "[R] 동일 모델 교체 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1366",
    "title": "자료 이관 - 노후 PC 자료 이관",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/06(목)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "자료 이관",
    "symptom": "노후 PC 자료 이관",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "자료 이관"
    ],
    "sbar": {
      "situation": "[S] 노후 PC 자료 이관",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 자료 이관. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1368",
    "title": "데이터 백업 - 내부 보안망 PC 교체로 인한 데이터 백업 이동(",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/10(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데이터 백업",
    "symptom": "내부 보안망 PC 교체로 인한 데이터 백업 이동(D드라이브 전체)",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "데이터 백업",
      "D드라이브",
      "백업"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 PC 교체로 인한 데이터 백업 이동(D드라이브 전체)",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데이터 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[D드라이브]], [[백업]]"
    },
    "wikilinks": [
      "D드라이브",
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1372",
    "title": "자료 이동 요청 - 퇴사자 PC 내 자료이동 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/17(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "자료 이동 요청",
    "symptom": "퇴사자 PC 내 자료이동 요청",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "자료 이동 요청"
    ],
    "sbar": {
      "situation": "[S] 퇴사자 PC 내 자료이동 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 자료 이동 요청. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1373",
    "title": "무선랜 교체 - 무선랜 교체",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/17(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "무선랜 교체",
    "symptom": "무선랜 교체",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "무선랜 교체"
    ],
    "sbar": {
      "situation": "[S] 무선랜 교체",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 무선랜 교체. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1374",
    "title": "내부 보안망 무선 교체 - 내부 보안망 무선 교체",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/17(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "내부 보안망 무선 교체",
    "symptom": "내부 보안망 무선 교체",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "내부 보안망 무선 교체"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 무선 교체",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 내부 보안망 무선 교체. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1375",
    "title": "SSD 장착 - SSD 장착",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/18(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "SSD 장착",
    "symptom": "SSD 장착",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "SSD 장착",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] SSD 장착",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: SSD 장착. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1378",
    "title": "PC 재부팅 - PC 재부팅",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/21(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "PC 재부팅",
    "symptom": "PC 재부팅",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "PC 재부팅"
    ],
    "sbar": {
      "situation": "[S] PC 재부팅",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: PC 재부팅. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1379",
    "title": "PC 느림 - PC 느림, 꺼짐, 인터넷 연결 느림, 키보",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/24(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "PC 느림",
    "symptom": "PC 느림, 꺼짐, 인터넷 연결 느림, 키보드 인식이 안되는 현상 발생",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "PC 느림"
    ],
    "sbar": {
      "situation": "[S] PC 느림, 꺼짐, 인터넷 연결 느림, 키보드 인식이 안되는 현상 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: PC 느림. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1380",
    "title": "와이파이 연결 - 이더넷 연결 컨버터 분실로 인한 와이파이 연",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/25(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "와이파이 연결",
    "symptom": "이더넷 연결 컨버터 분실로 인한 와이파이 연결로 변경",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "와이파이 연결"
    ],
    "sbar": {
      "situation": "[S] 이더넷 연결 컨버터 분실로 인한 와이파이 연결로 변경",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 와이파이 연결. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1381",
    "title": "내부 보안망 안 됨 - 내부 보안망 안 됨",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/26(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "내부 보안망 안 됨",
    "symptom": "내부 보안망 안 됨",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "내부 보안망 안 됨"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 안 됨",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 내부 보안망 안 됨. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1383",
    "title": "OS - PPT 작업 후 저장 시 응답없음 및 화면",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "03/28(금)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "PPT 작업 후 저장 시 응답없음 및 화면 멈춤, 문서보안(DRM) 삭제 후 재시도 했으나 동일 증상 확인",
    "actionTaken": "조치 완료",
    "tags": [
      "소프트웨어",
      "OS",
      "DRM"
    ],
    "sbar": {
      "situation": "[S] PPT 작업 후 저장 시 응답없음 및 화면 멈춤, 문서보안(DRM) 삭제 후 재시도 했으나 동일 증상 확인",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[문서보안(DRM)]]"
    },
    "wikilinks": [
      "문서보안(DRM)"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1384",
    "title": "저장장치 구입 - 저장매체 구입 및 추가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/01(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "저장장치 구입",
    "symptom": "저장매체 구입 및 추가",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "저장장치 구입"
    ],
    "sbar": {
      "situation": "[S] 저장매체 구입 및 추가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 저장장치 구입. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1385",
    "title": "유, 무선 변경 - 내부 보안망 네트워크 유, 무선 변경",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/02(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "유, 무선 변경",
    "symptom": "내부 보안망 네트워크 유, 무선 변경",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "유, 무선 변경"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 네트워크 유, 무선 변경",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 유, 무선 변경. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1387",
    "title": "랜카드 인식 오류 - LoiFi 랜카드 인식 오류",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/07(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "랜카드 인식 오류",
    "symptom": "LoiFi 랜카드 인식 오류",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "랜카드 인식 오류"
    ],
    "sbar": {
      "situation": "[S] LoiFi 랜카드 인식 오류",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 랜카드 인식 오류. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1388",
    "title": "전원 안 켜짐 - 전원 안 켜짐",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/07(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "전원 안 켜짐",
    "symptom": "전원 안 켜짐",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "전원 안 켜짐"
    ],
    "sbar": {
      "situation": "[S] 전원 안 켜짐",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 전원 안 켜짐. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1389",
    "title": "네트워크 미연결 - 네트워크 미연결",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/08(화)",
    "categoryLarge": "네트워크",
    "categoryMedium": "네트워크 미연결",
    "symptom": "네트워크 미연결",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "네트워크 미연결"
    ],
    "sbar": {
      "situation": "[S] 네트워크 미연결",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 네트워크 미연결. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1390",
    "title": "SSD 추가 증설 - SSD 추가 증설",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/09(수)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "SSD 추가 증설",
    "symptom": "SSD 추가 증설",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "SSD 추가 증설",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] SSD 추가 증설",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: SSD 추가 증설. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1391",
    "title": "연결 불가 - 네트워크 연결 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/10(목)",
    "categoryLarge": "네트워크",
    "categoryMedium": "연결 불가",
    "symptom": "네트워크 연결 불가",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "연결 불가",
      "SW팀(미래기술)"
    ],
    "sbar": {
      "situation": "[S] 네트워크 연결 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 연결 불가. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1392",
    "title": "접속 불가 - 네트워크 접속 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/11(금)",
    "categoryLarge": "네트워크",
    "categoryMedium": "접속 불가",
    "symptom": "네트워크 접속 불가",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "접속 불가"
    ],
    "sbar": {
      "situation": "[S] 네트워크 접속 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 접속 불가. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1393",
    "title": "C드라이브 용량 부족 - C드라이브 용량 부족",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/11(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "C드라이브 용량 부족",
    "symptom": "C드라이브 용량 부족",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "C드라이브 용량 부족",
      "C드라이브"
    ],
    "sbar": {
      "situation": "[S] C드라이브 용량 부족",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: C드라이브 용량 부족. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[C드라이브]]"
    },
    "wikilinks": [
      "C드라이브"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1394",
    "title": "데이터 이관 요청 - Jetson 보드에 부착된 SSD 탈착 후",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/14(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데이터 이관 요청",
    "symptom": "Jetson 보드에 부착된 SSD 탈착 후 데이터 이관 요청",
    "actionTaken": "조치 완료",
    "tags": [
      "하드웨어",
      "데이터 이관 요청",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] Jetson 보드에 부착된 SSD 탈착 후 데이터 이관 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데이터 이관 요청. 현장 처리 결과 검증.",
      "recommendation": "[R] 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1395",
    "title": "일반 업무망 - 10.240.32.128 (일반 업무망)",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/14(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "일반 업무망",
    "symptom": "10.240.32.128 (일반 업무망)",
    "actionTaken": "조치 완료",
    "tags": [
      "네트워크",
      "일반 업무망",
      "TOP TF"
    ],
    "sbar": {
      "situation": "[S] 10.240.32.128 (일반 업무망)",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 일반 업무망. 현장 처리 결과 검증.",
      "recommendation": "[R]"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1397",
    "title": "V3 업데이트 - V3 업데이트",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/16(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "V3 업데이트",
    "symptom": "V3 업데이트",
    "actionTaken": "V3 업데이트 완료",
    "tags": [
      "소프트웨어",
      "V3 업데이트",
      "V3"
    ],
    "sbar": {
      "situation": "[S] V3 업데이트",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: V3 업데이트. 현장 처리 결과 검증.",
      "recommendation": "[R] V3 업데이트 완료 📌 연관 지식: [[V3]]"
    },
    "wikilinks": [
      "V3"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.320Z",
    "updatedAt": "2026-08-07T05:08:48.320Z"
  },
  {
    "id": "seed-1399",
    "title": "일반 업무망 세팅 - 일반 업무망 세팅 3대 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/23(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "일반 업무망 세팅",
    "symptom": "일반 업무망 세팅 3대 요청",
    "actionTaken": "셋팅완료",
    "tags": [
      "네트워크",
      "일반 업무망 세팅"
    ],
    "sbar": {
      "situation": "[S] 일반 업무망 세팅 3대 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 일반 업무망 세팅. 현장 처리 결과 검증.",
      "recommendation": "[R] 셋팅완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1400",
    "title": "부팅 불가 - 부팅 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/25(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "부팅 불가",
    "symptom": "부팅 불가",
    "actionTaken": "SSD 손상으로 점검 완료",
    "tags": [
      "하드웨어",
      "부팅 불가",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] 부팅 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 부팅 불가. 현장 처리 결과 검증.",
      "recommendation": "[R] SSD 손상으로 점검 완료 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1401",
    "title": "부팅 불가 - 부팅 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/25(금)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "부팅 불가",
    "symptom": "부팅 불가",
    "actionTaken": "SSD 손상으로 복구업체 이관 완료",
    "tags": [
      "하드웨어",
      "부팅 불가",
      "SSD"
    ],
    "sbar": {
      "situation": "[S] 부팅 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 부팅 불가. 현장 처리 결과 검증.",
      "recommendation": "[R] SSD 손상으로 복구업체 이관 완료 📌 연관 지식: [[SSD]]"
    },
    "wikilinks": [
      "SSD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1402",
    "title": "내부 보안망 용량 증설 - 내부 보안망 용량 증설",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "04/28(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "내부 보안망 용량 증설",
    "symptom": "내부 보안망 용량 증설",
    "actionTaken": "M.2 SSD 500GB 증설(장착) 및 파티션 셋팅 완료",
    "tags": [
      "네트워크",
      "내부 보안망 용량 증설",
      "SW팀(미래기술)",
      "SSD",
      "파티션"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 용량 증설",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 내부 보안망 용량 증설. 현장 처리 결과 검증.",
      "recommendation": "[R] M.2 SSD 500GB 증설(장착) 및 파티션 셋팅 완료 📌 연관 지식: [[SSD]], [[파티션]]"
    },
    "wikilinks": [
      "SSD",
      "파티션"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1406",
    "title": "초기화 - 이글오피스 비밀번호 분실",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/07(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "초기화",
    "symptom": "이글오피스 비밀번호 분실",
    "actionTaken": "암호초기화완료",
    "tags": [
      "소프트웨어",
      "초기화",
      "오피스"
    ],
    "sbar": {
      "situation": "[S] 이글오피스 비밀번호 분실",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 초기화. 현장 처리 결과 검증.",
      "recommendation": "[R] 암호초기화완료 📌 연관 지식: [[오피스]]"
    },
    "wikilinks": [
      "오피스"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1408",
    "title": "인터넷 접속 - 인터넷 연결 끊김",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/12(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "인터넷 접속",
    "symptom": "인터넷 연결 끊김",
    "actionTaken": "드라이버 재설치 완료",
    "tags": [
      "네트워크",
      "인터넷 접속"
    ],
    "sbar": {
      "situation": "[S] 인터넷 연결 끊김",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 인터넷 접속. 현장 처리 결과 검증.",
      "recommendation": "[R] 드라이버 재설치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1409",
    "title": "Active Directory 설정 이슈 - Active Directory 설정 이슈",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/12(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "Active Directory 설정 이슈",
    "symptom": "Active Directory 설정 이슈",
    "actionTaken": "Active Directory 설정 이행 완료",
    "tags": [
      "소프트웨어",
      "Active Directory 설정 이슈"
    ],
    "sbar": {
      "situation": "[S] Active Directory 설정 이슈",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: Active Directory 설정 이슈. 현장 처리 결과 검증.",
      "recommendation": "[R] Active Directory 설정 이행 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1410",
    "title": "데이터 이전 - 노후 PC 교체로 인한 데이터 이전",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/13(화)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "데이터 이전",
    "symptom": "노후 PC 교체로 인한 데이터 이전",
    "actionTaken": "데이터 이전 및 PC 교체 완료",
    "tags": [
      "하드웨어",
      "데이터 이전"
    ],
    "sbar": {
      "situation": "[S] 노후 PC 교체로 인한 데이터 이전",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 데이터 이전. 현장 처리 결과 검증.",
      "recommendation": "[R] 데이터 이전 및 PC 교체 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1411",
    "title": "자료 이관 - 복구 자료 이관",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/14(수)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "자료 이관",
    "symptom": "복구 자료 이관",
    "actionTaken": "조치완료",
    "tags": [
      "하드웨어",
      "자료 이관"
    ],
    "sbar": {
      "situation": "[S] 복구 자료 이관",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 자료 이관. 현장 처리 결과 검증.",
      "recommendation": "[R] 조치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1412",
    "title": "내부 보안망 연결 불가 - 인터넷&내부 보안망 연결 불가",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/14(수)",
    "categoryLarge": "네트워크",
    "categoryMedium": "내부 보안망 연결 불가",
    "symptom": "인터넷&내부 보안망 연결 불가",
    "actionTaken": "드라이버 재설치 완료",
    "tags": [
      "네트워크",
      "내부 보안망 연결 불가"
    ],
    "sbar": {
      "situation": "[S] 인터넷&내부 보안망 연결 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 내부 보안망 연결 불가. 현장 처리 결과 검증.",
      "recommendation": "[R] 드라이버 재설치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1413",
    "title": "word 프로그램 이슈 - word 프로그램 미동작",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/14(수)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "word 프로그램 이슈",
    "symptom": "word 프로그램 미동작",
    "actionTaken": "DRM 재설치완료",
    "tags": [
      "소프트웨어",
      "word 프로그램 이슈"
    ],
    "sbar": {
      "situation": "[S] word 프로그램 미동작",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: word 프로그램 이슈. 현장 처리 결과 검증.",
      "recommendation": "[R] DRM 재설치완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1414",
    "title": "프로그램 오류 - 프로그램 실행 오류 점검",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/19(월)",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "프로그램 오류",
    "symptom": "프로그램 실행 오류 점검",
    "actionTaken": "문제 없음",
    "tags": [
      "소프트웨어",
      "프로그램 오류"
    ],
    "sbar": {
      "situation": "[S] 프로그램 실행 오류 점검",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 프로그램 오류. 현장 처리 결과 검증.",
      "recommendation": "[R] 문제 없음"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1416",
    "title": "일반망 IP 변경 불가 증상 - 일반망 IP 변경 불가 증상",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/19(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "일반망 IP 변경 불가 증상",
    "symptom": "일반망 IP 변경 불가 증상",
    "actionTaken": "보안 솔루션 OTP 발급 완료",
    "tags": [
      "네트워크",
      "일반망 IP 변경 불가 증상"
    ],
    "sbar": {
      "situation": "[S] 일반망 IP 변경 불가 증상",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 일반망 IP 변경 불가 증상. 현장 처리 결과 검증.",
      "recommendation": "[R] 보안 솔루션 OTP 발급 완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1418",
    "title": "저장장치 장착 - HDD 2TB 장착 요청",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/21(월)",
    "categoryLarge": "하드웨어",
    "categoryMedium": "저장장치 장착",
    "symptom": "HDD 2TB 장착 요청",
    "actionTaken": "HDD 2TB 장착 완료",
    "tags": [
      "하드웨어",
      "저장장치 장착"
    ],
    "sbar": {
      "situation": "[S] HDD 2TB 장착 요청",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 저장장치 장착. 현장 처리 결과 검증.",
      "recommendation": "[R] HDD 2TB 장착 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1420",
    "title": "네트워크 오작동 - 내부 보안망 Note PC 네트워크 오작동",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "05/26(월)",
    "categoryLarge": "네트워크",
    "categoryMedium": "네트워크 오작동",
    "symptom": "내부 보안망 Note PC 네트워크 오작동",
    "actionTaken": "와이파이 T-gate 계정 로그인 후 정상 확인",
    "tags": [
      "네트워크",
      "네트워크 오작동"
    ],
    "sbar": {
      "situation": "[S] 내부 보안망 Note PC 네트워크 오작동",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 네트워크 오작동. 현장 처리 결과 검증.",
      "recommendation": "[R] 와이파이 T-gate 계정 로그인 후 정상 확인"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1428",
    "title": "기본 프로그램 - 환경안전 사이트 접속이 불가능 합니다.",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "Q&A 가이드",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "환경안전 사이트 접속이 불가능 합니다.",
    "actionTaken": "사내 메신저 지원업무>사무용 S/W 설치&안내>2페이지에 있는 환경안전 전산시스템 초기접속 에러 ActiveX설치 대응 가이드를 참고하셔서 액티브 재설치를 진행해주시면 됩니다.",
    "tags": [
      "소프트웨어",
      "전사 공통",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 환경안전 사이트 접속이 불가능 합니다.",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 지원업무>사무용 S/W 설치&안내>2페이지에 있는 환경안전 전산시스템 초기접속 에러 ActiveX설치 대응 가이드를 참고하셔서 액티브 재설치를 진행해주시면 됩니다. 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1431",
    "title": "무선네트워크 - 일반망 PC 사용중 인터넷이 자주 끊기는 현",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "Q&A 가이드",
    "categoryLarge": "네트워크",
    "categoryMedium": "무선네트워크",
    "symptom": "일반망 PC 사용중 인터넷이 자주 끊기는 현상이 발생합니다.",
    "actionTaken": "사내 메신저 게시판> 지사 게시판 >지사 사업장 무선 네트워크 관련 게시글에 첨부된 일반망 무선 네트워크 최적화 메뉴얼을 진행해주시면 됩니다. 조치 후에도 동일 증상이 발생 할 시 각 사업장 네트워크ICT 담당자나 PC지원으로 연락주시기 바랍니다.",
    "tags": [
      "네트워크",
      "무선네트워크",
      "사내 메신저"
    ],
    "sbar": {
      "situation": "[S] 일반망 PC 사용중 인터넷이 자주 끊기는 현상이 발생합니다.",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 무선네트워크. 현장 처리 결과 검증.",
      "recommendation": "[R] 사내 메신저 게시판> 지사 게시판 >지사 사업장 무선 네트워크 관련 게시글에 첨부된 일반망 무선 네트워크 최적화 메뉴얼을 진행해주시면 됩니다. 조치 후에도 동일 증상이 발생 할 시 각 사업장 네트워크ICT 담당자나 PC지원으로 연락주시기 바랍니다. 📌 연관 지식: [[사내 메신저]]"
    },
    "wikilinks": [
      "사내 메신저"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1443",
    "title": "백업 - 문서파일 등 일부 데이터가 손실(삭제) 되었",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "Q&A 가이드",
    "categoryLarge": "하드웨어",
    "categoryMedium": "백업",
    "symptom": "문서파일 등 일부 데이터가 손실(삭제) 되었습니다. 어떻게 진행 하면 되나요?",
    "actionTaken": "데이터 복구 관련은 PC지원에서 작업이 불가능 합니다. 해당 파티션에 추가적으로 데이터 추가/삭제 작업 금지, 바로 PC지원 연락하셔서 필요 시 복구업체 의뢰 진행 바랍니다. 복구 비용은 부서경비로 처리 하셔야 합니다.",
    "tags": [
      "하드웨어",
      "백업",
      "전사 공통",
      "파티션"
    ],
    "sbar": {
      "situation": "[S] 문서파일 등 일부 데이터가 손실(삭제) 되었습니다. 어떻게 진행 하면 되나요?",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] 데이터 복구 관련은 PC지원에서 작업이 불가능 합니다. 해당 파티션에 추가적으로 데이터 추가/삭제 작업 금지, 바로 PC지원 연락하셔서 필요 시 복구업체 의뢰 진행 바랍니다. 복구 비용은 부서경비로 처리 하셔야 합니다. 📌 연관 지식: [[파티션]]"
    },
    "wikilinks": [
      "파티션"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1444",
    "title": "일반망 - 임원실 내 일반망 무선 네트워크 접속 장",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-03-04 17:00",
    "categoryLarge": "네트워크",
    "categoryMedium": "일반망",
    "symptom": "임원실 내 일반망 무선 네트워크 접속 장애 및 신호 끊김 현상 발생",
    "actionTaken": "임원실 방문 후 일반망 유무선 공유기 무선 채널 간섭 조정 및 최적화 케이블 신호 점검 완료",
    "tags": [
      "네트워크",
      "일반망"
    ],
    "sbar": {
      "situation": "[S] 임원실 내 일반망 무선 네트워크 접속 장애 및 신호 끊김 현상 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 일반망. 현장 처리 결과 검증.",
      "recommendation": "[R] 임원실 방문 후 일반망 유무선 공유기 무선 채널 간섭 조정 및 최적화 케이블 신호 점검 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1453",
    "title": "일반망 - 사내 식당 관리실 신규 PC 전입에 따른 일",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-04-01 17:00",
    "categoryLarge": "네트워크",
    "categoryMedium": "일반망",
    "symptom": "사내 식당 관리실 신규 PC 전입에 따른 일반 업무망 네트워크 인터넷 회선 연결 끊김",
    "actionTaken": "외부 인터넷 개통 수리기사 현장 인솔 및 포트 가용 상태 체크, 신규 LAN선 포설을 통한 일반망 네트워크 세팅 개통 지원",
    "tags": [
      "네트워크",
      "일반망",
      "식당"
    ],
    "sbar": {
      "situation": "[S] 사내 식당 관리실 신규 PC 전입에 따른 일반 업무망 네트워크 인터넷 회선 연결 끊김",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 일반망. 현장 처리 결과 검증.",
      "recommendation": "[R] 외부 인터넷 개통 수리기사 현장 인솔 및 포트 가용 상태 체크, 신규 LAN선 포설을 통한 일반망 네트워크 세팅 개통 지원"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1456",
    "title": "OS - 업무 부서 임직원 개발용 노트북의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-04-04 17:30",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "업무 부서 임직원 개발용 노트북의 윈도우 OS 깨짐 및 시스템 라이브러리 손상",
    "actionTaken": "노트북 데이터 안전 이관 후 윈도우 OS를 재설치하고 개발 업무용 호환 드라이버 패키지를 수동 정합 설치하여 기능 정상화",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 업무 부서 임직원 개발용 노트북의 윈도우 OS 깨짐 및 시스템 라이브러리 손상",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 노트북 데이터 안전 이관 후 윈도우 OS를 재설치하고 개발 업무용 호환 드라이버 패키지를 수동 정합 설치하여 기능 정상화"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1461",
    "title": "OS - 업무 부서 임직원 일반망 PC 사용 중",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-04-17 18:00",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "업무 부서 임직원 일반망 PC 사용 중 시스템 파일 업데이트 도중 부팅 에러 발생",
    "actionTaken": "PC 전원 방전 후 윈도우 OS 손상 파일 자동 복구 명령어를 적용하고, 일반망 표준 환경으로 신규 OS 마스터 재설치",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 업무 부서 임직원 일반망 PC 사용 중 시스템 파일 업데이트 도중 부팅 에러 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] PC 전원 방전 후 윈도우 OS 손상 파일 자동 복구 명령어를 적용하고, 일반망 표준 환경으로 신규 OS 마스터 재설치"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1464",
    "title": "기본 프로그램 - 전자광학체계2팀 보안 담당자 개발 PC 내",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-04-18 17:00",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "전자광학체계2팀 보안 담당자 개발 PC 내 Visual Studio 2019 라이선스 무효화 및 설치 불가",
    "actionTaken": "PC지원실 현장 지원을 통해 기존 평가판 버전을 완전 삭제 및 레지스트리 정리 후 정식 정품 라이선스로 최적 재설치 완료",
    "tags": [
      "소프트웨어"
    ],
    "sbar": {
      "situation": "[S] 전자광학체계2팀 보안 담당자 개발 PC 내 Visual Studio 2019 라이선스 무효화 및 설치 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] PC지원실 현장 지원을 통해 기존 평가판 버전을 완전 삭제 및 레지스트리 정리 후 정식 정품 라이선스로 최적 재설치 완료"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1465",
    "title": "DNS - 구 DNS 서버 중단에 따라 사내 공용 구역",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-04-26 10:06",
    "categoryLarge": "네트워크",
    "categoryMedium": "DNS",
    "symptom": "구 DNS 서버 중단에 따라 사내 공용 구역 및 공용 업무 PC의 일괄 인터넷 단절 및 사내 메신저 먹통 장애",
    "actionTaken": "본사 접견실, 제안서룸, 전 회의실 공용 PC의 DNS 주소를 신규 DNS 서버 IP로 수동 일괄 전환하여 네트워크 전면 복구",
    "tags": [
      "네트워크",
      "DNS"
    ],
    "sbar": {
      "situation": "[S] 구 DNS 서버 중단에 따라 사내 공용 구역 및 공용 업무 PC의 일괄 인터넷 단절 및 사내 메신저 먹통 장애",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: DNS. 현장 처리 결과 검증.",
      "recommendation": "[R] 본사 접견실, 제안서룸, 전 회의실 공용 PC의 DNS 주소를 신규 DNS 서버 IP로 수동 일괄 전환하여 네트워크 전면 복구 📌 연관 지식: [[IP]], [[DNS]]"
    },
    "wikilinks": [
      "IP",
      "DNS"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1474",
    "title": "내부 보안망 - 원격 파견지 내 임직원 사내용 개발 노",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-05-31 17:00",
    "categoryLarge": "네트워크",
    "categoryMedium": "내부 보안망",
    "symptom": "원격 파견지 내 임직원 사내용 개발 노트북의 사내 전용 네트워크 포트 이탈 및 통신 완전 단절",
    "actionTaken": "원격 사업장 파견지 긴급 출장 지원을 수행하여 네트워크 랜커넥터 물리 수리 및 IP 라우팅 재설정 완료",
    "tags": [
      "네트워크",
      "내부 보안망"
    ],
    "sbar": {
      "situation": "[S] 원격 파견지 내 임직원 사내용 개발 노트북의 사내 전용 네트워크 포트 이탈 및 통신 완전 단절",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 내부 보안망. 현장 처리 결과 검증.",
      "recommendation": "[R] 원격 사업장 파견지 긴급 출장 지원을 수행하여 네트워크 랜커넥터 물리 수리 및 IP 라우팅 재설정 완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.321Z",
    "updatedAt": "2026-08-07T05:08:48.321Z"
  },
  {
    "id": "seed-1479",
    "title": "OS - 업무 부서 임직원 사외 출장용 노트북",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-07-08 17:30",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "업무 부서 임직원 사외 출장용 노트북 V3 및 T-gate 에이전트 버전 구형으로 인한 반출 승인 거절",
    "actionTaken": "출장용 공용 노트북 OS 일괄 클린 설치 및 필수 사외 반출용 보안 에이전트 최신 패치 업데이트 완료 후 인계",
    "tags": [
      "소프트웨어",
      "OS",
      "V3"
    ],
    "sbar": {
      "situation": "[S] 업무 부서 임직원 사외 출장용 노트북 V3 및 T-gate 에이전트 버전 구형으로 인한 반출 승인 거절",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 출장용 공용 노트북 OS 일괄 클린 설치 및 필수 사외 반출용 보안 에이전트 최신 패치 업데이트 완료 후 인계 📌 연관 지식: [[V3]]"
    },
    "wikilinks": [
      "V3"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  },
  {
    "id": "seed-1482",
    "title": "내부 보안망 - 데이터링크2팀 지원 담당자 내부 보안망 PC 유선",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-07-12 17:00",
    "categoryLarge": "네트워크",
    "categoryMedium": "내부 보안망",
    "symptom": "데이터링크2팀 지원 담당자 내부 보안망 PC 유선 연결 시 IP 취득 불가 및 잦은 무선인증 팅김 장애",
    "actionTaken": "사무실 허브 포트에서 PC까지 포설된 노후 랜커넥터 수동 재제작 교체 및 사내 타임서버 수동 재셋팅 완료",
    "tags": [
      "네트워크",
      "내부 보안망"
    ],
    "sbar": {
      "situation": "[S] 데이터링크2팀 지원 담당자 내부 보안망 PC 유선 연결 시 IP 취득 불가 및 잦은 무선인증 팅김 장애",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 내부 보안망. 현장 처리 결과 검증.",
      "recommendation": "[R] 사무실 허브 포트에서 PC까지 포설된 노후 랜커넥터 수동 재제작 교체 및 사내 타임서버 수동 재셋팅 완료 📌 연관 지식: [[IP]]"
    },
    "wikilinks": [
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  },
  {
    "id": "seed-1484",
    "title": "일반망 - 업무 부서 임직원 일반망 인터넷 서",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-07-16 17:30",
    "categoryLarge": "네트워크",
    "categoryMedium": "일반망",
    "symptom": "업무 부서 임직원 일반망 인터넷 서핑 중 비정상 사이트 팝업 중독 및 IP 주소 중복 차단",
    "actionTaken": "PC 내의 비정상 네트워크 환경 초기화 및 캐시 전량 청소 후, 안전한 일반망 고정 IP 수동 재설정 및 WIPS 연동 완료",
    "tags": [
      "네트워크",
      "일반망",
      "WIPS"
    ],
    "sbar": {
      "situation": "[S] 업무 부서 임직원 일반망 인터넷 서핑 중 비정상 사이트 팝업 중독 및 IP 주소 중복 차단",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 일반망. 현장 처리 결과 검증.",
      "recommendation": "[R] PC 내의 비정상 네트워크 환경 초기화 및 캐시 전량 청소 후, 안전한 일반망 고정 IP 수동 재설정 및 WIPS 연동 완료 📌 연관 지식: [[WIPS]], [[IP]]"
    },
    "wikilinks": [
      "WIPS",
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  },
  {
    "id": "seed-1485",
    "title": "내부 보안망 - 해양미래기술센터 보안 담당자 내부 보안망 로그인",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-07-17 17:30",
    "categoryLarge": "네트워크",
    "categoryMedium": "내부 보안망",
    "symptom": "해양미래기술센터 보안 담당자 내부 보안망 로그인 정보 불일치 메시지 및 무선 인증 프로필 파손",
    "actionTaken": "내부 보안망 고유 랜커넥터 물리 수리 및 T-gate 패스워드 재설정 동기화를 통하여 무선인증솔루션 연결 복구",
    "tags": [
      "네트워크",
      "내부 보안망",
      "워드"
    ],
    "sbar": {
      "situation": "[S] 해양미래기술센터 보안 담당자 내부 보안망 로그인 정보 불일치 메시지 및 무선 인증 프로필 파손",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 내부 보안망. 현장 처리 결과 검증.",
      "recommendation": "[R] 내부 보안망 고유 랜커넥터 물리 수리 및 T-gate 패스워드 재설정 동기화를 통하여 무선인증솔루션 연결 복구 📌 연관 지식: [[워드]]"
    },
    "wikilinks": [
      "워드"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  },
  {
    "id": "seed-1486",
    "title": "OS - 업무 부서 임직원 출장 복귀 PC의",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-07-18 17:00",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "업무 부서 임직원 출장 복귀 PC의 원인 미상의 운영체제 커널 손상 및 윈도우 부팅 불가",
    "actionTaken": "기존 로컬 자료 백업 유휴 디스크 보존 조치 후, 최신 윈도우 OS 마스터이미지 수동 초기화 설치 및 보안 업데이트",
    "tags": [
      "소프트웨어",
      "OS",
      "백업"
    ],
    "sbar": {
      "situation": "[S] 업무 부서 임직원 출장 복귀 PC의 원인 미상의 운영체제 커널 손상 및 윈도우 부팅 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 기존 로컬 자료 백업 유휴 디스크 보존 조치 후, 최신 윈도우 OS 마스터이미지 수동 초기화 설치 및 보안 업데이트 📌 연관 지식: [[백업]]"
    },
    "wikilinks": [
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  },
  {
    "id": "seed-1492",
    "title": "OS - 업무 부서 임직원 내부 보안망 PC 사용 중",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-08-19 17:30",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "업무 부서 임직원 내부 보안망 PC 사용 중 불규칙적인 무한 블루스크린(Crash) 및 시스템 다운",
    "actionTaken": "내부 보안망 PC 내부 장착된 무선 랜카드 드라이버 충돌 확인 후, 안전모드 진입하여 드라이버 초기화 및 최신 정합 드라이버 재설치",
    "tags": [
      "소프트웨어",
      "OS",
      "블루스크린"
    ],
    "sbar": {
      "situation": "[S] 업무 부서 임직원 내부 보안망 PC 사용 중 불규칙적인 무한 블루스크린(Crash) 및 시스템 다운",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] 내부 보안망 PC 내부 장착된 무선 랜카드 드라이버 충돌 확인 후, 안전모드 진입하여 드라이버 초기화 및 최신 정합 드라이버 재설치 📌 연관 지식: [[블루스크린]]"
    },
    "wikilinks": [
      "블루스크린"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  },
  {
    "id": "seed-1495",
    "title": "일반망 - 온라인 전사 자산실사 팝업 동작 중 신규 및",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2024-09-24 15:58",
    "categoryLarge": "네트워크",
    "categoryMedium": "일반망",
    "symptom": "온라인 전사 자산실사 팝업 동작 중 신규 및 전배 임직원의 사번 미등록 오류에 따른 프로그램 튕김",
    "actionTaken": "PC지원실 접수 건에 대해 서버에서 사용자 정보 강제 수동 동기화 및 자산 등록 완료 처리 회신",
    "tags": [
      "네트워크",
      "일반망"
    ],
    "sbar": {
      "situation": "[S] 온라인 전사 자산실사 팝업 동작 중 신규 및 전배 임직원의 사번 미등록 오류에 따른 프로그램 튕김",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 일반망. 현장 처리 결과 검증.",
      "recommendation": "[R] PC지원실 접수 건에 대해 서버에서 사용자 정보 강제 수동 동기화 및 자산 등록 완료 처리 회신"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  },
  {
    "id": "seed-1499",
    "title": "OS - 본사 임직원(정세진 실장 등)의 클레버",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2025-02-03 10:31",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "본사 임직원(정세진 실장 등)의 사내 메신저 패스워드 강제 초기화 이후 AD 로그인 불가 및 비밀번호 불일치 현상 발생",
    "actionTaken": "AD 도메인 컨트롤러 동기화 지연 확인 후, 로컬 PC에서 WIFI 해제 후 유선 LAN 강제 변경을 통해 AD 패스워드 재설정 동기화 유도",
    "tags": [
      "소프트웨어",
      "OS",
      "사내 메신저",
      "워드",
      "AD"
    ],
    "sbar": {
      "situation": "[S] 본사 임직원(정세진 실장 등)의 사내 메신저 패스워드 강제 초기화 이후 AD 로그인 불가 및 비밀번호 불일치 현상 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] AD 도메인 컨트롤러 동기화 지연 확인 후, 로컬 PC에서 WIFI 해제 후 유선 LAN 강제 변경을 통해 AD 패스워드 재설정 동기화 유도 📌 연관 지식: [[사내 메신저]], [[워드]], [[AD]]"
    },
    "wikilinks": [
      "사내 메신저",
      "워드",
      "AD"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  },
  {
    "id": "seed-1501",
    "title": "백업 - 업무 부서 임직원 신구 PC 교체",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2025-07-07 13:15",
    "categoryLarge": "하드웨어",
    "categoryMedium": "백업",
    "symptom": "업무 부서 임직원 신구 PC 교체 중 크로스케이블 백업 전송 도중 오류 발생 및 기존 원본 데이터 소실",
    "actionTaken": "백업 끊김 현상 확인 후, 하드 탈거를 수행하여 사내 공식 보안 반출 승인을 득하고 데이터 정밀 복구 전문업체 긴급 이관 조치",
    "tags": [
      "하드웨어",
      "백업"
    ],
    "sbar": {
      "situation": "[S] 업무 부서 임직원 신구 PC 교체 중 크로스케이블 백업 전송 도중 오류 발생 및 기존 원본 데이터 소실",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 하드웨어 / 중분류: 백업. 현장 처리 결과 검증.",
      "recommendation": "[R] 백업 끊김 현상 확인 후, 하드 탈거를 수행하여 사내 공식 보안 반출 승인을 득하고 데이터 정밀 복구 전문업체 긴급 이관 조치 📌 연관 지식: [[백업]]"
    },
    "wikilinks": [
      "백업"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  },
  {
    "id": "seed-1508",
    "title": "일반망 - 사내 전산관리자의 무선 와이파이 보안 SSID",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2026-02-09 17:00",
    "categoryLarge": "네트워크",
    "categoryMedium": "일반망",
    "symptom": "사내 전산관리자의 무선 와이파이 보안 SSID 숨김(Hidden) 강제 개보수 조치 이후, 임직원 PC의 무선 네트워크 전면 단절",
    "actionTaken": "업무 부서 신영훈, 업무 부서 김정수 일반망 단말에 보안 SSID 및 고정 IP 무선 네트워크 수동 강제 셋팅 적용 완료",
    "tags": [
      "네트워크",
      "일반망",
      "SSID"
    ],
    "sbar": {
      "situation": "[S] 사내 전산관리자의 무선 와이파이 보안 SSID 숨김(Hidden) 강제 개보수 조치 이후, 임직원 PC의 무선 네트워크 전면 단절",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: 일반망. 현장 처리 결과 검증.",
      "recommendation": "[R] 업무 부서 신영훈, 업무 부서 김정수 일반망 단말에 보안 SSID 및 고정 IP 무선 네트워크 수동 강제 셋팅 적용 완료 📌 연관 지식: [[IP]], [[SSID]]"
    },
    "wikilinks": [
      "IP",
      "SSID"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  },
  {
    "id": "seed-1509",
    "title": "WIPS - 이진명 전무 신규 지급 노트북 무선 일반망",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2026-02-11 17:00",
    "categoryLarge": "네트워크",
    "categoryMedium": "WIPS",
    "symptom": "이진명 전무 신규 지급 노트북 무선 일반망 연결 시 필수 프로그램 설치 대기 중 무선 윕스(WIPS) 오탐으로 네트워크 강제 완전 차단 발생",
    "actionTaken": "전산관리자 무선 점검 대장에 단말 맥 주소 수동 승인 요청 등록 및 WIPS 무선 차단 예외 처리 인가 완료 후 프로그램 셋팅",
    "tags": [
      "네트워크",
      "WIPS"
    ],
    "sbar": {
      "situation": "[S] 이진명 전무 신규 지급 노트북 무선 일반망 연결 시 필수 프로그램 설치 대기 중 무선 윕스(WIPS) 오탐으로 네트워크 강제 완전 차단 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 네트워크 / 중분류: WIPS. 현장 처리 결과 검증.",
      "recommendation": "[R] 전산관리자 무선 점검 대장에 단말 맥 주소 수동 승인 요청 등록 및 WIPS 무선 차단 예외 처리 인가 완료 후 프로그램 셋팅 📌 연관 지식: [[WIPS]], [[IP]]"
    },
    "wikilinks": [
      "WIPS",
      "IP"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  },
  {
    "id": "seed-1510",
    "title": "기본 프로그램 - 신정두 상무 일반망 노트북의 MS 아웃룩 사",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2026-02-12 17:00",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "기본 프로그램",
    "symptom": "신정두 상무 일반망 노트북의 MS 아웃룩 사서함 파일 손상으로 인한 전체 메일함 검색 및 송수신 불가",
    "actionTaken": "손상된 아웃룩 메일 데이터(.pst) 파일 복구 유틸리티 실행 및 프로필 복구 조치 완료 후 정상 작동 확인",
    "tags": [
      "소프트웨어",
      "아웃룩"
    ],
    "sbar": {
      "situation": "[S] 신정두 상무 일반망 노트북의 MS 아웃룩 사서함 파일 손상으로 인한 전체 메일함 검색 및 송수신 불가",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: 기본 프로그램. 현장 처리 결과 검증.",
      "recommendation": "[R] 손상된 아웃룩 메일 데이터(.pst) 파일 복구 유틸리티 실행 및 프로필 복구 조치 완료 후 정상 작동 확인 📌 연관 지식: [[아웃룩]]"
    },
    "wikilinks": [
      "아웃룩"
    ],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  },
  {
    "id": "seed-1513",
    "title": "OS - 특정 일반망 PC 시작 메뉴 검색 불가 버그",
    "sourceFile": "PC 트러블슈팅 가이드",
    "date": "2026-04-27 14:46",
    "categoryLarge": "소프트웨어",
    "categoryMedium": "OS",
    "symptom": "특정 일반망 PC 시작 메뉴 검색 불가 버그 및 기본 캡처도구와 그림판 프로그램 영구 삭제 현상 다수 발생",
    "actionTaken": "PC지원실에서 사전 확보 중인 윈도우 표준 복구 패키지 설치파일을 사용하여 기본 앱들 전원 수동 정상 복구 수립",
    "tags": [
      "소프트웨어",
      "OS"
    ],
    "sbar": {
      "situation": "[S] 특정 일반망 PC 시작 메뉴 검색 불가 버그 및 기본 캡처도구와 그림판 프로그램 영구 삭제 현상 다수 발생",
      "background": "[B] 출처: PC 트러블슈팅 가이드",
      "assessment": "[A] 대분류: 소프트웨어 / 중분류: OS. 현장 처리 결과 검증.",
      "recommendation": "[R] PC지원실에서 사전 확보 중인 윈도우 표준 복구 패키지 설치파일을 사용하여 기본 앱들 전원 수동 정상 복구 수립"
    },
    "wikilinks": [],
    "backlinks": [],
    "createdAt": "2026-08-07T05:08:48.322Z",
    "updatedAt": "2026-08-07T05:08:48.322Z"
  }
];
