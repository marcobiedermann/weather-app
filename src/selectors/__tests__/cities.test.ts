import { describe, expect, it } from 'vitest';
import { selectCities } from '../cities';
import state from '../__fixtures__/state';

describe('selectors/cities', () => {
  describe('selectCities', () => {
    it('should select all cities from the state', () => {
      const cities = selectCities(state);

      expect(cities).toStrictEqual([1]);
    });
  });
});
