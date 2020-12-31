import Dotenv from 'dotenv-webpack';
import { resolve } from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: {
    main: [resolve(__dirname, './src/assets/js/index')],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    filename: 'assets/js/[name].js',
    path: resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

export default config;
