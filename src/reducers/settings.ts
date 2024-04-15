import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SupportedLanguage, SupportedUnit } from '../constants/localization';

interface SettingsState {
  language: SupportedLanguage;
  unit: SupportedUnit;
}

const initialState: SettingsState = {
  language: 'en',
  unit: 'metric',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
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
