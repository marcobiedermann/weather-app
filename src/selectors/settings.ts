import type { SettingsState } from '../reducers/settings';
import type { RootState } from '../store';

function selectSettings(state: RootState): SettingsState {
  return state.settings;
}

export { selectSettings };
