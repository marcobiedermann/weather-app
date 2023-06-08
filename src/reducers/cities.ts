import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CitiesState {
  cities: number[];
}

const initialState: CitiesState = {
  cities: [],
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<number>) => {
      state.cities.push(action.payload);
    },
    removeCity: (state, action: PayloadAction<number>) => {
      state.cities = state.cities.filter((city) => city !== action.payload);
    },
  },
});

const { addCity, removeCity } = citiesSlice.actions;

const selectCities = (state: RootState): number[] => state.cities.cities;

export { addCity, removeCity, selectCities };
export default citiesSlice.reducer;
