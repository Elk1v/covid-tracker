import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './containers/App/global-styles';
import App from './containers/App/App';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root'),
);
