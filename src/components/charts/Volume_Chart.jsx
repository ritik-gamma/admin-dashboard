import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Volume_Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current.getContext("2d");
    const data = {
      labels: ["jan", "feb", "mar", "apr", "may", "jun", "july"],
      datasets: [
        {
          label: "Services",
          data: [14, 18, 10, 20, 16, 18, 24],
          borderRadius: 4,
          backgroundColor: ["rgba(68, 226, 6, 0.83)"],
          barPercentage: 0.5,
        },
        {
          label: "Volume",
          data: [12, 10, 23, 18, 22, 17, 20],
          borderRadius: 4,
          backgroundColor: ["rgb(2, 94, 199)"],
          barPercentage: 0.5,
        },
      ],
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            display: false,
            stacked: true,
          },
          x: {
            stacked: true,
            display: false,
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
      <canvas ref={chartRef} width={400} height={300}></canvas>
    </div>
  );
};

export default Volume_Chart;
