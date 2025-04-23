import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Target_Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current.getContext("2d");
    const data = {
      labels: ["jan", "feb", "mar", "apr", "may", "jun", "july"],
      datasets: [
        {
          label: "online Sales",
          data: [14, 18, 10, 20, 16, 18, 24],
          borderRadius: 4,
          backgroundColor: ["rgba(68, 226, 6, 0.83)"],
          barPercentage: 0.5,
        },
        {
          label: "online Sales",
          data: [12, 10, 23, 18, 22, 17, 20],
          borderRadius: 4,
          backgroundColor: ["rgb(241, 225, 7)"],
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
            display: false,
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
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

export default Target_Chart;
