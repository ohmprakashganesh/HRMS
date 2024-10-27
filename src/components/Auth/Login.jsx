import React, { useState } from 'react'

const Login = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   console.log(email);
   console.log(password);


  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("hello submit");

  }
  return(
    <div className='w-full h-screen text-center flex items-center justify-center'>
        <div className='border-2 p-8  shadow-gray-600 shadow-lg   '>
          <form 
          onSubmit={(e)=>{ submitHandler(e)  }} className='flex text-center flex-col items-center justify-center'>
            <input
            required
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
             className='border-2 text-center border-emerald-600 py-3 px-5 mt-3 outline-none rounded-full text-xl  bg-transparent placeholder:text-black' type='email' placeholder='enter your email'/>
            <input 
            required
            value={password}
            onChange={(e)=> {setPassword(e.target.value)}}
            type='password' className=' border-2 border-emerald-600  rounded-full text-xl outline-none px-5 py-3 mt-5' placeholder='enter your Password'/>
            <button className='border-2 bg-green-500 text-2xl font-mono border-emerald-600 rounded-full text-xl outline-none px-5 py-3 mt-5'> Log in </button>
          </form>
        </div>
    </div>
  )
}

export default Login;
