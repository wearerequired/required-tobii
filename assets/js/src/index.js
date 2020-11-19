import Tobii from 'tobii';

import './style.scss';

const tobii = new Tobii( {
	selector: '[data-lightbox]',
	captions: false, // Don't use alt attribute by default.
} );
