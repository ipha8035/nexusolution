# Nexusolution — Main & Contact

빌드나 패키지 설치가 필요 없는 HTML / CSS / JavaScript 웹사이트입니다.

## 실행

`index.html`을 브라우저로 열거나, 이 폴더에서 `python -m http.server 8000`을 실행하고 http://localhost:8000 으로 접속하세요.

## GitHub 업로드

ZIP 압축을 푼 뒤 이 폴더 안의 파일들을 저장소 루트에 넣고 커밋하세요. `index.html`, `contact.html`, `styles.css`, `app.js`, `config.js`, `assets/`를 모두 포함해야 합니다. 경로는 상대경로여서 GitHub Pages의 하위 저장소 경로에서도 사용할 수 있습니다.

GitHub Pages로 배포할 경우 저장소 Settings → Pages에서 해당 브랜치의 루트 폴더를 선택하세요. 별도 빌드는 없습니다.

## 구현 범위

- Main: 히어로, KPI, 적정기술 소개, 이미지 섹션, 뉴스 미리보기, 제보 CTA, 공통 푸터
- Contact: 제보 입력, 필수값·이메일·URL·동의 검증, 제출 완료 상태
- 모바일 메뉴 및 반응형 레이아웃
- Tech Collections 페이지는 미구현. 메뉴 / More Info는 준비 중 알림을 표시합니다.

## 실제 제보 / 구독 연결

기본은 미리보기 모드입니다. 입력 내용은 전송 또는 저장되지 않으며 제출 후 미리보기임을 명시한 완료 화면을 보여줍니다. 구독도 실제 가입으로 처리하지 않습니다.

`config.js`의 `reportEndpoint`, `newsletterEndpoint`에 JSON POST를 받는 HTTPS API 주소를 지정하면 서버 응답이 성공(HTTP 2xx)한 경우에만 완료로 처리합니다. 서버는 실제 저장 또는 접수에 성공한 경우에만 2xx를 반환해야 합니다. 프런트에서 보낸 필드는 서버에서도 검증해야 하며, CORS 허용과 스팸 방지 및 개인정보 처리 정책은 해당 서버에서 설정해야 합니다. 비밀 키를 config.js에 넣지 마세요. GitHub Pages 자체에는 서버 저장 기능이 없습니다.

제보 JSON 필드: `name`, `email`, `tech_name`, `tech_company`, `website`, `description`, `consent` (동의 시 `on`). 구독 필드: `email`.

## 디자인 / 콘텐츠 참고

- 첨부 UX/UI 시안의 배치와 색상 기준으로 재구성했습니다. 제공된 텍스트 3개는 Webflow Designer 자체의 DOM으로, 독립 실행 가능한 사이트 export가 아니어서 포함하지 않았습니다.
- 제공한 사진은 최적화된 JPEG로 포함했습니다. 로고는 Contact 시안에서 추출했습니다.
- 별도 원본이 없던 이슬 배경과 뉴스 카드 사진은 메인 시안에서 작은 이미지 영역을 추출했습니다. 확대 시 화질이 낮을 수 있으므로 `assets/dew-reference.png`, `mountains.png`, `books.png`, `portrait.png`를 고해상도 원본으로 교체하는 것을 권장합니다.
- 시안의 Lorem ipsum 본문은 적정기술 소개용 영어 초안으로 대체했습니다. 뉴스는 실제 기사로 오인하지 않도록 PREVIEW로 표시합니다.
- KPI의 250+, 600+, 11K+는 시안의 예시 수치이며 실제 집계에 연결되지 않았습니다. 공개 전 확인·수정하세요.
- 실제 SNS 주소가 없어 SNS 외부 링크 대신 Contact 링크를 제공합니다.

## 파일 구성

- `index.html`: Main
- `contact.html`: Contact 및 완료 화면
- `styles.css`: 공통 스타일 / 반응형
- `config.js`: 서버 연결 설정
- `app.js`: 메뉴, 폼 검증 이후 처리, 네트워크 요청, 오류·완료 상태
- `assets/`: 이미지

## 검증

JavaScript 구문 및 로컬 HTML/CSS 자산 경로를 검사했습니다. 실제 브라우저 렌더링 및 운영 API 접수 테스트는 수행하지 않았습니다.
