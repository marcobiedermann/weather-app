import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface CitiesState {
  cities: number[];
}

const initialState: CitiesState = {
  cities: [],
};

const citiesSlice = createSlice({
  initialState,
  name: 'cities',
  reducers: {
    addCity: (state, action: PayloadAction<number>) => {
      state.cities.push(action.payload);
    },
    removeCity: (state, action: PayloadAction<number>) => {
      state.cities = state.cities.filter((city) => city !== action.payload);
    },
  },
});

const {
  actions: { addCity, removeCity },
  reducer,
} = citiesSlice;

export { addCity, removeCity };
export type { CitiesState };
export default reducer;
