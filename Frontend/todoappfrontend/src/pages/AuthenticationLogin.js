import React from 'react'
import { json } from 'react-router-dom'
import Login from '../Components/LoginSignUpComponent/Login'

function AuthenticationLogin() {
    return (
        <Login />
    )
}

export default AuthenticationLogin


export async function action({ request, context }) {
    const data = await request.formData();

    const authData = {
        userEmail: data.get("userEmail"),
        userPassword: data.get("userPassword")
    }

    const response = await fetch("http://localhost:8080/login", {
        method: request.method,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(authData)
    });

    const resData = await response.json();
    const token = resData.token;

    localStorage.setItem('token', token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());


    if (response.status === 401 || response.status === 404) {
        return json({ message: resData.message, result: resData.result })
    }

    if (!response.ok) {
        return json({ result: "Failure", message: "Some error occurred", })
    }

    return resData;
}