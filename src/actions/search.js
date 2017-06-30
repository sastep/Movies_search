import axios from 'axios';

const searchMovie = title => dispatch => axios.get(`http://www.omdbapi.com/?apikey=c22bc403&s=${title}`)
  .then(result => dispatch({ type: 'SEARCH_MOVIE_SUCCESS', payload: result, title }))
  .catch(error => dispatch({ type: 'SEARCH_MOVIE_FAIL', error }));

export default searchMovie;
