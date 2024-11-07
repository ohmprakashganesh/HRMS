import { CheckBox, WidthNormal } from '@mui/icons-material'
import { Button, Input, Typography } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <div className=' grid grid-cols-11 w-full h-screen '>
       {/* this is left section  */}
      <div className='flex flex-col bg-stone-200 px-8  col-span-5 h-screen'>
       
          <div className=' w-full h-48 mx-auto flex justify-start '> <h1 className='mt-16 outline-1   h-fit font-extrabold font-poppins'> HRMS</h1> </div>
          <div className='  mx-auto'>
            <h2 className='  w-full mb-10 text-left text-3xl font-poppins '> HR Management Platform</h2>
          <h3 className=' mb-4 w-full mx-auto mt-10 text-pretty text-start'> Manage all employees, payrolls and other human resources operation</h3>
        </div>
        <div className='flex justify-around  mt-5'>
          <Button variant='contained' color='inherit' >Learn More</Button>
          <Button variant='outlined' > Our Features</Button>
        </div>

      </div>
      {/* this is right part */}
      <div className=' right px-8 pt-12 text-[#1ABC9C]  flex flex-col bg-stone-50  col-span-6 h-screen'>

        <div className=' header pb-6 flex flex-col  '>
          <h1 className='flex font font-bold size-8 font-poppins text-2xl w-full text-emerald-500'>Welcome to HRMS</h1>
          <p className='flex text-gray-400 font-poppins '>Register Your Account</p>

        </div>
        <div className='row  gap-8  flex flex-row w-full  '>
        <div className=' flex flex-col w-1/2'>
            <label className='flex p-2 font-lora  '>First Name</label>
            <input type='text' className=' bg-transparent border-2  active:border-red-50 hover:border-emerald-600 border-zinc-300 rounded-md h-8 ' />
          </div>

          <div className=' flex flex-col w-1/2'>
            <label className='flex p-2 '>Last Name</label>
            <input type='text' className=' bg-transparent border-2  active:border-red-50 hover:border-emerald-600 border-zinc-300 rounded-md h-8 ' />
          </div>

        </div>
        <div className='row  gap-8  flex flex-row w-full  '>
          <div className=' flex flex-col w-1/2'>
            <label className='flex p-2 '>E-mail Address</label>
            <input type='text' className=' bg-transparent border-2  active:border-red-50 hover:border-emerald-600 border-zinc-300 rounded-md h-8 ' />
          </div>

          <div className=' flex flex-col w-1/2'>
            <label className='flex p-2 '>Phone Number</label>
            <input type='text' className=' bg-transparent border-2  active:border-red-50 hover:border-emerald-600 border-zinc-300 rounded-md h-8 ' />
          </div>

        </div>
        <div className='row  gap-8  flex flex-row w-full  '>
          <div className=' flex flex-col w-1/2'>
            <label className='flex p-2 '>Password </label>
            <input type='text' className=' bg-transparent border-2  active:border-red-50 hover:border-emerald-600 border-zinc-300 rounded-md h-8 ' />
          </div>

          <div className=' flex flex-col w-1/2'>
            <label className='flex p-2 '>Password Password</label>
            <input type='text' className=' bg-transparent border-2  active:border-red-50 hover:border-emerald-600 border-zinc-300 rounded-md h-8 ' />
          </div>

        </div>
        <div className='flex flex-row w-full pt-6 '>
         <input className='size-4' type='checkbox'/>
         <label className='flex pl-2  text-pretty'>  I agree to all the
          <span className='pl-2 '> Terms, Privacy Policy</span>
          </label>
         
        </div>
        <div className='w-full  pt-8 flex justify-start  '>
          <button className='w-[300px]  text-[#FFFFFF]  font-lora  text-center justify-start h-[50px]  rounded-[6px] bg-[#1ABC9C]'>Create Account</button>
        </div>
        <div className='flex justify-start mt-5'>
          <p className='text-black'>Already have an account ? <a  className=" outline-none text-[#1ABC9C]" href='/login'>Login</a> </p>
        </div>

       

    

      </div>



    </div>
  )
}

export default SignUp
