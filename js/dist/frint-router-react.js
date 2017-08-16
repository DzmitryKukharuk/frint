this["FrintRouterReact"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() { module.exports = this["PropTypes"]; }());

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Route = __webpack_require__(3);

var _Route2 = _interopRequireDefault(_Route);

var _Link = __webpack_require__(5);

var _Link2 = _interopRequireDefault(_Link);

var _Switch = __webpack_require__(6);

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Route: _Route2.default,
  Link: _Link2.default,
  Switch: _Switch2.default
};
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _frintReact = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies */


/* eslint-enable import/no-extraneous-dependencies */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _ref;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Route.__proto__ || Object.getPrototypeOf(Route)).call.apply(_ref, [this].concat(args)));

    _this._routerSubscription = null;
    _this._appInstance = null;

    _this.state = {
      component: null,
      matched: null
    };
    return _this;
  }

  _createClass(Route, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._calculateMatchedState(this.props);
      this._calculateComponentState(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this._calculateMatchedState(nextProps);
      this._calculateComponentState(nextProps);
    }
  }, {
    key: '_calculateMatchedState',
    value: function _calculateMatchedState(nextProps) {
      var _this2 = this;

      if (nextProps.computedMatch) {
        // in case it was subscribed before
        this._unsubscribeFromRouter();
      } else if (nextProps.path) {
        if (!this._routerSubscription || nextProps.path !== this.props.path || nextProps.exact !== this.props.exact) {
          this._unsubscribeFromRouter();

          this._routerSubscription = this.context.app.get('router').getMatch$(nextProps.path, {
            exact: nextProps.exact
          }).subscribe(function (matched) {
            _this2.setState({
              matched: matched
            });
          });
        }
      }
    }
  }, {
    key: '_calculateComponentState',
    value: function _calculateComponentState(nextProps) {
      if (nextProps.component) {
        // component
        this._destroyRouteApp();

        this.setState({
          component: nextProps.component
        });
      } else if (nextProps.app && (this._appInstance === null || nextProps.app !== this.props.app)) {
        // app
        this._destroyRouteApp();

        var RouteApp = nextProps.app;

        this._appInstance = new RouteApp({
          parentApp: this.context.app
        });
        this.setState({
          component: (0, _frintReact.getMountableComponent)(this._appInstance)
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._unsubscribeFromRouter();
      this._destroyRouteApp();
    }
  }, {
    key: '_unsubscribeFromRouter',
    value: function _unsubscribeFromRouter() {
      if (this._routerSubscription) {
        this._routerSubscription.unsubscribe();
      }
    }
  }, {
    key: '_destroyRouteApp',
    value: function _destroyRouteApp() {
      if (this._appInstance) {
        this._appInstance.beforeDestroy();
        this._appInstance = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var ComponentToRender = this.state.component;
      var matched = this.props.computedMatch || this.state.matched || null;

      return ComponentToRender !== null && matched !== null ? _react2.default.createElement(ComponentToRender, { match: matched }) : null;
    }
  }]);

  return Route;
}(_react2.default.Component);

Route.contextTypes = {
  app: _propTypes2.default.object.isRequired
};
Route.propTypes = {
  path: _propTypes2.default.string,
  exact: _propTypes2.default.bool,
  computedMatch: _propTypes2.default.object,
  component: _propTypes2.default.func,
  app: _propTypes2.default.func
};
exports.default = Route;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function() { module.exports = this["FrintReact"]; }());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line import/no-extraneous-dependencies


// eslint-disable-line import/no-extraneous-dependencies

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args)));

    _this.handleClick = function (e) {
      e.preventDefault();

      var router = _this.context.app.get('router');
      var to = _this.props.to;

      if (router.getMatch(to, router.getHistory(), { exact: true }) === null) {
        router.push(to);
      }
    };

    _this.state = {
      active: false
    };

    _this.subscription = null;
    return _this;
  }

  _createClass(Link, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.considerSubscribingToRouter(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.considerSubscribingToRouter(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribeFromRouter();
    }
  }, {
    key: 'considerSubscribingToRouter',
    value: function considerSubscribingToRouter(nextProps) {
      if (typeof nextProps.activeClassName === 'string') {
        if (!this.subscription || this.props.to !== nextProps.to || this.props.exact !== nextProps.exact) {
          this.resubscribeToRouter(nextProps.to, nextProps.exact);
        }
      }
    }
  }, {
    key: 'resubscribeToRouter',
    value: function resubscribeToRouter(to, exact) {
      var _this2 = this;

      this.unsubscribeFromRouter();

      this.subscription = this.context.app.get('router').getMatch$(to, { exact: exact }).subscribe(function (matched) {
        if (!matched) {
          return _this2.setState({ active: false });
        }

        return _this2.setState({ active: true });
      });
    }
  }, {
    key: 'unsubscribeFromRouter',
    value: function unsubscribeFromRouter() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
          className = _props.className,
          type = _props.type,
          activeClassName = _props.activeClassName;


      var linkProps = {
        onClick: this.handleClick,
        className: className || ''
      };

      if (this.state.active) {
        linkProps.className += ' ' + activeClassName;
      }

      if (typeof type === 'undefined') {
        // anchor
        linkProps.href = to;

        return _react2.default.createElement(
          'a',
          linkProps,
          children
        );
      }

      // button
      linkProps.type = type;

      return _react2.default.createElement(
        'button',
        linkProps,
        children
      );
    }
  }]);

  return Link;
}(_react2.default.Component);

Link.contextTypes = {
  app: _propTypes2.default.object.isRequired
};
Link.propTypes = {
  to: _propTypes2.default.string.isRequired,
  exact: _propTypes2.default.bool,
  type: _propTypes2.default.string,
  className: _propTypes2.default.string,
  activeClassName: _propTypes2.default.string,
  children: _propTypes2.default.node
};
exports.default = Link;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies */


/* eslint-enable import/no-extraneous-dependencies */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    var _ref;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      history: null
    };

    _this._routerSubscription = null;
    return _this;
  }

  _createClass(Switch, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this._routerSubscription = this.context.app.get('router').getHistory$().subscribe(function (history) {
        _this2.setState({
          history: history
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._routerSubscription) {
        this._routerSubscription.unsubscribe();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var child = null;

      _react2.default.Children.forEach(this.props.children, function (element) {
        if (child !== null) {
          return;
        }

        if (!_react2.default.isValidElement(element)) {
          return;
        }

        var _element$props = element.props,
            path = _element$props.path,
            exact = _element$props.exact;

        // if Route has no path (it's default) then getMatch will return match with whatever URL

        var match = _this3.context.app.get('router').getMatch(path, _this3.state.history, { exact: exact });

        if (match !== null) {
          child = _react2.default.cloneElement(element, _extends({}, element.props, {
            computedMatch: match
          }));
        }
      });

      return child;
    }
  }]);

  return Switch;
}(_react2.default.Component);

Switch.contextTypes = {
  app: _propTypes2.default.object.isRequired
};
Switch.propTypes = {
  children: _propTypes2.default.node
};
exports.default = Switch;
module.exports = exports['default'];

/***/ })
/******/ ]);