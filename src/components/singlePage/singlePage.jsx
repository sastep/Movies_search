import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import getSingleMovie from '../../actions/movieInfo';

const movieSelector = (state, id) => {
  const { SingleMovie = {} } = state;
  if (
    SingleMovie.moreData &&
    SingleMovie.moreData.data &&
    id &&
    SingleMovie.moreData.data.imdbID === id
  ) {
    return SingleMovie.moreData.data;
  }
  return { Title: 'No such movie' };
};

const mapStateToProps = (state, ownProps) => ({
  moreData: movieSelector(state, ownProps.params.id),
});
const mapDispatchToProps = dispatch => ({
  getSingleMovie: ID => dispatch(getSingleMovie(ID)),
});

class SinglePage extends PureComponent {
  componentWillMount() {
    this.props.getSingleMovie(this.props.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.props.getSingleMovie(nextProps.params.id);
    }
  }
  render() {
    const { moreData } = this.props;
    return (
      <div className="single-page wrap">
        {moreData && <h2 className="title">{moreData.Title}</h2>}
        {!moreData && <img className="loading" src="http://www.wallies.com/filebin/images/loading_apple.gif" alt="" />}
        {moreData &&
          <div className="poster">
            <img src={moreData.Poster === 'N/A' ? 'https://s.movie.as/images/none_175px.jpg' : moreData.Poster} alt="" />
            <div className="single">
              <p><b>Actors</b>: {moreData.Actors}</p>
              <p><b>Country</b>: {moreData.Country}</p>
              <p><b>Genre</b>: {moreData.Genre}</p>
              <p><b>Released</b>: {moreData.Released}</p>
              <p><b>Runtime</b>: {moreData.Runtime}</p>
              <p><b>About movie</b>: {moreData.Plot}</p>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
