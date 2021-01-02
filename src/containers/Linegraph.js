import React, { useEffect, useState } from 'react';
import { Linegraph } from '../components';
import OPTIONS from '../consts/options';

const LinegraphContainer = ({ casesType = 'cases' }) => {
  const [data, setData] = useState([]);

  const makeChartData = (data, casesType) => {
    const chartData = [];

    let lastDataPoint;

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const date in data.cases) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }

      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=230')
        .then((response) => (response.json()))
        .then((data) => {
          const chartData = makeChartData(data, casesType);
          setData(chartData);
        });
    };

    fetchData();
  }, [casesType]);

  return (
    <Linegraph>
      {data.length > 0 && (
        <Linegraph.Line
          options={OPTIONS}
          data={{
            datasets: [{
              backgroundColor: 'rgba(204, 16, 52, 0.2',
              borderColor: '#CC1034',
              data,
            }],
          }}
        />
      )}
    </Linegraph>
  );
};

export default LinegraphContainer;
