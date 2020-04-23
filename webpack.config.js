const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FlowtypePlugin = require('flowtype-loader/plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '*', '.mjs', '.js', '.vue', '.json', '.gql', '.graphql', '.css', '.flow']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js?$/,
                loader: 'flowtype-loader',
                enforce: 'pre',
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ContextReplacementPlugin(
            /graphql-language-service-interface[\\/]dist$/,
            new RegExp(`^\\./.*\\.js$`)
        ),
        new FlowtypePlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        port: process.env.PORT || 9000,
        host: '0.0.0.0',
        disableHostCheck: true
    },
    output: {
        publicPath: '/',
    },
    externals: {
        // global app config object
        config: JSON.stringify({})
    },
};
