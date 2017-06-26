import _ from 'lodash';

export const getRecentMovies = () => dispatch => {
  const recent = JSON.parse(localStorage.getItem('allMovies'));
  if( !_.isEmpty(recent)) {
    dispatch({ type: 'GET_RECENT_MOVIES', payload: recent });
  }
  else {
    dispatch({ type: 'GET_RECENT_MOVIES', payload: [] });
  }
};

export const add = (newMovie) => dispatch => {
  const recent = JSON.parse(localStorage.getItem('allMovies'));
  localStorage.setItem('movie', JSON.stringify(newMovie));
  recent.unshift(newMovie);
  if (recent.length>6) recent.splice(5, 1);
  localStorage.setItem('allMovies', JSON.stringify(recent));
  if (!_.isEmpty(recent)) {
    dispatch({ type: 'ADD_NEW_MOVIE', payload: recent });
  } else {
    dispatch({ type: 'ADD_NEW_MOVIE', payload: [] });
  }
};


