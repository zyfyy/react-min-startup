/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

let commonConfig = {
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
};

// hotload 使用babel的插件 react-hot-loader/babel
let dev = Object.assign(
  {
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, 'public/'),
      publicPath: '/dist/',
      port: 8080,
      host: 'react-min-app.local',
      historyApiFallback: true,
      hot: true,
    },
    devtool: '#source-map',
  },
  commonConfig,
);

// hotload 使用webpack的Hotmodule plugin
let devServer = Object.assign({}, dev, {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index.js',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});

let prod = Object.assign(
  {
    mode: 'production',
    optimization: {
      minimizer: [new TerserPlugin()],
    },
  },
  commonConfig,
);

// eslint-disable-next-line no-console
console.log('webpack:', process.env.NODE_ENV);
module.exports =
  process.env.NODE_ENV === 'production'
    ? prod
    : process.env.NODE_ENV === 'development' ? dev : devServer;
