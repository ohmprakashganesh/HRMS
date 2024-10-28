import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='w-full mt-5  h-screen  p-10 bg-[#1C1C1C]'>
        <Header />
      <h1> employee dashboard</h1>
      <TaskListNumber />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
