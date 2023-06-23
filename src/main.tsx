import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './components/Root';
import { isDevelopment } from './constants/config';
import './i18n';

if (isDevelopment) {
  import('./__mocks__/browser').then(({ worker }) => worker.start());
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
