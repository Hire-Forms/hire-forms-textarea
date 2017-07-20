import * as React from "react";
import * as cx from "classnames";
import {ChangeEvent, CSSProperties} from "react";

interface IProps {
	autoresize?: boolean;
	className?: string;
	onChange?: (value: string, ev: ChangeEvent<HTMLTextAreaElement>) => void;
	onInput?: (
		value: string,
		ev: ChangeEvent<HTMLTextAreaElement>,
	  keyCode: number,
	) => void;
	onKeyDown?: (ev: KeyboardEvent) => void;
	onKeyUp?: (ev: KeyboardEvent) => void;
	onMouseUp?: (ev: MouseEvent) => void;
	placeholder?: string;
	style?: CSSProperties;
	value: string;
}

interface IState {
	autoresize: boolean;
	focus: boolean;
	keyCode: number;
}

class Textarea extends React.Component<IProps, IState> {
	public state = {
		autoresize: this.props.autoresize != null,
		focus: false,
		keyCode: null,
	};
	private node;

	public componentDidMount() {
		if (this.state.autoresize) this.adjustHeight();
	}

	public shouldComponentUpdate(nextProps, nextState) {
		let propsValueChange = this.props.value !== nextProps.value;
		let stateFocusChange = this.state.focus !== nextState.focus;

		return propsValueChange || stateFocusChange;
	}

	public componentDidUpdate(prevProps) {
		if (this.props.value !== prevProps.value) {
			if (this.state.autoresize) this.adjustHeight();
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
				onInput={this.handleInput}
				onKeyDown={this.handleKeyDown}
				onKeyUp={this.handleKeyUp}
				onMouseUp={this.handleMouseUp}
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
		this.setState({ keyCode: ev.keyCode });
		if (this.props.onKeyDown) {
			this.props.onKeyDown(ev);
		}
	};

	private handleKeyUp = (ev) => {
		if (this.props.onKeyUp) {
			this.props.onKeyUp(ev);
		}
	};

	private handleMouseUp = (ev) => {
		if (this.props.onMouseUp) {
			this.props.onMouseUp(ev);
		}
	};

	private handleChange = (ev) => {
		if (this.props.onChange) {
			this.props.onChange(ev.currentTarget.value, ev);
		}
	};

	private handleInput = (ev) => {
		if (this.props.onInput) {
			this.props.onInput(ev.currentTarget.value, ev, this.state.keyCode);
		}
	};
}

export default Textarea;
