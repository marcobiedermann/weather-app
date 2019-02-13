import { FORECAST_FETCH } from '../constants/action-types';
import { API_BASE, API_KEY } from '../constants/open-weather-map';
import { handleError } from '../utilities/errors';
import { param } from '../utilities/uri';

export const fetchForecastByIdFulfilled = weather => ({
  type: `${FORECAST_FETCH}_FULFILLED`,
  payload: weather,
});

export const fetchForecastByIdPending = () => ({
  type: `${FORECAST_FETCH}_PENDING`,
});

export const fetchForecastByIdRejected = error => ({
  type: `${FORECAST_FETCH}_REJECTED`,
  payload: error,
  error: true,
});

export const fetchForecastById = id => async (dispatch, getState) => {
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
  const url = `${API_BASE}/forecast/daily?${params}`;
  const request = new Request(url);

  dispatch(fetchForecastByIdPending());

  try {
    const response = await fetch(request);
    const result = await handleError(response).json();

    dispatch(fetchForecastByIdFulfilled(result));
  } catch (error) {
    dispatch(fetchForecastByIdRejected(error));
  }
};
