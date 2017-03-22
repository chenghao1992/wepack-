var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');
var CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = function(env){
    return{
        entry:{
            'main': path.resolve(__dirname, 'src/js/main.js'),
            'vendors':'react',
        },
        output: {
            path: path.resolve(__dirname, 'build/'),
            filename: '[hash].[name].js',
        },
        module: {
            loaders: [ {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include:[path.resolve(__dirname,'src')],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react','stage-0','stage-1','stage-2','stage-3']
                }
            },
                //分离出并压缩css文件需要和下面的ExtractTextPlugin配合使用 同时给css属性加私有前缀  这段配置很复杂
                {
                    test: /\.css$/,
                    include:[path.resolve(__dirname,'src')],
                    loader:ExtractTextPlugin.extract({
                        fallback:"style-loader",
                        use:[{
                            loader:"css-loader",
                            options: {minimize: true}
                        },{
                            loader:"postcss-loader",        //给css属性加私有前缀
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')({broswers:['last 5 versions']})
                                    ];
                                }
                            }
                        }]
                    }),
                },
                {
                test:/\.(jpg|png|gif|svg)$/i,
                loader:"file-loader"
            },{
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }]
        },
        devtool:'cheap-module-source-map',
        plugins:[
            new HtmlWebpackPlugin({         //该插件没安装可能会影响实时刷新效果
                template: "./index.html",
                hash: true,
                minify: { //压缩HTML文件
                    removeComments: true, //移除HTML中的注释
                    collapseWhitespace: false,//删除空白符与换行符
                    removeAttributeQuotes: true
                }
            }),
            new CleanWebpackPlugin(['build']),   //用于在building之前删除你以前build过的文件
            // 分离第三方应用插件,name属性会自动指向entry中vendros属性，filename属性中的文件会自动构建到output中的path属性下面
            new webpack.optimize.CommonsChunkPlugin({name: 'commons', filename: 'commons.js'}),
            // 可以新建多个抽离样式的文件，这样就可以有多个css文件了。
            new ExtractTextPlugin({
                filename: "style.css",
                disable: false,
                allChunks: true
            }),
            new webpack.DefinePlugin({
                //去掉react中的警告，react会自己判断
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.LoaderOptionsPlugin({ //它的用途是帮助人们从 webpack 1 迁移至 webpack 2  为了兼容旧的 loaders，loaders 可以通过插件来切换到压缩模式
                minimize: true,
                debug: false,
                options: {
                    context: __dirname
                }
            }),
            new webpack.optimize.UglifyJsPlugin({  //webpack 1 和 webpack 2写法不一样  压缩js文件
                compress: {
                    warnings: true,
                }
            }),
            // new webpack.HotModuleReplacementPlugin(),

        ]

    }

}
