import { HYDRATE } from 'next-redux-wrapper';
import { v4 as uuidv4 } from 'uuid';

import { actionTypes } from './actions';

const initialState = {
  error: false,
  loading: false,
  searchResults: null,
  fetchedShow: null,
  fetchedPlaylist: [],
  playlists: [],
  reviews: [],
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

    case actionTypes.FETCH_PLAYLIST_SUCCESS:
      return {
        ...state,
        ...{ fetchedPlaylist: action.fetchedPlaylist },
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

    case actionTypes.DELETE_SHOW_FROM_PLAYLIST:
      return {
        ...state,
        ...{
          playlists: state.playlists.map((playlist) =>
            playlist.id === action.showAndPlaylist.playlistId
              ? {
                  ...playlist,
                  shows: playlist.shows.filter(
                    (showId) => showId !== action.showAndPlaylist.showId,
                  ),
                }
              : playlist,
          ),
        },
      };

    case actionTypes.ADD_REVIEW:
      return {
        ...state,
        ...{
          reviews: [
            ...state.reviews,
            {
              id: uuidv4(),
              showId: action.payload.showId,
              title: action.payload.title,
              text: action.payload.text,
              author: action.payload.author,
              rating: action.payload.rating,
            },
          ],
        },
      };

    case actionTypes.DELETE_REVIEW:
      return {
        ...state,
        ...{
          reviews: state.reviews.filter(
            (review) => review.id !== action.reviewId,
          ),
        },
      };

    default:
      return state;
  }
}

export default reducer;
