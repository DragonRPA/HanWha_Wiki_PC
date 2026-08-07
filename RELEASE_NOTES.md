# 릴리즈 노트 (RELEASE NOTES)

## v1.0.0.Build.1 (2026-08-07 14:05)

### 🚀 최초 릴리즈 (Initial Release)
- **Git 원격 리포지토리 연동**: `https://github.com/DragonRPA/HanWha_Wiki_PC.git`
- **SRS v2.0 및 실무 데이터 정형화 시드 탑재**:
  - `서울 유지보수 대장` 데이터 파싱 및 통합
  - `판교 유지보수 대장` 데이터 파싱 및 통합
  - `PC지원 Q&A 가이드` 데이터 파싱 및 통합
  - `PC지원 단톡방.txt` 주요 트러블슈팅 케이스 파싱 및 통합
- **KCS 2026 SBAR 구조화 엔진**:
  - 상황(Situation), 배경(Background), 원인분석(Assessment), 조치가이드(Recommendation) 4단계 자동 정형화
- **양방향 WikiLink (`[[WikiLink]]`)파싱 & 역참조(Backlink) 지원**:
  - 본문 및 SBAR 가이드 내 기술용어 자동 링킹 및 존재하지 않는 항목 Red Link 자동 처리
- **전사 UI/UX 개발 표준 규격 반영**:
  - 직관적이고 건조한 전문 용어 UI 레이블 정책 (Rule 3.1)
  - 셀 및 레이블 줄바꿈 방지 `white-space: nowrap`, `flex-shrink: 0` (Rule 3.2)
  - 레이블-입력 필드 상하 세로 스택 구조 (`flex-direction: column; gap: 4px`) (Rule 3.4)
- **데이터 누적 & 백업 기능**:
  - CSV 파일 드래그앤드롭 일괄 인입
  - UI 폼을 통한 개별 신규 지식 등록 및 편집
  - `localStorage` 동기화 및 JSON / CSV 전체 데이터 Export & Import
