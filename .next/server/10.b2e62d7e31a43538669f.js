exports.ids = [10];
exports.modules = {

/***/ "ai3/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pjuD");
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Gss8");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);





function Notification({
  notification: {
    info,
    isOpen
  }
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (isOpen) {
      const {
        type,
        message,
        description
      } = info;

      antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default.a[type]({
        message,
        description
      });
    }
  }, [isOpen]);
  return null;
}

function mapStateToProps({
  notification
}) {
  return {
    notification
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Notification));

/***/ }),

/***/ "pjuD":
/***/ (function(module, exports) {



/***/ })

};;