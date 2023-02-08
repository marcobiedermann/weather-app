/* eslint-disable import/no-cycle */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cities from '../reducers/cities';
import settings from '../reducers/settings';

const rootReducer = combineReducers({
  cities,
  settings,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { persistor };
export default store;
