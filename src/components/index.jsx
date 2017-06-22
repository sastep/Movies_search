import React, { Component } from 'react';

import Header from './header/header';
import Footer from './footer/footer';

class MainWrapper extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainWrapper;
