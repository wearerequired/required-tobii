const path = require( 'path' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config' );

module.exports = {
	// https://github.com/WordPress/gutenberg/blob/master/packages/scripts/config/webpack.config.js
	...defaultConfig,

	// https://webpack.js.org/configuration/optimization/
	optimization: {
		...defaultConfig.optimization,
		minimizer: [
			new TerserPlugin( {
				cache: true,
				parallel: true,
				extractComments: false,
				terserOptions: {
					output: {
						comments: false,
					},
				},
			} ),
		],
	},

	context: path.resolve( __dirname, 'assets/js/src' ),

	// https://webpack.js.org/configuration/entry-context/#entry
	entry: {
		integration: './',
	},

	// https://webpack.js.org/configuration/output/
	output: {
		path: path.resolve( __dirname, 'assets/js/dist' ),
		filename: '[name].js',
		jsonpFunction: 'requiredTobiiWebpackJsonp',
	},
};
