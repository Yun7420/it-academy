import { useContext, createContext, useState } from "react";

export default function App() {
  return <Snippet></Snippet>;
}

// 1000lines...

/*
  React 시작하기
  (참고 사이트 방법) ... https://dev.classmethod.jp/articles/the-process-from-installing-react-to-distributing-it/
  node.js 다운로드 > npm -v(npm 버전 확인, node.js로 만들어진 프로그램을 쉽게 설치해주는 앱 스토어) > npm install -g create-react-app(npm을 사용해서 react 설치) > create-react-app -v(react버전 확인)
  react-app(react-app이라는 폴더 생성) > cd react-app(react-app폴더로 이동) > create-react-app .(react-app에 react 개발 환경 구축) > npm run start(실행)

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

// 1000lines...

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

// 1000lines...

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

// 1000lines...

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

/* 
  1) 가상 엘리먼트란?
  JSX 트리 > 자바스크립트 객체 > 실제 엘리먼트 > 문서로 주입
*/
// function Snippet() {
//   return <h1>Hello React 가상 엘리먼트란?</h1>;
// }

/*
  2) JSX 기본 문법
*/
// function Snippet() {
//   return (
//     <form>
//       <h1>JSX 기본 문법</h1>
//       <input
//         id="search"
//         type="search"
//         name="q"
//         className="class01 class02"
//         style={{ outline: "none" }}
//         placeholder="JSX 기본 문법"
//         autoComplete="off"
//       />
//     </form>
//   );
// }

/*
  3) JSX Fragment
  전체가 하나의 태그로 감싸있어야 한다. 만약) 필요없다고 느끼는 태그라면 <></> 빈태그로 감싼다.
*/
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

//     <div>
//       <h1>JSX Fragment</h1>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </div>
//   );
// }

/*
  4) JSX 변수 출력하기
*/
// function Snippet() {
//   const cat = {
//     name: "치즈",
//     age: 2,
//     home: null,
//     sound: function () {
//       return "야옹";
//     },
//   };

//   return (
//     <>
//       <h1>JSX 변수 출력하기</h1>
//       <ul>
//         <li>이름 : {cat.name}</li>
//         <li>나이 : {cat.age}</li>
//         <li>집 : {cat.home}</li>
//         <li>소리 : {cat.sound()}</li>
//       </ul>
//     </>
//   );
// }

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

//       <h2>&& (AND)</h2>
//       <p>{true && "표현식2"}</p>
//       <p>{false && "표현식2"}</p>

//       <h2>|| (OR)</h2>
//       <p>{"표현식1" || "표현식2"}</p>
//       <p>{"" || "표현식2"}</p>

//       <h2>? (삼항연산자)</h2>
//       <p>{true ? "표현식1" : "표현식2"}</p>
//       <p>{false ? "표현식1" : "표현식2"}</p>
//     </>
//   );
// }

/*
  6) 리스트 랜더링
  key : 리액트 재조정 알고리즘 때문에 필요한 값, 고유한 값이여야 한다.
*/
// function Snippet() {
//   const beers = [
//     { name: "하이네켄", origin: "네덜란드" },
//     { name: "기네스", origin: "아일랜드" },
//     { name: "버드와이저", origin: "미국" },
//   ];

//   const beersList = beers.map((beer) => (
//     <li key={beer.name}>
//       {beer.name}, {beer.origin}
//     </li>
//   ));

//   return (
//     <>
//       <h1>리스트 랜더링</h1>
//       <ul>{beersList}</ul>
//     </>
//   );
// }

/*
  Q. 조건부 랜더링, 리스트 랜더링
*/
// function Snippet() {
//   const beers = [
//     { name: "하이네켄", origin: "네덜란드", available: false },
//     { name: "기네스", origin: "아일랜드", available: true },
//     { name: "버드와이저", origin: "미국", available: true },
//   ];

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
//     <tr>
//       <td key={beer.name}>{beer.name}</td>
//       <td key={beer.origin}>{beer.origin}</td>
//       <td key={beer.available}>{beer.available ? "예" : "아니요"}</td>
//     </tr>
//   ));

//   return (
//     <table border="1" style={{ borderCollapse: "collapse" }}>
//       <thead>
//         <tr>
//           <th>이름</th>
//           <th>원산지</th>
//           <th>판매중</th>
//         </tr>
//       </thead>
//       <tbody>{beersList}</tbody>
//     </table>
//   );
// }

// 1000lines...

