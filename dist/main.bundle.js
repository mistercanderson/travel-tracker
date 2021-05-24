/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* Filters for changing SVG colors */\n.filter-light {\n  filter: saturate(0%) brightness(0%) invert(94.31373%) opacity(1);\n  filter: url('data:image/svg+xml;utf8,    <svg xmlns=\"http://www.w3.org/2000/svg\">      <filter id=\"recolor\" color-interpolation-filters=\"sRGB\">        <feColorMatrix type=\"matrix\" values=\"          0 0 0 0 0.921          0 0 0 0 0.94817          0 0 0 0 0.96528          0 0 0 1 0        \"/>      </filter>    </svg>    #recolor'); }\n\n.filter-mid {\n  filter: saturate(0%) brightness(0%) invert(44.31373%) opacity(1);\n  filter: url('data:image/svg+xml;utf8,    <svg xmlns=\"http://www.w3.org/2000/svg\">      <filter id=\"recolor\" color-interpolation-filters=\"sRGB\">        <feColorMatrix type=\"matrix\" values=\"          0 0 0 0 0.27059          0 0 0 0 0.48235          0 0 0 0 0.61569          0 0 0 1 0        \"/>      </filter>    </svg>    #recolor'); }\n\n.filter-dark {\n  filter: saturate(0%) brightness(0%) invert(22.7451%) opacity(1);\n  filter: url('data:image/svg+xml;utf8,    <svg xmlns=\"http://www.w3.org/2000/svg\">      <filter id=\"recolor\" color-interpolation-filters=\"sRGB\">        <feColorMatrix type=\"matrix\" values=\"          0 0 0 0 0.11373          0 0 0 0 0.20784          0 0 0 0 0.34118          0 0 0 1 0        \"/>      </filter>    </svg>    #recolor'); }\n\n.login {\n  width: 15em;\n  border-radius: 3px;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center; }\n  .login * {\n    height: 2em;\n    font-family: \"Poppins\", sans-serif;\n    font-weight: 300;\n    margin: .5em 0;\n    flex-grow: 1;\n    width: 100%;\n    border: 1px solid #1d3557;\n    border-radius: 3px; }\n  .login button {\n    width: 100%;\n    height: 3em;\n    margin-top: 3em;\n    background: #1d3557;\n    color: #f1faee;\n    cursor: pointer;\n    border-radius: 3px;\n    border: none; }\n    .login button:hover {\n      background: #3764a4; }\n\n.plan-trip {\n  width: 15em;\n  border-radius: 3px;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center; }\n  .plan-trip * {\n    height: 2em;\n    font-family: \"Poppins\", sans-serif;\n    font-weight: 300;\n    margin: .5em 0;\n    flex-grow: 1;\n    width: 100%;\n    border: 1px solid #1d3557;\n    border-radius: 3px; }\n  .plan-trip label {\n    margin: 0;\n    font-size: .8em;\n    color: #265d5f;\n    border: none;\n    display: flex;\n    align-items: flex-end; }\n  .plan-trip button {\n    width: 100%;\n    height: 3em;\n    margin-top: 3em;\n    background: #1d3557;\n    color: #f1faee;\n    cursor: pointer;\n    border-radius: 3px;\n    border: none; }\n    .plan-trip button:hover {\n      background: #3764a4; }\n\n.trip-preview {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.trip-cost {\n  margin-top: 1em;\n  text-align: center;\n  color: #265d5f; }\n\n.bad-button {\n  background: #da4646 !important; }\n  .bad-button:hover {\n    background: #c62828 !important; }\n\n.user-profile {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 2em;\n  max-height: 20em; }\n  .user-profile .card-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: normal;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 2em 1em; }\n  .user-profile ul {\n    height: 10em;\n    padding: 0;\n    margin: 2em 0 0 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    align-self: center; }\n    .user-profile ul li {\n      cursor: default; }\n\n/* Styling for Nav Bar */\n.logo-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  transform: scale(0.8); }\n\n.logo {\n  font-size: 2.7em;\n  cursor: pointer;\n  color: #a8dadc;\n  background: none;\n  transition-property: background-color, color;\n  transition-duration: .2s;\n  transition-timing-function: ease-in-out; }\n  .logo:hover {\n    color: #f1f9f9; }\n\n.admin-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 2.5em;\n  color: #a8dadc; }\n  .admin-wrapper p {\n    white-space: nowrap;\n    font-size: 1.1em; }\n\n.admin-button {\n  padding: 0;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 2.5em;\n  width: 2.5em;\n  margin: 0 .9em 0 0;\n  background-color: #d9e6ee;\n  color: #265d5f;\n  font-size: 1em;\n  border-radius: 50%;\n  cursor: pointer;\n  transition-property: background-color, color;\n  transition-duration: .2s;\n  transition-timing-function: ease-in-out; }\n  .admin-button:hover {\n    background: #fdfdfe; }\n\nnav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n  width: 100%;\n  height: 10em;\n  background-color: #1d3557;\n  color: #a8dadc; }\n\nul {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n  align-self: flex-end;\n  width: 30%;\n  padding-top: 10em;\n  margin: 0 0 1.3em 2em; }\n\nli {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: stretch;\n  white-space: nowrap;\n  margin: 0 1em 0 0; }\n  li button {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    color: #a8dadc;\n    background: none;\n    cursor: pointer; }\n    li button:hover {\n      color: #f1f9f9; }\n    li button img {\n      transform: scale(1.3);\n      width: 1em;\n      margin: 0 1em;\n      pointer-events: none; }\n\n.current {\n  color: #f1faee; }\n\n.card-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: normal;\n  align-items: stretch;\n  width: 100%;\n  max-width: 300px;\n  height: 28em;\n  color: #101e31;\n  border-radius: 3px;\n  background-color: rgba(48, 88, 144, 0.4);\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.685); }\n\n.card-image-wrapper {\n  display: flex;\n  width: 100%;\n  justify-self: center;\n  align-self: flex-start;\n  position: relative;\n  background-color: #67737b; }\n  .card-image-wrapper img {\n    object-fit: cover;\n    height: 10em;\n    width: 100%;\n    mix-blend-mode: overlay; }\n\n.card-image-overlay {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n  box-sizing: border-box;\n  width: 100%;\n  position: absolute;\n  color: #265d5f;\n  padding: 1em; }\n\n.day-counter-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 3% 0;\n  width: 5em;\n  border-radius: 5px;\n  background: #1d3557;\n  color: #f1faee; }\n  .day-counter-wrapper .days {\n    font-size: .7em;\n    font-weight: 300;\n    text-align: center; }\n  .day-counter-wrapper .day-count {\n    font-size: 2em;\n    font-weight: 300;\n    text-align: center;\n    margin-top: .1em; }\n\n.destination-name {\n  font-size: 1.1em; }\n\n.trip-dates {\n  font-size: .9em;\n  margin-top: .5em; }\n\n.card-info-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  padding: 1em; }\n  .card-info-wrapper * {\n    box-sizing: border-box; }\n\n.cost-wrapper {\n  width: 100%; }\n\n.card-cost {\n  margin: .5em 0;\n  overflow-wrap: break-word;\n  font-size: .9em;\n  width: 100%;\n  padding: 1em;\n  border-radius: 3px;\n  background-color: #ebf2f6;\n  color: #265d5f; }\n\n.traveler-count {\n  font-size: 2em;\n  font-weight: 300;\n  margin-top: .2em; }\n\n.trip-status-wrapper {\n  width: 100%; }\n  .trip-status-wrapper p {\n    font-size: 1.1em;\n    margin-top: .4em; }\n\n.book-now {\n  width: 100%;\n  height: 3em;\n  margin-top: 3em;\n  background: #1d3557;\n  color: #f1faee;\n  cursor: pointer;\n  border-radius: 3px; }\n  .book-now:hover {\n    background: #3764a4; }\n\n.success-wrapper {\n  height: 20em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center; }\n  .success-wrapper .trip-success {\n    color: #265d5f;\n    width: 17em;\n    height: 12em;\n    padding: 3em;\n    text-align: center;\n    background: white;\n    border-radius: 3px;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.685); }\n  .success-wrapper button {\n    width: 100%;\n    height: 3em;\n    margin-top: 3em;\n    background: #1d3557;\n    color: #f1faee;\n    cursor: pointer;\n    border-radius: 3px; }\n    .success-wrapper button:hover {\n      background: #3764a4; }\n\n.error-message {\n  color: #265d5f; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: normal;\n  align-items: stretch;\n  color: #a8dadc;\n  margin: 0 1em;\n  padding-bottom: 5em; }\n  main .dashboard {\n    width: 100%;\n    height: 100%;\n    align-self: center;\n    display: grid;\n    justify-items: center;\n    justify-content: space-around;\n    align-items: center;\n    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));\n    grid-area: auto;\n    grid-gap: 3em; }\n\n/* Global styling */\nbody {\n  background-color: #d9e6ee;\n  font-family: \"Poppins\", sans-serif; }\n  body * {\n    box-sizing: border-box; }\n\nbutton {\n  font-family: \"Poppins\", sans-serif;\n  border: none;\n  cursor: pointer;\n  transition-property: background-color, color;\n  transition-duration: .2s;\n  transition-timing-function: ease-in-out; }\n\nh1 {\n  color: #265d5f;\n  font-size: 2.7em;\n  margin: .9em 0; }\n\n.caps {\n  text-transform: uppercase; }\n\n.smaller-font {\n  font-size: .8em; }\n\n.hidden {\n  display: none !important; }\n\n@media screen and (max-width: 810px) {\n  nav {\n    padding-top: 1em; }\n    nav ul {\n      flex-direction: column;\n      align-items: flex-start;\n      height: 6em;\n      padding-top: 2em;\n      margin: 0 0 3.8em 0; }\n      nav ul li {\n        margin: .5em 0; }\n  .logo {\n    font-size: 2em; } }\n", "",{"version":3,"sources":["webpack://./src/css/_reset.scss","webpack://./src/css/_svg-filters.scss","webpack://./src/css/_mixins.scss","webpack://./src/css/_login.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_plan-trip.scss","webpack://./src/css/_user-profile.scss","webpack://./src/css/_nav-bar.scss","webpack://./src/css/_admin-button.scss","webpack://./src/css/_cards.scss","webpack://./src/css/_card-pic.scss","webpack://./src/css/_card-info.scss","webpack://./src/css/_api-messages.scss","webpack://./src/css/_dashboard.scss","webpack://./src/css/base.scss","webpack://./src/css/_media-query.scss"],"names":[],"mappings":"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","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}","/* Filters for changing SVG colors */\n.filter-light {\n  @include hex-to-filter($light-background, 1)\n}\n\n.filter-mid {\n  @include hex-to-filter($mid-background, 1)\n}\n\n.filter-dark {\n  @include hex-to-filter($dark-background, 1)\n}","@mixin flex($justify: normal, $direction: row, $align: stretch) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n  align-items: $align;\n}\n\n@mixin form {\n  width: 15em;\n  border-radius: $br;\n  align-self: center;\n  @include flex(space-evenly, column, center);\n}\n\n@mixin formElements {\n  height: 2em;\n  font-family: $main-font;\n  font-weight: 300;\n  margin: .5em 0;\n  flex-grow: 1;\n  width: 100%;\n  border: 1px solid $dark-background;\n  border-radius: $br;\n}\n\n@mixin dashButton {\n  width: 100%;\n  height: 3em;\n  margin-top: 3em;\n  background: $good-button;\n  color: $light-font;\n  cursor: pointer;\n  border-radius: $br;\n\n  &:hover {\n    background: lighten($good-button, 20%);\n  }\n}\n\n@mixin transitionColor {\n  transition-property: background-color, color;\n  transition-duration: .2s;\n  transition-timing-function: ease-in-out;\n}\n\n@mixin hex-to-filter($color: #000, $opacity: 1) {\n  $r: red($color) / 255;\n  $g: green($color) / 255;\n  $b: blue($color) / 255;\n  $a: $opacity;\n\n  // grayscale fallback if SVG from data url is not supported\n  $lightness: lightness($color);\n  filter: saturate(0%) brightness(0%) invert($lightness) opacity($opacity);\n\n  // color filter\n  $svg-filter-id: \"recolor\";\n  filter: url('data:image/svg+xml;utf8,\\\n    <svg xmlns=\"http://www.w3.org/2000/svg\">\\\n      <filter id=\"#{$svg-filter-id}\" color-interpolation-filters=\"sRGB\">\\\n        <feColorMatrix type=\"matrix\" values=\"\\\n          0 0 0 0 #{$r}\\\n          0 0 0 0 #{$g}\\\n          0 0 0 0 #{$b}\\\n          0 0 0 #{$a} 0\\\n        \"/>\\\n      </filter>\\\n    </svg>\\\n    ##{$svg-filter-id}');\n}",".login {\n  @include form;\n\n  * {\n    @include formElements\n  }\n\n  button {\n    @include dashButton;\n    border: none;\n  }\n}","// background-colors\n$mid-background: #457b9d;\n$light-background: lighten($mid-background, 50%);\n$dark-background: #1d3557;\n\n// font-colors\n$light-font: #f1faee;\n$mid-font: #a8dadc;\n$dark-font: darken($mid-font, 50%);\n\n// button-colors\n$good-button: $dark-background;\n$bad-button: rgb(218, 70, 70);\n\n// font-families\n$main-font: 'Poppins', sans-serif;\n\n// box shadow\n$box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.685);\n\n// border-radius\n$br: 3px;\n$circle: 50%;",".plan-trip {\n  @include form;\n\n  * {\n   @include formElements;\n  }\n\n  label {\n    margin: 0;\n    font-size: .8em;\n    color: $dark-font;\n    border: none;\n    display: flex;\n    align-items: flex-end;\n  }\n\n  button {\n    @include dashButton;\n    border: none;\n  }\n}\n\n.trip-preview {\n  @include flex(center, column, center);\n}\n\n.trip-cost {\n  margin-top: 1em;\n  text-align: center;\n  color: $dark-font;\n}\n\n.bad-button {\n  background: $bad-button!important;\n  \n  &:hover {\n    background: darken($bad-button, 10%)!important;\n  }\n}",".user-profile {\n  @include flex(center, column, center);\n  text-align: center;\n  padding: 2em;\n  max-height: 20em;\n\n  .card-wrapper {\n    @include flex(normal, column, center);\n    box-sizing: border-box;\n    padding: 2em 1em;\n  }\n\n  ul {\n    height: 10em;\n    padding: 0;\n    margin: 2em 0 0 0;\n    @include flex(space-between, column, center);\n    align-self: center;\n\n    li {\n      cursor: default;\n    }\n  }\n}","/* Styling for Nav Bar */\n@import 'admin-button';\n\nnav {\n  @include flex(space-between);\n  width: 100%;\n  height: 10em;\n  background-color: $dark-background;\n  color: $mid-font;\n}\n\nul {\n  @include flex(space-between);\n  align-self: flex-end;\n  width: 30%;\n  padding-top: 10em;\n  margin: 0 0 1.3em 2em;\n}\n\nli {\n  @include flex(center);\n  white-space: nowrap;\n  margin: 0 1em 0 0;\n\n\n  button {\n    @include flex(center, row, center);\n    color: $mid-font;\n    background: none;\n    cursor: pointer;\n\n    &:hover {\n      color: lighten($mid-font, 20%);\n    }\n\n    img {\n      transform: scale(1.3);\n      width: 1em;\n      margin: 0 1em;\n      pointer-events: none;\n    }\n  }\n}\n\n.current {\n  color: $light-font\n}",".logo-wrapper {\n  @include flex(space-between, column, center);\n  transform: scale(.8);\n}\n\n.logo {\n  font-size: 2.7em;\n  cursor: pointer;\n  color: $mid-font;\n  background: none;\n  @include transitionColor;\n\n  &:hover {\n    color: lighten($mid-font, 20%)\n  }\n}\n\n.admin-wrapper {\n  @include flex(space-between, row, center);\n  height: 2.5em;\n  color: $mid-font;\n\n  p {\n    white-space: nowrap;\n    font-size: 1.1em;\n  }\n}\n\n.admin-button {\n  padding: 0;\n  text-align: center;\n  @include flex(center, row, center);\n  height: 2.5em;\n  width: 2.5em;\n  margin: 0 .9em 0 0;\n  background-color: darken($light-background, 5%);\n  color: darken($mid-font, 50%);\n  font-size: 1em;\n  border-radius: $circle;\n  cursor: pointer;\n  @include transitionColor;\n\n  &:hover {\n    background: lighten($light-background, 5%);\n  }\n}",".card-wrapper {\n  @include flex(normal, column);\n  width: 100%;\n  max-width: 300px;\n  height: 28em;\n  color: darken($dark-background, 10%);\n  border-radius: $br;\n  background-color: rgba(lighten($dark-background, 15%), .4);\n  box-shadow: $box-shadow \n  // box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.685);\n}\n\n@import 'card-pic';\n@import 'card-info';\n",".card-image-wrapper {\n  display: flex;\n  width: 100%;\n  justify-self: center;\n  align-self: flex-start;\n  position: relative;\n  background-color: desaturate($mid-background, 30%);\n\n  img {\n    object-fit: cover;\n    height: 10em;\n    width: 100%;\n    mix-blend-mode: overlay;\n  }\n}\n\n.card-image-overlay {\n  @include flex(space-between);\n  box-sizing: border-box;\n  width: 100%;\n  position: absolute;\n  color: $dark-font;\n  padding: 1em;\n}\n\n.day-counter-wrapper {\n  @include flex(center, column, center);\n  padding: 3% 0;\n  width: 5em;\n  border-radius: 5px;\n  background: $dark-background;\n  color: $light-font;\n\n  .days {\n    font-size: .7em;\n    font-weight: 300;\n    text-align: center;\n  }\n\n  .day-count {\n    font-size: 2em;\n    font-weight: 300;\n    text-align: center;\n    margin-top: .1em;\n  }\n}",".destination-name {\n  font-size: 1.1em;\n}\n\n.trip-dates {\n  font-size: .9em;\n  margin-top: .5em;\n}\n\n.card-info-wrapper {\n  @include flex(space-between, column, flex-start);\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n\n  * {\n    box-sizing: border-box;\n  }\n}\n\n.cost-wrapper {\n  width: 100%;\n}\n\n.card-cost {\n  margin: .5em 0;\n  overflow-wrap: break-word;\n  font-size: .9em;\n  width: 100%;\n  padding: 1em;\n  border-radius: $br;\n  background-color: $light-background;\n  color: $dark-font;\n}\n\n.traveler-count {\n  font-size: 2em;\n  font-weight: 300;\n  margin-top: .2em\n}\n\n.trip-status-wrapper {\n  width: 100%;\n\n  p {\n    font-size: 1.1em;\n    margin-top: .4em\n  }\n}\n\n.book-now {\n  @include dashButton\n}",".success-wrapper {\n  height: 20em;\n  @include flex(space-around, column, center);\n\n  .trip-success {\n    color: $dark-font;\n    width: 17em;\n    height: 12em;\n    padding: 3em;\n    text-align: center;\n    background: white;\n    border-radius: $br;\n    box-shadow: $box-shadow\n  }\n\n  button {\n    @include dashButton;\n  }\n}\n\n.error-message {\n  color: $dark-font\n}\n","main {\n  @include flex(normal, column);\n  color: $mid-font;\n  margin: 0 1em;\n  padding-bottom: 5em;\n\n  .dashboard {\n    width: 100%;\n    height: 100%;\n    align-self: center;\n    display: grid;\n    justify-items: center;\n    justify-content: space-around;\n    align-items: center;\n    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));\n    grid-area: auto;\n    grid-gap: 3em;\n  }\n}","@import 'reset';\n@import 'variables';\n@import 'mixins';\n@import 'svg-filters';\n@import 'login';\n@import 'plan-trip';\n@import 'user-profile';\n@import 'nav-bar';\n@import 'cards';\n@import 'api-messages';\n@import 'dashboard';\n\n/* Global styling */\nbody {\n  background-color: darken($light-background, 5%);\n  font-family: $main-font;\n\n  * {\n    box-sizing: border-box;\n  }\n}\n\nbutton {\n  font-family: $main-font;\n  border: none;\n  cursor: pointer;\n  @include transitionColor;\n}\n\nh1 {\n  color: $dark-font;\n  font-size: 2.7em;\n  margin: .9em 0\n}\n\n.caps {\n  text-transform: uppercase;\n}\n\n.smaller-font {\n  font-size: .8em\n}\n\n.hidden {\n  display: none !important;\n}\n\n@import 'media-query';","@media screen and (max-width: 810px) {\n  nav {\n    padding-top: 1em;\n\n    ul {\n      flex-direction: column;\n      align-items: flex-start;\n      height: 6em;\n      padding-top: 2em;\n      margin: 0 0 3.8em 0;\n\n      li {\n        margin: .5em 0;\n      }\n    }\n  }\n\n  .logo {\n    font-size: 2em;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Agency.js":
/*!***********************!*\
  !*** ./src/Agency.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Agency {
  constructor(trips) {
    this.name = 'Agency'
    this.trips = trips;
    this.pendingTrips = this.trips.filter(t => t.status === 'pending');
    this.travelerType = 'agent'
  }

  getPendingTrips() {
    this.pendingTrips = this.trips.filter(t => t.status === 'pending');
  }

  approvePendingTrip(trip) {
    return trip.approveTrip();
  }

  calculateTripCommission(trip) {
    return Number((trip.calculateTripCost() * .1).toFixed(0))
  }

  calculateTotalTripCommission() {
    const tripsCommiss = this.trips.map(t => this.calculateTripCommission(t));
    const commissionSum = tripsCommiss.reduce((a, b) => a + b);
    return commissionSum
  }

  calculatePendingTripCommission() {
    if (this.pendingTrips.length) {
      const tripsCommiss = this.pendingTrips.map(t => this.calculateTripCommission(t));
      const commissionSum = tripsCommiss.reduce((a, b) => a + b);
      return commissionSum
    } else {
      return 0
    }
  }
}

module.exports = Agency;

/***/ }),

