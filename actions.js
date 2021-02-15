export const actionTypes = {
  FAILURE: 'FAILURE',
  SEARCH_DATA: 'SEARCH_DATA',
  SEARCH_DATA_SUCCESS: 'SEARCH_DATA_SUCCESS',
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
