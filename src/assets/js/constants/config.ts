import { name, version } from '../../../../package.json';

interface Config {
  environment: string;
  name: string;
  version: string;
}

const config: Config = {
  environment: process.env.NODE_ENV || 'development',
  name,
  version,
};

export default config;
