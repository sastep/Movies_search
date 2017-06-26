import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import readMore from '../../actions/readMore';


const mapStateToProps = state => ({
  moreData: state.readMore.moreData,
});
const mapDispatchToProps = dispatch => ({
  readMore: ID => dispatch(readMore(ID)),
});

class SinglePage extends PureComponent {
  componentWillMount() {
    this.props.readMore(this.props.params.id);
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.params.id !== this.props.params.id){
      this.props.readMore(this.props.params.id);
    }
  }
  render() {
    const { moreData } = this.props;
    return (
      <div className="single-page wrap">
        <h2>single page</h2>
        {!moreData && <img className="londing" src="http://www.wallies.com/filebin/images/loading_apple.gif" alt="" />}
        {moreData &&
          <div className="poster">
            <img src={moreData.data.Poster} alt="" />
            <div>
              <p><b>Actors</b>: {moreData.data.Actors}</p>
              <p><b>Country</b>: {moreData.data.Country}</p>
              <p><b>Genre</b>: {moreData.data.Genre}</p>
              <p><b>Released</b>: {moreData.data.Released}</p>
              <p><b>Runtime</b>: {moreData.data.Runtime}</p>
              <p><b>About movie</b>: {moreData.data.Plot}</p>
            </div>
          </div>
        }
        <Link to="/">go to Home page</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
