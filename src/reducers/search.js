const Search = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE_SUCCESS':
      return { ...state, movies: action.payload, searchTitle: action.title };
    case 'SEARCH_MOVIE_FAIL':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Search;
