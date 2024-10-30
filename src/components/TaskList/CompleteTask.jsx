import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] bg-red-400 rounded-xl '>
    <div className='flex m-2 justify-between items-center'>
      <h3 className=' bg-green-600 py-1 px-3 text-sm rounded '> {data.category} </h3>
      <h4>{data.date} </h4>
    </div>
    <div>
      <h2 className='mt-5 text-xl font-semibold'>{data.title} </h2>
      <p className='text-sm text-start'>{data.description} 
            </p>
    </div>
    <div className='flex justify-around mt-16 '>
      <button className='bg-green-500 rounded-md px-5 py-2 text-black'> completed task</button>
    </div>
    </div>
  )
}

export default CompleteTask
