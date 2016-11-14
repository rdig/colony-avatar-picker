import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import AvatarPicker from './avatar-picker.react.js';
import SelectedAvatar from '../selected-avatar/selected-avatar.react.js';
import Popover from '../popover/popover.react.js';

const data = [
	{ "src": "media/avatar1.png", "label": "Avatar 1", "id": 1 }
];

describe('AvatarPicker Component', () => {

	it('should have the required props', () => {

		const avatarPicker = shallow(<AvatarPicker data={data} />);

		expect(avatarPicker.props().data).to.be.defined;

	});

	it('should have a currently selected avatar', () => {

		const avatarPicker = mount(<AvatarPicker data={data} />);

		expect(avatarPicker.find(SelectedAvatar)).to.have.length(1);

	});

	it('clicking the avatar should open the popover', () => {

		const avatarPicker = mount(<AvatarPicker data={data} />);

		avatarPicker.find(SelectedAvatar).simulate('click');

		expect(avatarPicker.find('div.animation').hasClass('enter')).to.equal(true);

	});

	it('clicking outside should close the popover', () => {

		const avatarPicker = mount(<AvatarPicker data={data} />);

		avatarPicker.find(SelectedAvatar).simulate('click');

		document.body.addEventListener('click', () => {});

		document.body.click();

		expect(avatarPicker.find('div.animation').hasClass('leave')).to.equal(true);

	});

});
