/* eslint-disable import/prefer-default-export */

import { SETTINGS_UPDATE } from '../constants/action-types';

export const updateSettings = (settings) => ({
  type: SETTINGS_UPDATE,
  payload: settings,
});
