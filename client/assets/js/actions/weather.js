import { WEATHER_FETCH } from '../constants/action-types';
import { API_BASE, API_KEY } from '../constants/open-weather-map';
import handleError from '../utilities/errors';

function param(obj) {
  return Object.entries(obj)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&');
}

export const fetchWeatherByIdFulfilled = weather => ({
  type: `${WEATHER_FETCH}_FULFILLED`,
  payload: weather,
});

export const fetchWeatherByIdPending = () => ({
  type: `${WEATHER_FETCH}_PENDING`,
});

export const fetchWeatherByIdRejected = error => ({
  type: `${WEATHER_FETCH}_REJECTED`,
  payload: error,
  error: true,
});

export const fetchWeatherById = id => async (dispatch, getState) => {
  const { settings } = getState();
  const defaultParams = {
    ...settings,
    appid: API_KEY,
  };
  const params = param({
    ...defaultParams,
    appid: API_KEY,
    id,
  });
  const url = `${API_BASE}/weather?${params}`;
  const request = new Request(url);

  dispatch(fetchWeatherByIdPending());

  try {
    const response = await fetch(request);
    const result = await handleError(response).json();

    dispatch(fetchWeatherByIdFulfilled(result));
  } catch (error) {
    dispatch(fetchWeatherByIdRejected(error));
  }
};
