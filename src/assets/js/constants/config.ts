interface Config {
  environment: string;
}

const config: Config = {
  environment: process.env.NODE_ENV || 'development',
};

export default config;
