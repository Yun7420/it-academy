import React from "react";
import { useState, useEffect } from "react";

// components
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

// 할일 목록 초기값 생성
function seedData() {
  const seed = [
    { id: "todo01", name: "운동하기", completed: true },
    { id: "todo02", name: "공부하기", completed: false },
    { id: "todo03", name: "연습하기", completed: false },
  ];

  setData(seed);
}

// 할일 목록 초기값 => JSON.stringify형태로 로컬스토리지 tasks 넣기
function setData(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 로컬스토리지에서 가져올 값이 없을 경우 초기값 넣어주기
if (!localStorage.getItem("tasks")) {
  seedData();
}

const FILTER_MAP = {
  전체 : () => true,
  완료 : (task) => task.completed,
  미완료 : (task) => !task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

const App = () => {
  // 로딩 시 사이트 타이틀 변경
  useEffect(() => {
    document.title = "나만의 ToDoList 만들기";
  }, []);

  // 할일 목록 초기값 => JSON.parse형태로 로컬스토리지에서 불러오기
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  // 할일 추가
  function addTask(name) {
    const newTask = { id:`todo-${new Date}`, name , completed: false}
    const newTasks = [...tasks, newTask]

    setData(newTasks); // 로컬 동기화
    setTasks(newTasks); // 랜더링 동기화
  }

  // 할일 미완료 || 완료 변경
  function toggleTaskCompleted(id) {
    const toggleTask = tasks.map((task) => {
      if(task.id === id){
        return {...task, completed : !task.completed}
      }

      return task;
    })

    setData(toggleTask); // 로컬 동기화
    setTasks(toggleTask); // 랜더링 동기화
  }

  // 할일 수정
  function editedTasks(id, newName) {
    const editedTask = tasks.map((task) => {
      if(task.id === id){
        return {...task, name: newName}
      }

      return task;
    });

    setData(editedTask); // 로컬 동기화
    setTasks(editedTask); // 랜더링 동기화
  }

  // 할일 삭제
  function deleteTask(id) {
    const deleteTask = tasks.filter((task) => {
      return task.id !== id
    })

    setData(deleteTask); // 로컬 동기화
    setTasks(deleteTask); // 랜더링 동기화
  }

  const [filter, setFilter] = useState("전체");

  const FilterButtons = FILTER_NAMES.map((name) => (
    <FilterButton key={name} name={name} isPressed={filter===name} setFilter={setFilter} ></FilterButton>
  ))

  // 할일 랜더링
  const tasksList = tasks.filter(FILTER_MAP[filter]).map((task) => (
    <Todo key={task.id} id={task.id} name={task.name} completed={task.completed} toggleTaskCompleted={toggleTaskCompleted} editedTasks={editedTasks} deleteTask={deleteTask}></Todo>
  ));

  return (
    <div style={{width:"100%"}}>
      <h1 style={{textAlign:"center"}}>할일목록 앱</h1>
      <Form addTask={addTask}></Form>
      <div style={{display:"flex"}}>{FilterButtons}</div>
      <h2>총 {tasksList.length}개 있습니다.</h2>
      <ul>{tasksList}</ul>
    </div>
  );
};

export default App;
