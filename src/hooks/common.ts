import { z } from 'zod';

const cloudsSchema = z.object({
  all: z.number(),
});

const coordSchema = z.object({
  lat: z.number(),
  lon: z.number(),
});

const weatherSchema = z.object({
  description: z.string(),
  icon: z.string(),
  id: z.number(),
  main: z.string(),
});

const windSchema = z.object({
  deg: z.number(),
  speed: z.number(),
});

export { cloudsSchema, coordSchema, weatherSchema, windSchema };
