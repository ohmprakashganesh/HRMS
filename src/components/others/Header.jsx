import React from 'react'

const Header = ({data,out}) => {
  const handleLogOut=()=>{
    out('')
    localStorage.setItem('loggedUser'," ")


  }
  console.log("header",data)
  return (
    <div className='flex justify-between '>
        <div>
        <p className='text-white text-start  text-2xl'>hello</p>
        <p className='font-semibold text-white font-serif  text-2xl'>{data.name} &#128522;</p>
        </div>
        <button onClick={handleLogOut} className='bg-red-500 h-7 mt-3 text-xl font-semibold text-black '>Log Out</button>
      
    </div>
  )
}

export default Header
