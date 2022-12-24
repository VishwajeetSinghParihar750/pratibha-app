import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

const dataForChart = (data) => {
  return {
    datasets: [
      {
        data: data.values,
        backgroundColor: data.backgroundColors.map((color) => {
          return `rgba(${color.red}, ${color.green}, ${color.blue}, .9)`;
        }),
        borderColor: data.backgroundColors.map((color) => {
          return `rgba(${color.red}, ${color.green}, ${color.blue})`;
        }),
        borderWidth: 1,
        cutout: 55,
        options: {
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false,
          },
        },
      },
    ],
  };
};

export function Nut({ data }) {
  return <Doughnut data={dataForChart(data)} />;
}
