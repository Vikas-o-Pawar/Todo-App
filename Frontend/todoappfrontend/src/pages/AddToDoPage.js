import React from 'react'
import AddToDo from '../Components/MainToDoComp/TodoAddComp/AddToDo'
import { tokenLoader } from '../auth/token'
import { json } from 'react-router-dom'

function AddToDoPage() {
    return (
        <AddToDo />
    )
}

export default AddToDoPage


export async function action({ request }) {
    const token = tokenLoader();
    try {
        const inputData = await request.formData();

        const userData = {
            todoContent: inputData.get("inputTodoName"),
            creationDate: new Date(),
            lastEditedDate: new Date(),
            userId: localStorage.getItem("userId"),
        }
        const todoId = inputData.get("deleteTodoId")

        // if todoId is present then todo is already present in the frontend, then the action is for deleting or editing the todo.

        if (todoId !== null) {
            return deleteTodoFunc(request, todoId, token);
        } else {
            return addToDoFetcher(request, userData, token);
        }
    } catch (error) {

    }
}

async function deleteTodoFunc(request, todoId, token) {
    const response = await fetch("http://192.168.54.78:8080/deleteTodo?todoId=" + todoId, {
        method: request.method,
        headers: {
            "Authorization": 'Bearer ' + token,

        }
    });

    if (!response.ok) {
        return json({ result: "Failure", message: "Something went wrong. Couldn't add todo", status: response.status })
    }

    const resData = await response.json();
    return { result: resData.result, message: resData.message, status: response.status, task: resData.task}

}

async function addToDoFetcher(request, userData, token) {
    console.log(token)
    const response = await fetch("http://192.168.54.78:8080/addToDo", {
        method: request.method,
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(userData)
    })

    if (!response.ok) {
        return json({ result: "Failure", message: "Something went wrong. Couldn't add todo", status: response.status })
    }

    const resData = await response.json();
    return json({
        result: resData.result, message: resData.message, status: resData.status, task: resData.task
    })
}