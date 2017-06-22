import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="single-page wrap">
        <h2>single page</h2>
        <Link to="/">go to Home page</Link>
      </div>
    );
  }
}
