import { CITY_ADD, CITY_REMOVE } from '../constants/action-types';

export const addCity = city => ({
  type: CITY_ADD,
  payload: city,
});

export const removeCity = id => ({
  type: CITY_REMOVE,
  payload: id,
});
