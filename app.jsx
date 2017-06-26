import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import Routes from './routes';
import reducers from './src/reducers';

const rootReducer = combineReducers(reducers);

const middlewares = [reduxThunk];
const logger = createLogger();
middlewares.push(logger);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector('#root'),
);
