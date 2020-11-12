import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import enhancer from '../middlewares';
import reducers from '../reducers';

const initialState = {
  cities: [],
  settings: {
    language: 'en',
    unit: 'metric',
  },
};

const persistConfig = {
  blacklist: ['router'],
  key: 'root',
  storage,
};

const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, reducers(history));

const store = createStore(persistedReducer, initialState, enhancer);
const persistor = persistStore(store);

export default store;
export { history, persistor };
