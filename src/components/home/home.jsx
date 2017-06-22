import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="home wrap">
        <section className="home_section">
          <h2>home page</h2>
          <Link to="/single">go to single page</Link>
        </section>
      </div>
    );
  }
}
