export const actionTypes = {
  FAILURE: 'FAILURE',
  SEARCH_DATA: 'SEARCH_DATA',
  SEARCH_DATA_SUCCESS: 'SEARCH_DATA_SUCCESS',
  FETCH_SHOW: 'FETCH_SHOW',
  FETCH_SHOW_SUCCESS: 'FETCH_SHOW_SUCCESS',
  HYDRATE: 'HYDRATE',
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function searchData(term) {
  return { type: actionTypes.SEARCH_DATA, term };
}

export function searchDataSuccess(searchResults) {
  return {
    type: actionTypes.SEARCH_DATA_SUCCESS,
    searchResults,
  };
}

export const fetchShow = (imdbId) => ({
  type: actionTypes.FETCH_SHOW,
  imdbId,
});

export const fetchShowSuccess = (fetchedShow) => ({
  type: actionTypes.FETCH_SHOW_SUCCESS,
  fetchedShow,
});
