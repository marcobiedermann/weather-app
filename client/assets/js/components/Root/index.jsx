import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Router from '../Router';
import store, { persistor } from '../../store';

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);

export default Root;
