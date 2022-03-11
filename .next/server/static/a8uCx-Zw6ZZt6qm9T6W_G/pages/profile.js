module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		8: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"9":"5f7d95b2f42c40722c9d","11":"6cab55430c3cbbe8d790"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("W+IF");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "HgHO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

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

/***/ "W+IF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./views/Profile/Profile.jsx

var __jsx = external_react_default.a.createElement;

function Profile() {
  return __jsx(external_react_default.a.Fragment, null, __jsx("span", null, "Profile view "));
}

/* harmony default export */ var Profile_Profile = (Profile);
// CONCATENATED MODULE: ./views/Profile/index.js

/* harmony default export */ var views_Profile = (Profile_Profile);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/actions/user.js + 1 modules
var user = __webpack_require__("j6IE");

// CONCATENATED MODULE: ./common/hocs/withLogoutOnRefersh/withLogoutOnReferesh.jsx

var withLogoutOnReferesh_jsx = external_react_default.a.createElement;




function withLogoutOnReferesh(Component) {
  function ComponentWithLogoutReferesh(props) {
    const logoutUser = () => {
      props.logoutUserAction();
    };

    const bindEvents = () => {
      window.addEventListener('popstate', logoutUser, false);
      window.addEventListener('beforeunload', logoutUser);
    };

    const unbindEvents = () => {
      window.removeEventListener('popstate', logoutUser);
      window.removeEventListener('beforeunload', logoutUser);
    };

    Object(external_react_["useEffect"])(() => {
      bindEvents();
      return unbindEvents;
    }, []);
    return withLogoutOnReferesh_jsx(Component, props);
  }

  return Object(external_react_redux_["connect"])(null, {
    logoutUserAction: user["f" /* logoutUser */]
  })(ComponentWithLogoutReferesh);
}

/* harmony default export */ var withLogoutOnRefersh_withLogoutOnReferesh = (withLogoutOnReferesh);
// CONCATENATED MODULE: ./common/hocs/withLogoutOnRefersh/index.js

/* harmony default export */ var withLogoutOnRefersh = (withLogoutOnRefersh_withLogoutOnReferesh);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./common/components/Navbar/navbar.less
var navbar = __webpack_require__("wFyw");

// CONCATENATED MODULE: ./common/components/Navbar/Navbar.jsx

var Navbar_jsx = external_react_default.a.createElement;


function Navbar({
  children
}) {
  return Navbar_jsx("div", {
    className: "Navbar Box--Shadow"
  }, children);
}

/* harmony default export */ var Navbar_Navbar = (Navbar);
// CONCATENATED MODULE: ./common/components/Navbar/index.js

/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// EXTERNAL MODULE: ./common/components/Logo/index.js + 1 modules
var Logo = __webpack_require__("5X+f");

// EXTERNAL MODULE: ./common/constants/index.js
var constants = __webpack_require__("M8v2");

// EXTERNAL MODULE: ./common/layouts/ProtectedPages/protectedPages.less
var protectedPages = __webpack_require__("vLL0");

// CONCATENATED MODULE: ./common/layouts/ProtectedPages/ProtectedPages.jsx

var ProtectedPages_jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const ProfileOptions = dynamic_default()(() => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, "AAvW")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("AAvW")],
    modules: ['./ProfileOptions']
  }
});

function ProtectedPages(_ref) {
  let {
    children
  } = _ref,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  return ProtectedPages_jsx("div", {
    className: "Layout__ProtectedPages"
  }, ProtectedPages_jsx("div", {
    className: "Layout__ProtectedPages__NavbarWrap"
  }, ProtectedPages_jsx(components_Navbar, null, ProtectedPages_jsx(Logo["a" /* default */], {
    src: constants["b" /* logo */].app.src,
    alt: "logo",
    width: "50px"
  }), ProtectedPages_jsx("div", null, ProtectedPages_jsx(ProfileOptions, {
    logoutUser: restProps.logoutUser
  })))), ProtectedPages_jsx("div", {
    className: "Layout__ProtectedPages__ContentWrap"
  }, children));
}

/* harmony default export */ var ProtectedPages_ProtectedPages = (Object(external_react_redux_["connect"])(null, {
  logoutUser: user["f" /* logoutUser */]
})(ProtectedPages));
// CONCATENATED MODULE: ./common/layouts/ProtectedPages/index.js


/* harmony default export */ var layouts_ProtectedPages = (withLogoutOnRefersh(ProtectedPages_ProtectedPages));
// CONCATENATED MODULE: ./common/routeGuards/LoginRequired/index.js

/* harmony default export */ var LoginRequired = (dynamic_default()(() => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, "8thq")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("8thq")],
    modules: ['./LoginRequired']
  }
}));
// CONCATENATED MODULE: ./pages/profile.js




const profile = () => null;

profile.View = views_Profile;
profile.Layout = layouts_ProtectedPages;
profile.RouteGuard = LoginRequired;
/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (profile);

/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "j6IE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ FETCH_USER_START; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ FETCH_USER_END; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ERROR_USER; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ LOGOUT_USER; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ user_logoutUser; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ getAuthUser; });

// UNUSED EXPORTS: fetchUserStart, fetchUserEnd, raiseErrorFetchUser

// CONCATENATED MODULE: ./apis/user.js
// import apiCall from './apiRequest';
// import endPoints from './endpoints';
function fetchUser() {
  // return apiCall({
  //   endpoint: endPoints.me
  // });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        body: {
          name: 'Divyaansh Jaiswal'
        }
      });
    }, 4000);
  });
}
function logoutUser() {
  // return apiCall({
  //   endpoint: '/',
  // });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        body: {}
      });
    }, 1000);
  });
}
/* harmony default export */ var user = ({
  fetchUser,
  logoutUser
});
// CONCATENATED MODULE: ./redux/actions/user.js

const FETCH_USER_START = 'FETCH_USER_START';
const FETCH_USER_END = 'FETCH_USER_END';
const ERROR_USER = 'ERROR_USER';
const LOGOUT_USER = 'LOGOUT_USER';
function fetchUserStart() {
  return {
    type: FETCH_USER_START
  };
}
function fetchUserEnd(payload = {}) {
  return {
    type: FETCH_USER_END,
    payload
  };
}
function raiseErrorFetchUser() {
  return {
    type: ERROR_USER
  };
}
function user_logoutUser() {
  return dispatch => {
    logoutUser().then(() => {}).catch(() => {});
    dispatch({
      type: LOGOUT_USER
    });
  };
}
/*
 * @export function handleFetchUser action handler
 * loads the user from api
 */

function getAuthUser() {
  return dispatch => {
    dispatch(fetchUserStart());
    fetchUser().then(res => {
      dispatch(fetchUserEnd(res.body));
    }).catch(() => {
      dispatch(raiseErrorFetchUser());
    });
  };
}

/***/ }),

/***/ "vLL0":
/***/ (function(module, exports) {



/***/ }),

/***/ "wFyw":
/***/ (function(module, exports) {



/***/ })

/******/ });