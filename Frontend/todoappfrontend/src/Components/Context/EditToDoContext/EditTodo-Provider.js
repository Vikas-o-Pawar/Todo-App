import React from 'react'
import EditToDoContext from './EditTodo-Context'
import { useState } from 'react';


function EditTodoProvider(props) {
    const [editTodoValue, setEditTodoValue] = useState("");
    const updateEditTodo = (value) => {
        setEditTodoValue(value);
    }

  return (
    <EditToDoContext.Provider value={{editTodoValue, updateEditTodo }}>
       {props.children}
    </EditToDoContext.Provider>
  )
}

export default EditTodoProvider
