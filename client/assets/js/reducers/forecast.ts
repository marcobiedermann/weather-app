import { FORECAST_FETCH } from '../constants/action-types';

const initialState = {};

function forecastReducer(state = initialState, action) {
  switch (action.type) {
    case `${FORECAST_FETCH}_FULFILLED`:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export default forecastReducer;
