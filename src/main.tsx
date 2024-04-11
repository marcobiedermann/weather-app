import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './components/Root';
import { isDevelopment } from './constants/config';
import './i18n';

async function enableMocking() {
  if (!isDevelopment) {
    return;
  }

  const { worker } = await import('./__mocks__/browser');

  return worker.start();
}

enableMocking().then(() =>
  createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <Root />
    </StrictMode>,
  ),
);
