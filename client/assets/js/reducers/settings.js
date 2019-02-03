import {
  SETTINGS_UPDATE,
} from '../constants/action-types';

const initialState = {};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export default settingsReducer;
