import { Button } from '@mui/material'
import React from 'react'

const Plan = () => {
  return (
    <div className='flex h-screen flex-col w-full bg-slate-200 '>
        <div className=' bg-orange-700 h-3/5 flex '>

        <div className='my-auto mx-auto  justify-around h-5/6 flex  w-full'>
        <div className='w-6/12 h-full bg-white flex flex-col gap-5'>
        <h1>Plan Details</h1>
        <div className=' flex flex-col gap-5'>
            <div className='flex flex-row justify-around '>
                <p>plan</p> <p>
                    <Button variant='outlined' color='primary'>Basic</Button>
                    <Button variant='outlined' color='primary'>Standard</Button>
                    <Button variant='outlined' color='primary'>Pro</Button>
                    </p>
            </div>
            <div className='flex flex-row justify-around '>
                <p>Billing Duration</p> <p>
                    <Button variant='outlined' color='primary'>Yearly</Button>
                    <Button variant='outlined' color='primary'>Monthly</Button>
                    </p>
            </div>
            <div></div>
        </div>
        
        </div>
        <div className='w-5/12 h-full bg-white'> order Summery
        
        
        
        </div>
        </div>
        

        </div>
        <div className='flex w-full h-2/5 '>
            <div className='w-full mx-8 my-auto bg-green-500 h-4/5'>
                payment
            </div>

        </div>

      
    </div>
  )
}

export default Plan