/*
  3. 컴포넌트
  UI를 구성하는 재사용 가능하고 독립적인 부품

  1) 컴포넌트 합성
  2) Props
  3) children Props
  4) useContext Hook
  5) JSX 이벤트처리
  6) useState Hook
*/

/*
  1) 컴포넌트 합성
*/
// function Header() {
//   return (
//     <div
//       style={{
//         margin: "0",
//         padding: "0 2.5rem",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         color: "#fff",
//       }}
//     >
//       <h1>REACT.JS</h1>

//       <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
//         <li>Ngular</li>
//         <li>React</li>
//         <li>Vue</li>
//       </ul>
//     </div>
//   );
// }

// function Title() {
//   return (
//     <h1
//       style={{ margin: "0", padding: "0", color: "#fff", fontSize: "2.5rem" }}
//     >
//       React Component
//     </h1>
//   );
// }

// function Text() {
//   return (
//     <p style={{ margin: "0", padding: "0", color: "#fff" }}>
//       이러한 예제를 통해서 리액트 컴포넌트 합성에 대해서 <br /> 배울 수 있다.
//     </p>
//   );
// }

// function Snippet() {
//   return (
//     <section
//       style={{
//         position: "ralative",
//         width: "100%",
//         height: "100vh",
//         background:
//           "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center",
//         backgroundSize: "cover",
//       }}
//     >
//       <Header></Header>

//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           textAlign: "center",
//         }}
//       >
//         <Title></Title>
//         <Text></Text>
//       </div>
//     </section>
//   );
// }

/*
  2) Props

  컴포넌트에 전달되는 데이터
*/
// function Beer({ beer }) {
//   return (
//     <ul>
//       <li key={beer.name}>이름 : {beer.name}</li>
//       <li key={beer.origin}>원산지 : {beer.origin}</li>
//       <li key={beer.available}>판매중 : {beer.available ? "예" : "아니요"}</li>
//     </ul>
//   );
// }

// function Snippet() {
//   const irishBeer = {
//     name: "기네스",
//     origin: "아일랜드",
//     available: false,
//   };

//   return (
//     <>
//       <h1>React Props</h1>
//       <Beer beer={irishBeer}></Beer>
//     </>
//   );
// }

/*
  컴포넌트 합성 & Props 문제

  아래의 데이터와 컴포넌트를 사용하여 뷰를 완성해보세요. (데이터 Snippet내의 지역변수)

  컴포넌트
  1. Header
  2. Title
  3. Text
  4. Snippet
*/
// function Header({ header }) {
//   const headerList = header.map((headerItem) => (
//     <li key={headerItem.id}>{headerItem.text}</li>
//   ));

//   return (
//     <div
//       style={{
//         margin: "0",
//         padding: "0 2.5rem",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         color: "#fff",
//       }}
//     >
//       <h1>REACT.JS</h1>

//       <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
//         {headerList}
//       </ul>
//     </div>
//   );
// }

// function Title({ title }) {
//   return (
//     <h1
//       key={title.id}
//       style={{ margin: "0", padding: "0", color: "#fff", fontSize: "2.5rem" }}
//     >
//       {title.text}
//     </h1>
//   );
// }

// function Text({ text }) {
//   return (
//     <p key={text.id} style={{ margin: "0", padding: "0", color: "#fff" }}>
//       {text.text}
//     </p>
//   );
// }

// function Snippet() {
//   const header = [
//     { id: "header0", text: "Ngular" },
//     { id: "header1", text: "React" },
//     { id: "header2", text: "Vue" },
//   ];

//   const title = { id: "title1", text: "React Component" };

//   const text = {
//     id: "text1",
//     text: "이러한 예제를 통해서 리액트 컴포넌트 합성에 대해서 배울 수 있다.",
//   };

//   return (
//     <section
//       style={{
//         position: "ralative",
//         width: "100%",
//         height: "100vh",
//         background:
//           "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center",
//         backgroundSize: "cover",
//       }}
//     >
//       <Header header={header}></Header>

//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           textAlign: "center",
//         }}
//       >
//         <Title title={title}></Title>
//         <Text text={text}></Text>
//       </div>
//     </section>
//   );
// }

/*
  3) children props

  컴포넌트 트리를 작성할 수 있다.
*/
// function Section({ children }) {
//   return (
//     <section
//       style={{
//         position: "ralative",
//         width: "100%",
//         height: "100vh",
//         background:
//           "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center",
//         backgroundSize: "cover",
//       }}
//     >
//       {children}
//     </section>
//   );
// }

