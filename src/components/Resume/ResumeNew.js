import React from "react";

import { Line, Pie } from "react-chartjs-2";

import "../../style.css"

export default function Resume() {
  const data = {
    labels: [
      "01/03/2024",
      "02/03/2024",
      "03/03/2024",
      "04/03/2024",
      "05/03/2024",
      "06/03/2024",
      "07/03/2024",
      
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
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "SUBSTATION 2",
        fill: false,
        borderColor: "rgba(255, 255, 0, 10)",
        borderWidth: 2,
        pointRadius: 5,
        data: [70, 32, 45, 65, 87, 92, 99],
      },
      {
        label: "SUBSTATION 3",
        fill: false,
        borderColor: "green",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [135, 91, 125, 144, 143, 143, 139],
      },
      {
        label: "SUBSTATION 4",
        fill: false,
        borderColor: "green",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [80, 62, 123, 150, 143, 148, 167],
      },
      {
        label: "SUBSTATION 5",
        fill: false,
        borderColor: "rgba(255, 255, 0, 10)",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [100, 40, 60, 70, 75, 65, 80],
      },
      {
        label: "SUBSTATION 6",
        fill: false,
        borderColor: "green",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [120, 100, 110, 140, 152, 155, 162],
      },
      {
        label: "SUBSTATION 7",
        fill: false,
        borderColor: "green",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [160, 155, 144, 133, 122, 147, 152],
      },
      {
        label: "SUBSTATION 8",
        fill: false,
        borderColor: "green",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [150, 152, 154, 156, 145, 138, 170],
      },
      {
        label: "SUBSTATION 9",
        fill: false,
        borderColor: "green",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [50, 85, 122, 66, 131, 148, 153],
      },
      {
        label: "SUBSTATION 10",
        fill: false,
        borderColor: "green",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [155, 136, 110, 80, 89, 141, 137],
      },
    ],
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
		data: [7, 1, 2],
		backgroundColor: [
		'green',
		'red',
		'yellow'
		]
	}]
};

  return (
    <div className="resume">
      <h2 style={{ color: "white" }}>
        Line Visualization of Transformer Index
      </h2>
      <Line data={data} options={options} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ color: "white" }}>
        Pie Visualization of Transformer Health
      </h2>
      <Pie data={pieData} options={options} />
    </div>
  );
}
