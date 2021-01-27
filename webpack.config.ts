import Dotenv from 'dotenv-webpack';
import { resolve } from 'path';
import { Configuration } from 'webpack';

export const paths = {
  dist: resolve(__dirname, 'dist'),
  public: resolve(__dirname, 'public'),
  src: resolve(__dirname, 'src'),
};

const config: Configuration = {
  entry: {
    main: [`${paths.src}/assets/js/index`],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    filename: 'assets/js/[name].js',
    path: paths.dist,
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
