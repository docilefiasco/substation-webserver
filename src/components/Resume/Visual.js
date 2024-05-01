import React from "react";

import { Line, Pie } from "react-chartjs-2";

import "../../style.css"

export default function Visualization() {
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
        borderColor: "green",
        borderWidth: 2,
        pointRadius: 5,
        data: [60, 91, 83, 97, 58, 72, 65],
      },
      {
        label: "SUBSTATION 2",
        fill: false,
        borderColor: "green",
        borderWidth: 2,
        pointRadius: 5,
        data: [72, 61, 88, 95, 54, 69, 59],
      },
      {
        label: "SUBSTATION 3",
        fill: false,
        borderColor: "green",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [72, 70, 98, 66, 52, 84, 57],
      },
      {
        label: "SUBSTATION 4",
        fill: false,
        borderColor: "green",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [96, 61, 56, 63, 82, 71, 51],
      },
      {
        label: "SUBSTATION 5",
        fill: false,
        borderColor: "green",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [88, 57, 85, 92, 70, 62, 55],
      },
      {
        label: "SUBSTATION 6",
        fill: false,
        borderColor: "green",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [75, 95, 69, 77, 58, 81, 64],
      },
      {
        label: "SUBSTATION 7",
        fill: false,
        borderColor: "green",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [60, 55, 44, 33, 22, 47, 52],
      },
      {
        label: "SUBSTATION 8",
        fill: false,
        borderColor: "yellow",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [30, 34, 21, 48, 42, 37, 29],
      },
      {
        label: "SUBSTATION 9",
        fill: false,
        borderColor: "yellow",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [53, 45, 28, 39, 41, 50, 22],
      },
      {
        label: "SUBSTATION 10",
        fill: false,
        borderColor: "red",
        fontColor: "white",
        borderWidth: 2,
        pointRadius: 5,
        data: [11, 18, 5, 0, 15, 9, 3],
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
        Line Visualization of Transfomer Health Index
      </h2>
      <Line data={data} options={options} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ color: "white" }}>
       Count of effective Transformers
      </h2>
      <Pie data={pieData} options={options} />
    </div>
  );
}
