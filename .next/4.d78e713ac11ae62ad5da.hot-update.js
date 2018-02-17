webpackHotUpdate(4,{

/***/ "./shared/MUI/theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PRIMARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PRIMARY_COLOR_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PRIMARY_COLOR_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCENT_COLOR_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ACCENT_COLOR_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ACCENT_COLOR_THREE; });
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

var PRIMARY_COLOR = '#569cb7';
var PRIMARY_COLOR_TWO = '#88cde9';
var PRIMARY_COLOR_THREE = '#1e6e87';
var ACCENT_COLOR_ONE = '#556cb7';
var ACCENT_COLOR_TWO = '#889aea';
var ACCENT_COLOR_THREE = '#204287';
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PRIMARY_COLOR, 'PRIMARY_COLOR', '/Users/rojas/Desktop/server-render-next/shared/MUI/theme.js');
  reactHotLoader.register(PRIMARY_COLOR_TWO, 'PRIMARY_COLOR_TWO', '/Users/rojas/Desktop/server-render-next/shared/MUI/theme.js');
  reactHotLoader.register(PRIMARY_COLOR_THREE, 'PRIMARY_COLOR_THREE', '/Users/rojas/Desktop/server-render-next/shared/MUI/theme.js');
  reactHotLoader.register(ACCENT_COLOR_ONE, 'ACCENT_COLOR_ONE', '/Users/rojas/Desktop/server-render-next/shared/MUI/theme.js');
  reactHotLoader.register(ACCENT_COLOR_TWO, 'ACCENT_COLOR_TWO', '/Users/rojas/Desktop/server-render-next/shared/MUI/theme.js');
  reactHotLoader.register(ACCENT_COLOR_THREE, 'ACCENT_COLOR_THREE', '/Users/rojas/Desktop/server-render-next/shared/MUI/theme.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./shared/MUI/withMUI.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_MuiThemeProvider__ = __webpack_require__("./node_modules/material-ui/styles/MuiThemeProvider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_getMuiTheme__ = __webpack_require__("./node_modules/material-ui/styles/getMuiTheme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_getMuiTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles_getMuiTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_tap_event_plugin__ = __webpack_require__("./node_modules/react-tap-event-plugin/src/injectTapEventPlugin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_tap_event_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_tap_event_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme__ = __webpack_require__("./shared/MUI/theme.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/rojas/Desktop/server-render-next/shared/MUI/withMUI.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








try {
  __WEBPACK_IMPORTED_MODULE_4_react_tap_event_plugin___default()();
} catch (e) {}

var withMaterialUI = function withMaterialUI(ComposedComponent) {
  var HOC = function (_Component) {
    _inherits(HOC, _Component);

    function HOC() {
      _classCallCheck(this, HOC);

      return _possibleConstructorReturn(this, (HOC.__proto__ || Object.getPrototypeOf(HOC)).apply(this, arguments));
    }

    _createClass(HOC, [{
      key: 'render',
      value: function render() {
        var userAgent = this.props.userAgent;

        var Lato = 'lato, sans-serif';
        var muiTheme = __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_getMuiTheme___default()({
          fontFamily: 'Lato',
          palette: {
            primary1Color: __WEBPACK_IMPORTED_MODULE_6__theme__["d" /* PRIMARY_COLOR */],
            primary2Color: __WEBPACK_IMPORTED_MODULE_6__theme__["f" /* PRIMARY_COLOR_TWO */],
            primary3Color: __WEBPACK_IMPORTED_MODULE_6__theme__["e" /* PRIMARY_COLOR_THREE */],
            accent1Color: __WEBPACK_IMPORTED_MODULE_6__theme__["a" /* ACCENT_COLOR_ONE */],
            accent2Color: __WEBPACK_IMPORTED_MODULE_6__theme__["c" /* ACCENT_COLOR_TWO */],
            accent3Color: __WEBPACK_IMPORTED_MODULE_6__theme__["b" /* ACCENT_COLOR_THREE */]
          },
          appBar: {
            height: 50
          }
        }, { userAgent: userAgent });
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_next_head___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'title',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              'Nextjs Blogger'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=devide-width', __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato', rel: 'stylesheet', __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_MuiThemeProvider___default.a,
            { muiTheme: muiTheme, __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            }))
          )
        );
      }
    }, {
      key: '__reactstandin__regenerateByEval',
      value: function __reactstandin__regenerateByEval(key, code) {
        this[key] = eval(code);
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var req, userAgent;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  req = ctx.req;
                  userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                  // const subProps = await ComposedComponent.getInitialProps(ctx)

                  return _context.abrupt('return', {
                    // ...subProps,
                    userAgent: userAgent
                  });

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return HOC;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

  return HOC;
};
var _default = withMaterialUI;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(withMaterialUI, 'withMaterialUI', '/Users/rojas/Desktop/server-render-next/shared/MUI/withMUI.js');
  reactHotLoader.register(_default, 'default', '/Users/rojas/Desktop/server-render-next/shared/MUI/withMUI.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.d78e713ac11ae62ad5da.hot-update.js.map