/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = webpackMerge(baseConfig, {
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
    }),
  ],
});
