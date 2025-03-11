import { describe, expect, it } from 'vitest';
import type { SettingsState } from '../settings';
import reducer, { updateSettings } from '../settings';

describe('reducers/settings', () => {
  const initialState: SettingsState = {
    language: 'en',
    unit: 'metric',
  };

  describe('updateSettings', () => {
    it('should update the language', () => {
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

    it('should update the unit', () => {
      const state = reducer(
        initialState,
        updateSettings({
          unit: 'imperial',
        }),
      );

      expect(state).toStrictEqual({
        language: 'en',
        unit: 'imperial',
      });
    });
  });
});
