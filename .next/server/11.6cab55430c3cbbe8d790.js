exports.ids = [11];
exports.modules = {

/***/ "8thq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("j6IE");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function LoginRequired({
  children,
  user,
  login,
  getAuthUser: _getAuthUser
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    isFetching,
    info
  } = user;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!login.info.access_token) {
      router.push('/login');
    }
  }, [login.info]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _getAuthUser();
  }, []);

  if (isFetching || !info) {
    return __jsx("div", null, "Loading...");
  }

  return __jsx("div", null, children);
}

function mapStateToProps({
  user,
  login
}) {
  return {
    user,
    login
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getAuthUser: _redux_actions_user__WEBPACK_IMPORTED_MODULE_3__[/* getAuthUser */ "e"]
})(LoginRequired));

/***/ })

};;