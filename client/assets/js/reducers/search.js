import {
  SEARCH_FETCH,
} from '../constants/action-types';

const initialState = {};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case `${SEARCH_FETCH}_FULFILLED`:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export default searchReducer;
