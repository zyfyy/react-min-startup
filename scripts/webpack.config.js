/* eslint-disable no-undef */

const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const ConsoleLogOnBuildWebpackPlugin = require('./cus-plugin');


const mode = process.env.NODE_ENV || 'development';
const isDevelopment = mode === 'development';

let appConfig = {
  name: 'app',
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.temp_cache'),
  },
  mode,
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/env',
                  {
                    modules: false,
                  },
                ],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.((c|le)ss)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: { auto: true }, // enable css module
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                  ],
                ],
              },
            },
          },
          {
            loader: 'less-loader',
          },
        ],
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
    filename: '[name].[contenthash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 1024 * 1024,
      minSize: 1024 * 10,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /([/\\]node_modules[/\\]|[/\\]dev[/\\]vendor[/\\])/,
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
    alias: {
      '@': path.join(process.cwd(), 'src'),
    },
  },
  devtool: false,
  plugins: [
    new ConsoleLogOnBuildWebpackPlugin({}),
    new HtmlWebpackPlugin({
      title: 'mini react startup',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      TWO: '1+1',
      THREE: JSON.stringify('object'),
    }),
    new WorkboxPlugin.GenerateSW({
      navigateFallback: '/index.html',
      maximumFileSizeToCacheInBytes:  10 *1024 * 1024,
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
} else {
  appConfig.plugins.push(
    new webpack.SourceMapDevToolPlugin({
      exclude: ['vendor*.js'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({ overlay: false, forceEnable: true }),
    new webpack.BannerPlugin({
      banner: 'no copyright!',
    }),
  );
}

module.exports = appConfig;
