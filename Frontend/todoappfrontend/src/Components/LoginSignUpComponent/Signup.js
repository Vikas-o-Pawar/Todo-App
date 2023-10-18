import React, { useEffect } from 'react'
import classes from './Signup.module.css'
import UserInputComp from './UserInputComp'
import TodoBtn from '../TodoControlButtonComp/TodoBtn.js'
import loginSignUpBGImg from '../../Images/UserAuth/loginSignupImg.jpg';
import { useState } from 'react';

function Signup() {
    const [currentWidthImage, setCurrentWidthImage] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setCurrentWidthImage(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })

    return (
        <section className={classes.mainSignUpSection}>
            <div className={classes.loginSignUpImgDiv}>
               {currentWidthImage>= 850 &&  <img src={loginSignUpBGImg}  alt="" />}

            </div>
            <section className={classes.signUpSection}>
                <div className={classes.headingDiv}>
                    <h1 className={classes.formHeading}>Enhance Your Producitivity</h1>
                </div>

                <div className={classes.formDiv}>
                    <form action="http://localhost:8080/signup" method='POST'>
                        <div className={classes.formInputDiv}>
                            <div className={`${classes.nameInputDiv} ${classes.inputDiv}`}>
                                <label htmlFor="userName">Name</label>
                                <UserInputComp userInputId={"userName"} placeholder={"Enter your name"} inputClassName={classes.userNameInput} name={"userName"} inputType={"text"} />
                            </div>

                            <div className={`${classes.emailInputDiv} ${classes.inputDiv}`}>
                                <label htmlFor="userEmail">Email</label>
                                <UserInputComp userInputId={"userEmail"} placeholder={"Enter your email address"} inputClassName={classes.userEmailInput} name="userEmail" inputType={"email"} />

                            </div>

                            <div className={`${classes.passwordInputDiv} ${classes.inputDiv}`}>
                                <label htmlFor="userPassword">Password</label>
                                <UserInputComp userInputId={"userPassword"} placeholder={"Enter your password"} inputClassName={classes.userPasswordInput} name="userPassword" inputType={"password"} />
                            </div>
                        </div>

                        <TodoBtn type={"submit"} dynamicToDoBtnClassName={classes.signupBtn} controlBtnName={"Sign Up"} />
                    </form>
                </div>


            </section>
        </section>
    )
}

export default Signup
