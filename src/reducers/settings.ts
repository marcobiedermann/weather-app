import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { SupportedLanguage, SupportedUnit } from '../constants/localization';

interface SettingsState {
  language: SupportedLanguage;
  unit: SupportedUnit;
}

const initialState: SettingsState = {
  language: 'en',
  unit: 'metric',
};

const settingsSlice = createSlice({
  initialState,
  name: 'settings',
  reducers: {
    updateSettings: (state, action: PayloadAction<Partial<SettingsState>>) => {
      const { language, unit } = action.payload;

      if (language) {
        state.language = language;
      }

      if (unit) {
        state.unit = unit;
      }
    },
  },
});

const {
  actions: { updateSettings },
  reducer,
} = settingsSlice;

export { updateSettings };
export type { SettingsState };
export default reducer;
