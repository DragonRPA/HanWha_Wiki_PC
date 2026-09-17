# 피씨위키(PC-Wiki) DB 스키마 규격 및 NotebookLM 자료 수집 가이드

본 문서는 **Google NotebookLM**에 소스(Source) 문서로 등록하여, 다양한 IT 기술 문서(매뉴얼, 공식 레퍼런스, 백서, 트러블슈팅 가이드)로부터 **피씨위키 시스템에 즉시 인입 가능한 정형화된 지식 데이터(JSON/CSV)**를 자동으로 수집·추출하기 위한 공식 스키마 정의서 및 프롬프트 명세서입니다.

---

## 1. 피씨위키 지식 베이스 DB 스키마 정의

### 1.1 JSON 스키마 명세 (`seed_data.js` 및 JSON 백업 표준)

```json
{
  "id": "string (고유 ID, 영문 소문자·숫자·하이픈 조합, 예: ms-update-80070002, hw-ami-beep-03)",
  "title": "string (지식 항목명, 오류코드 또는 기술명 명시, 예: [0x80070002] ERROR_FILE_NOT_FOUND - Windows 업데이트 오류)",
  "sourceFile": "string (공인 출처명, 예: Microsoft 공식 레퍼런스, PC 하드웨어 표준 진단 규격, KISA 보호나라)",
  "date": "string (YYYY-MM-DD 형식, 예: 2026-09-18)",
  "categoryLarge": "string (대분류: '소프트웨어' | '하드웨어' | '네트워크' 중 택1)",
  "categoryMedium": "string (중분류: 대표 기술 분야, 예: OS, Windows Update, 블루스크린(BSOD), 드라이버, 데스크탑, SSD, BIOS, RAM, IP, DNS, 복합기, 브라우저)",
  "symptom": "string (장애 접수 증상 및 오류 현상 요약)",
  "actionTaken": "string (표준 조치 내역 요약 - 핵심 조치 절차 1, 2, 3단계 요약)",
  "tags": [
    "string (대분류, 기술명, 오류코드, 칩셋, 부품명 등 순수 기술 명사 태그 배열)"
  ],
  "sbar": {
    "situation": "string ([S] 상황 개요 - 구체적 증상 및 업무 영향도)",
    "background": "string ([B] 발생 배경 - 출처, 라이선스, 운영체제/하드웨어 환경)",
    "assessment": "string ([A] 원인 분석 - 기술적 결함 메커니즘, 로그 분석, 레지스트리/커널 레벨 원인)",
    "recommendation": "string ([R] 표준 조치 가이드 - 단계별 번호 매김 조치 절차, 명령어 코드블록, 연관 지식 [[위키링크]] 포함)"
  },
  "wikilinks": [
    "string (본문 내 [[용어]] 형식으로 상호 참조되는 핵심 기술 키워드 배열)"
  ],
  "backlinks": [],
  "createdAt": "string (ISO 8601 타임스탬프)",
  "updatedAt": "string (ISO 8601 타임스탬프)"
}
```

---

### 1.2 CSV 스키마 명세 (피씨위키 "CSV 인입" 모달 다이렉트 업로드용)

피씨위키 화면 우측 상단의 **[CSV 인입]** 버튼을 통해 업로드할 때 요구되는 표준 8개 컬럼 규격입니다:

| 컬럼 헤더 | 필수 여부 | 데이터 타입 | 설명 및 예시 |
| :--- | :---: | :---: | :--- |
| `ID` | 선택 | String | 고유 ID (생략 시 `csv-타임스탬프` 자동 생성) |
| `Source_File` | 필수 | String | 데이터 출처 (예: `Microsoft 공식 레퍼런스`, `Intel 기술 문서`) |
| `Date` | 필수 | String | 발생일/작성일 (`YYYY-MM-DD`) |
| `Category_Large` | 필수 | String | `소프트웨어` / `하드웨어` / `네트워크` (3종 중 택1) |
| `Category_Medium` | 필수 | String | 중분류명 (예: `Windows Update`, `SSD`, `BIOS`, `DNS` 등) |
| `Symptom` | 필수 | String | 사용자 접수 증상 및 오류 메세지 |
| `Action_Taken` | 필수 | String | 엔지니어 표준 조치 절차 (번호 매김 단계) |
| `Tags` | 필수 | String | 쉼표(`,`)로 구분된 태그 목록 (예: `"소프트웨어,OS,드라이버"`) |

