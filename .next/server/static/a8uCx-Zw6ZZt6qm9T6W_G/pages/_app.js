module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"10":"b2e62d7e31a43538669f"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/lsp":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "/op1":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YNMu");


/***/ }),

/***/ "3CMr":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7t/W":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "EbXr":
/***/ (function(module) {

module.exports = JSON.parse("{\"test\":\"test\"}");

/***/ }),

/***/ "GPII":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "Gss8":
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "Saan":
/***/ (function(module, exports) {



/***/ }),

/***/ "Ta4T":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "XjiK":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "YNFu":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "YNMu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/lib/config-provider/style/index.js
var style = __webpack_require__("Saan");

// EXTERNAL MODULE: external "antd/lib/config-provider"
var config_provider_ = __webpack_require__("ztzw");
var config_provider_default = /*#__PURE__*/__webpack_require__.n(config_provider_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./redux/actions/user.js + 1 modules
var user = __webpack_require__("j6IE");

// CONCATENATED MODULE: ./redux/reducers/user.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ------------------------------------
// Imports
// ------------------------------------
 // ------------------------------------
// Reducer Handlers
// ------------------------------------

const user_initialState = {
  isFetching: false,
  isError: false,
  info: null
};
const REDUCER_HANDLERS = {
  [user["c" /* FETCH_USER_START */]]: () => _objectSpread({}, user_initialState, {
    isFetching: true
  }),
  [user["a" /* ERROR_USER */]]: () => _objectSpread({}, user_initialState, {
    isError: true
  }),
  [user["b" /* FETCH_USER_END */]]: (state, action) => _objectSpread({}, user_initialState, {
    info: action.payload
  })
};
function clearReduxOnLogout(state, action) {
  let appState = state;

  if (action.type === user["d" /* LOGOUT_USER */]) {
    appState = undefined;
  }

  return appState;
} // ------------------------------------
// Reducer
// ------------------------------------

function authReducer(state = user_initialState, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
// EXTERNAL MODULE: ./redux/actions/login.js + 1 modules
var login = __webpack_require__("oJ/G");

// CONCATENATED MODULE: ./redux/reducers/login.js
function login_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function login_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { login_ownKeys(Object(source), true).forEach(function (key) { login_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { login_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function login_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ------------------------------------
// Imports
// ------------------------------------
 // ------------------------------------
// Reducer Handlers
// ------------------------------------

const login_initialState = {
  isProcessing: false,
  isError: false,
  info: {}
};
const login_REDUCER_HANDLERS = {
  [login["c" /* LOGIN_USER_START */]]: () => login_objectSpread({}, login_initialState, {
    isProcessing: true
  }),
  [login["a" /* ERROR_USER_LOGIN */]]: () => login_objectSpread({}, login_initialState, {
    isError: true
  }),
  [login["b" /* LOGIN_USER_END */]]: (state, action) => login_objectSpread({}, login_initialState, {
    info: action.payload
  })
}; // ------------------------------------
// Reducer
// ------------------------------------

function loginReducer(state = login_initialState, action) {
  const handler = login_REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
// EXTERNAL MODULE: ./redux/actions/notification.js
var notification = __webpack_require__("z9yK");

// CONCATENATED MODULE: ./redux/reducers/notification.js
function notification_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function notification_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { notification_ownKeys(Object(source), true).forEach(function (key) { notification_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { notification_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function notification_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const notification_initialState = {
  isOpen: false,
  info: {}
};
const notification_REDUCER_HANDLERS = {
  [notification["b" /* OPEN_NOTIFICATION */]]: (state, {
    payload
  }) => ({
    isOpen: true,
    info: payload
  }),
  [notification["a" /* CLOSE_NOTIFICATION */]]: () => notification_objectSpread({}, notification_initialState)
}; // ------------------------------------
// Reducer
// ------------------------------------

function notifyReducer(state = notification_initialState, action) {
  const handler = notification_REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
// CONCATENATED MODULE: ./redux/reducers/index.js




const combinedReducers = Object(external_redux_["combineReducers"])({
  login: loginReducer,
  user: authReducer,
  notification: notifyReducer
});

const rootReducer = (state, action) => {
  let appState = state; // As one reducer can not update the key values for other reducer keys here we are handling
  // the logout before actual reducers get fired and setting the whole redux store to undefined.

  appState = clearReduxOnLogout(appState, action);
  return combinedReducers(appState, action);
};

/* harmony default export */ var reducers = (rootReducer);
// CONCATENATED MODULE: ./redux/store.js



/* harmony default export */ var redux_store = ((initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [external_redux_thunk_default.a]; // ======================================================
  // Store Enhancers
  // ======================================================

  const enhancers = [];
  const composeEnhancers =  false || external_redux_["compose"]; // ======================================================
  // Store Instantiation
  // ======================================================

  const store = Object(external_redux_["createStore"])(reducers, initialState, composeEnhancers(Object(external_redux_["applyMiddleware"])(...middleware), ...enhancers));
  return store;
});
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./common/components/Notification/index.js

/* harmony default export */ var Notification = (dynamic_default()(() => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, "ai3/")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("ai3/")],
    modules: ['./Notification']
  }
}));
// EXTERNAL MODULE: ./common/constants/index.js
var constants = __webpack_require__("M8v2");

// EXTERNAL MODULE: ./locales/en/translations.json
var en_translations = __webpack_require__("EbXr");

// CONCATENATED MODULE: ./locales/en/index.js

/* harmony default export */ var en = (en_translations);
// EXTERNAL MODULE: ./locales/as/translations.json
var as_translations = __webpack_require__("GPII");

// CONCATENATED MODULE: ./locales/as/index.js

/* harmony default export */ var as = (as_translations);
// EXTERNAL MODULE: ./locales/gu/translations.json
var gu_translations = __webpack_require__("Ta4T");

// CONCATENATED MODULE: ./locales/gu/index.js

/* harmony default export */ var gu = (gu_translations);
// EXTERNAL MODULE: ./locales/hi/translations.json
var hi_translations = __webpack_require__("YNFu");

// CONCATENATED MODULE: ./locales/hi/index.js

/* harmony default export */ var hi = (hi_translations);
// EXTERNAL MODULE: ./locales/kn/translations.json
var kn_translations = __webpack_require__("3CMr");

// CONCATENATED MODULE: ./locales/kn/index.js

/* harmony default export */ var kn = (kn_translations);
// EXTERNAL MODULE: ./locales/ml/translations.json
var ml_translations = __webpack_require__("7t/W");

// CONCATENATED MODULE: ./locales/ml/index.js

/* harmony default export */ var ml = (ml_translations);
// EXTERNAL MODULE: ./locales/or/translations.json
var or_translations = __webpack_require__("/lsp");

// CONCATENATED MODULE: ./locales/or/index.js

/* harmony default export */ var or = (or_translations);
// EXTERNAL MODULE: ./locales/ta/translations.json
var ta_translations = __webpack_require__("/op1");

// CONCATENATED MODULE: ./locales/ta/index.js

/* harmony default export */ var ta = (ta_translations);
// EXTERNAL MODULE: ./locales/te/translations.json
var te_translations = __webpack_require__("XjiK");

// CONCATENATED MODULE: ./locales/te/index.js

/* harmony default export */ var te = (te_translations);
// CONCATENATED MODULE: ./locales/index.js









const locales_translations = {
  en: en,
  as: as,
  gu: gu,
  hi: hi,
  kn: kn,
  ml: ml,
  or: or,
  ta: ta,
  te: te
};
/* harmony default export */ var locales = (function (locale) {
  return locales_translations[locale] || en;
});
// EXTERNAL MODULE: ./assets/styles/global.less
var global = __webpack_require__("hlhc");

// CONCATENATED MODULE: ./pages/_app.jsx



var __jsx = external_react_default.a.createElement;










class _app_Racing extends app_default.a {
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
      View = external_react_default.a.Fragment,
      Layout = external_react_default.a.Fragment,
      RouteGuard = external_react_default.a.Fragment
    } = Component; // note: update here as change local get implemented over app.

    const localeName = constants["a" /* locale */].EN;
    const translations = locales(localeName);
    return __jsx(external_react_redux_["Provider"], {
      store: store
    }, __jsx(external_react_intl_["IntlProvider"], {
      locale: localeName,
      messages: translations
    }, __jsx(config_provider_default.a, null, __jsx(Notification, null), __jsx(RouteGuard, null, __jsx(Layout, null, __jsx(View, pageProps))))));
  }

} // withRedux wrapper that passes the store to the App Component


/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(redux_store)(_app_Racing));

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hlhc":
/***/ (function(module, exports) {



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

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "oJ/G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ LOGIN_USER_START; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ LOGIN_USER_END; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ERROR_USER_LOGIN; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ login_loginUser; });

// UNUSED EXPORTS: loginUserStart, loginUserEnd, raiseErrorLoginUser

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./apis/login.js
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
/* harmony default export */ var login = ({
  loginUser
});
// EXTERNAL MODULE: ./redux/actions/notification.js
var notification = __webpack_require__("z9yK");

// CONCATENATED MODULE: ./redux/actions/login.js



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
function login_loginUser(values) {
  return dispatch => {
    dispatch(loginUserStart());
    loginUser(values).then(res => {
      dispatch(loginUserEnd(res));
      router_default.a.push('/profile');
    }).catch(() => {
      dispatch(Object(notification["c" /* notify */])({
        type: 'error',
        message: 'Invalid Credentials'
      }));
      dispatch(raiseErrorLoginUser());
    });
  };
}

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "z9yK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OPEN_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLOSE_NOTIFICATION; });
/* unused harmony export openNotification */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return notify; });
/* unused harmony export closeNotification */
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

/***/ "ztzw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/config-provider");

/***/ })

/******/ });