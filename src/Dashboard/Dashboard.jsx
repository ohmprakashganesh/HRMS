import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Cards from './Cards'
import GraphBody from './Graphbody'
import Data from './Data'

const Dashboard = () => {
  return ( 
    <div className="flex gap-4 mt-2">
        <div  className='bg-slate-200'>
        <Sidebar />
        </div>
        <div className='w-full bg-slate-200 ml-2 ' >
        <Navbar />
        <Cards />
        <GraphBody />
        <Data />
        </div>

   
    
     
   
    </div>

  )
}

export default Dashboard
