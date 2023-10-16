import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavbarBtn.module.css'

function NavbarBtn(props) {
    return (
        <li onClick={props.onClick} className={classes.navList}>
            <NavLink to={props.link} className={
                ({ isActive }) => isActive ? `${classes.navActive}` : `${classes.navLink}`
            }
                end>
                {props.navItemName}
            </NavLink>
        </li >
    )
}

export default NavbarBtn
