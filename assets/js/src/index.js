import Tobii from '@midzer/tobii';

import './style.scss';

new Tobii( {
	selector: '[data-lightbox]',
	captionText: ( element ) => {
		let sibling = element.nextElementSibling;
		if ( sibling && 'FIGCAPTION' === sibling.tagName ) {
			return sibling.textContent.trim();
		}

		// In classic editor, a gallery image is wrapped in an additional div container.
		sibling = element.parentNode.nextElementSibling;
		if ( sibling && 'FIGCAPTION' === sibling.tagName ) {
			return sibling.textContent.trim();
		}

		return null;
	},
	...window.requiredTobiiOptions,
} );
