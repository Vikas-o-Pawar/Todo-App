import React from 'react'
import classes from './NavbarBtn.module.css'

function NavbarBtn(props) {
    return (
        <li className={classes.navList}>
            <a href="#" className={classes.navLink}>
                {props.navItemName}
            </a>
        </li>
    )
}

export default NavbarBtn
