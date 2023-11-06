import React from 'react'
import TodoEdit from '../Components/MainToDoComp/TodoEditComp/TodoEdit'
import { getAuthToken } from '../auth/token';
import { json } from 'react-router-dom';

export default function TodoEditPage() {
    document.title = "Edit To-Do"
    return (
        <div>
            <TodoEdit />
        </div>
    )
}

export async function action({ request }) {
    try {
        const token = getAuthToken();
        const inputData = await request.formData();
        const todoId = inputData.get("editTodoId");
        const todoValue = inputData.get("editTodoValue");
        const response = await fetch("http://192.168.54.78:8080/editToDo?todoId=" + todoId, {
            method: request.method,
            headers: {
                "Authorization": "Bearer " + token,
                "Content-type": "application/json"
            },
            body: JSON.stringify({todoValue})
        })

        if (!response.ok) {
            return json({ result: "Failure", message: "Something went wrong. Couldn't edit todo", status: response.status })
        }

        const resData = await response.json();
        return { result: resData.result, message: resData.message, status: response.status, task: resData.task }

    } catch (error) {
        return json({ result: 'Failure', message: error.message, status: 500 });
    }
}