// Data.js
import { Table, TableBody, TableCell, TableHead, TableRow, Avatar, Button } from '@mui/material';

const employees = [
  { name: 'Marvin McKinney', department: 'IT', award: 'Best Employee', date: '2024-12-1' },
  { name: 'Anika Baptista', department: 'Admin', award: 'Most Punctual', date: '2024-12-5' },
  { name: 'Rayna Siphron', department: 'Sales', award: 'Most Efficient', date: '2024-12-9' },
  { name: 'Skylar Gouse', department: 'Marketing', award: 'Best Employee', date: '2024-12-8' },
];

const Data = () => {
  return (
    <div className="p-4 mt-5 w-full flex  bg-white shadow-md rounded-md">
      <div>
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
      <h3 className="text-lg font-semibold">Employee Award</h3>
     
     <Button variant="contained" className="mt-4">Download</Button>
   </div>
   <div className='notice '>
    <div></div>

   </div>


      </div>
    
  );
};

export default Data;
