import React, { useEffect, useState } from 'react';
import {
  MenuItem,
  Select, CardContent,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllInfo, fetchCountriesISO } from '../../Store/features/diseaseSlice';
import Map from '../../components/map/Map';
import Table from '../../Table';
import { sortData } from '../../utils/util';
import 'leaflet/dist/leaflet.css';
import InfoboxContainer from '../Infobox';
import LinegraphContainer from '../Linegraph';

import {
  Wrapper, LeftContainer, RightContainer,
  NewCases, Heading, Header, Stats, StyledFormControl,
} from './styles';

import { CENTER, MAP_ZOOM } from '../../consts';

const App = () => {
  const dispatch = useDispatch();
  const allinfo = useSelector((state) => state.disease.WorldWideCases);
  const ISO2 = useSelector((state) => state.disease.countriesISO2);
  console.log('[ALL INFO]', allinfo);
  console.log('[ISO]', ISO2);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({
    lat: 34.80746,
    lng: -40.4796,
  });
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    dispatch(fetchAllInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCountriesISO());
  }, [dispatch]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      }).catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countriesISO2 = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data);
          setCountries(countriesISO2);
          setMapCountries(data);
          setTableData(sortedData);
        }).catch((err) => console.error(err));
    };

    getCountriesData();
  }, []);

  // const countryItems = countries.map(({ value, name }) => (
  //   <MenuItem key={name} value={value}>{name}</MenuItem>
  // ));

  const countryItems = ISO2.map(({ name, ISO2 }) => (
    <MenuItem key={name} value={ISO2}>{name}</MenuItem>
  ));

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

        if (countryCode === 'worldwide') {
          setMapCenter({
            ...mapCenter,
            lat: CENTER.lat,
            lng: CENTER.lng,
          });
        }

        if (countryCode !== 'worldwide') {
          setMapCenter({
            ...mapCenter,
            lat: data.countryInfo.lat,
            lng: data.countryInfo.long,
          });
        }
      }).catch((err) => { console.error(err); });
  };

  return (
    <Wrapper>
      <LeftContainer>
        <Header>
          <Heading>COVID-19 TRACKER</Heading>
          <StyledFormControl>
            <Select
              variant="outlined"
              value={country}
              onChange={countryChangeHandler}
            >
              <MenuItem value="worldwide">WorldWide</MenuItem>
              {countryItems}
            </Select>
          </StyledFormControl>
        </Header>
        <Stats>
          <InfoboxContainer
            title="Cases"
            cases={allinfo.todayCases}
            total={allinfo.cases}
          />
          <InfoboxContainer
            title="Recovered"
            cases={allinfo.todayRecovered}
            total={allinfo.recovered}
          />
          <InfoboxContainer
            title="Deaths"
            cases={allinfo.todayDeaths}
            total={allinfo.deaths}
          />
        </Stats>

        <Map
          countries={mapCountries}
          center={mapCenter}
          zoom={MAP_ZOOM}
        />
      </LeftContainer>
      <RightContainer>
        <CardContent>
          <h3>Live Cases By Country</h3>
          <button type="button" onClick={() => { dispatch(fetchAllInfo()); }}>click</button>
          <Table countries={tableData} />
          <NewCases>Worldwide new cases</NewCases>
          <LinegraphContainer />
        </CardContent>
      </RightContainer>
    </Wrapper>
  );
};

export default App;
