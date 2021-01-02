import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import styled from 'styled-components';
import { Card } from '@material-ui/core';
import { showDataOnMap } from '../../utils/util';

const Map = ({
  countries, casesType, center, zoom,
}) => (
  <Wrapper>
    <LeafletMapContainer center={center} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {showDataOnMap(countries, casesType)}
    </LeafletMapContainer>
  </Wrapper>
);

const Wrapper = styled(Card)`
  height: 500px;
  margin-top: 16px;
  padding: 1rem;

`;

const LeafletMapContainer = styled(LeafletMap)`
  height: 100%;
`;

export default Map;
