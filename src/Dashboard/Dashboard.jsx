import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Cards from './Cards'
import GraphBody from './Graphbody'
import Data from './Data'

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-4">
        <div>
        <Sidebar />
        </div>
        <div className='col-span-3' >
        <Navbar />
        <Cards />
        <GraphBody />
        <Data />
        </div>
   
    
     
   
    </div>

  )
}

export default Dashboard
