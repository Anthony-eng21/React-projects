webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\awood\\OneDrive\\Desktop\\React\\NextJs Project One\\pages\\index.js";
// our-domain.com/
//allows us to add a head component to our page

// import Layout from "../components/layout/Layout";
 // const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address, 12345 Some City",
//     description: "This is A First Meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/8/84/Holy_SURP_Hovhannes_Church.jpg",
//     address: "Some address, 12345 Some City",
//     description: "This is A Second Meetup!",
//   },
//   {
//     id: "m3",
//     title: "A Third Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/7/7e/16-03-30-Klagemauer_Jerusalem_RalfR-DSCF7689.jpg",
//     address: "Some address, 12345 Some City",
//     description: "This is A Third Meetup!",
//   },
// ];

function HomePage(props) {
  //static generation cs server side rendering
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Next.js Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a list of highly active react/next meetup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), ";"]
  }, void 0, true); //request and fetch data only loads on first cycle and initial items (TODO Enhhance SEO Page PreRendering )
} // //generates on every incoming request
// //this can be bad because we need to wait on an individual request for it to work ;(
//   // ssg with static props is faster and we can utilize caching
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //Fetch data from an API(no need for revalidate property)
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   }
// }
//calls this function before it calls the component() and we pass the required data here


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQSxrQkFERixDQUZ1QixDQVd2QjtBQUNELEMsQ0FFRDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7S0EvQlNGLFE7O0FBOERNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZTYyOTdlYWMwNjFiMTkyNDVkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gb3VyLWRvbWFpbi5jb20vXHJcbi8vYWxsb3dzIHVzIHRvIGFkZCBhIGhlYWQgY29tcG9uZW50IHRvIG91ciBwYWdlXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuLy8gaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5cclxuLy8gY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuLy8gICB7XHJcbi8vICAgICBpZDogXCJtMVwiLFxyXG4vLyAgICAgdGl0bGU6IFwiQSBGaXJzdCBNZWV0dXBcIixcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZ1wiLFxyXG4vLyAgICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBBIEZpcnN0IE1lZXR1cCFcIixcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiBcIm0yXCIsXHJcbi8vICAgICB0aXRsZTogXCJBIFNlY29uZCBNZWV0dXBcIixcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvOC84NC9Ib2x5X1NVUlBfSG92aGFubmVzX0NodXJjaC5qcGdcIixcclxuLy8gICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzLCAxMjM0NSBTb21lIENpdHlcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgQSBTZWNvbmQgTWVldHVwIVwiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwibTNcIixcclxuLy8gICAgIHRpdGxlOiBcIkEgVGhpcmQgTWVldHVwXCIsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzcvN2UvMTYtMDMtMzAtS2xhZ2VtYXVlcl9KZXJ1c2FsZW1fUmFsZlItRFNDRjc2ODkuanBnXCIsXHJcbi8vICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcywgMTIzNDUgU29tZSBDaXR5XCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIEEgVGhpcmQgTWVldHVwIVwiLFxyXG4vLyAgIH0sXHJcbi8vIF07XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIC8vc3RhdGljIGdlbmVyYXRpb24gY3Mgc2VydmVyIHNpZGUgcmVuZGVyaW5nXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5OZXh0LmpzIE1lZXR1cHM8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJCcm93c2UgYSBsaXN0IG9mIGhpZ2hseSBhY3RpdmUgcmVhY3QvbmV4dCBtZWV0dXBcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xyXG4gICAgPC8+XHJcbiAgKTtcclxuICAvL3JlcXVlc3QgYW5kIGZldGNoIGRhdGEgb25seSBsb2FkcyBvbiBmaXJzdCBjeWNsZSBhbmQgaW5pdGlhbCBpdGVtcyAoVE9ETyBFbmhoYW5jZSBTRU8gUGFnZSBQcmVSZW5kZXJpbmcgKVxyXG59XHJcblxyXG4vLyAvL2dlbmVyYXRlcyBvbiBldmVyeSBpbmNvbWluZyByZXF1ZXN0XHJcblxyXG4vLyAvL3RoaXMgY2FuIGJlIGJhZCBiZWNhdXNlIHdlIG5lZWQgdG8gd2FpdCBvbiBhbiBpbmRpdmlkdWFsIHJlcXVlc3QgZm9yIGl0IHRvIHdvcmsgOyhcclxuLy8gICAvLyBzc2cgd2l0aCBzdGF0aWMgcHJvcHMgaXMgZmFzdGVyIGFuZCB3ZSBjYW4gdXRpbGl6ZSBjYWNoaW5nXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICAvL0ZldGNoIGRhdGEgZnJvbSBhbiBBUEkobm8gbmVlZCBmb3IgcmV2YWxpZGF0ZSBwcm9wZXJ0eSlcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vL2NhbGxzIHRoaXMgZnVuY3Rpb24gYmVmb3JlIGl0IGNhbGxzIHRoZSBjb21wb25lbnQoKSBhbmQgd2UgcGFzcyB0aGUgcmVxdWlyZWQgZGF0YSBoZXJlXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy9GZXRjaCBEYXRhIGZyb20gYW4gQVBJXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIGBtb25nb2RiK3NydjovLzEyMzQ1OjEyMzQ1QGNsdXN0ZXIwLmRpenZuOWsubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIC8vbm9zcWwgY29sbGVjdGlvbnMgYXJlIGtpbmQgb2YgbGlrZSBzcWwgdGFibGVzIGJ1dCBhcmUgZG9jdW1lbnRzIHdpdGggSlNPTiBkYXRhXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgLy9maW5kIGZpbmRzIGFsbCB0aGUgZG9jdW1lbnRzIGluIHRoYXQgY29sbGVjdGlvbiBhbmQgdG8gYXJyYXkgZm9ybWF0cyBhbGwgdGhlIGRhdGEgaW50byBhbiBhcnJheVxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgLy9tb3ZlIGRhdGEgZmV0Y2hpbmcgYXdheSBmcm9tIHRoZSBjbGllbnQgYW5kIHRvIHRoZSBzZXJ2ZXIgdGhyb3VnaCBwcm9wcyBhbmQgdGhpcyByZXR1cm5lZCBwcm9wczp7fVxyXG4gIC8vcmV2YWxpZGF0ZSB1bmxvY2tzIEluY3JlbWVudGFsIFN0YXRpYyBHZW5lcmF0aW9uOiBHZW5lcmF0ZXMgZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzXHJcbiAgLy90aGVuIHJlZ2VuZXJhdGVzL3B1c2hlcyBhIG5ldyBwYWdlIGFzIGluZGljYXRlZCAxIHNlY29uZHMgYWZ0ZXIgZWFjaCByZW5kZXIgY3ljbGUuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pKSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=