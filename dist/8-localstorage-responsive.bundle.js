webpackJsonp([1],{

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGridLayout = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsiveReactGridLayout = (0, _reactGridLayout.WidthProvider)(_reactGridLayout.Responsive);
var originalLayouts = getFromLS('layouts') || {};

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */

var ResponsiveLocalStorageLayout = function (_React$PureComponent) {
  _inherits(ResponsiveLocalStorageLayout, _React$PureComponent);

  function ResponsiveLocalStorageLayout(props) {
    _classCallCheck(this, ResponsiveLocalStorageLayout);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts))
    };
    return _this;
  }

  ResponsiveLocalStorageLayout.prototype.resetLayout = function resetLayout() {
    this.setState({ layouts: {} });
  };

  ResponsiveLocalStorageLayout.prototype.onLayoutChange = function onLayoutChange(layout, layouts) {
    saveToLS('layouts', layouts);
    this.setState({ layouts: layouts });
  };

  ResponsiveLocalStorageLayout.prototype.render = function render() {
    var _this2 = this;

    return _jsx('div', {}, void 0, _jsx('button', {
      onClick: function onClick() {
        return _this2.resetLayout();
      }
    }, void 0, 'Reset Layout'), _jsx(ResponsiveReactGridLayout, {
      className: 'layout',
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30,
      layouts: this.state.layouts,
      onLayoutChange: function onLayoutChange(layout, layouts) {
        return _this2.onLayoutChange(layout, layouts);
      }
    }, void 0, _jsx('div', {
      'data-grid': { w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }
    }, '1', _jsx('span', {
      className: 'text'
    }, void 0, '1')), _jsx('div', {
      'data-grid': { w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }
    }, '2', _jsx('span', {
      className: 'text'
    }, void 0, '2')), _jsx('div', {
      'data-grid': { w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 }
    }, '3', _jsx('span', {
      className: 'text'
    }, void 0, '3')), _jsx('div', {
      'data-grid': { w: 2, h: 3, x: 6, y: 0, minW: 2, minH: 3 }
    }, '4', _jsx('span', {
      className: 'text'
    }, void 0, '4')), _jsx('div', {
      'data-grid': { w: 2, h: 3, x: 8, y: 0, minW: 2, minH: 3 }
    }, '5', _jsx('span', {
      className: 'text'
    }, void 0, '5'))));
  };

  _createClass(ResponsiveLocalStorageLayout, null, [{
    key: 'defaultProps',
    get: function get() {
      return {
        className: "layout",
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        rowHeight: 30
      };
    }
  }]);

  return ResponsiveLocalStorageLayout;
}(_react2.default.PureComponent);

module.exports = ResponsiveLocalStorageLayout;

function getFromLS(key) {
  var ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    } catch (e) {/*Ignore*/}
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    var _JSON$stringify;

    global.localStorage.setItem('rgl-8', JSON.stringify((_JSON$stringify = {}, _JSON$stringify[key] = value, _JSON$stringify)));
  }
}

if (__webpack_require__.c[__webpack_require__.s] === module) {
  __webpack_require__(4)(module.exports);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(2)(module)))

/***/ })

},[56]);