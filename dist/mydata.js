/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _oasis07_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @oasis07/data */ \"../package/dist/@oasis07/data.umd.min.js\");\n/* harmony import */ var _oasis07_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_oasis07_data__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\n_oasis07_data__WEBPACK_IMPORTED_MODULE_0___default()('table', 'tableButtons', 1);\r\nconsole.log(\"Initialized My data\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "../package/dist/@oasis07/data.umd.min.js":
/*!************************************************!*\
  !*** ../package/dist/@oasis07/data.umd.min.js ***!
  \************************************************/
/***/ (function(module) {

eval("!function(e,t){ true?module.exports=t():0}(this,(function(){\"use strict\";function e(e,o,n){let l=document.getElementById(e),c=document.getElementById(o),i=document.createElement(\"button\");i.id=\"add\",i.className=\"button-85\",i.setAttribute(\"role\",\"button\"),i.innerHTML=\"+\";let a=document.createElement(\"button\");a.id=\"get\",a.className=\"button-85\",a.setAttribute(\"role\",\"button\"),a.innerHTML=\"Create line Pictogram\";let r=document.createElement(\"div\");r.className=\"dataCards\",r.id=\"dataCards\";let s=document.createElement(\"div\");return s.className=\"row\",r.appendChild(s),l.appendChild(r),t(e,n),n++,i.addEventListener(\"click\",(o=>{t(e,n),n++,console.log(n)})),c.appendChild(i),c.appendChild(a),!0}function t(e,t){let o=document.getElementById(e),n=document.createElement(\"div\");n.className=\"card\";let l=document.createElement(\"div\");l.className=\"header\",document.createElement(\"input\").className=\"inputCard1\";let c=document.createElement(\"div\");c.className=\"chat-container\";let i=document.createElement(\"div\");i.className=\"chat-utilities\";let a=document.createElement(\"div\");a.className=\"utility-container\";let r=document.createElement(\"ul\");r.className=\"utility-group\";let s=document.createElement(\"li\");s.className=\"emoji-selector\",s.id=\"emojiSelector\";let d=document.createElement(\"div\");d.className=\"input-container\";let p=document.createElement(\"input\");p.id=\"emojiSearch\",p.setAttribute(\"type\",\"text\"),p.setAttribute(\"placeholder\",\"Search...\");let u=document.createElement(\"ul\");u.className=\"emoji-list\",u.id=\"emojiList\";let m=document.createElement(\"li\");m.id=\"emojiSelectorIcon\";let h=document.createElement(\"img\");h.setAttribute(\"src\",\"https://upload.wikimedia.org/wikipedia/commons/9/90/Twemoji_1f600.svg\"),m.appendChild(h),d.appendChild(p),s.appendChild(d),s.appendChild(u),r.appendChild(s),r.appendChild(m),a.appendChild(r),i.appendChild(a),c.appendChild(i),l.appendChild(c);let f=document.createElement(\"div\");f.className=\"picker\",f.id=t,l.appendChild(f);var g=function(e){var t=e.getBoundingClientRect(),o={};return o.top=t.top<0,o.left=t.left<0,o.bottom=t.bottom>(window.innerHeight||document.documentElement.clientHeight),o.right=t.right>(window.innerWidth||document.documentElement.clientWidth),o.any=o.top||o.left||o.bottom||o.right,o.all=o.top&&o.left&&o.bottom&&o.right,o};m.addEventListener(\"click\",(()=>{s.classList.toggle(\"active\"),g(s).any&&(s.style.bottom=\"-710%\")}));let k,C=[];k=10,C=[\"food-drink\"],fetch(\"https://emoji-api.com/emojis?access_key=329dfe7d47ca9bf032e6959bd2692f5624520d19\").then((e=>e.json())).then((e=>function(e,t,o){let n,l=0,c=!0,i=new Set;e.forEach((e=>{if(!i.has(e.codePoint)){c&&(n=e.group,c=!1);let a=document.createElement(\"li\");a.setAttribute(\"emoji-name\",e.slug),a.textContent=e.character;let d=e.group;n==d?l++:l=1,t.includes(e.group)&&l<=o&&(a.addEventListener(\"click\",(()=>{m.style.display=\"none\",r.getElementsByTagName(\"p\").length&&r.getElementsByTagName(\"p\")[0].remove();let t=document.createElement(\"p\");t.textContent=e.character,t.className=\"emoji-input\",s.classList.toggle(\"active\"),t.addEventListener(\"click\",(()=>{s.classList.toggle(\"active\"),g(s).any&&(s.style.bottom=\"-710%\")})),r.appendChild(t)})),u.appendChild(a),n=d),i.add(e.codePoint)}}))}(e,C,k))),p.addEventListener(\"keyup\",(e=>{let t=e.target.value;document.querySelectorAll(\"#emojiList li\").forEach((e=>{e.getAttribute(\"emoji-name\").toLowerCase().includes(t)?e.style.display=\"flex\":e.style.display=\"none\"}))}));let b=document.createElement(\"div\");b.className=\"container\";let v=document.createElement(\"input\");v.className=\"inputCard2\",v.setAttribute(\"placeHolder\",\"Input name\"),b.appendChild(v);let y=document.createElement(\"div\");y.className=\"container2\";let P=document.createElement(\"input\");P.className=\"inputCard3\",P.setAttribute(\"placeHolder\",\"Input number\"),y.appendChild(P);let E=document.createElement(\"button\");E.className=\"deleteButton\",l.style.position=\"relative\",E.style.position=\"absolute\",E.style.top=\"5px\",E.style.left=\"5px\",l.appendChild(E),n.appendChild(l),n.appendChild(b),n.appendChild(y),E.addEventListener(\"click\",(e=>{n.remove()})),o.appendChild(n);let N=new String(\"#\"+t.toString());console.log(\"id:\"+N),$(\"#\"+t).colorPick({initialColor:\"#8e44ad\",palette:[\"#1abc9c\",\"#16a085\",\"#2ecc71\",\"#27ae60\",\"#3498db\",\"#2980b9\",\"#9b59b6\",\"#8e44ad\",\"#34495e\",\"#2c3e50\",\"#f1c40f\",\"#f39c12\",\"#e67e22\",\"#d35400\",\"#e74c3c\",\"#c0392b\",\"#ecf0f1\"],onColorSelected:function(){console.log(\"The user has selected the color: \"+this.color),this.element.css({backgroundColor:this.color,color:this.color})}})}return e(\"table\",\"tableButtons\",1),function(e){e.fn.colorPick=function(t){return this.each((function(){new e.colorPick(this,t||{})}))},e.colorPick=function(t,o){o=o||{},this.options=e.extend({},e.fn.colorPick.defaults,o),o.str&&(this.options.str=e.extend({},e.fn.colorPick.defaults.str,o.str)),e.fn.colorPick.defaults=this.options,this.color=this.options.initialColor.toUpperCase(),this.element=e(t);var n=this.element.data(\"initialcolor\");n&&(this.color=n,this.appendToStorage(this.color));var l=[];return e.each(e.fn.colorPick.defaults.palette.map((function(e){return e.toUpperCase()})),(function(t,o){-1===e.inArray(o,l)&&l.push(o)})),this.palette=l,this.element.hasClass(this.options.pickrclass)?this:this.init()},e.fn.colorPick.defaults={initialColor:\"#3498db\",paletteLabel:\"Default palette:\",allowRecent:!0,recentMax:5,allowCustomColor:!1,palette:[\"#1abc9c\",\"#16a085\",\"#2ecc71\",\"#27ae60\",\"#3498db\",\"#2980b9\",\"#9b59b6\",\"#8e44ad\",\"#34495e\",\"#2c3e50\",\"#f1c40f\",\"#f39c12\",\"#e67e22\",\"#d35400\",\"#e74c3c\",\"#c0392b\",\"#ecf0f1\",\"#bdc3c7\",\"#95a5a6\",\"#7f8c8d\"],onColorSelected:function(){this.element.css({backgroundColor:this.color,color:this.color})}},e.colorPick.prototype={init:function(){var t=this;return this.options,e.proxy(e.fn.colorPick.defaults.onColorSelected,this)(),this.element.click((function(o){if(o.target==o.currentTarget){var n=e(t.element).offset();return o.preventDefault(),t.show(t.element,o.pageX-n.left,o.pageY-n.top),e(\".customColorHash\").val(t.color),e(\".colorPickButton\").click((function(o){return t.color=e(o.target).attr(\"hexValue\"),t.appendToStorage(e(o.target).attr(\"hexValue\")),t.hide(),e.proxy(t.options.onColorSelected,t)(),!1})),e(\".customColorHash\").click((function(e){return!1})).keyup((function(o){var n=e(this).val();0!==n.indexOf(\"#\")&&(n=\"#\"+n),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)?(t.color=n,t.appendToStorage(n),e.proxy(t.options.onColorSelected,t)(),e(this).removeClass(\"error\")):e(this).addClass(\"error\")})),!1}})).blur((function(){return t.element.val(t.color),e.proxy(t.options.onColorSelected,t)(),t.hide(),!1})),e(document).on(\"click\",(function(o){if(!e.contains(t.element[0],o.target))return t.hide(),!0})),this},appendToStorage:function(t){if(!0===e.fn.colorPick.defaults.allowRecent){var o=JSON.parse(localStorage.getItem(\"colorPickRecentItems\"));null==o&&(o=[]),-1==e.inArray(t,o)&&(o.unshift(t),o=o.slice(0,e.fn.colorPick.defaults.recentMax),localStorage.setItem(\"colorPickRecentItems\",JSON.stringify(o)))}},show:function(t,o,n){e(\".colorPickWrapper\").remove(),e(t).prepend('<div class=\"colorPickWrapper\"><div id=\"colorPick\" style=\"display:none;top:'+n+\"px;left:\"+o+'px\"><span>'+e.fn.colorPick.defaults.paletteLabel+\"</span></div></div>\"),jQuery.each(this.palette,(function(t,o){e(\"#colorPick\").append('<div class=\"colorPickButton\" hexValue=\"'+o+'\" style=\"background:'+o+'\"></div>')})),!0===e.fn.colorPick.defaults.allowCustomColor&&e(\"#colorPick\").append('<input type=\"text\" style=\"margin-top:5px\" class=\"customColorHash\" />'),!0===e.fn.colorPick.defaults.allowRecent&&(e(\"#colorPick\").append('<span style=\"margin-top:5px\">Recent:</span>'),null==JSON.parse(localStorage.getItem(\"colorPickRecentItems\"))||JSON.parse(localStorage.getItem(\"colorPickRecentItems\"))==[]?e(\"#colorPick\").append('<div class=\"colorPickButton colorPickDummy\"></div>'):jQuery.each(JSON.parse(localStorage.getItem(\"colorPickRecentItems\")),(function(t,o){if(e(\"#colorPick\").append('<div class=\"colorPickButton\" hexValue=\"'+o+'\" style=\"background:'+o+'\"></div>'),t==e.fn.colorPick.defaults.recentMax-1)return!1}))),e(\"#colorPick\").fadeIn(200)},hide:function(){e(\".colorPickWrapper\").fadeOut(200,(function(){return e(\".colorPickWrapper\").remove(),this}))}}}(jQuery),e}));\n\n\n//# sourceURL=webpack:///../package/dist/@oasis07/data.umd.min.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;