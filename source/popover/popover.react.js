require('./popover.style.scss');

const Avatar = require('../avatar/avatar.react.js');

const React = require('react');

module.exports = ({ data, click, current, render, loading}) => (
	<div className={'animation' + ((render) ? ' enter' : ' leave')}>
		<span className='arrow' />
		<ul className='popover'>
			<p className='popover-title'>Choose your avatar</p>
			{data.map((avatar, index) => (
				<Avatar
					key={avatar.id}
					src={avatar.src}
					title={avatar.label}
					current={current === index}
					position={index}
					click={click}
					loading={loading}
				/>
			))}
		</ul>
	</div>
);
