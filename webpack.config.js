const path = require('path')
const {	VueLoaderPlugin} = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env = {}) => ({
	mode: env.prod ? 'production' : 'development',
	devtool: env.prod ? 'source-map' : 'cheap-module-eval-source-map',
	entry: path.resolve(__dirname, './src/main.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/'
	},
	resolve: {
		alias: {
			// this isn't technically needed, since the default `vue` entry for bundlers
			// is a simple `export * from '@vue/runtime-dom`. However having this
			// extra re-export somehow causes webpack to always invalidate the module
			// on the first HMR update and causes the page to reload.
			'vue': '@vue/runtime-dom'
		},
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.png$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}
			},
			// JavaScript: Use Babel to transpile JavaScript files
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: !env.prod
						}
					},
					'css-loader'
				]
			},
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader', // inject CSS to page
					// options: {
					// 	sourceMap: true,
					// 	//importLoaders: 1
					// }
				}, {
					loader: 'css-loader', // translates CSS into CommonJS modules
					// options: {
					// 	sourceMap: true
					// }
				}, {
					loader: 'sass-loader', // compiles Sass to CSS
					// options: {
					// 	sourceMap: true
					// }
				}]
			},
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: "[id].css"
		}),
		new HtmlWebpackPlugin({
			title: 'webpack',
			//favicon: '/favicon.png',
			template: './src/index.html', // template file
			filename: 'index.html', // output file
		})
	],
	devServer: {
		inline: true,
		hot: true,
		port: 5001,
		stats: 'minimal',
		contentBase: path.join(__dirname, "dist"),
		overlay: true
	}
})
