import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Routes from './routes';
import reducers from './src/reducers';

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector('#root'),
);
