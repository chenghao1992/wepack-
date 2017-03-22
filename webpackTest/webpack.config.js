var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry:{
        'main': path.resolve(__dirname, 'src/js/main.js'),
        vendor:['react','react-dom','react-router']
    },

    output: {
        path: path.resolve(__dirname, 'dist/'),

        filename: '[name].bundle.js',
        // publicPath: '/static/',  //可能会影响实时刷新
    },
    module: {
        rules: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include:[path.resolve(__dirname,'src')],
            loader: 'babel-loader',

            query: {
                presets: ['es2015','react','stage-0','stage-1','stage-2','stage-3']   //stage-0---3支持箭头函数
            }
        },
            {
                test: /\.css$/,
                include:[path.resolve(__dirname,'src')],
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"postcss-loader",        //给css属性加私有前缀
                        options: {
                            plugins: function () {
                                return [
                                    // require('precss'),
                                    require('autoprefixer')({broswers:['last 5 versions']})
                                ];
                            }
                        }
                    }
                ]
            },
            {
            test: /\.less$/,
            include:[path.resolve(__dirname,'src')],
            use:[
                {
                    loader: "style-loader"
                },
                {
                    loader:"css-loader"
                },
                {
                    loader:"postcss-loader",        //给css属性加私有前缀
                    options: {
                        plugins: function () {
                            return [
                                // require('precss'),
                                require('autoprefixer')({broswers:['last 5 versions']})
                            ];
                        }
                    }
                },
                {
                    loader: "less-loader"
                }
                ]
        },
        {
            test:/\.(jpg|png|gif|svg)$/i,
            loader:"file-loader"
        },{
            test: /\.(eot|woff|ttf|woff2|svg)$/,
            loader: 'url-loader?limit=30000'             //30k以内
        }
            ]
    },
    devtool: "cheap-module-eval-source-map",
    plugins:[
        new HtmlWebpackPlugin({         //该插件没安装可能会影响实时刷新效果
            template: "./index.html",
            hash: true,
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        // new webpack.HotModuleReplacementPlugin(),         //这个组件也影响实时更新  但是加上去会报错
        new webpack.LoaderOptionsPlugin({ //它的用途是帮助人们从 webpack 1 迁移至 webpack 2  为了兼容旧的 loaders，loaders 可以通过插件来切换到压缩模式
            minimize: true,
            debug: false,
            options: {
                context: __dirname
            }
        }),
        new ExtractTextPlugin({
            filename: "style.css",
            disable: false,
            allChunks: true
        }),
    ]

}

module.exports = config;