/***/ "./src/Destination.js":
/*!****************************!*\
  !*** ./src/Destination.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Destination {
  constructor({id, destination, estimatedLodgingCostPerDay, estimatedFlightCostPerPerson, image, alt}) {
    this.id = id;
    this.name = destination;
    this.estimatedLodgingCostPerDay = estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = estimatedFlightCostPerPerson;
    this.image = image || null;
    this.alt = alt || this.name;
  }
}

module.exports = Destination;

/***/ }),

/***/ "./src/DestinationRepo.js":
/*!********************************!*\
  !*** ./src/DestinationRepo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DestinationRepo; });
/* harmony import */ var _Repo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repo */ "./src/Repo.js");


class DestinationRepo extends _Repo__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(destinations) {
    super(destinations)
  }
}

/***/ }),

/***/ "./src/Repo.js":
/*!*********************!*\
  !*** ./src/Repo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Repo; });
class Repo {
  constructor(list) {
    this.list = list;
  }
}

/***/ }),

/***/ "./src/Traveler.js":
/*!*************************!*\
  !*** ./src/Traveler.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Traveler {
  constructor({
    id,
    name,
    travelerType
  }, trips) {
    this.id = id;
    this.name = name;
    this.travelerType = travelerType;
    this.trips = trips;
    this.getTrips();
  }

  getTrips() {
    const myTrips = this.trips.filter(trip => trip.userID === this.id);
    if (myTrips.length) {
      this.trips = myTrips
      return myTrips
    } else {
      return 'You don\'t have any trips'
    }
  }

  planTrip(destinationID, travelers, date, duration, suggestedActivities) {
    let trip = {
      userID: this.id,
      destinationID,
      travelers,
      date,
      duration,
      status: 'pending',
      suggestedActivities
    }
    const tripValues = Object.values(trip);
    tripValues.forEach(value => {
      if (!value) {
        trip = 'Please make sure to fill out all the trip information.'
      }
    })
    return trip
  }
}

module.exports = Traveler;

/***/ }),

/***/ "./src/Trip.js":
/*!*********************!*\
  !*** ./src/Trip.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Trip {
  constructor({
    id,
    userID,
    destinationID,
    travelers,
    date,
    duration,
    status,
    suggestedActivities
  }, destinations) {
    this.id = id;
    this.userID = userID;
    this.destination = destinations.filter(destination => destination.id === destinationID)[0]
    this.travelers = travelers;
    this.date = date;
    this.duration = duration;
    this.status = status;
    this.suggestedActivities = suggestedActivities;
  }

  calculateTripCost() {
    const flightCost = this.travelers * this.destination.estimatedFlightCostPerPerson;
    const lodgingCost = this.duration * this.destination.estimatedLodgingCostPerDay;
    const expenses = flightCost + lodgingCost;
    const agentFee = expenses * .1;
    return Number((expenses + agentFee).toFixed(0))
  }

  approveTrip() {
    if (this.status === 'pending') {
      this.status = 'approved'
    } else {
      return 'This trip has already been approved'
    }
  }

  addActivity(activity) {
    this.suggestedActivities.push(activity)
  }

  removeActivity(activity) {
    if (this.suggestedActivities.includes(activity)) {
      this.suggestedActivities.splice(this.suggestedActivities.indexOf(activity), 1)
    } else {
      return `Sorry, ${activity} is not in your activity list.`
    }
  }

  findEndDate() {
    const startDate = new Date(this.date);
    const daysToMs = (this.duration - 1) * 86400000;
    const endTime = startDate.getTime() + daysToMs;
    const endDate = new Date(endTime);
    const year = endDate.getUTCFullYear();
    let month = endDate.getUTCMonth() + 1;
    if (month.toString().length < 2) {
      month = '0' + month
    }
    let day = endDate.getUTCDate();
    if (day.toString().length < 2) {
      day = '0' + day
    }
    return (`${year}/${month}/${day}`);
  }

  formatDate(date) {
    const dateElements = date.split('/');
    const year = dateElements.shift();
    dateElements.push(year)
    return dateElements.join('/');
  }

  returnTripDates(start = this.date, end = this.findEndDate()) {
    return [start, end].map(date => this.formatDate(date))
  }
}

module.exports = Trip;

/***/ }),

/***/ "./src/TripRepo.js":
/*!*************************!*\
  !*** ./src/TripRepo.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripRepo; });
/* harmony import */ var _Repo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repo */ "./src/Repo.js");


class TripRepo extends _Repo__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(trips) {
    super(trips);
  }
}

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: postTrip, postMessage, requests, updateTrip, deleteTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTrip", function() { return postTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postMessage", function() { return postMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requests", function() { return requests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTrip", function() { return updateTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTrip", function() { return deleteTrip; });
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");


let postMessage;

const requests = (paths) => {
  const results = paths.map(path => fetch(`http://localhost:3001/api/v1/${path}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(response)
    })
    .catch(err => {
      displayGETError();
      console.log(err.message)
    })
  );
  return results
};

const postTrip = trip => {
  const tripJSON = JSON.stringify(trip);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: tripJSON,
    redirect: 'follow'
  };
  const request = fetch("http://localhost:3001/api/v1/trips", requestOptions);
  request.then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(response)
  })
    .then(data => {
      postMessage = data.message
    })
    .catch(err => {
      postMessage = '';
      displayPOSTError();
      console.log(err)
    })
};

const updateTrip = trip => {
  const tripJSON = JSON.stringify(trip);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: tripJSON,
    redirect: 'follow'
  };
  const request = fetch("http://localhost:3001/api/v1/updateTrip", requestOptions);
  request.then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(response)
  })
    .then(data => {
      postMessage = data.message
    })
    .catch(err => {
      postMessage = '';
      displayPOSTError();
      console.log(err)
    })
}

const deleteTrip = id => {
  const requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  const request = fetch(`http://localhost:3001/api/v1/trips/${id}`, requestOptions);
  request.then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(response)
  })
    .then(data => {
      postMessage = data.message
    })
    .catch(err => {
      postMessage = '';
      displayPOSTError();
      console.log(err)
    })
}

const displayGETError = () => {
  _domManipulation__WEBPACK_IMPORTED_MODULE_0__["dashboard"].innerHTML = '';
  _domManipulation__WEBPACK_IMPORTED_MODULE_0__["dashboard"].innerHTML = Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__["renderGETError"])()
}

const displayPOSTError = () => {
  _domManipulation__WEBPACK_IMPORTED_MODULE_0__["pageInfo"].innerText = 'Sorry'
  _domManipulation__WEBPACK_IMPORTED_MODULE_0__["dashboard"].innerHTML = '';
  _domManipulation__WEBPACK_IMPORTED_MODULE_0__["dashboard"].innerHTML = Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__["renderPOSTError"])();
}



/***/ }),

/***/ "./src/classStructure.js":
/*!*******************************!*\
  !*** ./src/classStructure.js ***!
  \*******************************/
/*! exports provided: instantiateClasses, destinationRepo, tripRepo, users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instantiateClasses", function() { return instantiateClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destinationRepo", function() { return destinationRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripRepo", function() { return tripRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts */ "./src/scripts.js");
/* harmony import */ var _Traveler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Traveler */ "./src/Traveler.js");
/* harmony import */ var _Traveler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Traveler__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Destination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Destination */ "./src/Destination.js");
/* harmony import */ var _Destination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Destination__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TripRepo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TripRepo */ "./src/TripRepo.js");
/* harmony import */ var _DestinationRepo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DestinationRepo */ "./src/DestinationRepo.js");
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Trip */ "./src/Trip.js");
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Trip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Agency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Agency */ "./src/Agency.js");
/* harmony import */ var _Agency__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Agency__WEBPACK_IMPORTED_MODULE_6__);









let destinationRepo;
let tripRepo;
let users;

function instantiateClasses() {
  generateDestinations();
  generateDestinationRepo();
  generateTrips();
  generateTripRepo();
  if (_scripts__WEBPACK_IMPORTED_MODULE_0__["user"]) {
    generateTraveler();
  } else {
    generateAgency();
  }
}

function generateDestinations() {
  return _scripts__WEBPACK_IMPORTED_MODULE_0__["destinations"].map(dest => dest = new _Destination__WEBPACK_IMPORTED_MODULE_2___default.a(dest))
}

function generateDestinationRepo() {
  destinationRepo = new _DestinationRepo__WEBPACK_IMPORTED_MODULE_4__["default"](generateDestinations());
}

function generateTrips() {
  return _scripts__WEBPACK_IMPORTED_MODULE_0__["trips"].map(trip => trip = new _Trip__WEBPACK_IMPORTED_MODULE_5___default.a(trip, destinationRepo.list))
}

function generateTripRepo() {
  tripRepo = new _TripRepo__WEBPACK_IMPORTED_MODULE_3__["default"](generateTrips());
}

function generateAgency() {
  users = new _Agency__WEBPACK_IMPORTED_MODULE_6___default.a(tripRepo.list);
}

function generateTraveler() {
  users = new _Traveler__WEBPACK_IMPORTED_MODULE_1___default.a(_scripts__WEBPACK_IMPORTED_MODULE_0__["travelers"], tripRepo.list);
}



/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/*! exports provided: displayChanges, displayUsername, displayTrips, inputValues, displayTripsInfo, displayLogin, renderGETError, renderPOSTError, dashboard, pageInfo, agentInputValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayChanges", function() { return displayChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayUsername", function() { return displayUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayTrips", function() { return displayTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputValues", function() { return inputValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayTripsInfo", function() { return displayTripsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayLogin", function() { return displayLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGETError", function() { return renderGETError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPOSTError", function() { return renderPOSTError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboard", function() { return dashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageInfo", function() { return pageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agentInputValues", function() { return agentInputValues; });
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts */ "./src/scripts.js");


let plannedDest;
const dashboard = document.querySelector('.dashboard');
const pageInfo = document.getElementById('pageInfo');
const inputValues = {
  name: null,
  start: null,
  end: null,
  travelerAmt: null,
  activities: null,
}
const agentInputValues = {
  tripId: null,
  activities: null
}

function displayChanges() {
  plannedDest = '';
  switch (event.target.id) {
  case 'myTrips':
    displayTripsInfo();
    displayTrips();
    break;
  case 'planTrip':
    displayTripPlanner();
    break;
  case 'destinations':
    displayDestinations();
    break;
  case 'admin':
    displayUserProfile();
    break;
  case 'logo':
    displayTripsInfo();
    displayTrips();
    break;
  case 'planTripButton':
    if (extractInputValues()) {
      displayTripPreview();
    }
    break;
  case 'bookNow':
    plannedDest = getPreviousElementSiblings(2).innerText;
    displayTripPlanner();
    autoFillDestinationName();
    break;
  case 'cancelTrip':
    displayTripPlanner();
    autoFillDestinationName();
    break;
  case 'finalizeTrip':
    displayTripSuccess();
    break;
  case 'successHome':
    displayTripsInfo();
    displayTrips();
    break;
  case 'approveTrip':
    if (extractAgentInputValues()) {
      displayTripUpdate();
    }
    break;
  case 'denyTrip':
    if (extractAgentInputValues()) {
      displayTripDelete();
    }
    break;
  }
}

function getPreviousElementSiblings(num) {
  let element = event.target;
  let i = 0;
  while (i < num) {
    element = element.previousElementSibling;
    i++;
  }
  return element
}

function displayTripsInfo() {
  if (_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].name !== 'Agency') {
    pageInfo.innerText = `My Trips ($${Object(_scripts__WEBPACK_IMPORTED_MODULE_0__["calcluateTotalTripsCost"])()} total)`;
  } else {
    displayAgencyInfo();
  }
}

function displayUsername() {
  const name = document.getElementById('user');
  const nameButton = document.getElementById('admin');
  name.innerText = _scripts__WEBPACK_IMPORTED_MODULE_0__["user"].name;
  nameButton.innerText = _scripts__WEBPACK_IMPORTED_MODULE_0__["user"].name[0];
  name.classList.remove('hidden');
  nameButton.classList.remove('hidden');
}

function displayTrips() {
  dashboard.innerHTML = '';
  if (_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].name === 'Agency') {
    displayPendingTrips();
    return
  }
  displayAllTrips()
}

function displayAllTrips() {
  _scripts__WEBPACK_IMPORTED_MODULE_0__["user"].trips.forEach(trip => {
    let name = trip.destination.name;
    let dates = trip.returnTripDates().join(' - ');
    let status = trip.status;
    let travelerCount = trip.travelers;
    let image = trip.destination.image;
    let alt = trip.destination.alt;
    let duration = trip.duration;
    let cost = trip.calculateTripCost();
    let commission;
    if (_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].name === 'Agency') {
      commission = _scripts__WEBPACK_IMPORTED_MODULE_0__["user"].calculateTripCommission(trip);
    }
    dashboard.innerHTML += renderTrips(name, dates, status, travelerCount, image, alt, duration, cost, commission)
  })
}

function displayPendingTrips() {
  _scripts__WEBPACK_IMPORTED_MODULE_0__["user"].pendingTrips.forEach(trip => {
    let name = trip.destination.name;
    let dates = trip.returnTripDates().join(' - ');
    let status = trip.status;
    let travelerCount = trip.travelers;
    let image = trip.destination.image;
    let alt = trip.destination.alt;
    let duration = trip.duration;
    let cost = trip.calculateTripCost();
    let commission = _scripts__WEBPACK_IMPORTED_MODULE_0__["user"].calculateTripCommission(trip);
    dashboard.innerHTML += renderTrips(name, dates, status, travelerCount, image, alt, duration, cost, commission)
  })
}

function displayDestinations() {
  dashboard.innerHTML = '';
  if (_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].name === 'Agency') {
    displayAllTrips();
    pageInfo.innerText = `All Trips ($${_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].calculateTotalTripCommission()} total commission)`
    return
  }
  _scripts__WEBPACK_IMPORTED_MODULE_0__["destinationRepo"].list.forEach(dest => {
    let name = dest.name;
    let image = dest.image;
    let alt = dest.alt;
    let flightCost = dest.estimatedFlightCostPerPerson;
    let lodgingCost = dest.estimatedLodgingCostPerDay;
    dashboard.innerHTML += renderDestinations(name, image, alt, flightCost, lodgingCost)
  });
}

function displayTripPlanner() {
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderTripPlanner();
}

function autoFillDestinationName() {
  const destName = document.getElementById('planDestination');
  if (plannedDest) {
    destName.value = plannedDest;
  } else if (inputValues.name) {
    destName.value = inputValues.name;
  }
}

function extractInputValues() {
  const inputs = {
    name: document.getElementById('planDestination'),
    start: document.getElementById('planStartDate'),
    end: document.getElementById('planEndDate'),
    travelerAmt: document.getElementById('planTravelers'),
    activities: document.getElementById('planActivities')
  };
  const inputKeys = Object.keys(inputs);
  if (Object(_scripts__WEBPACK_IMPORTED_MODULE_0__["calculateDays"])(inputs.start.value, inputs.end.value) < 1) {
    alert('Please Enter a Valid Date Range 🤪');
    return false
  }
  if (inputKeys.every(key => inputs[key].value)) {
    inputKeys.forEach(key => {
      inputValues[key] = inputs[key].value;
    })
    return true;
  } else {
    alert('Please Make Sure to Include All Required Information 🤠');
    return false;
  }
}

function displayTripPreview() {
  pageInfo.innerText = 'Trip Preview';
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderTripPreview();
}

function displayTripSuccess() {
  pageInfo.innerText = 'Success';
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderTripSuccess();
}

function displayUserProfile() {
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderUserProfile();
}

function displayLogin() {
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderLogin();
}

function renderTrips(name, dates, status, travelerCount, image, alt, duration, cost, commission) {
  if (_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].name === 'Agency') {
    return renderAgentTrips(name, dates, status, travelerCount, image, alt, duration, cost, commission);
  }
  return `
     <div class="card-wrapper" tabindex="0">
        <div class="card-image-wrapper">
          <img
            src="${image}"
            alt="${alt}">
          <div class="card-image-overlay caps">
            <div class="day-counter-wrapper">
              <p class="days">Days</p>
              <p class="day-count">${duration}</p>
            </div>
          </div>
        </div>
        <div class="card-info-wrapper">
          <div>
            <h2 class="destination-name">${name}</h2>
            <p class="trip-dates">${dates}</p>
          </div>
          <div class="cost-wrapper">
            <p>Trip Price</p>
            <p class="card-cost">$${cost}</p>
          </div>
          <div class="trip-status-wrapper">
            <h3 class="caps smaller-font">Status:</h3>
            <p class="lighter">${status}</p>
          </div>
          <div class="traveler-wrapper">
            <h4 class="caps smaller-font">Travelers:</h4>
            <p class="traveler-count lighter">${travelerCount}</p>
          </div>
        </div>
      </div>`;
}

function renderDestinations(name, image, alt, flightCost, lodgingCost) {
  pageInfo.innerText = 'Destinations';
  return `
      <div class="card-wrapper">
        <div class="card-image-wrapper">
          <img
            src="${image}"
            alt="${alt}">
        </div>
        <div class="card-info-wrapper">
          <h2 class="destination-name">${name}</h2>
          <div class="cost-wrapper">
            <p>Flight:</p>
            <p class="card-cost">$${flightCost}/person</p>
            <p>Lodging:</p>
            <p class="card-cost">$${lodgingCost}/day</p>
          </div>
          <button id="bookNow" class="book-now">Book Now!</button>
        </div>
      </div>`;
}

