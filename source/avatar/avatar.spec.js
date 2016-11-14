import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Avatar from './avatar.react.js';

describe('Avatar Component', () => {

	it('should have the required props', () => {

		const avatar = shallow(<Avatar click={() => {}} />);

		expect(avatar.props().src).to.be.defined;
		expect(avatar.props().title).to.be.defined;
		expect(avatar.props().current).to.be.defined;
		expect(avatar.props().position).to.be.defined;
		expect(avatar.props().click).to.be.defined;
		expect(avatar.props().loading).to.be.defined;

	});

	it('should have a background image', () => {

		const avatar = shallow(<Avatar click={() => {}} src='image-url' />);

		expect(avatar.find('a').props().style).to.have.property(
			'background',
			'url(image-url)'
		);

	});

	it('should spawn a loading spinner on click ', () => {

		const avatar = shallow(<Avatar click={() => {}} loading={2} position={2} />);

		avatar.find('a').simulate('click');

		expect(avatar.find('div.loading').hasClass('show')).to.equal(true);
		expect(avatar.find('div.overlay').hasClass('hide')).to.equal(true);

	});

});
