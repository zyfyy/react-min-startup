/* eslint-disable no-undef */

const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

// let vendorConfig = {
//   name: 'vendor',
//   mode,
//   entry: {
//     react: ['./node_modules/react/index'],
//     reactdom: ['./node_modules/react-dom/index'],
//     reactredux: ['./node_modules/react-redux/es/index'],
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist/dll'),
//     filename: '[name]_dll.js',
//     library: '[name]_dll',
//   },
//   plugins: [
//     // new webpack.DllReferencePlugin({
//     //   manifest: path.resolve(__dirname, 'dist/dll/react.manifest.json'),
//     // }),
//     // new webpack.DllReferencePlugin({
//     //   manifest: path.resolve(__dirname, 'dist/dll/reactdom.manifest.json'),
//     // }),
//     // new webpack.DllReferencePlugin({
//     //   manifest: path.resolve(__dirname, 'dist/dll/reactredux.manifest.json'),
//     // }),
//     new webpack.DllPlugin({
//       name: '[name]_dll',
//       path: path.resolve(__dirname, 'dist/dll/[name].manifest.json'),
//     }),
//   ],
// };

let appConfig = {
  name: 'app',
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.temp_cache'),
  },
  mode,
  dependencies: ['vendor'],
  entry: {
    main: './src/index.tsx',
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
        test:  /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /src\/index\.(tsx)$/,
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
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/',
    filename: '[name].js',
  },
  optimization: {
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'mini react startup',
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      TWO: '1+1',
      'typeof window': JSON.stringify('object'),
    }),
  ],
};

if (mode === 'production') {
  appConfig.plugins.push(
    new webpack.ids.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
    new TerserPlugin(),
  );
}

let wpConf = [appConfig];

module.exports = wpConf;
module.exports.appConfig = appConfig;
