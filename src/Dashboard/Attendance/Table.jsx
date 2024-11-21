import React from 'react'
const data=[
    {
        id:'1',
        date:'16/11',
        employee:'anikita doe',
        role:'hr manager',
        type:'full-Time',
        status:'present',
        checkin:'09:00', 
        checkout:'04:00',
        overtime:'0hr'

    },
    {
        id:'2',
        date:'16/11',
        employee:'anikita doe',
        role:'hr manager',
        type:'full-Time',
        status:'present',
        checkin:'09:00', 
        checkout:'04:00',
        overtime:'0hr'

    },
    {
        id:'3',
        date:'16/11',
        employee:'anikita doe',
        role:'hr manager',
        type:'full-Time',
        status:'present',
        checkin:'09:00', 
        checkout:'04:00',
        overtime:'0hr'

    },
    {
        id:'4',
        date:'16/11',
        employee:'anikita doe',
        role:'hr manager',
        type:'full-Time',
        status:'present',
        checkin:'09:00', 
        checkout:'04:00',
        overtime:'0hr'

    },
    {
        id:'5',
        date:'16/11',
        employee:'anikita doe',
        role:'hr manager',
        type:'full-Time',
        status:'present',
        checkin:'09:00', 
        checkout:'04:00',
        overtime:'0hr'

    },
]

 const Table = () => {
  
  return (
    
<div>

  <div class="overflow-x-auto">
    <table class="min-w-full bg-white shadow-md rounded-lg">
      <thead>
        <tr class="bg-gray-100 text-gray-600 text-sm">
          <th class="py-2 px-4 text-left">Date</th>
          <th class="py-2 px-4 text-left">Employee</th>
          <th class="py-2 px-4 text-left">Role</th>
          <th class="py-2 px-4 text-left">Employee Type</th>
          <th class="py-2 px-4 text-left">Status</th>
          <th class="py-2 px-4 text-left">Check In</th>
          <th class="py-2 px-4 text-left">Check Out</th>
          <th class="py-2 px-4 text-left">Over Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, key)=>(
             <tr key={data.id} class="text-gray-700 text-sm border-b">
             <td class="py-2 px-4">{data.date}</td>
             <td class="py-2 px-4">{data.employee}</td>
             <td class="py-2 px-4">{data.role}</td>
             <td class="py-2 px-4">
               <span class="bg-blue-100 text-blue-600 py-1 px-2 rounded-md text-xs">{data.type}</span>
             </td>
             <td class="py-2 px-4">
               <span class="bg-green-100 text-green-600 py-1 px-2 rounded-md  text-xs">{data.status}</span>
             </td>
             <td class="py-2 px-4">{data.checkin} AM</td>
             <td class="py-2 px-4">{data.checkout} PM</td>
             <td class="py-2 px-4">{data.overtime} hr</td>
           </tr>

        ))}
       
      </tbody>
    </table>
  </div>





      </div>
    
  )
}

export default Table
