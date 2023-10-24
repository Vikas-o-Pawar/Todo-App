import React from 'react'
import classes from './TodoInput.module.css'
import { useState } from 'react';

// This is the textarea where user can add and edit todo
function TodoInput(props) {
  const [text, setText] = useState("");

  const textChangeHandler = (event) => {
    const newText = event.target.value;

    if (newText.length > 150) {
      window.alert('Text is too long');
    } else {
      setText(newText);
    }
  }

  // props.editTodoContent contains the edited todo, if it is undefined then we keep the todocontent empty, so addToDo pages shows empty text
  let todoContent = props.editToDoContent;

  if(props.editToDoContent === undefined || props.editToDoContent === null) {
    todoContent = ""
  }
  return (
    <textarea defaultValue={todoContent + text} onChange={textChangeHandler} className={`${classes.toDoInputField} ${props.todoInputFieldProp}`}>
    </textarea>
  )
}

export default TodoInput
