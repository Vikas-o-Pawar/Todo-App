import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import NotificationPage from './NotificationPage';
import { getAuthToken, getTokenDuration } from '../auth/token';
import Notification from '../Components/NotificationComp/Notification';
// import { getAuthToken, getTokenDuration } from '../auth/token';

function Root() {
  const token = getAuthToken();
  const navigate = useNavigate();
  const [showlogoutNav, setShowlogoutNav] = useState(false);

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      localStorage.clear();
      navigate("/")
      setShowlogoutNav(true);
      setTimeout(() => {
        setShowlogoutNav(false);
      }, 3000);
      return;
    }

    const tokenDuration = getTokenDuration();
    // console.log(tokenDuration);

    setTimeout(() => {
      localStorage.clear()
      navigate("/")
      setShowlogoutNav(true);
      setTimeout(() => {
        setShowlogoutNav(false);
      }, 3000);
    }, tokenDuration);

    return () => clearTimeout();
  }, [token, navigate]);

  return (
    <div>
      <Navbar />
      {/* notification for automatic user logout */}
      {showlogoutNav && <Notification
        notifSummary="negative"
        notifSummaryMssg={"Warning"}
        notifContent={"Session expired. Please login again."} />}

      <NotificationPage />
      <Outlet />
    </div>
  );
}

export default Root;
