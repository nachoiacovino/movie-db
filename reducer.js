import { HYDRATE } from 'next-redux-wrapper';

import { actionTypes } from './actions';

const initialState = {
  error: false,
  loading: false,
  data: null,
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
        ...{ data: action.data },
      };

    default:
      return state;
  }
}

export default reducer;
