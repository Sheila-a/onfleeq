/* eslint-disable react/prop-types */
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import './style.css';

const StatisticsChart = ({ height = 200 }) => {
  const series = [
    {
      data: [
        { x: 1, y: 20 },
        { x: 2, y: 18 },
        { x: 3, y: 21 },
        { x: 4, y: 20 },
        { x: 5, y: 22 },
      ],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    title: {
      text: 'Spent time',
      align: 'left',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#ff0000'],
    },
    markers: {
      size: 1,
      colors: ['#ff0000'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 8,
      },
    },
    xaxis: {
      type: 'category',
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };
  return (
    <div>
      <Chart options={options} series={series} type='area' height={height} />
    </div>
  );
};

export default StatisticsChart;

export const ApexChart = () => {
  const series = [
    {
      data: [
        { x: 'November', y: [800, 0, 500, 2000] },
        { x: 'December', y: [1300, 500, 1800, 2500] },
        { x: 'January', y: [2000, 2000, 1000, 3700] },
        { x: 'February', y: [800, 0, 800, 2200] },
        { x: 'March', y: [1000, 200, 700, 2200] },
        { x: 'April', y: [1800, 1000, 2300, 3000] },
        { x: 'May', y: [2500, 2500, 1500, 4200] },
        { x: 'June', y: [500, 0, 0, 1500] },
      ],
    },
  ];
  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Statistics',
      align: 'left',
      color: '#475581',
    },
    xaxis: {
      type: 'month',
    },
    yaxis: {
      min: 0,
      max: 5000,
      tickAmount: 4,
      stepSize: 1000,
      tooltip: {
        enabled: true,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#3326AE',
          downward: '#EF403C',
        },
        wick: {
          useFillColor: true,
          width: 1,
        },
      },
    },
  };
  return (
    <div>
      <div id='chart' className='apex-chart'>
        <ReactApexChart
          options={options}
          series={series}
          type='candlestick'
          height={350}
        />
      </div>
      <div id='html-dist'></div>
    </div>
  );
};
