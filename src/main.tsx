import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import './i18n';
import { worker } from './mocks/browser';

if (import.meta.env.DEV) {
  worker.start();
}

render(<Root />, document.getElementById('root'));
