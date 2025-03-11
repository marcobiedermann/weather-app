import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render as rtlRender, renderHook as rtlRenderHook } from '@testing-library/react';

import type { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import store from '../store';
import i18n from './i18n';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

interface WrapperProps {
  children: ReactNode;
}

function render(ui: ReactNode) {
  function Wrapper(props: WrapperProps) {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient} {...props} />
        </I18nextProvider>
      </Provider>
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

export { render, renderHook };
