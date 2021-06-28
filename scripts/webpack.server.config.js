const { merge } = require('webpack-merge');
const appConfig = require('./webpack.config');

let serverAppConfig = merge(appConfig, {
  devServer: {
    // eslint-disable-next-line
    contentBase: __dirname,
    // publicPath: '/dist',
    port: 8088,
    historyApiFallback: true,
    hot: true,
  },
});

module.exports = serverAppConfig;
