/**
 * Internal dependencies
 */
import './edit.css';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Component props.
 * @param {string} [props.className] Class to apply to the container.
 *
 * @return {WPElement} Element to render.
 */
const ExampleEdit = ( { className } ) => {
	return <p className={ className }>Hello from the editor!</p>;
};

export default ExampleEdit;
