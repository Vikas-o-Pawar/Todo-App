import React from 'react'
import classes from './TodoInput.module.css'

// This is the textarea where user can add and edit todo
function TodoInput(props) {
  return (
    <textarea className={`${classes.toDoInputField} ${props.todoInputFieldProp}`}>
      
    </textarea>
  )
}

export default TodoInput