**CSV 파일 예시:**
```csv
ID,Source_File,Date,Category_Large,Category_Medium,Symptom,Action_Taken,Tags
ms-update-80070002,"Microsoft 공식 레퍼런스",2026-09-18,소프트웨어,Windows Update,"[0x80070002] 업데이트 설치 중 ERROR_FILE_NOT_FOUND 발생","1. Windows Update 서비스 중지 2. SoftwareDistribution 폴더 초기화 3. 서비스 재기동","소프트웨어,WindowsUpdate,0x80070002,DISM"
hw-ami-beep-03,"PC 하드웨어 표준 진단 규격",2026-09-18,하드웨어,BIOS,"부팅 시 비프음 3회 연속 발생 및 화면 무감 현상","1. PC 전원 차단 후 잔류 전원 방전 2. RAM 탈거 및 접점부 세척 3. 2번/4번 슬롯에 재장착","하드웨어,BIOS,비프음,AMI,RAM"
```

---

## 2. 분류 체계 표준 기준표

### 2.1 대분류 (`Category_Large`) - 엄격 3대 분류
- `소프트웨어`: OS, 드라이버, 오피스, 브라우저, 업데이트, 블루스크린(BSOD), 라이선스, DLL 에러
- `하드웨어`: 데스크탑 본체, RAM, SSD/HDD, 파워서플라이, 그래픽카드, 메인보드/BIOS, 모니터/디스플레이, 복합기/프린터
- `네트워크`: IP/DNS, 유무선 LAN, 공유기/라우터, 방화벽, VPN, 네트워크 보안, 패킷 점검

### 2.2 허용 태그 (`Tags`) 작성 원칙
- **감성적/주관적 수식어 전면 배제**: "스마트", "원클릭", "실시간", "강력한" 등의 수식어 절대 금지.
- **사내 티켓/조직어 금지**: "문의", "요청", "사내", "헬프데스크", "임원", "부서명", 특정 사원명 일절 사용 금지.
- **오직 건조한 순수 기술 명사만 사용**: 오류코드(`0x0000001A`, `0x80070005`), 기술규격(`NVMe`, `UEFI`, `DDR5`, `DHCP`), 도구명(`DISM`, `SFC`, `Diskpart`), 제조사(`Dell`, `HP`, `Samsung`, `Intel`)만 적용.

---

## 3. KCS SBAR 4단계 지식 정형화 모델 가이드

피씨위키의 핵심 상세 뷰는 **KCS SBAR** 표준 모델을 적용합니다:
1. **`[S] Situation (상황 개요)`**: 사용자가 직면한 구체적인 에러 코드, 에러 메시지, 시스템 반응 상태를 1~2문장으로 기술.
2. **`[B] Background (발생 배경)`**: 출처, 라이선스, 적용 OS 버전(Windows 10/11), 관련 하드웨어 아키텍처 및 선행 작업 조건.
3. **`[A] Assessment (원인 분석)`**: 운영체제 커널 레벨, 파일시스템, 레지스트리, 드라이버 충돌, 전원 누설 등 심층 기술적 원인 분석.
4. **`[R] Recommendation (표준 조치 가이드)`**:
   - 숙련된 IT 엔지니어가 즉시 따라 할 수 있도록 `1.`, `2.`, `3.` 번호 매김 순차 절차 작성.
   - 실행 명령어는 백틱(```code```) 코드 블록으로 작성.
   - 하단에 상호 참조 링크(`📌 연관 지식: [[키워드1]], [[키워드2]]`) 필수 삽입.

---

## 4. NotebookLM 전용 복사-붙여넣기 프롬프트 (Prompt Templates)

NotebookLM에 본 가이드 문서와 함께 IT 매뉴얼/PDF/웹페이지 소스를 추가한 뒤, 채팅창에 아래 프롬프트를 입력하면 완벽한 포맷의 지식을 얻을 수 있습니다.

### 📋 프롬프트 A: 업로드된 문서에서 "CSV 테이블" 일괄 추출 (피씨위키 CSV 인입용)

```text
제공된 소스 문서들을 분석하여, [피씨위키 DB 스키마 가이드]의 CSV 스키마 규격에 맞는 트러블슈팅 지식 데이터를 추출해줘.

[작성 지침]
1. 반드시 아래 CSV 헤더 순서를 준수할 것:
   ID,Source_File,Date,Category_Large,Category_Medium,Symptom,Action_Taken,Tags
2. Category_Large는 '소프트웨어', '하드웨어', '네트워크' 중 하나만 선택할 것.
3. Symptom과 Action_Taken 내부에 쉼표(,)나 줄바꿈이 들어갈 경우 반드시 큰따옴표("")로 감쌀 것.
4. Action_Taken은 1. 2. 3. 단계별 표준 조치 절차로 간결하고 명확하게 작성할 것.
5. 수식어나 감성적 표현(스마트, 편리한 등)을 배제하고 건조한 전문 기술 명사만 사용할 것.
6. 결과를 마크다운 코드블록(```csv ... ```) 안에 담아 출력해줘.
```

---

