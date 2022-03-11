module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("PlN+");


/***/ }),

/***/ "5X+f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./common/components/Logo/Logo.jsx

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Logo(_ref) {
  let {
    src,
    alt
  } = _ref,
      restProps = _objectWithoutProperties(_ref, ["src", "alt"]);

  return __jsx("img", _extends({
    src: src,
    alt: alt
  }, restProps));
}

Logo.defaultProps = {
  style: {}
};
/* harmony default export */ var Logo_Logo = (Logo);
// CONCATENATED MODULE: ./common/components/Logo/index.js

/* harmony default export */ var components_Logo = __webpack_exports__["a"] = (Logo_Logo);

/***/ }),

/***/ "FJVA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./common/components/Logo/index.js + 1 modules
var Logo = __webpack_require__("5X+f");

// EXTERNAL MODULE: ./common/constants/index.js
var constants = __webpack_require__("M8v2");

// CONCATENATED MODULE: ./common/layouts/Authentication/Authentication.jsx

var __jsx = external_react_default.a.createElement;



function Authentication({
  children
}) {
  return __jsx("div", {
    style: {
      background: 'white',
      minHeight: '100vh',
      padding: 30
    }
  }, __jsx("div", null, __jsx(Logo["a" /* default */], {
    src: constants["b" /* logo */].app.src,
    alt: "logo",
    width: "50px"
  })), __jsx("div", {
    style: {
      margin: '30px auto 0',
      maxWidth: '1170px'
    }
  }, children), __jsx("div", {
    style: {
      position: 'fixed',
      bottom: 8,
      textAlign: 'center',
      width: '100%',
      color: '#212234',
      lineHeight: '1rem'
    }
  }, __jsx("span", null, "\xA9"), __jsx("span", {
    style: {
      fontSize: '0.75rem',
      verticalAlign: 'middle'
    }
  }, "ABC Racing Company")));
}

/* harmony default export */ var Authentication_Authentication = (Authentication);
// CONCATENATED MODULE: ./common/layouts/Authentication/index.js

/* harmony default export */ var layouts_Authentication = __webpack_exports__["a"] = (Authentication_Authentication);

/***/ }),

/***/ "L0GJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var style = __webpack_require__("MaXC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// CONCATENATED MODULE: ./common/components/Button/Button.jsx


/* harmony default export */ var Button = (button_default.a);
// CONCATENATED MODULE: ./common/components/Button/index.js

/* harmony default export */ var components_Button = __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "M8v2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locale; });
const logo = {
  app: {
    src: '/abc_logo.png'
  }
};
const locale = {
  EN: 'en',
  AS: 'as',
  GU: 'gu',
  HI: 'hi',
  KN: 'kn',
  ML: 'ml',
  OR: 'or',
  TA: 'ta',
  TE: 'te'
};
/* unused harmony default export */ var _unused_webpack_default_export = ({
  locale,
  logo
});

/***/ }),

/***/ "MaXC":
/***/ (function(module, exports) {



/***/ }),

/***/ "PlN+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./common/components/Button/index.js + 1 modules
var Button = __webpack_require__("L0GJ");

// EXTERNAL MODULE: ./common/components/Input/index.js + 1 modules
var Input = __webpack_require__("p38Q");

// EXTERNAL MODULE: ./common/components/Icon/index.js + 2 modules
var Icon = __webpack_require__("njtY");

// CONCATENATED MODULE: ./views/ForgotPassword/ForgotPassword.jsx

var __jsx = external_react_default.a.createElement;




function ForgotPassword() {
  return __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, __jsx("div", {
    style: {
      width: '65.8%',
      height: '400px'
    }
  }, __jsx("img", {
    src: "/auth-img.jpg",
    alt: "auth-img",
    height: "100%",
    width: "100%"
  })), __jsx("div", {
    style: {
      width: '31.6%',
      padding: 30,
      borderRadius: '8px'
    },
    className: "Box--Shadow"
  }, __jsx("div", null, __jsx("div", {
    style: {
      textAlign: 'center'
    }
  }, __jsx("div", {
    style: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    }
  }, "FORGOT PASSWORD?"), __jsx("div", {
    className: "Font--S14",
    style: {
      lineHeight: 1.5
    }
  }, "Please enter your Login Id and we will send a new password to your registered email id/mobile number.")), __jsx("div", {
    style: {
      marginTop: 30
    }
  }, __jsx("div", null, __jsx(Input["a" /* default */], {
    labelText: "Login Id",
    placeholder: "Login Id"
  }))), __jsx("div", {
    style: {
      paddingTop: 24,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }
  }, __jsx(Button["a" /* default */], {
    type: "primary",
    style: {
      width: '100%',
      height: 40,
      borderRadius: 4,
      fontSize: '0.8rem',
      fontWeight: 'bold'
    }
  }, "Send Password"), __jsx("div", {
    style: {
      paddingTop: 30,
      fontSize: 14
    }
  }, "Don\u2019t have a registered email id/phone number"), __jsx("div", {
    style: {
      display: 'flex',
      marginTop: '10px',
      alignItems: 'center'
    }
  }, __jsx(Icon["a" /* default */], {
    name: "call"
  }), __jsx("span", {
    className: "Primary Font--S14",
    style: {
      margin: '0 30px 0 8px'
    }
  }, "107-156-5631"), __jsx(Icon["a" /* default */], {
    name: "email"
  }), __jsx("span", {
    className: "Primary Font--S14",
    style: {
      marginLeft: '8px'
    }
  }, "support@abc.in"))))));
}

