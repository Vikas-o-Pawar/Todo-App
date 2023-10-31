import React from 'react'
import classes from './Navbar.module.css'
import NavbarBtn from './NavbarBtn'
import Burger from './Burger'
import { useState } from 'react'
import { useNavigate, useRouteLoaderData } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const [mobileNavAppear, setMobileNavAppear] = useState(false);
    const token = useRouteLoaderData("root");

    function logoutHandler() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration")
        localStorage.removeItem("userId")
        navigate("/")
        burgerClickHandler()
    }

    // when the user clicks on the navbar buttons on mobile phone, then the navigation bar should disappear
    function burgerClickHandler() {
        setMobileNavAppear(!mobileNavAppear);
    }


    const activateNav = mobileNavAppear === true ? `${classes['nav-active']}` : '';

    return (
        <section className={classes.mainNavSectionMain}>
            <Burger onClick={burgerClickHandler} burgerNav={classes.burgerNav} />

            <section className={classes.mainNavSection}>
                <section className={classes['logoTo-DoSection']}>
                    <h3>To-Do App</h3>
                </section>
                <section className={`${classes.mainFeatureNavSection} ${activateNav}`}>
                    <section className={classes.featureNavSection}>
                        <div className={classes.featureNavDiv}>
                            <NavbarBtn onClick={burgerClickHandler} link={"/"} navItemName={"Home"} />
                            {token !== null &&
                                <>
                                    <NavbarBtn onClick={burgerClickHandler} link={"/addToDo"} navItemName={"Add To-Do"} />
                                    <NavbarBtn onClick={burgerClickHandler} link={"/recycledToDo"} navItemName={"Recycled To-Do"} />
                                </>
                            }
                        </div>
                    </section>

                    <section className={classes.userLoginSignupNav}>
                        {!token &&
                            <>
                                <NavbarBtn onClick={burgerClickHandler} link={"/login"} navItemName={"Login"} />
                                <NavbarBtn onClick={burgerClickHandler} link={"/Signup"} navItemName={"Signup"} />
                            </>}

                        {token && <>
                            <NavbarBtn onClick={logoutHandler} link={"/"} navItemName={"logout"} />
                        </>}
                    </section>
                </section>
            </section>
        </section>
    );
}
export default Navbar
