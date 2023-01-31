import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import Loader from '../Loader';
import Providers from '../Providers';
import Router from '../Router';

const queryClient = new QueryClient();

function Root(): JSX.Element {
  return (
    <Providers>
      <Suspense fallback={<Loader />}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </Suspense>
    </Providers>
  );
}

export default Root;
