import { z } from 'zod';
import { cloudsSchema, coordSchema, weatherSchema } from './common';

const windSchema = z.object({
  deg: z.number(),
  gust: z.number(),
  speed: z.number(),
});

const mainSchema = z.object({
  feels_like: z.number(),
  humidity: z.number(),
  pressure: z.number(),
  temp: z.number(),
  temp_max: z.number(),
  temp_min: z.number(),
});

const sysSchema = z.object({
  country: z.string(),
  id: z.number(),
  message: z.number().optional(),
  sunrise: z.number(),
  sunset: z.number(),
  type: z.number(),
});

const weatherResponseSchema = z.object({
  base: z.string(),
  clouds: cloudsSchema,
  cod: z.number(),
  coord: coordSchema,
  dt: z.number(),
  id: z.number(),
  main: mainSchema,
  name: z.string(),
  sys: sysSchema,
  timezone: z.number(),
  visibility: z.number(),
  weather: z.array(weatherSchema),
  wind: windSchema,
});

type WeatherResponse = z.infer<typeof weatherResponseSchema>;

export type { WeatherResponse };
export { weatherResponseSchema };
