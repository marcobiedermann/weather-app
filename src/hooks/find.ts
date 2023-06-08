import { z } from 'zod';
import { cloudsSchema, coordSchema, weatherSchema, windSchema } from './common';

const mainSchema = z.object({
  feels_like: z.number(),
  grnd_level: z.number().optional(),
  humidity: z.number(),
  pressure: z.number(),
  sea_level: z.number().optional(),
  temp_max: z.number(),
  temp_min: z.number(),
  temp: z.number(),
});

const sysSchema = z.object({
  country: z.string(),
});

const listSchema = z.object({
  id: z.number(),
  name: z.string(),
  coord: coordSchema,
  main: mainSchema,
  dt: z.number(),
  wind: windSchema,
  sys: sysSchema,
  rain: z.null(),
  snow: z.null(),
  clouds: cloudsSchema,
  weather: z.array(weatherSchema),
});

const findResponseSchema = z.object({
  cod: z.string(),
  count: z.number(),
  list: z.array(listSchema),
  message: z.string(),
});

type FindResponse = z.infer<typeof findResponseSchema>;

export type { FindResponse };
export { findResponseSchema };
