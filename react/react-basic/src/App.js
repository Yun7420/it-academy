import { useContext, createContext, useState } from "react";

export default function App() {
  return <Snippet></Snippet>;
}
// function Snippet() {
//   const [subscribe, unSubscribe] = useState("구독중");

//   function handleClick() {
//     unSubscribe(subscribe === "구독중" ? "구독하기" : "구독중");
//   }

//   return (
//     <>
//       <h1>SubScribe Button</h1>
//       <button onClick={handleClick}>{subscribe}</button>
//     </>
//   );
// }
