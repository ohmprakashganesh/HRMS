import React from 'react'

const Login = () => {
  return(
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='border-2 border-red-400'>
          <form className='flex flex-col items-center justify-center'>
            <input className='border-2 border-r-emerald-500 py-3 px-5 rounded-full text-xl outline-none bg-transparent' type='email' placeholder='enter your email'/>
            <input type='password' placeholder='enter your Password'/>
            <button> Log in </button>
          </form>
        </div>
    </div>
  )
}

export default Login;
