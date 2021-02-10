const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'js/main': './src/main.js',
        'js/auth/login': './src/pages/auth/login/index.js',
        'js/auth/forgot': './src/pages/auth/forgot/index.js',
        'js/legal/policy': './src/pages/legal/policy/index.js',
        'js/legal/service': './src/pages/legal/service/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'assets/[name][ext]'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'template'),
        open: true,
        compress: true,
        hot: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test : /\.scss$/,
                use : [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/image/[name][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/font/[name][ext]'
                }
            },
        ]
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
        modules: ['node_modules'],
        extensions: ["*", ".js", ".vue", ".json", ".scss"]
    },
    plugins: [ 
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
    ]
}