import { z } from 'zod';
import { cloudsSchema, coordSchema, weatherSchema, windSchema } from './common';

const mainSchema = z.object({
  feels_like: z.number(),
  humidity: z.number(),
  pressure: z.number(),
  temp_max: z.number(),
  temp_min: z.number(),
  temp: z.number(),
});

const sysSchema = z.object({
  country: z.string(),
  sunrise: z.number(),
  sunset: z.number(),
  timezone: z.number(),
});

const groupResponseSchema = z.object({
  cnt: z.number(),
  list: z.array(
    z.object({
      clouds: cloudsSchema,
      coord: coordSchema,
      dt: z.number(),
      id: z.number(),
      main: mainSchema,
      name: z.string(),
      sys: sysSchema,
      visibility: z.number(),
      weather: z.array(weatherSchema),
      wind: windSchema,
    }),
  ),
});

type GroupResponse = z.infer<typeof groupResponseSchema>;

export type { GroupResponse };
export { groupResponseSchema };
