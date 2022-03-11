exports.ids = [9];
exports.modules = {

/***/ "AAvW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./common/components/Icon/index.js + 2 modules
var Icon = __webpack_require__("njtY");

// EXTERNAL MODULE: ./node_modules/antd/lib/dropdown/style/index.js
var style = __webpack_require__("G851");

// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__("HgHO");
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// CONCATENATED MODULE: ./common/components/Dropdown/Dropdown.jsx


/* harmony default export */ var Dropdown = (dropdown_default.a);
// CONCATENATED MODULE: ./common/components/Dropdown/index.js

/* harmony default export */ var components_Dropdown = (Dropdown);
// EXTERNAL MODULE: ./node_modules/antd/lib/menu/style/index.js
var menu_style = __webpack_require__("PFYH");

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// CONCATENATED MODULE: ./common/components/Menu/Menu.jsx


/* harmony default export */ var Menu = (menu_default.a);
// CONCATENATED MODULE: ./common/components/Menu/index.js

/* harmony default export */ var components_Menu = (Menu);
// CONCATENATED MODULE: ./common/layouts/ProtectedPages/ProfileOptions.jsx

var __jsx = external_react_default.a.createElement;




const ProfileOptions = props => {
  const handleClick = ({
    key
  }) => {
    if (key === 'logout') {
      props.logoutUser();
    }
  };

  const menu = __jsx(components_Menu, {
    onClick: handleClick,
    style: {
      minWidth: '160px'
    }
  }, __jsx(components_Menu.Item, {
    key: "logout"
  }, __jsx("div", {
    className: "Flex AlignItems--Center Font--S14 Primary"
  }, __jsx(Icon["a" /* default */], {
    name: "power-setting"
  }), __jsx("span", {
    className: "Ml-12"
  }, "Logout"))));

  return __jsx(components_Dropdown, {
    overlay: menu,
    placement: "bottomRight"
  }, __jsx("span", null, __jsx(Icon["a" /* default */], {
    name: "user-profile"
  })));
};

/* harmony default export */ var ProtectedPages_ProfileOptions = __webpack_exports__["default"] = (ProfileOptions);

/***/ }),

/***/ "G851":
/***/ (function(module, exports) {



/***/ }),

/***/ "PFYH":
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

/***/ })

};;