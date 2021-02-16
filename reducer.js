import { HYDRATE } from 'next-redux-wrapper';
import { v4 as uuidv4 } from 'uuid';

import { actionTypes } from './actions';

const initialState = {
  error: false,
  loading: false,
  searchResults: null,
  fetchedShow: null,
  playlists: [
    { name: 'test', id: '4c133dba-3253-4425-90dc-8bbb0e6a0e0e', shows: [] },
    { name: 'test2', id: '4c133dba-3253-4425-90dc-8bbb0e6a1212', shows: [] },
    { name: 'test5', id: '4c133dba-3253-4425-90dc-8bbb0e6aasas', shows: [] },
  ],
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

    case actionTypes.ADD_SHOW_TO_PLAYLIST:
      console.log(action);
      return {
        ...state,
        ...{
          playlists: state.playlists.map((playlist) =>
            playlist.id === action.showAndPlaylist.playlistId
              ? {
                  ...playlist,
                  shows: [...playlist.shows, action.showAndPlaylist.showId],
                }
              : playlist,
          ),
        },
      };

    default:
      return state;
  }
}

export default reducer;
