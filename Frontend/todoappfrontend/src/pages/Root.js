import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import NotificationPage from './NotificationPage';

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
