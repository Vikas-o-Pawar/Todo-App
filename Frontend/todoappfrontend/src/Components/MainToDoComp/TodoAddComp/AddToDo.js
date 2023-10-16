import React from 'react'
import classes from './AddToDo.module.css'
import TodoInput from '../../TodoElementComp/TodoInputComp/TodoInput';
import TodoBtn from '../../TodoControlButtonComp/TodoBtn';
import ToDoCard from '../../TodoElementComp/TodoCardComp/ToDoCard';


function AddToDo() {
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
                    <TodoBtn onClick={"addtodo"} dynamicToDoBtnClassName={classes.addToDoBtn} controlBtnName={"Add To Do"} />
                </div>


                <div className={classes.todoCardMainDiv}>
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
                    <ToDoCard />
                    <ToDoCard />
                </div>
            </div>
        </section>
    );
}

export default AddToDo