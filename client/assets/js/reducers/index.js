import { combineReducers } from 'redux';
import cities from './cities';
import forecast from './forecast';
import search from './search';
import settings from './settings';
import weather from './weather';

const reducers = combineReducers({
  cities,
  forecast,
  search,
  settings,
  weather,
});

export default reducers;
