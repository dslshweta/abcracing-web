module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/_app.js": 0
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./apis/login.js":
/*!***********************!*\
  !*** ./apis/login.js ***!
  \***********************/
/*! exports provided: loginUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
// import apiCall from './apiRequest';
// import endPoints from './endpoints';
function loginUser() {
  // return apiCall({
  //   endpoint: endPoints.me
  // });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        access_token: 'token received'
      });
    }, 2000);
  });
}
/* harmony default export */ __webpack_exports__["default"] = ({
  loginUser
});

/***/ }),

/***/ "./apis/user.js":
/*!**********************!*\
  !*** ./apis/user.js ***!
  \**********************/
/*! exports provided: fetchUser, logoutUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
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
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchUser,
  logoutUser
});

/***/ }),

/***/ "./assets/styles/global.less":
/*!***********************************!*\
  !*** ./assets/styles/global.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./common/components/Notification/index.js":
/*!*************************************************!*\
  !*** ./common/components/Notification/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Notification */ "./common/components/Notification/Notification.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Notification */ "./common/components/Notification/Notification.jsx")],
    modules: ['./Notification']
  }
}));

/***/ }),

/***/ "./common/constants/index.js":
/*!***********************************!*\
  !*** ./common/constants/index.js ***!
  \***********************************/
/*! exports provided: logo, locale, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logo", function() { return logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
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
/* harmony default export */ __webpack_exports__["default"] = ({
  locale,
  logo
});

/***/ }),

/***/ "./locales/as/index.js":
/*!*****************************!*\
  !*** ./locales/as/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations.json */ "./locales/as/translations.json");
var _translations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translations.json */ "./locales/as/translations.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (_translations_json__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./locales/as/translations.json":
/*!**************************************!*\
  !*** ./locales/as/translations.json ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "./locales/en/index.js":
/*!*****************************!*\
  !*** ./locales/en/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations.json */ "./locales/en/translations.json");
var _translations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translations.json */ "./locales/en/translations.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (_translations_json__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./locales/en/translations.json":
/*!**************************************!*\
  !*** ./locales/en/translations.json ***!
  \**************************************/
/*! exports provided: test, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"test\":\"test\"}");

/***/ }),

/***/ "./locales/gu/index.js":
/*!*****************************!*\
  !*** ./locales/gu/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations.json */ "./locales/gu/translations.json");
var _translations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translations.json */ "./locales/gu/translations.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (_translations_json__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./locales/gu/translations.json":
/*!**************************************!*\
  !*** ./locales/gu/translations.json ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "./locales/hi/index.js":
/*!*****************************!*\
  !*** ./locales/hi/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations.json */ "./locales/hi/translations.json");
var _translations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translations.json */ "./locales/hi/translations.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (_translations_json__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./locales/hi/translations.json":
/*!**************************************!*\
  !*** ./locales/hi/translations.json ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "./locales/index.js":
/*!**************************!*\
  !*** ./locales/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en */ "./locales/en/index.js");
/* harmony import */ var _as__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./as */ "./locales/as/index.js");
/* harmony import */ var _gu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gu */ "./locales/gu/index.js");
/* harmony import */ var _hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hi */ "./locales/hi/index.js");
/* harmony import */ var _kn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kn */ "./locales/kn/index.js");
/* harmony import */ var _ml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ml */ "./locales/ml/index.js");
/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./or */ "./locales/or/index.js");
/* harmony import */ var _ta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ta */ "./locales/ta/index.js");
/* harmony import */ var _te__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./te */ "./locales/te/index.js");









