const fs = require('fs');

const express = require('express');
const app = new express();

const index = fs.readFileSync('./public/index.html');

app.get('/', (req, res) => {
    res.end(index);
});

app.get('/about', (req, res) => {
    res.end(index);
});

app.get('/topics', (req, res) => {
    res.end(index);
});

var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));


app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.listen(8888);
