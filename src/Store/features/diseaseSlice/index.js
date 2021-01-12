import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllInfo = createAsyncThunk('cases/allLoading',
  () => axios
    .get('https://disease.sh/v3/covid-19/all')
    .then((response) => response.data)
    .catch((error) => error));

export const fetchCountriesISO = createAsyncThunk('countries/ISO2',
  () => axios
    .get('https://disease.sh/v3/covid-19/countries')
    .then(({ data }) => data.map((dataItem) => (
      {
        name: dataItem.country,
        ISO: dataItem.countryInfo.iso2,
      }
    )))
    .catch((error) => error));

export const fetchInfoByCountry = createAsyncThunk('country/cases',
  (countryISO) => axios
    .get(`https://disease.sh/v3/covid-19/countries/${countryISO}`)
    .then((response) => response.data)
    .catch((error) => error));

const allInfoInitialState = {
  WorldWideCases: {},
  countriesISO2: [],
  error: null,
};

const diseaseSlice = createSlice({
  name: 'WorldWide',
  initialState: allInfoInitialState,
  reducers: {},
  extraReducers: {
    [fetchAllInfo.fulfilled]: (state, action) => {
      state.WorldWideCases = action.payload;
    },
    [fetchAllInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    [fetchCountriesISO.fulfilled]: (state, action) => {
      state.countriesISO2 = action.payload;
    },
    [fetchCountriesISO.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default diseaseSlice.reducer;
