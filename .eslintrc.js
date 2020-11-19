module.exports = {
	extends: [ '@wearerequired/eslint-config' ],
	rules: {
		'@wordpress/i18n-text-domain': [ 'error', { allowedTextDomain: [ 'required-tobii' ] } ],
	},
};
