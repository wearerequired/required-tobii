/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import './style.css';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Example Block', 'plugin-name' ),
	description: __( 'How to create a block.', 'plugin-name' ),

	deprecated,

	edit,
	save,
};
