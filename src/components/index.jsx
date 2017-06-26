import React, { PureComponent, cloneElement } from 'react';

import Header from './header/header';
import Footer from './footer/footer';

class MainWrapper extends PureComponent {
  render() {
    return (
      <div className="main">
        <Header />
        {cloneElement(this.props.children, { siteData: this.props.siteData })}
        <Footer paramsId={this.props.params.id || null} />
      </div>
    );
  }
}

export default MainWrapper;
