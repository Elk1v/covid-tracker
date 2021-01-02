import styled from 'styled-components/macro';
import { Card } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  flex: 0.9;
`;

export const RightSide = styled(Card)`
`;
