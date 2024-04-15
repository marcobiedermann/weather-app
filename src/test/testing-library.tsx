import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render as rtlRender, renderHook as rtlRenderHook } from '@testing-library/react';

import { Store } from '@reduxjs/toolkit';
import type { i18n as I18n } from 'i18next';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store';
import i18n from './i18n';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

interface ProvidersProps {
  children: ReactNode;
  i18n: I18n;
  queryClient?: QueryClient;
  store: Store;
}

function Providers(props: ProvidersProps) {
  const { store, i18n, queryClient = new QueryClient(), ...otherProps } = props;

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient} {...otherProps} />
      </I18nextProvider>
    </Provider>
  );
}

interface WrapperProps {
  children: ReactNode;
}

function render(ui: ReactNode) {
  function Wrapper(props: WrapperProps) {
    return <Providers store={store} i18n={i18n} queryClient={queryClient} {...props} />;
  }

  return rtlRender(ui, {
    wrapper: Wrapper,
  });
}

function renderWithRouter(ui: ReactNode) {
  function Wrapper(props: WrapperProps) {
    return (
      <Providers store={store} i18n={i18n} queryClient={queryClient}>
        <MemoryRouter {...props} />
      </Providers>
    );
  }

  return rtlRender(ui, {
    wrapper: Wrapper,
  });
}

function renderHook<Result, Props>(ui: (initialProps: Props) => Result) {
  function Wrapper(props: WrapperProps) {
    return <QueryClientProvider client={queryClient} {...props} />;
  }

  return rtlRenderHook(ui, {
    wrapper: Wrapper,
  });
}

export { render, renderHook, renderWithRouter };
