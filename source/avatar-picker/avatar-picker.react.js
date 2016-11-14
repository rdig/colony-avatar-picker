const React = require('react');
const ReactDOM = require('react-dom');

const SelectedAvatar = require('../selected-avatar/selected-avatar.react.js');
const Popover = require('../popover/popover.react.js');

class AvatarPicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			/*
			 * Data brought in via props
			 */
			data: this.props.data,
			/*
			 * Current selected avatar
			 */
			current: 0,
			/*
			 * Is the popover open / close
			 */
			popover: false,
			/*
			 * If this is equal to our current, than we show a loading spinner
			 */
			loading: false
		};
	}
	/*
	 * Change the current avatar, triggered by the Avatar component
	 */
	changeAvatar(position, event) {
		this.setState({ loading: position });
		/*
		 * Our fake async requrest
		 */
		setTimeout(() => {
			this.setState(
				{ current: position },
				() => {
					this.closePopover();
					this.setState({ loading: false });
				}
			);
		}, 1000);
	}
	/*
	 * Opens the pover
	 */
	openPopover(event) {
		event.preventDefault();
		this.setState({ popover: true });
	}
	/*
	 * Closes the popover
	 */
	closePopover() {
		this.setState({ popover: false });
	}
	/*
	 * If we click outside of the popover / selected avatar, that hide the popover
	 */
	outsideClick(event) {
		const popover = ReactDOM.findDOMNode(this.refs.popover);
		if ((!popover || !popover.contains(event.target))) {
			this.setState({ popover: false });
		}
	}
	/*
	 * Events added to the actual DOM, so we can hide the popover even if we click outside of the
	 * react component
	 */
	componentWillMount() {
		document.addEventListener('click', ::this.outsideClick, false);
	}
	componentWillUnmount() {
		document.removeEventListener('click', ::this.outsideClick, false);
	}
	render() {
		return (
			<div>
				<SelectedAvatar
					src={this.state.data[this.state.current].src}
					title={this.state.data[this.state.current].label}
					toggle={::this.openPopover}
				/>
				<div ref='popover'>
					<Popover
						data={this.state.data}
						click={::this.changeAvatar}
						render={this.state.popover}
						current={this.state.current}
						loading={this.state.loading}
					/>
				</div>
			</div>
		);
	}
};

AvatarPicker.propTypes = {
	data: React.PropTypes.array.isRequired
};

module.exports = AvatarPicker;
