import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import NotificationPage from './NotificationPage';
// import { getAuthToken, getTokenDuration } from '../auth/token';

function Root() {


  return (
    <div>
      <Navbar />
      <NotificationPage />
      <Outlet />
    </div>
  );
}

export default Root;
