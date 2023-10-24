import React from 'react'
import Signup from '../Components/LoginSignUpComponent/Signup'
import { json } from 'react-router-dom'
function AuthenticationSignup() {
    return (
        <Signup />
    )
}

export default AuthenticationSignup


export async function action({ request }) {
    const data = await request.formData();

    const authData = {
        userName: data.get("userName"),
        userEmail: data.get("userEmail"),
        userPassword: data.get("userPassword")
    }

    const response = await fetch("http://localhost:8080/signup", {
        method: request.method,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(authData)
    });

    if (response.status === 409) {
        return json({ result: "Failure", message: "User already exists" });
    }

    if (!response.ok) {
        return json({ result: "Failure", message: "Something went wrong" }, { status: 500 });
    }


    return response.json();
}