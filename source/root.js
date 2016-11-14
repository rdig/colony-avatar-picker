require('./root.styles.scss');

const React = require('react');
const ReactDOM = require('react-dom');

const AvatarPicker = require('./avatar-picker/avatar-picker.react.js');

const documentRoot = document.getElementById('root');

const avatarsData = [
	{ "src": "media/avatar1.png", "label": "Avatar 1", "id": 1 },
	{ "src": "media/avatar2.png", "label": "Avatar 2", "id": 2 },
	{ "src": "media/avatar3.png", "label": "Avatar 3", "id": 3 },
	{ "src": "media/avatar4.png", "label": "Avatar 4", "id": 4 },
	{ "src": "media/avatar5.png", "label": "Avatar 5", "id": 5 },
	{ "src": "media/avatar6.png", "label": "Avatar 6", "id": 6 }
];

ReactDOM.render(
	<AvatarPicker data={avatarsData} />,
	documentRoot
);
