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

// 필터 맵 객체 (필터조건 관리)
const FILTER_MAP = {
  전체: () => true,
  완료: (task) => task.completed,
  미완료: (task) => !task.completed
}

// 필터 이름 목록 객체 속성을 문자열로 리턴
const FILTER_NAMES = Object.keys(FILTER_MAP)
// 전체.완료.미완료

// 전체 완료 미완료
export default function App() {
  // tasks의 초기값을 로컬스토리지에서 가져온다.
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  // 필터 이름
  const [filter, setFilter] = useState("전체");

  // 키 스테이트 추적
  console.log(tasks);

  // 할일 추가
  function addTask(name) {
    console.log(name);

    const newTask = { id: `todo-${Date.now()}`, name, completed: false }

    // 새할일이 추가된 할일목록
    const updatedTasks = [...tasks, newTask];
    
    // 로컬 스토리지 동기화
    saveDoc(updatedTasks);

    // tasks 업데이트
    setTasks(updatedTasks);
  }

  // 할일 삭제
  function deleteTask(id) { 
    console.log(id)

    // 전달받은 id와 일치하는 할일을 제외한 할일목록
    const remainingTasks = tasks.filter(task => task.id !== id);

    // 로컬스토리지 동기화
    saveDoc(remainingTasks);

    // tasks 업데이트
    setTasks(remainingTasks);
  }

  // 할일 완료상태 변경
  function toggleTaskCompleted(id) { 
    console.log(id)

    const updatedTasks = tasks.map(task => {
      // 전달받은 id와 일치하는 id를 가진 할일의 completed를 현재 상태의 반대로 업데이트
      if(task.id === id){
        return {...task, completed: !task.completed}
      }
      return task;
    })

    // 로컬스토리지 동기화
    saveDoc(updatedTasks);

    // tasks 업데이트
    setTasks(updatedTasks);
  }

  // 할일 수정
  function editTask(id, newName) { 
    console.log(id, newName)

    // 전달받은 id와 일치하는 id를 가진 할일의 name을 newName으로 업데이트한다.
    const editedTasks = tasks.map(task => {
      if(task.id === id){
        return {...task, name: newName}
      }

      return task;  // 나머지 할일들은 그대로 리턴한다.
    })

    // 로컬스토리지 동기화
    saveDoc(editedTasks);

    // tasks 업데이트
    setTasks(editedTasks);
  }

  useEffect(() => {
    document.title = "할일목록 앱"
  }, [])

  // 필터버튼
  const FilterButtons = FILTER_NAMES.map(name => (
    <FilterButton 
    key={name}
    name={name}
    isPressed={filter === name}
    setFilter={setFilter}
    />
  ))

  // 할일목록 (리스트 랜더링)
  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <Todo key={task.id} id={task.id} name={task.name} completed={task.completed} deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted} editTask={editTask} />
  ))

  return (
    <div className="max-w-sm mt-8 mx-auto px-4">
      <h1 className="text-2xl font-semibold text-center my-4">
        할일목록 앱 &#128526; &#127928;
      </h1>

      <Form addTask={addTask} />
      
      <div className="grid grid-cols-3 gap-1 mb-4">
        {FilterButtons}
      </div>

      <h2 className="font-semibold mb-4">
        총 {taskList.length}개 있습니다.
      </h2>
      <ul>
        {taskList}
      </ul>
    </div>
  )
}