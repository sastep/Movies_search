const readMore = (state = {}, action) => {
  switch (action.type) {
    case 'READ_MORE':
      return { ...state, moreData: action.payload };
    case 'READ_MORE_FAIL':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default readMore;
