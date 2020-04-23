/* eslint-disable no-undef */

const path = require('path');
const webpack = require('webpack');
const appConfig = require('./webpack.config').appConfig;

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
    publicPath: '/',
    contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')],
    port: 8088,
    historyApiFallback: true,
    hot: true,
  },
  devtool: '#source-map',
});

serverAppConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

console.log('node', process.env.NODE_ENV);

module.exports = serverAppConfig;
