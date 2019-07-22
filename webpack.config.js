const path = require('path');
const webpack = require('webpack');
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
    },
}

let dev = Object.assign({
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hot: true
    }
}, commonConfig);


let prod = Object.assign({
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin()],
    }
}, commonConfig);

console.log('webpack:', process.env.NODE_ENV);
module.exports = process.env.NODE_ENV === 'production' ? prod : dev;
