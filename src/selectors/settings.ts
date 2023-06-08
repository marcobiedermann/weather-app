import { SettingsState } from '../reducers/settings';
import { RootState } from '../store';

function selectSettings(state: RootState): SettingsState {
  return state.settings;
}

export { selectSettings };
