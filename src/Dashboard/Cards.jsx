// Cards.js
import { Card, CardContent, Typography } from '@mui/material';

const CardData = [
  { title: 'Present Today', count: 50, percentage: '50%', color: 'bg-green-200' },
  { title: 'Absent Today', count: 20, percentage: '20%', color: 'bg-red-200' },
  { title: 'On Leave Today', count: 10, percentage: '10%', color: 'bg-yellow-200' },
  { title: 'Remote', count: 10, percentage: '10%', color: 'bg-green-200' },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {CardData.map((data, index) => (
        <Card key={index} className={`${data.color} p-4`}>
          <CardContent>
            <Typography variant="h6">{data.title}</Typography>
            <Typography variant="h4">{data.count}</Typography>
            <Typography variant="caption">{data.percentage}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
