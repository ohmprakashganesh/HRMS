import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 mt-7 rounded">
        <form className="flex w-full  bg-black items-start justify-between items-center just">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-white mb-0.5">Date</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white text-white"  type="date" />
            </div>
            <div >
              <h3 className="text-sm text-white mb-0.5">Assign To</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white text-white" type="text" placeholder="employee Name" />
            </div>
            <div>
              <h3 className="text-sm text-white mb-0.5">Category</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white text-white" type="text" placeholder="design , dev ,etc" />
            </div>
            <div>
              <h3 className="text-sm text-white mb-0.5"> Task Title</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white text-white" type="text" placeholder="Make a Ui Design" />
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="text-sm text-white mb-0.5">Description</h3>
            <textarea className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white text-white"  name="" id="" cols="30" rows="5" />
          <button className="text-xl py-1 px-2 w-56 bg-green-700 rounded outline-none  border-[1px] border-white text-white hover:bg-zinc-200 hover:text-black" >create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
