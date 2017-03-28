/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const countdown = (function() {

    let now = new Date()
    let eventDate = new Date(2018, 11, 21)

    let currentTime = now.getTime()
    let eventTime = eventDate.getTime()
    let remTime = eventTime - currentTime
   
  const getDays = function() {
    let d = Math.floor(remTime / (1000 * 60 * 60 * 24))
    return d
  }
  const getHours = function() {
    let h = Math.floor(remTimee/ (1000 * 60 * 60))
    h %= 24
    h = (h < 10) ? "0" + h : h
    return h
  }
  const getMinutes = function() {
    let m = Math.floor(remTime / (1000 * 60))
    m %= 60
    m = (m < 10) ? "0" + m : m
    return m
  }
  const getSeconds = function() {
    let s = Math.floor(remTime / 1000)
    s %= 60
    s = (s < 10) ? "0" + s : s
    return s
  }

  return { 
    log: console.log("inside end of countdown.js"),
    getDays: getDays,
    getHours: getHours,
    getMinutes: getMinutes,
    getSeconds: getSeconds
  }

})()

module.exports = countdown;



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const countdown = __webpack_require__(0);


countdown()
countdown.log()
d = countdown.getDays()
h = countdown.getHours()
m = countdown.getMinutes()
s = countdown.getSeconds()

document.getElementById("days").textContent = d
document.getElementById("hours").textContent = h
document.getElementById("minutes").textContent = m
document.getElementById("seconds").textContent = s



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map