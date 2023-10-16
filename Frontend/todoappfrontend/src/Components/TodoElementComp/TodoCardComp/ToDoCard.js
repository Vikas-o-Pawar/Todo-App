import React from 'react'
import classes from './ToDoCard.module.css'
import TodoBtn from '../../TodoControlButtonComp/TodoBtn'

function ToDoCard() {
    return (
        <section className={classes.todoCardSection}>

            <div className={classes.todoCardDiv}>
                <div className={classes.todoContentDiv}>
                    <p className={classes.todoContent}>Content
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, molestias dolores sapiente asperiores neque labore recusandae officia pariatur quo tenetur. Ipsam nisi saepe dolorem rem eum voluptatibus ratione, ipsum dolores.</p>
                </div>  

                <div className={classes.todoCardControlBtnDiv}>
                    <TodoBtn dynamicToDoBtnClassName={classes.editToDoBtn} controlBtnName={"Edit"} />
                    <TodoBtn  dynamicToDoBtnClassName={classes.deleteToDoBtn} controlBtnName={"Delete"} />
                </div>
            </div>
        </section>
    )
}

export default ToDoCard
