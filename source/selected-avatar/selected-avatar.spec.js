import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import SelectedAvatar from './selected-avatar.react.js';

describe('SelectedAvatar Component', () => {

	it('should have a `src` prop', () => {

		const selected = shallow(<SelectedAvatar />);

		expect(selected.props().src).to.be.defined;

	});

	it('should have a `title` prop', () => {

		const selected = shallow(<SelectedAvatar />);

		expect(selected.props().title).to.be.defined;

	});

	it('should have a `toggle` prop', () => {

		const selected = shallow(<SelectedAvatar />);

		expect(selected.props().toggle).to.be.defined;

	});

	it ('should have the class of `selected-avatar`', () => {

		const selected = shallow(<SelectedAvatar />);

		expect(selected.find('.selected-avatar')).to.have.length(1);

	});

	it ('should have the default avatar prop as a background image', () => {

		const selected = shallow(<SelectedAvatar />);
		const src = selected.props().src;

		expect(selected.props().style).to.have.property(
			'background',
			'url(' + src + ')'
		);

	});

});
