// path是node里面的模块  不需要再按照
var path = require('path');
// 自动生成HTML文件  需要先安装
var HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
    //入口起点告诉 webpack 从哪里开始,app 第一个启动文件
    entry:{
        'main': path.resolve(__dirname, 'src/js/main.js'),
    },
    // 告诉 webpack 在哪里打包应用程序  output 属性描述了如何处理归拢在一起的代码
    output: {
        path: path.resolve(__dirname, 'dist/'),

        filename: '[name].bundle.js',
    },
    // webpack 只识别JavaScript webpack loader 会将这些文件转换为模块
    module: {
        loaders: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            // query: {
            //     presets: ['es2015','react']
            // }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }
            ,{
                test:/\.(jpg|png|gif|svg)$/i,
                loader:"file-loader"
            },{
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },{
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }

        ]
    },
    // 自定义一些常用的功能
    plugins:[
        new HtmlWebpackPlugin({         //该插件没安装可能会影响实时刷新效果
            template: "./index.html",
            hash: true,
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        })

    ]

}

module.exports = config;