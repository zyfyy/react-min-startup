import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './store';

// eslint-disable-next-line
console.log('browser', process.env.NODE_ENV);

if (PRODUCTION) {
  // eslint-disable-next-line no-console
  console.log('prod', PRODUCTION);
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
