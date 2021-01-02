import React, { useEffect, useState } from 'react';
import { MenuItem } from '@material-ui/core';
import { Main, Header } from '../components';
import { sortData } from '../utils/util';

const MainContainer = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [mapCenter, setMapCenter] = useState({
    lat: 34.80746,
    lng: -40.4796,
  });
  // eslint-disable-next-line no-unused-vars
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countriesISO2 = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2,
            }
          ));
          const sortedData = sortData(data);
          setCountries(countriesISO2);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  const countryChangeHandler = async (evt) => {
    const countryCode = evt.target.value;

    const url = countryCode === 'worldwide'
      ? 'https://disease.sh/v3/covid-19/all'
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);

        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(5);
      });
  };

  const MenuItems = countries.map(({ value, name }) => (
    <Header.MenuItem key={name} value={value}>{name}</Header.MenuItem>
  ));

  return (
    <Main>
      <Main.LeftSide>
        <Header>
          <Header.Title>COVID-19 TRACKER</Header.Title>
          <Header.StyledFormControl>
            <Header.Select
              variant="outlined"
              value={country}
              onChange={countryChangeHandler}
            >
              {MenuItems}
            </Header.Select>
          </Header.StyledFormControl>
        </Header>
      </Main.LeftSide>
      <Main.RightSide />
    </Main>
  );
};

export default MainContainer;
