export default function App() {
  return <Snippet></Snippet>
};

/*
  리엑트 튜토리얼

  1. 리엑트 기초
  2. JSX
  3. 컴포넌트
  4. 이벤트 처리
  5. 뷰 업데이트
  6. 리엑트 라우터
  7. 서버 요청
*/

/*
  리엑트 기초

  1. 리엑트
  UI를 개발하기 위한 자바스크립트 라이브러리
  페이스북이 개발했고 현재 가장 인기있는 프론트엔드 라이브러리이다.

  2. 특징
  1) 컴포넌트 기반
  *컴포넌트 : 뷰를 개발하기 위한 독립적이고 재사용 가능한 부품

  2) 선언적 문법
  사용하기 쉽다

  3) SPA (Single Page Application) 구조
  자바스크립트를 이용해서 뷰를 업데이트 한다.
  속도가 빠르고 화면 전환이 부드럽다.
*/

/*
  JSX (Javascript Extention)
  자바스크립트 확장문법
  가상트리를 만들기 위해 사용된다.
  선언적 문법

  1. 가상 엘리먼트란
  2. JSX 기본 문법
  3. JSX Fragment
  4. JSX에서 변수 출력하기
  5. 조건부 랜더링
  6. 리스트 랜더링
*/

// JSX 트리 -> 자바스크립트 객체 -> 실제 엘리먼트 -> 문서로 주입
// function Snippet(){
//   return <h1>Hello React</h1>;
// };

/*
  JSX의 기본 문법
*/

// function Snippet() {
//   return (
//     <form>
//       <h1>Google</h1>
//       <input type="search" id="search" name="q" className="class1 class2" style={{ outline:"none" }} placeholder="구글 검색" autoComplete="off" />
//     </form>
//   )
// }

/*
  JSX Fragments
*/

// 전체가 하나의 태그로 감싸있어야 한다. 필요없다고 느낄떄는 빈태그로 만들어도 된다.
// function Snippet() {
//   return (
//     <>
//       <h1>JSX Fragments</h1>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </>
//   )
// }

/*
  JSX에서 변수 출력하기
*/

// function Snippet(){
//   const cat = {
//     name : "치즈",
//     age : 2,
//     home : null,
//     sound : function () {
//       return "야옹";
//     }
//   };

//   return (
//     <ul>
//       <li>이름 : {cat.name}</li>
//       <li>나이 : {cat.age}</li>
//       <li>집 : {cat.home}</li>
//       <li>소리 : {cat.sound()}</li>
//     </ul>
//   );
// };

/*
  조건부 랜더링

  1. && (그리고)
  표현식 1 && 표현식 2

  표현식1이 참이면 표현식 2가 출력된다.
  표현식1이 거짓이면 아무것도 출력되지 않는다.

  2. || (또는)
  표현식 1 || 표현식 2

  표현식 1이 참일 경우 표현식 1이 출려된다.
  표현식 1이 거짓일 경우 표현식2가 출력된다.

  3. ? (삼항연산자)
  조건 ? 표현식1 : 표현식2

  조건이 참이면 표현식 1이 출려된다
  조건이 거짓이면 표현식 2가 출려된다.
*/

// function Snippet() {
//   return (
//     <>
//       <h2>조건부 랜더링</h2>

//       <h3>&& (AND)</h3>
//       <p>{true && "표현식2"}</p>
//       <p>{false && "표현식2"}</p>

//       <h3>|| (OR)</h3>
//       <p>{"표현식1" || "표현식2"}</p>
//       <p>{"" || "표현식2"}</p>

//       <h3>? (삼항연산자)</h3>
//       <p>{true ? "표현식1" : "표현식2"}</p>
//       <p>{false ? "표현식1" : "표현식2"}</p>
//     </>
//   );
// };

/*
  리스트 형태 랜더링
*/

// function Snippet(){
//   const beers = [
//     { name : "하이네켄", origin : "네덜란드"},
//     { name : "기네스", origin : "아일랜드"},
//     { name : "버드와이저", origin : "미국"},
//   ]

//   const beerList = beers.map((beer) => (
//     // key : 리액트의 재조정 알고리즘 떄문에 필요한 값, 고유한 값이어야 한다.
//     <li key={beer.name}>{beer.name}, {beer.origin}</li>
//   ))

//   return (
//     <>
//       <h3>세계 맥주</h3>
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }

function Snippet(){
  const beers = [
    { name : "하이네켄", origin : "네덜란드", available: false},
    { name : "기네스", origin : "아일랜드", available: true},
    { name : "버드와이저", origin : "미국", available: true},
  ]

    const beerList = beers.map((beer) => (
    // key : 리액트의 재조정 알고리즘 떄문에 필요한 값, 고유한 값이어야 한다.
    <tr>
      <td key={beer.name}>{beer.name}</td>
      <td key={beer.origin}>{beer.origin}</td>
      <td key={beer.available}>{beer.available ?  "예" : "아니요"}</td>
    </tr>
  ))

  return(
    <table border="1">
      <tr>
        <th>이름</th>
        <th>원산지</th>
        <th>판매중</th>
      </tr>
      {beerList}
    </table>
  )
};