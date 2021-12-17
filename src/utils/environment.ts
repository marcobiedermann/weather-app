import config from '../constants/config';

function isDevelopment(): boolean {
  return config.environment === 'development';
}

function isProduction(): boolean {
  return config.environment === 'production';
}

export { isDevelopment, isProduction };
