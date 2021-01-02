import React from 'react';
import { Container, LeftSide, RightSide } from './styles/main';

function Main({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  );
}

Main.RightSide = function MainRightSide({ children, ...restProps }) {
  return <RightSide {...restProps}>{children}</RightSide>;
};

Main.LeftSide = function MainRightSide({ children, ...restProps }) {
  return <LeftSide {...restProps}>{children}</LeftSide>;
};

export default Main;
