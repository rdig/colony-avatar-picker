require('./avatar.style.scss');

const React = require('react');

module.exports = ({ src, title, current, position, click, loading }) => {
	/*
	 * Dummy event value for testing, since we are not simulating the click event, inside
	 * of the test runner it won't be available otherwise.
	 */
	const event = '';
	return (
		<li>
			<a
				className={'avatar'  + ((current) ? ' selected' : '') }
				style={{
					background: 'url(' + src + ')',
				}}
				title={title}
				alt={title}
				onClick={click.bind(event, position)}
			>
				<div className={'loading' + ((loading === position) ? ' show' : '')} />
				<div className={'overlay' + ((loading === position) ? ' hide' : '')} />
			</a>
		</li>
	);
};
