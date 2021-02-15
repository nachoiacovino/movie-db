import { HYDRATE } from 'next-redux-wrapper';

import { actionTypes } from './actions';

const initialState = {
  error: false,
  loading: false,
  searchResults: null,
  fetchedShow: null,
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

    default:
      return state;
  }
}

export default reducer;
