import React, { useContext } from 'react'
import classes from './TodoInput.module.css'
import textValidContext from '../../Context/TextValidationContext/TextValid-Context';

// This is the textarea where user can add and edit todo
function TodoInput(props) {
  const textValid = useContext(textValidContext);

  const textChangeHandler = (event) => {
    const newText = event.target.value;

    // If the text is invalid or false, the appropriate notification will be displayed to the user
    if (newText.length > 149) {
      textValid.updateTextIsValid(false);
    } else {
      textValid.updateTextIsValid(true);
      textValid.updateTextLength(newText.length)
      props.setTextUsingProps(newText);
    }
  }



  return (
    <textarea
      value={props.text}
      name={props.inputTodoName}
      onChange={textChangeHandler}
      className={`${classes.toDoInputField} ${props.todoInputFieldProp}`
      }>
    </textarea >
  )
}

export default TodoInput
