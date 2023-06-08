import { describe, expect, it } from 'vitest';
import { selectSettings } from '../settings';
import state from '../__fixtures__/state';

describe('selectors/settings', () => {
  describe('selectSettings', () => {
    it('should select all settings from the state', () => {
      const settings = selectSettings(state);

      expect(settings.language).toStrictEqual('en');
      expect(settings.unit).toStrictEqual('metric');
    });
  });
});
