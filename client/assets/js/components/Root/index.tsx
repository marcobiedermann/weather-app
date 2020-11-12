import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../../store';
import Loader from '../Loader';
import Router from '../Router';

const Root: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <Router />
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

export default Root;
