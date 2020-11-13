import { configureStore } from '@reduxjs/toolkit';
import cities from '../reducers/cities';
import settings from '../reducers/settings';

const store = configureStore({
  reducer: {
    cities,
    settings,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
