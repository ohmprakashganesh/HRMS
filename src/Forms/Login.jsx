import { Icecream, WhatsApp } from '@mui/icons-material'
import { Switch } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div className=' grid grid-cols-11 w-full h-screen '>
       {/* this is left section  */}
      <div className='flex text-white  flex-col  px-8  col-span-5 h-screen'  style={{
    backgroundImage: "url(https://s3-alpha-sig.figma.com/img/10d6/f1cb/ec864d0d417f39700f10a6c3cfe36d1a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jDOTQirNYcoJjYViCrRwJLoGcgDNpM9o8rYEgNHhpFYRpPZVdUSLX2F27YTo0v8PD3Uo1-QN7v7pqkqYbja-ihD5Z-Bk34SeYx1yIwAw4KDn3ZMm4abqd0jDNEWDvCeOnOy4wtGQR~unymHGczjcE1A0tdF32YtwUnyzD52e1g4efZVDUij8WNPngN~BfjmO3ua8NJqzmafBG1tgkyyadGk3SqEDgtQwGdAiXG-DqhqQsO~EJI0c7znD9IetuBaqU8fG~LVU2b1H2zVyIUIbR1bekZkMZcz1UBs3ae3Iv9AUJ~xJUmr~pDbqf0bsojhmkHVO13dyXTz40znXh~kVLA__)",
    backgroundSize: 'cover',
    color:'white',
    backgroundColor:'#1ABC9C',
    backgroundBlendMode:'multiply',
    backgroundPosition: 'center',
  }}>

    <div className='h-screen  pl-5'>
          <div className=' w-full h-48 mx-auto flex justify-start'> 
          <h1 className='mt-16 outline-1 text-2xl  h-fit font-extrabold font-poppins'>
             HRMS
             </h1>
           </div>
          <div className='  mx-auto'>
            <h2 className='  w-full mb-10 text-left text-3xl font-poppins '> HR Management Platform  </h2>  
          <h3 className=' mb-4 w-full mx-auto mt-10 font-poppins font-semibold text-start'> Manage all employees, payrolls and other human resources operation</h3>
        </div>
        <div className='flex justify-around  mt-5'>
        <button className=' shadow-md bg-[#1ABC9C] font-bold font-lora  lg:w-[300px] rounded-md sm:w-[170px] sm:h-[45px]' > Our Features</button>

          {/* <Button variant='contained' sx={{backgroundColor:'' , color:'black' }} className='font-lora' >Learn More</Button> */}
          <button className='outline-2 shadow-md     font-lora font-bold outline-double  lg:w-[300px] rounded-md sm:w-[170px] sm:h-[45px]' > Our Features</button>
        </div>

      </div>
      </div>



      {/* this is right part */}
      <div className=' right px-8 pt-12 text-[#1ABC9C]  flex flex-col bg-stone-50  col-span-6 h-screen'>

        <div className=' header pb-6 flex flex-col  '>
          <h1 className='flex font font-bold size-8 font-poppins text-2xl w-full text-emerald-500'>Login</h1>
        </div>

        <div className='row flex flex-col w-full   '>
          <div className=' flex flex-col w-full'>
            <label className='flex  p-2 font-lora font-bold '>Enter Your phone Number To Continue</label>
            <input type='text' className=' bg-transparent  border-2  w-full active:border-red-50 hover:border-emerald-600 border-zinc-300 rounded-md h-10 ' />
          </div>
          <div className='w-full flex justify-start '>
          <p className=' bg-slate-100 flex  items-center pl-5 border-2  w-full border-zinc-300 rounded-md h-10'>
            <span>Get Updates on <WhatsApp  sx={{color:'none'}} /> <Switch/> </span>
          </p>
        </div>
        </div>

        
        <div className='w-full  pt-8 flex justify-start  '>
          <button className=' w-full  text-[#FFFFFF]  font-lora font-bold text-lg  text-center justify-start h-[50px]  rounded-[6px] bg-[#1ABC9C]'>Login</button>
        </div>
        
        <div className='flex justify-start mt-5'>
          <p className='text-black'>Don't Have an Account ? <a  className=" outline-none text-[#1ABC9C]" href='/signup'> Signup</a> </p>
        </div>
      </div>
    </div>
  )
}


export default Login
