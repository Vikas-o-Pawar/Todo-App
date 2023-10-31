import React, { useContext, useEffect, useState } from 'react'
import { useActionData, useNavigate } from 'react-router-dom';
// on login, signup or during any other activity notification will be rendered here.
import Notification from '../Components/NotificationComp/Notification'
import textValidContext from '../Components/Context/TextValidationContext/TextValid-Context';

function NotificationPage() {
    const textValidCtx = useContext(textValidContext);
    const navigate = useNavigate();
    // this gets the data from logging in or signing up and sets to the initialUserAuthData and then I pass it on to state.
    const initialUserAuthData = useActionData();
    // state is used for rendering notification, after a couple of seconds the userAuthData is set to undefined to notification goes away.
    const [userAuthData, setUserAuthData] = useState(initialUserAuthData);


    useEffect(() => {
        if (initialUserAuthData !== undefined) {
            // If initialUserAuthData is available, set it to the state
            setUserAuthData(initialUserAuthData);
        }
    }, [initialUserAuthData]);

    // when we have some data, then the userAuthData is not undefined, it is something else, the notification renders, after 3seconds the setTimeout makes it undefined again
    useEffect(() => {
        if (userAuthData !== undefined) {
            const timer = setTimeout(() => {
                setUserAuthData(undefined);
                if (userAuthData !== undefined && userAuthData.result === "Success") {
                    if (userAuthData.task === "signup") {
                        navigate('/login')
                    }
                    else if (userAuthData.task === "login") {
                        localStorage.setItem("userId", userAuthData.userId);
                        navigate("/");
                    } else if (userAuthData.task === "add todo") {
                        // do nothing
                    }
                    else {
                        navigate("/")
                    }
                }
            }, 3000);

            return () => clearTimeout(timer);
            // Clear the timer when the component unmounts or userAuthData changes
        }
    }, [userAuthData, navigate]);

    // after the text is invalid notification is rendered we clear the notification after a few seconds
    useEffect(() => {
        if(!textValidCtx.textIsValid) {
            const timer = setTimeout(() => {
                textValidCtx.updateTextIsValid(true)
            }, 3100);

            return () => clearTimeout(timer)
        }

    }, [textValidCtx])


    return (
        <div>
            {/* if there is no 'status' on the result from the action, that means that the validatoin error is for frontend */}
            {/* <Notification notifSummaryMssg="Failure" notifContent="Email doesn't exist " /> */}
            {userAuthData !== undefined && !userAuthData.status &&
                <Notification
                    notifSummary="negative"
                    notifSummaryMssg={userAuthData.result}
                    notifContent={userAuthData.message} />}


            {/* when there is error message from the backend this is rendered. Like if couldn't add todos*/}
            {/* if textvalidCtx is set true then this is shown, because if it is set to false then another notification is shown in which case we don't need this one */}
            {userAuthData !== undefined && userAuthData.status !== undefined && textValidCtx.textIsValid &&(
                <Notification
                    notifSummary={`${userAuthData.status < 300 ? "positive" : "negative"}`}
                    notifSummaryMssg={userAuthData.result}
                    notifContent={userAuthData.message}
                />
            )}

            {/* If the text length is less than 5 characters and more than 150 characters, then this will be rendered. */}
            {!textValidCtx.textIsValid &&
                <Notification
                    notifSummary={"negative"}
                    notifSummaryMssg={"Warning"}
                    notifContent={'Text should be more than 5 characters and less than 150 characters!'}
                />
            }
        </div>
    )
}

export default NotificationPage
