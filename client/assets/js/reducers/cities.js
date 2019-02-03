import { CITY_ADD, CITY_REMOVE } from '../constants/action-types';

const initialState = [];

function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case CITY_ADD:
      return state.filter(city => city.id !== action.payload.id).concat([action.payload]);

    case CITY_REMOVE:
      return state.filter(city => city.id !== action.payload);

    default:
      return state;
  }
}

export default citiesReducer;
