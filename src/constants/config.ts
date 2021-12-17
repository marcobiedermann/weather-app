import { name, version } from '../../package.json';

interface Config {
  environment: string;
  name: string;
  version: string;
}

const config: Config = {
  environment: import.meta.env.MODE || 'development',
  name,
  version,
};

export default config;
