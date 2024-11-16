import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Cards from './Cards'
import GraphBody from './Graphbody'
import Data from './Data'

const Dashboard = () => {
  return (
    <div className="flex gap-4">
        <div  className='bg-yellow-700'>
        <Sidebar />
        </div>
        <div className='w-full bg-slate-600' >
        <Navbar />
        <Cards />
        <GraphBody />
        <Data />
        </div>

   
    
     
   
    </div>

  )
}

export default Dashboard
