import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CitiesState {
  cities: number[];
}

const initialState: CitiesState = {
  cities: [],
};

export const citiesSlice = createSlice({
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

export const { addCity, removeCity } = citiesSlice.actions;

export const selectCities = (state: RootState) => state.cities;

export default citiesSlice.reducer;
