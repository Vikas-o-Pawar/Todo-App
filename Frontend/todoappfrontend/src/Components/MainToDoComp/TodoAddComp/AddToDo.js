import React from 'react'
import classes from './AddToDo.module.css'
import TodoInput from '../../TodoElementComp/TodoInputComp/TodoInput';
import TodoBtn from '../../TodoControlButtonComp/TodoBtn';
import ToDoCard from '../../TodoElementComp/TodoCardComp/ToDoCard';
import { useCheckLoggedInAndRedirect } from '../../../auth/useCheckLoggedInAndRedirect';

function AddToDo() {
    // check if the user is logged in, if not then return back to the home page
    useCheckLoggedInAndRedirect()
return (
    <section className={classes.addToDoSection}>
        <div className={classes.addTodoHeadingDiv}>
            <h1 className={classes.addTodoHeading}>
                Add your ToDo and it will be displayed here
            </h1>
        </div>
        <div className={classes.addTodoDiv}>
            <div className={classes.todoInputDiv}>
                <TodoInput todoInputFieldProp={classes.todoInputField} />
                <TodoBtn dynamicToDoBtnClassName={classes.addToDoBtn} controlBtnName={"Add To Do"} />
            </div>


            <div className={classes.todoCardMainDiv}>
                <ToDoCard cardFunction={"addToDo"} todoContent={"Lorem ipsum d pariatur quo tenetur. Ipsam nisi saepe dolorem rem eum voluptatibus ratione, ipsum dolores."} />
                <ToDoCard cardFunction={"addToDo"} todoContent={"Lorem ipsum d pariatur quo tenetur. Ipsam nisi saepe dolorem rem eum voluptatibus ratione, ipsum dolores."} />
                <ToDoCard cardFunction={"addToDo"} todoContent={"Lorem ipsum d pariatur quo tenetur. Ipsam nisi saepe dolorem rem eum voluptatibus ratione, ipsum dolores."} />
                <ToDoCard cardFunction={"addToDo"} todoContent={"Lorem ipsum d pariatur quo tenetur. Ipsam nisi saepe dolorem rem eum voluptatibus ratione, ipsum dolores."} />
                <ToDoCard cardFunction={"addToDo"} todoContent={"Lorem ipsum d pariatur quo tenetur. Ipsam nisi saepe dolorem rem eum voluptatibus ratione, ipsum dolores."} />
                <ToDoCard cardFunction={"addToDo"} todoContent={"Lorem ipsum d pariatur quo tenetur. Ipsam nisi saepe dolorem rem eum voluptatibus ratione, ipsum dolores."} />
            </div>
        </div>
    </section>
);
}

export default AddToDo