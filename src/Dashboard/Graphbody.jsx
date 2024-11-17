import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Avatar, Button, Typography } from '@mui/material';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraphBody = () => {
  const [chart, setChart] = useState('week')

   const setting=(e)=>{
    setChart(e);
   }

   const employees = [
    { name: 'Marvin McKinney', applied: 'sick', reason: 'reason fo leave', time: '2024-12-1' },
    { name: 'kavin McKinney', applied: 'fever', reason: 'reason fo leave', time: '2024-12-1' },
    { name: 'sabin McKinney', applied: 'funeral', reason: 'reason fo leave', time: '2024-12-1' },
    { name: 'kavin McKinney', applied: 'fever', reason: 'reason fo leave', time: '2024-12-1' },
    { name: 'sabin McKinney', applied: 'funeral', reason: 'reason fo leave', time: '2024-12-1' },
    { name: 'rabin McKinney', applied: 'degeree ', reason: 'reason fo leave', time: '2024-12-1' },
  ];

  const data = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: 'Efficiency',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const datam = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: 'Efficiency',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const datay = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: 'Efficiency',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
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
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='grid grid-cols-5 mt-5 '>
      

 
    <div className="pb-14 col-span-3 bg-white shadow-md rounded-md h-80">
      <div className='flex w-full'>
      <h3 className="text-lg font-semibold mb-4 w-1/2">Efficiency</h3>
      <div className='flex justify-between w-1/2'>
        <Button variant='outlined ' color='primary' >Weekly</Button>
        <Button variant='outlined ' >Monthly</Button>
        <Button variant='outlined ' >Yearly</Button>

      </div>
      </div>
      <div className="h-full">
        <Bar data={data} options={options} />
      </div>
    </div>
     
     <div className='col-span-2 mx-5 flex flex-col max-h-80 overflow-y-auto bg-white rounded-md shadow-md shadow-gray-500'>
      <div className='flex font-lora sm:text-xl justify-between  p-5'><p >Leave Request</p> <button> view all</button></div>

      { employees.map((data, index)=>(
           <div key={index} className='flex mb-2 flex-row w-full  gap-5 h-fit bg-teal-400 rounded-md items-center' >
           <icon className=" pl-2">
          <Avatar></Avatar>
           </icon>
           <desc className='flex  justify-start flex-col w-3/5'>
             <p className='w-full flex p-0 m-0 font-bold font-lora text-sm overflow-x-auto'>{data.name} <span className='font-normal'>{data.applied}</span></p>
             <p className='w-full  flex'>{data.reason}</p>
             <p className='w-full  flex text-gray-400' >{data.time} </p>
           </desc>
           <div className="">
             <button className='bg-white rounded-md p-1 mr-2 ' variant='outlined' color='primary'>approved</button>
           </div>
         </div>
      )

      )}
      

     </div>


    </div>
  );
};

export default GraphBody;
