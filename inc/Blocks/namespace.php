<?php
/**
 * Blocks namespaced functions.
 */

namespace Required\PluginName\Blocks;

use const Required\PluginName\PLUGIN_DIR;
use const Required\PluginName\PLUGIN_FILE;

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
		'plugin-name-blocks-editor',
		plugins_url( 'assets/js/dist/blocks.js', PLUGIN_FILE ),
		$blocks_script_asset['dependencies'],
		$blocks_script_asset['version'],
		true
	);

	wp_set_script_translations( 'plugin-name-blocks-editor', 'plugin-name' );

	wp_register_style(
		'plugin-name-blocks-editor',
		plugins_url( 'assets/js/dist/blocks.css', PLUGIN_FILE ),
		[],
		filemtime( PLUGIN_DIR . '/assets/js/dist/blocks.css' )
	);

	wp_register_style(
		'plugin-name-blocks-style',
		plugins_url( 'assets/js/dist/style-blocks.css', PLUGIN_FILE ),
		[],
		filemtime( PLUGIN_DIR . '/assets/js/dist/style-blocks.css' )
	);
}

/**
 * Registers block types
 */
function register_block_types() {
	register_block_type(
		'wearerequired/example',
		[
			'editor_script' => 'plugin-name-blocks-editor',
			'editor_style'  => 'plugin-name-blocks-editor',
			'style'         => 'plugin-name-blocks-style',
		]
	);
}
