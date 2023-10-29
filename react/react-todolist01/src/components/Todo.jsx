import React from 'react'
import { useState, useEffect, useRef } from 'react';

const Todo = ({id, name, completed, toggleTaskCompleted, editedTasks, deleteTask}) => {
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, []);

  const [ newName, setNewName ] = useState(name);

  function onSubmitEvent(e) {
    e.preventDefault();

    editedTasks(id, newName);

    setIsEditing(false);
  }

  function onClickEvent() {
    setIsEditing(false);

    setNewName(name);
  }

  const viewTemplate = (
    <div>
      <div>
        <label>
          <input type="checkbox" onChange={() => toggleTaskCompleted(id)} style={{display:"none"}} className="peer" checked={completed}/>
          <span className="peer-checked:line-through">{name}</span>
        </label>
      </div>
      <div className="flex">
        <button onClick={() => setIsEditing(true)} style={{width:"100%", border:"2px solid #ccc"}}>수정</button>
        <button onClick={() => deleteTask(id)} style={{width:"100%", backgroundColor:"red", color:"#fff"}}>삭제</button>
      </div>
    </div>
  );

  const editingTemplate = (
    <form onSubmit={onSubmitEvent}>
      <input type="text" onChange={(e) => setNewName(e.target.value)} style={{width:"100%", border:"2px solid #ccc"}} ref={inputRef} />
      <div className="flex">
        <button type="button" onClick={onClickEvent} style={{width:"100%", border:"2px solid #ccc"}}>취소</button>
        <button type="submit" onClick={editedTasks} style={{width:"100%", backgroundColor: "blue", color:"#fff"}} className="disabled:opacity-50" disabled={!newName || name === newName}>저장</button>
      </div>
    </form>
  );

  return (
    <li>{isEditing ? editingTemplate : viewTemplate}</li>
  )
}

export default Todo