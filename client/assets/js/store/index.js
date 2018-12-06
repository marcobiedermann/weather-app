import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import enhancer from '../middlewares';
import reducers from '../reducers';

const initialState = {
  cities: [
    {
      id: 2950159,
      name: ' Berlin',
    },
    {
      id: 2825297,
      name: 'Stuttgart',
    },
  ],
  settings: {
    language: 'de',
    unit: 'metric',
  },
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, initialState, enhancer);
const persistor = persistStore(store);

export default store;
export {
  persistor,
};
