import React, { cloneElement } from 'react';

import Header from './header/header';
import Footer from './footer/footer';

const MainWrapper = props => (
  <div className="main">
    <Header />
    <div className="middle">{cloneElement(props.children, { siteData: props.siteData })}</div>
    <Footer paramsId={props.params.id || null} />
  </div>
);


export default MainWrapper;