const translations = {
  en: _en__WEBPACK_IMPORTED_MODULE_0__["default"],
  as: _as__WEBPACK_IMPORTED_MODULE_1__["default"],
  gu: _gu__WEBPACK_IMPORTED_MODULE_2__["default"],
  hi: _hi__WEBPACK_IMPORTED_MODULE_3__["default"],
  kn: _kn__WEBPACK_IMPORTED_MODULE_4__["default"],
  ml: _ml__WEBPACK_IMPORTED_MODULE_5__["default"],
  or: _or__WEBPACK_IMPORTED_MODULE_6__["default"],
  ta: _ta__WEBPACK_IMPORTED_MODULE_7__["default"],
  te: _te__WEBPACK_IMPORTED_MODULE_8__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (function (locale) {
  return translations[locale] || _en__WEBPACK_IMPORTED_MODULE_0__["default"];
});

/***/ }),

/***/ "./locales/kn/index.js":
/*!*****************************!*\
  !*** ./locales/kn/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations.json */ "./locales/kn/translations.json");
var _translations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translations.json */ "./locales/kn/translations.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (_translations_json__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./locales/kn/translations.json":
/*!**************************************!*\
  !*** ./locales/kn/translations.json ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "./locales/ml/index.js":
/*!*****************************!*\
  !*** ./locales/ml/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations.json */ "./locales/ml/translations.json");
var _translations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translations.json */ "./locales/ml/translations.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (_translations_json__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./locales/ml/translations.json":
/*!**************************************!*\
  !*** ./locales/ml/translations.json ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "./locales/or/index.js":
/*!*****************************!*\
  !*** ./locales/or/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations.json */ "./locales/or/translations.json");
var _translations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translations.json */ "./locales/or/translations.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (_translations_json__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./locales/or/translations.json":
/*!**************************************!*\
  !*** ./locales/or/translations.json ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "./locales/ta/index.js":
/*!*****************************!*\
  !*** ./locales/ta/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations.json */ "./locales/ta/translations.json");
var _translations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translations.json */ "./locales/ta/translations.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (_translations_json__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./locales/ta/translations.json":
/*!**************************************!*\
  !*** ./locales/ta/translations.json ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "./locales/te/index.js":
/*!*****************************!*\
  !*** ./locales/te/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations.json */ "./locales/te/translations.json");
var _translations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translations.json */ "./locales/te/translations.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (_translations_json__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./locales/te/translations.json":
/*!**************************************!*\
  !*** ./locales/te/translations.json ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/style/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/style/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_config_provider_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/config-provider/style */ "./node_modules/antd/lib/config-provider/style/index.js");
/* harmony import */ var antd_lib_config_provider_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/config-provider */ "antd/lib/config-provider");
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _common_components_Notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/components/Notification */ "./common/components/Notification/index.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/constants */ "./common/constants/index.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locales */ "./locales/index.js");
/* harmony import */ var _assets_styles_global_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/styles/global.less */ "./assets/styles/global.less");
/* harmony import */ var _assets_styles_global_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_global_less__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "/var/www/html/abcracing-web/pages/_app.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











class Racing extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps({
      ctx
    }) : {}; // anything returned here can be access by the client

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    const {
      View = react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
      Layout = react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
      RouteGuard = react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment
    } = Component; // note: update here as change local get implemented over app.

    const localeName = _common_constants__WEBPACK_IMPORTED_MODULE_9__["locale"].EN;
    const translations = Object(_locales__WEBPACK_IMPORTED_MODULE_10__["default"])(localeName);
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["IntlProvider"], {
      locale: localeName,
      messages: translations,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }, __jsx(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, __jsx(_common_components_Notification__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }), __jsx(RouteGuard, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx(Layout, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, __jsx(View, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    })))))));
  }

} // withRedux wrapper that passes the store to the App Component


/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default()(_redux_store__WEBPACK_IMPORTED_MODULE_7__["default"])(Racing));

/***/ }),

/***/ "./redux/actions/login.js":
/*!********************************!*\
  !*** ./redux/actions/login.js ***!
  \********************************/
