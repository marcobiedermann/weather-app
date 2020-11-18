import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import config from './constants/config';
import './i18n';

Sentry.init({
  dsn: 'https://01859cefc3b84a959394e2f2972a2a74@o81678.ingest.sentry.io/5517125',
  environment: config.environment,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

render(<Root />, document.getElementById('root'));
