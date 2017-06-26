export const loadState = () => {
  try {
    const currentMovie = window.localStorage.getItem('state');
    if (currentMovie === null) {
      return undefined;
    }
    return JSON.parse(currentMovie);
  } catch (err) {
    return undefined;
  }
};
export const saveState = (state) => {
  try {
    const currentMovie = JSON.stringify(state);
    window.localStorage.setItem('state', currentMovie);
  } catch (err) {
    // ignore write errors...
  }
};
