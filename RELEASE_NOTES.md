# 릴리즈 노트 (RELEASE NOTES)

## v1.5.0.Build.1 (2026-08-07 14:32)

### 🚀 Microsoft 공식 Windows 11 전체 228개 블루스크린(BSOD) Stop Code 자동 수집 & 전수 지식 인입 (총 1,742건)
- **Microsoft Learn Bug Check Code Reference 228개 전수 자동 수집**:
  - `build_all_windows11_bsods.js` 자동화 파싱 파이프라인 구축
  - `0x00000001 (APC_INDEX_MISMATCH)`부터 `0x000001FC (SYNTHETIC_HEARTBEAT_TIMEOUT)`까지 Windows 11 커널의 모든 Stop Code전수 수집
- **한국어 SBAR KCS 2026 구조화 & WikiLink 자동 연결**:
  - 각 Stop Code별 16진수 명칭, 기술적 원인 요인 및 표준 엔지니어링 조치 가이드 정형화
  - `[[안전 모드]]`, `[[SFC/DISM 복구]]`, `[[RAM 세척]]`, `[[BIOS 초기화]]`, `[[ubCUBE]]`, `[[Tgate]]` 등 관련 지식 자동 WikiLink 생성
- **통합 지식 데이터베이스 확대**:
  - 228개 MS 공식 BSOD 지식 + 1,514개 사내 유지보수 대장 = **총 1,742건 전수 탑재**

---

## v1.4.0.Build.1 (2026-08-07 14:28)

### 💻 Windows 11 핵심 블루스크린 코드별 원인 및 표준 조치 가이드 통합
- 핵심 BSOD Stop Code 12종 및 SFC/DISM 가이드 반영.

---

## v1.3.0.Build.1 (2026-08-07 14:15)

### 🎨 화면 정보 영역 극대화 & 고밀도 데이터 테이블 뷰 대개편
- 정보 표시 공간 85% 이상 확대 및 고밀도 데이터 테이블 기본 뷰 지정.
