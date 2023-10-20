import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
// import Notification from '../Components/NotificationComp/Notification'

function Root() {
  return (
    <div>
      <Navbar />
      {/* <Notification /> */}
      <Outlet />
    </div>
  )
}

export default Root
