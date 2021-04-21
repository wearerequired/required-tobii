const path = require( 'path' );
const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config' );

module.exports = {
	// https://github.com/WordPress/gutenberg/blob/master/packages/scripts/config/webpack.config.js
	...defaultConfig,

	context: path.resolve( __dirname, 'assets/js/src' ),

	// https://webpack.js.org/configuration/entry-context/#entry
	entry: {
		integration: './',
	},

	// https://webpack.js.org/configuration/output/
	output: {
		...defaultConfig.output,
		path: path.resolve( __dirname, 'assets/js/dist' ),
		filename: '[name].js',
		jsonpFunction: 'requiredTobiiWebpackJsonp',
	},

	// https://webpack.js.org/configuration/plugins/
	plugins: [
		...defaultConfig.plugins.map( ( plugin ) => {
			if ( plugin.constructor.name === 'DependencyExtractionWebpackPlugin' ) {
				plugin.options.injectPolyfill = false;
			}

			return plugin;
		} ),
	],
};
