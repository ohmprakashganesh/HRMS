import { Button } from '@mui/material'
import React from 'react'

const Plan = () => {
  return (
    <div className='flex h-screen flex-col w-full bg-slate-200 '>
        <div className='  h-3/6 flex '>

        <div className='my-auto mx-auto  justify-around h-5/6 flex  w-full'>
        <div className='w-6/12 h-full pl-5 bg-white flex flex-col py-6 text-2xl font-poppins justify-start'>
        <h1 className='flex pb-4 font-semibold text-gray-600'>Plan Details</h1>
        <div className=' flex flex-col gap-10'>
            <div className='flex w-full flex-row  '>
                <p className='w-4/12  flex '>plan</p>
                <div class="flex w-7/12 font-lora mx-auto justify-center bg-gray-500">
      <button class="flex-1  px-4 py-2 text-sm font-medium border bg-white text-gray-700 border-gray-300 rounded-sm hover:bg-blue-500 hover:text-white transition-all">
        Basic
      </button>
      <button class="flex-1 px-4 py-2 text-sm font-medium border bg-blue-500 text-white border-blue-500 transition-all">
        Standard
      </button>
      <button class="flex-1 px-4 py-2 text-sm font-medium border bg-white text-gray-700 border-gray-300 rounded-smg hover:bg-blue-500 hover:text-white transition-all">
        Pro
      </button>
    </div>
            </div>
            <div className='flex w-full flex-row  '>
                <p className='w-4/12 flex '>Billing Duration</p>
                <div class="flex w-7/12 font-poppins mx-auto justify-center bg-gray-500">
      <button class="flex-1 px-4 py-2 text-sm font-medium border bg-white text-gray-700 border-gray-300 rounded-sm hover:bg-blue-500 hover:text-white transition-all">
        Yearly
      </button>
      <button class="flex-1 px-4 py-2 text-sm font-medium border bg-blue-500 text-white border-blue-500 rounded-sm hover:bg-blue-500 hover:text-white transition-all">
        Monthly
      </button>
    </div>
            </div>
            <div></div>
        </div>
        
        </div>
        <div className='w-5/12 h-full pl-5 bg-white flex gap-1 flex-col'> 
        <div className='w-full h-1/6 pl- text-2xl font-bold font-poppins text-gray-800  items-center flex ' >
       <h1>Order Summery</h1>
        </div>
        <div>
            <div className='flex w-full '>
                <p className='w-1/2 p-2  flex'>preferred plan</p> <p className='w-1/2 p-2 '>standard</p>
            </div>
            <div className='flex w-full '>
                <p className='w-1/2 p-2 flex '>per month cost</p> <p className='w-1/2 p-2 '>standard</p>
            </div>
            <div className='flex w-full'>
                <p className='w-1/2 p-2 flex '>Total month</p> <p className='w-1/2 p-2 '>standard</p>
            </div>
            <div className='flex w-full'>
                <p className='w-1/2 p-2  flex'>Billing Duration</p> <p className='w-1/2 p-2 '>standard</p>
            </div>
        </div>
        <div className='w-full h-1/6 text-2xl font-bold font-poppins text-gray-800  items-center flex ' >
        <p className='w-1/2 p-2 flex '>Billing Duration</p> <p className='w-1/2 p-2 '>Rs 12400</p>

        </div>
        
        
        
        </div>
        </div>
        

        </div>
        <div className='flex w-full h-2/5 '>
            <div className='w-full mx-8 my-auto flex flex-col bg-green-500 h-4/5'>
                 <h1> payment method</h1>
                 <div><p>khalti</p> <button>proceed to pay</button></div>
            </div>

        </div>

      
    </div>
  )
}

export default Plan
