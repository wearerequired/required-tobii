import Tobii from 'tobii';

import './style.scss';

new Tobii( {
	selector: '[data-lightbox]',
	captionText: ( element ) => {
		let sibling = element.nextElementSibling;
		if ( sibling && sibling.matches( 'figcaption' ) ) {
			return sibling.textContent;
		}

		// In classic editor, a gallery image is wrapped in an additional div container.
		sibling = element.parentNode.nextElementSibling;
		if ( sibling && sibling.matches( 'figcaption' ) ) {
			return sibling.textContent;
		}

		return null;
	},
	...window.requiredTobiiOptions,
} );
