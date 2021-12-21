import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    type: "line",
    // labels,
    datasets: [
      {
        data: [50,40, 30, 20, 10, 0],
        label: 'This Month',
        borderWidth: 3,
        fill: false,
        borderColor: '#00F1FF',
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
         y: {
           beginAtZero: true
        }
    }
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
