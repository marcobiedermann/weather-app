import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { SupportedLanguage, SupportedUnit } from '../constants/localization';
import { API_KEY } from '../constants/open-weather-map';
import type { AirPollutionResponse } from './air-pollution';
import { airPollutionResponseSchema } from './air-pollution';
import type { FindResponse } from './find';
import { findResponseSchema } from './find';
import type { ForecastResponse } from './forecast';
import { forecastResponseSchema } from './forecast';
import type { DailyForecastResponse } from './forecast/daily';
import { dailyForecastResponseSchema } from './forecast/daily';
import type { GroupResponse } from './group';
import { groupResponseSchema } from './group';
import type { WeatherResponse } from './weather';
import { weatherResponseSchema } from './weather';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: API_KEY,
    lang: 'en',
    units: 'metric',
  },
});

interface Settings {
  language: SupportedLanguage;
  unit: SupportedUnit;
}

interface Error {
  message: string;
}

async function getFind(query: string, settings?: Partial<Settings>): Promise<FindResponse> {
  const { data } = await instance.get<FindResponse>('/find', {
    params: {
      q: query,
      ...(settings?.language && { lang: settings.language }),
      ...(settings?.unit && { units: settings.unit }),
    },
  });

  return findResponseSchema.parse(data);
}

function useFind(query: string, settings?: Partial<Settings>): UseQueryResult<FindResponse, Error> {
  return useQuery<FindResponse, Error>({
    enabled: Boolean(query),
    queryFn: () => getFind(query, settings),
    queryKey: ['find', query, settings],
  });
}

async function getGroup(ids: number[], settings?: Partial<Settings>): Promise<GroupResponse> {
  const { data } = await instance.get<GroupResponse>('/group', {
    params: {
      id: ids.join(','),
      ...(settings?.language && { lang: settings.language }),
      ...(settings?.unit && { units: settings.unit }),
    },
  });

  return groupResponseSchema.parse(data);
}

function useGroup(
  ids: number[],
  settings?: Partial<Settings>,
): UseQueryResult<GroupResponse, Error> {
  return useQuery<GroupResponse, Error>({
    queryFn: () => getGroup(ids, settings),
    queryKey: ['group', ids, settings],
  });
}

async function getWeather(id: number, settings?: Partial<Settings>): Promise<WeatherResponse> {
  const { data } = await instance.get<WeatherResponse>('/weather', {
    params: {
      id,
      ...(settings?.language && { lang: settings.language }),
      ...(settings?.unit && { units: settings.unit }),
    },
  });

  return weatherResponseSchema.parse(data);
}

function useWeather(
  id: number,
  settings?: Partial<Settings>,
): UseQueryResult<WeatherResponse, Error> {
  return useQuery<WeatherResponse, Error>({
    queryFn: () => getWeather(id, settings),
    queryKey: ['weather', id, settings],
  });
}

async function getForecast(id: number, settings?: Partial<Settings>): Promise<ForecastResponse> {
  const { data } = await instance.get<ForecastResponse>('/forecast', {
    params: {
      id,
      ...(settings?.language && { lang: settings.language }),
      ...(settings?.unit && { units: settings.unit }),
    },
  });

  return forecastResponseSchema.parse(data);
}

function useForecast(
  id: number,
  settings?: Partial<Settings>,
): UseQueryResult<ForecastResponse, Error> {
  return useQuery<ForecastResponse, Error>({
    queryFn: () => getForecast(id, settings),
    queryKey: ['forecast', id, settings],
  });
}

async function getDailyForecast(
  id: number,
  settings?: Partial<Settings>,
): Promise<DailyForecastResponse> {
  const { data } = await instance.get<DailyForecastResponse>('/forecast/daily', {
    params: {
      cnt: 16,
      id,
      ...(settings?.language && { lang: settings.language }),
      ...(settings?.unit && { units: settings.unit }),
    },
  });

  return dailyForecastResponseSchema.parse(data);
}

function useDailyForecast(
  id: number,
  settings?: Partial<Settings>,
): UseQueryResult<DailyForecastResponse, Error> {
  return useQuery<DailyForecastResponse, Error>({
    queryFn: () => getDailyForecast(id, settings),
    queryKey: ['forecast/daily', id, settings],
  });
}

async function getAirPollution(
  coord: { lat: number; lon: number },
  settings?: Partial<Settings>,
): Promise<AirPollutionResponse> {
  const { data } = await instance.get('/air_pollution', {
    params: {
      ...coord,
      ...(settings?.language && { lang: settings.language }),
      ...(settings?.unit && { units: settings.unit }),
    },
  });

  return airPollutionResponseSchema.parse(data);
}

function useAirPollution(
  coord: { lat: number; lon: number },
  settings?: Partial<Settings>,
): UseQueryResult<AirPollutionResponse, Error> {
  return useQuery<AirPollutionResponse, Error>({
    queryFn: () => getAirPollution(coord, settings),
    queryKey: ['air-pollution', coord, settings],
  });
}

export { useAirPollution, useDailyForecast, useFind, useForecast, useGroup, useWeather };
