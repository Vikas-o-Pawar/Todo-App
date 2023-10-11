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
        <>
            <Burger onClick={burgerClickHandler} burgerNav={classes.burgerNav} />

            <section className={classes.mainNavSection}>
                <section className={classes['logoTo-DoSection']}>
                    <h3>To-Do App</h3>
                </section>
                <section className={`${classes.mainFeatureNavSection} ${activateNav}`}>
                    <section className={classes.featureNavSection}>
                        <div className={classes.featureNavDiv}>
                            <NavbarBtn navItemName={"Home"} />
                            <NavbarBtn navItemName={"Add To-Do"} />
                            <NavbarBtn navItemName={"Recycled To-Do"} />
                        </div>
                    </section>

                    <section className={classes.userLoginSignupNav}>
                        <NavbarBtn navItemName={"Login"} />
                        <NavbarBtn navItemName={"Signup"} />
                    </section>
                </section>
            </section>

        </>
    )
}
export default Navbar
