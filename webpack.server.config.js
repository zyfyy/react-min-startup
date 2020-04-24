/* eslint-disable no-undef */

const path = require('path');
const webpack = require('webpack');
const appConfig = require('./webpack.config').appConfig;

const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = 'development';

let serverAppConfig = Object.assign({}, appConfig, {
  mode,
  entry: ['./src/index.js'],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    contentBase: __dirname,
    // publicPath: '/dist',
    port: 8088,
    historyApiFallback: true,
    hot: true,
  },
  devtool: '#source-map',
});

serverAppConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    title: 'mini react startup',
    meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
    template: './public/index.html',
  }),
  new webpack.BannerPlugin({
    banner: 'no copyright!',
  }),
);

module.exports = serverAppConfig;
