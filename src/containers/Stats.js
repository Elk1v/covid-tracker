import React from 'react';

import { Stats } from '../components';
import InfoboxContainer from './Infobox';

const StatsContainer = () => (
  <Stats>
    <InfoboxContainer title="Cases" />
    <InfoboxContainer title="Recovered" />
    <InfoboxContainer title="Death" />
  </Stats>
);

export default StatsContainer;
