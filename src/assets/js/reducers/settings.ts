import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type Unit = 'metric' | 'imperial';

interface SettingsState {
  language: string;
  unit: Unit;
}

const initialState: SettingsState = {
  language: 'en',
  unit: 'metric',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings: (state, action: PayloadAction<{ language: string; unit: Unit }>) => {
      state.language = action.payload.language;
      state.unit = action.payload.unit;
    },
  },
});

export const { updateSettings } = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;

export default settingsSlice.reducer;
