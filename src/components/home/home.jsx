import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import { connect } from 'react-redux';

import { add } from '../../actions/recentMovies';

const mapStateToProps = state => ({
  data: state.Search.movies && state.Search.movies.data,
  searchTitle: state.Search.searchTitle,
});

const mapDispatchToProps = dispatch => ({
  add: (title, ID, poster) => dispatch(add({ title, ID, poster })),
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps, this.props)) {
      this.setState({ item: null });
    }
  }
  renderData = (data) => {
    if (data && data.Response === 'True') {
      return (
        <div className="search-result">
          <h3>Search results for <i>{this.props.searchTitle}</i></h3>
          <ul>
            {_.map(data.Search, (item, i) =>
              <li key={i}>
                <span onClick={() => this.setState({ item })}>{ item.Title }</span>
              </li>)
            }
          </ul>
          {data.totalResults > 10 && <h3>and other {data.totalResults - 10} movies</h3>}
        </div>
      );
    } else if (data && data.Response === 'False') {
      return (
        <h3>{data.Error}</h3>
      );
    }
    return (
      <div className="default_page">
        <h1>Top 30 Movies of all time</h1>
        <iframe width="1100" height="700" src="https://www.youtube.com/embed/9azGzlvCygA" frameBorder="0" allowFullScreen />
      </div>
    );
  };
  render() {
    const { data } = this.props;
    const { item } = this.state;
    return (
      <main className="home wrap">
        <section className="home_section">
          {this.renderData(data)}
        </section>
        {item &&
          <section className="current">
            <h2>{item.Title} <i>{item.Year}</i></h2>
            <Link
              to={`/single/${item.imdbID}`}
              onClick={() => this.props.add(item.Title, item.imdbID, item.Poster)}
            >
              <img src={item.Poster !== 'N/A' ? item.Poster : 'https://s.movie.as/images/none_175px.jpg'} alt={item.Title} width="175px" id="poster" />
            </Link>
          </section>
        }
      </main>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
