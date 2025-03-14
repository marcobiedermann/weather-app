import type { Store } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import type { RouterProviderProps } from 'react-router';
import { RouterProvider } from 'react-router';
import type { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

type Router = RouterProviderProps['router'];

interface ProvidersProps {
  persistor: Persistor;
  queryClient?: QueryClient;
  store: Store;
  router: Router;
}

function Providers(props: ProvidersProps): JSX.Element {
  const { persistor, queryClient = new QueryClient(), router, store } = props;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export type { ProvidersProps };
export default Providers;
