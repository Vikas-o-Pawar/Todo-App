import React from 'react'
import classes from './Burger.module.css'

export default function Burger(props) {
    return (
        <div onClick={props.onClick} className={`${classes.burgerDiv} ${props.burgerNav}`}>
            <div className={classes.burgerStick}></div>
            <div className={classes.burgerStick}></div>
            <div className={classes.burgerStick}></div>
        </div>

    )
}

