import React from 'react';
import { CardContent } from '@material-ui/core';
import {
  Cases, Title, Container, Total,
} from './styles/infobox';

function Infobox({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  );
}

Infobox.Title = function InfoboxTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Infobox.Cases = function InfoBoxCases({ children, ...restProps }) {
  return <Cases {...restProps}>{children}</Cases>;
};

Infobox.Total = function InfoBoxTotal({ children, ...restProps }) {
  return <Total {...restProps}>{children}</Total>;
};

Infobox.CardContent = function InfoBoxCardContent({ children, ...restProps }) {
  return <CardContent {...restProps}>{children}</CardContent>;
};

export default Infobox;
