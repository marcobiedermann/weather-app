import type { RootState } from '../../store';

const state: RootState = {
  _persist: {
    rehydrated: true,
    version: -1,
  },
  cities: {
    cities: [1],
  },
  settings: {
    language: 'en',
    unit: 'metric',
  },
};

export default state;
