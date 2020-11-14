/* eslint-disable @typescript-eslint/no-var-requires */

const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: {
    main: [path.resolve(__dirname, './src/assets/js/index')],
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, './dist'),
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
  plugins: [new Dotenv()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
