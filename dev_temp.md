# HanWha Wiki PC 개발 요구사항 및 진행 현황 (dev_temp.md)

## 요구사항 요약
1. SRS v2.0 및 실무 CSV/TXT 데이터 전체 1,514건 + **Windows 11 BSOD Stop Code 공식 대응 지식(12건) 탑재 (총 1,526건)**
2. IT 기술 용어 및 트러블슈팅 지식 누적 시스템 구축 (KCS 2026 SBAR 템플릿 적용)
3. 지식 간 자유로운 양방향 WikiLink (`[[용어명]]`) 파싱 및 탐색 기능
4. **Windows 11 블루스크린(BSOD) 공식 대응 가이드 통합 (v1.4.0)**:
   - Microsoft Support 공식 가이드 기반 Stop Code별 기술적 원인, 원인 요인 및 4단계 표준 대응 조치 탑재
   - `MEMORY_MANAGEMENT (0x0000001A)`
   - `SYSTEM_THREAD_EXCEPTION_NOT_HANDLED (0x0000007E)`
   - `IRQL_NOT_LESS_OR_EQUAL (0x0000000A)`
   - `PAGE_FAULT_IN_NONPAGED_AREA (0x00000050)`
   - `WHEA_UNCORRECTABLE_ERROR (0x00000124)`
   - `CRITICAL_PROCESS_DIED (0x000000EF)`
   - `INACCESSIBLE_BOOT_DEVICE (0x0000007B)`
   - `KMODE_EXCEPTION_NOT_HANDLED (0x0000001E)`
   - `DPC_WATCHDOG_VIOLATION (0x00000133)`
   - `KERNEL_SECURITY_CHECK_FAILURE (0x00000139)`
   - `VIDEO_TDR_FAILURE (0x00000116)`
   - `Windows 11 BSOD 공통 대응 가이드 (SFC/DISM & 안전 모드)`
5. 화면 배분 극대화 & 고밀도 정보 표시 개편 (v1.3.0)
6. JSON / CSV 백업 및 복원 기능
7. 전사 UI/UX 개발 표준 100% 준수 (Rule 3.1, 3.2, 3.4)

## 작업 진행 단계
- [x] Windows 11 BSOD 코드별 원인/조치 가이드 지식베이스 전수 탑재 완료 (총 1,526건)
- [x] `seed_data.js` 및 `data/seed.csv` 동기화 완료
- [x] `RELEASE_NOTES.md` (v1.4.0.Build.1) 작성 및 Git push 완료
