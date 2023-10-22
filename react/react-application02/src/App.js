import { useContext, createContext, useState } from "react";

export default function App() {
  return <Snippet></Snippet>;
}

/*
  가상 엘리먼트란?
*/
// function Snippet() {
//   return <h1>Hello React 가상 엘리먼트란?</h1>;
// }

/*
  JSX 기본 문법
*/
// function Snippet() {
//   return (
//     <form>
//       <h1>JSX 기본 문법</h1>
//       <input
//         id="search"
//         className="class01 class02"
//         type="search"
//         name="q"
//         placeholder="JSX 기본 문법"
//         autoComplete="off"
//         style={{ outline: "none" }}
//       />
//     </form>
//   );
// }

/*
  JSX Fragment
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
  JSX 변수 출력하기
*/
// function Snippet() {
//   const cat = {
//     name: "치즈",
//     age: 2,
//     home: null,
//     sound: function () {
//       return "야옹";
//     },
//   }

//   return(
//     <>
//       <h1>JSX 변수 출력하기</h1>
//       <ul>
//         <li>이름 : {cat.name}</li>
//         <li>나이 : {cat.age}</li>
//         <li>집 : {cat.home}</li>
//         <li>소리 : {cat.sound()}</li>
//       </ul>
//     </>
//   )
// }

/*
  조건부 랜더링
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
  리스트 랜더링
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
// }

/*
  컴포넌트 합성
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
  Props
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
  Q. 컴포넌트 합성 & Props 문제
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
  children props
*/
// function Layout({ children }) {
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
//       {children}
//     </div>
//   );
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
  useContent Hook (https://velog.io/@donggu/%EB%AC%B8%EA%B3%BC%EC%83%9D%EC%9D%B4-%EC%84%A4%EB%AA%85%ED%95%98%EB%8A%94-React-propsproperties-children 참고 사이트)
*/
// const AuthContext = createContext();

// function AuthProvider({ children }) {
//   const userValue = { id: "userName" };

//   return (
//     <AuthContext.Provider value={userValue}>{children}</AuthContext.Provider>
//   );
// }

// function Layout() {
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
  JSX 이벤트 처리
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
  useState Hook
*/
// function Snippet() {
//   const [state, setState] = useState(0);

//   function ClickEvent() {
//     setState(state + 1);
//   }

//   return <button onClick={ClickEvent}>{state}</button>;
// }

/*
  Q. useState Hook 문제
*/
// function Snippet() {
//   const [state, setState] = useState({ isState: false, text: "구독하기" });

//   function ClickEvent() {
//     setState(
//       state.isState
//         ? { isState: false, text: "구독하기" }
//         : { isState: true, text: "구독취소" }
//     );
//   }

//   return <button onClick={ClickEvent}>{state.text}</button>;
// }