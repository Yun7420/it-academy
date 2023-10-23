import { useState, useEffect } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";

// 씨드데이터 생성 함수
function seedData() {
  const seed = [
    { id: "todo-0", name: "운동하기", completed: true },
    { id: "todo-1", name: "연습하기", completed: false },
    { id: "todo-2", name: "공부하기", completed: false },
  ]

  saveDoc(seed);
}

// 로컬 스토리지 동기화
function saveDoc(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 첫 사용일 경우 씨드데이터 생성
if (!localStorage.getItem("tasks")) {
  seedData();
}

export default function App() {

}