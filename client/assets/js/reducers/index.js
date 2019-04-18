import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import cities from './cities';
import forecast from './forecast';
import search from './search';
import settings from './settings';
import weather from './weather';

const reducers = history =>
  combineReducers({
    cities,
    forecast,
    router: connectRouter(history),
    search,
    settings,
    weather,
  });

export default reducers;