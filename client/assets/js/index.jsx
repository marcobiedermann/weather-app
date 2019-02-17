import '@babel/polyfill';
import * as Sentry from '@sentry/browser';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import './i18n';

Sentry.init({ dsn: 'https://1fbb25d6ca084d6cad465c3054d7618e@sentry.io/1395958' });

render(<Root />, document.getElementById('root'));
