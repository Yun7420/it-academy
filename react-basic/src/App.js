import { useContext, createContext, useState } from "react";

export default function App() {
  return <Snippet></Snippet>
};

/*
  6. 리엑트 컴포넌트
  UI를 구성하는 재사용 가능하고 독립적인 부품

  1) 컴포넌트 합성
  2) Props
  3) children Props
  4) useContext Hook
*/

// 1) 컴포넌트 합성
// function Content() {
//   return (
//     <section>
//       <h2>고양이는 액체일까?</h2>
//       <img
//         src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
//         alt="고양이 이미지"
//         width="100%"
//       />
//     </section>
//   );
// };

// function Comments() {
//   return (
//     <section>
//       <h2>댓글</h2>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </section>
//   );
// };

// function Suggested() {
//   return (
//     <section>
//       <h2>추천 영상</h2>
//       <ul>
//         <li>추천 영상</li>
//         <li>추천 영상</li>
//         <li>추천 영상</li>
//       </ul>
//     </section>
//   );
// };

// function Snippet() {
//   return (
//     <>
//       <header>
//         <h1>Youtube</h1>
//       </header>

//       <main>
//         <Content></Content>
//         <Comments></Comments>
//       </main>

//       <aside>
//         {<Suggested></Suggested>}
//         {/* {Suggested()} */}
//       </aside>
//     </>
//   )
// }

/*
  Props

  컴포넌트에 전달되는 데이터
*/

// function Beer({ beer }) {

//   // props
//   console.log(beer);

//   return (
//     <ul>
//       <li>이름 : {beer.name}</li>
//       <li>원산지 : {beer.origin}</li>
//       <li>판매중 : {beer.available ? "예" : "아니요"}</li>
//     </ul>
//   );
// };

// function Snippet() {
//   // 지역 변수
//   const irishBeer = {
//     name: "기네스",
//     origin: "아일랜드",
//     available: false
//   };

//   return (
//     <>
//       <h2>Beer</h2>
//       {/* 매개변수 구조분해할당 */}
//       <Beer beer={irishBeer}></Beer>
//     </>
//   );
// };

/*
  컴포넌트 합성 & Props 문제

  아래의 데이터와 컴포넌트를 사용하여 뷰를 완성해보세요.
  (데이터 Snippet내의 지역변수)

  컴포넌트
  1. Snippet
  2. Content
  3. Comments
  4. Suggested
*/

// 영상
// function Content({ video }) {
//   return (
//     <section>
//       <h2>{video.title}</h2>
//       <img width="100%" src={video.source} alt=""></img>
//     </section>
//   );
// };

// 댓글
// function Comments({ comments }) {
//   let commentsList = comments.map(item => (
//     <li key={item.id}>{item.content}</li>
//   ));

//   return (
//     <section>
//       <h2>댓글</h2>
//       <ul>
//         {commentsList}
//       </ul>
//     </section>
//   );
// };

// 추천 영상
// function Suggested({ suggestedVideo }) {
//   let suggestedVideoList = suggestedVideo.map(suggestedVideo => (
//     <li key={suggestedVideo.id}>{suggestedVideo.title}</li>
//   ));

//   return (
//     <section>
//       <h2>추천 영상</h2>
//       <ul>
//         {suggestedVideoList}
//       </ul>
//     </section>
//   );
// };

// 메인 컴포넌트
// function Snippet() {
//   const video = {
//     id: "v0",
//     title: "고양이는 액체일까?",
//     source: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070",
//   }

//   const comments = [
//     { id: "c2", content: "댓글03" },
//     { id: "c1", content: "댓글02" },
//     { id: "c0", content: "댓글01" },
//   ]

//   const suggestedVideo = [
//     { id: "s2", title: "추천 영상 03" },
//     { id: "s1", title: "추천 영상 02" },
//     { id: "s0", title: "추천 영상 01" },
//   ]

//   return (
//     <>
//       <header>
//         <h1>Youtube</h1>
//       </header>
//       <main>
//         <Content video={video}></Content>
//         <Comments comments={comments}></Comments>
//       </main>
//       <aside>
//         <Suggested suggestedVideo={suggestedVideo}></Suggested>
//       </aside>
//     </>
//   );
// };

/*
  childerne props

  컴포넌트 트리를 작성할 수 있다.
*/

// children props (Article 컴포넌트)
// function Layout({children}){

//   console.log(children);

//   return (
//     <>
//       <h1>Instagram</h1>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>Posts</li>
//           <li>Profile</li>
//         </ul>
//       </nav>

//       <main>
//         {children}
//       </main>
//     </>
//   )
// }

// function Article(){
//   return (
//     <section>
//       <img
//         src="https://plus.unsplash.com/premium_photo-1677542200557-3c6856cc98b1?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2072"
//         alt=""
//         width="100%"
//       />

//       <p>
//         <b>snoop_dogg</b> 주인 나감
//       </p>

//       <small>1일 전</small>
//     </section>
//   )
// }

// function Snippet(){
//   return (
//     <Layout>
//       <Article></Article>
//     </Layout>
//   )
// }

/*
   useContent Hook

   트리구조에서 상위 컴포넌트가 전달한 데이터에 접근할 수 있게 한다.
*/

// // 프로파이더 컴포넌트
// const AuthContext = createContext();

// // 레이아웃의 상위 컴포넌트
// function AuthProvider({ children }) {
//   // 지역 변수
//   const value = { username: "bunny" };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// function Layout({ children }) {

//   // childrem props (Article 컴포넌트)
//   console.log(children);

//   const auth = useContext(AuthContext);

//   // value 객체
//   console.log(auth);

//   return (
//     <>
//       <h1>Instagram</h1>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>Posts</li>
//           <li>Profile</li>
//         </ul>
//       </nav>

//       <p>안녕하세요, {auth.username}님!</p>

//       <main>
//         {children}
//       </main>
//     </>
//   )
// }

// function Article() {
//   return (
//     <section>
//       <img
//         src="https://plus.unsplash.com/premium_photo-1677542200557-3c6856cc98b1?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2072"
//         alt=""
//         width="100%"
//       />

//       <p>
//         <b>snoop_dogg</b> 주인 나감
//       </p>

//       <small>1일 전</small>
//     </section>
//   )
// }

// function Snippet() {
//   return (
//     <AuthProvider>
//       <Layout>
//         <Article></Article>
//       </Layout>
//     </AuthProvider>
//   )
// }

/*
  JSX에서 이벤트 처리

  onEventName = {eventHandler}
*/

// function Snippet() {
//   function handleClick() {
//     alert("lol")
//   }

//   return <button onClick={handleClick}>button</button>
// }

/*
  뷰 업데이트

  1. useState Hook
  2. 상위 state 업데이트 하기
*/

/*
  useState Hook

  const [state, setState] = useState(initialValue)

  1. state : 변수
  2. setStatus(newState) : state를 업데이트시키는 함수
  3. initialValue : state의 초기값
*/

// function Snippet() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <p>count : {count}</p>
//       <button onClick={handleClick}>+</button>
//     </>
//   )
// }

function Snippet() {
  const [subscribe, unSubscribe] = useState("구독중");

  function handleClick() {
    unSubscribe(subscribe === "구독중" ? "구독하기" : "구독중")
  };

  return (
    <>
      <h1>SubScribe Button</h1>
      <button onClick={handleClick}>{subscribe}</button>
    </>
  );
};