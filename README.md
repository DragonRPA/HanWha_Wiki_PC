# 피씨위키 IT Knowledge Wiki Platform

> **Google Antigravity 기반 IT 서비스 지식 자산화 및 자동화 시스템 (SRS v2.0)**  
> 브라우저 기반 IT 기술 지식 누적 & Wiki 검색 도구

---

## 🌟 주요 기능 (Key Features)

1. **실무 트러블슈팅 데이터 정형화 & KCS 2026 SBAR 지식 모델**
   - `IT 유지보수 대장`, `IT 지원 Q&A`, `IT 헬프데스크 상담 이력` 등 1,760건의 실제 실무 이슈 데이터를 **Situation-Background-Assessment-Recommendation (SBAR)** 4단계 지식 구조로 정형화.
2. **양방향 WikiLink (`[[용어명]]`) 및 역참조 (Backlinks)**
   - 본문 내 `ubCUBE`, `Tgate`, `Gradius`, `WIPS`, `DLL 복구` 등 IT 고유명사 자동 하이퍼링크 파싱.
   - 존재하지 않는 문서 참조 시 Red Link 표시 및 1클릭 신규 지식 생성 유도.
   - 어디서 이 문서로 연계되는지 보여주는 **역참조(Backlink)** 목록 자동 집계.
3. **클라이언트 퍼지 검색 & 다중 필터링 (Fuse.js)**
   - 항목명, Symptom, ActionTaken, SBAR 내용, 태그, 부서, 대/중분류 통합 퍼지 검색.
4. **CSV 파일 일괄 인입 & 지식 누적**
   - 드래그앤드롭을 통한 CSV 파일 일괄 파싱 및 지식베이스 자동 등록.
   - UI 입력 폼을 통한 개별 지식 자유 추가/수정.
5. **전사 UI/UX 개발 표준 규격 100% 준수**
   - 직관적이고 건조한 전문 용어 표기 (Rule 3.1)
   - 셀 및 레이블 줄바꿈 방지 `white-space: nowrap`, `flex-shrink: 0` (Rule 3.2)
   - 레이블-입력창 상하 세로 스택 구조 `flex-direction: column; gap: 4px` (Rule 3.4)
6. **로컬 실행 및 데이터 백업**
   - `localStorage` 자동 동기화 및 JSON / CSV 전체 백업 내보내기 지원.

---

## 🚀 로컬 테스트 실행 방법

1. 프로젝트 폴더를 열고 `index.html`을 웹 브라우저(Chrome, Edge)로 더블 클릭하여 실행합니다.
2. 별도의 Node.js, `npm install`, 빌드 과정이 일절 필요 없이 즉시 모든 기능이 동작합니다.

---

## 🌐 웹 배포 방법 (GitHub Pages & Vercel)

### 옵션 A: GitHub Pages 배포 (무료)
1. Repository의 **Settings > Pages** 메뉴로 이동합니다.
2. **Source**를 `Deploy from a branch`로 선택하고 브랜치를 `main` (`/root`)으로 지정 후 Save합니다.
3. 1~2분 후 `https://DragonRPA.github.io/PC_Wiki/` 주소로 즉시 웹 서비스가 오픈됩니다.

### 옵션 B: Vercel 배포 (무료)
1. [Vercel Dashboard](https://vercel.com/)에 로그인 후 **Add New Project**를 선택합니다.
2. `DragonRPA/PC_Wiki` 리포지토리를 임포트합니다.
3. Framework Preset을 `Other`로 두고 **Deploy** 버튼을 클릭합니다.
