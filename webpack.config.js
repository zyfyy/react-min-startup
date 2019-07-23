/* eslint-disable no-undef */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

let commonConfig = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    }
};

let dev = Object.assign({
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        publicPath: '/dist/',
        port: 8080,
        host: 'react-min-app.local',
        historyApiFallback: true,
        hot: true
    }
}, commonConfig);


let prod = Object.assign({
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin()]
    }
}, commonConfig);

// eslint-disable-next-line no-console
console.log('webpack:', process.env.NODE_ENV);
module.exports = process.env.NODE_ENV === 'production' ? prod : dev;
