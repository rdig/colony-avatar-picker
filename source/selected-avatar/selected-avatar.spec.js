import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import SelectedAvatar from './selected-avatar.react.js';

describe('SelectedAvatar Component', () => {

	it('should have a `src` prop', () => {

		const wrapper = shallow(<SelectedAvatar />);

		expect(wrapper.props().src).to.be.defined;

	});

	it('should have a `title` prop', () => {

		const wrapper = shallow(<SelectedAvatar />);

		expect(wrapper.props().title).to.be.defined;

	});

	it ('should have the class of `selected-avatar`', () => {

		const wrapper = shallow(<SelectedAvatar />);

		expect(wrapper.find('.selected-avatar')).to.have.length(1);

	});

	it ('should have the default avatar prop as a background image', () => {

		const wrapper = shallow(<SelectedAvatar />);
		const src = wrapper.props().src;

		expect(wrapper.props().style).to.have.property(
			'background',
			'url(' + src + ')'
		);

	});

});
