exports.ids = [0];
exports.modules = {

/***/ "./common/components/Notification/Notification.jsx":
/*!*********************************************************!*\
  !*** ./common/components/Notification/Notification.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/notification/style */ "./node_modules/antd/lib/notification/style/index.js");
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/notification */ "antd/lib/notification");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
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

/***/ "./node_modules/antd/lib/notification/style/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/notification/style/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=0.js.map