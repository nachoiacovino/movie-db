export const actionTypes = {
  HYDRATE: 'HYDRATE',
  FAILURE: 'FAILURE',
  SEARCH_DATA: 'SEARCH_DATA',
  SEARCH_DATA_SUCCESS: 'SEARCH_DATA_SUCCESS',
  FETCH_SHOW: 'FETCH_SHOW',
  FETCH_SHOW_SUCCESS: 'FETCH_SHOW_SUCCESS',
  ADD_PLAYLIST: 'ADD_PLAYLIST',
  DELETE_PLAYLIST: 'DELETE_PLAYLIST',
  ADD_SHOW_TO_PLAYLIST: 'ADD_SHOW_TO_PLAYLIST',
  DELETE_SHOW_FROM_PLAYLIST: 'DELETE_SHOW_FROM_PLAYLIST',
  ADD_REVIEW: 'ADD_REVIEW',
  DELETE_REVIEW: 'DELETE_REVIEW',
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

export const addPlaylist = (playlistName) => ({
  type: actionTypes.ADD_PLAYLIST,
  playlistName,
});

export const deletePlaylist = (playlistId) => ({
  type: actionTypes.DELETE_PLAYLIST,
  playlistId,
});

export const addShowToPlaylist = (showAndPlaylist) => ({
  type: actionTypes.ADD_SHOW_TO_PLAYLIST,
  showAndPlaylist,
});

export const deleteShowFromPlaylist = (showAndPlaylist) => ({
  type: actionTypes.DELETE_SHOW_FROM_PLAYLIST,
  showAndPlaylist,
});

export const addReview = (payload) => ({
  type: actionTypes.ADD_REVIEW,
  payload,
});

export const deleteReview = (reviewId) => ({
  type: type,
  reviewId,
});
