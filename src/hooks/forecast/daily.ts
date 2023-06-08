import { z } from 'zod';
import { coordSchema, weatherSchema } from '../common';

const citySchema = z.object({
  coord: coordSchema,
  country: z.string(),
  id: z.number(),
  name: z.string(),
  population: z.number(),
  timezone: z.number(),
});

const feelsLikeSchema = z.object({
  day: z.number(),
  eve: z.number(),
  morn: z.number(),
  night: z.number(),
});

const tempSchema = z.object({
  day: z.number(),
  eve: z.number(),
  max: z.number(),
  min: z.number(),
  morn: z.number(),
  night: z.number(),
});

const listSchema = z.object({
  clouds: z.number(),
  deg: z.number(),
  dt: z.number(),
  feels_like: feelsLikeSchema,
  gust: z.number(),
  humidity: z.number(),
  pop: z.number(),
  pressure: z.number(),
  rain: z.number(),
  speed: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
  temp: tempSchema,
  weather: z.array(weatherSchema),
});

const dailyForecastResponseSchema = z.object({
  city: citySchema,
  cnt: z.number(),
  cod: z.string(),
  list: z.array(listSchema),
  message: z.number(),
});

type DailyForecastResponse = z.infer<typeof dailyForecastResponseSchema>;

export type { DailyForecastResponse };
export { dailyForecastResponseSchema };
