import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-8 justify-between gap-5 screen '>
      <div className=' bg-gray-300 rounded-xl w-[45%] py-6 px-9  h-40  bg-gray-200'>
      <h1 className=' text-3xl font-medium text-start '>1</h1>
      <h1 className=' text-3xl font-medium text-start '>new Task</h1>
      </div>
      <div className=' bg-yellow-500 rounded-xl w-[45%] py-6 px-9  h-40  bg-gray-200'>
      <h1 className=' text-3xl font-medium text-start '>2</h1>
      <h1 className=' text-3xl font-medium text-start '>new Task</h1>

      </div>
      <div className='bg-red-700 rounded-xl w-[45%] py-6 px-9  h-40 '>
      <h1 className='  text-3xl font-medium text-start '>3</h1>
      <h1 className=' text-3xl font-medium text-start '>new Task</h1>
      </div>
      <div className=' bg-green-700 rounded-xl w-[45%] py-6 px-9  h-40  bg-gray-200'>
      <h1 className=' text-3xl font-medium text-start '>4</h1>
      <h1 className=' text-3xl font-medium text-start '>new Task</h1>
      </div>
    </div>
  )
}

export default TaskListNumber
