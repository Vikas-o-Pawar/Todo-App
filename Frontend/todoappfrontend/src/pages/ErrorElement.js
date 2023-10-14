import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

function ErrorElement() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/")
    },
        2500);

    return (
        <div>
            <Navbar />
            <h1>Could not find this page. Redirecting to the home page in a few seconds...</h1>
        </div>
    )
}

export default ErrorElement
