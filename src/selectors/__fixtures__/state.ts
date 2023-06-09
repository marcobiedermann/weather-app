import { RootState } from '../../store';

const state: RootState = {
  cities: {
    cities: [1],
  },
  settings: {
    unit: 'metric',
    language: 'en',
  },
  _persist: {
    rehydrated: true,
    version: -1,
  },
};

export default state;
