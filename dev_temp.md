# HanWha Wiki PC 개발 요구사항 및 진행 현황 (dev_temp.md)

## 요구사항 요약
1. SRS v2.0 및 실무 CSV/TXT 데이터 전체 1,514건 + **Microsoft 공식 Bug Check Code Reference전수 228개 Windows 11 BSOD 자동 수집/파싱 및 지식 인입 (총 1,742건)**
2. IT 기술 용어 및 트러블슈팅 지식 누적 시스템 구축 (KCS 2026 SBAR 템플릿 적용)
3. 지식 간 자유로운 양방향 WikiLink (`[[용어명]]`) 파싱 및 탐색 기능
4. **Microsoft 공식 Windows 11 전체 블루스크린 (228개 Stop Code) 전수 수집 및 자동 시드 구축 (v1.5.0)**:
   - Microsoft Learn / SDK 커널 레퍼런스 기준 `0x00000001 (APC_INDEX_MISMATCH)` ~ `0x000001FC (SYNTHETIC_HEARTBEAT_TIMEOUT)`까지 228개 전수 Stop Code 자동 수집 및 한글 SBAR 구조 변환
   - `build_all_windows11_bsods.js` 스크립트를 통한 자동 추출/시드 파이프라인 구축
5. 화면 배분 극대화 & 고밀도 정보 표시 개편 (v1.3.0)
6. JSON / CSV 백업 및 복원 기능
7. 전사 UI/UX 개발 표준 100% 준수 (Rule 3.1, 3.2, 3.4)

## 작업 진행 단계
- [x] Microsoft 공식 Windows 11 전체 228개 BSOD Stop Code 자동 추출/파싱 파이프라인 구축 완료 (총 1,742건)
- [x] `seed_data.js` 및 `data/seed.csv` 1,742건 전수 동기화 완료
- [x] `RELEASE_NOTES.md` (v1.5.0.Build.1) 작성 및 Git push 완료
