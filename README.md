# Nexusolution — Vercel 수정본

이미지를 HTML/CSS에 포함하여 assets 폴더 없이 작동합니다. 외부 이미지 요청이 없습니다.

## 기존 저장소에 적용

1. 이 ZIP을 압축 해제하세요.
2. index.html, contact.html, styles.css, app.js, config.js를 기존 파일과 같은 위치에 덮어쓰고 커밋하세요.
3. Vercel 배포가 완료되면 Ctrl+Shift+R로 새로고침하세요.

ZIP의 파일들은 최상위에 있습니다. 별도 폴더를 만들지 말고 기존 index.html과 같은 위치에 올리세요. 기존 assets 폴더는 남겨도 됩니다.

제보·구독 API는 기본 미연결입니다. 기존에 config.js에 API 주소를 설정했다면 해당 설정을 보존하세요.

레이아웃은 기존 Main/Contact를 유지합니다. Tech Collections는 미구현입니다. 시안에서 추출한 일부 작은 카드 이미지는 원본 해상도의 한계가 있습니다. KPI는 예시입니다.

검증: JS 구문, 모든 내장 이미지의 디코딩 및 이미지 무결성, 외부 자산 참조 없음. 실제 Vercel 배포 상태와 브라우저 렌더링은 검증하지 못했습니다.
