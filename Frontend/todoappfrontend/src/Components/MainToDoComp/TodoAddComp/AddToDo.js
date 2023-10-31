import React, { useContext, useState, useEffect } from 'react'
import classes from './AddToDo.module.css'
import TodoInput from '../../TodoElementComp/TodoInputComp/TodoInput';
import TodoBtn from '../../TodoControlButtonComp/TodoBtn';
import { useCheckLoggedInAndRedirect } from '../../../auth/useCheckLoggedInAndRedirect';
import { Form, useActionData } from 'react-router-dom';
import textValidContext from '../../Context/TextValidationContext/TextValid-Context';
import ToDoContainerPage from '../../../pages/ToDoContainerPage';

function AddToDo() {
    useCheckLoggedInAndRedirect();
    const textValid = useContext(textValidContext);
    // check if the user is logged in, if not then return back to the home page
    const [text, setText] = useState("");

    // after the user adds todo
    const initialUserAuthData = useActionData();

    useEffect(() => {
        if (initialUserAuthData !== undefined) {
            // If initialUserAuthData is available, set it to the state
            if (initialUserAuthData.status !== 200) {
                // if the todo is less than 5 characters let's say then the input won't be cleared
                return;
            } else {
                setText("");
            }
        }
    }, [initialUserAuthData]);

    function addTodoHandler() {
        if (textValid.textLength < 5) {
            textValid.updateTextIsValid(false);
            return;
        }
    }

    function setTextUsingProps(inputText) {
        setText(inputText)
    }
    return (
        <section className={classes.addToDoSection}>
            <div className={classes.addTodoHeadingDiv}>
                <h1 className={classes.addTodoHeading}>
                    Add your ToDo and it will be displayed here
                </h1>
            </div>
            <div className={classes.addTodoDiv}>
                <Form method="POST">
                    <div className={classes.todoInputDiv}>
                        <TodoInput
                            text={text}
                            inputTodoName={"inputTodoName"}
                            todoInputFieldProp={classes.todoInputField}
                            setTextUsingProps={setTextUsingProps}
                        />
                        <TodoBtn type={"submit"} dynamicToDoBtnClassName={classes.addToDoBtn} onClick={addTodoHandler} controlBtnName={"Add To Do"} />
                    </div>
                </Form>


                <div className={classes.todoCardMainDiv}>
                    <ToDoContainerPage />
                </div>
            </div>
        </section>
    );
}

export default AddToDo