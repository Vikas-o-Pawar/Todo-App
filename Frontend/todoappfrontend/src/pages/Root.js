import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Root
