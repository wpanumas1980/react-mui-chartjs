import React from 'react'
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Red',
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132,0.5)',
      borderColor: 'rgb(255, 99, 132)',
    },
    {
        label: 'Yellow',
        data: [12, 19, 13, 15, 12, 13],
        fill: true,
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgb(255, 206, 86)',
      },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Line Chart</h1>
    </div>
    <Line data={data} options={options} />
  </>
)

export default LineChart