/* harmony default export */ var ForgotPassword_ForgotPassword = (ForgotPassword);
// CONCATENATED MODULE: ./views/ForgotPassword/index.js

/* harmony default export */ var views_ForgotPassword = (ForgotPassword_ForgotPassword);
// EXTERNAL MODULE: ./common/layouts/Authentication/index.js + 1 modules
var Authentication = __webpack_require__("FJVA");

// CONCATENATED MODULE: ./pages/forgot-password.jsx



const forgotPassword = () => null;

forgotPassword.View = views_ForgotPassword;
forgotPassword.Layout = Authentication["a" /* default */];
/* harmony default export */ var forgot_password = __webpack_exports__["default"] = (forgotPassword);

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cUip":
/***/ (function(module, exports) {



/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "f/fF":
/***/ (function(module, exports) {



/***/ }),

/***/ "njtY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./common/components/Icon/Icons.jsx

var __jsx = external_react_default.a.createElement;
/* harmony default export */ var Icons = ({
  call: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, __jsx("path", {
    fill: "#ED3035",
    d: "M14.716 10.502c-.98 0-1.941-.153-2.853-.454-.446-.153-.995-.013-1.268.267l-1.799 1.358C6.71 10.56 5.424 9.275 4.326 7.204l1.318-1.752c.343-.342.465-.842.318-1.31-.302-.917-.456-1.878-.456-2.858C5.506.576 4.93 0 4.222 0H1.284C.576 0 0 .576 0 1.284 0 9.398 6.602 16 14.716 16c.708 0 1.284-.576 1.284-1.284v-2.93c0-.708-.576-1.284-1.284-1.284z"
  })),
  email: () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "15",
    viewBox: "0 0 20 15"
  }, __jsx("g", {
    fill: "#ED3035"
  }, __jsx("path", {
    d: "M13.258 6.978L20 11.24 20 2.535zM0 2.535L0 11.24 6.742 6.978zM18.75 0H1.25C.626 0 .131.465.038 1.064L10 7.628l9.962-6.564C19.87.465 19.374 0 18.75 0zM12.113 7.732l-1.77 1.166C10.24 8.966 10.12 9 10 9c-.12 0-.239-.034-.344-.102L7.887 7.73.04 12.695c.096.594.589 1.055 1.21 1.055h17.5c.621 0 1.114-.461 1.21-1.055l-7.848-4.963z",
    transform: "translate(0 .5)"
  }))),
  'user-profile': () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "40",
    height: "40",
    viewBox: "0 0 40 40"
  }, __jsx("defs", null, __jsx("circle", {
    id: "prefix__a",
    cx: "20",
    cy: "20",
    r: "20"
  })), __jsx("g", {
    fill: "none",
    fillRule: "evenodd"
  }, __jsx("path", {
    fill: "#4C4C4C",
    d: "M19 19H40V40H19z"
  }), __jsx("mask", {
    id: "prefix__b",
    fill: "#fff"
  }, __jsx("use", {
    xlinkHref: "#prefix__a"
  })), __jsx("use", {
    fill: "#4C4C4C",
    xlinkHref: "#prefix__a"
  }), __jsx("g", {
    stroke: "#FFF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    mask: "url(#prefix__b)"
  }, __jsx("g", {
    transform: "translate(12 11)"
  }, __jsx("path", {
    d: "M16 18v-2c0-2.21-1.79-4-4-4H4c-2.21 0-4 1.79-4 4v2"
  }), __jsx("circle", {
    cx: "8",
    cy: "4",
    r: "4"
  }))))),
  'power-setting': () => __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "16",
    viewBox: "0 0 24 24",
    width: "16"
  }, __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), __jsx("path", {
    fill: "#ED3035",
    d: "M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
  }))
});
// CONCATENATED MODULE: ./common/components/Icon/Icon.jsx
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function Icon(_ref) {
  let {
    name
  } = _ref,
      restProps = _objectWithoutProperties(_ref, ["name"]);

  return Icons[name](restProps);
}
// CONCATENATED MODULE: ./common/components/Icon/index.js

/* harmony default export */ var components_Icon = __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ "p38Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/index.js
var style = __webpack_require__("cUip");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./common/components/Input/input.less
var input = __webpack_require__("f/fF");

// CONCATENATED MODULE: ./common/components/Input/Input.jsx



var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Input(_ref) {
  let {
    labelText,
    errorText
  } = _ref,
      restProps = _objectWithoutProperties(_ref, ["labelText", "errorText"]);

  return __jsx("div", {
    className: "Input"
  }, labelText && __jsx("span", {
    className: `Input__Label ${errorText && 'Error'}`
  }, labelText), __jsx(input_default.a, _extends({
    className: `Box--Shadow ${errorText && 'Error--Border'}`
  }, restProps)), errorText && __jsx("span", {
    className: "Input__Error"
  }, errorText));
}

Input.defaultProps = {
  labelText: '',
  errorText: '',
  maxLength: 30
};
/* harmony default export */ var Input_Input = (Input);
// CONCATENATED MODULE: ./common/components/Input/index.js

/* harmony default export */ var components_Input = __webpack_exports__["a"] = (Input_Input);

/***/ })

/******/ });