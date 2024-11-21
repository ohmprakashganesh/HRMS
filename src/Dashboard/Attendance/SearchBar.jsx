import React from 'react'
import { IoIosSearch } from "react-icons/io";


const SearchBar = () => {
  return (
    <div>
      <div className='w-full bg-green-600 flex py-5 '>
        <div className=' w-1/2 flex justify-between bg-black'>
          <div className='flex rounded-md  w-8/12 items-center bg-red-600   outline outline-gray-500 h-[30px]'>
            <IoIosSearch className='text-gray-400 ml-3 mr-2 flex text-2xl ' />
            <input type='text ' placeholder='Search by name, role department'
            />

          </div>
          <div className='bg-slate-50 flex w-4/12  '>filter  </div>
        </div>
        <div>

        </div>

      </div>

    </div>
  )
}

export default SearchBar
