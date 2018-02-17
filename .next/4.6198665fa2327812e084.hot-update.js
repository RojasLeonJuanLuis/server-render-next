webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_MUI_withMUI__ = __webpack_require__("./shared/MUI/withMUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Card__ = __webpack_require__("./node_modules/material-ui/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_RaisedButton__ = __webpack_require__("./node_modules/material-ui/RaisedButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_RaisedButton__);


var _jsxFileName = '/Users/rojas/Desktop/server-render-next/pages/index.js',
    _this = this;



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var Index = function Index(_ref) {
  var posts = _ref.posts;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    posts.map(function (x) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_Card__["Card"],
        { key: x.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Card__["CardHeader"], { title: x.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Card__["CardText"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_RaisedButton___default.a, { label: 'Click to view post!', fullWidth: true, primary: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          })
        )
      );
    })
  );
};

Index.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  var response, data;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(process.env.BLOGGER_URL + '?key=' + process.env.API_KEY);

        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();

        case 5:
          data = _context.sent;
          return _context.abrupt('return', { posts: data.items });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
}));

var _default = Object(__WEBPACK_IMPORTED_MODULE_3__shared_MUI_withMUI__["a" /* default */])(Index);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, 'Index', '/Users/rojas/Desktop/server-render-next/pages/index.js');
  reactHotLoader.register(_default, 'default', '/Users/rojas/Desktop/server-render-next/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=4.6198665fa2327812e084.hot-update.js.map