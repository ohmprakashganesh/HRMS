import React from 'react'
import AccepctTask from './AccepctTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  // console.log("form takslist", data)
  return (
    <div id='taskList' className=' items-center overflow-x-auto h-[45%] flex gap-4 justify-start w-full  mt-10'>
 
 {data.tasks.map((item,idx)=>{
  if(item.active){
    return <AccepctTask key={idx} data={item} />
  }
  if(item.complete){
    return <CompleteTask key={idx} data={item}/>

  }
  if(item.newTask){
    return <NewTask  key={idx}  data={item}/>
  }
  if(item.failed){
    return <FailedTask key={idx} data={item} />

  }
 })}
   


      {/* <AccepctTask />
      <NewTask />
      <CompleteTask />
      <FailedTask/> */}


      </div>
     
  )
}

export default TaskList
