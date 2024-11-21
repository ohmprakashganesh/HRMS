import { Avatar, Button, IconButton, Input, TextField } from '@mui/material';
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { Person2 } from '@mui/icons-material';
import { IoFilter, IoFilterSharp } from "react-icons/io5";
import DatePicker from 'react-datepicker';
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";

import "react-datepicker/dist/react-datepicker.css"; // Ensure this import is at the top of your file



// const filter=[name,role,type,date,]

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
  const [filter, setFilter] = useState('')
  const [department, setDepartment] = useState('sales')
  const [sdate, setDate] = useState(new Date())

  const handleDateChange = (date) => {
    setDate(date); // DatePicker directly returns the Date object
  };



  // const handleChange=()=>{

  //   setSearchText('e.target.value')
  // }
  return (
    <div>
      <div className='w-full gap-10 flex py-3 '>
        <div className=' w-1/2 flex justify-between '>
          <div className='flex rounded-md  bg-white ml-5 w-7/12 items-center h-[40px]   outline outline-gray-300'>
            <IoIosSearch className='text-gray-400 ml-3 mr-2 flex text-2xl  text-gray-500' />
            <input type='text ' placeholder='Search by name,  role department'
            className='w-full h-full round'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <IconButton />
          </div>
          <div className="relative w-4/12 bg-white rounded-md h-[40px] ">
            {/* Custom select container */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none border-2 border-gray-300 outline outline-slate-300 rounded-lg w-full py-2 pl-3 pr-8 text-gray-700 focus:outline-none focus:border-blue-500"
            >
              {/* Default option with filter icon */}
              <option value="search">
                <div className="flex bg-white items-center">
                  <TuneOutlinedIcon className="text-gray-400 mr-2" />
                  Filter by
                </div>
              </option>

              {/* Additional options */}
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            {/* Custom arrow icon for select */}
            <div className="absolute top-2 right-3 pointer-events-none">
              <IoFilterSharp className="text-gray-400" />
            </div>
          </div>

        </div>
        <div className=' w-1/2 flex   justify-around '>


          <div className='bg-transparent flex w-3/12 rounded-md bg-white outline outline-gray-300 '>
            <select className='w-64 rounded-md ' 
            onChange={(e)=>setDepartment(e.target.value)}
            value={department}
            >
              <option value="search">Department
              </option>
              <option value="sales">sales</option>
              <option value="hr">HR</option>
              <option value="finance">Finance</option>
            </select>
          </div>

            <div  className='flex w-3/12 items-center rounded-md bg-white outline outline-gray-300'> <span>
            <DatePicker className='w-full h-[40px] outline-none  hover:bg-none'
          selected={sdate} 
          onChange={handleDateChange}  // Update state when date changes
          dateFormat="dd MM, yyyy"  // Define the date format
          popperPlacement="bottom"  // Ensure the calendar shows at the bottom
          showPopperArrow={true}  // Optional: show the arrow pointing to the input field
        /> </span> <span><FaRegCalendarAlt className='text-2xl text-gray-400'/></span></div>


            <div className=' w-3/12 gap-3 bg-white rounded-md outline outline-gray-300 items-center flex'><button>Export CSV</button><MdCloudUpload className='text-gray-400'/> </div>

         

        </div>



      </div>

    </div>
  )
}

export default SearchBar
