const express = require('express');
const app = new express();

var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }),
);

app.use(
  require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }),
);

app.listen(8888);
