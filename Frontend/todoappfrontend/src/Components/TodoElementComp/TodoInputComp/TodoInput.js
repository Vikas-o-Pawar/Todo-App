import React, { useContext } from 'react'
import classes from './TodoInput.module.css'
import textValidContext from '../../Context/TextValidationContext/TextValid-Context';

// This is the textarea where user can add and edit todo
function TodoInput(props) {
  const textValid = useContext(textValidContext);

  // props.editTodoContent contains the edited todo, if it is undefined then we keep the todocontent empty, so addToDo pages shows empty text
  let todoContent = props.editToDoContent === undefined? 0 : props.editToDoContent;

  const textChangeHandler = (event) => {
    const newText = event.target.value;

    // If the text is invalid or false, the appropriate notification will be displayed to the user
    if (todoContent + newText.length > 149) {
      textValid.updateTextIsValid(false);
    } else {
      textValid.updateTextIsValid(true);
      textValid.updateTextLength(todoContent.length + newText.length)
      props.setTextUsingProps(newText);
    }
  }


  if (props.editToDoContent === undefined || props.editToDoContent === null) {
    todoContent = ""
  }
  return (
    <textarea
      value={todoContent + props.text}
      name={props.inputTodoName}
      onChange={textChangeHandler}
      className={`${classes.toDoInputField} ${props.todoInputFieldProp}`}>
    </textarea>
  )
}

export default TodoInput
