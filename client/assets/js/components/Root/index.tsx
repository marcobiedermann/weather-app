import React, { Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Loader from '../Loader';
import Router from '../Router';
import store, { persistor } from '../../store';

const Root = (props) => {
  const { ...otherProps } = props;

  return (
    <Provider store={store} {...otherProps}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <Router />
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

export default Root;
