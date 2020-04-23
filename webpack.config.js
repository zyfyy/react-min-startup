/* eslint-disable no-undef */

const path = require('path');
const webpack = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

let vendorConfig = {
  name: 'vendor',
  mode,
  entry: {
    react: ['./node_modules/react/index'],
    reactredux: ['./node_modules/react-redux/es/index'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/dll'),
    filename: '[name]_dll.js',
    library: '[name]_dll',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll',
      path: path.resolve(__dirname, 'dist/dll/[name].manifest.json'),
    }),
  ],
};

let appConfig = {
  name: 'app',
  mode,
  dependencies: ['vendor'],
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
      {
        test: /src\/index\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: path.resolve('scripts/cus-loader'),
            options: {
              cus: 'cus',
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  plugins: [
  ],
};

let wpConf = [vendorConfig, appConfig];

module.exports = wpConf;
module.exports.appConfig = appConfig;
