import React from 'react'
import classes from './TodoBtn.module.css'

// TodoBtn Component will have the button that do important task like adding, deleting, updating, and recycling the todo 
function TodoBtn(props) {
  
  return (
    <button name={props.name} type={props.type} className={`${classes.todoControlBtn} ${props.dynamicToDoBtnClassName}`} onClick={props.onClick}>
        {props.controlBtnName}
    </button>
  )
}

export default TodoBtn
