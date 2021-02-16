import { HYDRATE } from 'next-redux-wrapper';
import { v4 as uuidv4 } from 'uuid';

import { actionTypes } from './actions';

const initialState = {
  error: false,
  loading: false,
  searchResults: null,
  fetchedShow: null,
  playlists: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.SEARCH_DATA_SUCCESS:
      return {
        ...state,
        ...{ searchResults: action.searchResults },
        ...{ error: null },
      };

    case actionTypes.FETCH_SHOW_SUCCESS:
      return {
        ...state,
        ...{ fetchedShow: action.fetchedShow },
        ...{ error: null },
      };

    case actionTypes.ADD_PLAYLIST:
      return {
        ...state,
        ...{
          playlists: [
            ...state.playlists,
            { name: action.playlistName, id: uuidv4(), shows: [] },
          ],
        },
      };

    case actionTypes.DELETE_PLAYLIST:
      return {
        ...state,
        ...{
          playlists: state.playlists.filter(
            (playlist) => playlist.id !== action.playlistId,
          ),
        },
      };

    default:
      return state;
  }
}

export default reducer;