function renderTripPlanner() {
  if (_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].name === 'Agency') {
    return renderAgentApproval();
  }
  pageInfo.innerText = 'Plan a Trip';
  return `
    <form class="plan-trip" id="tripPlanner">
      <select name="destination" id="planDestination" required>
        <option value="">Select a Destination (required)</option>
        ${generateNameOptions()}
      <select>
      <label for="planStartDate">Start Date (required)</label>
      <input type="date" id="planStartDate" name="start-date" value="${_scripts__WEBPACK_IMPORTED_MODULE_0__["today"]}"
       min="${_scripts__WEBPACK_IMPORTED_MODULE_0__["today"]}" required>
      <label for="planEndDate">End Date (required)</label>
      <input type="date" id="planEndDate" name="end-date" min="${_scripts__WEBPACK_IMPORTED_MODULE_0__["tomorrow"]}" required>
      <input placeholder="Number of Travelers (required)" type="number" min="1" name="travelers" id="planTravelers" required>
      <select name="activities" id="planActivities">
        <option value="N/A">Select an Activity (optional)</option>
        ${generateActivityOptions()}
      <select>
      <button type="button" id="planTripButton">Plan Trip</button>
    </form>`;
}

function generateNameOptions() {
  const names = _scripts__WEBPACK_IMPORTED_MODULE_0__["destinationRepo"].list.map(d => d.name);
  const options = names.map(name => `<option value="${name}">${name}</option>`);
  return [...options]
}

function generateActivityOptions() {
  const suggestions = ['Relax', 'Seek Thrills', 'Shop', 'Sight-Seeing', 'Museum Hopping', 'Dine Out'];
  const options = suggestions.map(s => `<option value="${s}">${s}</option>`);
  return [...options]
}

function renderTripPreview() {
  const dest = _scripts__WEBPACK_IMPORTED_MODULE_0__["destinationRepo"].list.find(d => d.name === inputValues.name);
  return `
    <section class="trip-preview">
      <div class="card-wrapper">
        <div class="card-image-wrapper">
          <img
            src="${dest.image}"
            alt="${dest.alt}">
          <div class="card-image-overlay caps">
            <div class="day-counter-wrapper">
              <p class="days">Days</p>
              <p class="day-count">${Object(_scripts__WEBPACK_IMPORTED_MODULE_0__["calculateDays"])(inputValues.start, inputValues.end)}</p>
            </div>
          </div>
        </div>
        <div class="card-info-wrapper">
          <div>
            <h2 class="destination-name">${inputValues.name}</h2>
            <p class="trip-dates">${Object(_scripts__WEBPACK_IMPORTED_MODULE_0__["formatInputDate"])(inputValues.start)} - ${Object(_scripts__WEBPACK_IMPORTED_MODULE_0__["formatInputDate"])(inputValues.end)}</p>
          </div>
          <p>Suggested Activity:</p>
          <p class="card-cost">${inputValues.activities}</p>
          <div class="trip-status-wrapper">
            <h3 class="caps smaller-font">Status:</h3>
            <p class="lighter">pending</p>
          </div>
          <div class="traveler-wrapper">
            <h4 class="caps smaller-font">Travelers:</h4>
            <p class="traveler-count lighter">${inputValues.travelerAmt}</p>
          </div>
        </div>
      </div>
      <article class="trip-cost">
        After TravelTracker agent fees, the total cost of your trip will be $${calcPreviewCost(dest.estimatedFlightCostPerPerson, dest.estimatedLodgingCostPerDay, inputValues.travelerAmt, Object(_scripts__WEBPACK_IMPORTED_MODULE_0__["calculateDays"])(inputValues.start, inputValues.end))}.
      </article>
      <form class="plan-trip" id="planTripTwo">
        <button type="button" id="finalizeTrip">Submit Trip Request</button>
        <button type="button" class="bad-button" id="cancelTrip">Cancel</button>
      </form>
    </section>`;
}

function calcPreviewCost(flightCost, lodgCost, people, days) {
  const expenses = (flightCost * people) + (lodgCost * days);
  const agentFee = expenses * .1;
  return (expenses + agentFee).toFixed(0)
}

function renderUserProfile() {
  const highestCost = Math.max(..._scripts__WEBPACK_IMPORTED_MODULE_0__["user"].trips.map(t => t.calculateTripCost()));
  const expensiveTrip = _scripts__WEBPACK_IMPORTED_MODULE_0__["user"].trips.find(t => t.calculateTripCost() === highestCost);
  const pending = _scripts__WEBPACK_IMPORTED_MODULE_0__["user"].trips.filter(t => t.status === 'pending');
  pageInfo.innerText = 'My Profile';
  return `
    <div class="card-wrapper user-profile">
      <h2>${_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].name}</h2>
      <ul class="user-data">
        <li class="user-data">Total Trips: ${_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].trips.length}</li>
        <li class="user-data">Most Expensive Trip:</li>
        <li class="user-data">${expensiveTrip.destination.name} ($${expensiveTrip.calculateTripCost()})</li>
        <li class="user-data">Pending Trips: ${pending.length}</li>
        <li class="user-data">Traveler Type:</li>
        <li class="user-data">${_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].travelerType}</li>
      </ul>
    </div`;
}

function renderLogin() {
  return `
    <form class="login">
      <input placeholder="username" type="text" name="username" id="username" required>
      <input placeholder="password" type="password" name="password" id="password" required>
      <button type="button" class="login-button" id="login">Login</button>
    </form>`;
}

function renderTripSuccess() {
  return `
    <div class="success-wrapper">
      <p class="trip-success">Congratulations! Your trip to ${inputValues.name} has been submitted & will be reviewed by a TravelTracker agent shortly!</p>
      <button id="successHome">View My Trips</button>
    </div>
  `
}

function renderGETError() {
  return `
  <p class="error-message">Sorry, it looks like the TravelTracker servers are down right now. Please try again later.</p>
  `
}

function renderPOSTError() {
  return `
  <div class="plan-trip">
    <p class="error-message">Something went wrong with your trip request. Please try again later.</p>
    <button type="button" class="bad-button" id="cancelTrip">Back</button>
  </div>
  `
}

function displayAgencyInfo() {
  const navButtons = {
    trips: document.getElementById('myTrips'),
    plan: document.getElementById('planTrip'),
    dest: document.getElementById('destinations'),
  }
  const navImages = {
    plane: document.getElementById('planeIcon'),
    suitcase: document.getElementById('suitcaseIcon'),
    island: document.getElementById('islandIcon')
  }
  navButtons.trips.innerText = 'Pending Trips';
  navButtons.trips.insertAdjacentElement('afterbegin', navImages.plane);
  navButtons.plan.innerText = 'Approve/Deny Trips';
  navButtons.plan.insertAdjacentElement('afterbegin', navImages.suitcase);
  navButtons.dest.innerText = 'All Trips';
  navButtons.dest.insertAdjacentElement('afterbegin', navImages.island);
  pageInfo.innerText = `Pending Trips ($${_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].calculatePendingTripCommission()} pending commission)`;
}

function renderAgentTrips(name, dates, status, travelerCount, image, alt, duration, cost, commission) {
  return `
     <div class="card-wrapper" tabindex="0">
        <div class="card-image-wrapper">
          <img
            src="${image}"
            alt="${alt}">
          <div class="card-image-overlay caps">
            <div class="day-counter-wrapper">
              <p class="days">Days</p>
              <p class="day-count">${duration}</p>
            </div>
          </div>
        </div>
        <div class="card-info-wrapper">
          <div>
            <h2 class="destination-name">${name}</h2>
            <p class="trip-dates">${dates}</p>
          </div>
          <div class="cost-wrapper">
            <p>Commission Earned:</p>
            <p class="card-cost">$${commission}</p>
          </div>
          <div class="trip-status-wrapper">
            <h3 class="caps smaller-font">Status:</h3>
            <p class="lighter">${status}</p>
          </div>
          <div class="traveler-wrapper">
            <h4 class="caps smaller-font">Travelers:</h4>
            <p class="traveler-count lighter">${travelerCount}</p>
          </div>
        </div>
      </div>`;
}

function renderAgentApproval() {
  pageInfo.innerText = 'Approve/Deny Trips';
  return `
   <form class="plan-trip" id="tripApproval">
      <select name="trips" id="pendingTrips" required>
        <option value="">Select a Pending Trip (required)</option>
        ${generatePendingTripOptions()}
      <select>
      <select name="activities" id="suggestActivities">
        <option value="N/A">Suggest an Activity (optional)</option>
        ${generateActivityOptions()}
      <select>
      <button type="button" id="approveTrip">Approve Trip</button>
      <button type="button" id="denyTrip" class="bad-button">Deny Trip</button>
    </form> 
  `
}

function generatePendingTripOptions() {
  const pendingTrips = _scripts__WEBPACK_IMPORTED_MODULE_0__["user"].trips.filter(t => t.status === 'pending');
  const options = pendingTrips.map(t => `<option value="${t.id}">${t.destination.name}: User #${t.userID}</option>`);
  return [...options]
}

function extractAgentInputValues() {
  const inputs = {
    tripId: document.getElementById('pendingTrips'),
    activities: document.getElementById('suggestActivities')
  };
  const inputKeys = Object.keys(inputs);
  if (inputKeys.every(key => inputs[key].value)) {
    inputKeys.forEach(key => {
      agentInputValues[key] = inputs[key].value;
    })
    return true;
  } else {
    alert('Please Make Sure to Include All Required Information 🤠')
    return false;
  }
}

function displayTripUpdate() {
  pageInfo.innerText = 'Success'
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderUpdateSuccess();
}

function displayTripDelete() {
  pageInfo.innerText = 'Success'
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderDeleteSuccess();
}

function renderUpdateSuccess() {
  return `
    <div class="success-wrapper">
      <p class="trip-success">Trip has been updated successfully.</p>
      <button id="successHome">View Pending Trips</button>
    </div>
  `
}

function renderDeleteSuccess() {
  return `
    <div class="success-wrapper">
      <p class="trip-success">Trip has been deleted successfully.</p>
      <button id="successHome">View Pending Trips</button>
    </div>
  `
}




/***/ }),

/***/ "./src/images/island.svg":
/*!*******************************!*\
  !*** ./src/images/island.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/island.svg");

/***/ }),

/***/ "./src/images/plane.svg":
/*!******************************!*\
  !*** ./src/images/plane.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/plane.svg");

/***/ }),

/***/ "./src/images/suitcase.svg":
/*!*********************************!*\
  !*** ./src/images/suitcase.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/suitcase.svg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _images_island_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/island.svg */ "./src/images/island.svg");
/* harmony import */ var _images_suitcase_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/suitcase.svg */ "./src/images/suitcase.svg");
/* harmony import */ var _images_plane_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/plane.svg */ "./src/images/plane.svg");
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts.js */ "./src/scripts.js");








