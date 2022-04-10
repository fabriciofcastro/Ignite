const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const IsDevelopment =  process.env.NODE_ENV !== 'production';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    
    mode: IsDevelopment ? 'development' : 'production',
    devtool: IsDevelopment ? 'eval-source-map': 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
    },

    plugins: [
        IsDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        static: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude:/node_modules/,
                use: { 
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            IsDevelopment && require.resolve('react-refresh/babel')
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude:/node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    }
}