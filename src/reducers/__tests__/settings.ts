import { describe, expect, it } from 'vitest';
import reducer, { updateSettings, SettingsState } from '../settings';

describe('reducers/settings', () => {
  const initialState: SettingsState = {
    language: 'en',
    unit: 'metric',
  };

  describe('updateSettings', () => {
    it('should add a new city', () => {
      const state = reducer(
        initialState,
        updateSettings({
          language: 'de',
        }),
      );

      expect(state).toStrictEqual({
        language: 'de',
        unit: 'metric',
      });
    });
  });
});
