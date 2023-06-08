import { name, version } from '../../package.json';

interface Config {
  name: string;
  version: string;
}

const config: Config = {
  name,
  version,
};

const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

export { isDevelopment, isProduction };
export default config;
