# HanWha Wiki PC 개발 요구사항 및 진행 현황 (dev_temp.md)

## 요구사항 요약
1. SRS v2.0 및 실무 데이터(1,514건) + MS 공식 BSOD(228건) + **Windows 11 알려진 문제점 `windows-known-issues-v1.md` (6건) 전수 탑재 (총 1,748건)**
2. IT 기술 용어 및 트러블슈팅 지식 누적 시스템 구축 (KCS 2026 SBAR 템플릿 적용)
3. 지식 간 자유로운 양방향 WikiLink (`[[용어명]]`) 파싱 및 탐색 기능
4. **Windows 11 알려진 문제점 `windows-known-issues-v1.md` 원천 데이터 작성 및 시드 통합 (v1.6.0)**:
   - `[Known Issue] MEMORY_MANAGEMENT (0x0000001A) 보안 패치 충돌`
   - `[Known Issue] Windows Update 56% 정지 및 무한 부팅 복구` (Secure Boot / SoftwareDistribution 초기화)
   - `[Known Issue] Windows 11 기본 캡처도구 및 그림판 강제 종료` (nProtect/TouchENKey 충돌)
   - `[Known Issue] Windows 11 블루투스 무선 장치 유실 및 차단` (Gradius / 로지텍 유니파잉 동글)
   - `[Known Issue] LG 그램 단말 웹 파일 업로드 및 첨부 차단 오류` (LG Smart Assistant 충돌)
   - `[Known Issue] CrowdStrike Falcon (0x50, 0x7E) 블루스크린 대규모 장애 복구` (C-00000291*.sys 소거)
5. 화면 배분 극대화 & 고밀도 정보 표시 개편 (v1.3.0)
6. 필터 상태 일원화 및 교집합 버그 수정 (v1.5.1)
7. JSON / CSV 백업 및 복원 기능
8. 전사 UI/UX 개발 표준 100% 준수 (Rule 3.1, 3.2, 3.4)

## 작업 진행 단계
- [x] 원천 파일 `windows-known-issues-v1.md` 빌드 완료
- [x] KCS SBAR 정형화 6건 추가 탑재 완료 (총 1,748건)
- [x] `seed_data.js` 및 `data/seed.csv` 동기화 완료
- [x] `RELEASE_NOTES.md` (v1.6.0.Build.1) 작성 및 Git push 완료
