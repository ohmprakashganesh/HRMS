// Data.js
import { Table, TableBody, TableCell, TableHead, TableRow, Avatar, Button } from '@mui/material';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { HiDotsVertical } from "react-icons/hi";
import { FaFilter } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";


import { SearchRounded } from '@mui/icons-material';


const employees = [
  { name: 'Marvin McKinney', department: 'IT', award: 'Best Employee', date: '2024-12-1' },
  { name: 'Anika Baptista', department: 'Admin', award: 'Most Punctual', date: '2024-12-5' },
  { name: 'Rayna Siphron', department: 'Sales', award: 'Most Efficient', date: '2024-12-9' },
  { name: 'Skylar Gouse', department: 'Marketing', award: 'Best Employee', date: '2024-12-8' },
];

const notice=[
  {
    day:"MON", date:'10', meeting:'Annual meeting', time:'9:00am-11:22'
  },
  {
    day:"TUE", date:'15', meeting:'monthly meeting', time:'9:00am-11:22'
  },
  {
    day:"WED", date:'30', meeting:'daily meeting', time:'9:00am-11:22'
  },
  {
    day:"FRI", date:'15', meeting:'yearly meeting', time:'9:00am-11:22'
  }
];

const Data = () => {
  return (
    <div className="p-2 mt-5 w-full flex  bg-slate-200 gap-5 shadow-md rounded-md">
      <div className=' w-8/12 bg-white rounded-md shadow-lg '>
        <div className='bg-white flex gap-2 w-full'>
          <div className='flex w-6/12 bggreen  p-3  justify-start text-3xl text-custom-green font-bold font-poppins'>
            Employee Award
          </div>
          <div className='flex items-center w-1/2  justify-between '>
           <div className='flex h-3/5  items-center outline gap-2 outline-custom-green  w-28 rounded-md '><SearchRounded /> <input type='text' placeholder='Search'  className='bg-transparent outline-none hover:no-underline'/> </div>
           <div className='flex h-3/5  items-center outline gap-2 outline-custom-green  w-28 rounded-md'><FaFilter  /> <input type='text' placeholder='Filter'  className='bg-transparent outline-none hover:no-underline'/> </div>
           <div className='flex h-3/5 mr-2  flex-row flex-wrap items-center outline gap-2 outline-custom-green  w-28 rounded-md 0'> <button className='flex justify-around'><FaCloudDownloadAlt /> Download</button> </div>

          </div>
        </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>SN.</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Award</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell><Avatar src="/path/to/image.jpg" /></TableCell>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>{emp.award}</TableCell>
              <TableCell>{emp.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
   </div>



   <div className='notice bg-white shadow rounded-md w-4/12 min-h-60 h-fit pb-4 '>
   <div className='flex justify-between font-lora sm:text-xl rounded-md  w-full   p-5'>
    <p className='text-custom-green font-bold text-2xl' >Notice</p> 
    <button className=' flex items-center text-sm  outline outline-slate-200 rounded-md  h-7' > view all <span><MdOutlineKeyboardArrowDown /></span> </button>
    </div>
    {notice.map((data, key)=>
   (
    <div key={key}>
    <div className=' w-full mt-1 rounded-sm items-center justify-start gap-2 flex '>
      <div className='  bg-gray-100 font-lora rounded-md ml-2  text-center  min-w-10'><p className='text-custom-green'>{data.day}</p> <text>{data.date}</text></div>
      <div className='flex font-lora flex-col gap-0 h-10 justify-center w-full '><p className='flex pl-5 space-y-1 pt-0 pb-0 '>{data.meeting}</p><p className='flex pl-5 text-sm text-slate-500 '>{data.time}</p></div>
      <div className='  w-6 font-lora text-3xl mr-2  text-center flex rounded-md bg-gray-100'><HiDotsVertical /></div>
    </div>
  </div>

   ))}
  
  


   </div>


      </div>
    
  );
};

export default Data;
