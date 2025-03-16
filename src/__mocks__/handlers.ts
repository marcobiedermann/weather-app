import { HttpResponse, http } from 'msw';
import airPullution from './__fixtures__/air-pollution/berlin.json';
import find from './__fixtures__/find/berlin.json';
import forecast from './__fixtures__/forecast/berlin.json';
import dailyForecast from './__fixtures__/forecast/daily/berlin.json';
import group from './__fixtures__/group.json';
import weather from './__fixtures__/weather/berlin.json';

const BASE_PATH = 'https://api.openweathermap.org/data/2.5';

const handlers = [
  http.get(`${BASE_PATH}/air_pollution`, () => HttpResponse.json(airPullution)),
  http.get(`${BASE_PATH}/find`, () => HttpResponse.json(find)),
  http.get(`${BASE_PATH}/forecast`, () => HttpResponse.json(forecast)),
  http.get(`${BASE_PATH}/forecast/daily`, () => HttpResponse.json(dailyForecast)),
  http.get(`${BASE_PATH}/group`, () => HttpResponse.json(group)),
  http.get(`${BASE_PATH}/weather`, () => HttpResponse.json(weather)),
];

export { handlers };
