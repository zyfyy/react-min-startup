/* eslint-disable no-undef */
import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import store from './store';

// eslint-disable-next-line no-console
console.log('browser', process.env.NODE_ENV, module);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
