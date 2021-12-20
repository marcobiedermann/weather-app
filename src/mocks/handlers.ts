import { rest } from 'msw';
import find from './__fixtures__/find/berlin.json';
import dailyForecast from './__fixtures__/forecast/daily/london.json';
import hourlyForecast from './__fixtures__/forecast/hourly/london.json';
import forecast from './__fixtures__/forecast/london.json';
import group from './__fixtures__/group/berlin.json';
import weather from './__fixtures__/weather/london.json';

const handlers = [
  rest.get('https://api.openweathermap.org/data/2.5/find', (_request, response, context) => {
    return response(context.status(200), context.json(find));
  }),
  rest.get(
    'https://api.openweathermap.org/data/2.5/forecast/daily',
    (_request, response, context) => {
      return response(context.status(200), context.json(dailyForecast));
    },
  ),
  rest.get(
    'https://api.openweathermap.org/data/2.5/forecast/hourly',
    (_request, response, context) => {
      return response(context.status(200), context.json(hourlyForecast));
    },
  ),
  rest.get('https://api.openweathermap.org/data/2.5/forecast', (_request, response, context) => {
    return response(context.status(200), context.json(forecast));
  }),
  rest.get('https://api.openweathermap.org/data/2.5/group', (_request, response, context) => {
    return response(context.status(200), context.json(group));
  }),
  rest.get('https://api.openweathermap.org/data/2.5/weather', (_request, response, context) => {
    return response(context.status(200), context.json(weather));
  }),
];

export { handlers };
