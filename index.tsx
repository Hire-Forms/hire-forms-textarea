import * as React from "react";
import * as cx from "classnames";
import {ChangeEvent, CSSProperties} from "react";

interface IProps {
	autoresize?: boolean;
	className?: string;
	onChange: (value: string, ev: ChangeEvent<HTMLTextAreaElement>) => void;
	onKeyDown?: (ev: KeyboardEvent) => void;
	onKeyUp?: (ev: KeyboardEvent) => void;
	placeholder?: string;
	style?: CSSProperties;
	value: string;
}

interface IState {
	focus: boolean;
}

class Textarea extends React.Component<IProps, IState> {
	public state = {focus: false};
	private node;

	public componentDidMount() {
		this.adjustHeight();
	}

	public shouldComponentUpdate(nextProps, nextState) {
		let propsValueChange = this.props.value !== nextProps.value;
		let stateFocusChange = this.state.focus !== nextState.focus;

		return propsValueChange || stateFocusChange;
	}

	public componentDidUpdate(prevProps) {
		if (this.props.value !== prevProps.value) {
			this.adjustHeight();
		}
	}

	public render() {
		return (
			<textarea
				className={cx(
					"hire-forms-textarea",
					{ focus: this.state.focus },
					this.props.className
				)}
				onBlur = {this.toggleFocus}
				onChange={this.handleChange}
				onFocus={this.toggleFocus}
				onKeyDown={this.handleKeyDown}
				onKeyUp={this.handleKeyUp}
				placeholder={this.props.placeholder}
				ref={(node) => { this.node = node; }}
				style={this.props.style}
				value={this.props.value}
			/>
		);
	}

	private adjustHeight() {
		this.node.style.height = "auto";
		this.node.style.height = (this.node.scrollHeight + 6 > 32) ?
			(this.node.scrollHeight + 6) + "px" :
			"32px";
	}

	private toggleFocus = () => {
		this.setState({focus: !this.state.focus});
	};

	private handleKeyDown = (ev) => {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(ev);
		}
	};

	private handleKeyUp = (ev) => {
		if (this.props.onKeyUp) {
			this.props.onKeyUp(ev);
		}
	};

	private handleChange = (ev) => {
		this.props.onChange(ev.currentTarget.value, ev);
	};
}

export default Textarea;
