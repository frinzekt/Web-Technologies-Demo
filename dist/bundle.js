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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/HTMLappender.js":
/*!*****************************!*\
  !*** ./app/HTMLappender.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Used for Component Modularization of Appenditure
/* harmony default export */ __webpack_exports__["default"] = ((nodeTag, innerHTML, selector) => {
  let node = document.createElement(nodeTag);
  node.innerHTML = innerHTML;
  document.querySelector(selector).appendChild(node);
});

/***/ }),

/***/ "./app/HTMLreplacer.js":
/*!*****************************!*\
  !*** ./app/HTMLreplacer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Used for Component Entire Replacer
/* harmony default export */ __webpack_exports__["default"] = ((innerHTML, classList, selector) => {
  const element = document.querySelector(selector);
  classList = classList.split(' ');

  if (classList[0] != '') {
    classList.forEach(className => {
      element.classList.add(className);
    });
  }

  element.innerHTML = innerHTML;
});

/***/ }),

/***/ "./app/components/NavBar.js":
/*!**********************************!*\
  !*** ./app/components/NavBar.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HTMLreplacer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLreplacer */ "./app/HTMLreplacer.js");

const classList = 'navbar navbar-expand-lg sticky-top text--color-white background--color-contrast-high d-flex justify-content-between';
const nav = `<div class="navbar-brand mb-0 h1"><a href="index.html" id="Homepage">Frinze Lapuz</a></div>
<button
	class="navbar-toggler"
	type="button"
	data-toggle="collapse"
	data-target="#navbarText"
	aria-controls="navbarText"
	aria-expanded="false"
	aria-label="Toggle navigation"
>
	<span>
		<i class="fa fa-bars" style="color:#fff; font-size:28px;"></i>
	</span>
</button>
<div class="collapse navbar-collapse" id="navbarText">
	<ul class="navbar-nav mr-auto">
		<li id="HTML" class="nav-item">
			<a class="nav-link" href="HTML.html"><i class="fab fa-html5"></i> HTML</a>
		</li>
		<li id="CSS" class="nav-item">
			<a class="nav-link" href="CSS.html"><i class="fab fa-css3"></i> CSS</a>
		</li>
		<li id="JavaScript" class="nav-item">
			<a class="nav-link" href="JavaScript.html"><i class="fab fa-js"></i> JavaScript</a>
		</li>
		<li class="nav-item" >
			<a class="nav-link html-inspector" id="menu-toggle">Toggle HTML Inspector</a>
		</li>
	</ul>
</div>





`;
Object(_HTMLreplacer__WEBPACK_IMPORTED_MODULE_0__["default"])(nav, classList, '#nav');

/***/ }),

/***/ "./app/components/Sidebar.js":
/*!***********************************!*\
  !*** ./app/components/Sidebar.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HTMLreplacer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLreplacer */ "./app/HTMLreplacer.js");

const classList = 'border-right background--color-contrast-high text--color-white';
const sideBar = `
				<ul class="sidebar-nav">
					<li class="sidebar-brand">Live HTML DOM Viewer</li>
					<li class="text--color-success d-none d-md-block">Press "F" To Disable HTML DOM Inspector</li>
				</ul>
				<pre id="liveCodeContainer">
					<code id="liveCode" class="hljs html" > </code>
				</pre>
`;
Object(_HTMLreplacer__WEBPACK_IMPORTED_MODULE_0__["default"])(sideBar, classList, '#sidebar-wrapper');

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HTMLappender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLappender */ "./app/HTMLappender.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NavBar */ "./app/components/NavBar.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Sidebar */ "./app/components/Sidebar.js");
/* harmony import */ var _js_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/sidebar */ "./js/sidebar.js");
/* harmony import */ var _js_sidebar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_sidebar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/nav */ "./js/nav.js");
/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_nav__WEBPACK_IMPORTED_MODULE_4__);
//COMPONENT SYSTEM TO INTRODUCE LESS REPETITION IN CODE
//Uses webpack to compile this bundle into dist/bundle.js
hljs.initHighlighting(); //GLOBAL VARIABLES

window.isDOMViewEnabled = false;
 // Component JS


 // Event-Handling JS




/***/ }),

/***/ "./js/nav.js":
/*!*******************!*\
  !*** ./js/nav.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

initNavBar = (id) => {
	element = document.querySelector(`#${id}`);
	classColor = {
		Homepage: 'text--color-success',
		HTML: 'text--color-warning',
		CSS: 'text--color-primary',
		JavaScript: 'text--color-error',
	};
	element.classList.add(classColor[id]);
};


/***/ }),

/***/ "./js/sidebar.js":
/*!***********************!*\
  !*** ./js/sidebar.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

hljs.configure({ tabReplace: ' ' }); // config of code spacing

const highlightCode = () => {
	document.querySelectorAll('pre code').forEach((block) => {
		hljs.highlightBlock(block);
	});
};
document.onmouseover = (e) => {
	if (isDOMViewEnabled) {
		const codeDiv = document.querySelector('#liveCode');
		const listOfDisabledHover = ['#liveCode', '#liveCodeContainer', '#sidebar-wrapper', '.sidebar-nav', '.sidebar-brand', '.hljs'];

		//DISABLE MOUSEOVER FUNCTION HOVER FOR IDs of either parent or target parent
		if (
			!listOfDisabledHover.some(
				(selector) => document.querySelector(selector) == e.target || document.querySelector(selector) == e.target.parentElement
			)
		) {
			// Only highlight outside code box to avoid recursion
			//CHANGE TEXT AND HIGHLIGHT ELEMENT
			// ALSO REMOVE PREVIOUS OVERLAY
			try {
				window.lastOverlay.classList.remove('overlay');
			} catch (e) {
				//SILENT ERROR
			}

			codeDiv.textContent = e.target.outerHTML;
			highlightCode();
			e.target.classList.add('overlay');
			window.lastOverlay = e.target;
		}
	}
};
document.onmouseout = (e) => {
	if (isDOMViewEnabled) {
		e.target.classList.remove('overlay');
	}
};
const toggleDOMViewEnabled = () => {
	isDOMViewEnabled = !isDOMViewEnabled;
	navIndicator = document.querySelector('.html-inspector');

	//RESPONSIVE AND COLOR
	if (isDOMViewEnabled) {
		navIndicator.style.color = '#88C559';
		[...document.querySelectorAll('.song')].forEach((element) => element.classList.remove('col-md-6'));
		[...document.querySelectorAll('.song-preview')].forEach((element) => element.classList.remove('col-md-5'));
	} else {
		navIndicator.style.color = 'inherit';
		[...document.querySelectorAll('.song')].forEach((element) => element.classList.add('col-md-6'));
		[...document.querySelectorAll('.song-preview')].forEach((element) => element.classList.add('col-md-5'));
	}
};
$('#menu-toggle').click((e) => {
	e.preventDefault();
	$('#wrapper').toggleClass('toggled');
	toggleDOMViewEnabled();
});

$('body').keypress((e) => {
	if (e.key.toLowerCase() == 'f') {
		toggleDOMViewEnabled();
	}
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map