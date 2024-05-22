<?php
/**
 * Plugin Name: required Tobii
 * Plugin URI:  https://github.com/wearerequired/required-tobii
 * Description: An accessible, open-source lightbox for WordPress.
 * Version:     2.0.0-beta.1
 * Author:      required
 * Author URI:  https://required.com
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * Copyright (c) 2020-2024 required (email: info@required.com)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2 or, at
 * your discretion, any later version, as published by the Free
 * Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */

namespace Required\Tobii;

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require __DIR__ . '/vendor/autoload.php';
}

const PLUGIN_DIR  = __DIR__;
const PLUGIN_FILE = __FILE__;

require_once PLUGIN_DIR . '/inc/namespace.php';

bootstrap();
