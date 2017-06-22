import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import MainWrapper from './src/components/index';
import Home from './src/components/home/home';
import SinglePage from './src/components/singlePage/singlePage';

import reducers from './src/reducers';

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainWrapper}>
        <IndexRoute component={Home} />
        <Route path="/single" component={SinglePage} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#root'));
  