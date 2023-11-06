import React from 'react'
import RecycledTodo from '../Components/MainToDoComp/RecycledToDoComp/RecycledTodo'
import { getAuthToken } from '../auth/token'
import { getUserID } from '../auth/userId';
import { json } from 'react-router-dom';
export default function RecycledTodoPage() {
    document.title = "Recycled To-Do"
    return (
        <div>
            <RecycledTodo />
        </div>
    )
}

export async function action({ request }) {

    try {
        const inputData = await request.formData();
        const token = getAuthToken();
        const todoId = inputData.get("deleteTodoId")
        const recycledFunction = inputData.get("restoreBtn");
        //recycledFunction consists of todoId, if there is a todo id then that means restore button is clicked 
        if(recycledFunction) {
            // if this is true then the action was to restore the todo;
            const response = await fetch("http://192.168.54.78:8080/restoreRecycledTodo?todoId=" + recycledFunction, {
                method: request.method,
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
    
            const resData = await response.json();
            return { result: resData.result, message: resData.message, status: response.status, task: resData.task }
        } 
        const response = await fetch("http://192.168.54.78:8080/deleteRecycledToDo?todoId=" + todoId, {
            method: request.method,
            headers: {
                "Authorization": "Bearer " + token
            }
        })

        const resData = await response.json();
        return { result: resData.result, message: resData.message, status: response.status, task: resData.task }

    } catch (error) {
        console.log(error)
    }
}

export async function loader() {
    const token = getAuthToken();
    const userId = getUserID();
    try {
        const response = await fetch("http://192.168.54.78:8080/getRecycledToDo?userId=" + userId, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        })

        if (!response.ok) {
            return json({ result: "Failure", message: "Couldn't fetch the todo", status: response.status })
        }

        const resData = await response.json();
        return resData;

    } catch (error) {
        // do nothing
    }
}