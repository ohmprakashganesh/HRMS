import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Avatar, Button, Typography } from '@mui/material';
import { color } from 'chart.js/helpers';
import { BorderBottom, Chat } from '@mui/icons-material';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { green } from '@mui/material/colors';


// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraphBody = () => {
  const [dat, setChart] = useState('week')

   const setting=(datas)=>{
    setChart(datas);
    console.log(dat)
   }


   const employees = [
    { name: 'Marvin McKinney', applied: 'sick', reason: 'reason fo leave', time: '2024-12-1', status:'pending' },
    { name: 'kavin McKinney', applied: 'fever', reason: 'reason fo leave', time: '2024-12-1' , status:'approved'},
    { name: 'sabin McKinney', applied: 'funeral', reason: 'reason fo leave', time: '2024-12-1', status:'pending' },
    { name: 'sabin McKinney', applied: 'fever', reason: 'reason fo leave', time: '2024-12-1', status:'cancelled' },
    { name: 'sabin McKinney', applied: 'funeral', reason: 'reason fo leave', time: '2024-12-1', status:'approved' },
    { name: 'rabin McKinney', applied: 'degeree ', reason: 'reason fo leave', time: '2024-12-1', status:'pending' },
  ];

  const data = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: 'Efficiency',
        data: [65, 59, 80, 81, 56, 55,100], // Replace with your data
        backgroundColor: '#1ABC9C', // Blue color with some transparency
        borderColor: '#1ABC9C', // Solid blue border
        borderWidth: 1,
        borderRadius: 10, // Rounded corners
        borderSkipped: false, // Apply border radius to both top and bottom
        // Optional: Set maxBarThickness for consistent bar width
        maxBarThickness: 40,
      },
    ],
  };

  const datam = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: 'Efficiency',
        data: [5, 50, 20, 101, 76, 55], // Replace with your data
        backgroundColor: '#1ABC9C', // Blue color with some transparency
        borderColor: '#1ABC9C', // Solid blue border
        borderWidth: 1,
        borderRadius: 10, // Rounded corners
        borderSkipped: false, // Apply border radius to both top and bottom
        // Optional: Set maxBarThickness for consistent bar width
        maxBarThickness: 40,
      },
    ],
  };

  const datay = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: 'Efficiency',
        data: [16, 109, 8, 19, 56, 55], // Replace with your data
        backgroundColor: '#1ABC9C', // Blue color with some transparency
        borderColor: '#1ABC9C', // Solid blue border
        borderWidth: 1,
        borderRadius: 10, // Rounded corners
        borderSkipped: false, // Apply border radius to both top and bottom
        // Optional: Set maxBarThickness for consistent bar width
        maxBarThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Weekly Efficiency',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0,0,0,0)', // Correct grid color syntax
        },
        ticks: {
          color: '#555', // Ensure 'ticks' is nested within the axis
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  

  return (
    <div className='grid grid-cols-5 mt-2 '>
      

 
    <div className="pb-14 col-span-3 bg-white shadow-md rounded-md h-80">
      <div className='flex w-full'>
      <h3 className="text-lg font-semibold mb-4 w-1/2">Efficiency</h3>
      <div className='flex justify-between w-1/2'>
        <Button onClick={()=>setting('week') } variant='outlined ' color='primary' >Weekly</Button>
        <Button onClick={()=>setting('month') }  variant='outlined ' >Monthly</Button>
        <Button  onClick={()=>setting('year') }  variant='outlined ' >Yearly</Button>

      </div>
      </div>
    
      <div className="h-full">

      {dat === 'week' ? (
          <Bar data={data} options={options} />
        ) : dat === 'month' ? (
          <Bar data={datam} options={options} />
        ) : (
          <Bar data={datay} options={options} />
        )}
        
      </div>
    </div>
     
     <div className='col-span-2 mx-5 flex flex-col max-h-80 overflow-y-auto bg-white rounded-md shadow-md shadow-gray-500'>
      <div className='flex font-lora sm:text-xl justify-between  p-5'><p >Leave Request</p> <button className=' flex items-center ' > view all <span><MdOutlineKeyboardArrowDown /></span> </button></div>

      { employees.map((data, index)=>(
           <div key={index} className='flex mb-2 flex-row w-full  gap-5 h-fit bg-white rounded-md items-center' >
           <icon className=" pl-2">
          <Avatar></Avatar>
           </icon>
           <desc className='flex  justify-start flex-col w-3/5'>
             <p className='w-full flex p-0 m-0 font-bold font-lora text-sm overflow-x-auto'>{data.name} <span className='font-normal'>{data.applied}</span></p>
             <p className='w-full  flex'>{data.reason}</p>
             <p className='w-full  flex text-gray-400' >{data.time} </p>
           </desc>
           <div className="">
             <button className={`bg-green-500 rounded-md p-1 mr-2  ${
     data.status === 'approved' ? 'bg-light-green' : data.status==='pending' ? 'bg-custom-yellow' :
     'bg-light-maroon'
  }`}>approved</button>
           </div>
         </div>
      )

      )}
      

     </div>



    </div>
  );
};

export default GraphBody;
