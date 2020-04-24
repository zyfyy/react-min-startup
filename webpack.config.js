/* eslint-disable no-undef */

const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

let vendorConfig = {
  name: 'vendor',
  mode,
  entry: {
    react: ['./node_modules/react/index'],
    reactdom: ['./node_modules/react-dom/index'],
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
  entry: {
    main: './src/index.js',
    react: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router',
      'redux-thunk',
    ],
  },
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
    // publicPath: '/dist/',
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, 'dist/dll/react.manifest.json'),
    // }),
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, 'dist/dll/reactdom.manifest.json'),
    // }),
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, 'dist/dll/reactredux.manifest.json'),
    // }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      TWO: '1+1',
      'typeof window': JSON.stringify('object'),
    }),
  ],
};

if (mode === 'production') {
  console.log('build production');
  appConfig.plugins.push(
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
    new TerserPlugin(),
  );
}

let wpConf = [vendorConfig, appConfig];

module.exports = wpConf;
module.exports.appConfig = appConfig;
