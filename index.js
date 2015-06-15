"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var Textarea = (function (_React$Component) {
	function Textarea(props) {
		_classCallCheck(this, Textarea);

		_get(Object.getPrototypeOf(Textarea.prototype), "constructor", this).call(this, props);

		this.state = { focus: false };
	}

	_inherits(Textarea, _React$Component);

	_createClass(Textarea, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.adjustHeight(_react2["default"].findDOMNode(this));
		}
	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps, nextState) {
			var propsValueChange = this.props.value !== nextProps.value;
			var stateFocusChange = this.state.focus !== nextState.focus;

			return propsValueChange || stateFocusChange;
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate(prevProps) {
			if (this.props.value !== prevProps.value) {
				this.adjustHeight();
			}
		}
	}, {
		key: "adjustHeight",
		value: function adjustHeight() {
			var textarea = _react2["default"].findDOMNode(this);

			textarea.style.height = "auto";
			textarea.style.height = textarea.scrollHeight + 6 > 32 ? textarea.scrollHeight + 6 + "px" : "32px";
		}
	}, {
		key: "toggleFocus",
		value: function toggleFocus() {
			this.setState({ focus: !this.state.focus });
		}
	}, {
		key: "handleKeyDown",
		value: function handleKeyDown(ev) {
			if (this.props.onKeyDown) {
				this.props.onKeyDown(ev);
			}
		}
	}, {
		key: "handleKeyUp",
		value: function handleKeyUp(ev) {
			if (this.props.onKeyUp) {
				this.props.onKeyUp(ev);
			}
		}
	}, {
		key: "handleChange",
		value: function handleChange(ev) {
			this.props.onChange(ev.currentTarget.value, ev);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement("textarea", {
				className: (0, _classnames2["default"])("hire-textarea", { focus: this.state.focus }),
				onBlur: this.toggleFocus.bind(this),
				onChange: this.handleChange.bind(this),
				onFocus: this.toggleFocus.bind(this),
				onKeyDown: this.handleKeyDown.bind(this),
				onKeyUp: this.handleKeyUp.bind(this),
				placeholder: this.props.placeholder,
				style: this.props.style,
				value: this.props.value });
		}
	}]);

	return Textarea;
})(_react2["default"].Component);

Textarea.defaultProps = {
	autoResize: true,
	value: ""
};

Textarea.propTypes = {
	autoResize: _react2["default"].PropTypes.bool,
	onChange: _react2["default"].PropTypes.func,
	onKeyDown: _react2["default"].PropTypes.func,
	onKeyUp: _react2["default"].PropTypes.func,
	placeholder: _react2["default"].PropTypes.string,
	style: _react2["default"].PropTypes.object,
	value: _react2["default"].PropTypes.string
};

exports["default"] = Textarea;
module.exports = exports["default"];