/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! exports provided: user, today, tomorrow, destinationRepo, formatInputDate, calculateDays, formatTripRequest, calcluateTotalTripsCost, travelers, trips, destinations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "today", function() { return today; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tomorrow", function() { return tomorrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatInputDate", function() { return formatInputDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDays", function() { return calculateDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTripRequest", function() { return formatTripRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcluateTotalTripsCost", function() { return calcluateTotalTripsCost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelers", function() { return travelers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trips", function() { return trips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destinations", function() { return destinations; });
/* harmony import */ var _classStructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classStructure */ "./src/classStructure.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destinationRepo", function() { return _classStructure__WEBPACK_IMPORTED_MODULE_0__["destinationRepo"]; });

/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trip */ "./src/Trip.js");
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Trip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");








let user;
let travelers, trips, destinations;
const today = new Date().toISOString().slice(0, 10);
const tomorrow = new Date(new Date(today).getTime() + 86400000).toISOString().slice(0, 10);

window.addEventListener('load', loadFunctions);
window.addEventListener('click', clickFunctions);

function loadFunctions() {
  navigationSwitch();
  Object(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["displayLogin"])();
}

function clickFunctions() {
  if (userLogin()) {
    setTimeout(() => {
      Object(_classStructure__WEBPACK_IMPORTED_MODULE_0__["instantiateClasses"])();
      user = _classStructure__WEBPACK_IMPORTED_MODULE_0__["users"];
      Object(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["displayUsername"])();
      navigationSwitch(true);
      Object(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["displayTripsInfo"])();
      Object(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["displayTrips"])();
    }, 200);
  }
  Object(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["displayChanges"])();
  sendPostRequest();
  sendUpdateRequest();
  sendDeleteRequest();
}

function sendPostRequest() {
  if (event.target.id === 'finalizeTrip') {
    const tripRequest = formatTripRequest();
    Object(_apiCalls__WEBPACK_IMPORTED_MODULE_3__["postTrip"])(tripRequest);
    setTimeout(() => {
      if (_apiCalls__WEBPACK_IMPORTED_MODULE_3__["postMessage"]) {
        const trip = convertTripRequest(tripRequest)
        _classStructure__WEBPACK_IMPORTED_MODULE_0__["tripRepo"].list.push(trip);
        user.trips.push(trip);
      }
    }, 200);
  }
}

function sendUpdateRequest() {
  if (event.target.id === 'approveTrip' && verifyInputValues()) {
    const updateRequest = formatTripUpdate();
    Object(_apiCalls__WEBPACK_IMPORTED_MODULE_3__["updateTrip"])(updateRequest);
    setTimeout(() => {
      if (_apiCalls__WEBPACK_IMPORTED_MODULE_3__["postMessage"]) {
        const trip = user.trips.find(t => t.id === Number(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["agentInputValues"].tripId));
        user.approvePendingTrip(trip);
        user.getPendingTrips();
      }
    }, 500);
  }
}

function sendDeleteRequest() {
  if (event.target.id === 'denyTrip' && verifyInputValues()) {
    const deleteRequest = formatTripDelete();
    Object(_apiCalls__WEBPACK_IMPORTED_MODULE_3__["deleteTrip"])(deleteRequest);
    setTimeout(() => {
      if (_apiCalls__WEBPACK_IMPORTED_MODULE_3__["postMessage"]) {
        const trip = user.trips.find(t => t.id === Number(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["agentInputValues"].tripId));
        user.trips.splice(user.trips.indexOf(trip), 1);
        user.getPendingTrips();
      }
    }, 500);
  }
}

function verifyInputValues() {
  const inputKeys = Object.keys(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["agentInputValues"]);
  if (inputKeys.every(key => _domManipulation__WEBPACK_IMPORTED_MODULE_1__["agentInputValues"][key])) {
    return true
  } else {
    return false
  }
}

function formatInputDate(date) {
  const dateSplit = date.split('-');
  const year = dateSplit.shift();
  dateSplit.push(year);
  return dateSplit.join('/')
}

function calculateDays(start, end) {
  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();
  const timeDifference = endTime - startTime;
  return (timeDifference / 86400000) + 1;
}

function formatTripRequest() {
  const destRequest = _classStructure__WEBPACK_IMPORTED_MODULE_0__["destinationRepo"].list.find(d => d.name === _domManipulation__WEBPACK_IMPORTED_MODULE_1__["inputValues"].name);
  const destId = destRequest.id;
  const travelers = Number(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["inputValues"].travelerAmt);
  const date = finalizeInputDate();
  const duration = calculateDays(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["inputValues"].start, _domManipulation__WEBPACK_IMPORTED_MODULE_1__["inputValues"].end);
  const activities = finalizeRequestActivities();
  const tripRequest = user.planTrip(destId, travelers, date, duration, activities);
  tripRequest.id = generateTripRequestId();
  return tripRequest
}

function formatTripUpdate() {
  const updateRequest = {
    id: Number(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["agentInputValues"].tripId),
    status: 'approved',
    suggestedActivities: finalizeUpdateActivities()
  }
  return updateRequest
}

function formatTripDelete() {
  return Number(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["agentInputValues"].tripId)
}

function generateTripRequestId() {
  const tripIds = _classStructure__WEBPACK_IMPORTED_MODULE_0__["tripRepo"].list.map(t => t.id);
  const highestId = Math.max(...tripIds);
  return highestId + 1
}

function finalizeRequestActivities() {
  if (_domManipulation__WEBPACK_IMPORTED_MODULE_1__["inputValues"].activities === 'N/A') {
    return [];
  }
  return _domManipulation__WEBPACK_IMPORTED_MODULE_1__["inputValues"].activities.split()
}

function finalizeUpdateActivities() {
  if (_domManipulation__WEBPACK_IMPORTED_MODULE_1__["agentInputValues"].activities === 'N/A') {
    return [];
  }
  return _domManipulation__WEBPACK_IMPORTED_MODULE_1__["agentInputValues"].activities.split()
}

function finalizeInputDate() {
  const date = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["inputValues"].start.split('-');
  return date.join('/')
}

function convertTripRequest(tripReq) {
  const trip = new _Trip__WEBPACK_IMPORTED_MODULE_2___default.a(tripReq, _classStructure__WEBPACK_IMPORTED_MODULE_0__["destinationRepo"].list);
  return trip
}

function calcluateTotalTripsCost() {
  const costs = user.trips.map(t => t.calculateTripCost());
  return costs.reduce((a, cost) => a + cost);
}

function userValidate() {
  const nameInput = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const expected = 'travel2020'
  const nameId = nameInput.slice(-2);
  if (nameInput === 'agency' && password === expected) {
    user = '';
    return true
  } else if (Number(nameId) && nameInput.includes('traveler') && password === expected) {
    user = '/' + nameId;
    return true
  } else {
    alert('Please enter a valid username & password 😓')
    return false
  }
}

function userLogin() {
  if (event.target.id === 'login' && userValidate()) {
    const paths = [`travelers${user}`, 'trips', 'destinations'];
    assignGETResults(Object(_apiCalls__WEBPACK_IMPORTED_MODULE_3__["requests"])(paths));
    return true
  } else {
    return false
  }
}

function assignGETResults(results) {
  results[0].then(data => {
    if (user) {
      travelers = data;
    } else {
      travelers = data.travelers;
    }
  });
  results[1].then(data => trips = data.trips);
  results[2].then(data => destinations = data.destinations);
}

function navigationSwitch(boolean) {
  const logo = document.querySelector('.logo');
  const navTabs = document.querySelectorAll('li');
  if (boolean) {
    logo.disabled = false;
    navTabs.forEach(tab => tab.classList.remove('hidden'))
  } else {
    logo.disabled = true;
    navTabs.forEach(tab => tab.classList.add('hidden'))
  }
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FnZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc3RpbmF0aW9uUmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJhdmVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaXBSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3NTdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/MTEwNyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaXNsYW5kLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3BsYW5lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N1aXRjYXNlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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UUFBUSw0REFBVztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGlFQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGlFQUFnQjtBQUNoQzs7QUFFQTtBQUNBLGtCQUFrQix3REFBUTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDREQUFXO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTLDREQUFXO0FBQ3BCOztBQUVBO0FBQ0EsTUFBTSxpRUFBZ0I7QUFDdEI7QUFDQTtBQUNBLFNBQVMsaUVBQWdCO0FBQ3pCOztBQUVBO0FBQ0EsZUFBZSw0REFBVztBQUMxQjtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDRDQUFJLFVBQVUsK0RBQWU7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDLHFCQUFxQiwwREFBUTtBQUM3QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbi8qIEZpbHRlcnMgZm9yIGNoYW5naW5nIFNWRyBjb2xvcnMgKi9cXG4uZmlsdGVyLWxpZ2h0IHtcXG4gIGZpbHRlcjogc2F0dXJhdGUoMCUpIGJyaWdodG5lc3MoMCUpIGludmVydCg5NC4zMTM3MyUpIG9wYWNpdHkoMSk7XFxuICBmaWx0ZXI6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsICAgIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj4gICAgICA8ZmlsdGVyIGlkPVxcXCJyZWNvbG9yXFxcIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9XFxcInNSR0JcXFwiPiAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT1cXFwibWF0cml4XFxcIiB2YWx1ZXM9XFxcIiAgICAgICAgICAwIDAgMCAwIDAuOTIxICAgICAgICAgIDAgMCAwIDAgMC45NDgxNyAgICAgICAgICAwIDAgMCAwIDAuOTY1MjggICAgICAgICAgMCAwIDAgMSAwICAgICAgICBcXFwiLz4gICAgICA8L2ZpbHRlcj4gICAgPC9zdmc+ICAgICNyZWNvbG9yJyk7IH1cXG5cXG4uZmlsdGVyLW1pZCB7XFxuICBmaWx0ZXI6IHNhdHVyYXRlKDAlKSBicmlnaHRuZXNzKDAlKSBpbnZlcnQoNDQuMzEzNzMlKSBvcGFjaXR5KDEpO1xcbiAgZmlsdGVyOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+ICAgICAgPGZpbHRlciBpZD1cXFwicmVjb2xvclxcXCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPVxcXCJzUkdCXFxcIj4gICAgICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9XFxcIm1hdHJpeFxcXCIgdmFsdWVzPVxcXCIgICAgICAgICAgMCAwIDAgMCAwLjI3MDU5ICAgICAgICAgIDAgMCAwIDAgMC40ODIzNSAgICAgICAgICAwIDAgMCAwIDAuNjE1NjkgICAgICAgICAgMCAwIDAgMSAwICAgICAgICBcXFwiLz4gICAgICA8L2ZpbHRlcj4gICAgPC9zdmc+ICAgICNyZWNvbG9yJyk7IH1cXG5cXG4uZmlsdGVyLWRhcmsge1xcbiAgZmlsdGVyOiBzYXR1cmF0ZSgwJSkgYnJpZ2h0bmVzcygwJSkgaW52ZXJ0KDIyLjc0NTElKSBvcGFjaXR5KDEpO1xcbiAgZmlsdGVyOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+ICAgICAgPGZpbHRlciBpZD1cXFwicmVjb2xvclxcXCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPVxcXCJzUkdCXFxcIj4gICAgICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9XFxcIm1hdHJpeFxcXCIgdmFsdWVzPVxcXCIgICAgICAgICAgMCAwIDAgMCAwLjExMzczICAgICAgICAgIDAgMCAwIDAgMC4yMDc4NCAgICAgICAgICAwIDAgMCAwIDAuMzQxMTggICAgICAgICAgMCAwIDAgMSAwICAgICAgICBcXFwiLz4gICAgICA8L2ZpbHRlcj4gICAgPC9zdmc+ICAgICNyZWNvbG9yJyk7IH1cXG5cXG4ubG9naW4ge1xcbiAgd2lkdGg6IDE1ZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmxvZ2luICoge1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbWFyZ2luOiAuNWVtIDA7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZDM1NTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgLmxvZ2luIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDNlbTtcXG4gICAgbWFyZ2luLXRvcDogM2VtO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWQzNTU3O1xcbiAgICBjb2xvcjogI2YxZmFlZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogbm9uZTsgfVxcbiAgICAubG9naW4gYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMzc2NGE0OyB9XFxuXFxuLnBsYW4tdHJpcCB7XFxuICB3aWR0aDogMTVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAucGxhbi10cmlwICoge1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbWFyZ2luOiAuNWVtIDA7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZDM1NTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgLnBsYW4tdHJpcCBsYWJlbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAuOGVtO1xcbiAgICBjb2xvcjogIzI2NWQ1ZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cXG4gIC5wbGFuLXRyaXAgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogM2VtO1xcbiAgICBtYXJnaW4tdG9wOiAzZW07XFxuICAgIGJhY2tncm91bmQ6ICMxZDM1NTc7XFxuICAgIGNvbG9yOiAjZjFmYWVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuICAgIC5wbGFuLXRyaXAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMzc2NGE0OyB9XFxuXFxuLnRyaXAtcHJldmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi50cmlwLWNvc3Qge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyNjVkNWY7IH1cXG5cXG4uYmFkLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjZGE0NjQ2ICFpbXBvcnRhbnQ7IH1cXG4gIC5iYWQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2M2MjgyOCAhaW1wb3J0YW50OyB9XFxuXFxuLnVzZXItcHJvZmlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIG1heC1oZWlnaHQ6IDIwZW07IH1cXG4gIC51c2VyLXByb2ZpbGUgLmNhcmQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyZW0gMWVtOyB9XFxuICAudXNlci1wcm9maWxlIHVsIHtcXG4gICAgaGVpZ2h0OiAxMGVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDJlbSAwIDAgMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG4gICAgLnVzZXItcHJvZmlsZSB1bCBsaSB7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLyogU3R5bGluZyBmb3IgTmF2IEJhciAqL1xcbi5sb2dvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpOyB9XFxuXFxuLmxvZ28ge1xcbiAgZm9udC1zaXplOiAyLjdlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjYThkYWRjO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICAubG9nbzpob3ZlciB7XFxuICAgIGNvbG9yOiAjZjFmOWY5OyB9XFxuXFxuLmFkbWluLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyLjVlbTtcXG4gIGNvbG9yOiAjYThkYWRjOyB9XFxuICAuYWRtaW4td3JhcHBlciBwIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAxLjFlbTsgfVxcblxcbi5hZG1pbi1idXR0b24ge1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyLjVlbTtcXG4gIHdpZHRoOiAyLjVlbTtcXG4gIG1hcmdpbjogMCAuOWVtIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWU2ZWU7XFxuICBjb2xvcjogIzI2NWQ1ZjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgY29sb3I7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH1cXG4gIC5hZG1pbi1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmRmZGZlOyB9XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDM1NTc7XFxuICBjb2xvcjogI2E4ZGFkYzsgfVxcblxcbnVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAzMCU7XFxuICBwYWRkaW5nLXRvcDogMTBlbTtcXG4gIG1hcmdpbjogMCAwIDEuM2VtIDJlbTsgfVxcblxcbmxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW46IDAgMWVtIDAgMDsgfVxcbiAgbGkgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjYThkYWRjO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgbGkgYnV0dG9uOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI2YxZjlmOTsgfVxcbiAgICBsaSBidXR0b24gaW1nIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgICAgd2lkdGg6IDFlbTtcXG4gICAgICBtYXJnaW46IDAgMWVtO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuXFxuLmN1cnJlbnQge1xcbiAgY29sb3I6ICNmMWZhZWU7IH1cXG5cXG4uY2FyZC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjhlbTtcXG4gIGNvbG9yOiAjMTAxZTMxO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgODgsIDE0NCwgMC40KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNjg1KTsgfVxcblxcbi5jYXJkLWltYWdlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3NzM3YjsgfVxcbiAgLmNhcmQtaW1hZ2Utd3JhcHBlciBpbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiAxMGVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWl4LWJsZW5kLW1vZGU6IG92ZXJsYXk7IH1cXG5cXG4uY2FyZC1pbWFnZS1vdmVybGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzI2NWQ1ZjtcXG4gIHBhZGRpbmc6IDFlbTsgfVxcblxcbi5kYXktY291bnRlci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMyUgMDtcXG4gIHdpZHRoOiA1ZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiAjMWQzNTU3O1xcbiAgY29sb3I6ICNmMWZhZWU7IH1cXG4gIC5kYXktY291bnRlci13cmFwcGVyIC5kYXlzIHtcXG4gICAgZm9udC1zaXplOiAuN2VtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5kYXktY291bnRlci13cmFwcGVyIC5kYXktY291bnQge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAuMWVtOyB9XFxuXFxuLmRlc3RpbmF0aW9uLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjFlbTsgfVxcblxcbi50cmlwLWRhdGVzIHtcXG4gIGZvbnQtc2l6ZTogLjllbTtcXG4gIG1hcmdpbi10b3A6IC41ZW07IH1cXG5cXG4uY2FyZC1pbmZvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbTsgfVxcbiAgLmNhcmQtaW5mby13cmFwcGVyICoge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLmNvc3Qtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jYXJkLWNvc3Qge1xcbiAgbWFyZ2luOiAuNWVtIDA7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgZm9udC1zaXplOiAuOWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmMmY2O1xcbiAgY29sb3I6ICMyNjVkNWY7IH1cXG5cXG4udHJhdmVsZXItY291bnQge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbWFyZ2luLXRvcDogLjJlbTsgfVxcblxcbi50cmlwLXN0YXR1cy13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAudHJpcC1zdGF0dXMtd3JhcHBlciBwIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgbWFyZ2luLXRvcDogLjRlbTsgfVxcblxcbi5ib29rLW5vdyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM2VtO1xcbiAgbWFyZ2luLXRvcDogM2VtO1xcbiAgYmFja2dyb3VuZDogIzFkMzU1NztcXG4gIGNvbG9yOiAjZjFmYWVlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICAuYm9vay1ub3c6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzc2NGE0OyB9XFxuXFxuLnN1Y2Nlc3Mtd3JhcHBlciB7XFxuICBoZWlnaHQ6IDIwZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnN1Y2Nlc3Mtd3JhcHBlciAudHJpcC1zdWNjZXNzIHtcXG4gICAgY29sb3I6ICMyNjVkNWY7XFxuICAgIHdpZHRoOiAxN2VtO1xcbiAgICBoZWlnaHQ6IDEyZW07XFxuICAgIHBhZGRpbmc6IDNlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjY4NSk7IH1cXG4gIC5zdWNjZXNzLXdyYXBwZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogM2VtO1xcbiAgICBtYXJnaW4tdG9wOiAzZW07XFxuICAgIGJhY2tncm91bmQ6ICMxZDM1NTc7XFxuICAgIGNvbG9yOiAjZjFmYWVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgICAuc3VjY2Vzcy13cmFwcGVyIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogIzM3NjRhNDsgfVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGNvbG9yOiAjMjY1ZDVmOyB9XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBjb2xvcjogI2E4ZGFkYztcXG4gIG1hcmdpbjogMCAxZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNWVtOyB9XFxuICBtYWluIC5kYXNoYm9hcmQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjc1cHgsIDFmcikpO1xcbiAgICBncmlkLWFyZWE6IGF1dG87XFxuICAgIGdyaWQtZ2FwOiAzZW07IH1cXG5cXG4vKiBHbG9iYWwgc3R5bGluZyAqL1xcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZTZlZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7IH1cXG4gIGJvZHkgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuXFxuaDEge1xcbiAgY29sb3I6ICMyNjVkNWY7XFxuICBmb250LXNpemU6IDIuN2VtO1xcbiAgbWFyZ2luOiAuOWVtIDA7IH1cXG5cXG4uY2FwcyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLnNtYWxsZXItZm9udCB7XFxuICBmb250LXNpemU6IC44ZW07IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxMHB4KSB7XFxuICBuYXYge1xcbiAgICBwYWRkaW5nLXRvcDogMWVtOyB9XFxuICAgIG5hdiB1bCB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICBoZWlnaHQ6IDZlbTtcXG4gICAgICBwYWRkaW5nLXRvcDogMmVtO1xcbiAgICAgIG1hcmdpbjogMCAwIDMuOGVtIDA7IH1cXG4gICAgICBuYXYgdWwgbGkge1xcbiAgICAgICAgbWFyZ2luOiAuNWVtIDA7IH1cXG4gIC5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAyZW07IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3N2Zy1maWx0ZXJzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19sb2dpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fcGxhbi10cmlwLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3VzZXItcHJvZmlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19uYXYtYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2FkbWluLWJ1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19jYXJkcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19jYXJkLXBpYy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19jYXJkLWluZm8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fYXBpLW1lc3NhZ2VzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2Rhc2hib2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbWVkaWEtcXVlcnkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCLEVBQUE7O0FBRzFCLGdEQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0VBV0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7O0VBRUUsZ0JBQWdCLEVBQUE7O0FBR2xCOztFQUVFLFlBQVksRUFBQTs7QUFHZDs7OztFQUlFLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FDaEluQixvQ0FBQTtBQUNBO0VDb0RFLGdFQUF3RTtFQUl4RSwwVUFX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b2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIixcIi8qIEZpbHRlcnMgZm9yIGNoYW5naW5nIFNWRyBjb2xvcnMgKi9cXG4uZmlsdGVyLWxpZ2h0IHtcXG4gIEBpbmNsdWRlIGhleC10by1maWx0ZXIoJGxpZ2h0LWJhY2tncm91bmQsIDEpXFxufVxcblxcbi5maWx0ZXItbWlkIHtcXG4gIEBpbmNsdWRlIGhleC10by1maWx0ZXIoJG1pZC1iYWNrZ3JvdW5kLCAxKVxcbn1cXG5cXG4uZmlsdGVyLWRhcmsge1xcbiAgQGluY2x1ZGUgaGV4LXRvLWZpbHRlcigkZGFyay1iYWNrZ3JvdW5kLCAxKVxcbn1cIixcIkBtaXhpbiBmbGV4KCRqdXN0aWZ5OiBub3JtYWwsICRkaXJlY3Rpb246IHJvdywgJGFsaWduOiBzdHJldGNoKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcXG59XFxuXFxuQG1peGluIGZvcm0ge1xcbiAgd2lkdGg6IDE1ZW07XFxuICBib3JkZXItcmFkaXVzOiAkYnI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBAaW5jbHVkZSBmbGV4KHNwYWNlLWV2ZW5seSwgY29sdW1uLCBjZW50ZXIpO1xcbn1cXG5cXG5AbWl4aW4gZm9ybUVsZW1lbnRzIHtcXG4gIGhlaWdodDogMmVtO1xcbiAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbWFyZ2luOiAuNWVtIDA7XFxuICBmbGV4LWdyb3c6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRkYXJrLWJhY2tncm91bmQ7XFxuICBib3JkZXItcmFkaXVzOiAkYnI7XFxufVxcblxcbkBtaXhpbiBkYXNoQnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBtYXJnaW4tdG9wOiAzZW07XFxuICBiYWNrZ3JvdW5kOiAkZ29vZC1idXR0b247XFxuICBjb2xvcjogJGxpZ2h0LWZvbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAkYnI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRlbigkZ29vZC1idXR0b24sIDIwJSk7XFxuICB9XFxufVxcblxcbkBtaXhpbiB0cmFuc2l0aW9uQ29sb3Ige1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgY29sb3I7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBtaXhpbiBoZXgtdG8tZmlsdGVyKCRjb2xvcjogIzAwMCwgJG9wYWNpdHk6IDEpIHtcXG4gICRyOiByZWQoJGNvbG9yKSAvIDI1NTtcXG4gICRnOiBncmVlbigkY29sb3IpIC8gMjU1O1xcbiAgJGI6IGJsdWUoJGNvbG9yKSAvIDI1NTtcXG4gICRhOiAkb3BhY2l0eTtcXG5cXG4gIC8vIGdyYXlzY2FsZSBmYWxsYmFjayBpZiBTVkcgZnJvbSBkYXRhIHVybCBpcyBub3Qgc3VwcG9ydGVkXFxuICAkbGlnaHRuZXNzOiBsaWdodG5lc3MoJGNvbG9yKTtcXG4gIGZpbHRlcjogc2F0dXJhdGUoMCUpIGJyaWdodG5lc3MoMCUpIGludmVydCgkbGlnaHRuZXNzKSBvcGFjaXR5KCRvcGFjaXR5KTtcXG5cXG4gIC8vIGNvbG9yIGZpbHRlclxcbiAgJHN2Zy1maWx0ZXItaWQ6IFxcXCJyZWNvbG9yXFxcIjtcXG4gIGZpbHRlcjogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCxcXFxcXFxuICAgIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj5cXFxcXFxuICAgICAgPGZpbHRlciBpZD1cXFwiI3skc3ZnLWZpbHRlci1pZH1cXFwiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz1cXFwic1JHQlxcXCI+XFxcXFxcbiAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT1cXFwibWF0cml4XFxcIiB2YWx1ZXM9XFxcIlxcXFxcXG4gICAgICAgICAgMCAwIDAgMCAjeyRyfVxcXFxcXG4gICAgICAgICAgMCAwIDAgMCAjeyRnfVxcXFxcXG4gICAgICAgICAgMCAwIDAgMCAjeyRifVxcXFxcXG4gICAgICAgICAgMCAwIDAgI3skYX0gMFxcXFxcXG4gICAgICAgIFxcXCIvPlxcXFxcXG4gICAgICA8L2ZpbHRlcj5cXFxcXFxuICAgIDwvc3ZnPlxcXFxcXG4gICAgIyN7JHN2Zy1maWx0ZXItaWR9Jyk7XFxufVwiLFwiLmxvZ2luIHtcXG4gIEBpbmNsdWRlIGZvcm07XFxuXFxuICAqIHtcXG4gICAgQGluY2x1ZGUgZm9ybUVsZW1lbnRzXFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBAaW5jbHVkZSBkYXNoQnV0dG9uO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxufVwiLFwiLy8gYmFja2dyb3VuZC1jb2xvcnNcXG4kbWlkLWJhY2tncm91bmQ6ICM0NTdiOWQ7XFxuJGxpZ2h0LWJhY2tncm91bmQ6IGxpZ2h0ZW4oJG1pZC1iYWNrZ3JvdW5kLCA1MCUpO1xcbiRkYXJrLWJhY2tncm91bmQ6ICMxZDM1NTc7XFxuXFxuLy8gZm9udC1jb2xvcnNcXG4kbGlnaHQtZm9udDogI2YxZmFlZTtcXG4kbWlkLWZvbnQ6ICNhOGRhZGM7XFxuJGRhcmstZm9udDogZGFya2VuKCRtaWQtZm9udCwgNTAlKTtcXG5cXG4vLyBidXR0b24tY29sb3JzXFxuJGdvb2QtYnV0dG9uOiAkZGFyay1iYWNrZ3JvdW5kO1xcbiRiYWQtYnV0dG9uOiByZ2IoMjE4LCA3MCwgNzApO1xcblxcbi8vIGZvbnQtZmFtaWxpZXNcXG4kbWFpbi1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuXFxuLy8gYm94IHNoYWRvd1xcbiRib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjY4NSk7XFxuXFxuLy8gYm9yZGVyLXJhZGl1c1xcbiRicjogM3B4O1xcbiRjaXJjbGU6IDUwJTtcIixcIi5wbGFuLXRyaXAge1xcbiAgQGluY2x1ZGUgZm9ybTtcXG5cXG4gICoge1xcbiAgIEBpbmNsdWRlIGZvcm1FbGVtZW50cztcXG4gIH1cXG5cXG4gIGxhYmVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IC44ZW07XFxuICAgIGNvbG9yOiAkZGFyay1mb250O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIEBpbmNsdWRlIGRhc2hCdXR0b247XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnRyaXAtcHJldmlldyB7XFxuICBAaW5jbHVkZSBmbGV4KGNlbnRlciwgY29sdW1uLCBjZW50ZXIpO1xcbn1cXG5cXG4udHJpcC1jb3N0IHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAkZGFyay1mb250O1xcbn1cXG5cXG4uYmFkLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAkYmFkLWJ1dHRvbiFpbXBvcnRhbnQ7XFxuICBcXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGJhZC1idXR0b24sIDEwJSkhaW1wb3J0YW50O1xcbiAgfVxcbn1cIixcIi51c2VyLXByb2ZpbGUge1xcbiAgQGluY2x1ZGUgZmxleChjZW50ZXIsIGNvbHVtbiwgY2VudGVyKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIG1heC1oZWlnaHQ6IDIwZW07XFxuXFxuICAuY2FyZC13cmFwcGVyIHtcXG4gICAgQGluY2x1ZGUgZmxleChub3JtYWwsIGNvbHVtbiwgY2VudGVyKTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMmVtIDFlbTtcXG4gIH1cXG5cXG4gIHVsIHtcXG4gICAgaGVpZ2h0OiAxMGVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDJlbSAwIDAgMDtcXG4gICAgQGluY2x1ZGUgZmxleChzcGFjZS1iZXR3ZWVuLCBjb2x1bW4sIGNlbnRlcik7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgbGkge1xcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgfVxcbiAgfVxcbn1cIixcIi8qIFN0eWxpbmcgZm9yIE5hdiBCYXIgKi9cXG5AaW1wb3J0ICdhZG1pbi1idXR0b24nO1xcblxcbm5hdiB7XFxuICBAaW5jbHVkZSBmbGV4KHNwYWNlLWJldHdlZW4pO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1iYWNrZ3JvdW5kO1xcbiAgY29sb3I6ICRtaWQtZm9udDtcXG59XFxuXFxudWwge1xcbiAgQGluY2x1ZGUgZmxleChzcGFjZS1iZXR3ZWVuKTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmctdG9wOiAxMGVtO1xcbiAgbWFyZ2luOiAwIDAgMS4zZW0gMmVtO1xcbn1cXG5cXG5saSB7XFxuICBAaW5jbHVkZSBmbGV4KGNlbnRlcik7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luOiAwIDFlbSAwIDA7XFxuXFxuXFxuICBidXR0b24ge1xcbiAgICBAaW5jbHVkZSBmbGV4KGNlbnRlciwgcm93LCBjZW50ZXIpO1xcbiAgICBjb2xvcjogJG1pZC1mb250O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiBsaWdodGVuKCRtaWQtZm9udCwgMjAlKTtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gICAgICB3aWR0aDogMWVtO1xcbiAgICAgIG1hcmdpbjogMCAxZW07XFxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmN1cnJlbnQge1xcbiAgY29sb3I6ICRsaWdodC1mb250XFxufVwiLFwiLmxvZ28td3JhcHBlciB7XFxuICBAaW5jbHVkZSBmbGV4KHNwYWNlLWJldHdlZW4sIGNvbHVtbiwgY2VudGVyKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LXNpemU6IDIuN2VtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICRtaWQtZm9udDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uQ29sb3I7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6IGxpZ2h0ZW4oJG1pZC1mb250LCAyMCUpXFxuICB9XFxufVxcblxcbi5hZG1pbi13cmFwcGVyIHtcXG4gIEBpbmNsdWRlIGZsZXgoc3BhY2UtYmV0d2Vlbiwgcm93LCBjZW50ZXIpO1xcbiAgaGVpZ2h0OiAyLjVlbTtcXG4gIGNvbG9yOiAkbWlkLWZvbnQ7XFxuXFxuICBwIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gIH1cXG59XFxuXFxuLmFkbWluLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgQGluY2x1ZGUgZmxleChjZW50ZXIsIHJvdywgY2VudGVyKTtcXG4gIGhlaWdodDogMi41ZW07XFxuICB3aWR0aDogMi41ZW07XFxuICBtYXJnaW46IDAgLjllbSAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGxpZ2h0LWJhY2tncm91bmQsIDUlKTtcXG4gIGNvbG9yOiBkYXJrZW4oJG1pZC1mb250LCA1MCUpO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAkY2lyY2xlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbkNvbG9yO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGxpZ2h0LWJhY2tncm91bmQsIDUlKTtcXG4gIH1cXG59XCIsXCIuY2FyZC13cmFwcGVyIHtcXG4gIEBpbmNsdWRlIGZsZXgobm9ybWFsLCBjb2x1bW4pO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyOGVtO1xcbiAgY29sb3I6IGRhcmtlbigkZGFyay1iYWNrZ3JvdW5kLCAxMCUpO1xcbiAgYm9yZGVyLXJhZGl1czogJGJyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShsaWdodGVuKCRkYXJrLWJhY2tncm91bmQsIDE1JSksIC40KTtcXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93IFxcbiAgLy8gYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC42ODUpO1xcbn1cXG5cXG5AaW1wb3J0ICdjYXJkLXBpYyc7XFxuQGltcG9ydCAnY2FyZC1pbmZvJztcXG5cIixcIi5jYXJkLWltYWdlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVzYXR1cmF0ZSgkbWlkLWJhY2tncm91bmQsIDMwJSk7XFxuXFxuICBpbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiAxMGVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWl4LWJsZW5kLW1vZGU6IG92ZXJsYXk7XFxuICB9XFxufVxcblxcbi5jYXJkLWltYWdlLW92ZXJsYXkge1xcbiAgQGluY2x1ZGUgZmxleChzcGFjZS1iZXR3ZWVuKTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAkZGFyay1mb250O1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uZGF5LWNvdW50ZXItd3JhcHBlciB7XFxuICBAaW5jbHVkZSBmbGV4KGNlbnRlciwgY29sdW1uLCBjZW50ZXIpO1xcbiAgcGFkZGluZzogMyUgMDtcXG4gIHdpZHRoOiA1ZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiAkZGFyay1iYWNrZ3JvdW5kO1xcbiAgY29sb3I6ICRsaWdodC1mb250O1xcblxcbiAgLmRheXMge1xcbiAgICBmb250LXNpemU6IC43ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kYXktY291bnQge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAuMWVtO1xcbiAgfVxcbn1cIixcIi5kZXN0aW5hdGlvbi1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbi50cmlwLWRhdGVzIHtcXG4gIGZvbnQtc2l6ZTogLjllbTtcXG4gIG1hcmdpbi10b3A6IC41ZW07XFxufVxcblxcbi5jYXJkLWluZm8td3JhcHBlciB7XFxuICBAaW5jbHVkZSBmbGV4KHNwYWNlLWJldHdlZW4sIGNvbHVtbiwgZmxleC1zdGFydCk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxZW07XFxuXFxuICAqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG59XFxuXFxuLmNvc3Qtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQtY29zdCB7XFxuICBtYXJnaW46IC41ZW0gMDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBmb250LXNpemU6IC45ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6ICRicjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1iYWNrZ3JvdW5kO1xcbiAgY29sb3I6ICRkYXJrLWZvbnQ7XFxufVxcblxcbi50cmF2ZWxlci1jb3VudCB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBtYXJnaW4tdG9wOiAuMmVtXFxufVxcblxcbi50cmlwLXN0YXR1cy13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIG1hcmdpbi10b3A6IC40ZW1cXG4gIH1cXG59XFxuXFxuLmJvb2stbm93IHtcXG4gIEBpbmNsdWRlIGRhc2hCdXR0b25cXG59XCIsXCIuc3VjY2Vzcy13cmFwcGVyIHtcXG4gIGhlaWdodDogMjBlbTtcXG4gIEBpbmNsdWRlIGZsZXgoc3BhY2UtYXJvdW5kLCBjb2x1bW4sIGNlbnRlcik7XFxuXFxuICAudHJpcC1zdWNjZXNzIHtcXG4gICAgY29sb3I6ICRkYXJrLWZvbnQ7XFxuICAgIHdpZHRoOiAxN2VtO1xcbiAgICBoZWlnaHQ6IDEyZW07XFxuICAgIHBhZGRpbmc6IDNlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJyO1xcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvd1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgQGluY2x1ZGUgZGFzaEJ1dHRvbjtcXG4gIH1cXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgY29sb3I6ICRkYXJrLWZvbnRcXG59XFxuXCIsXCJtYWluIHtcXG4gIEBpbmNsdWRlIGZsZXgobm9ybWFsLCBjb2x1bW4pO1xcbiAgY29sb3I6ICRtaWQtZm9udDtcXG4gIG1hcmdpbjogMCAxZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNWVtO1xcblxcbiAgLmRhc2hib2FyZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNzVweCwgMWZyKSk7XFxuICAgIGdyaWQtYXJlYTogYXV0bztcXG4gICAgZ3JpZC1nYXA6IDNlbTtcXG4gIH1cXG59XCIsXCJAaW1wb3J0ICdyZXNldCc7XFxuQGltcG9ydCAndmFyaWFibGVzJztcXG5AaW1wb3J0ICdtaXhpbnMnO1xcbkBpbXBvcnQgJ3N2Zy1maWx0ZXJzJztcXG5AaW1wb3J0ICdsb2dpbic7XFxuQGltcG9ydCAncGxhbi10cmlwJztcXG5AaW1wb3J0ICd1c2VyLXByb2ZpbGUnO1xcbkBpbXBvcnQgJ25hdi1iYXInO1xcbkBpbXBvcnQgJ2NhcmRzJztcXG5AaW1wb3J0ICdhcGktbWVzc2FnZXMnO1xcbkBpbXBvcnQgJ2Rhc2hib2FyZCc7XFxuXFxuLyogR2xvYmFsIHN0eWxpbmcgKi9cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkbGlnaHQtYmFja2dyb3VuZCwgNSUpO1xcbiAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XFxuXFxuICAqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbkNvbG9yO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogJGRhcmstZm9udDtcXG4gIGZvbnQtc2l6ZTogMi43ZW07XFxuICBtYXJnaW46IC45ZW0gMFxcbn1cXG5cXG4uY2FwcyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uc21hbGxlci1mb250IHtcXG4gIGZvbnQtc2l6ZTogLjhlbVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuQGltcG9ydCAnbWVkaWEtcXVlcnknO1wiLFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEwcHgpIHtcXG4gIG5hdiB7XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxuXFxuICAgIHVsIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgIGhlaWdodDogNmVtO1xcbiAgICAgIHBhZGRpbmctdG9wOiAyZW07XFxuICAgICAgbWFyZ2luOiAwIDAgMy44ZW0gMDtcXG5cXG4gICAgICBsaSB7XFxuICAgICAgICBtYXJnaW46IC41ZW0gMDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNsYXNzIEFnZW5jeSB7XG4gIGNvbnN0cnVjdG9yKHRyaXBzKSB7XG4gICAgdGhpcy5uYW1lID0gJ0FnZW5jeSdcbiAgICB0aGlzLnRyaXBzID0gdHJpcHM7XG4gICAgdGhpcy5wZW5kaW5nVHJpcHMgPSB0aGlzLnRyaXBzLmZpbHRlcih0ID0+IHQuc3RhdHVzID09PSAncGVuZGluZycpO1xuICAgIHRoaXMudHJhdmVsZXJUeXBlID0gJ2FnZW50J1xuICB9XG5cbiAgZ2V0UGVuZGluZ1RyaXBzKCkge1xuICAgIHRoaXMucGVuZGluZ1RyaXBzID0gdGhpcy50cmlwcy5maWx0ZXIodCA9PiB0LnN0YXR1cyA9PT0gJ3BlbmRpbmcnKTtcbiAgfVxuXG4gIGFwcHJvdmVQZW5kaW5nVHJpcCh0cmlwKSB7XG4gICAgcmV0dXJuIHRyaXAuYXBwcm92ZVRyaXAoKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRyaXBDb21taXNzaW9uKHRyaXApIHtcbiAgICByZXR1cm4gTnVtYmVyKCh0cmlwLmNhbGN1bGF0ZVRyaXBDb3N0KCkgKiAuMSkudG9GaXhlZCgwKSlcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsVHJpcENvbW1pc3Npb24oKSB7XG4gICAgY29uc3QgdHJpcHNDb21taXNzID0gdGhpcy50cmlwcy5tYXAodCA9PiB0aGlzLmNhbGN1bGF0ZVRyaXBDb21taXNzaW9uKHQpKTtcbiAgICBjb25zdCBjb21taXNzaW9uU3VtID0gdHJpcHNDb21taXNzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuICAgIHJldHVybiBjb21taXNzaW9uU3VtXG4gIH1cblxuICBjYWxjdWxhdGVQZW5kaW5nVHJpcENvbW1pc3Npb24oKSB7XG4gICAgaWYgKHRoaXMucGVuZGluZ1RyaXBzLmxlbmd0aCkge1xuICAgICAgY29uc3QgdHJpcHNDb21taXNzID0gdGhpcy5wZW5kaW5nVHJpcHMubWFwKHQgPT4gdGhpcy5jYWxjdWxhdGVUcmlwQ29tbWlzc2lvbih0KSk7XG4gICAgICBjb25zdCBjb21taXNzaW9uU3VtID0gdHJpcHNDb21taXNzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuICAgICAgcmV0dXJuIGNvbW1pc3Npb25TdW1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBZ2VuY3k7IiwiY2xhc3MgRGVzdGluYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7aWQsIGRlc3RpbmF0aW9uLCBlc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSwgZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiwgaW1hZ2UsIGFsdH0pIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gZGVzdGluYXRpb247XG4gICAgdGhpcy5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSA9IGVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5O1xuICAgIHRoaXMuZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiA9IGVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlIHx8IG51bGw7XG4gICAgdGhpcy5hbHQgPSBhbHQgfHwgdGhpcy5uYW1lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVzdGluYXRpb247IiwiaW1wb3J0IFJlcG8gZnJvbSAnLi9SZXBvJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXN0aW5hdGlvblJlcG8gZXh0ZW5kcyBSZXBvIHtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb25zKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb25zKVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwbyB7XG4gIGNvbnN0cnVjdG9yKGxpc3QpIHtcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICB9XG59IiwiY2xhc3MgVHJhdmVsZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICB0cmF2ZWxlclR5cGVcbiAgfSwgdHJpcHMpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRyYXZlbGVyVHlwZSA9IHRyYXZlbGVyVHlwZTtcbiAgICB0aGlzLnRyaXBzID0gdHJpcHM7XG4gICAgdGhpcy5nZXRUcmlwcygpO1xuICB9XG5cbiAgZ2V0VHJpcHMoKSB7XG4gICAgY29uc3QgbXlUcmlwcyA9IHRoaXMudHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC51c2VySUQgPT09IHRoaXMuaWQpO1xuICAgIGlmIChteVRyaXBzLmxlbmd0aCkge1xuICAgICAgdGhpcy50cmlwcyA9IG15VHJpcHNcbiAgICAgIHJldHVybiBteVRyaXBzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnWW91IGRvblxcJ3QgaGF2ZSBhbnkgdHJpcHMnXG4gICAgfVxuICB9XG5cbiAgcGxhblRyaXAoZGVzdGluYXRpb25JRCwgdHJhdmVsZXJzLCBkYXRlLCBkdXJhdGlvbiwgc3VnZ2VzdGVkQWN0aXZpdGllcykge1xuICAgIGxldCB0cmlwID0ge1xuICAgICAgdXNlcklEOiB0aGlzLmlkLFxuICAgICAgZGVzdGluYXRpb25JRCxcbiAgICAgIHRyYXZlbGVycyxcbiAgICAgIGRhdGUsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgICAgc3VnZ2VzdGVkQWN0aXZpdGllc1xuICAgIH1cbiAgICBjb25zdCB0cmlwVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0cmlwKTtcbiAgICB0cmlwVmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0cmlwID0gJ1BsZWFzZSBtYWtlIHN1cmUgdG8gZmlsbCBvdXQgYWxsIHRoZSB0cmlwIGluZm9ybWF0aW9uLidcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0cmlwXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmF2ZWxlcjsiLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGlkLFxuICAgIHVzZXJJRCxcbiAgICBkZXN0aW5hdGlvbklELFxuICAgIHRyYXZlbGVycyxcbiAgICBkYXRlLFxuICAgIGR1cmF0aW9uLFxuICAgIHN0YXR1cyxcbiAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzXG4gIH0sIGRlc3RpbmF0aW9ucykge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnVzZXJJRCA9IHVzZXJJRDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb25zLmZpbHRlcihkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5pZCA9PT0gZGVzdGluYXRpb25JRClbMF1cbiAgICB0aGlzLnRyYXZlbGVycyA9IHRyYXZlbGVycztcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnN1Z2dlc3RlZEFjdGl2aXRpZXMgPSBzdWdnZXN0ZWRBY3Rpdml0aWVzO1xuICB9XG5cbiAgY2FsY3VsYXRlVHJpcENvc3QoKSB7XG4gICAgY29uc3QgZmxpZ2h0Q29zdCA9IHRoaXMudHJhdmVsZXJzICogdGhpcy5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uO1xuICAgIGNvbnN0IGxvZGdpbmdDb3N0ID0gdGhpcy5kdXJhdGlvbiAqIHRoaXMuZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXk7XG4gICAgY29uc3QgZXhwZW5zZXMgPSBmbGlnaHRDb3N0ICsgbG9kZ2luZ0Nvc3Q7XG4gICAgY29uc3QgYWdlbnRGZWUgPSBleHBlbnNlcyAqIC4xO1xuICAgIHJldHVybiBOdW1iZXIoKGV4cGVuc2VzICsgYWdlbnRGZWUpLnRvRml4ZWQoMCkpXG4gIH1cblxuICBhcHByb3ZlVHJpcCgpIHtcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgdGhpcy5zdGF0dXMgPSAnYXBwcm92ZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnVGhpcyB0cmlwIGhhcyBhbHJlYWR5IGJlZW4gYXBwcm92ZWQnXG4gICAgfVxuICB9XG5cbiAgYWRkQWN0aXZpdHkoYWN0aXZpdHkpIHtcbiAgICB0aGlzLnN1Z2dlc3RlZEFjdGl2aXRpZXMucHVzaChhY3Rpdml0eSlcbiAgfVxuXG4gIHJlbW92ZUFjdGl2aXR5KGFjdGl2aXR5KSB7XG4gICAgaWYgKHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcy5pbmNsdWRlcyhhY3Rpdml0eSkpIHtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcy5zcGxpY2UodGhpcy5zdWdnZXN0ZWRBY3Rpdml0aWVzLmluZGV4T2YoYWN0aXZpdHkpLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYFNvcnJ5LCAke2FjdGl2aXR5fSBpcyBub3QgaW4geW91ciBhY3Rpdml0eSBsaXN0LmBcbiAgICB9XG4gIH1cblxuICBmaW5kRW5kRGF0ZSgpIHtcbiAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUpO1xuICAgIGNvbnN0IGRheXNUb01zID0gKHRoaXMuZHVyYXRpb24gLSAxKSAqIDg2NDAwMDAwO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBzdGFydERhdGUuZ2V0VGltZSgpICsgZGF5c1RvTXM7XG4gICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZFRpbWUpO1xuICAgIGNvbnN0IHllYXIgPSBlbmREYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gZW5kRGF0ZS5nZXRVVENNb250aCgpICsgMTtcbiAgICBpZiAobW9udGgudG9TdHJpbmcoKS5sZW5ndGggPCAyKSB7XG4gICAgICBtb250aCA9ICcwJyArIG1vbnRoXG4gICAgfVxuICAgIGxldCBkYXkgPSBlbmREYXRlLmdldFVUQ0RhdGUoKTtcbiAgICBpZiAoZGF5LnRvU3RyaW5nKCkubGVuZ3RoIDwgMikge1xuICAgICAgZGF5ID0gJzAnICsgZGF5XG4gICAgfVxuICAgIHJldHVybiAoYCR7eWVhcn0vJHttb250aH0vJHtkYXl9YCk7XG4gIH1cblxuICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICBjb25zdCBkYXRlRWxlbWVudHMgPSBkYXRlLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgeWVhciA9IGRhdGVFbGVtZW50cy5zaGlmdCgpO1xuICAgIGRhdGVFbGVtZW50cy5wdXNoKHllYXIpXG4gICAgcmV0dXJuIGRhdGVFbGVtZW50cy5qb2luKCcvJyk7XG4gIH1cblxuICByZXR1cm5UcmlwRGF0ZXMoc3RhcnQgPSB0aGlzLmRhdGUsIGVuZCA9IHRoaXMuZmluZEVuZERhdGUoKSkge1xuICAgIHJldHVybiBbc3RhcnQsIGVuZF0ubWFwKGRhdGUgPT4gdGhpcy5mb3JtYXREYXRlKGRhdGUpKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJpcDsiLCJpbXBvcnQgUmVwbyBmcm9tICcuL1JlcG8nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaXBSZXBvIGV4dGVuZHMgUmVwbyB7XG4gIGNvbnN0cnVjdG9yKHRyaXBzKSB7XG4gICAgc3VwZXIodHJpcHMpO1xuICB9XG59IiwiaW1wb3J0IHtcbiAgcmVuZGVyR0VURXJyb3IsXG4gIHJlbmRlclBPU1RFcnJvcixcbiAgZGFzaGJvYXJkLFxuICBwYWdlSW5mb1xufSBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XG5cbmxldCBwb3N0TWVzc2FnZTtcblxuY29uc3QgcmVxdWVzdHMgPSAocGF0aHMpID0+IHtcbiAgY29uc3QgcmVzdWx0cyA9IHBhdGhzLm1hcChwYXRoID0+IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxLyR7cGF0aH1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGRpc3BsYXlHRVRFcnJvcigpO1xuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgfSlcbiAgKTtcbiAgcmV0dXJuIHJlc3VsdHNcbn07XG5cbmNvbnN0IHBvc3RUcmlwID0gdHJpcCA9PiB7XG4gIGNvbnN0IHRyaXBKU09OID0gSlNPTi5zdHJpbmdpZnkodHJpcCk7XG4gIGNvbnN0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgYm9keTogdHJpcEpTT04sXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gIH07XG4gIGNvbnN0IHJlcXVlc3QgPSBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHNcIiwgcmVxdWVzdE9wdGlvbnMpO1xuICByZXF1ZXN0LnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UpXG4gIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBwb3N0TWVzc2FnZSA9IGRhdGEubWVzc2FnZVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBwb3N0TWVzc2FnZSA9ICcnO1xuICAgICAgZGlzcGxheVBPU1RFcnJvcigpO1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pXG59O1xuXG5jb25zdCB1cGRhdGVUcmlwID0gdHJpcCA9PiB7XG4gIGNvbnN0IHRyaXBKU09OID0gSlNPTi5zdHJpbmdpZnkodHJpcCk7XG4gIGNvbnN0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgYm9keTogdHJpcEpTT04sXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gIH07XG4gIGNvbnN0IHJlcXVlc3QgPSBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdXBkYXRlVHJpcFwiLCByZXF1ZXN0T3B0aW9ucyk7XG4gIHJlcXVlc3QudGhlbihyZXNwb25zZSA9PiB7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZSlcbiAgfSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIHBvc3RNZXNzYWdlID0gZGF0YS5tZXNzYWdlXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIHBvc3RNZXNzYWdlID0gJyc7XG4gICAgICBkaXNwbGF5UE9TVEVycm9yKCk7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSlcbn1cblxuY29uc3QgZGVsZXRlVHJpcCA9IGlkID0+IHtcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICByZWRpcmVjdDogJ2ZvbGxvdydcbiAgfTtcbiAgY29uc3QgcmVxdWVzdCA9IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzLyR7aWR9YCwgcmVxdWVzdE9wdGlvbnMpO1xuICByZXF1ZXN0LnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UpXG4gIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBwb3N0TWVzc2FnZSA9IGRhdGEubWVzc2FnZVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBwb3N0TWVzc2FnZSA9ICcnO1xuICAgICAgZGlzcGxheVBPU1RFcnJvcigpO1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pXG59XG5cbmNvbnN0IGRpc3BsYXlHRVRFcnJvciA9ICgpID0+IHtcbiAgZGFzaGJvYXJkLmlubmVySFRNTCA9ICcnO1xuICBkYXNoYm9hcmQuaW5uZXJIVE1MID0gcmVuZGVyR0VURXJyb3IoKVxufVxuXG5jb25zdCBkaXNwbGF5UE9TVEVycm9yID0gKCkgPT4ge1xuICBwYWdlSW5mby5pbm5lclRleHQgPSAnU29ycnknXG4gIGRhc2hib2FyZC5pbm5lckhUTUwgPSAnJztcbiAgZGFzaGJvYXJkLmlubmVySFRNTCA9IHJlbmRlclBPU1RFcnJvcigpO1xufVxuXG5leHBvcnQge1xuICBwb3N0VHJpcCxcbiAgcG9zdE1lc3NhZ2UsXG4gIHJlcXVlc3RzLFxuICB1cGRhdGVUcmlwLFxuICBkZWxldGVUcmlwXG59IiwiaW1wb3J0IHtcbiAgZGVzdGluYXRpb25zLFxuICB0cmF2ZWxlcnMsXG4gIHRyaXBzLFxuICB1c2VyLFxufSBmcm9tICcuL3NjcmlwdHMnXG5cbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL1RyYXZlbGVyJztcbmltcG9ydCBEZXN0aW5hdGlvbiBmcm9tICcuL0Rlc3RpbmF0aW9uJztcbmltcG9ydCBUcmlwUmVwbyBmcm9tICcuL1RyaXBSZXBvJztcbmltcG9ydCBEZXN0aW5hdGlvblJlcG8gZnJvbSAnLi9EZXN0aW5hdGlvblJlcG8nO1xuaW1wb3J0IFRyaXAgZnJvbSAnLi9UcmlwJztcbmltcG9ydCBBZ2VuY3kgZnJvbSAnLi9BZ2VuY3knO1xuXG5sZXQgZGVzdGluYXRpb25SZXBvO1xubGV0IHRyaXBSZXBvO1xubGV0IHVzZXJzO1xuXG5mdW5jdGlvbiBpbnN0YW50aWF0ZUNsYXNzZXMoKSB7XG4gIGdlbmVyYXRlRGVzdGluYXRpb25zKCk7XG4gIGdlbmVyYXRlRGVzdGluYXRpb25SZXBvKCk7XG4gIGdlbmVyYXRlVHJpcHMoKTtcbiAgZ2VuZXJhdGVUcmlwUmVwbygpO1xuICBpZiAodXNlcikge1xuICAgIGdlbmVyYXRlVHJhdmVsZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBnZW5lcmF0ZUFnZW5jeSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGVzdGluYXRpb25zKCkge1xuICByZXR1cm4gZGVzdGluYXRpb25zLm1hcChkZXN0ID0+IGRlc3QgPSBuZXcgRGVzdGluYXRpb24oZGVzdCkpXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGVzdGluYXRpb25SZXBvKCkge1xuICBkZXN0aW5hdGlvblJlcG8gPSBuZXcgRGVzdGluYXRpb25SZXBvKGdlbmVyYXRlRGVzdGluYXRpb25zKCkpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRyaXBzKCkge1xuICByZXR1cm4gdHJpcHMubWFwKHRyaXAgPT4gdHJpcCA9IG5ldyBUcmlwKHRyaXAsIGRlc3RpbmF0aW9uUmVwby5saXN0KSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUcmlwUmVwbygpIHtcbiAgdHJpcFJlcG8gPSBuZXcgVHJpcFJlcG8oZ2VuZXJhdGVUcmlwcygpKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVBZ2VuY3koKSB7XG4gIHVzZXJzID0gbmV3IEFnZW5jeSh0cmlwUmVwby5saXN0KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUcmF2ZWxlcigpIHtcbiAgdXNlcnMgPSBuZXcgVHJhdmVsZXIodHJhdmVsZXJzLCB0cmlwUmVwby5saXN0KTtcbn1cblxuZXhwb3J0IHtcbiAgaW5zdGFudGlhdGVDbGFzc2VzLFxuICBkZXN0aW5hdGlvblJlcG8sXG4gIHRyaXBSZXBvLFxuICB1c2Vycyxcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHtcbiAgdXNlcixcbiAgdG9kYXksXG4gIHRvbW9ycm93LFxuICBkZXN0aW5hdGlvblJlcG8sXG4gIGZvcm1hdElucHV0RGF0ZSxcbiAgY2FsY3VsYXRlRGF5cyxcbiAgY2FsY2x1YXRlVG90YWxUcmlwc0Nvc3QsXG59IGZyb20gJy4vc2NyaXB0cydcblxubGV0IHBsYW5uZWREZXN0O1xuY29uc3QgZGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZCcpO1xuY29uc3QgcGFnZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUluZm8nKTtcbmNvbnN0IGlucHV0VmFsdWVzID0ge1xuICBuYW1lOiBudWxsLFxuICBzdGFydDogbnVsbCxcbiAgZW5kOiBudWxsLFxuICB0cmF2ZWxlckFtdDogbnVsbCxcbiAgYWN0aXZpdGllczogbnVsbCxcbn1cbmNvbnN0IGFnZW50SW5wdXRWYWx1ZXMgPSB7XG4gIHRyaXBJZDogbnVsbCxcbiAgYWN0aXZpdGllczogbnVsbFxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q2hhbmdlcygpIHtcbiAgcGxhbm5lZERlc3QgPSAnJztcbiAgc3dpdGNoIChldmVudC50YXJnZXQuaWQpIHtcbiAgY2FzZSAnbXlUcmlwcyc6XG4gICAgZGlzcGxheVRyaXBzSW5mbygpO1xuICAgIGRpc3BsYXlUcmlwcygpO1xuICAgIGJyZWFrO1xuICBjYXNlICdwbGFuVHJpcCc6XG4gICAgZGlzcGxheVRyaXBQbGFubmVyKCk7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ2Rlc3RpbmF0aW9ucyc6XG4gICAgZGlzcGxheURlc3RpbmF0aW9ucygpO1xuICAgIGJyZWFrO1xuICBjYXNlICdhZG1pbic6XG4gICAgZGlzcGxheVVzZXJQcm9maWxlKCk7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ2xvZ28nOlxuICAgIGRpc3BsYXlUcmlwc0luZm8oKTtcbiAgICBkaXNwbGF5VHJpcHMoKTtcbiAgICBicmVhaztcbiAgY2FzZSAncGxhblRyaXBCdXR0b24nOlxuICAgIGlmIChleHRyYWN0SW5wdXRWYWx1ZXMoKSkge1xuICAgICAgZGlzcGxheVRyaXBQcmV2aWV3KCk7XG4gICAgfVxuICAgIGJyZWFrO1xuICBjYXNlICdib29rTm93JzpcbiAgICBwbGFubmVkRGVzdCA9IGdldFByZXZpb3VzRWxlbWVudFNpYmxpbmdzKDIpLmlubmVyVGV4dDtcbiAgICBkaXNwbGF5VHJpcFBsYW5uZXIoKTtcbiAgICBhdXRvRmlsbERlc3RpbmF0aW9uTmFtZSgpO1xuICAgIGJyZWFrO1xuICBjYXNlICdjYW5jZWxUcmlwJzpcbiAgICBkaXNwbGF5VHJpcFBsYW5uZXIoKTtcbiAgICBhdXRvRmlsbERlc3RpbmF0aW9uTmFtZSgpO1xuICAgIGJyZWFrO1xuICBjYXNlICdmaW5hbGl6ZVRyaXAnOlxuICAgIGRpc3BsYXlUcmlwU3VjY2VzcygpO1xuICAgIGJyZWFrO1xuICBjYXNlICdzdWNjZXNzSG9tZSc6XG4gICAgZGlzcGxheVRyaXBzSW5mbygpO1xuICAgIGRpc3BsYXlUcmlwcygpO1xuICAgIGJyZWFrO1xuICBjYXNlICdhcHByb3ZlVHJpcCc6XG4gICAgaWYgKGV4dHJhY3RBZ2VudElucHV0VmFsdWVzKCkpIHtcbiAgICAgIGRpc3BsYXlUcmlwVXBkYXRlKCk7XG4gICAgfVxuICAgIGJyZWFrO1xuICBjYXNlICdkZW55VHJpcCc6XG4gICAgaWYgKGV4dHJhY3RBZ2VudElucHV0VmFsdWVzKCkpIHtcbiAgICAgIGRpc3BsYXlUcmlwRGVsZXRlKCk7XG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFByZXZpb3VzRWxlbWVudFNpYmxpbmdzKG51bSkge1xuICBsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IG51bSkge1xuICAgIGVsZW1lbnQgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaSsrO1xuICB9XG4gIHJldHVybiBlbGVtZW50XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUcmlwc0luZm8oKSB7XG4gIGlmICh1c2VyLm5hbWUgIT09ICdBZ2VuY3knKSB7XG4gICAgcGFnZUluZm8uaW5uZXJUZXh0ID0gYE15IFRyaXBzICgkJHtjYWxjbHVhdGVUb3RhbFRyaXBzQ29zdCgpfSB0b3RhbClgO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlBZ2VuY3lJbmZvKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVVzZXJuYW1lKCkge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXInKTtcbiAgY29uc3QgbmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZG1pbicpO1xuICBuYW1lLmlubmVyVGV4dCA9IHVzZXIubmFtZTtcbiAgbmFtZUJ1dHRvbi5pbm5lclRleHQgPSB1c2VyLm5hbWVbMF07XG4gIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIG5hbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUcmlwcygpIHtcbiAgZGFzaGJvYXJkLmlubmVySFRNTCA9ICcnO1xuICBpZiAodXNlci5uYW1lID09PSAnQWdlbmN5Jykge1xuICAgIGRpc3BsYXlQZW5kaW5nVHJpcHMoKTtcbiAgICByZXR1cm5cbiAgfVxuICBkaXNwbGF5QWxsVHJpcHMoKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsVHJpcHMoKSB7XG4gIHVzZXIudHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICBsZXQgbmFtZSA9IHRyaXAuZGVzdGluYXRpb24ubmFtZTtcbiAgICBsZXQgZGF0ZXMgPSB0cmlwLnJldHVyblRyaXBEYXRlcygpLmpvaW4oJyAtICcpO1xuICAgIGxldCBzdGF0dXMgPSB0cmlwLnN0YXR1cztcbiAgICBsZXQgdHJhdmVsZXJDb3VudCA9IHRyaXAudHJhdmVsZXJzO1xuICAgIGxldCBpbWFnZSA9IHRyaXAuZGVzdGluYXRpb24uaW1hZ2U7XG4gICAgbGV0IGFsdCA9IHRyaXAuZGVzdGluYXRpb24uYWx0O1xuICAgIGxldCBkdXJhdGlvbiA9IHRyaXAuZHVyYXRpb247XG4gICAgbGV0IGNvc3QgPSB0cmlwLmNhbGN1bGF0ZVRyaXBDb3N0KCk7XG4gICAgbGV0IGNvbW1pc3Npb247XG4gICAgaWYgKHVzZXIubmFtZSA9PT0gJ0FnZW5jeScpIHtcbiAgICAgIGNvbW1pc3Npb24gPSB1c2VyLmNhbGN1bGF0ZVRyaXBDb21taXNzaW9uKHRyaXApO1xuICAgIH1cbiAgICBkYXNoYm9hcmQuaW5uZXJIVE1MICs9IHJlbmRlclRyaXBzKG5hbWUsIGRhdGVzLCBzdGF0dXMsIHRyYXZlbGVyQ291bnQsIGltYWdlLCBhbHQsIGR1cmF0aW9uLCBjb3N0LCBjb21taXNzaW9uKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGVuZGluZ1RyaXBzKCkge1xuICB1c2VyLnBlbmRpbmdUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgIGxldCBuYW1lID0gdHJpcC5kZXN0aW5hdGlvbi5uYW1lO1xuICAgIGxldCBkYXRlcyA9IHRyaXAucmV0dXJuVHJpcERhdGVzKCkuam9pbignIC0gJyk7XG4gICAgbGV0IHN0YXR1cyA9IHRyaXAuc3RhdHVzO1xuICAgIGxldCB0cmF2ZWxlckNvdW50ID0gdHJpcC50cmF2ZWxlcnM7XG4gICAgbGV0IGltYWdlID0gdHJpcC5kZXN0aW5hdGlvbi5pbWFnZTtcbiAgICBsZXQgYWx0ID0gdHJpcC5kZXN0aW5hdGlvbi5hbHQ7XG4gICAgbGV0IGR1cmF0aW9uID0gdHJpcC5kdXJhdGlvbjtcbiAgICBsZXQgY29zdCA9IHRyaXAuY2FsY3VsYXRlVHJpcENvc3QoKTtcbiAgICBsZXQgY29tbWlzc2lvbiA9IHVzZXIuY2FsY3VsYXRlVHJpcENvbW1pc3Npb24odHJpcCk7XG4gICAgZGFzaGJvYXJkLmlubmVySFRNTCArPSByZW5kZXJUcmlwcyhuYW1lLCBkYXRlcywgc3RhdHVzLCB0cmF2ZWxlckNvdW50LCBpbWFnZSwgYWx0LCBkdXJhdGlvbiwgY29zdCwgY29tbWlzc2lvbilcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheURlc3RpbmF0aW9ucygpIHtcbiAgZGFzaGJvYXJkLmlubmVySFRNTCA9ICcnO1xuICBpZiAodXNlci5uYW1lID09PSAnQWdlbmN5Jykge1xuICAgIGRpc3BsYXlBbGxUcmlwcygpO1xuICAgIHBhZ2VJbmZvLmlubmVyVGV4dCA9IGBBbGwgVHJpcHMgKCQke3VzZXIuY2FsY3VsYXRlVG90YWxUcmlwQ29tbWlzc2lvbigpfSB0b3RhbCBjb21taXNzaW9uKWBcbiAgICByZXR1cm5cbiAgfVxuICBkZXN0aW5hdGlvblJlcG8ubGlzdC5mb3JFYWNoKGRlc3QgPT4ge1xuICAgIGxldCBuYW1lID0gZGVzdC5uYW1lO1xuICAgIGxldCBpbWFnZSA9IGRlc3QuaW1hZ2U7XG4gICAgbGV0IGFsdCA9IGRlc3QuYWx0O1xuICAgIGxldCBmbGlnaHRDb3N0ID0gZGVzdC5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uO1xuICAgIGxldCBsb2RnaW5nQ29zdCA9IGRlc3QuZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXk7XG4gICAgZGFzaGJvYXJkLmlubmVySFRNTCArPSByZW5kZXJEZXN0aW5hdGlvbnMobmFtZSwgaW1hZ2UsIGFsdCwgZmxpZ2h0Q29zdCwgbG9kZ2luZ0Nvc3QpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VHJpcFBsYW5uZXIoKSB7XG4gIGRhc2hib2FyZC5pbm5lckhUTUwgPSAnJztcbiAgZGFzaGJvYXJkLmlubmVySFRNTCA9IHJlbmRlclRyaXBQbGFubmVyKCk7XG59XG5cbmZ1bmN0aW9uIGF1dG9GaWxsRGVzdGluYXRpb25OYW1lKCkge1xuICBjb25zdCBkZXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFuRGVzdGluYXRpb24nKTtcbiAgaWYgKHBsYW5uZWREZXN0KSB7XG4gICAgZGVzdE5hbWUudmFsdWUgPSBwbGFubmVkRGVzdDtcbiAgfSBlbHNlIGlmIChpbnB1dFZhbHVlcy5uYW1lKSB7XG4gICAgZGVzdE5hbWUudmFsdWUgPSBpbnB1dFZhbHVlcy5uYW1lO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJbnB1dFZhbHVlcygpIHtcbiAgY29uc3QgaW5wdXRzID0ge1xuICAgIG5hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFuRGVzdGluYXRpb24nKSxcbiAgICBzdGFydDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYW5TdGFydERhdGUnKSxcbiAgICBlbmQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFuRW5kRGF0ZScpLFxuICAgIHRyYXZlbGVyQW10OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhblRyYXZlbGVycycpLFxuICAgIGFjdGl2aXRpZXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFuQWN0aXZpdGllcycpXG4gIH07XG4gIGNvbnN0IGlucHV0S2V5cyA9IE9iamVjdC5rZXlzKGlucHV0cyk7XG4gIGlmIChjYWxjdWxhdGVEYXlzKGlucHV0cy5zdGFydC52YWx1ZSwgaW5wdXRzLmVuZC52YWx1ZSkgPCAxKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBFbnRlciBhIFZhbGlkIERhdGUgUmFuZ2Ug8J+kqicpO1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChpbnB1dEtleXMuZXZlcnkoa2V5ID0+IGlucHV0c1trZXldLnZhbHVlKSkge1xuICAgIGlucHV0S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpbnB1dFZhbHVlc1trZXldID0gaW5wdXRzW2tleV0udmFsdWU7XG4gICAgfSlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgnUGxlYXNlIE1ha2UgU3VyZSB0byBJbmNsdWRlIEFsbCBSZXF1aXJlZCBJbmZvcm1hdGlvbiDwn6SgJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUcmlwUHJldmlldygpIHtcbiAgcGFnZUluZm8uaW5uZXJUZXh0ID0gJ1RyaXAgUHJldmlldyc7XG4gIGRhc2hib2FyZC5pbm5lckhUTUwgPSAnJztcbiAgZGFzaGJvYXJkLmlubmVySFRNTCA9IHJlbmRlclRyaXBQcmV2aWV3KCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUcmlwU3VjY2VzcygpIHtcbiAgcGFnZUluZm8uaW5uZXJUZXh0ID0gJ1N1Y2Nlc3MnO1xuICBkYXNoYm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gIGRhc2hib2FyZC5pbm5lckhUTUwgPSByZW5kZXJUcmlwU3VjY2VzcygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VXNlclByb2ZpbGUoKSB7XG4gIGRhc2hib2FyZC5pbm5lckhUTUwgPSAnJztcbiAgZGFzaGJvYXJkLmlubmVySFRNTCA9IHJlbmRlclVzZXJQcm9maWxlKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMb2dpbigpIHtcbiAgZGFzaGJvYXJkLmlubmVySFRNTCA9ICcnO1xuICBkYXNoYm9hcmQuaW5uZXJIVE1MID0gcmVuZGVyTG9naW4oKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcHMobmFtZSwgZGF0ZXMsIHN0YXR1cywgdHJhdmVsZXJDb3VudCwgaW1hZ2UsIGFsdCwgZHVyYXRpb24sIGNvc3QsIGNvbW1pc3Npb24pIHtcbiAgaWYgKHVzZXIubmFtZSA9PT0gJ0FnZW5jeScpIHtcbiAgICByZXR1cm4gcmVuZGVyQWdlbnRUcmlwcyhuYW1lLCBkYXRlcywgc3RhdHVzLCB0cmF2ZWxlckNvdW50LCBpbWFnZSwgYWx0LCBkdXJhdGlvbiwgY29zdCwgY29tbWlzc2lvbik7XG4gIH1cbiAgcmV0dXJuIGBcbiAgICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlclwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZS13cmFwcGVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiJHtpbWFnZX1cIlxuICAgICAgICAgICAgYWx0PVwiJHthbHR9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2Utb3ZlcmxheSBjYXBzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LWNvdW50ZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImRheXNcIj5EYXlzPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImRheS1jb3VudFwiPiR7ZHVyYXRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbmZvLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiZGVzdGluYXRpb24tbmFtZVwiPiR7bmFtZX08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0cmlwLWRhdGVzXCI+JHtkYXRlc308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgPHA+VHJpcCBQcmljZTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1jb3N0XCI+JCR7Y29zdH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRyaXAtc3RhdHVzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcHMgc21hbGxlci1mb250XCI+U3RhdHVzOjwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImxpZ2h0ZXJcIj4ke3N0YXR1c308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRyYXZlbGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcHMgc21hbGxlci1mb250XCI+VHJhdmVsZXJzOjwvaDQ+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRyYXZlbGVyLWNvdW50IGxpZ2h0ZXJcIj4ke3RyYXZlbGVyQ291bnR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlc3RpbmF0aW9ucyhuYW1lLCBpbWFnZSwgYWx0LCBmbGlnaHRDb3N0LCBsb2RnaW5nQ29zdCkge1xuICBwYWdlSW5mby5pbm5lclRleHQgPSAnRGVzdGluYXRpb25zJztcbiAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2Utd3JhcHBlclwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIiR7aW1hZ2V9XCJcbiAgICAgICAgICAgIGFsdD1cIiR7YWx0fVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW5mby13cmFwcGVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwiZGVzdGluYXRpb24tbmFtZVwiPiR7bmFtZX08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3N0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxwPkZsaWdodDo8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtY29zdFwiPiQke2ZsaWdodENvc3R9L3BlcnNvbjwvcD5cbiAgICAgICAgICAgIDxwPkxvZGdpbmc6PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWNvc3RcIj4kJHtsb2RnaW5nQ29zdH0vZGF5PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJib29rTm93XCIgY2xhc3M9XCJib29rLW5vd1wiPkJvb2sgTm93ITwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBQbGFubmVyKCkge1xuICBpZiAodXNlci5uYW1lID09PSAnQWdlbmN5Jykge1xuICAgIHJldHVybiByZW5kZXJBZ2VudEFwcHJvdmFsKCk7XG4gIH1cbiAgcGFnZUluZm8uaW5uZXJUZXh0ID0gJ1BsYW4gYSBUcmlwJztcbiAgcmV0dXJuIGBcbiAgICA8Zm9ybSBjbGFzcz1cInBsYW4tdHJpcFwiIGlkPVwidHJpcFBsYW5uZXJcIj5cbiAgICAgIDxzZWxlY3QgbmFtZT1cImRlc3RpbmF0aW9uXCIgaWQ9XCJwbGFuRGVzdGluYXRpb25cIiByZXF1aXJlZD5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIERlc3RpbmF0aW9uIChyZXF1aXJlZCk8L29wdGlvbj5cbiAgICAgICAgJHtnZW5lcmF0ZU5hbWVPcHRpb25zKCl9XG4gICAgICA8c2VsZWN0PlxuICAgICAgPGxhYmVsIGZvcj1cInBsYW5TdGFydERhdGVcIj5TdGFydCBEYXRlIChyZXF1aXJlZCk8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJwbGFuU3RhcnREYXRlXCIgbmFtZT1cInN0YXJ0LWRhdGVcIiB2YWx1ZT1cIiR7dG9kYXl9XCJcbiAgICAgICBtaW49XCIke3RvZGF5fVwiIHJlcXVpcmVkPlxuICAgICAgPGxhYmVsIGZvcj1cInBsYW5FbmREYXRlXCI+RW5kIERhdGUgKHJlcXVpcmVkKTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cInBsYW5FbmREYXRlXCIgbmFtZT1cImVuZC1kYXRlXCIgbWluPVwiJHt0b21vcnJvd31cIiByZXF1aXJlZD5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIk51bWJlciBvZiBUcmF2ZWxlcnMgKHJlcXVpcmVkKVwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCIgbmFtZT1cInRyYXZlbGVyc1wiIGlkPVwicGxhblRyYXZlbGVyc1wiIHJlcXVpcmVkPlxuICAgICAgPHNlbGVjdCBuYW1lPVwiYWN0aXZpdGllc1wiIGlkPVwicGxhbkFjdGl2aXRpZXNcIj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk4vQVwiPlNlbGVjdCBhbiBBY3Rpdml0eSAob3B0aW9uYWwpPC9vcHRpb24+XG4gICAgICAgICR7Z2VuZXJhdGVBY3Rpdml0eU9wdGlvbnMoKX1cbiAgICAgIDxzZWxlY3Q+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInBsYW5UcmlwQnV0dG9uXCI+UGxhbiBUcmlwPC9idXR0b24+XG4gICAgPC9mb3JtPmA7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTmFtZU9wdGlvbnMoKSB7XG4gIGNvbnN0IG5hbWVzID0gZGVzdGluYXRpb25SZXBvLmxpc3QubWFwKGQgPT4gZC5uYW1lKTtcbiAgY29uc3Qgb3B0aW9ucyA9IG5hbWVzLm1hcChuYW1lID0+IGA8b3B0aW9uIHZhbHVlPVwiJHtuYW1lfVwiPiR7bmFtZX08L29wdGlvbj5gKTtcbiAgcmV0dXJuIFsuLi5vcHRpb25zXVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUFjdGl2aXR5T3B0aW9ucygpIHtcbiAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBbJ1JlbGF4JywgJ1NlZWsgVGhyaWxscycsICdTaG9wJywgJ1NpZ2h0LVNlZWluZycsICdNdXNldW0gSG9wcGluZycsICdEaW5lIE91dCddO1xuICBjb25zdCBvcHRpb25zID0gc3VnZ2VzdGlvbnMubWFwKHMgPT4gYDxvcHRpb24gdmFsdWU9XCIke3N9XCI+JHtzfTwvb3B0aW9uPmApO1xuICByZXR1cm4gWy4uLm9wdGlvbnNdXG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBQcmV2aWV3KCkge1xuICBjb25zdCBkZXN0ID0gZGVzdGluYXRpb25SZXBvLmxpc3QuZmluZChkID0+IGQubmFtZSA9PT0gaW5wdXRWYWx1ZXMubmFtZSk7XG4gIHJldHVybiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ0cmlwLXByZXZpZXdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2Utd3JhcHBlclwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIiR7ZGVzdC5pbWFnZX1cIlxuICAgICAgICAgICAgYWx0PVwiJHtkZXN0LmFsdH1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZS1vdmVybGF5IGNhcHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXktY291bnRlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF5c1wiPkRheXM8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF5LWNvdW50XCI+JHtjYWxjdWxhdGVEYXlzKGlucHV0VmFsdWVzLnN0YXJ0LCBpbnB1dFZhbHVlcy5lbmQpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW5mby13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImRlc3RpbmF0aW9uLW5hbWVcIj4ke2lucHV0VmFsdWVzLm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidHJpcC1kYXRlc1wiPiR7Zm9ybWF0SW5wdXREYXRlKGlucHV0VmFsdWVzLnN0YXJ0KX0gLSAke2Zvcm1hdElucHV0RGF0ZShpbnB1dFZhbHVlcy5lbmQpfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD5TdWdnZXN0ZWQgQWN0aXZpdHk6PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1jb3N0XCI+JHtpbnB1dFZhbHVlcy5hY3Rpdml0aWVzfTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJpcC1zdGF0dXMtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FwcyBzbWFsbGVyLWZvbnRcIj5TdGF0dXM6PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibGlnaHRlclwiPnBlbmRpbmc8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRyYXZlbGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcHMgc21hbGxlci1mb250XCI+VHJhdmVsZXJzOjwvaDQ+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRyYXZlbGVyLWNvdW50IGxpZ2h0ZXJcIj4ke2lucHV0VmFsdWVzLnRyYXZlbGVyQW10fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwidHJpcC1jb3N0XCI+XG4gICAgICAgIEFmdGVyIFRyYXZlbFRyYWNrZXIgYWdlbnQgZmVlcywgdGhlIHRvdGFsIGNvc3Qgb2YgeW91ciB0cmlwIHdpbGwgYmUgJCR7Y2FsY1ByZXZpZXdDb3N0KGRlc3QuZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiwgZGVzdC5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSwgaW5wdXRWYWx1ZXMudHJhdmVsZXJBbXQsIGNhbGN1bGF0ZURheXMoaW5wdXRWYWx1ZXMuc3RhcnQsIGlucHV0VmFsdWVzLmVuZCkpfS5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxmb3JtIGNsYXNzPVwicGxhbi10cmlwXCIgaWQ9XCJwbGFuVHJpcFR3b1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImZpbmFsaXplVHJpcFwiPlN1Ym1pdCBUcmlwIFJlcXVlc3Q8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJiYWQtYnV0dG9uXCIgaWQ9XCJjYW5jZWxUcmlwXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPmA7XG59XG5cbmZ1bmN0aW9uIGNhbGNQcmV2aWV3Q29zdChmbGlnaHRDb3N0LCBsb2RnQ29zdCwgcGVvcGxlLCBkYXlzKSB7XG4gIGNvbnN0IGV4cGVuc2VzID0gKGZsaWdodENvc3QgKiBwZW9wbGUpICsgKGxvZGdDb3N0ICogZGF5cyk7XG4gIGNvbnN0IGFnZW50RmVlID0gZXhwZW5zZXMgKiAuMTtcbiAgcmV0dXJuIChleHBlbnNlcyArIGFnZW50RmVlKS50b0ZpeGVkKDApXG59XG5cbmZ1bmN0aW9uIHJlbmRlclVzZXJQcm9maWxlKCkge1xuICBjb25zdCBoaWdoZXN0Q29zdCA9IE1hdGgubWF4KC4uLnVzZXIudHJpcHMubWFwKHQgPT4gdC5jYWxjdWxhdGVUcmlwQ29zdCgpKSk7XG4gIGNvbnN0IGV4cGVuc2l2ZVRyaXAgPSB1c2VyLnRyaXBzLmZpbmQodCA9PiB0LmNhbGN1bGF0ZVRyaXBDb3N0KCkgPT09IGhpZ2hlc3RDb3N0KTtcbiAgY29uc3QgcGVuZGluZyA9IHVzZXIudHJpcHMuZmlsdGVyKHQgPT4gdC5zdGF0dXMgPT09ICdwZW5kaW5nJyk7XG4gIHBhZ2VJbmZvLmlubmVyVGV4dCA9ICdNeSBQcm9maWxlJztcbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwcGVyIHVzZXItcHJvZmlsZVwiPlxuICAgICAgPGgyPiR7dXNlci5uYW1lfTwvaDI+XG4gICAgICA8dWwgY2xhc3M9XCJ1c2VyLWRhdGFcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwidXNlci1kYXRhXCI+VG90YWwgVHJpcHM6ICR7dXNlci50cmlwcy5sZW5ndGh9PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwidXNlci1kYXRhXCI+TW9zdCBFeHBlbnNpdmUgVHJpcDo8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJ1c2VyLWRhdGFcIj4ke2V4cGVuc2l2ZVRyaXAuZGVzdGluYXRpb24ubmFtZX0gKCQke2V4cGVuc2l2ZVRyaXAuY2FsY3VsYXRlVHJpcENvc3QoKX0pPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwidXNlci1kYXRhXCI+UGVuZGluZyBUcmlwczogJHtwZW5kaW5nLmxlbmd0aH08L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJ1c2VyLWRhdGFcIj5UcmF2ZWxlciBUeXBlOjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInVzZXItZGF0YVwiPiR7dXNlci50cmF2ZWxlclR5cGV9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXZgO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMb2dpbigpIHtcbiAgcmV0dXJuIGBcbiAgICA8Zm9ybSBjbGFzcz1cImxvZ2luXCI+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJ1c2VybmFtZVwiIHJlcXVpcmVkPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcmVxdWlyZWQ+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImxvZ2luLWJ1dHRvblwiIGlkPVwibG9naW5cIj5Mb2dpbjwvYnV0dG9uPlxuICAgIDwvZm9ybT5gO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwU3VjY2VzcygpIHtcbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwic3VjY2Vzcy13cmFwcGVyXCI+XG4gICAgICA8cCBjbGFzcz1cInRyaXAtc3VjY2Vzc1wiPkNvbmdyYXR1bGF0aW9ucyEgWW91ciB0cmlwIHRvICR7aW5wdXRWYWx1ZXMubmFtZX0gaGFzIGJlZW4gc3VibWl0dGVkICYgd2lsbCBiZSByZXZpZXdlZCBieSBhIFRyYXZlbFRyYWNrZXIgYWdlbnQgc2hvcnRseSE8L3A+XG4gICAgICA8YnV0dG9uIGlkPVwic3VjY2Vzc0hvbWVcIj5WaWV3IE15IFRyaXBzPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGBcbn1cblxuZnVuY3Rpb24gcmVuZGVyR0VURXJyb3IoKSB7XG4gIHJldHVybiBgXG4gIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPlNvcnJ5LCBpdCBsb29rcyBsaWtlIHRoZSBUcmF2ZWxUcmFja2VyIHNlcnZlcnMgYXJlIGRvd24gcmlnaHQgbm93LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLjwvcD5cbiAgYFxufVxuXG5mdW5jdGlvbiByZW5kZXJQT1NURXJyb3IoKSB7XG4gIHJldHVybiBgXG4gIDxkaXYgY2xhc3M9XCJwbGFuLXRyaXBcIj5cbiAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5Tb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHlvdXIgdHJpcCByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLjwvcD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJhZC1idXR0b25cIiBpZD1cImNhbmNlbFRyaXBcIj5CYWNrPC9idXR0b24+XG4gIDwvZGl2PlxuICBgXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBZ2VuY3lJbmZvKCkge1xuICBjb25zdCBuYXZCdXR0b25zID0ge1xuICAgIHRyaXBzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlUcmlwcycpLFxuICAgIHBsYW46IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFuVHJpcCcpLFxuICAgIGRlc3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXN0aW5hdGlvbnMnKSxcbiAgfVxuICBjb25zdCBuYXZJbWFnZXMgPSB7XG4gICAgcGxhbmU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFuZUljb24nKSxcbiAgICBzdWl0Y2FzZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1aXRjYXNlSWNvbicpLFxuICAgIGlzbGFuZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzbGFuZEljb24nKVxuICB9XG4gIG5hdkJ1dHRvbnMudHJpcHMuaW5uZXJUZXh0ID0gJ1BlbmRpbmcgVHJpcHMnO1xuICBuYXZCdXR0b25zLnRyaXBzLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIG5hdkltYWdlcy5wbGFuZSk7XG4gIG5hdkJ1dHRvbnMucGxhbi5pbm5lclRleHQgPSAnQXBwcm92ZS9EZW55IFRyaXBzJztcbiAgbmF2QnV0dG9ucy5wbGFuLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIG5hdkltYWdlcy5zdWl0Y2FzZSk7XG4gIG5hdkJ1dHRvbnMuZGVzdC5pbm5lclRleHQgPSAnQWxsIFRyaXBzJztcbiAgbmF2QnV0dG9ucy5kZXN0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIG5hdkltYWdlcy5pc2xhbmQpO1xuICBwYWdlSW5mby5pbm5lclRleHQgPSBgUGVuZGluZyBUcmlwcyAoJCR7dXNlci5jYWxjdWxhdGVQZW5kaW5nVHJpcENvbW1pc3Npb24oKX0gcGVuZGluZyBjb21taXNzaW9uKWA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFnZW50VHJpcHMobmFtZSwgZGF0ZXMsIHN0YXR1cywgdHJhdmVsZXJDb3VudCwgaW1hZ2UsIGFsdCwgZHVyYXRpb24sIGNvc3QsIGNvbW1pc3Npb24pIHtcbiAgcmV0dXJuIGBcbiAgICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlclwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZS13cmFwcGVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiJHtpbWFnZX1cIlxuICAgICAgICAgICAgYWx0PVwiJHthbHR9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2Utb3ZlcmxheSBjYXBzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LWNvdW50ZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImRheXNcIj5EYXlzPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImRheS1jb3VudFwiPiR7ZHVyYXRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbmZvLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiZGVzdGluYXRpb24tbmFtZVwiPiR7bmFtZX08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0cmlwLWRhdGVzXCI+JHtkYXRlc308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgPHA+Q29tbWlzc2lvbiBFYXJuZWQ6PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWNvc3RcIj4kJHtjb21taXNzaW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJpcC1zdGF0dXMtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FwcyBzbWFsbGVyLWZvbnRcIj5TdGF0dXM6PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibGlnaHRlclwiPiR7c3RhdHVzfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJhdmVsZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FwcyBzbWFsbGVyLWZvbnRcIj5UcmF2ZWxlcnM6PC9oND5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidHJhdmVsZXItY291bnQgbGlnaHRlclwiPiR7dHJhdmVsZXJDb3VudH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWdlbnRBcHByb3ZhbCgpIHtcbiAgcGFnZUluZm8uaW5uZXJUZXh0ID0gJ0FwcHJvdmUvRGVueSBUcmlwcyc7XG4gIHJldHVybiBgXG4gICA8Zm9ybSBjbGFzcz1cInBsYW4tdHJpcFwiIGlkPVwidHJpcEFwcHJvdmFsXCI+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJ0cmlwc1wiIGlkPVwicGVuZGluZ1RyaXBzXCIgcmVxdWlyZWQ+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYSBQZW5kaW5nIFRyaXAgKHJlcXVpcmVkKTwvb3B0aW9uPlxuICAgICAgICAke2dlbmVyYXRlUGVuZGluZ1RyaXBPcHRpb25zKCl9XG4gICAgICA8c2VsZWN0PlxuICAgICAgPHNlbGVjdCBuYW1lPVwiYWN0aXZpdGllc1wiIGlkPVwic3VnZ2VzdEFjdGl2aXRpZXNcIj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk4vQVwiPlN1Z2dlc3QgYW4gQWN0aXZpdHkgKG9wdGlvbmFsKTwvb3B0aW9uPlxuICAgICAgICAke2dlbmVyYXRlQWN0aXZpdHlPcHRpb25zKCl9XG4gICAgICA8c2VsZWN0PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhcHByb3ZlVHJpcFwiPkFwcHJvdmUgVHJpcDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkZW55VHJpcFwiIGNsYXNzPVwiYmFkLWJ1dHRvblwiPkRlbnkgVHJpcDwvYnV0dG9uPlxuICAgIDwvZm9ybT4gXG4gIGBcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQZW5kaW5nVHJpcE9wdGlvbnMoKSB7XG4gIGNvbnN0IHBlbmRpbmdUcmlwcyA9IHVzZXIudHJpcHMuZmlsdGVyKHQgPT4gdC5zdGF0dXMgPT09ICdwZW5kaW5nJyk7XG4gIGNvbnN0IG9wdGlvbnMgPSBwZW5kaW5nVHJpcHMubWFwKHQgPT4gYDxvcHRpb24gdmFsdWU9XCIke3QuaWR9XCI+JHt0LmRlc3RpbmF0aW9uLm5hbWV9OiBVc2VyICMke3QudXNlcklEfTwvb3B0aW9uPmApO1xuICByZXR1cm4gWy4uLm9wdGlvbnNdXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RBZ2VudElucHV0VmFsdWVzKCkge1xuICBjb25zdCBpbnB1dHMgPSB7XG4gICAgdHJpcElkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVuZGluZ1RyaXBzJyksXG4gICAgYWN0aXZpdGllczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Z2dlc3RBY3Rpdml0aWVzJylcbiAgfTtcbiAgY29uc3QgaW5wdXRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRzKTtcbiAgaWYgKGlucHV0S2V5cy5ldmVyeShrZXkgPT4gaW5wdXRzW2tleV0udmFsdWUpKSB7XG4gICAgaW5wdXRLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGFnZW50SW5wdXRWYWx1ZXNba2V5XSA9IGlucHV0c1trZXldLnZhbHVlO1xuICAgIH0pXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBNYWtlIFN1cmUgdG8gSW5jbHVkZSBBbGwgUmVxdWlyZWQgSW5mb3JtYXRpb24g8J+koCcpXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUcmlwVXBkYXRlKCkge1xuICBwYWdlSW5mby5pbm5lclRleHQgPSAnU3VjY2VzcydcbiAgZGFzaGJvYXJkLmlubmVySFRNTCA9ICcnO1xuICBkYXNoYm9hcmQuaW5uZXJIVE1MID0gcmVuZGVyVXBkYXRlU3VjY2VzcygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VHJpcERlbGV0ZSgpIHtcbiAgcGFnZUluZm8uaW5uZXJUZXh0ID0gJ1N1Y2Nlc3MnXG4gIGRhc2hib2FyZC5pbm5lckhUTUwgPSAnJztcbiAgZGFzaGJvYXJkLmlubmVySFRNTCA9IHJlbmRlckRlbGV0ZVN1Y2Nlc3MoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVXBkYXRlU3VjY2VzcygpIHtcbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwic3VjY2Vzcy13cmFwcGVyXCI+XG4gICAgICA8cCBjbGFzcz1cInRyaXAtc3VjY2Vzc1wiPlRyaXAgaGFzIGJlZW4gdXBkYXRlZCBzdWNjZXNzZnVsbHkuPC9wPlxuICAgICAgPGJ1dHRvbiBpZD1cInN1Y2Nlc3NIb21lXCI+VmlldyBQZW5kaW5nIFRyaXBzPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGBcbn1cblxuZnVuY3Rpb24gcmVuZGVyRGVsZXRlU3VjY2VzcygpIHtcbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwic3VjY2Vzcy13cmFwcGVyXCI+XG4gICAgICA8cCBjbGFzcz1cInRyaXAtc3VjY2Vzc1wiPlRyaXAgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHkuPC9wPlxuICAgICAgPGJ1dHRvbiBpZD1cInN1Y2Nlc3NIb21lXCI+VmlldyBQZW5kaW5nIFRyaXBzPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGBcbn1cblxuXG5leHBvcnQge1xuICBkaXNwbGF5Q2hhbmdlcyxcbiAgZGlzcGxheVVzZXJuYW1lLFxuICBkaXNwbGF5VHJpcHMsXG4gIGlucHV0VmFsdWVzLFxuICBkaXNwbGF5VHJpcHNJbmZvLFxuICBkaXNwbGF5TG9naW4sXG4gIHJlbmRlckdFVEVycm9yLFxuICByZW5kZXJQT1NURXJyb3IsXG4gIGRhc2hib2FyZCxcbiAgcGFnZUluZm8sXG4gIGFnZW50SW5wdXRWYWx1ZXMsXG59IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvaXNsYW5kLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3BsYW5lLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3N1aXRjYXNlLnN2Z1wiOyIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcblxuaW1wb3J0ICcuL2ltYWdlcy9pc2xhbmQuc3ZnJ1xuaW1wb3J0ICcuL2ltYWdlcy9zdWl0Y2FzZS5zdmcnXG5pbXBvcnQgJy4vaW1hZ2VzL3BsYW5lLnN2ZydcblxuaW1wb3J0ICcuL3NjcmlwdHMuanMnIiwiaW1wb3J0IHtcbiAgaW5zdGFudGlhdGVDbGFzc2VzLFxuICB0cmlwUmVwbyxcbiAgZGVzdGluYXRpb25SZXBvLFxuICB1c2Vycyxcbn0gZnJvbSAnLi9jbGFzc1N0cnVjdHVyZSc7XG5cbmltcG9ydCB7XG4gIGRpc3BsYXlDaGFuZ2VzLFxuICBpbnB1dFZhbHVlcyxcbiAgZGlzcGxheUxvZ2luLFxuICBkaXNwbGF5VXNlcm5hbWUsXG4gIGRpc3BsYXlUcmlwc0luZm8sXG4gIGRpc3BsYXlUcmlwcyxcbiAgYWdlbnRJbnB1dFZhbHVlc1xufSBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbidcblxuaW1wb3J0IFRyaXAgZnJvbSAnLi9UcmlwJztcblxuaW1wb3J0IHtcbiAgcG9zdFRyaXAsXG4gIHBvc3RNZXNzYWdlLFxuICByZXF1ZXN0cyxcbiAgdXBkYXRlVHJpcCxcbiAgZGVsZXRlVHJpcFxufSBmcm9tICcuL2FwaUNhbGxzJztcblxubGV0IHVzZXI7XG5sZXQgdHJhdmVsZXJzLCB0cmlwcywgZGVzdGluYXRpb25zO1xuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZShuZXcgRGF0ZSh0b2RheSkuZ2V0VGltZSgpICsgODY0MDAwMDApLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxvYWRGdW5jdGlvbnMpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tGdW5jdGlvbnMpO1xuXG5mdW5jdGlvbiBsb2FkRnVuY3Rpb25zKCkge1xuICBuYXZpZ2F0aW9uU3dpdGNoKCk7XG4gIGRpc3BsYXlMb2dpbigpO1xufVxuXG5mdW5jdGlvbiBjbGlja0Z1bmN0aW9ucygpIHtcbiAgaWYgKHVzZXJMb2dpbigpKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZUNsYXNzZXMoKTtcbiAgICAgIHVzZXIgPSB1c2VycztcbiAgICAgIGRpc3BsYXlVc2VybmFtZSgpO1xuICAgICAgbmF2aWdhdGlvblN3aXRjaCh0cnVlKTtcbiAgICAgIGRpc3BsYXlUcmlwc0luZm8oKTtcbiAgICAgIGRpc3BsYXlUcmlwcygpO1xuICAgIH0sIDIwMCk7XG4gIH1cbiAgZGlzcGxheUNoYW5nZXMoKTtcbiAgc2VuZFBvc3RSZXF1ZXN0KCk7XG4gIHNlbmRVcGRhdGVSZXF1ZXN0KCk7XG4gIHNlbmREZWxldGVSZXF1ZXN0KCk7XG59XG5cbmZ1bmN0aW9uIHNlbmRQb3N0UmVxdWVzdCgpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2ZpbmFsaXplVHJpcCcpIHtcbiAgICBjb25zdCB0cmlwUmVxdWVzdCA9IGZvcm1hdFRyaXBSZXF1ZXN0KCk7XG4gICAgcG9zdFRyaXAodHJpcFJlcXVlc3QpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHBvc3RNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IHRyaXAgPSBjb252ZXJ0VHJpcFJlcXVlc3QodHJpcFJlcXVlc3QpXG4gICAgICAgIHRyaXBSZXBvLmxpc3QucHVzaCh0cmlwKTtcbiAgICAgICAgdXNlci50cmlwcy5wdXNoKHRyaXApO1xuICAgICAgfVxuICAgIH0sIDIwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VuZFVwZGF0ZVJlcXVlc3QoKSB7XG4gIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdhcHByb3ZlVHJpcCcgJiYgdmVyaWZ5SW5wdXRWYWx1ZXMoKSkge1xuICAgIGNvbnN0IHVwZGF0ZVJlcXVlc3QgPSBmb3JtYXRUcmlwVXBkYXRlKCk7XG4gICAgdXBkYXRlVHJpcCh1cGRhdGVSZXF1ZXN0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChwb3N0TWVzc2FnZSkge1xuICAgICAgICBjb25zdCB0cmlwID0gdXNlci50cmlwcy5maW5kKHQgPT4gdC5pZCA9PT0gTnVtYmVyKGFnZW50SW5wdXRWYWx1ZXMudHJpcElkKSk7XG4gICAgICAgIHVzZXIuYXBwcm92ZVBlbmRpbmdUcmlwKHRyaXApO1xuICAgICAgICB1c2VyLmdldFBlbmRpbmdUcmlwcygpO1xuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VuZERlbGV0ZVJlcXVlc3QoKSB7XG4gIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdkZW55VHJpcCcgJiYgdmVyaWZ5SW5wdXRWYWx1ZXMoKSkge1xuICAgIGNvbnN0IGRlbGV0ZVJlcXVlc3QgPSBmb3JtYXRUcmlwRGVsZXRlKCk7XG4gICAgZGVsZXRlVHJpcChkZWxldGVSZXF1ZXN0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChwb3N0TWVzc2FnZSkge1xuICAgICAgICBjb25zdCB0cmlwID0gdXNlci50cmlwcy5maW5kKHQgPT4gdC5pZCA9PT0gTnVtYmVyKGFnZW50SW5wdXRWYWx1ZXMudHJpcElkKSk7XG4gICAgICAgIHVzZXIudHJpcHMuc3BsaWNlKHVzZXIudHJpcHMuaW5kZXhPZih0cmlwKSwgMSk7XG4gICAgICAgIHVzZXIuZ2V0UGVuZGluZ1RyaXBzKCk7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJpZnlJbnB1dFZhbHVlcygpIHtcbiAgY29uc3QgaW5wdXRLZXlzID0gT2JqZWN0LmtleXMoYWdlbnRJbnB1dFZhbHVlcyk7XG4gIGlmIChpbnB1dEtleXMuZXZlcnkoa2V5ID0+IGFnZW50SW5wdXRWYWx1ZXNba2V5XSkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdElucHV0RGF0ZShkYXRlKSB7XG4gIGNvbnN0IGRhdGVTcGxpdCA9IGRhdGUuc3BsaXQoJy0nKTtcbiAgY29uc3QgeWVhciA9IGRhdGVTcGxpdC5zaGlmdCgpO1xuICBkYXRlU3BsaXQucHVzaCh5ZWFyKTtcbiAgcmV0dXJuIGRhdGVTcGxpdC5qb2luKCcvJylcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRGF5cyhzdGFydCwgZW5kKSB7XG4gIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKHN0YXJ0KS5nZXRUaW1lKCk7XG4gIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZShlbmQpLmdldFRpbWUoKTtcbiAgY29uc3QgdGltZURpZmZlcmVuY2UgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICByZXR1cm4gKHRpbWVEaWZmZXJlbmNlIC8gODY0MDAwMDApICsgMTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VHJpcFJlcXVlc3QoKSB7XG4gIGNvbnN0IGRlc3RSZXF1ZXN0ID0gZGVzdGluYXRpb25SZXBvLmxpc3QuZmluZChkID0+IGQubmFtZSA9PT0gaW5wdXRWYWx1ZXMubmFtZSk7XG4gIGNvbnN0IGRlc3RJZCA9IGRlc3RSZXF1ZXN0LmlkO1xuICBjb25zdCB0cmF2ZWxlcnMgPSBOdW1iZXIoaW5wdXRWYWx1ZXMudHJhdmVsZXJBbXQpO1xuICBjb25zdCBkYXRlID0gZmluYWxpemVJbnB1dERhdGUoKTtcbiAgY29uc3QgZHVyYXRpb24gPSBjYWxjdWxhdGVEYXlzKGlucHV0VmFsdWVzLnN0YXJ0LCBpbnB1dFZhbHVlcy5lbmQpO1xuICBjb25zdCBhY3Rpdml0aWVzID0gZmluYWxpemVSZXF1ZXN0QWN0aXZpdGllcygpO1xuICBjb25zdCB0cmlwUmVxdWVzdCA9IHVzZXIucGxhblRyaXAoZGVzdElkLCB0cmF2ZWxlcnMsIGRhdGUsIGR1cmF0aW9uLCBhY3Rpdml0aWVzKTtcbiAgdHJpcFJlcXVlc3QuaWQgPSBnZW5lcmF0ZVRyaXBSZXF1ZXN0SWQoKTtcbiAgcmV0dXJuIHRyaXBSZXF1ZXN0XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRyaXBVcGRhdGUoKSB7XG4gIGNvbnN0IHVwZGF0ZVJlcXVlc3QgPSB7XG4gICAgaWQ6IE51bWJlcihhZ2VudElucHV0VmFsdWVzLnRyaXBJZCksXG4gICAgc3RhdHVzOiAnYXBwcm92ZWQnLFxuICAgIHN1Z2dlc3RlZEFjdGl2aXRpZXM6IGZpbmFsaXplVXBkYXRlQWN0aXZpdGllcygpXG4gIH1cbiAgcmV0dXJuIHVwZGF0ZVJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gZm9ybWF0VHJpcERlbGV0ZSgpIHtcbiAgcmV0dXJuIE51bWJlcihhZ2VudElucHV0VmFsdWVzLnRyaXBJZClcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUcmlwUmVxdWVzdElkKCkge1xuICBjb25zdCB0cmlwSWRzID0gdHJpcFJlcG8ubGlzdC5tYXAodCA9PiB0LmlkKTtcbiAgY29uc3QgaGlnaGVzdElkID0gTWF0aC5tYXgoLi4udHJpcElkcyk7XG4gIHJldHVybiBoaWdoZXN0SWQgKyAxXG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplUmVxdWVzdEFjdGl2aXRpZXMoKSB7XG4gIGlmIChpbnB1dFZhbHVlcy5hY3Rpdml0aWVzID09PSAnTi9BJykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gaW5wdXRWYWx1ZXMuYWN0aXZpdGllcy5zcGxpdCgpXG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplVXBkYXRlQWN0aXZpdGllcygpIHtcbiAgaWYgKGFnZW50SW5wdXRWYWx1ZXMuYWN0aXZpdGllcyA9PT0gJ04vQScpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIGFnZW50SW5wdXRWYWx1ZXMuYWN0aXZpdGllcy5zcGxpdCgpXG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplSW5wdXREYXRlKCkge1xuICBjb25zdCBkYXRlID0gaW5wdXRWYWx1ZXMuc3RhcnQuc3BsaXQoJy0nKTtcbiAgcmV0dXJuIGRhdGUuam9pbignLycpXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUcmlwUmVxdWVzdCh0cmlwUmVxKSB7XG4gIGNvbnN0IHRyaXAgPSBuZXcgVHJpcCh0cmlwUmVxLCBkZXN0aW5hdGlvblJlcG8ubGlzdCk7XG4gIHJldHVybiB0cmlwXG59XG5cbmZ1bmN0aW9uIGNhbGNsdWF0ZVRvdGFsVHJpcHNDb3N0KCkge1xuICBjb25zdCBjb3N0cyA9IHVzZXIudHJpcHMubWFwKHQgPT4gdC5jYWxjdWxhdGVUcmlwQ29zdCgpKTtcbiAgcmV0dXJuIGNvc3RzLnJlZHVjZSgoYSwgY29zdCkgPT4gYSArIGNvc3QpO1xufVxuXG5mdW5jdGlvbiB1c2VyVmFsaWRhdGUoKSB7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpLnZhbHVlO1xuICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpLnZhbHVlO1xuICBjb25zdCBleHBlY3RlZCA9ICd0cmF2ZWwyMDIwJ1xuICBjb25zdCBuYW1lSWQgPSBuYW1lSW5wdXQuc2xpY2UoLTIpO1xuICBpZiAobmFtZUlucHV0ID09PSAnYWdlbmN5JyAmJiBwYXNzd29yZCA9PT0gZXhwZWN0ZWQpIHtcbiAgICB1c2VyID0gJyc7XG4gICAgcmV0dXJuIHRydWVcbiAgfSBlbHNlIGlmIChOdW1iZXIobmFtZUlkKSAmJiBuYW1lSW5wdXQuaW5jbHVkZXMoJ3RyYXZlbGVyJykgJiYgcGFzc3dvcmQgPT09IGV4cGVjdGVkKSB7XG4gICAgdXNlciA9ICcvJyArIG5hbWVJZDtcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZSAmIHBhc3N3b3JkIPCfmJMnKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIHVzZXJMb2dpbigpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2xvZ2luJyAmJiB1c2VyVmFsaWRhdGUoKSkge1xuICAgIGNvbnN0IHBhdGhzID0gW2B0cmF2ZWxlcnMke3VzZXJ9YCwgJ3RyaXBzJywgJ2Rlc3RpbmF0aW9ucyddO1xuICAgIGFzc2lnbkdFVFJlc3VsdHMocmVxdWVzdHMocGF0aHMpKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkdFVFJlc3VsdHMocmVzdWx0cykge1xuICByZXN1bHRzWzBdLnRoZW4oZGF0YSA9PiB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHRyYXZlbGVycyA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYXZlbGVycyA9IGRhdGEudHJhdmVsZXJzO1xuICAgIH1cbiAgfSk7XG4gIHJlc3VsdHNbMV0udGhlbihkYXRhID0+IHRyaXBzID0gZGF0YS50cmlwcyk7XG4gIHJlc3VsdHNbMl0udGhlbihkYXRhID0+IGRlc3RpbmF0aW9ucyA9IGRhdGEuZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gbmF2aWdhdGlvblN3aXRjaChib29sZWFuKSB7XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xuICBjb25zdCBuYXZUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgaWYgKGJvb2xlYW4pIHtcbiAgICBsb2dvLmRpc2FibGVkID0gZmFsc2U7XG4gICAgbmF2VGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykpXG4gIH0gZWxzZSB7XG4gICAgbG9nby5kaXNhYmxlZCA9IHRydWU7XG4gICAgbmF2VGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpXG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgdXNlcixcbiAgdG9kYXksXG4gIHRvbW9ycm93LFxuICBkZXN0aW5hdGlvblJlcG8sXG4gIGZvcm1hdElucHV0RGF0ZSxcbiAgY2FsY3VsYXRlRGF5cyxcbiAgZm9ybWF0VHJpcFJlcXVlc3QsXG4gIGNhbGNsdWF0ZVRvdGFsVHJpcHNDb3N0LFxuICB0cmF2ZWxlcnMsXG4gIHRyaXBzLFxuICBkZXN0aW5hdGlvbnMsXG59Il0sInNvdXJjZVJvb3QiOiIifQ==