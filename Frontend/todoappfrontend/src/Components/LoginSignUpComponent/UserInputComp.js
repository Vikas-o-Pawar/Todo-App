import React from 'react'
import classes from './userInputComp.module.css'

function UserInputComp(props) {
  return (<>
    <input id={props.userInputId} className={`${classes.userInput} ${props.inputClassName}`} placeholder={props.placeholder} name={props.name} type={props.inputType} />
  </>
  )
}

export default UserInputComp
