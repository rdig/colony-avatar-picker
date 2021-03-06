require('./selected-avatar.style.scss');

const React = require('react');

module.exports = ({src, title, toggle}) => (
	<a
		className='selected-avatar'
		style={{
			background: 'url(' + src + ')',
		}}
		title={title}
		alt={title}
		onClick={toggle}
	/>
);
