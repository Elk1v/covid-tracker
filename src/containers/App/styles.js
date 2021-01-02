import styled from 'styled-components/macro';
import { Card, FormControl } from '@material-ui/core';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  flex: 0.9;
`;

export const RightContainer = styled(Card)`
`;

export const NewCases = styled.h2`
  margin-top: 20px;
`;

export const Heading = styled.h1`
  color: #CC1034;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Stats = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const StyledFormControl = styled(FormControl)`
`;
