import React, { Component, cloneElement } from 'react';

import Header from './header/header';
import Footer from './footer/footer';

class MainWrapper extends Component {
  render() {
    console.log(this.props.siteData)
    return (
      <div className="main">
        <Header />
        {cloneElement(this.props.children, { siteData: this.props.siteData })}
        <Footer />
      </div>
    );
  }
}

export default MainWrapper;
