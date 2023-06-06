import { renderHook, waitFor } from '@testing-library/react';
import { useFind } from '.';
import Providers from '../components/Providers';
import { server } from '../mocks/server';
import berlin from '../mocks/__fixtures__/find/berlin.json';

jest.mock('../constants/open-weather-map');

describe('hooks/index', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe('useFind', () => {
    it('should', async () => {
      const { result } = renderHook(() => useFind('Berlin, DE'), {
        wrapper: Providers,
      });

      await waitFor(() => expect(result.current.data).toStrictEqual(berlin));
    });
  });
});
