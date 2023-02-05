import { rest } from 'msw';
import find from './__fixtures__/find/berlin.json';
import dailyForecast from './__fixtures__/forecast/daily/london.json';
import hourlyForecast from './__fixtures__/forecast/hourly/london.json';
import forecast from './__fixtures__/forecast/london.json';
import group from './__fixtures__/group/berlin.json';
import weather from './__fixtures__/weather/london.json';

const BASE_PATH = 'https://api.openweathermap.org/data/2.5';

const handlers = [
  rest.get(`${BASE_PATH}/find`, (_request, response, context) =>
    response(context.status(200), context.json(find)),
  ),
  rest.get(`${BASE_PATH}/forecast/daily`, (_request, response, context) =>
    response(context.status(200), context.json(dailyForecast)),
  ),
  rest.get(`${BASE_PATH}/forecast/hourly`, (_request, response, context) =>
    response(context.status(200), context.json(hourlyForecast)),
  ),
  rest.get(`${BASE_PATH}/forecast`, (_request, response, context) =>
    response(context.status(200), context.json(forecast)),
  ),
  rest.get(`${BASE_PATH}/group`, (_request, response, context) =>
    response(context.status(200), context.json(group)),
  ),
  rest.get(`${BASE_PATH}/weather`, (_request, response, context) =>
    response(context.status(200), context.json(weather)),
  ),
];

export { handlers };