/*! exports provided: LOGIN_USER_START, LOGIN_USER_END, ERROR_USER_LOGIN, loginUserStart, loginUserEnd, raiseErrorLoginUser, loginUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER_START", function() { return LOGIN_USER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER_END", function() { return LOGIN_USER_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_USER_LOGIN", function() { return ERROR_USER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserStart", function() { return loginUserStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserEnd", function() { return loginUserEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raiseErrorLoginUser", function() { return raiseErrorLoginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/login */ "./apis/login.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification */ "./redux/actions/notification.js");



const LOGIN_USER_START = 'LOGIN_USER_START';
const LOGIN_USER_END = 'LOGIN_USER_END';
const ERROR_USER_LOGIN = 'ERROR_USER';
function loginUserStart() {
  return {
    type: LOGIN_USER_START
  };
}
function loginUserEnd(payload = {}) {
  return {
    type: LOGIN_USER_END,
    payload
  };
}
function raiseErrorLoginUser() {
  return {
    type: ERROR_USER_LOGIN
  };
}
function loginUser(values) {
  return dispatch => {
    dispatch(loginUserStart());
    Object(_apis_login__WEBPACK_IMPORTED_MODULE_1__["loginUser"])(values).then(res => {
      dispatch(loginUserEnd(res));
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/profile');
    }).catch(() => {
      dispatch(Object(_notification__WEBPACK_IMPORTED_MODULE_2__["notify"])({
        type: 'error',
        message: 'Invalid Credentials'
      }));
      dispatch(raiseErrorLoginUser());
    });
  };
}

/***/ }),

/***/ "./redux/actions/notification.js":
/*!***************************************!*\
  !*** ./redux/actions/notification.js ***!
  \***************************************/
/*! exports provided: OPEN_NOTIFICATION, CLOSE_NOTIFICATION, openNotification, notify, closeNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_NOTIFICATION", function() { return OPEN_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_NOTIFICATION", function() { return CLOSE_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openNotification", function() { return openNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeNotification", function() { return closeNotification; });
const OPEN_NOTIFICATION = 'OPEN_NOTIFICATION';
const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';
function openNotification(payload) {
  return {
    type: OPEN_NOTIFICATION,
    payload
  };
}
function notify(payload) {
  return dispatch => {
    dispatch(openNotification(payload));
  };
}
function closeNotification() {
  return {
    type: CLOSE_NOTIFICATION
  };
}

/***/ }),

/***/ "./redux/actions/user.js":
/*!*******************************!*\
  !*** ./redux/actions/user.js ***!
  \*******************************/
/*! exports provided: FETCH_USER_START, FETCH_USER_END, ERROR_USER, LOGOUT_USER, fetchUserStart, fetchUserEnd, raiseErrorFetchUser, logoutUser, getAuthUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_START", function() { return FETCH_USER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_END", function() { return FETCH_USER_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_USER", function() { return ERROR_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserStart", function() { return fetchUserStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserEnd", function() { return fetchUserEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raiseErrorFetchUser", function() { return raiseErrorFetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthUser", function() { return getAuthUser; });
/* harmony import */ var _apis_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/user */ "./apis/user.js");

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
function logoutUser() {
  return dispatch => {
    Object(_apis_user__WEBPACK_IMPORTED_MODULE_0__["logoutUser"])().then(() => {}).catch(() => {});
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
    Object(_apis_user__WEBPACK_IMPORTED_MODULE_0__["fetchUser"])().then(res => {
      dispatch(fetchUserEnd(res.body));
    }).catch(() => {
      dispatch(raiseErrorFetchUser());
    });
  };
}

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./redux/reducers/user.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./redux/reducers/login.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification */ "./redux/reducers/notification.js");




const combinedReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  login: _login__WEBPACK_IMPORTED_MODULE_2__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  notification: _notification__WEBPACK_IMPORTED_MODULE_3__["default"]
});

