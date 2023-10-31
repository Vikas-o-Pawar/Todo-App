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
    console.log(request)
    const token = tokenLoader();
    try {
        const inputData = await request.formData();
        const userData = {
            todoContent: inputData.get("inputTodoName"),
            creationDate: new Date(),
            lastEditedDate: new Date(),
            userId: localStorage.getItem("userId")
        }
        const response = await fetch("http://192.168.54.78:8080/addToDo", {
            method: request.method,
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(userData)
        })

        if(!response.ok) {
            return json({result: "Failure", message:"Something went wrong. Couldn't add todo", status: response.status})
        }

        const resData = await response.json();
        return json({result: resData.result, message: resData.message, status: resData.status, task: resData.task
        })
    } catch (error) {
        
    }


}