### 📋 프롬프트 B: 특정 장애 1건을 "KCS SBAR JSON"으로 정밀 추출 (seed_data.js 인입용)

```text
제공된 소스 문서에서 가장 빈번하거나 치명적인 장애 사례 1건을 선택하여, [피씨위키 DB 스키마 가이드]의 JSON 스키마에 맞추어 완벽한 SBAR 지식 객체로 생성해줘.

[작성 지침]
1. id는 영문소문자-분야-키워드 형태(예: ms-update-0x80070005, hw-nvme-throttling)로 생성.
2. title은 "[코드/규격] 주요증상 - 해결방안" 형태의 건조한 명사형으로 작성.
3. sbar의 각 항목(situation, background, assessment, recommendation)을 충실히 채울 것.
4. recommendation 항목에는 실행 명령어 코드블록(`...`)과 '📌 연관 지식: [[위키링크]]'를 반드시 포함할 것.
5. tags 배열에는 대분류, 중분류, 오류코드, 주요 기술 용어 5~8개를 건조한 명사로 지정할 것.
6. 결과는 단일 JSON 객체 코드블록(```json ... ```)으로 출력해줘.
```

---

### 📋 프롬프트 C: 소스 전체를 관통하는 "다수 지식 JSON 배열" 대량 수집

```text
제공된 소스 문서 전반을 분석하여 피씨위키 지식베이스에 추가할 핵심 기술 지식 5~10건을 추출하여 JSON 배열(Array) 형식으로 출력해줘.

[필수 조건]
- 각 항목은 피씨위키 JSON 스키마(id, title, sourceFile, date, categoryLarge, categoryMedium, symptom, actionTaken, tags, sbar, wikilinks, backlinks, createdAt, updatedAt)를 100% 준수해야 함.
- sbar 내부의 recommendation에는 구체적인 콘솔 명령어, 레지스트리 경로, 물리적 진단 순서가 포함되어야 함.
- wikilinks에는 본문에서 [[...]]로 감싼 핵심 용어들이 배열 형태로 들어가야 함.
- 결과는 유효한 JSON 배열(```json [ ... ] ```)로만 출력해줘.
```

---

## 5. 정형화된 표준 데이터 예시 (Few-Shot Reference)

### 예시 1: 소프트웨어 - 블루스크린 (BSOD WHEA_UNCORRECTABLE_ERROR)

```json
{
  "id": "bsod-0x00000124-whea",
  "title": "[0x00000124] WHEA_UNCORRECTABLE_ERROR - 하드웨어 하위 시스템 심각 오류 해결",
  "sourceFile": "Microsoft 공식 레퍼런스",
  "date": "2026-09-18",
  "categoryLarge": "소프트웨어",
  "categoryMedium": "블루스크린(BSOD)",
  "symptom": "[0x00000124] 게임 구동 또는 고부하 연산 작업 중 WHEA_UNCORRECTABLE_ERROR 블루스크린 발생하며 강제 재부팅",
  "actionTaken": "1. CPU/GPU 오버클럭 해제 및 BIOS 기본값 복원 2. 전원 공급 장치 12V 전압 강하 점검 3. 칩셋 드라이버 업데이트",
  "tags": [
    "소프트웨어",
    "블루스크린",
    "BSOD",
    "0x00000124",
    "WHEA",
    "CPU",
    "전원/파워",
    "BIOS"
  ],
  "sbar": {
    "situation": "[S] 고부하 작업 중 0x00000124 (WHEA_UNCORRECTABLE_ERROR) 버그체크가 발생하여 시스템이 비정상 종료됨.",
    "background": "[B] 출처: Microsoft 공식 기술 레퍼런스 (CC-BY 4.0) | 플랫폼: Windows 10/11 x64 아키텍처",
    "assessment": "[A] 원인 분석: Windows 하드웨어 오류 아키텍처(WHEA)가 감지한 복구 불가능한 하드웨어 예외. 주로 CPU 전압 부족, 과열로 인한 쓰로틀링 한계 초과, 또는 PCIe 버스 패리티 오류로 인해 발생함.",
    "recommendation": "[R] 표준 조치 절차:\n1. BIOS/UEFI 진입 후 XMP/EXPO 및 CPU 오버클럭 설정을 'Load Optimized Defaults'로 초기화\n2. HWiNFO64 유틸리티를 통해 12V 파워서플라이 인가 전압(허용오차 ±5% 이내) 및 CPU 코어 온도(85°C 이하 유지 여부) 점검\n3. 메인보드 제조사 웹사이트에서 최신 칩셋 드라이버 및 Intel ME/AMD AGESA BIOS 펌웨어 업데이트\n4. 관리자 권한 PowerShell에서 시스템 파일 복구: `DISM.exe /Online /Cleanup-image /Restorehealth` 및 `sfc /scannow` 실행\n📌 연관 지식: [[WHEA]], [[CPU]], [[BIOS]], [[DISM]], [[전원/파워]]"
  },
  "wikilinks": [
    "WHEA",
    "CPU",
    "BIOS",
    "DISM",
    "전원/파워"
  ],
  "backlinks": [],
  "createdAt": "2026-09-18T00:00:00.000Z",
  "updatedAt": "2026-09-18T00:00:00.000Z"
}
```

