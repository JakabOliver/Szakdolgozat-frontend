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
        const generic_attributes = JSON.parse(localStorage.getItem('generic_attributes')) || {};
        const browser_data = this.getBrowserData();
        fetch(Tracker.HOST + url, {
            method: "POST",
            body: JSON.stringify({ user_id, data, user_data, browser_data, generic_attributes }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
    }
    resetUserAttributes() {
        localStorage.removeItem('user_data');
    }
    resetAttributes() {
        localStorage.removeItem('generic_attributes');
    }
    addUserAttribute(key, value) {
        const userData = JSON.parse(localStorage.getItem('user_data')) || {};
        userData[key] = value;
        localStorage.setItem('user_data', JSON.stringify(userData));
    }
    addAttribute(key, value) {
        const attributes = JSON.parse(localStorage.getItem('generic_attributes')) || {};
        attributes[key] = value;
        localStorage.setItem('generic_attributes', JSON.stringify(attributes));
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
    getBrowserData() {
        const nVer = navigator.appVersion;
        const nAgt = navigator.userAgent;
        let browserName = navigator.appName;
        let fullVersion = '' + parseFloat(navigator.appVersion);
        let majorVersion = parseInt(navigator.appVersion, 10);
        let nameOffset, verOffset, ix;
        // In Opera, the true version is after "OPR" or after "Version"
        if ((verOffset = nAgt.indexOf("OPR")) != -1) {
            browserName = "Opera";
            fullVersion = nAgt.substring(verOffset + 4);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
        // In MS Edge, the true version is after "Edg" in userAgent
        else if ((verOffset = nAgt.indexOf("Edg")) != -1) {
            browserName = "Microsoft Edge";
            fullVersion = nAgt.substring(verOffset + 4);
        }
        // In MSIE, the true version is after "MSIE" in userAgent
        else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
            browserName = "Microsoft Internet Explorer";
            fullVersion = nAgt.substring(verOffset + 5);
        }
        // In Chrome, the true version is after "Chrome"
        else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
            browserName = "Chrome";
            fullVersion = nAgt.substring(verOffset + 7);
        }
        // In Safari, the true version is after "Safari" or after "Version"
        else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
            browserName = "Safari";
            fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
        // In Firefox, the true version is after "Firefox"
        else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
            browserName = "Firefox";
            fullVersion = nAgt.substring(verOffset + 8);
        }
        // In most other browsers, "name/version" is at the end of userAgent
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
            (verOffset = nAgt.lastIndexOf('/'))) {
            browserName = nAgt.substring(nameOffset, verOffset);
            fullVersion = nAgt.substring(verOffset + 1);
            if (browserName.toLowerCase() == browserName.toUpperCase()) {
                browserName = navigator.appName;
            }
        }
        // trim the fullVersion string at semicolon/space if present
        if ((ix = fullVersion.indexOf(";")) != -1)
            fullVersion = fullVersion.substring(0, ix);
        if ((ix = fullVersion.indexOf(" ")) != -1)
            fullVersion = fullVersion.substring(0, ix);
        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }
        return {
            'name': browserName,
            'fullversion': fullVersion,
            'majorversion': majorVersion,
            'appName': navigator.appName,
            'userAgent': navigator.userAgent
        };
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
_global.addAttribute = tracker.addAttribute.bind(tracker); // bind `this` context

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsc0JBQXNCO0FBQzdFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7QUFDM0UsT0FBTyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7QUFDekYsT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vYXNzZXRzL2pzL1RyYWNrZXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zyb250ZW5kLy4vYXNzZXRzL2pzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHV1aWR2NCgpIHtcclxuICAgIHJldHVybiBcIjEyMzEyM1wiO1xyXG59XHJcblxyXG4vKipcclxuICogVGVtcGxhdGUgTmFtZTogTmljZUFkbWluXHJcbiAqIFVwZGF0ZWQ6IEphbiAyOSAyMDI0IHdpdGggQm9vdHN0cmFwIHY1LjMuMlxyXG4gKiBUZW1wbGF0ZSBVUkw6IGh0dHBzOi8vYm9vdHN0cmFwbWFkZS5jb20vbmljZS1hZG1pbi1ib290c3RyYXAtYWRtaW4taHRtbC10ZW1wbGF0ZS9cclxuICogQXV0aG9yOiBCb290c3RyYXBNYWRlLmNvbVxyXG4gKiBMaWNlbnNlOiBodHRwczovL2Jvb3RzdHJhcG1hZGUuY29tL2xpY2Vuc2UvXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyYWNrZXIge1xyXG4gICAgcHJpdmF0ZSB1c2VyX2lkOiBzdHJpbmc7XHJcbiAgICBzdGF0aWMgSE9TVCA9IFwiaHR0cDovL2xvY2FsaG9zdC9cIjtcclxuXHJcbiAgICBwdWJsaWMgdHJhY2tQYWdlTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBwYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudHJhY2soJ2xvZy9wYWdlLXZpc2l0ZWQnLCBkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrRXZlbnQobmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVzID0ge30pIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRyYWNrKCdsb2cvZXZlbnQnLCBkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJhY2sodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHVzZXJfaWQgPSB0aGlzLmdldFVzZXJJZCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJfZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJfZGF0YScpKSB8fHt9O1xyXG4gICAgICAgIGNvbnN0IGdlbmVyaWNfYXR0cmlidXRlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dlbmVyaWNfYXR0cmlidXRlcycpKSB8fHt9O1xyXG4gICAgICAgIGNvbnN0IGJyb3dzZXJfZGF0YT10aGlzLmdldEJyb3dzZXJEYXRhKCk7XHJcbiAgICAgICAgZmV0Y2goVHJhY2tlci5IT1NUICsgdXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt1c2VyX2lkLCBkYXRhLCB1c2VyX2RhdGEsIGJyb3dzZXJfZGF0YSwgZ2VuZXJpY19hdHRyaWJ1dGVzfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIn1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFVzZXJBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyX2RhdGEnKTtcclxuICAgIH1cclxuICAgIHJlc2V0QXR0cmlidXRlcygpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZ2VuZXJpY19hdHRyaWJ1dGVzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVXNlckF0dHJpYnV0ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcl9kYXRhJykpIHx8e307XHJcbiAgICAgICAgdXNlckRhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyX2RhdGEnLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEF0dHJpYnV0ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnZW5lcmljX2F0dHJpYnV0ZXMnKSkgfHx7fTtcclxuICAgICAgICBhdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2VuZXJpY19hdHRyaWJ1dGVzJywgSlNPTi5zdHJpbmdpZnkoYXR0cmlidXRlcykpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRVc2VySWQodXNlcl9pZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy51c2VyX2lkID0gdXNlcl9pZDtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcl9pZCcsIHVzZXJfaWQpO1xyXG4gICAgICAgIHRoaXMucmVzZXRVc2VyQXR0cmlidXRlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlcl9pZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFVzZXJJZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcl9pZCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJfaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRVc2VySWQodXVpZHY0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyX2lkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEJyb3dzZXJEYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IG5WZXIgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbjtcclxuICAgICAgICBjb25zdCBuQWd0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgICAgICBsZXQgYnJvd3Nlck5hbWUgPSBuYXZpZ2F0b3IuYXBwTmFtZTtcclxuICAgICAgICBsZXQgZnVsbFZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgICAgIGxldCBtYWpvclZlcnNpb24gPSBwYXJzZUludChuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgMTApO1xyXG4gICAgICAgIGxldCBuYW1lT2Zmc2V0LCB2ZXJPZmZzZXQsIGl4O1xyXG5cclxuLy8gSW4gT3BlcmEsIHRoZSB0cnVlIHZlcnNpb24gaXMgYWZ0ZXIgXCJPUFJcIiBvciBhZnRlciBcIlZlcnNpb25cIlxyXG4gICAgICAgIGlmICgodmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIk9QUlwiKSkhPS0xKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXJOYW1lID0gXCJPcGVyYVwiO1xyXG4gICAgICAgICAgICBmdWxsVmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs0KTtcclxuICAgICAgICAgICAgaWYgKCh2ZXJPZmZzZXQ9bkFndC5pbmRleE9mKFwiVmVyc2lvblwiKSkhPS0xKVxyXG4gICAgICAgICAgICAgICAgZnVsbFZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQrOCk7XHJcbiAgICAgICAgfVxyXG4vLyBJbiBNUyBFZGdlLCB0aGUgdHJ1ZSB2ZXJzaW9uIGlzIGFmdGVyIFwiRWRnXCIgaW4gdXNlckFnZW50XHJcbiAgICAgICAgZWxzZSBpZiAoKHZlck9mZnNldD1uQWd0LmluZGV4T2YoXCJFZGdcIikpIT0tMSkge1xyXG4gICAgICAgICAgICBicm93c2VyTmFtZSA9IFwiTWljcm9zb2Z0IEVkZ2VcIjtcclxuICAgICAgICAgICAgZnVsbFZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQrNCk7XHJcbiAgICAgICAgfVxyXG4vLyBJbiBNU0lFLCB0aGUgdHJ1ZSB2ZXJzaW9uIGlzIGFmdGVyIFwiTVNJRVwiIGluIHVzZXJBZ2VudFxyXG4gICAgICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQ9bkFndC5pbmRleE9mKFwiTVNJRVwiKSkhPS0xKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXJOYW1lID0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIjtcclxuICAgICAgICAgICAgZnVsbFZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQrNSk7XHJcbiAgICAgICAgfVxyXG4vLyBJbiBDaHJvbWUsIHRoZSB0cnVlIHZlcnNpb24gaXMgYWZ0ZXIgXCJDaHJvbWVcIlxyXG4gICAgICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQ9bkFndC5pbmRleE9mKFwiQ2hyb21lXCIpKSE9LTEpIHtcclxuICAgICAgICAgICAgYnJvd3Nlck5hbWUgPSBcIkNocm9tZVwiO1xyXG4gICAgICAgICAgICBmdWxsVmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs3KTtcclxuICAgICAgICB9XHJcbi8vIEluIFNhZmFyaSwgdGhlIHRydWUgdmVyc2lvbiBpcyBhZnRlciBcIlNhZmFyaVwiIG9yIGFmdGVyIFwiVmVyc2lvblwiXHJcbiAgICAgICAgZWxzZSBpZiAoKHZlck9mZnNldD1uQWd0LmluZGV4T2YoXCJTYWZhcmlcIikpIT0tMSkge1xyXG4gICAgICAgICAgICBicm93c2VyTmFtZSA9IFwiU2FmYXJpXCI7XHJcbiAgICAgICAgICAgIGZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0KzcpO1xyXG4gICAgICAgICAgICBpZiAoKHZlck9mZnNldD1uQWd0LmluZGV4T2YoXCJWZXJzaW9uXCIpKSE9LTEpXHJcbiAgICAgICAgICAgICAgICBmdWxsVmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs4KTtcclxuICAgICAgICB9XHJcbi8vIEluIEZpcmVmb3gsIHRoZSB0cnVlIHZlcnNpb24gaXMgYWZ0ZXIgXCJGaXJlZm94XCJcclxuICAgICAgICBlbHNlIGlmICgodmVyT2Zmc2V0PW5BZ3QuaW5kZXhPZihcIkZpcmVmb3hcIikpIT0tMSkge1xyXG4gICAgICAgICAgICBicm93c2VyTmFtZSA9IFwiRmlyZWZveFwiO1xyXG4gICAgICAgICAgICBmdWxsVmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCs4KTtcclxuICAgICAgICB9XHJcbi8vIEluIG1vc3Qgb3RoZXIgYnJvd3NlcnMsIFwibmFtZS92ZXJzaW9uXCIgaXMgYXQgdGhlIGVuZCBvZiB1c2VyQWdlbnRcclxuICAgICAgICBlbHNlIGlmICggKG5hbWVPZmZzZXQ9bkFndC5sYXN0SW5kZXhPZignICcpKzEpIDxcclxuICAgICAgICAgICAgKHZlck9mZnNldD1uQWd0Lmxhc3RJbmRleE9mKCcvJykpIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyb3dzZXJOYW1lID0gbkFndC5zdWJzdHJpbmcobmFtZU9mZnNldCx2ZXJPZmZzZXQpO1xyXG4gICAgICAgICAgICBmdWxsVmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCsxKTtcclxuICAgICAgICAgICAgaWYgKGJyb3dzZXJOYW1lLnRvTG93ZXJDYXNlKCk9PWJyb3dzZXJOYW1lLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXJOYW1lID0gbmF2aWdhdG9yLmFwcE5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbi8vIHRyaW0gdGhlIGZ1bGxWZXJzaW9uIHN0cmluZyBhdCBzZW1pY29sb24vc3BhY2UgaWYgcHJlc2VudFxyXG4gICAgICAgIGlmICgoaXg9ZnVsbFZlcnNpb24uaW5kZXhPZihcIjtcIikpIT0tMSlcclxuICAgICAgICAgICAgZnVsbFZlcnNpb249ZnVsbFZlcnNpb24uc3Vic3RyaW5nKDAsaXgpO1xyXG4gICAgICAgIGlmICgoaXg9ZnVsbFZlcnNpb24uaW5kZXhPZihcIiBcIikpIT0tMSlcclxuICAgICAgICAgICAgZnVsbFZlcnNpb249ZnVsbFZlcnNpb24uc3Vic3RyaW5nKDAsaXgpO1xyXG5cclxuICAgICAgICBtYWpvclZlcnNpb24gPSBwYXJzZUludCgnJytmdWxsVmVyc2lvbiwxMCk7XHJcbiAgICAgICAgaWYgKGlzTmFOKG1ham9yVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgZnVsbFZlcnNpb24gID0gJycrcGFyc2VGbG9hdChuYXZpZ2F0b3IuYXBwVmVyc2lvbik7XHJcbiAgICAgICAgICAgIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ25hbWUnOmJyb3dzZXJOYW1lLFxyXG4gICAgICAgICAgICAnZnVsbHZlcnNpb24nOmZ1bGxWZXJzaW9uLFxyXG4gICAgICAgICAgICAnbWFqb3J2ZXJzaW9uJzptYWpvclZlcnNpb24sXHJcbiAgICAgICAgICAgICdhcHBOYW1lJzpuYXZpZ2F0b3IuYXBwTmFtZSxcclxuICAgICAgICAgICAgJ3VzZXJBZ2VudCc6bmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7VHJhY2tlcn0gZnJvbSBcIi4vVHJhY2tlclwiO1xyXG5jb25zdCB0cmFja2VyID0gbmV3IFRyYWNrZXIoKTtcclxuLy8gbXVzdCBjYXN0IGFzIGFueSB0byBzZXQgcHJvcGVydHkgb24gd2luZG93XHJcbmNvbnN0IF9nbG9iYWwgPSAod2luZG93IC8qIGJyb3dzZXIgKi8gfHwgZ2xvYmFsIC8qIG5vZGUgKi8pIGFzIGFueVxyXG5fZ2xvYmFsLnBhZ2VMb2FkID0gdHJhY2tlci50cmFja1BhZ2VMb2FkLmJpbmQodHJhY2tlcik7IC8vIGJpbmQgYHRoaXNgIGNvbnRleHRcclxuX2dsb2JhbC50cmFja0V2ZW50ID0gdHJhY2tlci50cmFja0V2ZW50LmJpbmQodHJhY2tlcik7IC8vIGJpbmQgYHRoaXNgIGNvbnRleHRcclxuX2dsb2JhbC5zZXRVc2VySWQgPSB0cmFja2VyLnNldFVzZXJJZC5iaW5kKHRyYWNrZXIpOyAvLyBiaW5kIGB0aGlzYCBjb250ZXh0XHJcbl9nbG9iYWwuYWRkVXNlckF0dHJpYnV0ZSA9IHRyYWNrZXIuYWRkVXNlckF0dHJpYnV0ZS5iaW5kKHRyYWNrZXIpOyAvLyBiaW5kIGB0aGlzYCBjb250ZXh0XHJcbl9nbG9iYWwuYWRkQXR0cmlidXRlID0gdHJhY2tlci5hZGRBdHRyaWJ1dGUuYmluZCh0cmFja2VyKTsgLy8gYmluZCBgdGhpc2AgY29udGV4dFxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9