import {
  WEATHER_FETCH,
} from '../constants/action-types';

const initialState = {};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case `${WEATHER_FETCH}_FULFILLED`:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export default weatherReducer;
