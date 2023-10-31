import React from 'react'
import classes from './Notification.module.css'

function Notification(props) {
    let positiveOrNegativeMessageClass = classes.positiveNotifClass;

    if (props.notifSummary === "positive") {
        positiveOrNegativeMessageClass = classes.positiveNotifClass;
    }

    if (props.notifSummary === "negative") {
        positiveOrNegativeMessageClass = classes.negativeNotifClass;
    }

    return (
        <section className={classes.superMainNotifSection}>
            <section className={`${classes.mainNotifSection} ${positiveOrNegativeMessageClass}`}>
                <div className={classes.notificationDiv}>
                    <div className={classes.notifSummaryDiv}>
                        {/* consists the summary of the notification like - success, Failure, warning! etc */}
                        {/* <p>Success! | </p> */}
                        <p>{props.notifSummaryMssg}! </p>

                    </div>

                    <div className={`${classes.notifContentDiv}`}>
                        {/* consists the actual notification message like - "User is logged in" */}
                        <p>{props.notifContent}</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Notification