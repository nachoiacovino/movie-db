import { HYDRATE } from 'next-redux-wrapper';

import { actionTypes } from './actions';

const initialState = {
  error: false,
  loading: false,
  searchResults: null,
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
      };

    default:
      return state;
  }
}

export default reducer;
