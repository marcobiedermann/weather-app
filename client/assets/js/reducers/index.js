import { combineReducers } from 'redux';
import cities from './cities';
import search from './search';
import settings from './settings';
import weather from './weather';

const reducers = combineReducers({
  cities,
  search,
  settings,
  weather,
});

export default reducers;
