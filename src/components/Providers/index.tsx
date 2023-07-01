import { Store } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { i18n } from 'i18next';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { RouterProvider, RouterProviderProps } from 'react-router-dom';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from '../Loader';

type Router = RouterProviderProps['router'];

interface ProvidersProps {
  i18n: i18n;
  persistor: Persistor;
  queryClient?: QueryClient;
  store: Store;
  router: Router;
}

function Providers(props: ProvidersProps): JSX.Element {
  const { i18n, persistor, queryClient = new QueryClient(), router, store } = props;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loader />}>
              <RouterProvider router={router} />
            </Suspense>
          </QueryClientProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

export type { ProvidersProps };
export default Providers;