### 예시 2: 하드웨어 - NVMe SSD I/O 타임아웃 장애

```json
{
  "id": "hw-ssd-nvme-timeout",
  "title": "[SSD] NVMe SSD 디스크 활성 시간 100% 지속 및 I/O 타임아웃 프리징 해결",
  "sourceFile": "PC 하드웨어 표준 진단 규격",
  "date": "2026-09-18",
  "categoryLarge": "하드웨어",
  "categoryMedium": "SSD",
  "symptom": "대용량 파일 쓰기 또는 부팅 직후 작업 관리자에서 NVMe SSD 디스크 활성 시간이 100%로 유지되며 시스템 프리징 발생",
  "actionTaken": "1. 전원 관리 옵션에서 PCIe 링크 상태 전원 관리 '해제' 2. APST 전원 절감 지연 시간 조정 3. NVMe 전용 드라이버 설치",
  "tags": [
    "하드웨어",
    "SSD",
    "NVMe",
    "I/O타임아웃",
    "SMART",
    "드라이버",
    "디스크"
  ],
  "sbar": {
    "situation": "[S] PC 사용 중 갑작스럽게 마우스 커서만 움직이고 애플리케이션이 먹통이 되며, 이벤트 뷰어에 'stornvme 장치로 재설정 명령이 전송되었습니다' (이벤트 ID 129) 기록.",
    "background": "[B] 출처: JEDEC/NVMe 표준 진단 규격 | 적용 규격: PCIe 3.0/4.0 NVMe M.2 SSD",
    "assessment": "[A] 원인 분석: Windows 표준 전원 관리(ASPM/APST)의 과도한 절전 모드 진입으로 인한 컨트롤러 응답 지연, 또는 SSD 발열 70°C 초과로 인한 쓰로틀링 락.",
    "recommendation": "[R] 표준 조치 절차:\n1. [제어판 > 전원 옵션 > 고성능 또는 균형 조정 > 설정 변경 > 고급 전원 관리 옵션] 진입\n2. [PCI Express > 링크 상태 전원 관리] 설정을 '해제(Off)'로 변경\n3. 제조사 전용 펌웨어 관리 툴(Samsung Magician, WD Dashboard, Crucial Storage Executive)을 통해 최신 펌웨어 플래싱\n4. M.2 슬롯의 써멀패드 밀착 상태 및 방열판 체결 상태 확인\n📌 연관 지식: [[NVMe]], [[SSD]], [[SMART]], [[드라이버]]"
  },
  "wikilinks": [
    "NVMe",
    "SSD",
    "SMART",
    "드라이버"
  ],
  "backlinks": [],
  "createdAt": "2026-09-18T00:00:00.000Z",
  "updatedAt": "2026-09-18T00:00:00.000Z"
}
```

---

## 6. 피씨위키 시스템 인입 절차 (인입 파이프라인)

NotebookLM에서 추출된 데이터는 아래 두 가지 방법 중 하나로 피씨위키에 즉시 반영할 수 있습니다:

### 방법 1: CSV 일괄 인입 (화면 UI에서 원클릭)
1. NotebookLM에서 **프롬프트 A**를 실행하여 추출된 CSV 텍스트를 복사합니다.
2. 텍스트 편집기(메모장, VS Code 등)에 붙여넣고 `import.csv` 파일로 저장합니다 (인코딩: UTF-8).
3. 피씨위키 웹 화면([https://www.dragonrpa.co.kr/pc-wiki](https://www.dragonrpa.co.kr/pc-wiki))에 접속합니다.
4. 상단 헤더의 **[CSV 인입]** 버튼을 클릭하고 `import.csv` 파일을 드래그앤드롭합니다.
5. 로컬스토리지에 즉시 병합 저장되며 실시간으로 테이블 및 카드 뷰에 반영됩니다.

### 방법 2: JSON 정식 시드 영구 병합 (`seed_data.js`)
1. NotebookLM에서 **프롬프트 B/C**로 추출된 JSON 객체들을 수집합니다.
2. 프로젝트 저장소의 `seed_data.js` 파일 내 `SEED_KNOWLEDGE_DATA` 배열에 새 객체를 추가합니다.
3. 깃허브에 커밋/푸시하면 GitHub Actions를 통해 웹 서비스에 영구 반영됩니다.
