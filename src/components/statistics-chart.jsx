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
      colors: ['#ff0000'], // Red color for the line
    },
    markers: {
      size: 1,
      colors: ['#ff0000'], // Red color for the marker
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
    // chart: {
    //   toolbar: {
    //     show: false,
    //   },
    // },
    // plotOptions: {
    //   bar: {
    //     horizontal: false,
    //     endingShape: 'rounded',
    //     columnWidth: '45%',
    //   },
    // },
    // legend: {
    //   show: true,
    //   position: 'top',
    //   horizontalAlign: 'right',
    //   fontSize: '12px',
    //   fontFamily: 'Inter',
    //   offsetY: -30,
    //   markers: {
    //     width: 8,
    //     height: 8,
    //     offsetY: -1,
    //     offsetX: -5,
    //     radius: 12,
    //   },
    //   labels: {
    //     // colors: isDark ? '#CBD5E1' : '#475569',
    //   },
    //   itemMargin: {
    //     horizontal: 18,
    //     vertical: 0,
    //   },
    // },
    // title: {
    //   text: 'Revenue Report',
    //   align: 'left',
    //   // offsetX: isRtl ? '0%' : 0,
    //   offsetY: 13,
    //   floating: false,
    //   style: {
    //     fontSize: '20px',
    //     fontWeight: '500',
    //     fontFamily: 'Inter',
    //     // color: isDark ? '#fff' : '#0f172a',
    //   },
    // },
    // dataLabels: {
    //   enabled: false,
    // },
    // stroke: {
    //   show: true,
    //   width: 2,
    //   colors: ['transparent'],
    // },
    // yaxis: {
    //   // opposite: isRtl ? true : false,
    //   labels: {
    //     style: {
    //       // colors: isDark ? '#CBD5E1' : '#475569',
    //       fontFamily: 'Inter',
    //     },
    //   },
    // },
    // xaxis: {
    //   categories: [
    //     'Feb',
    //     'Mar',
    //     'Apr',
    //     'May',
    //     'Jun',
    //     'Jul',
    //     'Aug',
    //     'Sep',
    //     'Oct',
    //   ],
    //   labels: {
    //     style: {
    //       // colors: isDark ? '#CBD5E1' : '#475569',
    //       fontFamily: 'Inter',
    //     },
    //   },
    //   axisBorder: {
    //     show: false,
    //   },
    //   axisTicks: {
    //     show: false,
    //   },
    // },
    // fill: {
    //   opacity: 1,
    // },
    // tooltip: {
    //   y: {
    //     formatter: function (val) {
    //       return '$ ' + val + ' thousands';
    //     },
    //   },
    // },
    // colors: ['#4669FA', '#0CE7FA', '#FA916B'],
    // grid: {
    //   show: true,
    //   // borderColor: isDark ? '#334155' : '#E2E8F0',
    //   strokeDashArray: 10,
    //   position: 'back',
    // },
    // responsive: [
    //   {
    //     breakpoint: 600,
    //     options: {
    //       legend: {
    //         position: 'bottom',
    //         offsetY: 8,
    //         horizontalAlign: 'center',
    //       },
    //       plotOptions: {
    //         bar: {
    //           columnWidth: '80%',
    //         },
    //       },
    //     },
    //   },
    // ],
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
        { x: 'December', y: [2000, 2500, 1800, 2200] },
        { x: 'January', y: [2000, 2500, 1800, 2200] },
        { x: 'February', y: [2000, 2500, 1800, 2200] },
        { x: 'March', y: [2000, 2500, 1800, 2200] },
        { x: 'April', y: [2000, 2500, 1800, 2200] },
        { x: 'May', y: [2000, 2500, 1800, 2200] },
        { x: 'June', y: [2000, 2500, 1800, 2200] },
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
        },
      },
    },
    // plotOptions: {
    //   candlestick: {
    //     bar: {
    //       borderRadius: 5, // Adjust the border radius as needed
    //     },
    //   },
    // },
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
