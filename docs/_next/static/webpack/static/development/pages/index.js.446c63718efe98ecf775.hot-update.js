webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src */ "./src/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_styles_hljs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter/dist/styles/hljs */ "./node_modules/react-syntax-highlighter/dist/styles/hljs/index.js");
/* harmony import */ var react_syntax_highlighter_dist_styles_hljs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_styles_hljs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/main.css */ "./style/main.css");
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_main_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/pieterbergwerff/Development/react-inline-worker/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var fn = function fn() {
  self.onmessage = function (_ref) {
    var data = _ref.data;
    var to = setTimeout(function () {
      postMessage('Hello world!');
    }, 1000);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 22,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "info-circle",
      theme: "twoTone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), "\xA0\xA0react-inline-worker"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelloWorldExample, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FetchApiExample, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "\xA0")));
});

function HelloWorldExample() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Example, {
    title: "Get a 'Hello world!'",
    description: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Use the worker to receive a simple ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Hello world"), "."),
    code: ["import React from 'react';", "import InlineWorker from 'react-inline-worker';", "", "function fn(){", "  postMessage('Hello world!');", "}", "", "function HelloWorldExample(){", "  return <InlineWorker fn={fn}>{({ loading, error, data }) => {", "    if (loading) return 'loading...';", "    if (error) return 'Errors!';", "    console.log(data); // Hello world!", "    return <div>Message from worker: {data}</div>;", "  }}</InlineWorker>;", "}", "", "export default HelloWorldExample;"],
    RunComponent: function RunComponent(_ref2) {
      var onReady = _ref2.onReady;

      function fn() {
        postMessage('Hello world!');
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__["default"], {
        fn: fn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, function (_ref3) {
        var loading = _ref3.loading,
            error = _ref3.error,
            data = _ref3.data;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        });
        if (error) return 'Errors!';
        console.log(data); // Hello world!

        onReady();
        return data;
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  });
}

function FetchApiExample() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Example, {
    title: "Fetch json API",
    description: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "This example fetches your IP address from", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "//ipify.org",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "ipify.org")), "."),
    code: ["import React from 'react';", "import InlineWorker from 'react-inline-worker';", "", "function fn(){", "  onmessage = function({ data }) {", "    fetch(data.url)", "      .then(result => result.json())", "      .then(data => {", "        postMessage(data);", "      })", "      .catch(err => {", "        postMessage(err);", "      });", "  }", "}", "", "function FetchMyIpAddress(){", "  return <InlineWorker fn={fn} data={{ url: 'https://api.ipify.org?format=json' }}>{({ loading, error, data }) => {", "    if (loading) return 'loading...';", "    if (error) return 'Errors!';", "    console.log(data); // Hello world!", "    return <div>Message from worker: {data}</div>;", "  }}</InlineWorker>;", "}", "", "export default FetchMyIpAddress;"],
    RunComponent: function RunComponent(_ref4) {
      var onReady = _ref4.onReady;

      function fn() {
        onmessage = function onmessage(_ref5) {
          var data = _ref5.data;
          fetch(data.url).then(function (result) {
            return result.json();
          }).then(function (data) {
            postMessage(data);
          }).catch(function (err) {
            postMessage(err);
          });
        };
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__["default"], {
        fn: fn,
        data: {
          url: 'https://api.ipify.org?format=json'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, function (_ref6) {
        var loading = _ref6.loading,
            error = _ref6.error,
            data = _ref6.data;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        });
        if (error) return 'Errors!';
        onReady();
        return JSON.stringify(data, undefined, 2);
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  });
}

var Example =
/*#__PURE__*/
function (_Component) {
  _inherits(Example, _Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.state = {
      running: false,
      loading: false
    };
    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          code = _this$props.code,
          RunComponent = _this$props.RunComponent;
      var _this$state = this.state,
          running = _this$state.running,
          loading = _this$state.loading;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "example",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 18,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__["default"], {
        language: "javascript",
        style: react_syntax_highlighter_dist_styles_hljs__WEBPACK_IMPORTED_MODULE_4__["docco"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, code.join('\n'))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        disabled: loading ? true : false,
        onClick: function onClick() {
          return _this2.setState({
            running: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "loading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }) : 'Run'), running ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
        message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, "Results"),
        type: "success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RunComponent, {
        onReady: function onReady() {
          var to = setTimeout(function () {
            _this2.setState({
              loading: false
            });
          }, 1000);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }))) : false))));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
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
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.446c63718efe98ecf775.hot-update.js.map