import React from 'react'
import classes from './RecycledTodo.module.css'
import ToDoCard from '../../TodoElementComp/TodoCardComp/ToDoCard'
import { useCheckLoggedInAndRedirect } from '../../../auth/useCheckLoggedInAndRedirect'
import { useLoaderData } from 'react-router-dom'

function RecycledTodo() {
  const todoArr = useLoaderData();
  const recycledTodoArr = todoArr.recycledToDos;
  // check if the user is logged in, if not then return back to the home page
  useCheckLoggedInAndRedirect()
  return (
    <section className={classes.recycledTodoSection}>
      <div className={classes.recycledToDoHeading}>
        {recycledTodoArr !== undefined && recycledTodoArr.length === 0 &&
          <h1>You haven't deleted any ToDos</h1>
        }

        {recycledTodoArr && recycledTodoArr.length !== 0 &&
          <h1>Your recycled ToDos...</h1>
        }
      </div>
      <div className={classes.recycledToDoDiv}>

        {recycledTodoArr.map((recycledToDo) => {
          return <ToDoCard key={recycledToDo._id} cardFunction={"recycledToDo"} todoId={recycledToDo._id} todoContent={recycledToDo.content} />
        })}
      </div>
    </section>
  )
}

export default RecycledTodo