// function Header({ header }) {
//   const headerList = header.map((headerItem) => (
//     <li key={headerItem.id}>{headerItem.text}</li>
//   ));

//   return (
//     <div
//       style={{
//         margin: "0",
//         padding: "0 2.5rem",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         color: "#fff",
//       }}
//     >
//       <h1>REACT.JS</h1>

//       <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
//         {headerList}
//       </ul>
//     </div>
//   );
// }

// function Title({ title, children }) {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         textAlign: "center",
//       }}
//     >
//       <h1
//         key={title.id}
//         style={{ margin: "0", padding: "0", color: "#fff", fontSize: "2.5rem" }}
//       >
//         {title.text}
//       </h1>
//       {children}
//     </div>
//   );
// }

// function Text({ text }) {
//   return (
//     <p key={text.id} style={{ margin: "0", padding: "0", color: "#fff" }}>
//       {text.text}
//     </p>
//   );
// }

// function Snippet() {
//   const header = [
//     { id: "header0", text: "Ngular" },
//     { id: "header1", text: "React" },
//     { id: "header2", text: "Vue" },
//   ];

//   const title = { id: "title1", text: "React Component" };

//   const text = {
//     id: "text1",
//     text: "이러한 예제를 통해서   children props 컴포넌트 트리를 작성할 수 있다.",
//   };

//   return (
//     <Section>
//       <Header header={header}></Header>
//       <Title title={title}>
//         <Text text={text}></Text>
//       </Title>
//     </Section>
//   );
// }

/*
  4) useContent Hook (https://velog.io/@donggu/%EB%AC%B8%EA%B3%BC%EC%83%9D%EC%9D%B4-%EC%84%A4%EB%AA%85%ED%95%98%EB%8A%94-React-propsproperties-children 참고 사이트)

  트리구조에서 상위 컴포넌트가 전달한 데이터에 접근할 수 있게 한다.
*/
// const AuthContext = createContext();

// function AuthProvider({ children }) {
//   const userValue = { id: "Username" };

//   return (
//     <AuthContext.Provider value={userValue}>{children}</AuthContext.Provider>
//   );
// }

// function Layout({ children }) {
//   // createContext을 통해서 저장하고 useContext을 사용하여 가져오기
//   const auth = useContext(AuthContext);
//   console.log(auth);

//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%,-50%)",
//         textAlign: "center",
//       }}
//     >
//       <h1>안녕하세요 {auth.id}님:)</h1>
//       {children}
//     </div>
//   );
// }

// function Text() {
//   // createContext을 통해서 저장하고 useContext을 사용하여 가져오기
//   const auth = useContext(AuthContext);
//   console.log(auth);

//   return <p>{auth.id}님 항상 저희 사이트를 방문해주셔서 감사합니다.</p>;
// }

// function Snippet() {
//   return (
//     <AuthProvider>
//       <Layout>
//         <Text></Text>
//       </Layout>
//     </AuthProvider>
//   );
// }

/*
  5) JSX에서 이벤트 처리

  onEventName = {eventHandler}
*/
// function ClickEvent() {
//   return alert("클릭했습니다.");
// }

// function Snippet() {
//   function ClickEvent() {
//     return alert("클릭했습니다.");
//   }

//   return <button onClick={ClickEvent}>Click</button>;
// }

/*
  6) useState Hook

  const [state, setState] = useState(initialValue)

  1. state : 변수
  2. setState(newState) : state를 업데이트시키는 함수
  3. initialValue : state의 초기값
*/
// function Snippet() {
//   const [state, setState] = useState(0);

//   // 버튼을 클릭할 떄 state가 1씩 증가한다.
//   function OnclickEvent() {
//     setState(state + 1);
//   }

//   return (
//     <button onClick={OnclickEvent} style={{ padding: "1rem" }}>
//       count : {state}
//     </button>
//   );
// }

/*
  Q. 클릭 이벤트로 "구독중", "구독취소"를 구현해보세요.
*/
// function Snippet() {
//   let [state, setState] = useState({ isChecked: true, text: "구독하기" });

//   function OnclickEvent() {
//     setState(
//       state.isChecked === true ? 
//       { isChecked: false, text: "구독취소" } : { isChecked: true, text: "구독하기" }
//     );
//   }

//   return <button onClick={OnclickEvent}>{state.text}</button>;
// }