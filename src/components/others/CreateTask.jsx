import React, { useState } from 'react'
import NewTask from '../TaskList/NewTask'

const CreateTask = ({data}) => {
const [title, setTitle]= useState('')
const [date, setDate] = useState('')
const [category, setCategory] = useState('')
const [desc, setDesc] = useState('')
const [assign, setAssign] = useState('');

const [newTask, setNewTask] = useState({})


  const submitHandler=(e)=>{
    e.preventDefault();
    setNewTask({title,date,category,desc,active:false,newTask:true, completed:false, failed:false})
    // console.log(desc,assign,title)
    // console.log("total user",data.employees)
    // console.log("hello",task)
   data.employees.forEach(function(emp){
    console.log("Assigned Name:", assign, "| Employee Name:", emp.name);
    if (assign === emp.name) {
      console.log("before push", emp)
      emp.tasks.push(newTask);
      emp.taskNumber.NewTask= emp.taskNumber.newTask+1
      console.log("after push",emp)

    }
    
    

   })


   localStorage.setItem('employees',JSON.stringify)
   console.log(data.employees)

  }

  return (
    <div className="p-5 mt-7 rounded">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex w-full  bg-black items-start justify-between items-center just">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-white mb-0.5">Date</h3>
              <input
               onChange={(e)=>{ setDate(e.target.value)}}
               value={date}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white text-white"  type="date" />
            </div>
            <div > 
              <h3 className="text-sm text-white mb-0.5">Assign To</h3>
              <input    onChange={(e)=>{ setAssign(e.target.value)}}
               value={assign} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white text-white" type="text" placeholder="employee Name" />
            </div>
            <div>
              <h3 className="text-sm text-white mb-0.5">Category</h3>
              <input    onChange={(e)=>{ setCategory(e.target.value)}}
               value={category} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white text-white" type="text" placeholder="design , dev ,etc" />
            </div>
            <div>
              <h3 className="text-sm text-white mb-0.5"> Task Title</h3>
              <input  
              onChange={(e)=>{ setTitle(e.target.value)}}
               value={title} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white text-white" type="text" placeholder="Make a Ui Design" />
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="text-sm text-white mb-0.5">Description</h3>
            <textarea   
             onChange={(e)=>{ setDesc(e.target.value)}}
               value={desc} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white text-white"  name="" id="" cols="30" rows="5" />
          <button className="text-xl py-1 px-2 w-56 bg-green-700 rounded outline-none  border-[1px] border-white text-white hover:bg-zinc-200 hover:text-black" >create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
