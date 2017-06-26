import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import searchMovie from '../../actions/search';

const mapDispatchToProps = dispatch => ({
  search: title => dispatch(searchMovie(title)),
});
const mapStateToProps = state => ({
  movies: state.Search.movies && state.Search.movies.data,
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  handleClick =(e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.props.search(inputValue);
    this.setState({ inputValue: '' }, () => browserHistory.push('/'));
  };
  render() {
    return (
      <header>
        <section className="wrap">
          <Link to="/"><img src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/219879/580/386/m1/fpnw/wm0/infinity-movies-logo-preview-05-.png?1414357745&s=c719652ebbd8a7acd5d5d446e68276a2" alt="movie" /></Link>
          <div>
            <form action="" onSubmit={e => this.handleClick(e)}>
              <input type="search" placeholder="search..." onChange={e => this.setState({ inputValue: e.target.value })} value={this.state.inputValue} />
              <input type="submit" />
            </form>
          </div>
        </section>
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

