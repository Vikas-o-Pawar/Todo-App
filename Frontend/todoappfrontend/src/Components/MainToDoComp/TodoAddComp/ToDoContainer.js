import React from 'react'
import ToDoCard from '../../TodoElementComp/TodoCardComp/ToDoCard'
import classes from './ToDoContainer.module.css'
import { useLoaderData } from 'react-router-dom'

function ToDoContainer() {
  const loadedTodos = useLoaderData();
  const todoArr = loadedTodos.todos; // extracting the todos
  /* <ToDoCard cardFunction={"addToDo"} todoContent={"Lorem ipsum d pariatur quo tenetur. Ipsam nisi saepe dolorem rem eum voluptatibus ratione, ipsum dolores."} /> */
  return (    
    <div className={classes.todoCardMainDiv}>
            {todoArr.map((todo) => {
              return <ToDoCard key={todo._id} cardFunction={"addToDo"} todoContent={todo.content} />
             })}
    </div>
  )
}

export default ToDoContainer
