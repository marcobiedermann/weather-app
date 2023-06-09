import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, Suspense } from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from '../../store';
import Loader from '../Loader';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}

function Providers(props: ProvidersProps): JSX.Element {
  const { children } = props;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export type { ProvidersProps };
export default Providers;
