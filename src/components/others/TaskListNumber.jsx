import React, { useContext } from 'react'
import  { AuthContext } from '../../context/AuthProvider';

const TaskListNumber = ({data}) => {
  return (

    <div className='flex text-white mt-8 justify-between gap-5 screen '>
      <div className=' bg-gray-300 rounded-xl w-[45%] py-6 px-9  h-40  bg-gray-200'>
      <h1 className=' text-3xl font-medium text-start '>{data.taskNumber.newTask}</h1>
      <h1 className=' text-3xl font-medium text-start '>new Task</h1>
      </div>
      <div className=' bg-yellow-500 rounded-xl w-[45%] py-6 px-9  h-40  bg-gray-200'>
      <h1 className=' text-3xl font-medium text-start '>{data.taskNumber.active}</h1>
      <h1 className=' text-3xl font-medium text-start '>active task</h1>

      </div>
      <div className='bg-red-700 rounded-xl w-[45%] py-6 px-9  h-40 '>
      <h1 className='  text-3xl font-medium text-start '>{data.taskNumber.completed}</h1>
      <h1 className=' text-3xl font-medium text-start '> Task completed</h1>
      </div>
      <div className=' bg-green-700 rounded-xl w-[45%] py-6 px-9  h-40  bg-gray-200'>
      <h1 className=' text-3xl font-medium text-start '>{data.taskNumber.failed}</h1>
      <h1 className=' text-3xl font-medium text-start '>task failed</h1>
      </div>
    </div>
  )
}

export default TaskListNumber
