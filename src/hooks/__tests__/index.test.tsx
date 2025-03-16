import { waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { useAirPollution, useDailyForecast, useFind, useForecast, useGroup, useWeather } from '..';
import airPollution from '../../__mocks__/__fixtures__/air-pollution/berlin.json';
import find from '../../__mocks__/__fixtures__/find/berlin.json';
import forecast from '../../__mocks__/__fixtures__/forecast/berlin.json';
import dailyForecast from '../../__mocks__/__fixtures__/forecast/daily/berlin.json';
import group from '../../__mocks__/__fixtures__/group.json';
import weather from '../../__mocks__/__fixtures__/weather/berlin.json';
import { server } from '../../__mocks__/server';
import { renderHook } from '../../test/testing-library';

const cityId = 2950159;
const cities = [cityId];

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('hooks/index', () => {
  describe('useAirPollution', () => {
    it('should fetch the air pollution by `location`', async () => {
      const { result } = renderHook(() => useAirPollution({ lon: 13.4105, lat: 52.5244 }));

      await waitFor(() => expect(result.current.data).toStrictEqual(airPollution));
    });
  });

  describe('useDailyForecast', () => {
    it('should fetch the daily forecast by `cityId`', async () => {
      const { result } = renderHook(() => useDailyForecast(cityId));

      await waitFor(() => expect(result.current.data).toStrictEqual(dailyForecast));
    });
  });

  describe('useFind', () => {
    it('should find a city by search query', async () => {
      const { result } = renderHook(() => useFind('Berlin, DE'));

      await waitFor(() => expect(result.current.data).toStrictEqual(find));
    });
  });

  describe('useForecast', () => {
    it('should fetch the forecast by `cityId`', async () => {
      const { result } = renderHook(() => useForecast(cityId));

      await waitFor(() => expect(result.current.data).toStrictEqual(forecast));
    });
  });

  describe('useGroup', () => {
    it('should fetch a group of cities', async () => {
      const { result } = renderHook(() => useGroup(cities));

      await waitFor(() => expect(result.current.data).toStrictEqual(group));
    });
  });

  describe('useWeather', () => {
    it('should fetch the current weather by `cityId`', async () => {
      const { result } = renderHook(() => useWeather(cityId));

      await waitFor(() => expect(result.current.data).toStrictEqual(weather));
    });
  });
});
