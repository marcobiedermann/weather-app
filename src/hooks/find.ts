import { z } from 'zod';
import { cloudsSchema, coordSchema, weatherSchema, windSchema } from './common';

const mainSchema = z.object({
  feels_like: z.number(),
  grnd_level: z.number().optional(),
  humidity: z.number(),
  pressure: z.number(),
  sea_level: z.number().optional(),
  temp: z.number(),
  temp_max: z.number(),
  temp_min: z.number(),
});

const sysSchema = z.object({
  country: z.string(),
});

const listSchema = z.object({
  clouds: cloudsSchema,
  coord: coordSchema,
  dt: z.number(),
  id: z.number(),
  main: mainSchema,
  name: z.string(),
  rain: z.null(),
  snow: z.null(),
  sys: sysSchema,
  weather: z.array(weatherSchema),
  wind: windSchema,
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
