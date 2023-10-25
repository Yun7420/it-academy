// React Import
import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// 1000lines...

// 컴포넌트 내보내기
export default function App() {
  return <Layout></Layout>;
}

// function App() {
//   return <Layout></Layout>;
// }

// export default App;

// 1000lines...

// 가상 엘리먼트
// function Layout() {
//   return <h1>가상 엘리먼트란?</h1>;
// }

// 1000lines...

// JSX 기본 문법
// function Layout() {
//   // const styles = {
//   //   outline: "none",
//   // };

//   return (
//     <form>
//       <h1>JSX 기본 문법</h1>
//       <input
//         id="search"
//         type="search"
//         name="name"
//         className="class01 class02"
//         style={{ outline: "none" }} //style={styles}
//         placeholder="JSX 기본 문법"
//         autoComplete="off"
//       />
//     </form>
//   );
// }

// 1000lines...

// JSX Fragment
// function Layout() {
//   return (
//     // 빈태그로 감싼 유형
//     <>
//       <h1>JSX Fragment</h1>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </>

//     // 일반태그로 감싼 유형
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

// 1000lines...

// JSX 변수 출력하기
// function Layout() {
//   const dog = {
//     name: "Dog",
//     age: 10,
//     home: null,
//     sound: function () {
//       return "멍멍";
//     },
//   };

//   return (
//     <>
//       <h1>JSX 변수 출력하기</h1>
//       <ul>
//         <li key={dog.name}>이름 : {dog.name}</li>
//         <li key={dog.age}>나이 : {dog.age}</li>
//         <li key={dog.home}>집 : {dog.home}</li>
//         <li key={dog.sound}>소리 : {dog.sound()}</li>
//       </ul>
//     </>
//   );
// }

// 1000lines...

// JSX 조건부 랜더링
// function Layout() {
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

// 1000lines...

// 리스트 랜더링
// function Layout() {
//   const framework = [
//     { name: "framework01", eName: "Angular", kName: "앵귤러" },
//     { name: "framework02", eName: "React", kName: "리액트" },
//     { name: "framework03", eName: "Vue", kName: "뷰" },
//   ];

//   const frameworkList = framework.map((framework) => (
//     <li key={framework.name}>
//       {framework.eName}, {framework.kName}
//     </li>
//   ));

//   return (
//     <>
//       <h1>리스트 랜더링</h1>
//       <ul>{frameworkList}</ul>
//     </>
//   );
// }

// 1000lines...

// Q. 조건부 랜더링, 리스트 랜더링 문제
// function Layout() {
//   const framework = [
//     { name: "framework01", eName: "Angular", kName: "앵귤러", available : true },
//     { name: "framework02", eName: "React", kName: "리액트", available : false },
//     { name: "framework03", eName: "Vue", kName: "뷰", available : false },
//   ];

//   const frameworkList = framework.map((framework) => (
//     <tr key={framework.name}>
//       <td key={framework.eName}>{framework.eName}</td>
//       <td key={framework.kName}>{framework.kName}</td>
//       <td key={framework.available}>{framework.available ? "예" : "아니요"}</td>
//     </tr>
//   ));

//   return (
//     <table border="1" style={{ borderCollapse: "collapse" }}>
//       <thead>
//         <tr>
//           <th>English</th>
//           <th>Korean</th>
//           <th>사용중</th>
//         </tr>
//       </thead>
//       <tbody>{frameworkList}</tbody>
//     </table>
//   );
// }

// 1000lines...

// 컴포넌트 합성
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

// function Layout() {
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

//   return (
//     <div style={styles}>
//       <Title></Title>
//       <Text></Text>
//     </div>
//   );
// }

// 1000lines...

// Props
// function Framework({ props }) {
//   return (
//     <ul>
//       <li key={props.eName}>이름 : {props.eName}</li>
//       <li key={props.kName}>원산지 : {props.kName}</li>
//       <li key={props.available}>
//         사용중 : {props.available ? "예" : "아니요"}
//       </li>
//     </ul>
//   );
// }

// function Layout() {
//   const framework = {
//     eName: "React",
//     kName: "리액트",
//     available: false,
//   };

//   return (
//     <>
//       <h1>React Props</h1>
//       <Framework props={framework}></Framework>
//     </>
//   );

