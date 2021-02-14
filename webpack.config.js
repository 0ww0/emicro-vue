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
        'js/auth/register/index': './src/pages/auth/register/index/index.js',
        'js/auth/register/setup': './src/pages/auth/register/setup/index.js',
        'js/legal/policy': './src/pages/legal/policy/index.js',
        'js/legal/service': './src/pages/legal/service/index.js',
        'js/account/index': './src/pages/app/account/index/index.js',
        'js/dashboard/index': './src/pages/app/dashboard/index/index.js',
        'js/dashboard/disclosure': './src/pages/app/dashboard/disclosure/index.js',
        'js/dashboard/apply/index': './src/pages/app/dashboard/apply/index/index.js',
        'js/dashboard/apply/form/basic': './src/pages/app/dashboard/apply/form/basic/index.js',
        'js/dashboard/apply/form/social': './src/pages/app/dashboard/apply/form/social/index.js',
        'js/dashboard/apply/form/identity': './src/pages/app/dashboard/apply/form/identity/index.js',
        'js/dashboard/apply/form/other': './src/pages/app/dashboard/apply/form/other/index.js',
        'js/howto/index': './src/pages/app/howto/index/index.js',
        'js/loan/index': './src/pages/app/loan/index/index.js',
        'js/loan/agreement': './src/pages/app/loan/agreement/index.js',
        'js/loan/notice': './src/pages/app/loan/notice/index.js',
        'js/loan/signature': './src/pages/app/loan/signature/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
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