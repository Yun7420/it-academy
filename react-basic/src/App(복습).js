/*
  React 시작하기
  (참고 사이트 방법) ... https://dev.classmethod.jp/articles/the-process-from-installing-react-to-distributing-it/
  node.js 다운로드 > npm -v(npm 버전 확인, node.js로 만들어진 프로그램을 쉽게 설치해주는 앱 스토어) > npm install -g create-react-app(npm을 사용해서 react 설치) > create-react-app -v(react버전 확인)
  react-app(react-app이라는 폴더 생성) > cd react-app(react-app폴더로 이동) > create-react-app(react-app에 react 개발 환경 구축) > npm run start(실행)

  (학원 방법)
  npx create-react-app react-basic(react-basic이라는 폴더에 react개발 환경 구축) > cd react-app(react-app 폴더로 이동) > npm start(실행)

  (npm run start 명령어로 실행이 안될 경우)
  npm update(npm 업데이트) > npm run start
  npm install -g react-scripts > npm run start

  React 구성
  1) index.html
  - ID root에 자바스크립트 코드 주입
  2) index.js
  - App의 시작점, createRoot & render react 함수
  3) App.js
  - 메인 컴포넌트, 화면 랜더링
  - export default function App(){return <Snippet></Snippet>}
  ※ 꼭 Snippet이 아니어도 상관 없으며 첫글자는 무조건 대문자여야 한다.
*/  