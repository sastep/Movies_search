import React, { cloneElement } from 'react';

import Header from './header/header';
import Footer from './footer/footer';

const MainWrapper = props => (
  <div className="main">
    <Header />
    {cloneElement(props.children, { siteData: props.siteData })}
    <Footer paramsId={props.params.id || null} />
  </div>
);


export default MainWrapper;
