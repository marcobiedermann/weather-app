import { SEARCH_FETCH } from '../constants/action-types';
import { API_BASE, API_KEY } from '../constants/open-weather-map';
import handleError from '../utilities/errors';

function param(obj) {
  return Object.entries(obj)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&');
}

export const fetchSearchFulfilled = result => ({
  type: `${SEARCH_FETCH}_FULFILLED`,
  payload: result,
});

export const fetchSearchPending = () => ({
  type: `${SEARCH_FETCH}_PENDING`,
});

export const fetchSearchRejected = error => ({
  type: `${SEARCH_FETCH}_REJECTED`,
  payload: error,
  error: true,
});

export const fetchSearch = query => async (dispatch, getState) => {
  const { settings } = getState();
  const defaultParams = {
    ...settings,
    appid: API_KEY,
  };
  const params = param({
    ...defaultParams,
    q: query,
  });
  const url = `${API_BASE}/find?${params}`;
  const request = new Request(url);

  dispatch(fetchSearchPending());

  try {
    const response = await fetch(request);
    const result = await handleError(response).json();

    dispatch(fetchSearchFulfilled(result));
  } catch (error) {
    dispatch(fetchSearchRejected(error));
  }
};
