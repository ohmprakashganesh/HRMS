import { Margin } from '@mui/icons-material';
import { Card, CardContent, Typography } from '@mui/material';
import ReactApexChart from 'react-apexcharts';


const CardData = [
  { title: 'Present Today', count: 50, percentage: '50%', color: 'bg-custom-green' },
  { title: 'Absent Today', count: 80, percentage: '80%', color: 'bg-red-600' },
  { title: 'On Leave Today', count: 10, percentage: '10%', color: 'bg-yellow-600' },
  { title: 'Remote', count: 100, percentage: '100%', color: 'bg-green-500' },
];

const Cards = () => {
  const baseChartOptions = {
        chart: {
          type: 'radialBar',
          height: 600, // Adjust chart height
        },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '40%',
        },
        dataLabels: {
         name: {
  show: true, // Show the label (title) in the center
  fontSize: '14px', // Customize label font size
  fontWeight: 'bold',
  color: '#000', // Label color
  offsetY: 10, // Adjust position
},
          value: {
            show: false, // Show the value in the center
            fontSize: '15px',
           
             // Customize the font size
            fontWeight: 'bold',
            color: '#000', // Set color of the count text
          },
        },
      },
    },
    labels: [], // Remove the labels
  };

  return (
    <div className="gap-2 w-full p-2 mt-2">
      <div className="flex justify-between w-full gap-4 h-fit min-w-40">
        {CardData.map((data, index) => (
          <div key={index} className={`w-3/12 rounded-md ${data.color}`}>
            <CardContent className="flex w-full rounded-md justify-around">
              <div className="flex flex-col w-8/12 mr-3">
                <p>{data.title}</p>
                <p>{data.count}</p>
              </div>
              <div className="w-4/12">
                <ReactApexChart
                  options={{
                    ...baseChartOptions,
                    labels: [data.percentage], // Dynamically set the label
                  }}
                  series={[data.count]} // Pass the count as the series value
                  type="radialBar"
                  height={180} // Adjust chart size
                />
              </div>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
