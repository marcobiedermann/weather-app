import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../constants/open-weather-map';
import { FindResponse, findResponseSchema } from './find';
import { DailyForecastResponse, dailyForecastResponseSchema } from './forecast/daily';
import { GroupResponse, groupResponseSchema } from './group';
import { WeatherResponse, weatherResponseSchema } from './weather';

const defaultParams = {
  appid: API_KEY,
  lang: 'en',
  units: 'metric',
};

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

interface Error {
  message: string;
}

async function getFind(query: string): Promise<FindResponse> {
  const { data } = await instance.get<FindResponse>('/find', {
    params: {
      ...defaultParams,
      q: query,
    },
  });

  return findResponseSchema.parse(data);
}

function useFind(query: string): UseQueryResult<FindResponse, Error> {
  return useQuery<FindResponse, Error>({
    queryFn: () => getFind(query),
    queryKey: ['find', query],
    enabled: Boolean(query),
  });
}

async function getGroup(ids: number[]): Promise<GroupResponse> {
  const { data } = await instance.get<GroupResponse>('/group', {
    params: {
      ...defaultParams,
      id: ids.join(','),
    },
  });

  return groupResponseSchema.parse(data);
}

function useGroup(ids: number[]): UseQueryResult<GroupResponse, Error> {
  return useQuery<GroupResponse, Error>({
    queryFn: () => getGroup(ids),
    queryKey: ['group', ids],
  });
}

async function getWeather(id: number): Promise<WeatherResponse> {
  const { data } = await instance.get<WeatherResponse>('/weather', {
    params: {
      ...defaultParams,
      id,
    },
  });

  return weatherResponseSchema.parse(data);
}

function useWeather(id: number): UseQueryResult<WeatherResponse, Error> {
  return useQuery<WeatherResponse, Error>({
    queryFn: () => getWeather(id),
    queryKey: ['weather', id],
  });
}

async function getDailyForecast(id: number): Promise<DailyForecastResponse> {
  const { data } = await instance.get<DailyForecastResponse>('/forecast/daily', {
    params: {
      ...defaultParams,
      id,
    },
  });

  return dailyForecastResponseSchema.parse(data);
}

function useDailyForeCast(id: number): UseQueryResult<DailyForecastResponse, Error> {
  return useQuery<DailyForecastResponse, Error>({
    queryFn: () => getDailyForecast(id),
    queryKey: ['forecast/daily', id],
  });
}

export { useFind, useGroup, useWeather, useDailyForeCast };
