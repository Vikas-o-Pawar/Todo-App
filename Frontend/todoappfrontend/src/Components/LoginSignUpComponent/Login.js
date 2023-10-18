import React, { useEffect } from 'react'
import classes from './Login.module.css'
import UserInputComp from './UserInputComp'
import TodoBtn from '../TodoControlButtonComp/TodoBtn.js'
import loginSignUpBGImg from '../../Images/UserAuth/loginSignupImg.jpg';
import { useState } from 'react';

function Login() {
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
    <section className={classes.mainLogInSection}>
      <div className={classes.loginSignUpImgDiv}>
        {currentWidthImage >= 850 && <img src={loginSignUpBGImg} alt="" />}
      </div>
      <section className={classes.loginSection}>
        <div className={classes.headingDiv}>
          <h1 className={classes.formHeading}>Enhance Your Producitivity</h1>
        </div>

        <div className={classes.formDiv}>
          <form action="http://localhost:8080/login" method='POST'>
            <div className={classes.formInputDiv}>
              <div className={`${classes.emailInputDiv} ${classes.inputDiv}`}>
                <label htmlFor="userEmail">Email</label>
                <UserInputComp userInputId={"userEmail"} placeholder={"Enter your email address"} inputClassName={classes.userEmailInput} name="userEmail" inputType={"email"} />

              </div>

              <div className={`${classes.passwordInputDiv} ${classes.inputDiv}`}>
                <label htmlFor="userPassword">Password</label>
                <UserInputComp userInputId={"userPassword"} placeholder={"Enter your password"} inputClassName={classes.userPasswordInput} name="userPassword" inputType={"password"} />
              </div>
            </div>

            <TodoBtn type={"submit"} dynamicToDoBtnClassName={classes.loginBtn} controlBtnName={"Login"} />
          </form>
        </div>


      </section>
    </section>
  )
}

export default Login
