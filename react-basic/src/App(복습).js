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

// export default function App() {
//   return <Snippet></Snippet>
// };

/*
  리액트 튜토리얼

  1. 리액트 기초
  2. JSX
  3. 컴포넌트
  4. 이벤트 처리
  5. 뷰 업데이트
  6. 리액트 라우터
  7. 서버 요청 
*/

/*
  1. 리액트 기초

  1) 리액트
  1- 페이스북이 개발한 UI를 개발하기 위한 자바스크립트 라이브러리

  2) 특징
  1- 컴포넌트 기반 (컴포넌트 : 뷰를 개발하기 위한 독립적이고 재사용 가능한 부품)
  2- 선언적 문법

  3. SPA (Single Page Application) 구조
  1- 자바스크립트를 이용해서 뷰를 업데이트 한다.
  2- 화면 전환이 부드럽다.
*/

/*
  2. JSX (Javascript Extention)
  - 가상트리를 만들기 위해 사용하는 자바스크립트 확장 문법 (선언적 문법)

  1) 가상 엘리먼트란?
  2) JSX 기본 문법
  3) JSX Fragment
  4) JSX 변수 출력하기
  5) 조건부 랜더링
  6) 리스트 랜더링
*/

// 1) 가상 엘리먼트란?
// JSX 트리 > 자바스크립트 객체 > 실제 엘리먼트 > 문서로 주입
// function Snippet() {
//   return (
//     <h1>Hello React 가상 엘리먼트란?</h1>
//   );
// }

// 2) JSX 기본 문법
// function Snippet() {
//   return (
//     <form>
//       <h1>JSX 기본 문법</h1>
//       <input id="search" type="search" name="q" className="class01 class02" style={{ outline: "none" }} placeholder="구글 검색" autoComplete="off" />
//     </form>
//   );
// };

// 3) JSX Fragment
// 전체가 하나의 태그로 감싸있어야 한다. 만약) 필요없다고 느끼는 태그라면 <></> 빈태그로 감싼다.
// function Snippet() {
//   return (
//     <>
//       <h1>JSX Fragment</h1>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </>
//   );
// };

// 4) JSX 변수 출력하기
// function Snippet() {
//   const cat = {
//     name: "치즈",
//     age: 2,
//     home: null,
//     sound: function () {
//       return "야옹";
//     }
//   };

//   return (
//     <ul>
//       <li>이름 : {cat.name}</li>
//       <li>나이 : {cat.age}</li>
//       <li>집 : {cat.home}</li>
//       <li>소리 : {cat.sound}</li>
//     </ul>
//   );
// };

/*
  5) 조건부 랜더링

  1- && (그리고)
  표현식1 && 표현식2
  표현식1이 참 일 경우 표현식2가 출력된다.
  표현식1이 거짓 일 경우 아무것도 출력되지 않는다.
  
  2- || (또는)
  표현식1 || 표현식2
  표현식1이 참 일 경우 표현식1이 출려된다.
  표현식1이 거짓 일 경우 표현식2가 출력된다.

  3- ? (삼항연산자)
  조건 ? 표현식1 : 표현식2
  조건이 참 일 경우 표현식 1이 출력된다.
  조건이 거짓 일 경우 표현식 2가 출력된다.
*/
// function Snippet() {
//   return (
//     <>
//       <h1>조건부 랜더링</h1>
// 
//       <h2>&& (AND)</h2>
//       <p>{true && "표현식2"}</p>
//       <p>{true && "표현식2"}</p>
// 
//       <h2>|| (OR)</h2>
//       <p>{"표현식1" || "표현식2"}</p>
//       <p>{"" || "표현식2"}</p>
// 
//       <h2>? (삼항연산자)</h2>
//       <p>{true ? "표현식1" : "표현식2"}</p>
//       <p>{false ? "표현식1" : "표현식2"}</p>
//     </>
//   );
// };

// 6) 리스트 랜더링
// key : 리액트 재조정 알고리즘 때문에 필요한 값, 고유한 값이여야 한다.
// function Snippet() {
//   const beers = [
//     { name: "하이네켄", origin: "네덜란드" },
//     { name: "기네스", origin: "아일랜드" },
//     { name: "버드와이저", origin: "미국" },
//   ]

//   const beersList = beers.map((beer) => {
//     <li key={beer.name}>{beer.name}, {beer.origin}</li>
//   })

//   return (
//     <>
//       <h3>리스트 랜더링</h3>
//       <ul>
//         {beersList}
//       </ul>
//     </>
//   );
// };

// Q. 조건부 랜더링, 리스트 랜더링
// function Snippet() {
//   const beers = [
//     { name: "하이네켄", origin: "네덜란드", available: false },
//     { name: "기네스", origin: "아일랜드", available: true },
//     { name: "버드와이저", origin: "미국", available: true },
//   ]

//   const beersList = beers.map((beer) => {
//     return (
//       <tr>
//         <td key={beer.name}>{beer.name}</td>
//         <td key={beer.origin}>{beer.origin}</td>
//         <td key={beer.available}>{beer.available ? "예" : "아니요"}</td>
//       </tr>
//     );
//   });

//   const beersList = beers.map((beer) => (
//       <tr>
//         <td key={beer.name}>{beer.name}</td>
//         <td key={beer.origin}>{beer.origin}</td>
//         <td key={beer.available}>{beer.available ? "예" : "아니요"}</td>
//       </tr>
//   ));

//   const beersList = beers.map((beer) => 
//     <tr>
//       <td key={beer.name}>{beer.name}</td>
//       <td key={beer.origin}>{beer.origin}</td>
//       <td key={beer.available}>{beer.available ? "예" : "아니요"}</td>
//     </tr>
//   );

//   return (
//     <table border="1" style={{ borderCollapse: "collapse" }}>
//       <thead>
//         <tr>
//           <th>이름</th>
//           <th>원산지</th>
//           <th>판매중</th>
//         </tr>
//       </thead>
//       <tbody>
//         {beersList}
//       </tbody>
//     </table>
//   )
// };