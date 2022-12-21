import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);

export const data = {
  
  datasets: [
    {
      
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
      cutout:90,
      options: {
        legend: {
           display: false
        },
        tooltips: {
           enabled: false
        }
   }
      
      
    },
    
  ],
  
};
const options = {
  legend: {
      display: false,
  }
};


export function Nut() {
    return (
    <>
    <div className="">
    <Doughnut data={data}   />
    </div>
    </>
    );
  }
  
