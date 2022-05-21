import { parse, stringify } from 'qs';
import React, { Suspense } from 'react';
import { SWRConfig } from 'swr';
import { API_BASE, API_KEY } from '../../constants/open-weather-map';
import Loader from '../Loader';
import Providers from '../Providers';
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

function Root(): JSX.Element {
  return (
    <Providers>
      <Suspense fallback={<Loader />}>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <Router />
        </SWRConfig>
      </Suspense>
    </Providers>
  );
}

export default Root;
