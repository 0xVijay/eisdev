import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import './Dashboard.css';

const AreaChartComponent = (props) => {
  // Dummy data for different chart options
  const dataSets = {
    'Issue': [],
    'Expiry': [],
    'DNS': [],
  }
  const labels = [];
  props.data.map((d) => {
    dataSets.Issue.push(d.Issue);
    dataSets.Expiry.push(d.Expiry);
    dataSets.DNS.push(d.DNS);
    labels.push(d.name)
    return d;
  })
  console.log('AreaChartComponent', dataSets);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [chartOption, setChartOption] = useState('Issue');

  const chartOptions = ['Issue', 'Expiry', 'DNS'];
;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(134, 125, 247, 0.5)");
    gradient.addColorStop(1, "rgba(134, 125, 247, 0)");
  
    // Calculate the max value across all datasets
    const maxOfAll = Math.max(...Object.values(dataSets).flat());
  
    // Define a buffer value to add on top of the highest data point
    const bufferValue = 100; // For example, adds 10 to the max value
  
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Certificate Transparency",
          backgroundColor: gradient,
          borderColor: "#8571eb",
          pointBackgroundColor: "#8571eb",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#8571eb",
          borderWidth: 2,
          pointBorderWidth: 2,
          pointRadius: 5,
          data: dataSets[chartOption],
          fill: true,
        },
      ],
    };
  
    const options = {
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: true,
            drawBorder: false,
            color: 'rgba(0, 0, 0, 0.1)',
            lineWidth: 0.5,
          },
        },
        y: {
          beginAtZero: true, // Add this line to ensure the y-axis starts at 0
          grid: {
            display: true,
            drawBorder: false,
            color: 'rgba(0, 0, 0, 0.1)',
            lineWidth: 0.5,
          },
          ticks: {
            callback: function(value) {
              // This callback transforms every y-axis label
              return value;
            },
            // Include the buffer directly by calculating the max value and adding the desired buffer
            max: Math.max(...dataSets[chartOption]) + 10, // Assuming you want a buffer of 10
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          // ...tooltip options remain the same
        },
      },
    };
  
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the previous chart instance
    }
  
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data,
      options,
    });
  }, [chartOption]);

  return (
    <div style={{ position: 'relative', height: '300px' }}>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        right: 20, 
        zIndex: 10,
        display: 'flex'
      }}>
        {chartOptions.map((option) => (
          <button
            key={option}
            onClick={() => setChartOption(option)}
            style={{
              padding: '5px 10px',
              margin: '0 5px',
              marginTop:'-35px',
              border: 'none',
              background: chartOption === option ? '#6610f2' : 'transparent',
              color: chartOption === option ? 'white' : 'black',
              borderRadius:"6px"
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default AreaChartComponent;
