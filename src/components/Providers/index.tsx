import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Loader from '../Loader';

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}

function Providers(props: ProvidersProps): JSX.Element {
  const { children } = props;

  return (
    <Provider store={store} {...props}>
      <Suspense fallback={<Loader />}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </Suspense>
    </Provider>
  );
}

export type { ProvidersProps };
export default Providers;
