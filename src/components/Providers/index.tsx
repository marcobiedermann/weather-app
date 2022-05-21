import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

interface ProvidersProps {
  children: ReactNode;
}

function Providers(props: ProvidersProps): JSX.Element {
  return <Provider store={store} {...props} />;
}

export type { ProvidersProps };
export default Providers;
