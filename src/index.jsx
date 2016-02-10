import React from "react";
import ReactDOM from "react-dom";
import cx from "classnames";

class Textarea extends React.Component {
	componentDidMount() {
		this.adjustHeight(ReactDOM.findDOMNode(this));
	}

	shouldComponentUpdate(nextProps, nextState) {
		let propsValueChange = this.props.value !== nextProps.value;
		let stateFocusChange = this.state.focus !== nextState.focus;

		return propsValueChange || stateFocusChange;
	}

	componentDidUpdate(prevProps) {
		if (this.props.value !== prevProps.value) {
			this.adjustHeight();
		}
	}

	constructor(props) {
		super(props);

		this.state = {focus: false};
	}

	adjustHeight() {
		let textarea = ReactDOM.findDOMNode(this);

		textarea.style.height = "auto";
		textarea.style.height = (textarea.scrollHeight + 6 > 32) ?
			(textarea.scrollHeight + 6) + "px" :
			"32px";
	}

	toggleFocus() {
		this.setState({focus: !this.state.focus});
	}

	handleKeyDown(ev) {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(ev);
		}
	}

	handleKeyUp(ev) {
		if (this.props.onKeyUp) {
			this.props.onKeyUp(ev);
		}
	}

	handleChange(ev) {
		this.props.onChange(ev.currentTarget.value, ev);
	}

	render() {
		return (
			<textarea
				className={cx(
					"hire-textarea",
					{focus: this.state.focus}
				)}
				onBlur = {this.toggleFocus.bind(this)}
				onChange={this.handleChange.bind(this)}
				onFocus={this.toggleFocus.bind(this)}
				onKeyDown={this.handleKeyDown.bind(this)}
				onKeyUp={this.handleKeyUp.bind(this)}
				placeholder={this.props.placeholder}
				style={this.props.style}
				value={this.props.value} />
		);
	}
}

Textarea.defaultProps = {
	autoResize: true,
	value: ""
};

Textarea.propTypes = {
	autoResize: React.PropTypes.bool,
	onChange: React.PropTypes.func,
	onKeyDown: React.PropTypes.func,
	onKeyUp: React.PropTypes.func,
	placeholder: React.PropTypes.string,
	style: React.PropTypes.object,
	value: React.PropTypes.string
};

export default Textarea;