import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Revenue_Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current.getContext("2d");
    const data = {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thuresday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "online Sales",
          data: [14, 18, 10, 20, 16, 18, 24],
          borderRadius: 4,
          backgroundColor: ["rgba(6, 21, 226, 0.83)"],
          barPercentage: 0.5,
        },
        {
          label: "online Sales",
          data: [12, 10, 23, 18, 22, 17, 20],
          borderRadius: 4,
          backgroundColor: ["rgb(8, 211, 52)"],
          barPercentage: 0.5,
        },
      ],
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 5,
              max: 25,
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
    const myChart = new Chart(chart, config);

    return () => {
      myChart.destroy();
    };
  }, []);
  return (
    <div>
      <canvas ref={chartRef} width={400} height={200}></canvas>
    </div>
  );
};

export default Revenue_Chart;
