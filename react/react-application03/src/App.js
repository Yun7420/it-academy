import { createContext, useContext, useState } from "react";

export default function App() {
  return <Snippet></Snippet>
}

// 1000lines...

/*
  React 시작하기
  (참고 사이트 방법) ... https://dev.classmethod.jp/articles/the-process-from-installing-react-to-distributing-it/
  node.js 다운로드 > npm -v(npm 버전 확인, node.js로 만들어진 프로그램을 쉽게 설치해주는 앱 스토어) > npm install -g create-react-app(npm을 사용해서 react 설치) > create-react-app -v(react버전 확인)
  react-app(react-app이라는 폴더 생성) > cd react-app(react-app폴더로 이동) > create-react-app .(react-app에 react 개발 환경 구축) > npm run start(실행)

  (학원 방법)
  npx create-react-app react-basic(react-basic이라는 폴더에 react개발 환경 구축) > cd react-basic(react-basic 폴더로 이동) > npm start(실행)

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
//   return <h1>가상 엘리먼트란?</h1>;
// }

/*
  2) JSX 기본 문법
  속성값들은 카멜 케이스에 준수해서 작성해준다.
*/
// function Snippet() {
//   return (
//     <form>
//       <h1>JSX 기본 문법</h1>
//       <input
//         id="search"
//         type="search"
//         name="name"
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
//     name: "cat",
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
//         <li key={cat.name}>이름 : {cat.name}</li>
//         <li key={cat.age}>나이 : {cat.age}</li>
//         <li key={cat.home}>집 : {cat.home}</li>
//         <li key={cat.sound}>소리 : {cat.sound()}</li>
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

// function Snippet() {
//   const beers = [
//     { name: "하이네켄", origin: "네덜란드" },
//     { name: "기네스", origin: "아일랜드" },
//     { name: "버드와이저", origin: "미국" },
//   ];

//   return (
//     <>
//       <h1>리스트 랜더링</h1>
//       <ul>
//         {beers.map((beer) => {
//           return (
//             <li key={beer.name}>
//               {beer.name}, {beer.origin}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

/*
  Q. 조건부 랜더링, 리스트 랜더링 문제
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
//         {beers.map((beer) => {
//           return (
//             <tr>
//               <td key={beer.name}>{beer.name}</td>
//               <td key={beer.origin}>{beer.origin}</td>
//               <td key={beer.available}>{beer.available ? "예" : "아니요"}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

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
// function Title() {
//   return <h1>React.Js</h1>;
// }

// function Text() {
//   return (
//     <p>
//       이러한 예제를 통해서 리액트 컴포넌트 합성에 대해서 <br /> 배울 수 있다.
//     </p>
//   );
// }

// function Snippet() {
//   return (
//     <div
//       style={{
//         padding: "1.5rem",
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%,-50%)",
//         border: "1px solid #000",
//         borderRadius: "1rem",
//         textAlign: "center",
//       }}
//     >
//       <Title></Title>
//       <Text></Text>
//     </div>
//   );
// }

/*
  2) Props

  컴포넌트에 전달되는 데이터
*/
// function Beer({beer}) {
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

//   return (
//     <>
//       <h1>React Props</h1>
//       <Beer name={"기네스"} origin={"아일랜드"} available={false}></Beer>
//     </>
//   );
// }

/*
  컴포넌트 합성 & Props 문제

  아래의 데이터와 컴포넌트를 사용하여 뷰를 완성해보세요. (데이터 Snippet내의 지역변수)
*/
// function Title({ title }) {
//   return <h1 key={title.id}>{title.content}</h1>;
// }

// function Text({ text }) {
//   return <p key={text.id}>{text.content}</p>;
// }

// function Snippet() {
//   const titleContent = {
//     id: "title",
//     content: "React.Js",
//   };

//   const textContent = {
//     id: "text",
//     content: "이러한 예제를 통해서 리액트 컴포넌트 합성에 대해서 배울 수 있다.",
//   };

//   return (
//     <div
//       style={{
//         padding: "1.5rem",
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%,-50%)",
//         border: "1px solid #000",
//         borderRadius: "1rem",
//         textAlign: "center",
//       }}
//     >
//       <Title title={titleContent}></Title>
//       <Text text={textContent}></Text>
//     </div>
//   );
// }

/*
  3) children props

  컴포넌트 트리를 작성할 수 있다.
*/
// function Layout({ children }) {
//   const styles = {
//     padding: "1.5rem",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%,-50%)",
//     border: "1px solid #000",
//     borderRadius: "1rem",
//     textAlign: "center",
//   };

//   return <div style={styles}>{children}</div>;
// }

// function Title({ title }) {
//   return <h1 key={title.id}>{title.content}</h1>;
// }

// function Text({ text }) {
//   return <p key={text.id}>{text.content}</p>;
// }

// function Snippet() {
//   const titleContent = {
//     id: "title",
//     content: "React.Js",
//   };

//   const textContent = {
//     id: "text",
//     content: "이러한 예제를 통해서 리액트 컴포넌트 합성에 대해서 배울 수 있다.",
//   };

//   return (
//     <Layout>
//       <Title title={titleContent}></Title>
//       <Text text={textContent}></Text>
//     </Layout>
//   );
// }

/*
  4) useContent Hook (https://velog.io/@donggu/%EB%AC%B8%EA%B3%BC%EC%83%9D%EC%9D%B4-%EC%84%A4%EB%AA%85%ED%95%98%EB%8A%94-React-propsproperties-children 참고 사이트)

  트리구조에서 상위 컴포넌트가 전달한 데이터에 접근할 수 있게 한다.
*/
// const AuthContext = createContext();

// function AuthProvider({ children }) {
//   const userValue = { id: "userName" };

//   return (
//     <AuthContext.Provider value={userValue}>{children}</AuthContext.Provider>
//   );
// }

// function Layout() {
// createContext을 통해서 저장하고 useContext을 사용하여 가져오기
//   const auth = useContext(AuthContext);

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
//       <p>{auth.id}님 항상 저희 사이트를 방문해주셔서 감사합니다.</p>
//     </div>
//   );
// }

// function Snippet() {
//   return (
//     <AuthProvider>
//       <Layout></Layout>
//     </AuthProvider>
//   );
// }

/*
  5) JSX에서 이벤트 처리

  onEventName = {eventHandler}
*/
// function ClickEvent() {
//   alert("클릭했습니다.");
// }

// function Snippet() {
//   function ClickEvent() {
//     alert("클릭했습니다.");
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

//   function OnclickEvent(){
//     setState(state + 1);
//   }

//   return (
//     <button onClick={OnclickEvent}>{state}</button>
//   )
// }

/*
  Q. 클릭 이벤트로 "구독중", "구독취소"를 구현해보세요.
*/
// function Snippet() {
//   const [state, setState] = useState({ text: "구독하기", buttonState: false });

//   function OnclickEvent() {
//     setState(
//       state.buttonState
//         ? { text: "구독하기", buttonState: false }
//         : { text: "구독취소", buttonState: true }
//     );
//   }

//   return <button onClick={OnclickEvent}>{state.text}</button>;
// }