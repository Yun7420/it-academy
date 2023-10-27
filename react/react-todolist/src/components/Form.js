import { useState, useEffect, useRef } from "react";

export default function Form({ addTask }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  /*
        useRef Hook

        문서의 실제 엘리먼트에 접근할 수 있다.
        current변수에 엘리먼트를 저장한다.
    */

  // 폼 제출관리
  function handleSubmit(e) {
    e.preventDefault(); // 새로고침 방지
    addTask(name);

    // 폼 제출 후 입력란을 비운다
    setName("");
  }

  // 비동기적으로 접근해야 한다.
  useEffect(() => {
    // input의 실제 엘리먼트에 접근 뒤 focus 메서드 호출
    inputRef.current.focus();
  }, []);

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 px-2 py-1 w-full outline-none mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="off"
        ref={inputRef}
      />

      <button
        type="submit"
        className="p-1 w-full disabled:opacity-50 bg-blue-500 text-white font-semibold"
        disabled={!name.trim()}
      >
        추가하기
      </button>
    </form>
  );
}
