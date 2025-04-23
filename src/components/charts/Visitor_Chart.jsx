import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Visitor_Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCtx = chartRef.current.getContext("2d");

    const data = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "New Customer",
          data: [250, 280, 310, 290, 330, 300, 320, 270, 295, 315, 285, 305],
          borderColor: "darkorange",
          tension: 0.4,
          pointRadius: 0,
        },
        {
          label: "Loyal Customer",
          data: [300, 270, 290, 320, 280, 310, 295, 305, 285, 330, 315, 275],
          borderColor: "purple",
          tension: 0.4,
          pointRadius: 0,
        },
        {
          label: "Unique Visitor",
          data: [220, 250, 280, 260, 300, 270, 290, 240, 265, 285, 255, 275],
          borderColor: "green",
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 100,
              max: 400,
            },
            grid: {
              display: false,
            },
          },
          x: {
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
      },
    };

    const myChart = new Chart(chartCtx, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas
        ref={chartRef}
        height={300}
      ></canvas>
    </div>
  );
};

export default Visitor_Chart;
