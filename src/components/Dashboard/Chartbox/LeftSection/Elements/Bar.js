import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart1({ dataToUse }) {
  const options = {
    responsive: true,
    aspectRatio: 0.9,
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = ["", "", "", ""];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: dataToUse.values,

        backgroundColor: dataToUse.backgroundColors.map((color) => {
          return `rgba(${color.red}, ${color.green}, ${color.blue}, .9)`;
        }),
        borderColor: dataToUse.backgroundColors.map((color) => {
          return `rgba(${color.red}, ${color.green}, ${color.blue})`;
        }),
        borderWidth: 1,
        barPercentage: 0.9,
        // barThickness: 6,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default BarChart1;
