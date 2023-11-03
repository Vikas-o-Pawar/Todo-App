import React from 'react'
import classes from './ToDoCard.module.css'
import TodoBtn from '../../TodoControlButtonComp/TodoBtn'
import { Link } from 'react-router-dom'
import { Form } from 'react-router-dom';

function ToDoCard(props) {

    const editNavHandler = () => {
        localStorage.setItem("editTodoContent", props.todoContent);
        localStorage.setItem("editTodoId", props.todoId);
    }

    return (
        <section className={classes.todoCardSection}>

            <div className={classes.todoCardDiv}>
                <div className={classes.todoContentDiv}>
                    <p className={classes.todoContent}>{props.todoContent}</p>
                </div>

                <div className={classes.todoCardControlBtnDiv}>
                    {/* if the function of the card is add todo then edit button will appear if recycledToDo then restore button will appear. */}
                    {props.controlBtnName !== "Restore" && <Link to={"/editToDo/" + props.todoId}>
                        {props.cardFunction === "addToDo" &&
                            <TodoBtn dynamicToDoBtnClassName={classes.editToDoBtn} onClick={editNavHandler} controlBtnName={"Edit"} />}
                    </Link>
}

                    <Form method="delete">
                        {props.cardFunction === "recycledToDo" && (
                            <div>
                                <input type="text" name={"restoreBtn"} defaultValue={props.todoId} className={classes.todoIdInput} />
                                <TodoBtn dynamicToDoBtnClassName={classes.editToDoBtn} controlBtnName={"Restore"} />
                            </div>
                        )}
                    </Form>

                    <Form method='DELETE'>
                        {/* input is set to display none, it is for accessing userID. */}
                        <input type="text" defaultValue={props.todoId} name={"deleteTodoId"} className={classes.todoIdInput} />
                        <TodoBtn name={"DeleteBtn"} deleteTodoId={props.todoId} dynamicToDoBtnClassName={classes.deleteToDoBtn} controlBtnName={"Delete"} />
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default ToDoCard
