import styled from 'styled-components/macro';
import { Card, Typography } from '@material-ui/core';

export const Cases = styled.h2``;
export const Title = styled(Typography)``;
export const Total = styled(Typography)``;
export const Container = styled(Card)`
  flex: 1;
  
  &:not(:last-of-type){
    margin-right: 20px;
  }
`;
