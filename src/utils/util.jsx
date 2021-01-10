import React from 'react';
import { Circle, Popup } from 'react-leaflet';
import numeral from 'numeral';
import styled from 'styled-components';

const casesTypeColor = {
  cases: {
    hex: '#cc1034',
    rgb: 'rgb(204, 16, 52',
    rgba: 'rgba(204, 16, 52, 0.5)',
    multiplier: 800,
  },

  recovered: {
    hex: '#7dd71d',
    rgb: 'rgb(125, 215, 29',
    rgba: 'rgba(125, 215, 29, 0.5)',
    multiplier: 1200,
  },

  deaths: {
    hex: '#fb4443',
    rgb: 'rgb(251, 68, 67)',
    rgba: 'rgba(251, 68, 67, 0.5)',
    multiplier: 2000,
  },
};

export const sortData = (data) => [...data].sort((a, b) => (a.cases > b.cases ? -1 : 1));

export const test = (data) => (data.slice());

export const showDataOnMap = (data, casesType = 'cases') => (
  data.map((country) => (
    <Circle
      key={country.country}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColor[casesType].hex}
      fillColor={casesTypeColor[casesType].hex}
      radius={
        // eslint-disable-next-line no-mixed-operators
          Math.sqrt(country[casesType]) * casesTypeColor[casesType].multiplier / 7
      }
    >
      <Popup>
        <InfoContainer>
          <InfoFlag style={{ backgroundImage: `url(${country.countryInfo.flag})` }} />
          <InfoName>{country.country}</InfoName>
          <InfoCases>
            Cases:
            {numeral(country.cases).format('0,0')}
          </InfoCases>
          <InfoRecovered>
            Recovered:
            {numeral(country.recovered).format('0,0')}
          </InfoRecovered>
          <InfoDeaths>
            Deaths:
            {numeral(country.deaths).format('0,0')}
          </InfoDeaths>
        </InfoContainer>
      </Popup>
    </Circle>
  ))
);

const InfoContainer = styled.div`
  height: 100%;
`;
const InfoFlag = styled.div`
  height: 80px;
  width: 100%;
  
  background-size: cover;
  border-radius: 8px;
  & img {
    width: 100px;
    border-radius: 5px;
  }
`;
const InfoName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #555;
`;
const InfoCases = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;
const InfoRecovered = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;
const InfoDeaths = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;
