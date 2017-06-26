import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import { connect } from 'react-redux';

import { add } from '../../actions/recentMovies';

const mapStateToProps = state => ({
  data: state.Search.movies && state.Search.movies.data,
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
        <div >
          <ol>
            {_.map(data.Search, (item, i) =>
              <li key={i}>
                <span onClick={() => this.setState({ item })}>{ item.Title }</span>
              </li>)
            }
          </ol>
          {data.totalResults > 10 && <h3>and other {data.totalResults - 10} movies</h3>}
        </div>
      );
    } else if (data && data.Response === 'False') {
      return (
        <h3>{data.Error}</h3>
      );
    }
    return (
      <div className="default_pag">
        <h1>Top 10 Movies of all time</h1>
        <iframe src="https://www.youtube.com/embed/TDeW0NFwHkw?ecver=2" />
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
            <h3>{item.Title}</h3>
            <img src={item.Poster !== 'N/A' ? item.Poster : 'https://s.movie.as/images/none_175px.jpg'} alt={item.Title} width="175px" id="poster" />
            <h4>Type: {item.Type}</h4>
            <h4>Year: {item.Year}</h4>
            <span onClick={() => this.props.add(item.Title, item.imdbID, item.Poster)}><Link to={`/single/${item.imdbID}`}>read more</Link></span>
          </section>
        }
      </main>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
