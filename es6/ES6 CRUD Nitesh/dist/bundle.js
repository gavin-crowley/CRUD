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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {/* \n(The MIT License)\nCopyright (c) 2014-2019 Halász Ádám <mail@adamhalasz.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = process && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, mac, networkInterfaces; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports.default = function(prefix = '', suffix = ''){ return prefix + address + pid + now().toString(36) + suffix; }\nmodule.exports.process = function(prefix = '', suffix = ''){ return prefix + pid + now().toString(36) + suffix; }\nmodule.exports.time    = function(prefix = '', suffix = ''){ return prefix + now().toString(36) + suffix; }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_BookView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/BookView */ \"./src/js/views/BookView.js\");\n/* harmony import */ var _models_BookModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/BookModel */ \"./src/js/models/BookModel.js\");\n/* harmony import */ var _views_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/common */ \"./src/js/views/common.js\");\n\r\n\r\n\r\n\r\n\r\nvar uniqid = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\r\nconst book = new _models_BookModel__WEBPACK_IMPORTED_MODULE_1__[\"Book\"]();\r\nconst ui = new _views_common__WEBPACK_IMPORTED_MODULE_2__[\"UI\"]();\r\nconst store = new _models_BookModel__WEBPACK_IMPORTED_MODULE_1__[\"Store\"]();\r\ndocument.addEventListener('DOMContentLoaded', store.diplayBooks());\r\n//Add new Book(submit)\r\n_views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].submit.addEventListener('click', e => {\r\n    if (_views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].title.value === '' || _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].author.value === '') {\r\n        ui.showAlert('All fields are required.', 'danger');\r\n        _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].title.focus();\r\n    } else {\r\n        addBook();\r\n        ui.showAlert('Book Added successfully.', 'success');\r\n    }\r\n    e.preventDefault();\r\n});\r\n//Add new Book\r\nconst addBook = () => {\r\n    const title = _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].title.value;\r\n    const author = _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].author.value;\r\n    const book = new _models_BookModel__WEBPACK_IMPORTED_MODULE_1__[\"Book\"](title, author, uniqid());\r\n    const store = new _models_BookModel__WEBPACK_IMPORTED_MODULE_1__[\"Store\"]();\r\n    store.addBooks(book);\r\n    Object(_views_BookView__WEBPACK_IMPORTED_MODULE_0__[\"clearFormValues\"])();\r\n    Object(_views_BookView__WEBPACK_IMPORTED_MODULE_0__[\"clearResults\"])();\r\n    store.diplayBooks();\r\n}\r\n//Update Book (submit)\r\n_views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].update.addEventListener('click', e => {\r\n    if (_views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].title.value === '' || _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].author.value === '') {\r\n        ui.showAlert('All fields are required.', 'danger');\r\n        _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].title.focus();\r\n    } else {\r\n        updateBook();\r\n    }\r\n    e.preventDefault();\r\n});\r\n//Add new Book localstorage\r\nconst updateBook = () => {\r\n    const updateId = _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].update.getAttribute('data-id');\r\n    store.updateBooks(updateId);\r\n    Object(_views_BookView__WEBPACK_IMPORTED_MODULE_0__[\"clearFormValues\"])();\r\n    Object(_views_BookView__WEBPACK_IMPORTED_MODULE_0__[\"clearResults\"])();\r\n    store.diplayBooks();\r\n    _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].title.focus();\r\n    ui.showAlert('Book update successfully.', 'success');\r\n}\r\n//Delete Book from localstorage\r\n_views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].booklist.addEventListener('click', e => {\r\n    if (e.target.dataset.type === 'delete') {\r\n        store.deleteBook(e.target.id);\r\n        Object(_views_common__WEBPACK_IMPORTED_MODULE_2__[\"renderLoader\"])(_views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].booklist);\r\n        store.diplayBooks();\r\n        Object(_views_common__WEBPACK_IMPORTED_MODULE_2__[\"clearLoader\"])();\r\n        ui.showAlert('Book deleted successfully.', 'success');\r\n        Object(_views_BookView__WEBPACK_IMPORTED_MODULE_0__[\"checkDataLocalStorare\"])();\r\n        e.stopPropagation();\r\n    }\r\n});\r\n//Edit Book from localstorage\r\n_views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].booklist.addEventListener('click', e => {\r\n    if (e.target.dataset.type === 'edit') {\r\n        _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].update.setAttribute('data-id', e.target.id)\r\n        store.getEditBook(e.target.id);\r\n        _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].cancel.classList.remove('hide');\r\n        _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].submit.classList.add('hide');\r\n        _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].update.classList.remove('hide');\r\n        e.stopPropagation();\r\n    }\r\n});\r\n//Show hide button from DOM\r\n_views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].cancel.addEventListener('click', e => {\r\n    _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].cancel.classList.add('hide');\r\n    _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].submit.classList.remove('hide');\r\n    _views_common__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].update.classList.add('hide');\r\n    Object(_views_BookView__WEBPACK_IMPORTED_MODULE_0__[\"clearFormValues\"])();\r\n})\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/BookModel.js":
/*!************************************!*\
  !*** ./src/js/models/BookModel.js ***!
  \************************************/
/*! exports provided: Book, Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Book\", function() { return Book; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony import */ var _views_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/common */ \"./src/js/views/common.js\");\n/* harmony import */ var _views_BookView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/BookView */ \"./src/js/views/BookView.js\");\n\r\n\r\nclass Book {\r\n    constructor(title, author, id) {\r\n        this.title = title;\r\n        this.author = author;\r\n        this.id = id;\r\n    }\r\n}\r\nclass Store {\r\n    getBooks() {\r\n        let books;\r\n        if (localStorage.getItem('books') === null) {\r\n            books = [];\r\n        } else {\r\n            books = JSON.parse(localStorage.getItem('books'));\r\n        }\r\n        return books;\r\n    }\r\n    addBooks(book) {\r\n        const books = this.getBooks();\r\n        books.push(book);\r\n        localStorage.setItem('books', JSON.stringify(books));\r\n    }\r\n    diplayBooks() {\r\n        _views_common__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].update.classList.add('hide');\r\n        const books = this.getBooks();\r\n        Object(_views_BookView__WEBPACK_IMPORTED_MODULE_1__[\"dataLocalStore\"])(books);\r\n        _views_common__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cancel.classList.add('hide');\r\n        Object(_views_BookView__WEBPACK_IMPORTED_MODULE_1__[\"checkDataLocalStorare\"])();\r\n    }\r\n    deleteBook(id) {\r\n        const books = this.getBooks();\r\n        books.forEach(function(book, index) {\r\n            if (book.id === id) {\r\n                books.splice(index, 1);\r\n            }\r\n        })\r\n        Object(_views_BookView__WEBPACK_IMPORTED_MODULE_1__[\"clearResults\"])();\r\n        localStorage.setItem('books', JSON.stringify(books));\r\n    }\r\n    updateBooks(id) {\r\n        const books = this.getBooks();\r\n        books.forEach(function(book) {\r\n            if (book.id === id) {\r\n                book.title = _views_common__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].title.value;\r\n                book.author = _views_common__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].author.value;\r\n            }\r\n        })\r\n        localStorage.setItem('books', JSON.stringify(books));\r\n    }\r\n    getEditBook(id) {\r\n        const books = this.getBooks();\r\n        books.forEach(function(book, index) {\r\n            if (book.id === id) {\r\n                _views_common__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].author.value = book.author;\r\n                _views_common__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].title.value = book.title;\r\n            }\r\n        })\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/models/BookModel.js?");

