/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

const context = require.context( './blocks', true, /index\.js$/ );

context.keys().forEach( ( modulePath ) => {
	// context() is a function which includes and returns the module.
	const block = context( modulePath );

	const { metadata, settings, name } = block;

	registerBlockType( name, {
		...metadata,
		...settings,
	} );
} );
