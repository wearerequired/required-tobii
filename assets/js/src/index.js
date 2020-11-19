import Tobii from 'tobii';

import './style.scss';

new Tobii( {
	selector: '[data-lightbox]',
	captions: false, // Don't use alt attribute by default.
	zoom: false, // The zoom icon may be misplayed.
} );
