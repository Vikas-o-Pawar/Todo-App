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
    try {
        const authData = await request.formData();

        const userData = {
            userName: authData.get("userName"),
            userEmail: authData.get("userEmail"),
            userPassword: authData.get("userPassword")
        }
        
        if(!nameValidation(userData.userName)) {
            return json({result: "Warning", message: "User name should be longer than 4 characters."})
        }
        if(!validatePassword(userData.userPassword)) {
            return json({result: "Warning", message: "Password should be more than 5 characters long."})
        }

        if(!emailValidation(userData.userEmail)) {
            return json({result: "Warning", message: "Entered email is invalid"})
        }
        const response = await fetch("http://192.168.54.78:8080/signup", {
            method: request.method,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });


        if(response.status === 501) {
            return json({result: "Failure", status: 501, message: "Invalid credentials entered"});
        }

        if(response.status === 500) {
            return json({result: "Failure", status: 500, message: "Uer could not be created, please try again later"});
        }

        if(response.status === 409) {
            return json({result: "Failure", status: 409, message:"User already exists. Please log in."});
        }

        if(!response.ok) {
            return json({result:"Failure", status: 500, message: "Some problem occurred, unable to sign up."})
        }


        if(response.status === 200) {
            return json({task:"signup", status: 200, result: "Success", message: "User is created"});
        }

    } catch (error) {

    }
}


function nameValidation(name) {
    if(name.length < 5) {
        return false;
    }

    return true;
}

function emailValidation(email) {
    const regEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if(regEx.test(email)) {
        return true;
    }

    return false;
}

function validatePassword(password) {
    return password.length >= 5;
}