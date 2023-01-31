import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './components/Root';
import './i18n';
import { worker } from './mocks/browser';

if (import.meta.env.DEV) {
  worker.start();
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
