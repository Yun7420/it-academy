import React from "react";
import { useContext, createContext, useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

export default function App() {
  return <Snippet></Snippet>;
}

// 1000lines.

// 데이터 요청하기 예시
function fetchData() {
  const DATA = {
    username: "Dog",
    image: "https://images.unsplash.com/photo-1682672440006-22b34584de97?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(DATA)
    }, 2000)
  })

  return promise;
}

function Snippet() {
  // 에러처리
  const [error, setError] = useState(null);
  // 대기상태 관리
  const [isLoaded, setIsLoaded] = useState(false);
  // 프로필 (데이터) 저장
  const [profile, setProfile] = useState(null);

  const styles = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    border: "1px solid #ddd",
    borderRadius: "50%",
  }

  // 비동기적으로 작동한다.
  useEffect(() => {
    fetchData()
      // 성공 시 데이터를 처리
      .then(data => {
        // 프로필을 응답객체로 업데이트한다.
        setProfile(data)
      })

      // 실패 시 에러를 처리
      .catch(error => {
        setError(error)
      })

      // 성공 실패 상관없이 마지막 항상 실행
      // state가 업데이트되면 컴포넌트가 다시 호출된다.
      .finally(() => setIsLoaded(true))
  }, [])

  if (error) {
    return (
      <p>failed to fetch profile</p>
    )
  }

  // 사용자에게 대기상태를 보여준다.
  if (!isLoaded) {
    return (
      <p>fetching profile</p>
    )
  }

  return (
    <>
      <h1>Profile</h1>
      <img
        src={profile.image}
        alt={profile.username}
        style={styles} />
      <h3>{profile.username}</h3>
      <p>{profile.bio}</p>
    </>
  )
}