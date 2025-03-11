import type { RootState } from '../store';

function selectCities(state: RootState): number[] {
  return state.cities.cities;
}

export { selectCities };
