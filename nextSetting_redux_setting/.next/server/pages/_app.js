"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.ts\");\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/jeonsiwon/Desktop/test/nextSetting_redux_setting/pages/_app.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_configureStore__WEBPACK_IMPORTED_MODULE_1__[\"default\"].withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUU3QyxLQUFLLENBQUNDLEtBQUssSUFBSSxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQzNDLE1BQU07OEZBRURELFNBQVM7ZUFBS0MsU0FBUzs7Ozs7OztBQUc5QixDQUFDO0FBRUQsaUVBQWVILHVFQUFpQixDQUFDQyxLQUFLLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRzZXR0aW5nX3JlZHV4X3NldHRpbmcvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuIl0sIm5hbWVzIjpbIndyYXBwZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpdGhSZWR1eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./reducers/index.ts":
/*!***************************!*\
  !*** ./reducers/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeTestValue\": () => (/* binding */ changeTestValue),\n/* harmony export */   \"changeNameAction\": () => (/* binding */ changeNameAction),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    test: false,\n    name: \"siwon\"\n};\nconst changeTestValue = (data)=>{\n    return {\n        type: \"CHANGE_TEST_VALUE\",\n        data: !data\n    };\n};\nconst changeNameAction = (data)=>{\n    return {\n        type: \"CHANGE_NAME\",\n        data\n    };\n};\nconst rootReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:\n            return {\n                ...state,\n                ...action.payload\n            };\n        case \"CHANGE_TEST_VALUE\":\n            return {\n                ...state,\n                test: action.data\n            };\n        case \"CHANGE_NAME\":\n            return {\n                ...state,\n                name: action.data\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUU1QyxLQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ3BCQyxJQUFJLEVBQUUsS0FBSztJQUNYQyxJQUFJLEVBQUUsQ0FBTztBQUNmLENBQUM7QUFFTSxLQUFLLENBQUNDLGVBQWUsSUFBSUMsSUFBSSxHQUFLLENBQUM7SUFDeEMsTUFBTSxDQUFDLENBQUM7UUFDTkMsSUFBSSxFQUFFLENBQW1CO1FBQ3pCRCxJQUFJLEdBQUdBLElBQUk7SUFDYixDQUFDO0FBQ0gsQ0FBQztBQUNNLEtBQUssQ0FBQ0UsZ0JBQWdCLElBQUlGLElBQUksR0FBSyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxDQUFDO1FBQ05DLElBQUksRUFBRSxDQUFhO1FBQ25CRCxJQUFJO0lBQ04sQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLENBQUNHLFdBQVcsSUFBSUMsS0FBSyxHQUFHUixZQUFZLEVBQUVTLE1BQU0sR0FBSyxDQUFDO0lBQ3JELE1BQU0sQ0FBRUEsTUFBTSxDQUFDSixJQUFJO1FBQ2pCLElBQUksQ0FBQ04sdURBQU87WUFDVixNQUFNLENBQUMsQ0FBQzttQkFDSFMsS0FBSzttQkFDTEMsTUFBTSxDQUFDQyxPQUFPO1lBQ25CLENBQUM7UUFDSCxJQUFJLENBQUMsQ0FBbUI7WUFDdEIsTUFBTSxDQUFDLENBQUM7bUJBQ0hGLEtBQUs7Z0JBQ1JQLElBQUksRUFBRVEsTUFBTSxDQUFDTCxJQUFJO1lBQ25CLENBQUM7UUFDSCxJQUFJLENBQUMsQ0FBYTtZQUNoQixNQUFNLENBQUMsQ0FBQzttQkFDSEksS0FBSztnQkFDUk4sSUFBSSxFQUFFTyxNQUFNLENBQUNMLElBQUk7WUFDbkIsQ0FBQzs7WUFFRCxNQUFNLENBQUNJLEtBQUs7O0FBRWxCLENBQUM7QUFFRCxpRUFBZUQsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHNldHRpbmdfcmVkdXhfc2V0dGluZy8uL3JlZHVjZXJzL2luZGV4LnRzPzUxYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0ZXN0OiBmYWxzZSxcbiAgbmFtZTogXCJzaXdvblwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVRlc3RWYWx1ZSA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJDSEFOR0VfVEVTVF9WQUxVRVwiLFxuICAgIGRhdGE6ICFkYXRhLFxuICB9O1xufTtcbmV4cG9ydCBjb25zdCBjaGFuZ2VOYW1lQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcIkNIQU5HRV9OQU1FXCIsXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSFlEUkFURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBcIkNIQU5HRV9URVNUX1ZBTFVFXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGVzdDogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuICAgIGNhc2UgXCJDSEFOR0VfTkFNRVwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5hbWU6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJIWURSQVRFIiwiaW5pdGlhbFN0YXRlIiwidGVzdCIsIm5hbWUiLCJjaGFuZ2VUZXN0VmFsdWUiLCJkYXRhIiwidHlwZSIsImNoYW5nZU5hbWVBY3Rpb24iLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.ts\n");

/***/ }),

/***/ "./store/configureStore.ts":
/*!*********************************!*\
  !*** ./store/configureStore.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.ts\");\n\n\n\nconst configureStore = ()=>{\n    const store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    return store;\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7QUFDZjtBQUNGO0FBQ2pDLEtBQUssQ0FBQ0csY0FBYyxPQUFTLENBQUM7SUFDNUIsS0FBSyxDQUFDQyxLQUFLLEdBQUdILGtEQUFXLENBQUNDLGlEQUFPO0lBQ2pDLE1BQU0sQ0FBQ0UsS0FBSztBQUNkLENBQUM7QUFFRCxLQUFLLENBQUNDLE9BQU8sR0FBR0wsaUVBQWEsQ0FBQ0csY0FBYyxFQUFFLENBQUMsQ0FBQztBQUVoRCxpRUFBZUUsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHNldHRpbmdfcmVkdXhfc2V0dGluZy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnRzPzhjNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVdyYXBwZXIiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsInN0b3JlIiwid3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.ts\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();