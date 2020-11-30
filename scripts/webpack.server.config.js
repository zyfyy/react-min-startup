/* eslint-disable no-undef */

const webpack = require('webpack');
const appConfig = require('./webpack.config').appConfig;

const mode = 'development';

let serverAppConfig = Object.assign({}, appConfig, {
  mode,
  entry: ['./src/index.tsx'],
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
});

serverAppConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.BannerPlugin({
    banner: 'no copyright!',
  }),
);

module.exports = serverAppConfig;
