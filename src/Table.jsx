import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

const Table = ({ countries }) => (
  <Wrapper>
    <tbody>
      {countries.map(({ country, cases }) => (
        <tr key={country}>
          <td>{country}</td>
          <td><strong>{cases}</strong></td>
        </tr>
      ))}
    </tbody>
  </Wrapper>
);

Table.propTypes = {
  countries: PT.arrayOf(PT.any).isRequired,
};

const Wrapper = styled.table`
  display: block;
  height: 400px;
  margin-top: 20px;
  overflow: scroll;
  
  color: #6a5d5d;
  background-color: #fff;

  & tbody {
    display: block;
  }
  
  & tr {
    display: flex;
    justify-content: space-between;
  }
  
  &  tr:nth-of-type(odd) {
    background-color: #f3f2f8;
  }
  
  & td {
    padding: 0.5rem;
  }
`;

export default Table;
