import React from 'react'
import classes from './Navbar.module.css'
import NavbarBtn from './NavbarBtn'
import Burger from './Burger'
import { useState } from 'react'

function Navbar() {
    const [mobileNavAppear, setMobileNavAppear] = useState(false);

    function burgerClickHandler() {
        setMobileNavAppear(!mobileNavAppear);
    }
    const activateNav = mobileNavAppear === true? `${classes['nav-active']}`: '';

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
                            <NavbarBtn onClick={burgerClickHandler} link={"/addToDo"} navItemName={"Add To-Do"} />
                            <NavbarBtn onClick={burgerClickHandler} link={"/recycledToDo"} navItemName={"Recycled To-Do"} />
                        </div>
                    </section>

                    <section className={classes.userLoginSignupNav}>
                        <NavbarBtn onClick={burgerClickHandler} link={"/login"} navItemName={"Login"} />
                        <NavbarBtn onClick={burgerClickHandler} link={"/Signup"} navItemName={"Signup"} />
                    </section>
                </section>
            </section>
        </section>
    );
}
export default Navbar
