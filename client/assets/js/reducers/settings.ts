import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SettingsState {
  lang: string;
  units: string;
}

const initialState: SettingsState = {
  lang: 'en',
  units: 'metric',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings: (state, action: PayloadAction<{ lang: string; units: string }>) => {
      state.lang = action.payload.lang;
      state.units = action.payload.units;
    },
  },
});

export const { updateSettings } = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;

export default settingsSlice.reducer;
