import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainWrapper from './src/components/index';
import Home from './src/components/home/home';
import SinglePage from './src/components/singlePage/singlePage';

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainWrapper}>
          <IndexRoute component={Home} />
          <Route path="/single" component={SinglePage} />
        </Route>
      </Router>
    );
  }
}
