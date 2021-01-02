import React from 'react';
import { Container } from './styles/stats';

const Stats = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

export default Stats;