/***/ }),

/***/ "./src/js/views/BookView.js":
/*!**********************************!*\
  !*** ./src/js/views/BookView.js ***!
  \**********************************/
/*! exports provided: clearFormValues, clearResults, dataLocalStore, checkDataLocalStorare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearFormValues\", function() { return clearFormValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearResults\", function() { return clearResults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataLocalStore\", function() { return dataLocalStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkDataLocalStorare\", function() { return checkDataLocalStorare; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/js/views/common.js\");\n/* harmony import */ var _models_BookModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/BookModel */ \"./src/js/models/BookModel.js\");\n\r\n\r\nconst store = new _models_BookModel__WEBPACK_IMPORTED_MODULE_1__[\"Store\"]();\r\nconst clearFormValues = () => {\r\n    _common__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].title.value = '';\r\n    _common__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].author.value = '';\r\n}\r\nconst clearResults = () => {\r\n    _common__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].booklist.innerHTML = '';\r\n}\r\nconst renderResult = result => {\r\n    const markUP = `\r\n         <tr>\r\n      <td>${result.title}</td>\r\n       <td>${result.author}</td>\r\n      <td> X  </td>\r\n      <td> Edit  </td>\r\n    </tr>\r\n  `\r\n    _common__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].booklist.insertAdjacentHTML('beforeend', markUP)\r\n};\r\nconst dataLocalStore = (result) => {\r\n    result.forEach(renderResult);\r\n};\r\nconst noResult = () => {\r\n    const noDatamarkUP = `\r\n         <tr>\r\n      <td>No record found.</td>\r\n      <td></td>\r\n       <td></td>\r\n        <td></td>\r\n    </tr>\r\n   `\r\n    _common__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].booklist.insertAdjacentHTML('beforeend', noDatamarkUP)\r\n};\r\nconst checkDataLocalStorare = () => {\r\n    var items = JSON.parse(window.localStorage.getItem('books'))\r\n    if (items === null || items.length === 0) {\r\n        noResult();\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/js/views/BookView.js?");

/***/ }),

/***/ "./src/js/views/common.js":
/*!********************************!*\
  !*** ./src/js/views/common.js ***!
  \********************************/
/*! exports provided: elements, UI, elementString, renderLoader, clearLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UI\", function() { return UI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementString\", function() { return elementString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLoader\", function() { return renderLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearLoader\", function() { return clearLoader; });\nconst elements = {\r\n    title: document.getElementById('title'),\r\n    author: document.getElementById('author'),\r\n    formid: document.getElementById('formid'),\r\n    booklist: document.getElementById('book-list'),\r\n    container: document.querySelector('.container'),\r\n    submit: document.querySelector('#submit'),\r\n    cancel: document.querySelector('#cancel'),\r\n    update: document.querySelector('#update')\r\n};\r\nclass UI {\r\n    showAlert(message, className) {\r\n        const alertMarkup = `\r\n            <div class=\"alert alert-${className}\">\r\n    ${message}\r\n  </div>`;\r\n        elements.container.insertAdjacentHTML('afterbegin', alertMarkup);\r\n        setTimeout(function() {\r\n            document.querySelector('.alert').remove();\r\n        }, 2000)\r\n    }\r\n}\r\n\r\nconst elementString = {\r\n    loader:'loader'\r\n}\r\nconst renderLoader = parent =>{\r\n    const loader = `\r\n        <div class=\"${elementString.loader}\">\r\n           <div></div><div></div>\r\n        </div>\r\n    `;\r\n    parent.insertAdjacentHTML('afterbegin', loader);\r\n}\r\nconst clearLoader = ()=>{\r\n    const loader = document.querySelector(`.${elementString.loader}`);\r\n    if(loader){\r\n\r\n        loader.parentElement.removeChild(loader);\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/views/common.js?");

/***/ })

/******/ });