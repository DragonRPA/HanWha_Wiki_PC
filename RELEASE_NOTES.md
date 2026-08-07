# 릴리즈 노트 (RELEASE NOTES)

## v1.1.0.Build.1 (2026-08-07 14:10)

### 🚀 전체 실무 데이터셋 전수 시드 탑재 (Full Dataset Seeding - 1,514 레코드)
- **전체 데이터 1,514건 전수 정형 파싱 & 시드 탑재**:
  - `서울 유지보수 대장` (2024년 1월 ~ 2026년 4월 유지보수 이력 전수)
  - `판교 유지보수 대장` (2024년 2월 ~ 2026년 5월 유지보수 이력 전수)
  - `PC지원 Q&A 가이드` (전사 공통, 구미, 서울 자주 묻는 질문 전수)
  - `PC지원 단톡방.txt` (2024년 3월 ~ 2026년 7월 긴급 트러블슈팅 및 EPP V3 DLL 복구, ubCUBE 이슈 전수)
- **로컬 CSV 자산 보존**:
  - 프로젝트 내 `data/seed.csv` 경로로 1,514건 원천 CSV 파일 보존
- **KCS 2026 SBAR 자동 구조화 & IT 기술어 자동 링킹**:
  - 1,514건 전체 데이터에 SBAR([S]상황-[B]배경-[A]분석-[R]조치) 템플릿 적용
  - `ubCUBE`, `Tgate`, `Gradius`, `WIPS`, `V3`, `EPP`, `망간자료전송`, `신도리코`, `삼성복합기`, `로우포맷`, `DLL복구` 등 40여 개 핵심 IT 기술명 자동 WikiLink (`[[용어명]]`) 및 태그 매핑

---

## v1.0.0.Build.1 (2026-08-07 14:05)

### 🚀 최초 릴리즈 (Initial Release)
- **Git 원격 리포지토리 연동**: `https://github.com/DragonRPA/HanWha_Wiki_PC.git`
- **전사 UI/UX 개발 표준 규격 반영**:
  - 직관적이고 건조한 전문 용어 UI 레이블 정책 (Rule 3.1)
  - 셀 및 레이블 줄바꿈 방지 `white-space: nowrap`, `flex-shrink: 0` (Rule 3.2)
  - 레이블-입력 필드 상하 세로 스택 구조 (`flex-direction: column; gap: 4px`) (Rule 3.4)
- **데이터 누적 & 백업 기능**:
  - CSV 파일 드래그앤드롭 일괄 인입
  - UI 폼을 통한 개별 신규 지식 등록 및 편집
  - `localStorage` 동기화 및 JSON / CSV 전체 데이터 Export & Import