//   // return (
//   //   <>
//   //     <h1>React Props</h1>
//   //     <Framework eName={"React"} kName={"리액트"} available={false}></Framework>
//   //   </>
//   // );
// }

// 1000lines...

// Q. 컴포넌트 합성, Props 문제
// function Title({ title }) {
//   return <h1 key={title.id}>{title.content}</h1>;
// }

// function Text({ text }) {
//   return <p key={text.id}>{text.content}</p>;
// }

// function Layout() {
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

//   const titleContent = {
//     id: "title",
//     content: "React.Js",
//   };

//   const textContent = {
//     id: "text",
//     content: "이러한 예제를 통해서 리액트 컴포넌트 합성에 대해서 배울 수 있다.",
//   };

//   return (
//     <div style={styles}>
//       <Title title={titleContent}></Title>
//       <Text text={textContent}></Text>
//     </div>
//   );
// }

// 1000lines...

// children props
// function Section({ children }) {
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

//   return (
//     <div style={styles}>
//       <h1>children props</h1>
//       <div>{children}</div>
//     </div>
//   );
// }

// function Title({ title }) {
//   return <h1 key={title.id}>{title.content}</h1>;
// }

// function Text({ text }) {
//   return <p key={text.id}>{text.content}</p>;
// }

// function Layout() {
//   const titleContent = {
//     id: "title",
//     content: "React.Js",
//   };

//   const textContent = {
//     id: "text",
//     content: "이러한 예제를 통해서 리액트 컴포넌트 합성에 대해서 배울 수 있다.",
//   };

//   return (
//     <Section>
//       <Title title={titleContent}></Title>
//       <Text text={textContent}></Text>
//     </Section>
//   );
// }

// 1000lines...

// useContent Hook (https://velog.io/@donggu/%EB%AC%B8%EA%B3%BC%EC%83%9D%EC%9D%B4-%EC%84%A4%EB%AA%85%ED%95%98%EB%8A%94-React-propsproperties-children 참고 사이트)
// const AuthContext = createContext(); // createContext을 통해서 변수를 저장

// function AuthProvider({ children }) {
//   const userValue = { id: "userName" };

//   return (
//     <AuthContext.Provider value={userValue}>{children}</AuthContext.Provider>
//   );
// }

// function Section() {
//   const auth = useContext(AuthContext); //useContext을 사용하여 변수를 사용

//   const styles = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%,-50%)",
//     textAlign: "center",
//   };

//   return (
//     <div style={styles}>
//       <h1>안녕하세요 {auth.id}님:)</h1>
//       <p>{auth.id}님 항상 저희 사이트를 방문해주셔서 감사합니다.</p>
//     </div>
//   );
// }

// function Layout() {
//   return (
//     <AuthProvider>
//       <Section></Section>
//     </AuthProvider>
//   );
// }

// 1000lines...

// JSX에서 이벤트
// function Layout() {
//   function onClickEvent() {
//     alert("클릭했습니다.");
//   }

//   return <button onClick={onClickEvent}>Click</button>;
// }

// 1000lines...

// useState Hook
// function Layout() {
//   const [state, setState] = useState(0);

//   function onClickEvent(){
//     setState(state + 1);
//   }

//   return (
//     <button onClick={onClickEvent}>{state}</button>
//   )
// }

// 1000lines...

// Q. 클릭 이벤트로 "구독하기", "구독취소"를 구현해보세요.
// function Layout() {
//   const [subscribe, setSubscribe] = useState({
//     text: "구독하기",
//     subscribeState: false,
//   });

//   function onClickEvent() {
//     setSubscribe(
//       subscribe.subscribeState
//         ? { text: "구독하기", subscribeState: false }
//         : { text: "구독취소", subscribeState: true }
//     );
//   }

//   return <button onClick={onClickEvent}>{subscribe.text}</button>;
// }

// function Layout() {
//   const [subscribe, setSubscribe] = useState(false);

//   function onClickEvent() {
//     setSubscribe(!subscribe);
//   }

//   return (
//     <>
//       <button onClick={onClickEvent}>
//         {subscribe ? "구독취소" : "구독하기"}
//       </button>
//     </>
//   );
// }

// 1000lines...

// 기본 라우터
// function Home() {
//   return <h1>Home</h1>;
// }

