import React from 'react'
import classes from './Notification.module.css'

function Notification(props) {
    let positiveOrNegativeMessageClass = classes.positiveNotifClass;

    // if(props.notifSummaryMssg === "positive") {
    //     positiveOrNegativeMessageClass = classes.positiveNotifClass;
    // }

    // if(props.notifSummaryMssg === "negative") {
    //     positiveOrNegativeMessageClass = classes.negativeNotifClass;
    // }

    return (
        <section className={`${classes.mainNotifSection} ${positiveOrNegativeMessageClass}`}>
            <div className={classes.notificationDiv}>
                <div className={classes.notifSummaryDiv}>
                    {/* consists the summary of the notification like - success, Failure, warning! etc */}
                    <p>Success! | </p>
                    {/* props.notifSummaryMssg */}
                </div>

                <div className={`${classes.notifContentDiv}`}>
                    {/* consists the actual notification message like - "User is logged in" */}
                    <p>You are logged in!</p>
                    {/* {props.notifContent} */}
                </div>
            </div>
        </section>
    )
}

export default Notification