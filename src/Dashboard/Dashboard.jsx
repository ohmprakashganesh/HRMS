import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Cards from './Cards'
import GraphBody from './Graphbody'
import { useState } from 'react'
import Data from './Data'
import Attendance from './Attendance/Attendance'
import Project from './Project/Project'
import Leave from './Leave/Leave'
import Employee from './Employee/Employee'
import Device from './Device/Device'
import Department from './Department/Department'
import Calendar from './calendar/Calendar'
import Training from './Training/Training'
import Plan from './Plan/Plan'

const Dashboard = () => {
  const [dash, setDash] = useState('dash')

  const toggle=(side)=>{
    setDash(side)
 
  }


  return (
    <div className="flex gap-4 bg-slate-200 scroll-mb-0">
        <div >
        <Sidebar dash={dash} func={toggle} />
        </div>
        
        {dash==='Dashboard' ? (
        <div className='w-full bg-slate-200 ml-2'>
        <Navbar />
        <Cards />
        <GraphBody />
        <Data />
        </div>
        ) :dash==='Attendance' ?(
          <Attendance />
        ):dash==='Calendar' ?(
          <Calendar />
        ): dash==='Department' ?(
          <Department />
        ): dash==='Device' ?(
          <Device />
        ): dash==='Employee' ?(
          <Employee />
        ): dash==='>eave' ?(
          <Leave />
        ): dash==='Project' ?(
          <Project />
        ): dash==='Training' ?(
          <Training />
        ):<Plan  />

        }
    </div>

  )
}

export default Dashboard
