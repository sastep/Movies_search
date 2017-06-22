import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <header>
        <section className="wrap">
          <Link to="/"><img src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/219879/580/386/m1/fpnw/wm0/infinity-movies-logo-preview-05-.png?1414357745&s=c719652ebbd8a7acd5d5d446e68276a2" alt="movie" /></Link>
          <div>
            <input type="search" placeholder="search..." />
            <button>Search</button>
          </div>
        </section>
      </header>
    );
  }
}
