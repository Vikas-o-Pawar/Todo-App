import React from 'react'
import ToDoContainer from '../Components/MainToDoComp/TodoAddComp/ToDoContainer'
import { json } from 'react-router-dom'
import { getAuthToken } from '../auth/token'
import { getUserID } from '../auth/userId'

function ToDoContainerPage() {
    return (
        <div>
            <ToDoContainer />
        </div>
    )
}

export default ToDoContainerPage

export async function loader() {
    const token = getAuthToken();
    const userID = getUserID();
    const response = await fetch("http://192.168.54.78:8080/getAddToDo?user=" + userID, {
        method: "GET",
        headers: {
            "Authorization": 'Bearer ' + token,

        }
    });

    if (!response.ok) {
        return json({ result: "Failure", message: "Couldn't fetch the todo", status: response.status })
    }

    const resData = await response.json();
    return resData;
}
