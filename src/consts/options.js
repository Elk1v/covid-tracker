import numeral from 'numeral';

const OPTIONS = {
  legend: {
    display: false,
  },

  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: (tooltipItem, data) => (numeral(tooltipItem.value).format('+0,0')),
    },
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          parser: 'MM/DD/YY',
          tooltipFormat: 'll',
        },

      },
    ],

    yAxes: [
      {
        gridLines: {
          display: false,
        },

        ticks: {
          callback: (value, index, values) => (
              numeral(value).format('0a')
          ),
        },
      },
    ],

  },
};

export default OPTIONS;
