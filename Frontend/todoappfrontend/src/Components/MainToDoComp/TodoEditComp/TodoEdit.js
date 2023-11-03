import React, { useState } from 'react'
import classes from './TodoEdit.module.css'
import { Form } from 'react-router-dom';
import TodoBtn from '../../TodoControlButtonComp/TodoBtn';
import { useCheckLoggedInAndRedirect } from '../../../auth/useCheckLoggedInAndRedirect';

function TodoEdit(props) {
    useCheckLoggedInAndRedirect()
    const [text, setText] = useState("")

    function onEditTextChange(event) {
        setText(event.target.value)
    }

    return (
        <section className={classes.todoEditSection}>
            <div className={classes.editTodoHeading}>
                <h1>Edit ToDo</h1>
            </div>
            <Form method="PUT">
                <div className={classes.todoEditDiv}>
                    <textarea
                    className={classes.editTextArea}
                        name="editTodoValue"
                        defaultValue={localStorage.getItem("editTodoContent") + text}
                        cols="30" rows="10"
                        onChange={onEditTextChange}
                    ></textarea>

                    <input type="text" name={"editTodoId"} defaultValue={localStorage.getItem("editTodoId")} className={classes.editTodoId} />

                    <TodoBtn controlBtnName={"Edit"} dynamicToDoBtnClassName={classes.editTodoBtn} />
                </div>
            </Form>

        </section>
    )
}

export default TodoEdit;