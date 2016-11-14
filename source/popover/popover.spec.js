import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Popover from './popover.react.js';
import Avatar from '../avatar/avatar.react.js';

const data = [
	{ "src": "media/avatar1.png", "label": "Avatar 1", "id": 1 },
	{ "src": "media/avatar2.png", "label": "Avatar 2", "id": 2 },
	{ "src": "media/avatar3.png", "label": "Avatar 3", "id": 3 },
	{ "src": "media/avatar4.png", "label": "Avatar 4", "id": 4 },
	{ "src": "media/avatar5.png", "label": "Avatar 5", "id": 5 },
	{ "src": "media/avatar6.png", "label": "Avatar 6", "id": 6 }
];

describe('Popover Component', () => {

	it('should have the required props', () => {

		const popover = shallow(<Popover data={[]} />);

		expect(popover.props().data).to.be.defined;
		expect(popover.props().click).to.be.defined;
		expect(popover.props().current).to.be.defined;
		expect(popover.props().render).to.be.defined;
		expect(popover.props().loading).to.be.defined;

	});

	it ('should have the `animation` class', () => {

		const popover = shallow(<Popover data={[]} />);

		expect(popover.find('div.animation')).to.have.length(1);

	});

	it ('should have an arrow element', () => {

		const popover = shallow(<Popover data={[]} />);

		expect(popover.find('span.arrow')).to.have.length(1);

	});

	it ('should have a title', () => {

		const popover = shallow(<Popover data={[]} />);

		expect(popover.find('p.popover-title')).to.have.length(1);

	});

	it ('should have an unordered list element', () => {

		const popover = shallow(<Popover data={[]} />);

		expect(popover.find('ul.popover')).to.have.length(1);

	});

	it ('should contain 6 child <Avatar /> components', () => {

		const popover = mount(<Popover data={data} click={(event, position) => {}} />);

		expect(popover.find(Avatar)).to.have.length(6);

	});

});
