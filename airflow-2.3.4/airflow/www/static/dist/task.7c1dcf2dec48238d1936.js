/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Airflow"] = factory();
	else
		root["Airflow"] = root["Airflow"] || {}, root["Airflow"]["task"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/js/task.js":
/*!***************************!*\
  !*** ./static/js/task.js ***!
  \***************************/
/***/ (() => {

eval("/*!\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n/* global document, moment */\n// reformat task details to be more human-readable\ndocument.addEventListener('DOMContentLoaded', () => {\n  document.querySelectorAll('.js-ti-attr').forEach(attr => {\n    const value = attr.innerHTML;\n\n    if (value.length === 32 && moment(value, 'YYYY-MM-DD').isValid()) {\n      // 32 is the length of our timestamps\n      attr.innerHTML = `<time datetime=\"${value}\">${value}</time>`;\n    } else if (value.includes('http')) {\n      // very basic url detection\n      attr.innerHTML = `<a href=${value}>${value}</a>`;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvanMvdGFzay5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0FpcmZsb3cvLi9zdGF0aWMvanMvdGFzay5qcz9hZTNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZ2xvYmFsIGRvY3VtZW50LCBtb21lbnQgKi9cbi8vIHJlZm9ybWF0IHRhc2sgZGV0YWlscyB0byBiZSBtb3JlIGh1bWFuLXJlYWRhYmxlXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdGktYXR0cicpLmZvckVhY2goYXR0ciA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBhdHRyLmlubmVySFRNTDtcblxuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDMyICYmIG1vbWVudCh2YWx1ZSwgJ1lZWVktTU0tREQnKS5pc1ZhbGlkKCkpIHtcbiAgICAgIC8vIDMyIGlzIHRoZSBsZW5ndGggb2Ygb3VyIHRpbWVzdGFtcHNcbiAgICAgIGF0dHIuaW5uZXJIVE1MID0gYDx0aW1lIGRhdGV0aW1lPVwiJHt2YWx1ZX1cIj4ke3ZhbHVlfTwvdGltZT5gO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJ2h0dHAnKSkge1xuICAgICAgLy8gdmVyeSBiYXNpYyB1cmwgZGV0ZWN0aW9uXG4gICAgICBhdHRyLmlubmVySFRNTCA9IGA8YSBocmVmPSR7dmFsdWV9PiR7dmFsdWV9PC9hPmA7XG4gICAgfVxuICB9KTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/js/task.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/task.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});