module.exports = {
	extends: [ '@wearerequired/eslint-config' ],
	rules: {
		'@wordpress/i18n-text-domain': [ 'error', { allowedTextDomain: [ 'plugin-name' ] } ],
	},
};
