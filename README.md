# Nexusolution — GitHub / Vercel

최종 검토한 Home, Tech Collections, Add a technology, Contact 화면입니다.
이미지는 코드에 포함되어 있어 별도 assets 폴더가 필요하지 않습니다.

## 적용
1. ZIP을 압축 해제합니다.
2. 내부 파일을 GitHub 저장소의 기존 index.html과 같은 위치에 덮어씁니다. ZIP이나 새 하위 폴더째 올리지 않습니다.
3. 커밋 후 연결된 Vercel의 배포가 완료되면 새로고침합니다.

정적 HTML 사이트입니다. 새 Vercel 프로젝트에서는 Framework Preset: Other, Build Command: 비움, Output Directory: . 으로 설정합니다.
기존 프로젝트가 다른 출력 폴더를 지정했다면 저장소 루트를 배포하도록 맞춥니다.

## 기능 범위
- 페이지 이동, 검색, 카테고리 필터, 정렬, 상세 모달, 파일 선택과 입력 검증 구현
- 업로드 임시저장은 현재 브라우저에만 저장
- 실제 공개 업로드, 문의 전송, 이메일 구독은 서버 연결 필요
- 문의/구독 연결 주소는 config.js에서 설정
- 소셜 계정 링크는 실제 주소 연결 필요

현재 샘플 데이터 및 KPI 수치는 디자인 미리보기용입니다.
