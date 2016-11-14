const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * Set `dev` as the default environment.
 * Set it to a new variable, don't mutate node's process object
 */
let env = 'dev';
if (process.env.NODE_ENV) {
	env = process.env.NODE_ENV;
}

/*
 * Modify this object if you want to change your file / folder naming scheme
 */
const pathLocations = {
	entryFile: 'root.js',
	indexTemplate: 'index.html',
	mediaFolder: 'media',
	source: path.resolve('source'),
	build: path.resolve('build')
};

/*
 * Instantiate the HtmlWebpackPlugin object so webpack will inject our processed files
 * into an .ejs template, which will then become our index.html
 */
const htmlInject = new HtmlWebpackPlugin({
	template: pathLocations.source + '/' + pathLocations.indexTemplate,
	inject: 'body',
	/*
	 * If we are in dev mode, add a hash to the end of the included files to prevent the browser
	 * from caching them
	 */
	hash: env === 'dev'
});

/*
 * Composable configuration objects
 */
const composableConfig = {
	entry: [ pathLocations.source + '/' + pathLocations.entryFile ],
	output: {
		filename: '[name].js',
		path: pathLocations.build
	},
	module: {
		loaders: [
			/*
			 * Javascript files loaders, transpiled through babel
			 */
			{
				/*
				 * Babel presets not declared here, as it will search the root folder for .babelrc
				 * and load them from there.
				 */
				test: /\.js$/,
				loader: 'babel',
				include: pathLocations.source
			},
			/*
			 * Stylesheet loaders for using SCSS and CSS Modules
			 */
			{
				test: /\.(scss|css)$/,
				loader:
					/*
					 * Not really a fan of this style of chaining.
					 * Has to be a better way.
					 */
					'style' + '!' +
					'css' + '?' +
						'sourceMap' + '&' +
					'postcss' + '!' +
					'resolve-url' + '!' +
					'sass' + '?' +
						'outputStyle=expanded' + '&' +
						'sourceMap',
				include: pathLocations.source
			},
			/*
			 * File loader, so webpack will know what to do with images.
			 * Also image loader, so our images will come out optimized and smaller in size.
			 */
			{
				test: /\.(jpe?g|png|gif|svgz?)(?:\?.*|)$/,
				loaders: [
					'file' + '?' +
						'limit=4096' + '&' +
						'name=' + pathLocations.mediaFolder + '/[name].[ext]'
				],
				include: pathLocations.source
			},
			/*
			 * File loader, so webpack will know what to do with fonts
			 */
			{
				test: /\.(ttf|woff2?|eot|svg)(?:\?.*|)$/,
				loader: 'file' + '?' +
					'name=' + pathLocations.fontsFolder + '/[name].[ext]',
				include: pathLocations.source
			}
		]
	},
	postcss: [ autoprefixer ],
	plugins: [ htmlInject ],
	devtool: 'source-map',
	devServer: {
		host: 'localhost',
		hot: true,
		inline: true,
		port: 8080,
		historyApiFallback: true,
		stats: {
			chunkModules: false,
			colors: true
		},
		contentBase: pathLocations.build
	}
};

/*
 * We have to do this inside a function / iife to avoid global naming conflict for `module`
 */
module.exports = ((configObject, environment) => {
	const {
		entry,
		output,
		module,
		plugins,
		postcss,
		devtool,
		devServer
	} = configObject;
	/*
	 * Testing configuration.
	 * Don't input/output nothing, just using webpack for preprocessing / bundling / requiring
	 */
	if (environment === 'test') {
		return {}
	}
	/*
	 * Development configuration (Default)
	 */
	return {
		entry,
		output,
		module,
		plugins,
		postcss,
		devtool,
		devServer
	}
})(composableConfig, env)
