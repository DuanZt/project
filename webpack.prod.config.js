const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require('webpack');


const config = {
  entry: ['./src/index.js'], //入口文件
  output: {
    filename: 'all.js', //输出文件
    path: __dirname + '/dist' //输出目录
  },
  node: {
    fs: 'empty'
  },
  devtool: false,
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
        test: /\.(c|sa|sc)ss$/, //处理css文件
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },

      {
        test: /\.js$/,
        loader: "babel-loader"
      }, //处理js文件
      {
        test: /font.*\.(png|woff|woff2|eot|ttf|svg)$/, //匹配包含font的路徑
        loader: 'file-loader', //处理字体文件
        options: {
          name: 'fonts/[name].[ext]' //打包到fonts文件夹
        }
      },
      {
        test: /images.*\.(gif|png|jpe?g|svg)$/,
        loader: 'file-loader', //处理图片文件
        options: {
          name: 'images/[name].[ext]' //打包到images文件夹
        }
      }
    ]
  },
  plugins: [

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "style.css",
    }), //将css文件打包到style.css
  ],
};

module.exports = config;
