<?php
/**
 * Namespaced functions.
 */

namespace Required\Tobii;

use DOMDocument;
use DOMXPath;
use function Required\Traduttore_Registry\add_project;

/**
 * List of supported image file extensions.
 */
const SUPPORTED_IMAGE_EXTENSIONS = 'png|jpg|jpeg|gif|webp';


/**
 * Inits plugin.
 */
function bootstrap(): void {
	add_action( 'init', __NAMESPACE__ . '\register_translations_project' );
	add_action( 'init', __NAMESPACE__ . '\register_scripts' );

	add_filter( 'the_content', __NAMESPACE__ . '\enable_lightbox_for_images', 99 );
}

/**
 * Registers Traduttore  project for translations.
 */
function register_translations_project() {
	add_project(
		'plugin',
		'required-tobii',
		'https://translate.required.com/api/translations/required-tobii/'
	);
}

/**
 * Registers scripts and styles
 */
function register_scripts() {
	$script_asset = require PLUGIN_DIR . '/assets/js/dist/integration.asset.php';

	wp_register_script(
		'required-tobii-integration',
		plugins_url( 'assets/js/dist/integration.js', PLUGIN_FILE ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	wp_register_style(
		'required-tobii-integration',
		plugins_url( 'assets/js/dist/style-integration.css', PLUGIN_FILE ),
		[],
		$script_asset['version']
	);
}


/**
 * Adds the `data-lightbox` attribute to linked images.
 *
 * @param string $content Post content.
 * @return string Post content.
 */
function enable_lightbox_for_images( $content ) {
	// phpcs:disable WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase

	$document                     = new DOMDocument();
	$document->resolveExternals   = false;
	$document->substituteEntities = false;

	$libxml_use_internal_errors = libxml_use_internal_errors( true );
	$document_loaded            = $document->loadHTML(
		sprintf(
			'<?xml encoding="utf-8"?>%s',
			$content
		),
		LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD
	);
	libxml_clear_errors();
	libxml_use_internal_errors( $libxml_use_internal_errors );

	if ( ! $document_loaded ) {
		return $content;
	}

	$xpath = new DOMXPath( $document );

	$lightboxes = 0;

	// Gallery markup from Classic Editor.
	$galleries = $xpath->query( '//div[ contains( concat( " ", normalize-space( @class ), " "), " gallery " ) ][.//a]' );
	foreach ( $galleries as $gallery ) {
		$gallery_id = wp_unique_id( 'gallery-' );
		$links      = $xpath->query( './/a', $gallery );
		if ( ! $links ) {
			continue;
		}

		foreach ( $links as $link ) {
			if ( ! preg_match( '#\.(' . SUPPORTED_IMAGE_EXTENSIONS . ')$#i', $link->getAttribute( 'href' ) ) ) {
				continue;
			}

			$lightboxes++;
			$link->setAttribute( 'data-lightbox', 'gallery' );
			$link->setAttribute( 'data-group', $gallery_id );
		}
	}

	// Gallery markup from block editor.
	$galleries = $xpath->query( '//figure[ contains( concat( " ", normalize-space( @class ), " "), " wp-block-gallery " ) ][.//a]' );
	foreach ( $galleries as $gallery ) {
		$gallery_id = wp_unique_id( 'gallery-' );
		$links      = $xpath->query( './/a', $gallery );
		if ( ! $links ) {
			continue;
		}

		foreach ( $links as $link ) {
			if ( ! preg_match( '#\.(' . SUPPORTED_IMAGE_EXTENSIONS . ')$#i', $link->getAttribute( 'href' ) ) ) {
				continue;
			}

			$lightboxes++;
			$link->setAttribute( 'data-lightbox', 'gallery' );
			$link->setAttribute( 'data-group', $gallery_id );
		}
	}

	// Any other linked images.
	$links = $xpath->query( '//a[@href][ not( @data-lightbox ) ][.//img]' );
	foreach ( $links as $link ) {
		if ( ! preg_match( '#\.(' . SUPPORTED_IMAGE_EXTENSIONS . ')$#i', $link->getAttribute( 'href' ) ) ) {
			continue;
		}

		$image_id = wp_unique_id( 'image-' );

		$lightboxes++;
		$link->setAttribute( 'data-lightbox', 'image' );
		$link->setAttribute( 'data-group', $image_id );
	}

	// Strip the XML tag as it's only used for the internal encoding.
	$document_html = trim( str_replace( '<?xml encoding="utf-8"?>', '', (string) $document->saveHTML() ) );
	if ( $document_html ) {
		$content = $document_html;
	}

	// phpcs:enable WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase

	if ( $lightboxes > 0 && ! wp_script_is( 'wp_enqueue_script' ) ) {
		wp_enqueue_script( 'required-tobii-integration' );
		wp_enqueue_style( 'required-tobii-integration' );
	}

	return $content;
}
