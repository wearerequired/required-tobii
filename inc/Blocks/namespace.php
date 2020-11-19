<?php
/**
 * Blocks namespaced functions.
 */

namespace Required\Tobii\Blocks;

use const Required\Tobii\PLUGIN_DIR;
use const Required\Tobii\PLUGIN_FILE;

/**
 * Inits plugin.
 */
function bootstrap(): void {
	add_action( 'init', __NAMESPACE__ . '\register_assets' );
	add_action( 'init', __NAMESPACE__ . '\register_block_types' );
}

/**
 * Registers scripts and styles used by blocks.
 */
function register_assets() {
	$blocks_script_asset = require PLUGIN_DIR . '/assets/js/dist/blocks.asset.php';

	wp_register_script(
		'required-tobii-blocks-editor',
		plugins_url( 'assets/js/dist/blocks.js', PLUGIN_FILE ),
		$blocks_script_asset['dependencies'],
		$blocks_script_asset['version'],
		true
	);

	wp_set_script_translations( 'required-tobii-blocks-editor', 'required-tobii' );

	wp_register_style(
		'required-tobii-blocks-editor',
		plugins_url( 'assets/js/dist/blocks.css', PLUGIN_FILE ),
		[],
		filemtime( PLUGIN_DIR . '/assets/js/dist/blocks.css' )
	);

	wp_register_style(
		'required-tobii-blocks-style',
		plugins_url( 'assets/js/dist/style-blocks.css', PLUGIN_FILE ),
		[],
		filemtime( PLUGIN_DIR . '/assets/js/dist/style-blocks.css' )
	);
}

/**
 * Registers block types
 */
function register_block_types() {
}
