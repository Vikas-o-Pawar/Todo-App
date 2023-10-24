import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet, useActionData } from 'react-router-dom'
import Notification from '../Components/NotificationComp/Notification'
import { useNavigate } from 'react-router-dom'
function Root() {
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

  useEffect(() => {
    if (userAuthData !== undefined) {
      const timer = setTimeout(() => {
        setUserAuthData(undefined);
        if(userAuthData !== undefined && userAuthData.result === "Success") {
          navigate("/")
        }
  
      }, 2000);
    
      return () => clearTimeout(timer);
      // Clear the timer when the component unmounts or userAuthData changes
    }
  }, [userAuthData, navigate]);

 
  return (
    <div>
      <Navbar />
      {userAuthData !== undefined && (
        <Notification
          notifSummary={`${userAuthData.status < 300 ? "positive" : "negative"}`}
          notifSummaryMssg={userAuthData.result}
          notifContent={userAuthData.message}
        />
      )}
      <Outlet />
    </div>
  );
}

export default Root;
