import React from 'react'
import classes from './RecycledTodo.module.css'
import ToDoCard from '../../TodoElementComp/TodoCardComp/ToDoCard'
import { useCheckLoggedInAndRedirect } from '../../../auth/useCheckLoggedInAndRedirect'

function RecycledTodo() {
  // check if the user is logged in, if not then return back to the home page
  useCheckLoggedInAndRedirect()
  return (
    <section className={classes.recycledTodoSection}>
      <div className={classes.recycledToDoHeading}>
          <h1>Your recycled ToDos...</h1>
      </div>
      <div className={classes.recycledToDoDiv}>
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
      </div>
    </section>
  )
}

export default RecycledTodo
