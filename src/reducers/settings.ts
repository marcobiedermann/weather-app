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

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings: (state, action: PayloadAction<{ language: string; unit: Unit }>) => {
      state.language = action.payload.language;
      state.unit = action.payload.unit;
    },
  },
});

const { updateSettings } = settingsSlice.actions;

const selectSettings = (state: RootState): SettingsState => state.settings;

export { updateSettings, selectSettings };
export default settingsSlice.reducer;
