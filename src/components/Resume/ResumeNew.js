// import React, { useRef, useEffect, useState } from 'react';
// import type { ChartData, ChartArea } from 'chart.js';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Chart } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend
// );

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
// const colors = [
//   'red',
//   'orange',
//   'yellow',
//   'lime',
//   'green',
//   'teal',
//   'blue',
//   'purple',
// ];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     },
//   ],
// };

// function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
//   const colorStart = faker.random.arrayElement(colors);
//   const colorMid = faker.random.arrayElement(
//     colors.filter(color => color !== colorStart)
//   );
//   const colorEnd = faker.random.arrayElement(
//     colors.filter(color => color !== colorStart && color !== colorMid)
//   );

//   const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

//   gradient.addColorStop(0, colorStart);
//   gradient.addColorStop(0.5, colorMid);
//   gradient.addColorStop(1, colorEnd);

//   return gradient;
// }

// export function App() {
//   const chartRef = useRef<ChartJS>(null);
//   const [chartData, setChartData] = useState<ChartData<'bar'>>({
//     datasets: [],
//   });

//   useEffect(() => {
//     const chart = chartRef.current;

//     if (!chart) {
//       return;
//     }

//     const chartData = {
//       ...data,
//       datasets: data.datasets.map(dataset => ({
//         ...dataset,
//         borderColor: createGradient(chart.ctx, chart.chartArea),
//       })),
//     };

//     setChartData(chartData);
//   }, []);

//   return <Chart ref={chartRef} type='line' data={chartData} />;
// }

import React from "react";

import { Line, Pie } from "react-chartjs-2";

import "../../style.css"

export default function Resume() {
  const data = {
    labels: [
      "01/01/2019",
      "02/01/2019",
      "03/01/2019",
      "04/01/2019",
      "05/01/2019",
      "06/01/2019",
      "07/01/2019"
    ],
    //backgroundColor: ['rgba(255,0,0,1)'],
    //lineTension: 1,
    datasets: [
      {
        label: "SUBSTATION 1",
        
        fill: false,
        borderColor: "rgba(255, 0, 0, 10)",
        borderWidth: 2,
        pointRadius: 5,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "SUBSTATION 2",
        fill: false,
        borderColor: "rgba(255, 255, 0, 10)",
        borderWidth: 2,
        pointRadius: 5,
        data: [70, 32, 45, 65, 87, 92, 99]
      },
      {
        label: "SUBSTATION 3",
        fill: false,
        borderColor: "green",
        fontColor:"white",
        borderWidth: 2,
        pointRadius: 5,
        data: [135, 91, 125, 144, 143, 143, 139]
      }
    ]
  };

  var options = {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10,
        fontColor: "white",
      },
    },
    scales: {
      xAxes: [
        {
          ticks: { display: true, fontColor: "white" },
        },
      ],
      yAxes: [
        {
          ticks: { display: true, fontColor: "white" },
        },
      ],
    },
  };


const pieData = {
	labels: [
		'Healthy',
		'Bad',
		'Falling'
	],
	datasets: [{
		data: [70, 5, 25],
		backgroundColor: [
		'green',
		'red',
		'yellow'
		]
	}]
};

  return (
    <div className="resume">
      <Line data={data} options={options} />
      <Pie data={pieData} options={options} />
    </div>
  );
}
