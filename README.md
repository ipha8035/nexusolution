# Nexusolution — Home / Contact / Tech Collections

압축 해제 후 파일들을 기존 index.html 위치에 덮어쓰고 커밋하세요. 새 파일 collections.html, upload.html, collections.css, collections.js도 반드시 함께 업로드하세요. config.js에 기존 API 설정이 있다면 보존하세요. 별도 빌드나 이미지 폴더는 필요 없습니다.

## 구현
- Home: 원형과 오른쪽 사진에 동일한 이미지 좌표계를 적용하여 경계 정렬. 기존 히어로/흑백 컬러 효과 유지.
- Tech Collections: 새 시안 기반 목록, 검색, 카테고리 필터, 연도 정렬, 상세 모달, 데이터 수에 맞춘 페이지 버튼.
- Upload: 파일 선택/드래그앤드롭, PNG/JPG/PDF, 파일당 20MB, 최대 10개, 삭제, 필수 입력 검증.
- Save draft: IndexedDB에 입력과 첨부파일을 저장하고 재방문 시 복원. 해당 브라우저에만 저장되며 브라우저 데이터 삭제 시 사라질 수 있습니다.
- Publish to archive: 서버 미연결 상태. 입력 검증 후 로컬 초안 저장만 수행하고 공개 게시되지 않았음을 표시합니다. 실제 게시에는 파일 저장/API/접근 제어 등 서버 구현이 추가로 필요합니다.
- 목록의 7개 레코드와 Most viewed 카드는 디자인용 샘플입니다. 실측 수치가 아닙니다. 상단 문서 수와 페이지 수는 샘플 수에 맞췄고, 카테고리 이름을 필터와 일치시켰습니다.

## 검증
데스크톱 브라우저에서 Home 원형 정렬, Documents/Upload 화면을 확인했고 검색 및 초안 저장 후 새로고침 복원을 검증했습니다. JavaScript 구문 및 로컬 파일 참조 검사 완료. 파일 업로드 경계값과 모바일 실기기 검증은 별도로 수행하지 않았습니다.
