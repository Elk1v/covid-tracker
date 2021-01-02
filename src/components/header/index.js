import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { Container, Title, StyledFormControl } from './styles/header';

const Header = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Header.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Header.StyledFormControl = ({ children, ...restProps }) => (
  <StyledFormControl {...restProps}>{children}</StyledFormControl>
);

Header.Select = ({ ...restProps }) => (
  <Select {...restProps} />
);

Header.MenuItem = ({ children, ...restProps }) => (
  <MenuItem {...restProps}>{children}</MenuItem>
);

export default Header;
