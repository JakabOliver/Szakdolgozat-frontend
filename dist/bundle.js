/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/Tracker.ts":
/*!******************************!*\
  !*** ./assets/js/Tracker.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tracker: () => (/* binding */ Tracker)
/* harmony export */ });
function uuidv4() {
    return "123123";
}
/**
 * Template Name: NiceAdmin
 * Updated: Jan 29 2024 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
class Tracker {
    trackPageLoad() {
        const data = {
            path: window.location.pathname
        };
        this.track('log/page-visited', data);
    }
    trackEvent(name, attributes = {}) {
        const data = {
            name,
            attributes
        };
        this.track('log/event', data);
    }
    track(url, data) {
        const user_id = this.getUserId();
        const user_data = JSON.parse(localStorage.getItem('user_data')) || {};
        fetch(Tracker.HOST + url, {
            method: "POST",
            body: JSON.stringify({ user_id, data, user_data }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
    }
    resetUserAttributes() {
        localStorage.removeItem('user_data');
    }
    addUserAttribute(key, value) {
        const userData = JSON.parse(localStorage.getItem('user_data')) || {};
        userData[key] = value;
        localStorage.setItem('user_data', JSON.stringify(userData));
    }
    setUserId(user_id) {
        this.user_id = user_id;
        localStorage.setItem('user_id', user_id);
        this.resetUserAttributes();
    }
    getUserId() {
        if (!this.user_id) {
            this.setUserId(localStorage.getItem('user_id'));
        }
        if (!this.user_id) {
            this.setUserId(uuidv4());
        }
        return this.user_id;
    }
}
Tracker.HOST = "http://localhost/";


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./assets/js/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tracker */ "./assets/js/Tracker.ts");

const tracker = new _Tracker__WEBPACK_IMPORTED_MODULE_0__.Tracker();
// must cast as any to set property on window
const _global = (window /* browser */ || __webpack_require__.g /* node */);
_global.pageLoad = tracker.trackPageLoad.bind(tracker); // bind `this` context
_global.trackEvent = tracker.trackEvent.bind(tracker); // bind `this` context
_global.setUserId = tracker.setUserId.bind(tracker); // bind `this` context
_global.addUserAttribute = tracker.addUserAttribute.bind(tracker); // bind `this` context

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7QUFDbEMsTUFBTSxPQUFPLEdBQUcsSUFBSSw2Q0FBTyxFQUFFLENBQUM7QUFDOUIsNkNBQTZDO0FBQzdDLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxxQkFBTSxDQUFDLFVBQVUsQ0FBUTtBQUNsRSxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsc0JBQXNCO0FBQzlFLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7QUFDN0UsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtBQUMzRSxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vYXNzZXRzL2pzL1RyYWNrZXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zyb250ZW5kLy4vYXNzZXRzL2pzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHV1aWR2NCgpIHtcclxuICAgIHJldHVybiBcIjEyMzEyM1wiO1xyXG59XHJcblxyXG4vKipcclxuICogVGVtcGxhdGUgTmFtZTogTmljZUFkbWluXHJcbiAqIFVwZGF0ZWQ6IEphbiAyOSAyMDI0IHdpdGggQm9vdHN0cmFwIHY1LjMuMlxyXG4gKiBUZW1wbGF0ZSBVUkw6IGh0dHBzOi8vYm9vdHN0cmFwbWFkZS5jb20vbmljZS1hZG1pbi1ib290c3RyYXAtYWRtaW4taHRtbC10ZW1wbGF0ZS9cclxuICogQXV0aG9yOiBCb290c3RyYXBNYWRlLmNvbVxyXG4gKiBMaWNlbnNlOiBodHRwczovL2Jvb3RzdHJhcG1hZGUuY29tL2xpY2Vuc2UvXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyYWNrZXIge1xyXG4gICAgcHJpdmF0ZSB1c2VyX2lkOiBzdHJpbmc7XHJcbiAgICBzdGF0aWMgSE9TVCA9IFwiaHR0cDovL2xvY2FsaG9zdC9cIjtcclxuXHJcbiAgICBwdWJsaWMgdHJhY2tQYWdlTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBwYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudHJhY2soJ2xvZy9wYWdlLXZpc2l0ZWQnLCBkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrRXZlbnQobmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVzID0ge30pIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRyYWNrKCdsb2cvZXZlbnQnLCBkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJhY2sodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHVzZXJfaWQgPSB0aGlzLmdldFVzZXJJZCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJfZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJfZGF0YScpKSB8fHt9O1xyXG4gICAgICAgIGZldGNoKFRyYWNrZXIuSE9TVCArIHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dXNlcl9pZCwgZGF0YSwgdXNlcl9kYXRhfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIn1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFVzZXJBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyX2RhdGEnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyQXR0cmlidXRlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2RhdGEnKSkgfHx7fTtcclxuICAgICAgICB1c2VyRGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJfZGF0YScsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFVzZXJJZCh1c2VyX2lkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVzZXJfaWQgPSB1c2VyX2lkO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyX2lkJywgdXNlcl9pZCk7XHJcbiAgICAgICAgdGhpcy5yZXNldFVzZXJBdHRyaWJ1dGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcklkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyX2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VXNlcklkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2lkJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMudXNlcl9pZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFVzZXJJZCh1dWlkdjQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJfaWQ7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1RyYWNrZXJ9IGZyb20gXCIuL1RyYWNrZXJcIjtcclxuY29uc3QgdHJhY2tlciA9IG5ldyBUcmFja2VyKCk7XHJcbi8vIG11c3QgY2FzdCBhcyBhbnkgdG8gc2V0IHByb3BlcnR5IG9uIHdpbmRvd1xyXG5jb25zdCBfZ2xvYmFsID0gKHdpbmRvdyAvKiBicm93c2VyICovIHx8IGdsb2JhbCAvKiBub2RlICovKSBhcyBhbnlcclxuX2dsb2JhbC5wYWdlTG9hZCA9IHRyYWNrZXIudHJhY2tQYWdlTG9hZC5iaW5kKHRyYWNrZXIpOyAvLyBiaW5kIGB0aGlzYCBjb250ZXh0XHJcbl9nbG9iYWwudHJhY2tFdmVudCA9IHRyYWNrZXIudHJhY2tFdmVudC5iaW5kKHRyYWNrZXIpOyAvLyBiaW5kIGB0aGlzYCBjb250ZXh0XHJcbl9nbG9iYWwuc2V0VXNlcklkID0gdHJhY2tlci5zZXRVc2VySWQuYmluZCh0cmFja2VyKTsgLy8gYmluZCBgdGhpc2AgY29udGV4dFxyXG5fZ2xvYmFsLmFkZFVzZXJBdHRyaWJ1dGUgPSB0cmFja2VyLmFkZFVzZXJBdHRyaWJ1dGUuYmluZCh0cmFja2VyKTsgLy8gYmluZCBgdGhpc2AgY29udGV4dFxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9