import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import getSingleMovie from '../../actions/movieInfo';

const mapStateToProps = (state, ownProps) => ({
  moreData: state.getSingleMovie.moreData,
  ID: ownProps.params.id,
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
        { moreData && <h2 className="title">{moreData.data.Title}</h2>}
        {!moreData && <img className="loading" src="http://www.wallies.com/filebin/images/loading_apple.gif" alt="" />}
        {moreData && this.props.ID === this.props.moreData.data.imdbID &&
          <div className="poster">
            <img src={moreData.data.Poster === 'N/A' ? 'https://s.movie.as/images/none_175px.jpg' : moreData.data.Poster} alt="" />
            <div className="single">
              <p><b>Actors</b>: {moreData.data.Actors}</p>
              <p><b>Country</b>: {moreData.data.Country}</p>
              <p><b>Genre</b>: {moreData.data.Genre}</p>
              <p><b>Released</b>: {moreData.data.Released}</p>
              <p><b>Runtime</b>: {moreData.data.Runtime}</p>
              <p><b>About movie</b>: {moreData.data.Plot}</p>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
