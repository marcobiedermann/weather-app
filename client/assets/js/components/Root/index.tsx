import { parse, stringify } from 'qs';
import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SWRConfig } from 'swr';
import { API_BASE, API_KEY } from '../../constants/open-weather-map';
import store, { persistor } from '../../store';
import Loader from '../Loader';
import Router from '../Router';

async function fetcher(url: string) {
  const [path, params] = url.split('?');
  const parsedUrl = parse(params);
  const defaultParams = {
    appid: API_KEY,
    lang: 'en',
    units: 'metric',
  };
  const query = stringify({
    ...defaultParams,
    ...parsedUrl,
  });
  const response = await fetch(`${API_BASE}${path}?${query}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

const Root: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <SWRConfig
            value={{
              fetcher,
            }}
          >
            <Router />
          </SWRConfig>
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

export default Root;
