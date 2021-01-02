import React from 'react';
import { Infobox } from '../components';

const InfoboxContainer = ({ title, cases, total }) => (
  <Infobox>
    <Infobox.CardContent>
      <Infobox.Title>{title}</Infobox.Title>
      <Infobox.Cases>{cases}</Infobox.Cases>
      <Infobox.Total>
        {total}
        {' '}
        Total
      </Infobox.Total>
    </Infobox.CardContent>
  </Infobox>
);

export default InfoboxContainer;
