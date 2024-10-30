import React from 'react'
import CreateTask from './CreateTask'

const Alltasks = ({data}) => {
  if(data){
    console.log("alltasks",data)
  }
  return (
    <>
    <div className=' h-72   bg-[#1C1C1C] p-5 rounded mt-5'>
        <div className='bg-blue-400 font-bold mb-5 w-full py-2 px-4 flex justify-between'>
         <h2>User Name </h2>
        <h3> New Task</h3>
        <h5>Active Task</h5>
        <h5>Completed </h5>
        <h5>failed</h5>
      </div>
      <div className='h-[80%] overflow-auto'>
    {data.employees.map((elem,idx)=>{
      return <div key={idx} className='bg-slate-300 mb-5 w-full py-2 px-4 flex justify-between'>
      <h2>{elem.name}</h2>
        <h3> {elem.taskNumber.newTask}</h3>
        <h5>{elem.taskNumber.active}</h5>
        <h5>{elem.taskNumber.completed}</h5>
        <h5>{elem.taskNumber.failed}</h5>
      </div>

      })}
      </div>
       
      {/* <div className='bg-slate-300 mb-5 w-full py-2 px-4 flex justify-between'>
        <h2> Sarthak </h2>
        <h3> Make a ui Design</h3>
        <h5>status</h5>
      </div>
      <div className='bg-slate-300 mb-5 w-full py-2 px-4 flex justify-between'>
        <h2> Sarthak </h2>
        <h3> Make a ui Design</h3> mb-5
        <h5>status</h5>
      </div> */}

    </div>
    </>
  )
}

export default Alltasks
