import React from 'react';
import { useState, useEffect, useRef } from "react";

const Form = ({ addTask }) => {
  const [name, setName] = useState("");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  function onSubmitEvent(e){
    e.preventDefault();

    addTask(name);

    setName("");
  }

  return (
    <form onSubmit={onSubmitEvent}>
      <input type="text" onChange={(e) => setName(e.target.value)} ref={inputRef} style={{width:"100%", border:"1px solid #ccc"}}/>
      <button type="submit" style={{width:"100%", backgroundColor:"blue", color:"#fff"}} className="disabled:opacity-30" disabled={!name.trim()}>추가하기</button>
    </form>
  );
}

export default Form