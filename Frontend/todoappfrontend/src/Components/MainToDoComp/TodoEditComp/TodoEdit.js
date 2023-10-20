import React, { useEffect } from 'react'
import classes from './TodoEdit.module.css'
import TodoInput from '../../TodoElementComp/TodoInputComp/TodoInput';
import TodoBtn from '../../TodoControlButtonComp/TodoBtn';
import editToDoContext from '../../Context/EditToDoContext/EditTodo-Context';
import { useContext } from 'react';

function TodoEdit(props) {
    const editCtx = useContext(editToDoContext);

    useEffect(() => {
        if (editCtx.editTodoValue !== "") {
            localStorage.setItem("editTodoContent", editCtx.editTodoValue);
        }
    }, [editCtx.editTodoValue]);


    return (
        <section className={classes.todoEditSection}>
            <div className={classes.editTodoHeading}>
                <h1>Edit ToDo</h1>
            </div>
            <div className={classes.todoEditDiv}>
                <TodoInput editToDoContent={localStorage.getItem("editTodoContent")} todoInputFieldProp={classes.editTodoInput} />
                <TodoBtn controlBtnName={"Edit"} dynamicToDoBtnClassName={classes.editTodoBtn} />
            </div>
        </section>
    )
}

export default TodoEdit;