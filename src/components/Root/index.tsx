import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../store';
import Loader from '../Loader';
import Providers from '../Providers';
import Router from '../Router';

const queryClient = new QueryClient();

function Root(): JSX.Element {
  return (
    <Providers>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </Suspense>
      </PersistGate>
    </Providers>
  );
}

export default Root;
