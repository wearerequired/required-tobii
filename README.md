# required Tobii

A WordPress plugin to implement lightbox functionality for images and galleries.

The plugin uses [Tobii](https://github.com/midzer/tobii), an accessible, open-source lightbox with no dependencies.

## Installation

You can install the plugin with Composer:

	composer require wearerequired/required-tobii

The plugin has no settings page.

## Customize Tobii options

You can pass any [supported option by Tobii](https://github.com/midzer/tobii#options) through the `required_tobii.options` filter. For example to enable the zoom icons use the following snippet:

```php
add_filter(
	'required_tobii.options',
	function( $options ) {
		$options['zoom'] = true;
		return $options;
	}
);
```

## Browser support

* Internet Explorer 11
* Last two versions of any other modern browser, including mobile browsers

<br>

[![a required open source product - let's get in touch](https://media.required.com/images/open-source-banner.png)](https://required.com/en/lets-get-in-touch/)
