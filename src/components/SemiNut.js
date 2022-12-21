import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);

export const data = {
  labels: ['Critical', 'Medium', 'High', 'Low'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        '#CE3733',
        '#EC8830',
        '#FDBC2C',
        '#37A440',
      ],
      borderColor: [
        '#CE3733',
        '#EC8830',
        '#FDBC2C',
        '#37A440',
      ],
      borderWidth: 1,
      circumference: 180,
      rotation:-90,
      Legend:{
        labels:{
          boxWidth:0,
        }
      }
      
    },
  ],
  
};

export function SemiNut() {
    return (<><div className=""><Doughnut data={data}  /></div></>) ;
  }
  
