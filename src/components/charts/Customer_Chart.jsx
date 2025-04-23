import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Customer_Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current.getContext("2d");
    const data = {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "last Month",
          data: [14, 18, 12, 20, 16, 18, 24],
          borderColor: "rgba(6, 21, 226, 0.83)",
          tension: 0.4,
          pointRadius: 0,
          fill: true,
          backgroundColor: "rgba(70, 77, 165, 0.64)",
        },
        {
          label: "This Month",
          data: [5, 14, 8, 13, 10, 15, 18],
          borderColor: "rgb(8, 211, 52)",
          tension: 0.4,
          pointRadius: 0,
          fill: true,
          backgroundColor: "rgb(115, 231, 140)",
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        scales: {
          x: {
            display: false,
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
            beginAtZero: true,
            ticks: {
              stepSize: 5,
              max: 25,
            },
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              usePointStyle: true,
            },
          },
        },
        elements: {
          line: {
            fill: false,
          },
        },
      },
    };

    const myChart = new Chart(chart, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width={400} height={300}></canvas>
    </div>
  );
};

export default Customer_Chart;
