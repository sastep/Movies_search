const recentMovies = (state = {}, action) => {
  switch (action.type) {
    case 'GET_RECENT_MOVIES':
      return { ...state, movies: action.payload };
    case 'ADD_NEW_MOVIE':
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export default recentMovies;
