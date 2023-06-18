import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../constants/open-weather-map';
import { FindResponse, findResponseSchema } from './find';
import { DailyForecastResponse, dailyForecastResponseSchema } from './forecast/daily';
import { GroupResponse, groupResponseSchema } from './group';
import { WeatherResponse, weatherResponseSchema } from './weather';
import { SupportedLanguage, SupportedUnit } from '../constants/localization';

const defaultParams = {
  appid: API_KEY,
  lang: 'en',
  units: 'metric',
};

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
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
      ...defaultParams,
      q: query,
      ...(settings?.language && { lang: settings.language }),
      ...(settings?.unit && { units: settings.unit }),
    },
  });

  return findResponseSchema.parse(data);
}

function useFind(query: string, settings?: Partial<Settings>): UseQueryResult<FindResponse, Error> {
  return useQuery<FindResponse, Error>({
    queryFn: () => getFind(query, settings),
    queryKey: ['find', query, settings],
    enabled: Boolean(query),
  });
}

async function getGroup(ids: number[], settings?: Partial<Settings>): Promise<GroupResponse> {
  const { data } = await instance.get<GroupResponse>('/group', {
    params: {
      ...defaultParams,
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
      ...defaultParams,
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

async function getDailyForecast(
  id: number,
  settings?: Partial<Settings>,
): Promise<DailyForecastResponse> {
  const { data } = await instance.get<DailyForecastResponse>('/forecast/daily', {
    params: {
      ...defaultParams,
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

export { useFind, useGroup, useWeather, useDailyForecast };
