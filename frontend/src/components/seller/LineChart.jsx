import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  // Sample data for the line chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
        xAxisID: 'x-axis-0', // Specify the x-axis scale ID
        yAxisID: 'y-axis-0', // Specify the y-axis scale ID
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      xAxes: [{
        id: 'x-axis-0',
        type: 'category', // Specify the x-axis scale as category
      }],
      yAxes: [{
        id: 'y-axis-0',
        type: 'linear', // Default scale type for y-axis
      }],
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
