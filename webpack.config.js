const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);

  return prev;
}, {});

module.exports = {
  entry: {
    main: [
      path.resolve(__dirname, 'client/assets/js/index'),
    ],
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'server/public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
