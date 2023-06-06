import { configureStore } from '@reduxjs/toolkit';
import cities from '../reducers/cities';
import settings from '../reducers/settings';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    cities,
    settings,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type { RootState, AppDispatch };
export { useAppDispatch, useAppSelector };

export default store;
