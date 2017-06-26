import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';


import { getRecentMovies } from '../../actions/recentMovies';

const mapDispatchToProps = dispatch => ({
  getRecentMovies: () => dispatch(getRecentMovies()),
});

const mapStateToProps = state => ({
  movies: state.recentMovies,
});

class Footer extends PureComponent {
  componentWillMount() {
    this.props.getRecentMovies();
  }
  render() {
    const paramsId = this.props || null;
    return (
      <footer>
        <section className="wrap">
          <h2>Recent Movies</h2>
          <ul>
            {
              _.map(this.props.movies && this.props.movies.movies, (item, i) => {
                if ((paramsId && paramsId !== item.ID) || (paramsId && i !== 5)) {
                  return <li key={i}><Link to={`/single/${item.ID}`}><img src={item.poster === 'N/A' ? 'https://s.movie.as/images/none_175px.jpg' : item.poster} alt="" width="100" /><span style={{"verticalAlign":"center"}}>{item.title}</span></Link></li>;
                }
                return false;
              })
            }
          </ul>
        </section>
      </footer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

