import { RenderOptions, render } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from './i18n';
import { Provider } from 'react-redux';
import store from '../store';

interface ProvidersProps {
  children: ReactNode;
}

function Providers(props: ProvidersProps) {
  const { children } = props;

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>{children}</MemoryRouter>
      </I18nextProvider>
    </Provider>
  );
}

function customRender(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, {
    wrapper: Providers,
    ...options,
  });
}

export { customRender as render };
