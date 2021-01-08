import { name, version } from '../../../../package.json';

const { NODE_ENV } = process.env;

interface Config {
  environment: string;
  name: string;
  version: string;
}

const config: Config = {
  environment: NODE_ENV || 'development',
  name,
  version,
};

export default config;
