import { useContext, createContext, useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

export default function App() {
  return <Snippet></Snippet>;
}

/*
  Q. 클릭 이벤트로 "구독중", "구독취소"를 구현해보세요.
*/
// function Snippet(){
//   const [subscribed, setSubscribed] = useState(false);

//   function handleClick(){
//     setSubscribed(!subscribed)
//   }

//   return(
//     <>
//       <h1>Subscribed Button</h1>
//       <button onClick={handleClick}>{subscribed ? "구독중" : "구독하기"}</button>
//     </>
//   )
// }

// function Snippet() {
//   const [state, setState] = useState({ text: "구독하기", buttonState: false });

//   function onClickEvent() {
//     setState(
//       state.buttonState ?
//         { text: "구독취소", buttonState: false } : { text: "구독하기", buttonState: true, }
//     );
//   }

//   return <button onClick={onClickEvent}>{state.text}</button>;
// }

/*
  리액트 라우터

  1. 기본 라우터
  2. 인증이 적용된 라우터
*/

/*
  1) 기본 라우터
*/
// // 홈
// function Home() {
//   return (
//     <h1>Home</h1>
//   )
// }

// // 어바웃
// function About() {
//   return (
//     <h1>About</h1>
//   )
// }

// // 게시물 목록
// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p0">post 1</Link>
//           <Link to="/post/p1">post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// // 게시물 보기 페이지
// function Post() {
//   // url 매개변수에 접근할 수 있다.
//   const { postId } = useParams();

//   return (
//     <>
//       <h1>Title</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// // 404페이지
// function NotFound() {
//   return (
//     <h1>404 Not Found</h1>
//   )
// }

// // 메인 컴포넌트
// function Snippet() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="posts" element={<Posts />} />
//         <Route path="post/:postId" element={<Post />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   )
// }

// // Provider 컴포넌트
// const AuthContext = createContext();

// // 유저 관리
// function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   // 하위 컴포넌트에게 value객체를 전달한다.
//   const value = { user, setUser };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// // 로그인 상태 메세지
// function AuthStatus() {
//   // 상위컴포넌트가 전달한 데이터에 접근
//   const { user, setUser } = useContext(AuthContext);

//   return user ? (
//     <p>
//       안녕하세요 {user}님! {" "}
//       <button onClick={() => setUser(null)}>로그아웃</button>
//     </p>
//   ) : (
//     <p>로그인하세요</p>
//   )
// }

// // 인증 검사
// function AuthRequired({ children }) {
//   // value 객체에 접근
//   const { user, setUser } = useContext(AuthContext);
//   const [username, setUsername] = useState("");

//   // 폼 제출 처리
//   function handleSubmit(e) {
//     // 폼 제출 방지
//     e.preventDefault();

//     // user업데이트
//     setUser(username);
//    };

//   if (!user) {
//     return (
//       <form onSubmit={handleSubmit}>
//         <h1>로그인</h1>
//         <input
//           type="text"
//           name="username"
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <button type="submit">로그인</button>
//       </form>
//     )
//   }

//   // post 컴포넌트
//   return children;
// }

// // 홈
// function Home() {
//   return (
//     <h1>Home</h1>
//   )
// }

// // 게시물 목록
// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p0">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p1">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// // 게시물 보기 페이지
// function Post() {
//   const { postId } = useParams();

//   return (
//     <>
//       <h1>Post</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// // 404 페이지
// function NotFound() {
//   return (
//     <h1>404 Notfound</h1>
//   )
// }

// // 메인
// function Snippet() {
//   return (
//     <Router>
//       <AuthProvider>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/posts">Posts</Link>
//             </li>
//           </ul>
//         </nav>

//         <AuthStatus />

//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="posts" element={<Posts />} />
//           <Route path="post/:postId" element={
//             <AuthRequired>
//               <Post />
//             </AuthRequired>
//           } />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   )
// }

/*
  데이터 요청

  1) useEffect Hook
  2) 데이터 요청하기 예시
*/

/*
  1) useEffect Hook
  앱에 여러가지 효과를 줄 수 있다.

  사용 방법
  1. useEffect(effect)
  컴포넌트가 랜더링 될 때마다 이팩트를 실행한다.

  2. useEffect(effect, [])
  최초 랜더링 시에만 이팩트를 실행한다.

  2. useEffect(effect, [dep])
  최초 랜더링 시, dependency가 업데이트 될 떄 이팩트를 실행한다.
*/
// function Snippet() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // 이팩트
//     console.log("랜더링 시간 : ", new Date().toLocaleTimeString())
//   }, [])

//   return (
//     <>
//       <h3>useEffect Hook</h3>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   )
// }

/*
  2) 데이터 요청하기 예시
*/

// 서버에 데이터를 요청하는 함수
// function fetchData() {
//   const DATA = {
//     username: "dog",
//     image: "",
//     bio: "정신이 좀 드는가"
//   }

//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(DATA)
//     }, 2000)
//   })

//   return promise;
// }

// function Snippet() {
//   // 에러처리
//   const [error, setError] = useState(null);
//   // 대기상태 관리
//   const [isLoaded, setIsLoaded] = useState(false);
//   // 프로필 (데이터) 저장
//   const [profile, setProfile] = useState(null);

//   const styles = {
//     width: "100px",
//     height: "100px",
//     objectFit: "cover",
//     border: "1px solid #ddd",
//     borderRadius: "50%",
//   }

//   // 비동기적으로 작동한다.
//   useEffect(() => {
//     fetchData()
//       // 성공 시 데이터를 처리
//       .then(data => {
//         // 프로필을 응답객체로 업데이트한다.
//         setProfile(data)
//       })

//       // 실패 시 에러를 처리
//       .catch(error => {
//         setError(error)
//       })

//       // 성공 실패 상관없이 마지막 항상 실행
//       // state가 업데이트되면 컴포넌트가 다시 호출된다.
//       .finally(() => setIsLoaded(true))
//   }, [])

//   if (error) {
//     return (
//       <p>failed to fetch profile</p>
//     )
//   }

//   // 사용자에게 대기상태를 보여준다.
//   if (!isLoaded) {
//     return (
//       <p>fetching profile</p>
//     )
//   }

//   return (
//     <>
//       <h1>Profile</h1>
//       <img
//         src={profile.image}
//         alt={profile.username}
//         style={styles} />
//       <h3>{profile.username}</h3>
//       <p>{profile.bio}</p>
//     </>
//   )
// }