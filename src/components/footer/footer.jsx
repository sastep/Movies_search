import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';


import { getRecentMovies } from '../../actions/recentMovies';

const mapDispatchToProps = dispatch => ({
  getRecentMovies: () => dispatch(getRecentMovies()),
  // add: (title, ID) => dispatch(add({ title, ID })),
});

const mapStateToProps = state => ({
  movies: state.recentMovies,
});

class Footer extends PureComponent {
  componentWillMount() {
    this.props.getRecentMovies();
  }
  render() {
    console.log(this.props.paramsId);
    if (this.props.paramsId) {

    }
    return (
      <footer>
        <section className="wrap">
          <h3>footer</h3>
          <ol>
            {
              _.map(this.props.movies && this.props.movies.movies, (item, i) => {
                if ((this.props.paramsId && this.props.paramsId !== item.ID) || (!this.props.paramsId && i !== 5)) {
                  return <li key={i}><Link to={`/single/${item.ID}`}>{item.title}</Link></li>;
                }
                return false;
              })
            }
          </ol>
        </section>
      </footer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

