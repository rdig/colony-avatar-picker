require('./popover.style.scss');

const Avatar = require('../avatar/avatar.react.js');

const React = require('react');

module.exports = ({ data, change, current, render}) => (
	<div className={'animation ' + ((render) ? 'enter' : 'enter leave')}>
		<span className='arrow' />
		<ul className='popover'>
			{data.map((avatar, index) => (
				<Avatar
					key={avatar.id}
					src={avatar.src}
					current={current === index}
					position={index}
					click={change}
				/>
			))}
		</ul>
	</div>
);
