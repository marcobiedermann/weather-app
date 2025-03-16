import { z } from 'zod';
import { coordSchema } from './common';

const mainSchema = z.object({
  aqi: z.number(),
});

const listSchema = z.object({
  components: z.record(z.string(), z.number()),
  dt: z.number(),
  main: mainSchema,
});

const airPollutionResponseSchema = z.object({
  coord: coordSchema,
  list: z.array(listSchema),
});

type AirPollutionResponse = z.infer<typeof airPollutionResponseSchema>;

export { airPollutionResponseSchema };
export type { AirPollutionResponse };
