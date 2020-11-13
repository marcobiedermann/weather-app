import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import cities from './cities';
import search from './search';
import settings from './settings';

const reducers = (history) =>
  combineReducers({
    cities,
    router: connectRouter(history),
    search,
    settings,
  });

export default reducers;
