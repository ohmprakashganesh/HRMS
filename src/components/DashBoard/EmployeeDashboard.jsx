import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data,out}) => {
  console.log("form edash",data)
  return (
    <div className='w-full mt-5 text-white  h-screen  p-10 bg-[#1C1C1C]'>
        <Header data={data} out={out} />
      <h1> employee dashboard {data.id}</h1>
      
      <TaskListNumber data={data} />
      <TaskList  data={data}/>
    </div>
  )
}

export default EmployeeDashboard
