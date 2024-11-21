import React from 'react'
import { PiToolboxFill } from "react-icons/pi";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Cards = () => {
  return (
    <div className='flex gap-5 justify-around flex-wrap bg-slate-200 py-10 h-fit' >
      <div className='bg-white w-[220px] rounded-md shadow-sm shadow-blue-500 h-32'>
      <div className='mx-3'>
        <div className='flex  justify-between  mx-auto my-4'>
        
         <span> <PiToolboxFill className=' size-6 text-blue-900' /> </span> <p><span className='text-custom-green text-md font-medium font-lora'>10%</span>  <span className='font-bold text-md  font-lora'>vs last month</span> </p>
         </div>
         <div className=' flex flex-col justify-start  '>
         <div className='flex text-md font-bold font-lora text-zinc-500'> Total Employee </div>
         <h2 className='flex text-4xl font-bold '>100</h2>
         </div>
         </div>

      </div>
      <div className='bg-white w-[220px] rounded-md shadow-sm shadow-blue-500 h-32'>
      <div className='mx-3'>
        <div className='flex  justify-between  mx-auto my-4'>
        
         <span> <PiToolboxFill className=' size-6 text-blue-900' /> </span> <p><span className='text-custom-green text-md font-medium font-lora'>10%</span>  <span className='font-bold text-md  font-lora'>vs last month</span> </p>
         </div>
         <div className=' flex flex-col justify-start  '>
         <div className='flex text-md font-bold font-lora text-zinc-500'> Total Employee </div>
         <h2 className='flex text-4xl font-bold '>10</h2>
         </div>
         </div>

      </div>
      <div className='bg-white w-[220px] rounded-md shadow-sm shadow-blue-500 h-32'>
      <div className='mx-3'>
        <div className='flex  justify-between  mx-auto my-4'>
        
         <span> <PiToolboxFill className=' size-6 text-blue-900' /> </span> <p><span className='text-custom-green text-md font-medium font-lora'>10%</span>  <span className='font-bold text-md  font-lora'>vs last month</span> </p>
         </div>
         <div className=' flex flex-col justify-start  '>
         <div className='flex text-md font-bold font-lora text-zinc-500'> Total Employee </div>
         <h2 className='flex text-4xl font-bold '>140</h2>
         </div>
         </div>

      </div>
      <div className='bg-white w-[220px] rounded-md shadow-sm shadow-blue-500 h-32'>
      <div className='mx-3'>
        <div className='flex  justify-between  mx-auto my-4'>
        
         <span> <PiToolboxFill className=' size-6 text-blue-900' /> </span> <p><span className='text-custom-green text-md font-medium font-lora'>10%</span>  <span className='font-bold text-md  font-lora'>vs last month</span> </p>
         </div>
         <div className=' flex flex-col justify-start  '>
         <div className='flex text-md font-bold font-lora text-zinc-500'> Total Employee </div>
         <h2 className='flex text-4xl font-bold '>105</h2>
         </div>
         </div>

      </div>
      <div className='bg-white w-[220px] rounded-md shadow-sm shadow-blue-300 h-32'>
      <div className='mx-3'>
        <div className='flex  justify-between  mx-auto my-4'>
        
         <span> <PiToolboxFill className=' size-6 text-blue-500' /> </span> <p><span className='text-custom-green text-md font-medium font-lora'>10%</span>  <span className='font-bold text-md  font-lora'>vs last month</span> </p>
         </div>
         <div className=' flex flex-col justify-start  '>
         <div className='flex text-md font-bold font-lora text-zinc-500'> Total Employee </div>
         <h2 className='flex text-4xl font-bold '>133</h2>
         </div>
         </div>

      </div>
    </div>
  )
}

export default Cards
