import axios from 'axios';

const getSingleMovie = ID => dispatch => axios.get(`http://www.omdbapi.com/?apikey=fcbd49b5&i=${ID}`)
  .then(result => dispatch({ type: 'READ_MORE', payload: result }))
  .catch(error => dispatch({ type: 'READ_MORE_FAIL', error }));

export default getSingleMovie;
