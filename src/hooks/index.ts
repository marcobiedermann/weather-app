import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../constants/open-weather-map';
import { FindResponse } from './find';
import { DailyForecastResponse } from './forecast/daily';
import { GroupResponse } from './group';
import { WeatherResponse } from './weather';

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

  return data;
}

function useFind(query: string): UseQueryResult<FindResponse, Error> {
  return useQuery<FindResponse, Error>({
    queryFn: () => getFind(query),
    queryKey: ['find', query],
  });
}

async function getGroup(ids: number[]) {
  const { data } = await instance.get<GroupResponse>('/group', {
    params: {
      ...defaultParams,
      id: ids.join(','),
    },
  });

  return data;
}

function useGroup(ids: number[]) {
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

  return data;
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

  return data;
}

function useDailyForeCast(id: number): UseQueryResult<DailyForecastResponse, Error> {
  return useQuery<DailyForecastResponse, Error>({
    queryFn: () => getDailyForecast(id),
    queryKey: ['forecast/daily', id],
  });
}

export { useFind, useGroup, useWeather, useDailyForeCast };
