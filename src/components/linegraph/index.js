import React from 'react';
import { Line } from 'react-chartjs-2';
import { Container } from './styles/linegraph';

function Linegraph({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Linegraph.Line = function LinegraphLine({ ...restProps }) {
  return <Line {...restProps} />;
};

export default Linegraph;
