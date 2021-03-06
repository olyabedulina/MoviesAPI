const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env = {}) => ({
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        useBuiltIns: 'usage',
                                        corejs: 3,
                                        modules: 'auto'
                                    }
                                ],
                                '@babel/preset-react'
                            ],
                            plugins: (plugins => env.dev ? plugins.concat('react-refresh/babel') : plugins)([
                                '@babel/plugin-proposal-class-properties'
                            ])
                        }
                    }
                ],
                include: [
                    path.resolve(__dirname, './src')
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.pcss$/,
                use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[path][name]___[local]___[hash:base64:5]'
                        },
                    }
                },
                'postcss-loader'
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'images',
                        outputPath: 'images',
                        useRelativePath: true,
                        esModule: false,
                    }
                }
                ]
        },
        {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.otf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            use: 'url-loader'
        }
        ]
    },
    plugins: (plugins => env.dev ? plugins.concat([
        new ReactRefreshWebpackPlugin()
    ]) : plugins)([
        new HTMLWebpackPlugin()
    ]),
    devServer: {
        port: 7070
    }
});
