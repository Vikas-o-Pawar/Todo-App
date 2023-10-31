import React from 'react'
import { json } from 'react-router-dom'
import Login from '../Components/LoginSignUpComponent/Login'

function AuthenticationLogin() {

    return (
        <Login />
    )
}

export default AuthenticationLogin


export async function action({ request }) {
    try {
        const data = await request.formData();

        const authData = {
            userEmail: data.get("userEmail"),
            userPassword: data.get("userPassword")
        }

        if (!emailValidation(data.get("userEmail")) || !validatePassword(data.get("userPassword"))) {
            return json({ message: "Please enter the right credentials.", result: "Warning" })
        }
        // const response = await fetch("http://192.168.35.78:8080/login", {
        const response = await fetch("http://192.168.54.78:8080/login", {
            method: request.method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(authData)
        });


        if (response.status === 401) {
            return json({ result: "Failure", message: "Wrong password entered" })
        }

        if (response.status === 404) {
            return json({ result: "Failure", message: "The email doesn't exist. Please sign up." })
        }

        if (!response.ok) {
            return json({ result: "Failure", message: "Some error occurred. Please try again later" })
        }

        if (response.status === 200) {
            const resData = await response.json()

            const token = resData.token
            localStorage.setItem('token', token);
            const expiration = new Date();
            expiration.setHours(expiration.getHours() + 1);
            localStorage.setItem('expiration', expiration.toISOString());
            return resData;
        }

    } catch (error) {
        // nothing 
    }
}



function emailValidation(email) {
    const regEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (regEx.test(email)) {
        return true;
    }

    return false;
}

function validatePassword(password) {
    return password.length >= 5;
}