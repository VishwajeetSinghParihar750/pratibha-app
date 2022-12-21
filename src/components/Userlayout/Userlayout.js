import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveDrawer from './Sidenavbar'
function Userlayout() {
  return (
    <div>
        <ResponsiveDrawer />
        <div className='outlet-color'><Outlet /></div>
    </div>
    
  )
}

export default Userlayout