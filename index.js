"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const cx = require("classnames");
class Textarea extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            autoresize: (this.props.autoresize == null) ? false : true,
            focus: false,
        };
        this.toggleFocus = () => {
            this.setState({ focus: !this.state.focus });
        };
        this.handleKeyDown = (ev) => {
            if (this.props.onKeyDown) {
                this.props.onKeyDown(ev);
            }
        };
        this.handleKeyUp = (ev) => {
            if (this.props.onKeyUp) {
                this.props.onKeyUp(ev);
            }
        };
        this.handleMouseUp = (ev) => {
            if (this.props.onMouseUp) {
                this.props.onMouseUp(ev);
            }
        };
        this.handleChange = (ev) => {
            this.props.onChange(ev.currentTarget.value, ev);
        };
    }
    componentDidMount() {
        if (this.state.autoresize)
            this.adjustHeight();
    }
    shouldComponentUpdate(nextProps, nextState) {
        let propsValueChange = this.props.value !== nextProps.value;
        let stateFocusChange = this.state.focus !== nextState.focus;
        return propsValueChange || stateFocusChange;
    }
    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            if (this.state.autoresize)
                this.adjustHeight();
        }
    }
    render() {
        return (React.createElement("textarea", { className: cx("hire-forms-textarea", { focus: this.state.focus }, this.props.className), onBlur: this.toggleFocus, onChange: this.handleChange, onFocus: this.toggleFocus, onKeyDown: this.handleKeyDown, onKeyUp: this.handleKeyUp, onMouseUp: this.handleMouseUp, placeholder: this.props.placeholder, ref: (node) => { this.node = node; }, style: this.props.style, value: this.props.value }));
    }
    adjustHeight() {
        this.node.style.height = "auto";
        this.node.style.height = (this.node.scrollHeight + 6 > 32) ?
            (this.node.scrollHeight + 6) + "px" :
            "32px";
    }
}
exports.default = Textarea;
