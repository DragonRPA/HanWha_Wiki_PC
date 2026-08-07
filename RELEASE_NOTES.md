# 릴리즈 노트 (RELEASE NOTES)

## v1.6.0.Build.1 (2026-08-07 15:02)

### 📄 Windows 11 알려진 문제점 원천 데이터 `windows-known-issues-v1.md` 작성 및 시드 인입 (총 1,748건)
- **원천 마크다운 데이터 파일 `windows-known-issues-v1.md` 빌드**:
  - 프로젝트 루트에 정형 원천 지식 문서 생성 완료
- **6대 핵심 알려진 문제점 KCS SBAR 정형화 시드 통합**:
  - `MEMORY_MANAGEMENT (0x0000001A)` 보안 패치 충돌 대책
  - `Windows Update 56% 정지 및 무한 부팅 복구` (Secure Boot / SoftwareDistribution 초기화)
  - `Windows 11 기본 캡처도구 및 그림판 강제 종료` (키보드보안 nProtect/TouchENKey 충돌)
  - `Windows 11 블루투스 무선 장치 유실 현상` (Gradius 무선 차단 / 로지텍 유니파잉 수신기 우회)
  - `신규 세팅 단말 파일 업로드/첨부 차단 오류` (LG Smart Assistant / Gradius 이중 후킹 충돌)
  - `CrowdStrike Falcon (0x50, 0x7E) 대규모 장애 복구` (안전모드 C-00000291*.sys 소거)
- **통합 지식 데이터베이스 확대**:
  - 총 1,748건 (6개 Windows 알려진 문제점 + 228개 MS 공식 BSOD + 1,514개 사내 유지보수 데이터)

---

## v1.5.1.Build.1 (2026-08-07 14:57)

### 🐛 사이드바-드롭다운 필터 일원화 & 불필요 교집합(AND 조건) 오작동 픽스
- 필터 상태 통합 및 사이드바-드롭다운 100% 수량 동기화.

---

## v1.5.0.Build.1 (2026-08-07 14:32)

### 🚀 Microsoft 공식 Windows 11 전체 228개 블루스크린(BSOD) Stop Code 자동 수집 & 전수 지식 인입 (총 1,742건)
- 228개 MS 공식 BSOD 지식 + 1,514개 사내 유지보수 데이터 = **총 1,742건 전수 탑재**
