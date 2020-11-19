<?php
/**
 * Namespaced functions.
 */

namespace Required\Tobii;

use function Required\Traduttore_Registry\add_project;

/**
 * Inits plugin.
 */
function bootstrap(): void {
	add_action( 'init', __NAMESPACE__ . '\register_translations_project' );
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