const rootReducer = (state, action) => {
  let appState = state; // As one reducer can not update the key values for other reducer keys here we are handling
  // the logout before actual reducers get fired and setting the whole redux store to undefined.

  appState = Object(_user__WEBPACK_IMPORTED_MODULE_1__["clearReduxOnLogout"])(appState, action);
  return combinedReducers(appState, action);
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/reducers/login.js":
/*!*********************************!*\
  !*** ./redux/reducers/login.js ***!
  \*********************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loginReducer; });
/* harmony import */ var _actions_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/login */ "./redux/actions/login.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ------------------------------------
// Imports
// ------------------------------------
 // ------------------------------------
// Reducer Handlers
// ------------------------------------

const initialState = {
  isProcessing: false,
  isError: false,
  info: {}
};
const REDUCER_HANDLERS = {
  [_actions_login__WEBPACK_IMPORTED_MODULE_0__["LOGIN_USER_START"]]: () => _objectSpread({}, initialState, {
    isProcessing: true
  }),
  [_actions_login__WEBPACK_IMPORTED_MODULE_0__["ERROR_USER_LOGIN"]]: () => _objectSpread({}, initialState, {
    isError: true
  }),
  [_actions_login__WEBPACK_IMPORTED_MODULE_0__["LOGIN_USER_END"]]: (state, action) => _objectSpread({}, initialState, {
    info: action.payload
  })
}; // ------------------------------------
// Reducer
// ------------------------------------

function loginReducer(state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

/***/ }),

/***/ "./redux/reducers/notification.js":
/*!****************************************!*\
  !*** ./redux/reducers/notification.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return notifyReducer; });
/* harmony import */ var _actions_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/notification */ "./redux/actions/notification.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isOpen: false,
  info: {}
};
const REDUCER_HANDLERS = {
  [_actions_notification__WEBPACK_IMPORTED_MODULE_0__["OPEN_NOTIFICATION"]]: (state, {
    payload
  }) => ({
    isOpen: true,
    info: payload
  }),
  [_actions_notification__WEBPACK_IMPORTED_MODULE_0__["CLOSE_NOTIFICATION"]]: () => _objectSpread({}, initialState)
}; // ------------------------------------
// Reducer
// ------------------------------------

function notifyReducer(state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

/***/ }),

/***/ "./redux/reducers/user.js":
/*!********************************!*\
  !*** ./redux/reducers/user.js ***!
  \********************************/
/*! exports provided: initialState, clearReduxOnLogout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearReduxOnLogout", function() { return clearReduxOnLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return authReducer; });
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user */ "./redux/actions/user.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ------------------------------------
// Imports
// ------------------------------------
 // ------------------------------------
// Reducer Handlers
// ------------------------------------

const initialState = {
  isFetching: false,
  isError: false,
  info: null
};
const REDUCER_HANDLERS = {
  [_actions_user__WEBPACK_IMPORTED_MODULE_0__["FETCH_USER_START"]]: () => _objectSpread({}, initialState, {
    isFetching: true
  }),
  [_actions_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_USER"]]: () => _objectSpread({}, initialState, {
    isError: true
  }),
  [_actions_user__WEBPACK_IMPORTED_MODULE_0__["FETCH_USER_END"]]: (state, action) => _objectSpread({}, initialState, {
    info: action.payload
  })
};
function clearReduxOnLogout(state, action) {
  let appState = state;

  if (action.type === _actions_user__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"]) {
    appState = undefined;
  }

  return appState;
} // ------------------------------------
// Reducer
// ------------------------------------

function authReducer(state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");



/* harmony default export */ __webpack_exports__["default"] = ((initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a]; // ======================================================
  // Store Enhancers
  // ======================================================

  const enhancers = [];
  const composeEnhancers =  false || redux__WEBPACK_IMPORTED_MODULE_0__["compose"]; // ======================================================
  // Store Instantiation
  // ======================================================

  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware), ...enhancers));
  return store;
});

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "antd/lib/config-provider":
/*!*******************************************!*\
  !*** external "antd/lib/config-provider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/config-provider");

/***/ }),

/***/ "antd/lib/notification":
/*!****************************************!*\
  !*** external "antd/lib/notification" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map