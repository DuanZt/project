const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
	entry: ['./src/js/index.js', "./src/scss/index.scss", "./src/css/index.css"], //入口文件
	output: {
		filename: 'bundle.js', //输出文件
		path: __dirname + '/build' //输出目录
	},
	devtool: 'inline-source-map',
	watch: true, //开启文件监听
	watchOptions: {
		ignored: ['src/fonts/*', 'node_modules']
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
		new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "style.css",
    }) //将css文件打包到style.css
	],
};

module.exports = config;