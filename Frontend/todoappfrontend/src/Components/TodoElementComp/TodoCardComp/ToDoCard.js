import React from 'react'
import classes from './ToDoCard.module.css'
import TodoBtn from '../../TodoControlButtonComp/TodoBtn'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import editToDoContext from '../../Context/EditToDoContext/EditTodo-Context';
import { Form } from 'react-router-dom';

function ToDoCard(props) {
    const editCtx = useContext(editToDoContext);
    const navigate = useNavigate();

    const editNavHandler = async () => {
        await editCtx.updateEditTodo(props.todoContent)
        navigate("/editToDo")
    }
    return (
        <section className={classes.todoCardSection}>

            <div className={classes.todoCardDiv}>
                <div className={classes.todoContentDiv}>
                    <p className={classes.todoContent}>{props.todoContent}</p>
                </div>

                <div className={classes.todoCardControlBtnDiv}>
                    {props.cardFunction === "addToDo" && <TodoBtn dynamicToDoBtnClassName={classes.editToDoBtn} onClick={editNavHandler} controlBtnName={"Edit"} />}
                    <Form>
                        <TodoBtn name={"DeleteBtn"} dynamicToDoBtnClassName={classes.deleteToDoBtn} controlBtnName={"Delete"} />
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default ToDoCard
