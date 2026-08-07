# HanWha Wiki PC 개발 요구사항 및 진행 현황 (dev_temp.md)

## 요구사항 요약
1. SRS v2.0 및 실무 CSV/TXT 데이터 (서울/판교 대장, Q&A, 단톡방.txt) 정형화 및 초기 시드데이터 탑재
2. IT 기술 용어 및 트러블슈팅 지식 누적 시스템 구축 (KCS 2026 SBAR 템플릿 적용)
3. 지식 간 자유로운 양방향 WikiLink (`[[용어명]]`) 파싱 및 탐색 기능
4. 클라이언트 다중 필드 퍼지 검색 (Fuse.js) 및 카테고리/부서/태그 다중 필터
5. 동일 포맷 CSV 파일 일괄 드래그앤드롭 인입 & UI 폼을 통한 개별 신규 지식 등록
6. JSON / CSV 백업 및 복원 기능
7. 전사 UI/UX 개발 표준 100% 준수:
   - 건조하고 직관적인 전문 용어 표기 (Rule 3.1)
   - 셀 및 레이블 줄바꿈 방지 `white-space: nowrap`, `flex-shrink: 0` (Rule 3.2)
   - 레이블-입력 필드 상하 세로 스택 구조 `flex-direction: column; gap: 4px` (Rule 3.4)
8. 로컬 실행 (`file://`) 및 배포 가이드

## 작업 진행 단계
- [x] Git 리포지토리 연동 (`https://github.com/DragonRPA/HanWha_Wiki_PC.git`)
- [ ] `seed_data.js` 구축 (수백 건의 SRS 데이터 정형화)
- [ ] `index.html` 작성 (전사 UI 표준 레이아웃 적용)
- [ ] `style.css` 작성 (Glassmorphism & 상하 세로 스택 스타일)
- [ ] `app.js` 작성 (Fuse.js 검색, WikiLink 파서, PapaParse CSV 인입, LocalStorage CRUD)
- [ ] `RELEASE_NOTES.md` 업데이트 및 로컬 커밋/푸시 대기
