// Cards.js
import { RoundedCornerRounded } from '@mui/icons-material';
import { Card, CardContent, Typography } from '@mui/material';

const CardData = [
  { title: 'Present Today', count: 50, percentage: '50%', color: 'bg-green-200' },
  { title: 'Absent Today', count: 20, percentage: '20%', color: 'bg-red-200' },
  { title: 'On Leave Today', count: 10, percentage: '10%', color: 'bg-yellow-200' },
  { title: 'Remote', count: 10, percentage: '10%', color: 'bg-green-200' },
];

const Cards = () => {
  return (

    // <div key={index} className={`${data.color}`} >


    <div className="gap-2 w-full p-2">
      <div className='flex justify-between   w-full gap-4 h-24 min-w-40  '>


        {CardData.map((data, index) => (
            <div key={index}  className='w-3/12'>


              <CardContent className='flex bg-slate-200 rounded-md  justify-around'>
                <div className='flex  flex-col mr-3'>
                  <p className=' '>{data.title}</p>
                  <p className=''>{data.count} </p>
                </div>

                <div>
                  <Typography variant="subtitle1" >{data.percentage}</Typography>

                </div>
              </CardContent>
          </div>

        ))}
      </div>

    </div>
  );
};

export default Cards;
