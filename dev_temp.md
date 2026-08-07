# HanWha Wiki PC 개발 요구사항 및 진행 현황 (dev_temp.md)

## 요구사항 요약
1. SRS v2.0 및 실무 데이터(1,514건) + MS 공식 BSOD(228건) + Windows 11 알려진 문제점(6건) + **전사 하드웨어 장애 대응 위키 `wiki-hardware-troubleshooting-v1.md` (7건) 전수 탑재 (총 1,755건)**
2. IT 기술 용어 및 트러블슈팅 지식 누적 시스템 구축 (KCS 2026 SBAR 템플릿 적용)
3. 지식 간 자유로운 양방향 WikiLink (`[[용어명]]`) 파싱 및 탐색 기능
4. **전사 하드웨어 장애 대응 위키 `wiki-hardware-troubleshooting-v1.md` 작성 및 시드 통합 (v1.7.0)**:
   - `RAM(메모리) 불량 증상 및 세척 정비 가이드` (비프음/Gold 단자 알코올 세척/mdsched.exe)
   - `그래픽카드(GPU) 화면 줄가기/노이즈 및 TDR 장애 대응` (DDU 청정 삭제/WHQL 클린 설치)
   - `유선 LAN 식별되지 않은 네트워크 & 커넥터 수리` (netsh winsock reset/RJ-45 핀 재가공)
   - `무선 WIFI AP 목록 유실 & Gradius 무선 차단 조치` (Gradius 무선 예외 인가/전원 관리 옵션)
   - `AUDIO 출력장치 미설치 & 마이크 송수신 불가 조치` (mmsys.cpl/인텔 SST 롤백/개인정보 권한)
   - `터치패드 포인터 멈춤 & 배터리 부풀음 (Battery Swelling)` (Battery Swelling 팽창 배터리 물리 안전 탈거)
   - `DISPLAY 모니터 화면 어두움 (백라이트 고장) 및 해상도 조정` (백라이트 손상 패널 교체 및 SSD 하드 탈거)
5. 화면 배분 극대화 & 고밀도 정보 표시 개편 (v1.3.0)
6. 필터 상태 일원화 및 교집합 버그 수정 (v1.5.1)
7. JSON / CSV 백업 및 복원 기능
8. 전사 UI/UX 개발 표준 100% 준수 (Rule 3.1, 3.2, 3.4)

## 작업 진행 단계
- [x] 원천 파일 `wiki-hardware-troubleshooting-v1.md` 빌드 완료
- [x] KCS SBAR 정형화 7건 추가 탑재 완료 (총 1,755건)
- [x] `seed_data.js` 및 `data/seed.csv` 동기화 완료
- [x] `RELEASE_NOTES.md` (v1.7.0.Build.1) 작성 및 Git push 완료
