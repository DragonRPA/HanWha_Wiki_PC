# 릴리즈 노트 (RELEASE NOTES)

## v1.4.0.Build.1 (2026-08-07 14:28)

### 💻 Windows 11 블루스크린(BSOD) 코드별 원인 및 표준 조치 가이드 통합 (총 1,526건)
- **Microsoft Support 공식 블루스크린 문제 해결 프로세스 반영**:
  - `Windows 11 BSOD 공통 대응 가이드 (SFC/DISM & 안전 모드)`
  - `MEMORY_MANAGEMENT (0x0000001A)`: 물리 RAM 세척, mdsched.exe 메모리 진단, OS 재설치
  - `SYSTEM_THREAD_EXCEPTION_NOT_HANDLED (0x0000007E)`: 안전모드 드라이버 롤백/제거
  - `IRQL_NOT_LESS_OR_EQUAL (0x0000000A)`: 무선 랜카드 및 보안 에이전트(Gradius, Tgate) 충돌 검증
  - `PAGE_FAULT_IN_NONPAGED_AREA (0x00000050)`: CrowdStrike/V3 오작동 모듈 격리 및 chkdsk 배드섹터 정비
  - `WHEA_UNCORRECTABLE_ERROR (0x00000124)`: BIOS 오버클럭/전압 초기화, CPU 서멀구리스 재도포
  - `CRITICAL_PROCESS_DIED (0x000000EF)`: 커널 필수 서비스(csrss, lsass) 복구 및 dism /restorehealth
  - `INACCESSIBLE_BOOT_DEVICE (0x0000007B)`: AHCI/NVMe BIOS 설정 및 bootrec 복구
  - `KMODE_EXCEPTION_NOT_HANDLED (0x0000001E)`: Fast Startup 해제 및 커널 핸들러 원복
  - `DPC_WATCHDOG_VIOLATION (0x00000133)`: SSD 펌웨어 업데이트 및 SATA AHCI 드라이버 변경
  - `KERNEL_SECURITY_CHECK_FAILURE (0x00000139)`: 보안 에이전트 이중 설치 정리 및 커널 무결성 복원
  - `VIDEO_TDR_FAILURE (0x00000116)`: DDU 툴 이용 그래픽 드라이버 클린 재설치
- **SBAR KCS 지식 자동 구조화 & 연관 지식 `[[WikiLink]]` 생성**:
  - 각 Stop Code별 상황(Situation), 배경(Background), 원인분석(Assessment), 조치가이드(Recommendation) 정형화 탑재

---

## v1.3.0.Build.1 (2026-08-07 14:15)

### 🎨 화면 정보 영역 극대화 & 고밀도 데이터 테이블 뷰 대개편
- **정보 표시 공간 85% 이상 확대**: 1줄 컴팩트 툴바, 사이드바 접기/펼치 토글.
- **[📋 고밀도 목록 보기 (Data Table)] 기본 뷰 지정**: 맨 첫 번째 컬럼 `[상세 ➔]` 버튼 및 페이지네이션.

---

## v1.1.0.Build.1 (2026-08-07 14:10)

### 🚀 전체 실무 데이터셋 전수 시드 탑재 (Full Dataset Seeding - 1,514 레코드)
- `서울/판교 유지보수 대장`, `Q&A`, `단톡방.txt` 전수 파싱 및 내장.
