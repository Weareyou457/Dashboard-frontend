import React, { useState } from 'react'
import Sidebar from './Sidebar'
import "./MainDashboard.css"


const MainDashboard = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      
    </div>
  )
}

export default MainDashboard