// function About() {
//   return <h1>About</h1>;
// }

// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/Posts/Post01">Post01</Link>
//         </li>
//         <li>
//           <Link to="/Posts/Post02">Post02</Link>
//         </li>
//       </ul>
//     </>
//   );
// }

// function Post() {
//   const { postId } = useParams();

//   return <h1>{postId}</h1>;
// }

// function Error() {
//   return (
//     <h1>Error</h1>
//   )
// }

// function Layout() {
//   return (
//     <Router>
//       <ul>
//         <li>
//           <Link to="/Home">Home</Link>
//         </li>
//         <li>
//           <Link to="/About">About</Link>
//         </li>
//         <li>
//           <Link to="/Posts">Posts</Link>
//         </li>
//       </ul>

//       <Routes>
//         <Route path="/Home" element={<Home></Home>}></Route>
//         <Route path="/About" element={<About></About>}></Route>
//         <Route path="/Posts" element={<Posts></Posts>}></Route>
//         <Route path="/Posts/:postId" element={<Post></Post>}></Route>
//         <Route path="*" element={<Error></Error>}></Route>
//       </Routes>
//     </Router>
//   );
// }

// 인증이 적용된 라우터
// const AuthContext = createContext();

// function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const value = { user, setUser };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// function Loginstate() {
//   const { user, setUser } = useContext(AuthContext);

//   return user ? (
//     <div>
//       <p>안녕하세요 {user}님</p>
//       <button onClick={() => setUser(null)}>로그아웃</button>
//     </div>
//   ) : (
//     <p>로그인하세요.</p>
//   );
// }

// function Login({ children }) {
//   const { user, setUser } = useContext(AuthContext);
//   const [userName, setUsername] = useState(null);

//   return user ? (
//     <>{children}</>
//   ) : (
//     <form onSubmit={() => setUser(userName)}>
//       <h1>Login</h1>
//       <input
//         onChange={(e) => setUsername(e.target.value)}
//         type="text"
//         placeholder="아이디를 입력하세요"
//       />
//       <button>제출</button>
//     </form>
//   );
// }

// function Home() {
//   return <h1>Home</h1>;
// }

// function About() {
//   return <h1>About</h1>;
// }

// function Posts() {
//   return (
//     <div>
//       <h1>Posts</h1>

//       <ul>
//         <li>
//           <Link to="/Posts/Post01">Post01</Link>
//         </li>
//         <li>
//           <Link to="/Posts/Post02">Post02</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// function Post() {
//   const { postId } = useParams();

//   return <h1>{postId}</h1>;
// }

// function Layout() {
//   return (
//     <Router>
//       <AuthProvider>
//         <ul>
//           <li>
//             <Link to="/Home">Home</Link>
//           </li>
//           <li>
//             <Link to="/About">About</Link>
//           </li>
//           <li>
//             <Link to="/Posts">Posts</Link>
//           </li>
//         </ul>

//         <Loginstate></Loginstate>

//         <Routes>
//           <Route path="/Home" element={<Home></Home>}></Route>
//           <Route path="/About" element={<About></About>}></Route>
//           <Route path="/Posts" element={<Posts></Posts>}></Route>
//           <Route
//             path="/Posts/:postId"
//             element={
//               <Login>
//                 <Post></Post>
//               </Login>
//             }
//           ></Route>
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// }

// useEffect Hook
// function Layout() {
//   const [state, setState] = useState(0);

//   function onClickEvent() {
//     setState(state + 1);
//   }

//   useEffect(() => {
//     console.log("날짜 랜더링 : ", new Date().toLocaleTimeString());
//   }, []);

//   return <button onClick={onClickEvent}>{state}</button>;
// }

// 데이터 요청하기 예시
function fetchData() {
  const data = {
    src:
      "https://images.unsplash.com/photo-1682672440006-22b34584de97?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 2000);
  });

  return promise;
}

function Layout() {
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setProfile(data);
      })

      .catch((error) => {
        setError(error);
      })

      .finally(() => {
        setLoad(true);
      });
  }, []);

  if (error) {
    return <p>error</p>;
  }

  if (!load) {
    return <p>load ...</p>;
  } else {
    return <img src={profile.src} alt="" />;
  }
}
