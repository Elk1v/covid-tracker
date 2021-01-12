import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './Store';
import GlobalStyles from './containers/App/global-styles';
import App from './containers/App/App';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root'),
);
